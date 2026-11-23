import Image from "next/image";

const stack = {
  Backend: ["C#", "ASP.NET Core MVC 6"],
  Database: ["Microsoft SQL Server", "SQL"],
  Architecture: ["MVC", "Layered Architecture"],
};

const features = [
  {
    number: "01",
    title: "User accounts & profiles",
    description: "Create an account, authenticate securely and manage personal information through an individual user profile.",
  },
  {
    number: "02",
    title: "Service discovery",
    description: "Browse available services and search for specific skills. Users can publish, modify and remove the services they offer.",
  },
  {
    number: "03",
    title: "Service exchanges",
    description: "Request services from other members, follow ongoing requests and manage the services provided to the community.",
  },
  {
    number: "04",
    title: "Time credit management",
    description:
      "Track service hours, report completed work and confirm the hours received. Credits are automatically transferred once the exchange is validated.",
  },
];

export default function ServiSwapDetails() {
  return (
    <div className="serviswap-details">

      {/* PROJECT INTRODUCTION */}
      <section className="serviswap-intro">
        <p className="eyebrow">FULL-STACK WEB APPLICATION</p>

        <h1>ServiSwap<span>.</span></h1>

        <p className="serviswap-lead">A community-driven platform where people exchange skills and services using time credits instead of money.</p>

        <a className="repository-link" href="https://github.com/RaoulTav/ServiSwap" target="_blank" rel="noopener noreferrer">
          View source on GitHub <span aria-hidden="true">↗</span>
        </a>

        <div className="serviswap-meta">
          <span>Academic project</span><span>Team project</span><span>ASP.NET Core MVC</span>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="serviswap-stack">
        <p className="eyebrow">TECHNOLOGY STACK</p>

        <div className="serviswap-stack-grid">
          {Object.entries(stack).map(([category, technologies]) => (
            <div key={category} className="serviswap-stack-group">
              <h3>{category}</h3>

              <div className="technology-list">{technologies.map((technology) => (<span key={technology}>{technology}</span>))}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="serviswap-section">
        <p className="eyebrow">01 / THE CHALLENGE</p>

        <h2>What if time was the only<br />currency that mattered<span>.</span></h2>

        <div className="serviswap-text">
          <p>
            The goal was to create a non-commercial service exchange platform where people could share their skills and help one another 
            without exchanging money.
          </p>

          <p>
            Whether it is gardening, tutoring, sewing, painting or computer assistance, every service has the same value: the time spent providing it.
          </p>

          <p>
            The main challenge was to design a fair and reliable system that connects users, manages service requests and keeps 
            track of every exchange through a shared time-credit balance.
          </p>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="serviswap-section">
        <p className="eyebrow">02 / THE SOLUTION</p>

        <h2>Turning skills into<br />shared opportunities<span>.</span></h2>

        <div className="serviswap-text">
          <p>
            ServiSwap provides a web platform where users can offer their skills, discover services provided by others and exchange 
            their time through a simple credit-based system.
          </p>

          <p>
            Each new member starts with 10 time credits. Providing one hour of service earns one credit, while receiving one hour of 
            service costs one credit. This makes every skill equally valuable, regardless of its nature.
          </p>
        </div>

        <figure className="serviswap-image-block">
          <div className="serviswap-image">
            <Image src="/images/serviswap1.png" alt="ServiSwap homepage" width={1600} height={1000} className="serviswap-screenshot" />
          </div>

          <figcaption>ServiSwap — Main platform interface</figcaption>
        </figure>

        <div className="serviswap-features">
          {features.map((feature) => (
            <article key={feature.number} className="serviswap-feature">
              <span className="serviswap-feature-number">{feature.number}</span>

              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>

        <figure className="serviswap-image-block">
          <div className="serviswap-image">
            <Image src="/images/serviswap2.png" alt="ServiSwap service management interface" width={1600} height={1000} className="serviswap-screenshot" />
          </div>

          <figcaption>ServiSwap — Service discovery and management</figcaption>
        </figure>
      </section>

      {/* TIME CREDIT SYSTEM */}
      <section className="serviswap-credit">
        <p className="eyebrow">THE TIME-CREDIT SYSTEM</p>

        <h2>Every hour has<br />the same value<span>.</span></h2>

        <div className="serviswap-credit-content">
          <div className="serviswap-credit-item">
            <span className="serviswap-credit-symbol">+</span>
            <h3>Give an hour</h3>
            <p>Providing one hour of service earns one time credit.</p>
          </div>

          <div className="serviswap-credit-item">
            <span className="serviswap-credit-symbol">−</span>
            <h3>Receive an hour</h3>
            <p>Receiving one hour of service costs one time credit.</p>
          </div>
        </div>

        <p className="serviswap-credit-note">
          Once a service is completed, the provider reports the hours worked. The requester confirms them, triggering the corresponding credit transfer.
        </p>
      </section>

      {/* MY CONTRIBUTION */}
      <section className="serviswap-contribution">
        <p className="eyebrow">MY CONTRIBUTION</p>

        <h2>From requirements<br />to a structured application<span>.</span></h2>

        <p>
          This project gave me the opportunity to work through the complete application development process, starting with requirements 
          analysis and system modelling before moving on to implementation.
        </p>

        <p>
          Particular attention was given to UML modelling, including use case, sequence and class diagrams. These models helped us understand 
          the system's requirements and define its structure before development.
        </p>

        <p>
          The application was built using ASP.NET Core MVC, following a structured approach to separate the different responsibilities of the application.
        </p>
      </section>

      <section className="serviswap-visual">
        <p className="eyebrow">03 / A CLOSER LOOK</p>

        <h2>A platform built around<br />community and collaboration<span>.</span></h2>

        <figure className="serviswap-image-block">
          <div className="serviswap-image">
            <Image src="/images/serviswap3.png"
              alt="ServiSwap time credit management interface"
              width={1600}
              height={1000}
              className="serviswap-screenshot"
            />
          </div>

          <figcaption>ServiSwap — Time credit management</figcaption>
        </figure>
      </section>

      {/* THE IMPACT */}
      <section className="serviswap-section serviswap-impact">
        <p className="eyebrow">04 / THE IMPACT</p>

        <h2>Building a community<br />beyond money<span>.</span></h2>

        <div className="serviswap-text">
          <p>
            ServiSwap explores an alternative way of exchanging services, where everyone's time and skills have equal value.
          </p>

          <p>
            By combining service discovery, user interaction and time-credit management in one platform, the application provides a 
            structured framework for encouraging mutual support and community engagement.
          </p>

          <p>
            The project demonstrates how a well-defined set of business rules can turn a simple concept into a complete, functional web application.
          </p>
        </div>
      </section>

    </div>
  );
}