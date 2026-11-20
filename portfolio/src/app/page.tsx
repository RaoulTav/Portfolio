import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import About from "@/components/home/about";
import Skills from "@/components/home/skills";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />

        <section className="contact" id="contact">
          <div className="section-container">
            <p className="eyebrow">04 / GET IN TOUCH</p>

            <h2>Have something<br />in mind<span>?</span></h2>

            <p>I'm always interested in meeting people, exchanging ideas and exploring new opportunities.</p>

            <a href="mailto:raoultavernel@hotmail.com" className="contact-link">Let's talk ↗</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}