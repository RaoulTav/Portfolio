import Image from "next/image";

const stack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["C#", ".NET 9", "ASP.NET Core", "Semantic Kernel", "Swagger / OpenAPI"],
    "Cloud & AI": ["Microsoft Azure", "Azure OpenAI", "Azure Document Intelligence", "Azure Blob Storage"],
};

const features = [
  {
    number: "01",
    title: "Document retrieval",
    description:
      "Retrieve notarial documents using natural-language requests. An AI agent communicates with NotaFile's existing API to find the requested document.",
  },
  {
    number: "02",
    title: "Smart document redaction",
    description:
      "Automatically identify and blur sensitive information with AI, or manually select words and passages directly in an integrated PDF viewer.",
  },
  {
    number: "03",
    title: "Document export",
    description: "Download the final document after the requested operations have been completed.",
  },
  {
    number: "04",
    title: "Business & web research",
    description: "Retrieve company information from Belgium's Crossroads Bank for Enterprises (BCE) and search trusted websites using Bing Search.",
  },
];

export default function NotaFileDetails() {
  return (
    <div className="notafile-details">
      {/* PROJECT INTRODUCTION */}
      <section className="notafile-intro">
        <p className="eyebrow">AI / DOCUMENT INTELLIGENCE</p>

        <h1>NotaFile<span>.</span></h1>

        <p className="notafile-lead">
          An AI-powered assistant designed to simplify document management and automate repetitive tasks in the notarial sector.
        </p>

        <div className="notafile-meta">
          <span>Internship project</span><span>MIC · Belgium</span><span>Team of 3 interns</span>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="notafile-stack">
        <p className="eyebrow">TECHNOLOGY STACK</p>

        <div className="notafile-stack-grid">
          {Object.entries(stack).map(([category, technologies]) => (
            <div key={category} className="notafile-stack-group">
              <h3>{category}</h3>

              <div className="technology-list">
                {technologies.map((technology) => (<span key={technology}>{technology}</span>))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="notafile-section">
        <p className="eyebrow">01 / THE CHALLENGE</p>

        <h2>Making document management<br />less time-consuming<span>.</span></h2>

        <div className="notafile-text">
          <p>
            Notarial offices handle large volumes of documents every day. Finding the right information, retrieving specific files and preparing 
            documents often involve repetitive manual operations.
          </p>

          <p>
            These processes can take valuable time, increase the risk of human error and make document management more complex than it needs to be.
          </p>

          <p>
            NotaFile wanted to explore how artificial intelligence could help modernise these workflows, making document operations 
            simpler, faster and more accessible.
          </p>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="notafile-section">
        <p className="eyebrow">02 / THE SOLUTION</p>

        <h2>An assistant that does<br />more than answer questions<span>.</span></h2>

        <div className="notafile-text">
          <p>
            Together with two other interns, I contributed to building an AI-powered assistant that allows notaries and their 
            collaborators to interact with documents through natural-language requests.
          </p>

          <p>
            Instead of navigating multiple tools and performing each operation manually, users can simply describe what they need. AI agents 
            interpret their requests and coordinate the operations required to carry them out.
          </p>
        </div>

        <div className="notafile-features">
          {features.map((feature) => (
            <article key={feature.number} className="notafile-feature">
              <span className="notafile-feature-number">{feature.number}</span>

              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PERSONAL CONTRIBUTION */}
      <section className="notafile-contribution">
        <p className="eyebrow">MY CONTRIBUTION</p>

        <h2>Turning user requests<br />into document operations<span>.</span></h2>

        <p>
          My work focused primarily on document retrieval, document redaction and document export. I contributed to implementing the 
          AI-driven workflows that connect user requests to the operations performed on documents.
        </p>

        <p>
          I also worked within a collaborative development environment, alongside two other interns, contributing to the wider assistant 
          and its integration with NotaFile's existing services.
        </p>
      </section>

      {/* PROJECT VISUAL */}
      <section className="notafile-visual">
        <p className="eyebrow">03 / A CLOSER LOOK</p>

        <h2>The assistant in action<span>.</span></h2>

        <div className="notafile-image">
          <Image src="/images/notafile.png" alt="NotaFile AI assistant interface" width={1600} height={1000} className="notafile-screenshot" />
        </div>

        <p className="notafile-image-caption">NotaFile — AI assistant interface</p>
      </section>

      {/* THE IMPACT */}
      <section className="notafile-section notafile-impact">
        <p className="eyebrow">04 / THE IMPACT</p>

        <h2>Less manual work. <br />More meaningful interactions<span>.</span></h2>

        <div className="notafile-text">
          <p>
            By bringing document retrieval, redaction and export into a single AI-assisted workflow, NotaFile demonstrates how artificial intelligence can
            support everyday tasks in the notarial sector.
          </p>

          <p>
            The solution aims to reduce repetitive operations, simplify access to document information and make sensitive document handling more accessible.
          </p>

          <p>
            More than simply introducing AI into an existing workflow, the project explores a more natural way for professionals to interact 
            with their documents.
          </p>
        </div>
      </section>
    </div>
  );
}
