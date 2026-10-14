import { FormEvent, MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Home, Lock, Plus, RotateCw, Search, ShieldAlert, X } from "lucide-react";
import meImg from "@/assets/images/me.png";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { CONTACT, EMBEDDABLE_HOSTS, PROJECT_CATEGORIES, SKILL_GROUPS, START_PAGE, WALLPAPERS, AppId } from "./config";

export type CtxTarget = { type: "desktop" } | { type: "app"; id: AppId } | { type: "project"; id: number } | { type: "win"; id: string };

/** What the apps can ask the OS to do. */
export interface OsApi {
  phone: boolean;
  years: number;
  openApp: (id: AppId) => void;
  openProject: (index: number) => void;
  /** Open a web page in the EraOS browser */
  browse: (url: string) => void;
  openCtx: (e: MouseEvent, target: CtxTarget) => void;
  notify: (title: string, body: string) => void;
  copyText: (text: string, what: string) => void;
  shutdown: () => void;
  wallpaper: string;
  setWallpaper: (id: string) => void;
  tips: boolean;
  setTips: (on: boolean) => void;
}

export const AboutApp = ({ os }: { os: OsApi }) => (
  <div className="eo-body eo-about">
    <div className="eo-about-head">
      <img src={meImg} alt="Erantha Welikala" />
      <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", gap: 6 }}>
        <h1 style={{ margin: 0, fontSize: 30, letterSpacing: "-0.02em" }}>Erantha Welikala</h1>
        <span style={{ color: "#b9a3ff", fontWeight: 500 }}>Associate Tech Lead · AtLink Communications</span>
        <span className="eo-dim" style={{ fontSize: 14 }}>Computer Engineer · University of Peradeniya</span>
      </div>
    </div>
    <p style={{ margin: 0, lineHeight: 1.7, color: "#d8d2f0", fontSize: 16 }}>
      Associate Tech Lead with over {os.years} years of experience designing, building and optimising enterprise-grade
      systems across web, mobile and cloud. I care about clean, efficient code and enjoy turning complex requirements
      into scalable, high-performance products.
    </p>
    <div className="eo-stats">
      <div><b>{os.years}+</b><span className="eo-dim">Years</span></div>
      <div><b>{projects.length}</b><span className="eo-dim">Projects</span></div>
      <div><b>26</b><span className="eo-dim">Technologies</span></div>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      <button className="eo-btn primary" onClick={() => os.openApp("finder")}>Browse projects</button>
      <button className="eo-btn ghost" onClick={() => os.openApp("career")}>Career</button>
      <button className="eo-btn ghost" onClick={() => os.openApp("contact")}>Contact me</button>
    </div>
  </div>
);

export const FinderApp = ({ os }: { os: OsApi }) => {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sel, setSel] = useState(0);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .map((p, i) => ({ ...p, i }))
      .filter((p) => (filter === "All" || p.categories.includes(filter)) && (!q || `${p.title} ${p.technologies.join(" ")} ${p.kind}`.toLowerCase().includes(q)));
  }, [filter, query]);

  const selected = list.find((p) => p.i === sel) ?? list[0];
  const showList = os.phone || view === "list";
  const pick = (i: number) => (os.phone ? os.openProject(i) : setSel(i));
  const cats = PROJECT_CATEGORIES.map((c) => ({ name: c, count: c === "All" ? projects.length : projects.filter((p) => p.categories.includes(c)).length }));

  return (
    <>
      <div className="eo-toolbar">
        <label className="eo-search">
          <Search size={15} aria-hidden="true" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search projects" placeholder="Search by name or technology" />
        </label>
        <span className="eo-dim" style={{ fontSize: 13 }}>{list.length} {list.length === 1 ? "app" : "apps"}</span>
        {!os.phone && (
          <div className="eo-seg" role="group" aria-label="View">
            <button aria-pressed={view === "grid"} onClick={() => setView("grid")}>Icons</button>
            <button aria-pressed={view === "list"} onClick={() => setView("list")}>List</button>
          </div>
        )}
      </div>
      <div className="eo-cats">
        {cats.map((c) => (
          <button key={c.name} aria-pressed={c.name === filter} onClick={() => setFilter(c.name)}>{c.name}</button>
        ))}
      </div>
      <div className="eo-finder">
        <nav className="eo-side" aria-label="Categories">
          <span className="eo-label" style={{ padding: "6px 10px" }}>Categories</span>
          {cats.map((c) => (
            <button key={c.name} aria-pressed={c.name === filter} onClick={() => setFilter(c.name)}>
              <span>{c.name}</span><span style={{ opacity: 0.6, fontSize: 12 }}>{c.count}</span>
            </button>
          ))}
        </nav>
        <div className="eo-body" style={{ flex: 1, minWidth: 0, padding: 14 }}>
          {!showList && (
            <div className="eo-grid">
              {list.map((p) => (
                <button key={p.i} className={`eo-gtile${selected?.i === p.i ? " sel" : ""}`} aria-label={`${p.title}, ${p.kind}`}
                  onClick={() => pick(p.i)} onDoubleClick={() => os.openProject(p.i)} onContextMenu={(e) => { setSel(p.i); os.openCtx(e, { type: "project", id: p.i }); }}>
                  <img src={p.image} alt="" />
                  <b>{p.title}</b>
                  <span className="eo-dim" style={{ fontSize: 11 }}>{p.kind}</span>
                </button>
              ))}
            </div>
          )}
          {showList && (
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {list.map((p) => (
                <button key={p.i} className={`eo-row${!os.phone && selected?.i === p.i ? " sel" : ""}`}
                  onClick={() => pick(p.i)} onDoubleClick={() => os.openProject(p.i)} onContextMenu={(e) => { setSel(p.i); os.openCtx(e, { type: "project", id: p.i }); }}>
                  <img src={p.image} alt="" />
                  <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
                    <b style={{ fontSize: 15 }}>{p.title}</b>
                    <span className="eo-clamp" style={{ fontSize: 13, color: "#b7b0d6", lineHeight: 1.4 }}>{p.summary}</span>
                  </span>
                  <span className="eo-dim eo-hide-phone" style={{ fontSize: 12 }}>{p.kind}</span>
                </button>
              ))}
            </div>
          )}
          {list.length === 0 && <div className="eo-dim" style={{ padding: "40px 10px", textAlign: "center" }}>No projects match that search.</div>}
        </div>
        {!os.phone && selected && (
          <aside className="eo-preview" aria-label="Project preview">
            <img src={selected.image} alt={`${selected.title} screenshot`} />
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <b style={{ fontSize: 19, lineHeight: 1.2 }}>{selected.title}</b>
              <span style={{ fontSize: 12, color: "#b9a3ff" }}>{selected.categories.join(" · ")}</span>
            </div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "#d8d2f0" }}>{selected.summary}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {selected.technologies.map((t) => <span key={t} className="eo-chip" style={{ fontSize: 12 }}>{t}</span>)}
            </div>
            <button className="eo-btn primary" style={{ justifyContent: "center" }} onClick={() => os.openProject(selected.i)}>Open app</button>
            <span style={{ fontSize: 12, color: "#8f87b3", textAlign: "center" }}>Tip: double-click an icon to open it directly</span>
          </aside>
        )}
      </div>
    </>
  );
};

export const ProjectApp = ({ os, index, onNavigate }: { os: OsApi; index: number; onNavigate: (to: number) => void }) => {
  const p = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return (
    <div className="eo-body">
      <div className="eo-hero"><img src={p.image} alt={`${p.title} screenshot`} /></div>
      <div className="eo-proj">
        <div className="eo-proj-head">
          <img src={p.image} alt="" />
          <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", gap: 4 }}>
            <h2 style={{ margin: 0, fontSize: 28, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{p.title}</h2>
            <span style={{ fontSize: 13, color: "#b9a3ff" }}>{p.kind} · {p.categories.join(" · ")}</span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {p.demo && <button className="eo-btn primary" onClick={() => os.browse(p.demo!)}>{p.demoLabel ?? "Open live demo"}</button>}
          {p.github && <button className="eo-btn ghost" onClick={() => os.browse(p.github!)}><Github size={16} aria-hidden="true" />View source</button>}
          {!p.demo && !p.github && <span className="eo-dim" style={{ padding: "12px 16px", borderRadius: 10, background: "rgba(255,255,255,.06)", fontSize: 14 }}>Client / private project: no public link</span>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span className="eo-label">About this app</span>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#e0dbf5" }}>{p.description}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span className="eo-label">Built with</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {p.technologies.map((t) => <span key={t} className="eo-chip accent">{t}</span>)}
          </div>
        </div>
        <div className="eo-proj-nav">
          <button className="eo-pill eo-muted" onClick={() => onNavigate(index - 1)}>← {prev.title}</button>
          <button className="eo-pill eo-muted" style={{ textAlign: "right" }} onClick={() => onNavigate(index + 1)}>{next.title} →</button>
        </div>
      </div>
    </div>
  );
};

export const CareerApp = () => (
  <div className="eo-body eo-career">
    {experiences.map((r, i) => (
      <div className="eo-tl" key={r.title}>
        <div className="eo-tl-rail"><i style={{ background: i === 0 ? "#7ee2a8" : "#a37bff" }} /><span /></div>
        <div style={{ flex: 1, minWidth: 0, paddingBottom: 22, display: "flex", flexDirection: "column", gap: 6 }}>
          <span className="eo-mono" style={{ fontSize: 12, color: "#b9a3ff" }}>{r.period}</span>
          <b style={{ fontSize: 20 }}>{r.title}</b>
          <span className="eo-dim" style={{ fontSize: 13 }}>{r.company}</span>
          <ul style={{ margin: "6px 0 0", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6, color: "#d8d2f0", lineHeight: 1.55, fontSize: 14 }}>
            {r.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

export const SkillsApp = () => (
  <div className="eo-body" style={{ padding: "22px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14, alignContent: "start" }}>
    {SKILL_GROUPS.map((g) => (
      <div key={g.name} style={{ padding: 16, borderRadius: 14, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", display: "flex", flexDirection: "column", gap: 10 }}>
        <b style={{ color: g.color }}>{g.name}</b>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {g.items.map((t) => <span key={t} className="eo-chip">{t}</span>)}
        </div>
      </div>
    ))}
  </div>
);

export const ContactApp = ({ os }: { os: OsApi }) => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", msg: "" });
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => { setForm({ ...form, [k]: e.target.value }); setError(""); };

  const validate = () => {
    if (!form.name.trim()) return "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return "Please add a valid email so I can reply.";
    if (form.msg.trim().length < 5) return "Please write a short message.";
    return "";
  };
  const subject = form.subject.trim() || `Hello from ${form.name.trim() || "your portfolio"}`;
  const body = `${form.msg}\n\n— ${form.name} (${form.email})`;
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const send = (e: FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) return setError(err);
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    os.notify("Message ready", "Your email app should open with the message filled in. Nothing happened? Use Send with Gmail or Copy.");
  };
  const copy = () => {
    os.copyText(CONTACT.email, "Email");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="eo-body eo-contact">
      <div className="eo-contact-side">
        <b style={{ fontSize: 22 }}>Let’s talk</b>
        <span style={{ fontSize: 14, color: "#b7b0d6", lineHeight: 1.5 }}>Questions, projects or opportunities, I usually reply within a day or two.</span>
        <div className="eo-contact-item" style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 6 }}>
          <a href={`mailto:${CONTACT.email}`} style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2, textDecoration: "none" }}>
            <small style={{ fontSize: 12, color: "#a39cc4" }}>Email</small><b style={{ fontSize: 14, overflowWrap: "anywhere" }}>{CONTACT.email}</b>
          </a>
          <button className="eo-btn ghost" style={{ padding: "8px 12px", minHeight: 40, fontSize: 13 }} onClick={copy}>{copied ? "Copied ✓" : "Copy"}</button>
        </div>
        <a className="eo-contact-item" href={`tel:${CONTACT.phone}`}><small>Phone</small><b>{CONTACT.phoneLabel}</b></a>
        <a className="eo-contact-item" href={`mailto:${CONTACT.uniEmail}`}><small>University email</small><b>{CONTACT.uniEmail}</b></a>
        <button className="eo-contact-item" style={{ border: 0, color: "inherit", textAlign: "left", cursor: "pointer", font: "inherit" }} onClick={() => os.browse(CONTACT.github)}><small>GitHub</small><b>github.com/eranthawelikala</b></button>
      </div>
      <form className="eo-form" onSubmit={send} noValidate>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <label style={{ flex: "1 1 180px" }}>Your name<input className="eo-field" value={form.name} onChange={set("name")} autoComplete="name" /></label>
          <label style={{ flex: "1 1 180px" }}>Your email<input className="eo-field" type="email" value={form.email} onChange={set("email")} autoComplete="email" /></label>
        </div>
        <label>Subject<input className="eo-field" value={form.subject} onChange={set("subject")} /></label>
        <label>Message<textarea className="eo-field" rows={6} value={form.msg} onChange={set("msg")} style={{ resize: "vertical", minHeight: 130 }} /></label>
        {error && <span role="alert" style={{ fontSize: 13, color: "#ffb4c4" }}>{error}</span>}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
          <button className="eo-btn primary" type="submit">Send via email app</button>
          <a className="eo-btn ghost" href={gmail} target="_blank" rel="noopener noreferrer"
            onClick={(e) => { const err = validate(); if (err) { e.preventDefault(); setError(err); } else os.notify("Opening Gmail", "Your message is ready to send in a new tab."); }}>
            Send with Gmail ↗
          </a>
        </div>
        <span style={{ fontSize: 12, color: "#8f87b3" }}>Your message opens ready to send. Nothing is stored on this site.</span>
      </form>
    </div>
  );
};

type TermLine = { text: string; color: string };

export const TerminalApp = ({ os }: { os: OsApi }) => {
  const [lines, setLines] = useState<TermLine[]>([{ text: "EraOS terminal. Type help to see commands.", color: "#8f87b3" }]);
  const [cmd, setCmd] = useState("");
  const [hist, setHist] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ block: "end" }); }, [lines]);

  const run = (raw: string) => {
    const input = raw.trim();
    const [name, ...rest] = input.split(/\s+/);
    const arg = rest.join(" ").toLowerCase();
    const out: TermLine[] = [{ text: `visitor@eraos ~ % ${input}`, color: "#f1eefc" }];
    const say = (text: string, color = "#cfc8ec") => out.push({ text, color });
    const apps: Record<string, AppId> = { about: "about", projects: "finder", career: "career", skills: "skills", contact: "contact", wallpaper: "settings" };
    switch ((name || "").toLowerCase()) {
      case "": break;
      case "help": say("about · ls · open <name|number> · career · skills · contact · wallpaper · clear · exit"); break;
      case "about": case "whoami": say(`Erantha Welikala, Associate Tech Lead with over ${os.years} years of experience.`); break;
      case "ls": case "projects":
        projects.forEach((p, i) => say(`${String(i + 1).padStart(2, " ")}  ${p.title}  (${p.kind})`));
        say("Tip: open 2   or   open cricket", "#8f87b3");
        break;
      case "open": {
        const num = parseInt(arg, 10);
        const idx = !isNaN(num) ? num - 1 : projects.findIndex((p) => p.title.toLowerCase().includes(arg));
        if (apps[arg]) { os.openApp(apps[arg]); say(`Opening ${arg}…`, "#7ee2a8"); }
        else if (arg && idx >= 0 && idx < projects.length) { os.openProject(idx); say(`Launching ${projects[idx].title}…`, "#7ee2a8"); }
        else say(`open: no app matches "${arg}"`, "#ffb4c4");
        break;
      }
      case "career": case "skills": case "contact": case "wallpaper": os.openApp(apps[name.toLowerCase()]); say(`Opening ${name}…`, "#7ee2a8"); break;
      case "clear": setLines([]); setCmd(""); setHist([...hist, input]); return;
      case "exit": case "shutdown": os.shutdown(); return;
      default: say(`command not found: ${name} (try help)`, "#ffb4c4");
    }
    setLines((l) => [...l, ...out]);
    setCmd("");
    if (input) setHist([...hist, input]);
    setHIdx(-1);
  };

  return (
    <div className="eo-body eo-term eo-mono" onClick={() => inputRef.current?.focus({ preventScroll: true })}>
      {lines.map((l, i) => <div key={i} style={{ color: l.color }}>{l.text}</div>)}
      <label style={{ display: "flex", alignItems: "center" }}>
        <span style={{ color: "#7ee2a8" }}>visitor@eraos</span><span style={{ color: "#8f87b3" }}>&nbsp;~ %&nbsp;</span>
        <input ref={inputRef} value={cmd} onChange={(e) => setCmd(e.target.value)} aria-label="Terminal command" autoComplete="off" spellCheck={false}
          onKeyDown={(e) => {
            if (e.key === "Enter") run(cmd);
            else if (e.key === "ArrowUp" && hist.length) { e.preventDefault(); const i = hIdx < 0 ? hist.length - 1 : Math.max(0, hIdx - 1); setHIdx(i); setCmd(hist[i]); }
            else if (e.key === "ArrowDown" && hIdx >= 0) { e.preventDefault(); const i = hIdx + 1; if (i >= hist.length) { setHIdx(-1); setCmd(""); } else { setHIdx(i); setCmd(hist[i]); } }
          }} />
      </label>
      <div ref={endRef} />
    </div>
  );
};

export const SettingsApp = ({ os }: { os: OsApi }) => {
  const current = WALLPAPERS.find((w) => w.id === os.wallpaper) ?? WALLPAPERS[0];
  return (
    <div className="eo-body" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 22 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center" }}>
        <div className="eo-wall" style={{ flex: "0 0 auto", width: 240, maxWidth: "100%", aspectRatio: "16 / 10", borderRadius: 12, border: "1px solid rgba(255,255,255,.2)", boxShadow: "0 12px 30px rgba(0,0,0,.4)", backgroundImage: `url(${current.src})` }} />
        <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: 6 }}>
          <span className="eo-label">Current wallpaper</span>
          <b style={{ fontSize: 24 }}>{current.name}</b>
          <span style={{ fontSize: 14, color: "#b7b0d6", lineHeight: 1.5 }}>{current.blurb}</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span className="eo-label">Choose a wallpaper</span>
        <div className="eo-wp-grid">
          {WALLPAPERS.map((w) => (
            <button key={w.id} className="eo-wp" aria-pressed={w.id === os.wallpaper} onClick={() => os.setWallpaper(w.id)}>
              <span className="eo-wall" style={{ backgroundImage: `url(${w.src})` }} />
              {w.name}
            </button>
          ))}
        </div>
      </div>
      <label style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 12, background: "rgba(255,255,255,.05)", cursor: "pointer" }}>
        <input type="checkbox" checked={os.tips} onChange={(e) => os.setTips(e.target.checked)} style={{ width: 20, height: 20, accentColor: "#a37bff" }} />
        <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <b>Show desktop widgets</b>
          <span className="eo-dim" style={{ fontSize: 13 }}>Clock, Sri Lanka time and the tips card</span>
        </span>
      </label>
    </div>
  );
};

// ---------- Browser ----------

type Tab = { id: number; history: string[]; idx: number; reload: number };

const normalizeUrl = (raw: string) => {
  const v = raw.trim();
  if (!v || v === START_PAGE) return START_PAGE;
  if (/^https?:\/\//i.test(v)) return v;
  if (/^[\w-]+(\.[\w-]+)+(\/.*)?$/.test(v)) return `https://${v}`;
  return `https://www.google.com/search?q=${encodeURIComponent(v)}`;
};
const hostOf = (url: string) => { try { return new URL(url).host; } catch { return url; } };
export const canEmbed = (url: string) => { try { const h = new URL(url).host; return EMBEDDABLE_HOSTS.includes(h) || h === window.location.host; } catch { return false; } };
const tabTitle = (url: string) => {
  if (url === START_PAGE) return "Start page";
  const p = projects.find((x) => x.demo === url || x.github === url);
  return p ? (p.demo === url ? p.title : `${p.title} · source`) : hostOf(url);
};

let tabSeq = 1;
const newTab = (url = START_PAGE): Tab => ({ id: tabSeq++, history: [url], idx: 0, reload: 0 });

export const BrowserApp = ({ request }: { request: { url: string; n: number } | null }) => {
  const [tabs, setTabs] = useState<Tab[]>(() => [newTab(request?.url ?? START_PAGE)]);
  const [active, setActive] = useState(() => tabs[0].id);
  const [draft, setDraft] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const seen = useRef(request?.n ?? 0);

  const tab = tabs.find((t) => t.id === active) ?? tabs[0];
  const url = tab.history[tab.idx];
  const update = (id: number, fn: (t: Tab) => Tab) => setTabs((ts) => ts.map((t) => (t.id === id ? fn(t) : t)));

  // A link opened elsewhere in EraOS: reuse a blank start-page tab, otherwise open a new tab.
  useEffect(() => {
    if (!request || request.n === seen.current) return;
    seen.current = request.n;
    const target = normalizeUrl(request.url);
    const blank = tabs.find((t) => t.id === active && t.history[t.idx] === START_PAGE);
    if (blank) navigate(target, blank.id);
    else { const t = newTab(target); setTabs((ts) => [...ts, t]); setActive(t.id); setLoading(canEmbed(target)); }
    setDraft(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request?.n]);

  function navigate(raw: string, id = tab.id) {
    const next = normalizeUrl(raw);
    update(id, (t) => ({ ...t, history: [...t.history.slice(0, t.idx + 1), next], idx: t.idx + 1 }));
    setDraft(null);
    setLoading(canEmbed(next));
  }
  const go = (delta: number) => { update(tab.id, (t) => ({ ...t, idx: Math.min(t.history.length - 1, Math.max(0, t.idx + delta)) })); setDraft(null); };
  const closeTab = (id: number) => {
    if (tabs.length === 1) { setTabs([newTab()]); return; }
    const i = tabs.findIndex((t) => t.id === id);
    const rest = tabs.filter((t) => t.id !== id);
    setTabs(rest);
    if (id === active) setActive(rest[Math.max(0, i - 1)].id);
  };
  const addTab = () => { const t = newTab(); setTabs((ts) => [...ts, t]); setActive(t.id); setDraft(null); };
  const openExternal = () => window.open(url, "_blank", "noopener,noreferrer");

  const isStart = url === START_PAGE;
  const embeddable = !isStart && canEmbed(url);
  const bookmarks = projects.map((p, i) => ({ p, i })).filter(({ p }) => p.demo && canEmbed(p.demo));

  return (
    <div className="eo-browser">
      <div className="eo-tabs" role="tablist">
        {tabs.map((t) => (
          <div key={t.id} className={`eo-tab${t.id === tab.id ? " on" : ""}`} role="tab" aria-selected={t.id === tab.id}>
            <button className="eo-tab-main" onClick={() => { setActive(t.id); setDraft(null); }}>{tabTitle(t.history[t.idx])}</button>
            <button className="eo-tab-x" aria-label="Close tab" onClick={() => closeTab(t.id)}><X size={12} aria-hidden="true" /></button>
          </div>
        ))}
        <button className="eo-tab-add" aria-label="New tab" onClick={addTab}><Plus size={15} aria-hidden="true" /></button>
      </div>
      <div className="eo-addr">
        <button aria-label="Back" disabled={tab.idx === 0} onClick={() => go(-1)}><ArrowLeft size={16} aria-hidden="true" /></button>
        <button aria-label="Forward" disabled={tab.idx >= tab.history.length - 1} onClick={() => go(1)}><ArrowRight size={16} aria-hidden="true" /></button>
        <button aria-label="Reload" disabled={!embeddable} onClick={() => { update(tab.id, (t) => ({ ...t, reload: t.reload + 1 })); setLoading(true); }}><RotateCw size={15} aria-hidden="true" /></button>
        <button aria-label="Start page" onClick={() => navigate(START_PAGE)}><Home size={15} aria-hidden="true" /></button>
        <form className="eo-addr-field" onSubmit={(e) => { e.preventDefault(); if (draft !== null) navigate(draft); }}>
          {!isStart && <Lock size={12} aria-hidden="true" />}
          <input value={draft ?? (isStart ? "" : url)} placeholder="Search or enter a web address" aria-label="Address"
            onChange={(e) => setDraft(e.target.value)} onFocus={(e) => e.target.select()} />
        </form>
        <button aria-label="Open in a new browser tab" title="Open in a new browser tab" disabled={isStart} onClick={openExternal}><ExternalLink size={15} aria-hidden="true" /></button>
      </div>
      {loading && embeddable && <div className="eo-loadbar" />}
      <div className="eo-page">
        {isStart && (
          <div className="eo-start">
            <b style={{ fontSize: 26, letterSpacing: "-0.02em" }}>Erantha’s bookmarks</b>
            <span className="eo-dim">Live projects open right here. Source code and other sites open in a new tab.</span>
            <div className="eo-bookmarks">
              {bookmarks.map(({ p, i }) => (
                <button key={i} onClick={() => navigate(p.demo!)}><img src={p.image} alt="" /><b>{p.title}</b><span>{hostOf(p.demo!)}{new URL(p.demo!).pathname}</span></button>
              ))}
              <button onClick={() => navigate(CONTACT.github)}><span className="eo-bm-icon"><Github size={28} aria-hidden="true" /></span><b>GitHub</b><span>github.com/eranthawelikala</span></button>
            </div>
          </div>
        )}
        {embeddable && (
          <iframe key={`${tab.id}-${tab.idx}-${tab.reload}`} src={url} title={tabTitle(url)} onLoad={() => setLoading(false)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads" allow="clipboard-write; fullscreen" />
        )}
        {!isStart && !embeddable && (
          <div className="eo-blocked">
            <ShieldAlert size={40} aria-hidden="true" />
            <b style={{ fontSize: 22 }}>{hostOf(url)} opens in its own tab</b>
            <span className="eo-muted" style={{ maxWidth: 440, lineHeight: 1.6 }}>This site doesn’t allow being shown inside other pages, so EraOS can’t display it here.</span>
            <button className="eo-btn primary" onClick={openExternal}><ExternalLink size={16} aria-hidden="true" />Open {hostOf(url)} in a new tab</button>
            <span className="eo-dim eo-mono" style={{ fontSize: 12, overflowWrap: "anywhere" }}>{url}</span>
          </div>
        )}
      </div>
    </div>
  );
};
