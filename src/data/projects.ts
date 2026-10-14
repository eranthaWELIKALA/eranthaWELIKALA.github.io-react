import flowerInventoryDesktopImg from "@/assets/images/projects/flower-inventory-desktop.png";
import smpeaImg from "@/assets/images/projects/smpea.png";
import bmsImg from "@/assets/images/projects/bms.png";
import imsImg from "@/assets/images/projects/ims.png";
import peraEMSImg from "@/assets/images/projects/pera-ems.png";
import portfolioImg from "@/assets/images/projects/portfolio.png";
import altS3Img from "@/assets/images/projects/alt-s3.png";
import gitProfileManagerImg from "@/assets/images/projects/git-profile-manager.png";
import gitProfileManagerDesktopImg from "@/assets/images/projects/git-profile-manager-desktop.png";
import mockRESTAPIImage from "@/assets/images/projects/mock-rest-api.png";
import peraCricketImg from "@/assets/images/projects/pera-cricket.png";
import rtqwmsImg from "@/assets/images/projects/rtwqms.png";
import openHoursImg from "@/assets/images/projects/open-hours.png";
import audioVisualizationImg from "@/assets/images/projects/audio-visualization.png";
import mtuteImg from "@/assets/images/projects/mtute.png";
import mtuteMobileImg from "@/assets/images/projects/mtute-mobile.png";
import thunderCricketImg from "@/assets/images/projects/thunder-cricket.png";
import frsImg from "@/assets/images/projects/face-recognition-system.png";
import reviewDeskImg from "@/assets/images/projects/review-desk.png";
import cricketLkImg from "@/assets/images/projects/cricket-lk.png";
import chargeLkImg from "@/assets/images/projects/charge-lk.png";

const rawProjects = [
  {
    title: "Review Desk",
    description: "Design-review platform where teams upload screenshots into sections and reviewers leave feedback pinned to the exact spot on a design — no reviewer account needed. Static frontend on GitHub Pages backed by a Cloudflare Worker, with Clerk sign-in, role-based spaces (owners, editors, reviewers), email invites, Cloudflare D1 for accounts and audit logs, and versioned storage in a private GitHub repo.",
    categories: ["Web", "Full-stack"],
    technologies: ["JavaScript", "Cloudflare Workers", "Cloudflare D1", "Clerk", "GitHub API", "Resend"],
    image: reviewDeskImg,
    github: "https://github.com/eranthaWELIKALA/review-desk",
    demo: "https://eranthawelikala.github.io/review-desk/",
  },
  {
    title: "Cricket.lk",
    description: "Ball-by-ball cricket scorer built as an installable, offline-first PWA. Tracks full limited-overs matches (extras, free hits, run rates, batting/bowling figures, fall of wickets), plus tournaments with points tables and NRR, team and player rosters, configurable playing-condition presets, stats leaderboards, auto-computed MVP, and PNG/PDF scorecard export. Optional sign-in and sync via Supabase.",
    categories: ["Web", "Mobile"],
    technologies: ["JavaScript", "HTML", "CSS", "PWA", "Service Worker", "Supabase"],
    image: cricketLkImg,
    github: "https://github.com/eranthaWELIKALA/cricket-lk",
    demo: "https://eranthawelikala.github.io/cricket-lk/",
  },
  {
    title: "Charge.lk",
    description: "EV charging time and cost calculator for Sri Lanka, built as an installable PWA with no build step or dependencies. Saves your cars between visits, models the charge curve, works offline, and runs a real-time charging session that alerts you before the charge finishes using a service worker, notifications and the Wake Lock API.",
    categories: ["Web", "Mobile"],
    technologies: ["JavaScript", "HTML", "CSS", "PWA", "Service Worker"],
    image: chargeLkImg,
    github: "https://github.com/eranthaWELIKALA/charge-lk",
    demo: "https://eranthawelikala.github.io/charge-lk/",
  },
  {
    title: "Flower Inventory Management",
    description: "Electron desktop application for florists to manage inventory, suppliers and sales. Built with React + TypeScript (Vite) on the frontend, Prisma ORM for MySQL on the backend, and packaged as a native desktop app with Electron. Includes internationalization, theming, and packaged macOS installers.",
    categories: ["Desktop", "Backend / API"],
    technologies: ["Electron", "React", "TypeScript", "Tailwind CSS", "Prisma", "Node.js"],
    image: flowerInventoryDesktopImg,
    github: "https://github.com/eranthaWELIKALA/flower-inventory-management"
  },
  {
    title: "Stock Market Prediction Platform",
    description:
      "An ensemble-based stock market prediction system combining multiple ML models for improved accuracy.",
    categories: ["Full-stack", "AI / Machine Learning"],
    technologies: ["Python", "Angular", "NodeJS", "Flask", "Firebase"],
    image: smpeaImg,
    github: "https://github.com/eranthaWELIKALA/Stock_Market_Prediction_Platform.git",
    demo: "",
  },
  {
    title: "Alternative for AWS S3 Bucket",
    description:
      "A local, containerized alternative to AWS S3 bucket for file storage and retrieval.",
    categories: ["Full-stack"],
    technologies: ["NodeJS", "EJS", "Docker"],
    image: altS3Img,
    github: "https://github.com/eranthaWELIKALA/Alternative-AWS-S3-Bucket.git",
    demo: "https://hub.docker.com/r/eranthawelikala/storage-service",
  },
  {
    title: "Git Profile Manager (Desktop Edition)",
    description: "Electron-based desktop app that manages multiple Git profiles through an intuitive UI, executing shell automation under the hood.",
    categories: ["Desktop", "DevOps"],
    technologies: ["Electron", "NodeJS", "Shell Commands (exec)"],
    image: gitProfileManagerDesktopImg,
    github: "https://github.com/eranthaWELIKALA/GIT-Profile-Manager/tree/desktop",
    demo: "https://eranthawelikala.github.io/GIT-Profile-Manager/",
  },
  {
    title: "Git Profile Manager (CLI Version)",
    description: "Command-line tool for managing multiple Git profiles, built with Batch and Shell scripts.",
    categories: ["CLI / Tools", "DevOps"],
    technologies: ["Batch", "Shell", "Inno Setup"],
    image: gitProfileManagerImg,
    github: "https://github.com/eranthaWELIKALA/GIT-Profile-Manager/tree/cli",
    demo: "https://eranthawelikala.github.io/GIT-Profile-Manager/",
  },
  {
    title: "Mock REST API",
    description:
      "A configurable mock API for testing frontend clients without an actual backend.",
    categories: ["Backend / API"],
    technologies: ["NodeJS", "Docker"],
    image: mockRESTAPIImage,
    github: "https://github.com/eranthaWELIKALA/ResponseHandler.git",
    demo: "https://hub.docker.com/r/eranthawelikala/mock-rest-api",
  },
  {
    title: "Pera Cricket Database",
    description:
      "A statistics tracker for University of Peradeniya Cricket Team to record and view match performances.",
    categories: ["Web", "Full-stack"],
    technologies: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    image: peraCricketImg,
    github: "https://github.com/eranthaWELIKALA/PeraCricket.git",
    demo: "",
  },
  {
    title: "Real-time Water Quality Monitoring",
    description:
      "IoT-based system for monitoring water quality parameters in real-time using embedded sensors.",
    categories: ["Web", "Full-stack", "Embedded / IoT"],
    technologies: ["VueJS", "PHP", "MySQL", "AVR"],
    image: rtqwmsImg,
    github: "https://github.com/eranthaWELIKALA/RealTimeWaterQualityMeasurementSystem.git",
    demo: "",
  },
  {
    title: "mtute.lk",
    description:
      "Educational platform connecting institutes, instructors, and students for online learning and resource sharing.",
    categories: ["Web", "Full-stack"],
    technologies: ["Angular", "NodeJS", "Firebase", "AWS EC2"],
    image: mtuteImg,
    github: "",
    demo: "",
  },
  {
    title: "mtute Mobile",
    description:
      "Mobile app companion to mtute.lk, enabling students to access papers and short notes easily.",
    categories: ["Mobile"],
    technologies: ["Ionic"],
    image: mtuteMobileImg,
    github: "https://github.com/eranthaWELIKALA/Question-App.git",
    demo: "",
  },
  {
    title: "Thunder Cricket Database",
    description:
      "Web app for Thunder Cricket Club, Kandy — inspired by the Pera Cricket database for match records.",
    categories: ["Web", "Full-stack"],
    technologies: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    image: thunderCricketImg,
    github: "",
    demo: "",
  },
  {
    title: "Audio Visualization",
    description:
      "Music visualization web app that animates real-time sound frequencies.",
    categories: ["Web", "Full-stack"],
    technologies: ["JavaScript", "NodeJS"],
    image: audioVisualizationImg,
    github: "https://github.com/eranthaWELIKALA/AudioVisualization.git",
    demo: "",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing professional experience, projects, and technical skills.",
    categories: ["Web", "Full-stack"],
    technologies: ["React", "Vite", "TailwindCSS", "GitHub Pages"],
    image: portfolioImg,
    github: "https://github.com/eranthaWELIKALA/eranthaWELIKALA.github.io-react.git",
    demo: "https://eranthawelikala.github.io",
  },
  {
    title: "Bank Management System",
    description:
      "Desktop app for managing banking operations and bill payments, built with Java Swing.",
    categories: ["Desktop"],
    technologies: ["Java"],
    image: bmsImg,
    github: "https://github.com/eranthaWELIKALA/Bank_Management_System",
    demo: "",
  },
  {
    title: "Member Information System",
    description:
      "Web app for managing Old Boys’ Association member details and records.",
    categories: ["Web", "Full-stack"],
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    image: imsImg,
    github: "https://github.com/eranthaWELIKALA/Information-Management-System.git",
    demo: "",
  },
  {
    title: "Pera EMS",
    description:
      "Web-based health center management system for University of Peradeniya.",
    categories: ["Web", "Full-stack"],
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    image: peraEMSImg,
    github: "https://github.com/eranthaWELIKALA/PeraEMS-Project.git",
    demo: "",
  },
  {
    title: "Open Hours",
    description:
      "Mobile app that helps users check open/closed stores and supports promotional listings.",
    categories: ["Mobile"],
    technologies: ["Android (Java)"],
    image: openHoursImg,
    github: "",
    demo: "",
  },
  {
    title: "Face Recognition System",
    description:
      "Face recognition project using Python and computer vision libraries.",
    categories: ["Web", "AI / Machine Learning"],
    technologies: ["Python"],
    image: frsImg,
    github:
      "https://github.com/eranthaWELIKALA/Face-Recognition-through-Vision-and-Computer-Vision.git",
    demo: "",
  },
];

export interface Project {
  title: string;
  description: string;
  categories: string[];
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  /** Short type label shown in EraOS, e.g. "PWA" or "Desktop app" */
  kind: string;
  /** One-line summary for lists and previews */
  summary: string;
  /** Button label when the demo link is not a live demo (e.g. Docker Hub) */
  demoLabel?: string;
}

const meta: Record<string, Pick<Project, "kind" | "summary" | "demoLabel">> = {
  "Review Desk": { kind: "Web app", summary: "Design-review platform: reviewers pin feedback to the exact spot on a screenshot, no account needed." },
  "Cricket.lk": { kind: "PWA", summary: "Offline-first ball-by-ball cricket scorer with tournaments, NRR and scorecard export." },
  "Charge.lk": { kind: "PWA", summary: "EV charging time and cost calculator for Sri Lanka, with live charging alerts." },
  "Flower Inventory Management": { kind: "Desktop app", summary: "Electron app for florists to manage inventory, suppliers and sales." },
  "Stock Market Prediction Platform": { kind: "ML platform", summary: "Ensemble of ML models that predicts stock movements with improved accuracy." },
  "Alternative for AWS S3 Bucket": { kind: "Service", summary: "Local, containerised alternative to an AWS S3 bucket for file storage.", demoLabel: "Docker Hub" },
  "Git Profile Manager (Desktop Edition)": { kind: "Desktop app", summary: "Switch between multiple Git profiles through a friendly desktop UI.", demoLabel: "Website" },
  "Git Profile Manager (CLI Version)": { kind: "CLI tool", summary: "Command-line tool for managing multiple Git profiles.", demoLabel: "Website" },
  "Mock REST API": { kind: "Service", summary: "Configurable mock API for testing frontends without a real backend.", demoLabel: "Docker Hub" },
  "Pera Cricket Database": { kind: "Web app", summary: "Stats tracker for the University of Peradeniya cricket team." },
  "Real-time Water Quality Monitoring": { kind: "IoT system", summary: "IoT system monitoring water quality in real time with embedded sensors." },
  "mtute.lk": { kind: "Web platform", summary: "Learning platform connecting institutes, instructors and students." },
  "mtute Mobile": { kind: "Mobile app", summary: "Companion app giving students easy access to papers and short notes." },
  "Thunder Cricket Database": { kind: "Web app", summary: "Match records web app for Thunder Cricket Club, Kandy." },
  "Audio Visualization": { kind: "Web app", summary: "Music visualiser animating sound frequencies in real time." },
  "Portfolio Website": { kind: "Website", summary: "This portfolio: experience, projects and skills." },
  "Bank Management System": { kind: "Desktop app", summary: "Java Swing app for banking operations and bill payments." },
  "Member Information System": { kind: "Web app", summary: "Member records for an Old Boys’ Association." },
  "Pera EMS": { kind: "Web app", summary: "Health centre management system for the University of Peradeniya." },
  "Open Hours": { kind: "Mobile app", summary: "Check which stores are open, with promotional listings." },
  "Face Recognition System": { kind: "ML project", summary: "Face recognition with Python and computer-vision libraries." },
};

export const projects: Project[] = rawProjects.map((p) => ({
  ...p,
  kind: meta[p.title]?.kind ?? "Project",
  summary: meta[p.title]?.summary ?? p.description,
  demoLabel: meta[p.title]?.demoLabel,
}));
