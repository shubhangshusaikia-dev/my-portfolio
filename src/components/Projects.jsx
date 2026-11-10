
import { ArrowUpRight, Github } from "lucide-react";

const GITHUB_URL = "https://github.com/shubhangshusaikia-dev";

const projects = [
  {
    number: "01",
    title: "IntelliBelt",
    problem: "Intelligent conveyor belt health monitoring",
    recognition: "Top 3 — SIH 2026 Internal Round | JEC",
    description:
      "An AI-driven multimodal monitoring system proposed for detecting conveyor belt damage and joint rupture in the iron ore mining industry. The project combines camera-based inspection with vibration, acoustic, temperature, current and speed sensing. Hardware prototyping and AI-based sensor fusion are under development.",
    technologies: [
      "ESP32",
      "OV7670 Camera",
      "MPU6500",
      "MAX9814",
      "ACS712",
      "NTC Thermistor",
      "Hall Sensor",
      "HC-SR04",
      "AI / ML",
    ],
  },
  {
    number: "02",
    title: "GNCAS Android Application",
    problem: "Bird awareness & community participation",
    description:
      "An Android application developed for Golaghat Nature Connect & Avian Society, designed to support bird awareness, reporting, events and community participation.",
    technologies: [
      "Kotlin / Java",
      "Android Studio",
      "Firebase",
      "Cloudinary",
    ],
  },
  {
    number: "03",
    title: "BloomBasket",
    problem: "Modern e-commerce experience",
    description:
      "A modern e-commerce web application with product browsing, authentication, shopping cart functionality and an admin/product management system.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Supabase",
    ],
  },
  {
    number: "04",
    title: "Line Following Robot",
    problem: "Autonomous path following",
    description:
      "An autonomous robot that follows a predefined path using sensors and motor control.",
    technologies: [
      "Arduino",
      "IR Sensors",
      "Motor Driver",
      "Embedded C / C++",
    ],
  },
  {
    number: "05",
    title: "Obstacle Avoiding Robot",
    problem: "Autonomous obstacle detection",
    description:
      "An autonomous robot capable of detecting obstacles and changing direction using distance sensing.",
    technologies: [
      "Arduino",
      "HC-SR04",
      "Servo Motor",
      "Motor Driver",
    ],
  },
  {
    number: "06",
    title: "LPG Gas Leakage Detection System",
    problem: "Gas leakage safety",
    description:
      "A safety-focused embedded system that detects gas leakage and activates an alarm.",
    technologies: [
      "Arduino",
      "Gas Sensor",
      "Buzzer",
      "Embedded Programming",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">03 / PROJECTS</p>

          <h2>
            Things I&apos;ve
            <span> built.</span>
          </h2>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className="project-item"
              key={project.number}
            >
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-problem">
                  {project.problem}
                </span>
              </div>

              <div className="project-content">
                <div className="project-description">
                  <h3>{project.title}</h3>

                  {project.recognition && (
                    <span className="project-recognition">
                      {project.recognition}
                    </span>
                  )}

                  <p>{project.description}</p>
                </div>

                <div className="project-details">
                  <div className="project-technologies">
                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  <div className="project-actions">
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github
                        size={14}
                        aria-hidden="true"
                      />
                      GitHub
                      <ArrowUpRight
                        size={13}
                        aria-hidden="true"
                      />
                    </a>

                    <span className="project-link project-link-disabled">
                      Demo unavailable
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
