import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const GITHUB_URL = "https://github.com/shubhangshusaikia-dev";

const LINKEDIN_URL =
  "https://linkedin.com/in/Shubhangshu-saikia-461221231";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="availability">
            <span
              className="availability-dot"
              aria-hidden="true"
            ></span>

            <span>Open to internships & technical projects</span>
          </div>

          <p className="hero-eyebrow">
            B.TECH / INSTRUMENTATION ENGINEERING / 2ND YEAR
          </p>

          <h1>
            Shubhangshu
            <br />
            <span>Saikia</span>
          </h1>

          <p className="hero-role">
            Instrumentation Engineering Student building with
            electronics, embedded systems and software.
          </p>

         <p className="hero-description">
  I work across electronics, embedded systems, robotics and
  software development, with a focus on building practical
  projects and learning through implementation.
</p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="button button-primary"
            >
              View Projects
              <ArrowUpRight
                size={17}
                aria-hidden="true"
              />
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              aria-label="Visit my GitHub profile"
            >
              <Github
                size={17}
                aria-hidden="true"
              />
              GitHub
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              aria-label="Visit my LinkedIn profile"
            >
              <Linkedin
                size={17}
                aria-hidden="true"
              />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="profile-frame">
            <img
              src="/profile.jpg"
              alt="Shubhangshu Saikia"
              className="profile-image"
            />
          </div>

          <div className="hero-terminal">
            <div className="terminal-header">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>

              <small>currently_building</small>
            </div>

            <div className="terminal-content">
              <p>
                <span>01</span> embedded systems
              </p>

              <p>
                <span>02</span> instrumentation projects
              </p>

              <p>
                <span>03</span> robotics
              </p>

              <p>
                <span>04</span> AI + edge exploration
              </p>
            </div>

            <div className="terminal-footer">
              Jorhat Engineering College
              <br />
              Assam, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;