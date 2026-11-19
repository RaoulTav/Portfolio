import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project, }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="project">
      <span className="project-number">{project.number}</span>

      <div className="project-info">
        <p className="project-category">{project.category}</p>

        <h3>{project.name}</h3>

        <p className="project-description">{project.description}</p>

        <div className="technology-list">{project.technologies.map((tech) => (<span key={tech}>{tech}</span>))}</div>
      </div>

      <span className="project-arrow">↗</span>
    </Link>
  );
}