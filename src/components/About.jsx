function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">01 / ABOUT</p>

          <h2>
            Engineering through
            <span> building.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <p>
              I&apos;m a second-year B.Tech student in Instrumentation
              Engineering at Jorhat Engineering College, Assam.
            </p>

            <p>
              My interests sit at the intersection of electronics,
              embedded systems, robotics and software. I enjoy
              building practical hardware-software projects and
              understanding how the different parts work together.
            </p>

            <p>
              I&apos;m also exploring AI and machine learning
              fundamentals, particularly how these technologies can
              eventually be applied to embedded and edge systems.
            </p>
          </div>

          <div className="about-facts">
            <div className="fact">
              <span>Education</span>
              <strong>
                B.Tech — Instrumentation Engineering
              </strong>
            </div>

            <div className="fact">
              <span>College</span>
              <strong>Jorhat Engineering College, Assam</strong>
            </div>

            <div className="fact">
              <span>Current focus</span>
              <strong>
                Embedded systems, robotics & web development
              </strong>
            </div>

            <div className="fact">
              <span>Approach</span>
              <strong>Learn by building practical projects</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;