import { useEffect, useState } from "react";
import { Github, Menu, X } from "lucide-react";

const GITHUB_URL =
  "https://github.com/shubhangshusaikia-dev";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Shubhangshu Saikia - Home"
        >
          SS<span>.</span>
        </a>

        <nav
          id="main-navigation"
          className={`navbar-links ${
            menuOpen ? "navbar-links-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            aria-label="Visit Shubhangshu Saikia on GitHub"
          >
            <Github size={17} aria-hidden="true" />
            <span>GitHub</span>
          </a>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            {menuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;