export interface Experience {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    title: "Associate Tech Lead",
    company: "AtLink Communications (Pvt) Ltd",
    period: "Jan 2026 - Present",
    highlights: [
      "Own architectural design and technical decision-making for key product components, ensuring scalability, maintainability, and alignment with long-term product goals.",
      "Lead development of a core product module (map management), including system design, integration patterns, and feature ownership.",
      "Drive requirement gathering and analysis by collaborating with stakeholders; author feature documents, user stories, and technical specifications.",
      "Translate business requirements into actionable technical tasks and coordinate task distribution with a Senior Software Engineer to ensure timely delivery.",
      "Research, propose, and validate technology stack decisions in collaboration with senior architects before implementation.",
      "Design and implement CI/CD pipelines using Docker and Jenkins, reducing deployment effort and release turnaround time by over 50%.",
      "Enforce coding standards and best practices across the team, improving SonarQube quality gate pass rate by 10%.",
      "Mentor junior engineers and interns through design, development, and delivery phases, ensuring high-quality, production-ready outcomes."
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "AtLink Communications (Pvt) Ltd",
    period: "Jan 2023 - Dec 2025",
    highlights: [
      "Led architectural design decisions across multiple web projects, improving scalability and maintainability.",
      "Advocated coding standards and best practices, increasing SonarQube quality gate pass rate by 10%.",
      "Individually designed and implemented CI/CD pipelines with Docker and Jenkins, reducing deployment effort by over 50%.",
      "Mentored interns, guiding them through full project cycles with zero bug reports during delivery.",
      "Contributed to full-stack enterprise-grade solutions using Angular, Node.js, and .NET Framework.",
    ],
  },
  {
    title: "Software Engineer",
    company: "AtLink Communications (Pvt) Ltd",
    period: "Aug 2020 - Dec 2022",
    highlights: [
      "Delivered new features and resolved complex bugs in agile web and mobile projects.",
      "Conducted R&D and knowledge-sharing sessions on microservice architectures.",
      "Spearheaded the development of three client-facing prototypes to support business expansion.",
      "Worked across Angular, Node.js, and Django-based full-stack systems with integrated mobile solutions (Android, iOS, Ionic).",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "AtLink Communications (Pvt) Ltd",
    period: "Feb 2019 - Jul 2019",
    highlights: [
      "Contributed to implementing new features for key web applications.",
      "Specialized in debugging and performance optimization for smoother user experiences.",
      "Researched and implemented emerging technologies relevant to team projects.",
      "Enhanced communication solutions to improve system interaction and usability.",
    ],
  },
];
