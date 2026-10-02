import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava,
  faPython,
  faPhp,
  faJs,
  faHtml5,
  faReact,
  faLaravel,
  faLinux,
  faGitAlt,
  faRaspberryPi,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faTerminal,
  faFlask,
  faDatabase,
  faBolt,
  faPlug,
  faServer,
  faNetworkWired,
  faGlobe,
  faCubes,
  faShieldHalved,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

/* Inline SVG for icons not available in Font Awesome Free */
function ArchLinuxIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      aria-hidden="true"
      role="img"
    >
      <path d="M12 0C9.62 3.55 8.36 5.83 7.31 8.22c1.1.98 2.43 1.83 4.69 2.57-1.57-.58-2.79-1.26-3.69-2.04C7.06 11.59 5.22 16.3 0 24c3.73-2.73 6.52-4.55 9.27-5.33.13-.72.3-1.44.52-2.16l-.04-.01c-.83-2.16-1.17-3.88-.97-5.88.93 2.27 2.16 3.96 3.65 5.51a20.5 20.5 0 0 1 1.6 1.59c2.7.83 5.43 2.63 9.97 5.38-.46-.81-1.25-2.13-2.18-3.71a22.7 22.7 0 0 0-4.51-2.1c-.34-.11-.68-.21-1.03-.29l-.03.01A28.6 28.6 0 0 1 14.05 13c2.12.52 3.95 1.34 5.7 2.53C17.05 9.77 15.45 6.3 12 0Z" />
    </svg>
  );
}

function SkillIcon({ skill }) {
  if (skill.customIcon) {
    const CustomIcon = skill.customIcon;
    return <CustomIcon className="skills__tag-icon" />;
  }
  return <FontAwesomeIcon icon={skill.icon} className="skills__tag-icon" />;
}

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: faCode,
    skills: [
      { name: 'Java', icon: faJava },
      { name: 'Python', icon: faPython },
      { name: 'PHP', icon: faPhp },
      { name: 'JavaScript', icon: faJs },
      { name: 'C++', icon: faCode },
      { name: 'Bash', icon: faTerminal },
      { name: 'HTML/CSS', icon: faHtml5 },
    ],
  },
  {
    title: 'Frameworks',
    icon: faCubes,
    skills: [
      { name: 'Laravel', icon: faLaravel },
      { name: 'Inertia.js', icon: faCubes },
      { name: 'React', icon: faReact },
      { name: 'Python Flask', icon: faFlask },
      { name: 'REST APIs', icon: faPlug },
    ],
  },
  {
    title: 'Databases',
    icon: faDatabase,
    skills: [
      { name: 'PostgreSQL', icon: faDatabase },
      { name: 'Supabase', icon: faBolt },
      { name: 'MySQL', icon: faDatabase },
      { name: 'SQLite', icon: faDatabase },
    ],
  },
  {
    title: 'Systems & DevOps',
    icon: faServer,
    skills: [
      { name: 'Linux', icon: faLinux },
      { name: 'Arch Linux', customIcon: ArchLinuxIcon },
      { name: 'Ubuntu', icon: faLinux },
      { name: 'Raspberry Pi', icon: faRaspberryPi },
      { name: 'Git/GitHub', icon: faGitAlt },
      { name: 'Workstation Setup', icon: faDesktop },
    ],
  },
  {
    title: 'Networking',
    icon: faNetworkWired,
    skills: [
      { name: 'TCP/IP', icon: faNetworkWired },
      { name: 'DNS/DHCP', icon: faGlobe },
      { name: 'Subnetting', icon: faShieldHalved },
      { name: 'Cisco Packet Tracer', icon: faNetworkWired },
      { name: 'SSH', icon: faTerminal },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section" aria-label="Technical skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills__grid">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="skills__category">
              <div className="skills__category-header">
                <FontAwesomeIcon icon={category.icon} className="skills__category-icon" />
                <h3 className="skills__category-title">{category.title}</h3>
              </div>
              <div className="skills__tags">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="skills__tag">
                    <SkillIcon skill={skill} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
