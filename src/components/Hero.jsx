import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileLines, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/markkkx000',
    icon: faGithub,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mark-kenneth-nudo-409248417/',
    icon: faLinkedin,
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:kennethnudo27@gmail.com',
    icon: faEnvelope,
  },
  {
    id: 'resume',
    label: 'Resume',
    href: `${import.meta.env.BASE_URL}resume.pdf`,
    icon: faFileLines,
  },
];

function Hero() {
  return (
    <section id="hero" className="hero section" aria-label="Introduction">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__greeting animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Hi, my name is
          </p>
          <h1 className="hero__name animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Mark Kenneth Nudo
          </h1>
          <h2 className="hero__title animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Full-Stack Developer
          </h2>
          <p className="hero__tagline animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            I build robust web and mobile applications with modern frameworks, from pixel-perfect interfaces to scalable back-end services and systems infrastructure.
          </p>

          <div className="hero__social animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {SOCIAL_LINKS.map(({ id, label, href, icon }) => (
              <a
                key={id}
                href={href}
                className="hero__social-link"
                aria-label={label}
                title={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <FontAwesomeIcon icon={icon} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <a href="#about" className="hero__scroll-indicator animate-fade-in" style={{ animationDelay: '0.8s' }} aria-label="Scroll to about section">
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </div>
    </section>
  );
}

export default Hero;
