export interface Project {
  slug: string;
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    slug: "notafile",
    number: "01",
    name: "NotaFile",
    category: "AI / Document Intelligence",
    description: "An AI-powered assistant designed to streamline document processing in the notarial sector.",
    technologies: [ ".NET 10", "Next.js", "Azure AI", "Semantic Kernel", ],
  },
  {
    slug: "serviswap",
    number: "02",
    name: "ServiSwap",
    category: "Full-stack Development",
    description: "A service-exchange platform connecting people through a community-based credit system.",
    technologies: [ "C#", "ASP.NET Core", "MySQL", ],
  },
  {
    slug: "game-server",
    number: "03",
    name: "Multiplayer Game Server",
    category: "Systems Programming",
    description: "A multiclient game server built around non-blocking TCP communication and a custom protocol.",
    technologies: [ "C", "Linux", "TCP", "PostgreSQL", ],
  },
];