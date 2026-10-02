import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const CONTACT_ITEMS = [
  {
    id: 'footer-github',
    label: 'GitHub',
    text: 'markkkx000',
    href: 'https://github.com/markkkx000',
    icon: faGithub,
  },
  {
    id: 'footer-linkedin',
    label: 'LinkedIn',
    text: 'Mark Kenneth Nudo',
    href: 'https://www.linkedin.com/in/mark-kenneth-nudo-409248417/',
    icon: faLinkedin,
  },
  {
    id: 'footer-email',
    label: 'Email',
    text: 'kennethnudo27@gmail.com',
    href: 'mailto:kennethnudo27@gmail.com',
    icon: faEnvelope,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer" role="contentinfo">
      <div className="container footer__container">
        <div className="footer__top">
          <h2 className="footer__heading">Get in Touch</h2>
          <p className="footer__subtext">
            Have a project in mind or just want to connect? Feel free to reach out.
          </p>

          <ul className="footer__contact-list" role="list">
            {CONTACT_ITEMS.map(({ id, label, text, href, icon }) => (
              <li key={id} className="footer__contact-item">
                <a
                  href={href}
                  className="footer__contact-link"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="footer__contact-icon">
                    <FontAwesomeIcon icon={icon} />
                  </span>
                  <span className="footer__contact-details">
                    <span className="footer__contact-label">{label}</span>
                    <span className="footer__contact-text">{text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            {currentYear} Mark Kenneth Nudo. All rights reserved.
          </p>
          <a href="#hero" className="footer__back-to-top" aria-label="Back to top" title="Back to top">
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
