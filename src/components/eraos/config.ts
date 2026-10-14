import type { CSSProperties } from "react";
import { Globe, type LucideIcon } from "lucide-react";
import teaHills from "@/assets/images/eraos/teahills.svg";
import aurora from "@/assets/images/eraos/aurora.svg";
import dunes from "@/assets/images/eraos/dunes.svg";
import ocean from "@/assets/images/eraos/ocean.svg";
import peaks from "@/assets/images/eraos/peaks.svg";

export type AppId = "about" | "finder" | "browser" | "career" | "skills" | "contact" | "term" | "settings";

export interface AppDef {
  label: string;
  title: string;
  glyph: string;
  bg: string;
  w: number;
  h: number;
  mono?: boolean;
  icon?: LucideIcon;
}

export const APP_ORDER: AppId[] = ["about", "finder", "browser", "career", "skills", "contact", "term", "settings"];

export const APPS: Record<AppId, AppDef> = {
  about: { label: "About Me", title: "About Me", glyph: "EW", bg: "linear-gradient(135deg,#7c4ddb,#b25ad9)", w: 700, h: 640 },
  finder: { label: "Projects", title: "Projects", glyph: "▦", bg: "linear-gradient(135deg,#ff8a4c,#ff4f7b)", w: 1140, h: 720 },
  browser: { label: "Browser", title: "Browser", glyph: "", icon: Globe, bg: "linear-gradient(135deg,#3aa0ff,#5a4dff)", w: 1120, h: 740 },
  career: { label: "Career", title: "Career", glyph: "↗", bg: "linear-gradient(135deg,#2bd4a4,#1a8fd6)", w: 780, h: 700 },
  skills: { label: "Skills", title: "Skills", glyph: "✦", bg: "linear-gradient(135deg,#f7b733,#fc4a1a)", w: 800, h: 600 },
  contact: { label: "Contact", title: "Contact", glyph: "@", bg: "linear-gradient(135deg,#43c6ac,#2b7cff)", w: 1000, h: 680 },
  term: { label: "Terminal", title: "Terminal", glyph: ">_", bg: "#1d1a2e", w: 780, h: 520, mono: true },
  settings: { label: "Wallpaper", title: "Wallpaper & Desktop", glyph: "◐", bg: "linear-gradient(135deg,#5b7d6a,#d98a6c)", w: 760, h: 640 },
};

export const PROJECT_WINDOW = { w: 940, h: 760 };

export interface Wallpaper {
  id: string;
  name: string;
  blurb: string;
  src: string;
}

export const WALLPAPERS: Wallpaper[] = [
  { id: "teahills", name: "Tea Hills", blurb: "Dawn over the misty tea country of the Sri Lankan highlands.", src: teaHills },
  { id: "aurora", name: "Aurora", blurb: "Soft violet and teal light drifting over a night sky.", src: aurora },
  { id: "dunes", name: "Dunes", blurb: "Warm desert dunes at sunset.", src: dunes },
  { id: "ocean", name: "Moonlit Ocean", blurb: "Layered waves under a bright moon.", src: ocean },
  { id: "peaks", name: "Night Peaks", blurb: "Starry mountain ridges with a violet glow.", src: peaks },
];

export const PROJECT_CATEGORIES = ["All", "Web", "Mobile", "Full-stack", "Desktop", "Backend / API", "DevOps", "CLI / Tools", "AI / Machine Learning", "Embedded / IoT"];

export const SKILL_GROUPS = [
  { name: "Frontend", color: "#b9a3ff", items: ["Angular", "React", "Vue.js", "Next.js", "HTML", "CSS"] },
  { name: "Backend", color: "#7ee2a8", items: ["Node.js", "Express.js", "NestJS", "Django", "Laravel", ".NET", "Spring Boot", "REST APIs"] },
  { name: "Mobile", color: "#ffb547", items: ["Android (Java)", "iOS (Obj-C / Swift)", "Ionic", "React Native"] },
  { name: "Databases", color: "#6cb6ff", items: ["MySQL", "PostgreSQL", "MongoDB", "MSSQL", "Redis", "Firebase"] },
  { name: "DevOps & Cloud", color: "#ff8fb1", items: ["Docker", "Jenkins", "AWS", "SonarQube", "ELK Stack", "Nginx", "CI/CD"] },
  { name: "Languages & tools", color: "#cfc8ec", items: ["TypeScript", "JavaScript", "Java", "Python", "PHP", "Git", "QGIS", "JIRA", "Figma"] },
];

export const CONTACT = {
  email: "eranthawelikala@gmail.com",
  uniEmail: "eranthawelikala@eng.pdn.ac.lk",
  phone: "+94775778979",
  phoneLabel: "+94 77 577 8979",
  github: "https://github.com/eranthawelikala",
};

export const bootLines = (years: number, projectCount: number) => [
  { text: `EraOS BIOS v${new Date().getFullYear()}.10  (c) Erantha Welikala Systems`, color: "#a37bff" },
  { text: `CPU: Full-stack engineer, ${years}+ years of experience ........ OK`, color: "#c9c2e6" },
  { text: `Memory check: ${projectCount} projects indexed ........................ OK`, color: "#c9c2e6" },
  { text: "Detecting stack: Angular, React, Node.js, Spring Boot .... OK", color: "#c9c2e6" },
  { text: "Mounting /career (2019 → present) ........................ OK", color: "#c9c2e6" },
  { text: "Starting network: github.com/eranthawelikala ............. OK", color: "#c9c2e6" },
  { text: "Loading coffee drivers ................................... ∞", color: "#c9c2e6" },
  { text: "", color: "#c9c2e6" },
  { text: "Booting EraOS…", color: "#7ee2a8" },
];

export const PHONE_BREAKPOINT = 760;

/** Sites known to allow being shown inside the EraOS browser (most others send X-Frame-Options / CSP frame-ancestors). */
export const EMBEDDABLE_HOSTS = ["eranthawelikala.github.io"];
export const START_PAGE = "eraos://start";
export const ICON_GRID = { x: 16, y: 48, step: 100 };

export const tileStyle = (bg: string, size: number): CSSProperties => ({
  width: size,
  height: size,
  borderRadius: Math.round(size * 0.26),
  fontSize: Math.round(size * 0.38),
  background: bg,
});

export const storage = {
  get(key: string): string | null {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string | null) {
    try {
      if (value === null) window.localStorage.removeItem(key);
      else window.localStorage.setItem(key, value);
    } catch {
      /* storage unavailable: keep in-memory state only */
    }
  },
};
