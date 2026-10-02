# Portfolio

Personal developer portfolio built with **React + Vite**. Designed for deployment to GitHub Pages via GitHub Actions.

## Features

- Single-page portfolio with Hero, About, Skills, Projects, and Contact sections
- Fetches **pinned repositories** from the GitHub GraphQL API (with static JSON fallback)
- **Dark / Light mode** toggle, persisted via `localStorage` and respecting `prefers-color-scheme`
- Fully responsive (mobile-first) with accessible, semantic HTML
- Lightweight — no heavy UI libraries, just React + plain CSS + Font Awesome icons
- Automatic deployment to GitHub Pages on push to `main`

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Local Development

```bash
# 1. Clone the repo
git clone https://github.com/markkkx000/profile.git
cd profile

# 2. Install dependencies
npm install

# 3. (Optional) Configure environment variables
cp .env.example .env
# Edit .env with your GitHub username and token

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## GitHub Token Setup (for Pinned Repos)

The GitHub GraphQL API requires authentication to fetch pinned repositories. Without a token, the site falls back to the static data in `src/data/fallbackRepos.json`.

### Generating a Token

1. Go to [GitHub Settings > Personal Access Tokens > Fine-grained tokens](https://github.com/settings/tokens?type=beta)
2. Click **Generate new token**
3. Give it a descriptive name (e.g., `portfolio-pinned-repos`)
4. Under **Repository access**, select **Public Repositories (read-only)**
5. No additional permissions are needed
6. Click **Generate token** and copy it

### For Local Development

Add the token to your `.env` file:

```
VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### For GitHub Actions Deployment

1. In your repo, go to **Settings > Secrets and variables > Actions**
2. Click **New repository secret**
3. Name: `GH_TOKEN`
4. Value: paste your token
5. Click **Add secret**

The workflow automatically injects this as `VITE_GITHUB_TOKEN` at build time.

> **Security Note:** The token is embedded in the built JavaScript bundle. Since it only has read-only access to public repos, this is acceptable for a portfolio site. If you prefer zero token exposure, simply maintain the `src/data/fallbackRepos.json` file manually and skip the token setup entirely.

## Deployment to GitHub Pages

### One-Time Setup

1. Push this repo to GitHub
2. Go to **Settings > Pages**
3. Under **Build and deployment > Source**, select **GitHub Actions**
4. That's it — the included workflow handles the rest

### How It Works

On every push to `main`, the GitHub Actions workflow:

1. Checks out the code
2. Installs dependencies (`npm ci`)
3. Builds the Vite app (`npm run build`)
4. Deploys the `dist/` folder to GitHub Pages

### Custom Domain (Optional)

To use a custom domain:

1. In **Settings > Pages**, add your domain
2. Add a `CNAME` file in the `public/` directory with your domain:
   ```
   yourdomain.com
   ```
3. Configure your DNS provider with the appropriate records

### Repo Name Considerations

If deploying to `https://username.github.io/repo-name/` (not a user site), update the `base` in `vite.config.js`:

```js
export default defineConfig({
  base: '/repo-name/',
  // ...
})
```

For a user site (`https://username.github.io/`), keep `base: '/'`.

## Updating Pinned Repos

### With GitHub Token (Automatic)

Pin/unpin repos on your GitHub profile, and the site updates on next build.

### Without Token (Manual)

Edit `src/data/fallbackRepos.json` with your repo data:

```json
[
  {
    "name": "repo-name",
    "description": "A brief description",
    "url": "https://github.com/username/repo-name",
    "homepageUrl": "",
    "primaryLanguage": {
      "name": "JavaScript",
      "color": "#f1e05a"
    },
    "stargazerCount": 10,
    "forkCount": 2
  }
]
```

## Customization

### Personal Info

Update the following files with your details:

| What | Where |
|------|-------|
| Name, tagline, social links | `src/components/Hero.jsx` |
| Bio text | `src/components/About.jsx` |
| Skills and categories | `src/components/Skills.jsx` |
| Contact links | `src/components/Footer.jsx` |
| Page title, meta description | `index.html` |
| GitHub username | `.env` or `.env.example` |

### Accent Color

Change the accent hue in `src/index.css`:

```css
:root {
  --accent-hue: 239;   /* indigo — change to any hue 0–360 */
  --accent-sat: 84%;
}
```

## Project Structure

```
profile/
├── .github/workflows/deploy.yml   # GitHub Actions workflow
├── public/                        # Static assets
├── src/
│   ├── components/                # React components
│   │   ├── About.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── Navbar.jsx / .css
│   │   ├── ProjectCard.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   └── Skills.jsx / .css
│   ├── data/
│   │   └── fallbackRepos.json     # Static fallback repo data
│   ├── hooks/
│   │   └── usePinnedRepos.js      # Custom hook for fetching repos
│   ├── utils/
│   │   └── github.js              # GitHub GraphQL API client
│   ├── App.jsx / .css             # Root component
│   ├── index.css                  # Global styles & design tokens
│   └── main.jsx                   # Entry point
├── .env.example                   # Environment variable template
├── index.html                     # HTML template
├── package.json
└── vite.config.js
```

## Tech Stack

- **React 19** — UI library
- **Vite** — Build tool and dev server
- **Font Awesome** — Icon library (tree-shaken, only used icons are bundled)
- **CSS Custom Properties** — Theming and design tokens
- **GitHub GraphQL API** — Pinned repository data

## License

MIT
