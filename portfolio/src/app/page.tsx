import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

const projects = [
  {
    number: "01",
    name: "NotaFile",
    category: "AI / Document Intelligence",
    description: "An AI-powered assistant designed to streamline document processing in the notarial sector.",
    technologies: [".NET 10", "Next.js", "Azure AI", "Semantic Kernel"],
  },
  {
    number: "02",
    name: "ServiSwap",
    category: "Full-stack Development",
    description: "A service-exchange platform connecting people through a community-based credit system.",
    technologies: ["C#", "ASP.NET Core", "MySQL"],
  },
  {
    number: "03",
    name: "Multiplayer Game Server",
    category: "Systems Programming",
    description: "A multiclient game server built around non-blocking TCP communication and a custom protocol.",
    technologies: ["C", "Linux", "TCP", "PostgreSQL"],
  },
];

const skills = [ "C#", ".NET", "Java", "JavaScript", "TypeScript", "Python", "ASP.NET Core", "Next.js", "SQL", "Azure", ];

export default async function Home() {
  const currentYear = await getCurrentYear();

  return (
    <>
      <header className="site-header">
        <a href="#home" className="logo">
          N<span>.</span>
        </a>

        <nav className="main-nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="header-cta">Let's talk <span>↗</span></a>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <p className="eyebrow"><span className="status-dot" />JUNIOR APPLICATION DEVELOPER · BELGIUM</p>
          <h1>Building digital<br />experiences with<br /><span>purpose.</span></h1>
          <div className="hero-bottom">
            <p>I'm a software developer passionate about technology, problem-solving and creating meaningful digital solutions.</p>
            <a href="#work" className="text-link">Explore my work <span>↓</span></a>
          </div>
          <div className="hero-decoration">DEV / 001</div>
        </section>

        <section className="work section-container" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>Things I've built<span>.</span></h2>
            </div>
            <p className="section-note">A selection of personal and professional projects.</p>
          </div>
          
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <span className="project-number">{project.number}</span>

                <div className="project-info">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="technology-list">
                    {project.technologies.map((tech) => (<span key={tech}>{tech}</span>))}
                  </div>
                </div>

                <span className="project-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-container" id="about">
          <p className="eyebrow">02 / A LITTLE ABOUT ME</p>

          <div className="about-content">
            <h2>Curious by nature.<br />Developer by passion.</h2>

            <div>
              <p>I enjoy turning ideas into practical solutions. My journey has taught me the importance of curiosity, perseverance and collaboration.</p>
              <p>From application development to artificial intelligence, I'm always eager to explore new technologies and keep growing.</p>
            </div>
          </div>
        </section>

        <section className="skills section-container" id="skills">
          <p className="eyebrow">03 / MY TOOLBOX</p>
          <div className="section-heading">
            <h2>Technologies I work with<span>.</span></h2>
          </div>

          <div className="skills-list">{skills.map((skill) => (<span key={skill}>{skill}</span>))}</div>
        </section>

        <section className="contact" id="contact">
          <div className="section-container">
            <p className="eyebrow">04 / GET IN TOUCH</p>
            <h2>Have something <br />in mind<span>?</span></h2>
            <p>I'm always interested in meeting people, exchanging ideas and exploring new opportunities.</p>
            <a href="#home" className="contact-link">Back to the top ↑</a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-container">
        <span>© {currentYear} · N.</span>
        <span>Designed & built with curiosity.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
