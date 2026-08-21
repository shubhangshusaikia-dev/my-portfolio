import { Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "shubhangshu123@gmail.com";

const GITHUB_URL =
  "https://github.com/shubhangshusaikia-dev";

const LINKEDIN_URL =
  "https://linkedin.com/in/Shubhangshu-saikia-461221231";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">06 / CONTACT</p>

          <h2>
            Have a project or
            <span> opportunity?</span>
          </h2>
        </div>

        <div className="contact-content">
          <div className="contact-intro">
            <p>
              I&apos;m interested in internships, engineering
              projects, robotics, embedded systems and software
              development.
            </p>

            <p>
              If you have an interesting project, collaboration
              opportunity or internship opening, feel free to
              connect with me.
            </p>
          </div>

          <div className="contact-links">
            <a
              href={`mailto:${EMAIL}`}
              className="contact-link"
              aria-label="Send me an email"
            >
              <div className="contact-icon">
                <Mail
                  size={19}
                  aria-hidden="true"
                />
              </div>

              <div>
                <span>Email</span>
                <strong>{EMAIL}</strong>
              </div>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="Visit my LinkedIn profile"
            >
              <div className="contact-icon">
                <Linkedin
                  size={19}
                  aria-hidden="true"
                />
              </div>

              <div>
                <span>LinkedIn</span>
                <strong>Shubhangshu Saikia</strong>
              </div>
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="Visit my GitHub profile"
            >
              <div className="contact-icon">
                <Github
                  size={19}
                  aria-hidden="true"
                />
              </div>

              <div>
                <span>GitHub</span>
                <strong>shubhangshusaikia-dev</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;