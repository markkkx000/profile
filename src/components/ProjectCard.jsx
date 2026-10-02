import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeFork, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './ProjectCard.css';

function ProjectCard({ repo, index }) {
  const { name, description, url, primaryLanguage, stargazerCount, forkCount } = repo;

  return (
    <article
      className="project-card"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="project-card__header">
        <h3 className="project-card__name">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            {name}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-card__external-icon" />
          </a>
        </h3>
      </div>

      {description && (
        <p className="project-card__description">{description}</p>
      )}

      <div className="project-card__meta">
        {primaryLanguage && (
          <span className="project-card__language">
            <span
              className="project-card__language-dot"
              style={{ backgroundColor: primaryLanguage.color }}
              aria-hidden="true"
            />
            {primaryLanguage.name}
          </span>
        )}

        {stargazerCount > 0 && (
          <span className="project-card__stat" aria-label={`${stargazerCount} stars`}>
            <FontAwesomeIcon icon={faStar} />
            {stargazerCount}
          </span>
        )}

        {forkCount > 0 && (
          <span className="project-card__stat" aria-label={`${forkCount} forks`}>
            <FontAwesomeIcon icon={faCodeFork} />
            {forkCount}
          </span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
