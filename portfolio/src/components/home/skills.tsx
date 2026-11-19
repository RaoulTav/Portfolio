const skills = [
  "C#",
  ".NET",
  "Java",
  "JavaScript",
  "TypeScript",
  "Python",
  "ASP.NET Core",
  "Next.js",
  "SQL",
  "Azure",
];

export default function Skills() {
  return (
    <section className="skills section-container" id="skills">
      <p className="eyebrow">03 / MY TOOLBOX</p>

      <div className="section-heading">
        <h2>Technologies I work with<span>.</span></h2>
      </div>

      <div className="skills-list">{skills.map((skill) => (<span key={skill}>{skill}</span>))}</div>
    </section>
  );
}
