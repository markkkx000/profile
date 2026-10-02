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
  faWrench,
  faGlobe,
  faCubes,
  faShieldHalved,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

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
      { name: 'Arch Linux', icon: faTerminal },
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
                    <FontAwesomeIcon icon={skill.icon} className="skills__tag-icon" />
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
