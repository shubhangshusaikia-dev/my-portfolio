import {
  Cpu,
  Code2,
  Wrench,
  Brain,
} from "lucide-react";

const skillGroups = [
  {
    title: "Electronics & Embedded",
    icon: Cpu,
    skills: [
      "Arduino",
      "ESP32",
      "Sensors",
      "Actuators",
      "Embedded Systems",
      "IoT",
      "Basic PCB / Electronics",
    ],
  },

  {
    title: "Programming",
    icon: Code2,
    skills: [
      "C",
      "C++",
      "Python",
      "JavaScript",
    ],
  },

  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
    ],
  },

  {
    title: "AI / ML",
    icon: Brain,
    skills: [
      "AI Fundamentals",
      "Machine Learning Fundamentals",
      "Edge AI Exploration",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">02 / SKILLS</p>

          <h2>
            Tools I use to
            <span> build things.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                className="skill-group"
                key={group.title}
              >
                <div className="skill-group-header">
                  <div className="skill-icon">
                    <Icon
                      size={18}
                      aria-hidden="true"
                    />
                  </div>

                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="skills-note">
          Skill levels are not represented with artificial
          percentages. These are technologies and areas I
          currently use, study, or explore through projects.
        </p>
      </div>
    </section>
  );
}

export default Skills;