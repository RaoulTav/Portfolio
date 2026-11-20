import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import NotaFileDetails from "@/components/projects/notafile";
import ServiSwapDetails from "@/components/projects/serviswap";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string; }>;
}

async function ProjectDetails({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  if (project.slug === "notafile") {
    return <NotaFileDetails />;
  }

  if (project.slug === "serviswap") {
    return <ServiSwapDetails />;
  }

  return (
    <>
      <p className="eyebrow">
        {project.number} / {project.category}
      </p>

      <h1>
        {project.name}<span>.</span>
      </h1>

      <p className="project-description">
        {project.description}
      </p>

      <h2>Technologies</h2>

      <div className="technology-list">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <p className="project-placeholder">
        More details about this project coming soon.
      </p>
    </>
  );
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <>
      <Header />

      <main className="project-detail section-container">
        <Link href="/#work" className="text-link">
          ← Back to projects
        </Link>

        <Suspense
          fallback={
            <p className="project-placeholder">
              Loading project details...
            </p>
          }
        >
          <ProjectDetails params={params} />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}