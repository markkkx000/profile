import fallbackRepos from '../data/fallbackRepos.json';

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'markkkx000';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || '';

const PINNED_REPOS_QUERY = `
  query {
    user(login: "${GITHUB_USERNAME}") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            homepageUrl
            stargazerCount
            forkCount
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`;

export async function fetchPinnedRepos() {
  if (!GITHUB_TOKEN) {
    return fallbackRepos;
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: PINNED_REPOS_QUERY }),
    });

    if (!response.ok) {
      console.warn('GitHub API responded with status', response.status, '- using fallback data');
      return fallbackRepos;
    }

    const data = await response.json();

    if (data.errors) {
      console.warn('GitHub GraphQL errors:', data.errors);
      return fallbackRepos;
    }

    const repos = data?.data?.user?.pinnedItems?.nodes;
    if (!repos || repos.length === 0) {
      return fallbackRepos;
    }

    return repos;
  } catch (error) {
    console.warn('Failed to fetch pinned repos:', error.message);
    return fallbackRepos;
  }
}
