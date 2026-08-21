import { Github, Linkedin } from "lucide-react";

const GITHUB_URL = "https://github.com/shubhangshusaikia-dev";

const LINKEDIN_URL =
  "https://linkedin.com/in/Shubhangshu-saikia-461221231";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <a
          href="#home"
          className="footer-logo"
          aria-label="Back to home"
        >
          SS<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Shubhangshu Saikia
        </p>

        <div className="footer-links">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={15} aria-hidden="true" />
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} aria-hidden="true" />
          </a>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;