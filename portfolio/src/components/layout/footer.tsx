import { cacheLife } from "next/cache";
import SocialLinks from "./social-links";

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
      <SocialLinks className="footer-social-links" />
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
