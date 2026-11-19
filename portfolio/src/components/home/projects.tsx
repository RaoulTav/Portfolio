
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/projectcard";

export default function Projects() {
  return (
    <section className="work section-container" id="work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2>Things I've built<span>.</span></h2>
        </div>

        <p className="section-note">A selection of personal and professional projects.</p>
      </div>

      <div className="project-list">{projects.map((project) => (<ProjectCard key={project.slug} project={project} />))}</div>
    </section>
  );
}
