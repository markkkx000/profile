import { useState, useEffect } from 'react';
import { fetchPinnedRepos } from '../utils/github';

export function usePinnedRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchPinnedRepos();
        if (!cancelled) {
          setRepos(data);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { repos, loading, error };
}
