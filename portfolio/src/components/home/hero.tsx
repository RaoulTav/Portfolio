import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero section-container" id="home">
      <div className="hero-banner">
        <Image src="/images/banner.jpg" alt="Build. Solve. Learn. Together." width={1400} height={350} loading="eager" className="serviswap-screenshot" />
      </div>

      <div className="hero-bottom">
        <p>
          I enjoy understanding problems, exploring possibilities and building practical applications. Always curious, always learning, and 
          convinced that great things are built together.
        </p>

        <a href="#work" className="text-link">Explore my work <span>↓</span></a>
      </div>

      <div className="hero-decoration">DEV / 001</div>
    </section>
  );
}