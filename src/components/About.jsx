import './About.css';

function About() {
  return (
    <section id="about" className="about section" aria-label="About me">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about__content">
          <p>
            I am a Computer Engineering graduate and full-stack developer with hands-on experience building production web applications
            using Laravel, React, Inertia.js, and PostgreSQL. During my internship at the Department of Agrarian Reform, I co-engineered
            an HR portal and built an anti-fraud QR code attendance system from the ground up.
          </p>
          <p>
            Beyond web development, I have a strong foundation in systems administration and IoT. My thesis project involved designing
            a networked energy monitoring system using ESP32, MQTT, and a Raspberry Pi backend. I daily-drive Arch Linux and enjoy
            automating workflows with Bash scripting.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
