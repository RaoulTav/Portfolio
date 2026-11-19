import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="#home" className="logo">Raoul TAVERNEL <span>.</span></Link>

      <nav className="main-nav">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/#skills">Skills</Link>
        <Link href="/#contact">Contact</Link>
      </nav>

      <Link href="#contact" className="header-cta">Let's talk <span>↗</span></Link>
    </header>
  );
}
