function Certifications() {
  const certifications = [
    {
      number: "01",
      title: "Oracle AI Foundations Associate",
      issuer: "Oracle",
      status: "Certified",
    },
    {
      number: "02",
      title: "Web Development Certificate",
      issuer: "Skill India",
      status: "Certified",
    },
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">05 / CERTIFICATIONS</p>

          <h2>
            Learning beyond the
            <span> classroom.</span>
          </h2>
        </div>

        <div className="certifications-list">
          {certifications.map((certification) => (
            <div
              className="certification-item"
              key={certification.number}
            >
              <span className="certification-number">
                {certification.number}
              </span>

              <div className="certification-content">
                <h3>{certification.title}</h3>

                <p>{certification.issuer}</p>
              </div>

              <span className="certification-status">
                {certification.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;