import Image from "next/image";

const socialProfiles = [
  {
    label: "GitHub",
    href: "https://github.com/raoultav",
    iconSrc: "/images/github.png",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raoul-tavernel-4820ab32b",
    iconSrc: "/images/lin.png",
  },
];

export default function SocialLinks({ className }: { className: string }) {
  return (
    <div className={`social-links ${className}`}>
      {socialProfiles.map(({ label, href, iconSrc }) => (
        <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" >
          <Image src={iconSrc} alt="" aria-hidden="true" width={50} height={50} />
        </a>
      ))}
    </div>
  );
}
