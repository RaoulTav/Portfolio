import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="site-footer section-container">
      <span>© {currentYear} · Raoul TAVERNEL.</span>
      <span>Designed & built with curiosity.</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
