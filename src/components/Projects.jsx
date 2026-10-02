import { usePinnedRepos } from '../hooks/usePinnedRepos';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  const { repos, loading, error } = usePinnedRepos();

  return (
    <section id="projects" className="projects section" aria-label="Pinned projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        {loading && (
          <div className="projects__loading" aria-live="polite">
            <div className="projects__grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="project-card project-card--skeleton" aria-hidden="true">
                  <div className="skeleton skeleton--title" />
                  <div className="skeleton skeleton--text" />
                  <div className="skeleton skeleton--text skeleton--short" />
                  <div className="skeleton skeleton--meta" />
                </div>
              ))}
            </div>
          </div>
        )}

        {error && (
          <p className="projects__error" role="alert">
            Unable to load projects. Showing cached data.
          </p>
        )}

        {!loading && (
          <div className="projects__grid">
            {repos.map((repo, index) => (
              <ProjectCard key={repo.name} repo={repo} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
