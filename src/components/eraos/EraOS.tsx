import { Component, CSSProperties, MouseEvent as ReactMouseEvent, PointerEvent as ReactPointerEvent, ReactNode, createRef } from "react";
import { BatteryFull, ChevronLeft, Lock, MapPin, Power, Search, Signal, Wifi } from "lucide-react";
import meImg from "@/assets/images/me.png";
import { projects } from "@/data/projects";
import { getYearsOfExperience } from "@/lib/experience";
import { APPS, APP_ORDER, AppId, ICON_GRID, PHONE_BREAKPOINT, PROJECT_WINDOW, WALLPAPERS, bootLines, CONTACT, storage, tileStyle } from "./config";
import { AboutApp, BrowserApp, CareerApp, ContactApp, CtxTarget, FinderApp, OsApi, ProjectApp, SettingsApp, SkillsApp, TerminalApp } from "./apps";
import "./eraos.css";

type Phase = "boot" | "lock" | "desktop" | "shutdown";
type Kind = AppId | "project";

interface Win {
  id: string;
  kind: Kind;
  pi?: number;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  min: boolean;
  max: boolean;
  seq: number;
}

interface Pos { x: number; y: number }

interface State {
  phase: Phase;
  bootN: number;
  bootStage: "bios" | "logo";
  bootPct: number;
  now: Date;
  phone: boolean;
  wins: Record<string, Win>;
  top: number;
  order: number;
  menu: boolean;
  spot: boolean;
  spotQ: string;
  ctx: { x: number; y: number; target: CtxTarget } | null;
  toast: { title: string; body: string } | null;
  wallpaper: string;
  tips: boolean;
  icons: Partial<Record<AppId, Pos>>;
  dragIcon: AppId | null;
  lockOut: boolean;
  homePage: number;
  browserReq: { url: string; n: number } | null;
}

type MenuItem = { sep?: boolean; label?: string; run?: () => void; hint?: string; danger?: boolean };

const WP_KEY = "eraos-wallpaper";
const ICONS_KEY = "eraos-icons";
const pad = (n: number) => String(n).padStart(2, "0");
const isPhoneWidth = () => window.innerWidth < PHONE_BREAKPOINT;

const loadIcons = (): State["icons"] => {
  try {
    const v = JSON.parse(storage.get(ICONS_KEY) || "{}");
    return v && typeof v === "object" ? v : {};
  } catch {
    return {};
  }
};

const CtlIcon = ({ kind }: { kind: "close" | "min" | "max" | "restore" }) => (
  <svg aria-hidden="true" viewBox="0 0 14 14">
    {kind === "close" && <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="#4d0000" strokeWidth="1.6" strokeLinecap="round" />}
    {kind === "min" && <path d="M3.8 7h6.4" stroke="#5a3d00" strokeWidth="1.7" strokeLinecap="round" />}
    {kind === "max" && <path d="M4 4h4.2L4 8.2zM10 10H5.8L10 5.8z" fill="#004d00" />}
    {kind === "restore" && <path d="M7.4 6.6V3.6M7.4 6.6h3M6.6 7.4v3M6.6 7.4h-3" stroke="#004d00" strokeWidth="1.6" strokeLinecap="round" />}
  </svg>
);

const AppTile = ({ id, size }: { id: AppId; size: number }) => {
  const a = APPS[id];
  const style: CSSProperties = { ...tileStyle(a.bg, size), ...(a.mono ? { fontSize: Math.round(size * 0.3) } : {}) };
  const Icon = a.icon;
  return <span className={`eo-tile${a.mono ? " mono" : ""}`} style={style}>{Icon ? <Icon size={Math.round(size * 0.5)} strokeWidth={2.2} aria-hidden="true" /> : a.glyph}</span>;
};

interface Props {
  onExit: () => void;
}

/** EraOS: the portfolio presented as a desktop OS (or an iPhone-style OS on small screens). */
export default class EraOS extends Component<Props, State> {
  private timers: ReturnType<typeof setTimeout>[] = [];
  private toastTimer?: ReturnType<typeof setTimeout>;
  private clockTimer?: ReturnType<typeof setInterval>;
  private winDrag: { id: string; dx: number; dy: number } | null = null;
  private iconDrag: { id: AppId; sx: number; sy: number; ox: number; oy: number; moved: boolean } | null = null;
  private justDragged = false;
  private lockY: number | null = null;
  private spotRef = createRef<HTMLInputElement>();
  private pagerRef = createRef<HTMLDivElement>();

  private onPagerScroll = () => {
    const el = this.pagerRef.current;
    if (!el) return;
    const page = Math.round(el.scrollLeft / el.clientWidth);
    if (page !== this.state.homePage) this.setState({ homePage: page });
  };
  private goToPage = (page: number) => {
    const el = this.pagerRef.current;
    el?.scrollTo({ left: page * el.clientWidth, behavior: "smooth" });
  };

  constructor(props: Props) {
    super(props);
    const saved = storage.get(WP_KEY);
    this.state = {
      phase: "boot", bootN: 0, bootStage: "bios", bootPct: 0,
      now: new Date(), phone: isPhoneWidth(),
      wins: {}, top: 1, order: 0,
      menu: false, spot: false, spotQ: "", ctx: null, toast: null,
      wallpaper: WALLPAPERS.some((w) => w.id === saved) ? saved! : "teahills",
      tips: true, icons: loadIcons(), dragIcon: null, lockOut: false, browserReq: null, homePage: 0,
    };
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";
    this.clockTimer = setInterval(() => this.setState({ now: new Date() }), 10000);
    window.addEventListener("pointermove", this.onPointerMove);
    window.addEventListener("pointerup", this.onPointerUp);
    window.addEventListener("resize", this.onResize);
    this.boot();
  }

  componentWillUnmount() {
    document.body.style.overflow = "";
    this.clearTimers();
    clearInterval(this.clockTimer);
    clearTimeout(this.toastTimer);
    window.removeEventListener("pointermove", this.onPointerMove);
    window.removeEventListener("pointerup", this.onPointerUp);
    window.removeEventListener("resize", this.onResize);
  }

  componentDidUpdate(_: Props, prev: State) {
    if (!prev.spot && this.state.spot) this.spotRef.current?.focus();
  }

  // ---------- lifecycle: boot → (lock) → desktop → shutdown ----------
  private clearTimers() {
    this.timers.forEach((t) => { clearTimeout(t); clearInterval(t); });
    this.timers = [];
  }
  private later(fn: () => void, ms: number) { this.timers.push(setTimeout(fn, ms)); }

  private boot() {
    const lines = bootLines(getYearsOfExperience(), projects.length).length;
    let i = 0;
    const tick = setInterval(() => {
      i++;
      this.setState({ bootN: i });
      if (i < lines) return;
      clearInterval(tick);
      this.later(() => {
        this.setState({ bootStage: "logo", bootPct: 0 });
        let pct = 0;
        const bar = setInterval(() => {
          pct = Math.min(100, pct + 3 + Math.random() * 5);
          this.setState({ bootPct: pct });
          if (pct >= 100) { clearInterval(bar); this.later(() => this.enterDesktop(), 350); }
        }, 55);
        this.timers.push(bar);
      }, 350);
    }, 150);
    this.timers.push(tick);
  }

  private enterDesktop = () => {
    this.clearTimers();
    const phone = isPhoneWidth();
    this.setState({ phase: phone ? "lock" : "desktop", phone, lockOut: false, wins: {}, top: 1, order: 0 }, () => {
      if (phone) return;
      this.openApp("about");
      this.notify("Welcome to EraOS", `Open Projects to browse ${projects.length} apps, or use search in the top bar.`);
    });
  };

  private unlock = () => {
    if (this.state.lockOut) return;
    this.setState({ lockOut: true });
    this.later(() => {
      this.setState({ phase: "desktop", lockOut: false });
      this.notify("Welcome to EraOS", `Tap Projects to browse ${projects.length} apps. Tap the bar at the bottom to go home.`);
    }, 420);
  };

  private shutdown = () => {
    this.clearTimers();
    this.setState({ phase: "shutdown", spot: false, menu: false, ctx: null });
    this.later(() => this.props.onExit(), 1300);
  };

  private notify = (title: string, body: string) => {
    clearTimeout(this.toastTimer);
    this.setState({ toast: { title, body } });
    this.toastTimer = setTimeout(() => this.setState({ toast: null }), 4200);
  };

  // ---------- windows ----------
  private openWin(id: string, cfg: Pick<Win, "kind" | "title" | "w" | "h" | "pi">) {
    const { wins, top, order } = this.state;
    const z = top + 1;
    if (wins[id]) {
      this.setState({ wins: { ...wins, [id]: { ...wins[id], min: false, z } }, top: z, spot: false, menu: false, ctx: null });
      return;
    }
    const vw = window.innerWidth, vh = window.innerHeight;
    const w = Math.min(cfg.w, vw - 24), h = Math.min(cfg.h, vh - 128);
    const x = Math.max(12, Math.min(vw - w - 12, Math.round((vw - w) / 2) - 60 + (order % 5) * 30));
    const y = Math.max(40, Math.min(vh - h - 92, 44 + (order % 5) * 26));
    const win: Win = { ...cfg, id, x, y, w, h, z, min: false, max: false, seq: order };
    this.setState({ wins: { ...wins, [id]: win }, top: z, order: order + 1, spot: false, menu: false, ctx: null });
  }
  private openApp = (id: AppId) => {
    const a = APPS[id];
    this.openWin(id, { kind: id, title: a.title, w: a.w, h: a.h });
  };
  private openProject = (i: number) => {
    const n = ((i % projects.length) + projects.length) % projects.length;
    this.openWin(`p${n}`, { kind: "project", pi: n, title: projects[n].title, w: PROJECT_WINDOW.w, h: PROJECT_WINDOW.h });
  };
  private browse = (url: string) => {
    const n = (this.state.browserReq?.n ?? 0) + 1;
    this.setState({ browserReq: { url, n }, ctx: null }, () => this.openApp("browser"));
  };
  private closeWin = (id: string) => {
    const wins = { ...this.state.wins };
    delete wins[id];
    this.setState({ wins });
  };
  private patchWin(id: string, patch: Partial<Win>) {
    const w = this.state.wins[id];
    if (w) this.setState({ wins: { ...this.state.wins, [id]: { ...w, ...patch } } });
  }
  private focusWin(id: string) {
    const z = this.state.top + 1;
    this.patchWin(id, { z });
    this.setState({ top: z });
  }
  private goHome = () => {
    const wins: Record<string, Win> = {};
    Object.values(this.state.wins).forEach((w) => { wins[w.id] = { ...w, min: true }; });
    this.setState({ wins, ctx: null });
  };

  // ---------- pointer handling (window + icon drag) ----------
  private onPointerMove = (e: PointerEvent) => {
    const ic = this.iconDrag;
    if (ic) {
      const dx = e.clientX - ic.sx, dy = e.clientY - ic.sy;
      if (!ic.moved && Math.hypot(dx, dy) < 5) return;
      ic.moved = true;
      this.setState({ dragIcon: ic.id, icons: { ...this.state.icons, [ic.id]: { x: ic.ox + dx, y: ic.oy + dy } } });
      return;
    }
    const d = this.winDrag;
    if (!d) return;
    const w = this.state.wins[d.id];
    if (!w) return;
    this.patchWin(d.id, {
      x: Math.min(window.innerWidth - 120, Math.max(-200, e.clientX - d.dx)),
      y: Math.min(window.innerHeight - 120, Math.max(32, e.clientY - d.dy)),
    });
  };
  private onPointerUp = () => {
    this.winDrag = null;
    const ic = this.iconDrag;
    this.iconDrag = null;
    if (ic?.moved) {
      this.justDragged = true;
      setTimeout(() => { this.justDragged = false; }, 50);
      this.snapIcon(ic.id);
    }
  };
  private onResize = () => {
    const phone = isPhoneWidth();
    if (phone !== this.state.phone) this.setState({ phone });
  };

  // ---------- desktop icons ----------
  private iconDefault(i: number): Pos {
    const per = Math.max(3, Math.floor((window.innerHeight - ICON_GRID.y - 110) / ICON_GRID.step));
    return { x: ICON_GRID.x + Math.floor(i / per) * ICON_GRID.step, y: ICON_GRID.y + (i % per) * ICON_GRID.step };
  }
  private iconPos(id: AppId): Pos {
    return this.state.icons[id] ?? this.iconDefault(APP_ORDER.indexOf(id));
  }
  private snapIcon(id: AppId) {
    const { x: ox, y: oy, step } = ICON_GRID;
    const cols = Math.max(1, Math.floor((window.innerWidth - 108) / step) + 1);
    const rows = Math.max(1, Math.floor((window.innerHeight - oy - 200) / step) + 1);
    const cell = (p: Pos) => [
      Math.min(cols - 1, Math.max(0, Math.round((p.x - ox) / step))),
      Math.min(rows - 1, Math.max(0, Math.round((p.y - oy) / step))),
    ];
    const taken = new Set(APP_ORDER.filter((o) => o !== id).map((o) => cell(this.iconPos(o)).join(",")));
    let [c, r] = cell(this.iconPos(id));
    for (let k = 0; k < cols * rows && taken.has(`${c},${r}`); k++) {
      r++;
      if (r >= rows) { r = 0; c = (c + 1) % cols; }
    }
    const icons = { ...this.state.icons, [id]: { x: ox + c * step, y: oy + r * step } };
    this.setState({ icons, dragIcon: null });
    storage.set(ICONS_KEY, JSON.stringify(icons));
  }
  private resetIcons = () => {
    this.setState({ icons: {} });
    storage.set(ICONS_KEY, null);
  };

  // ---------- wallpaper / clipboard ----------
  private setWallpaper = (id: string) => {
    this.setState({ wallpaper: id });
    storage.set(WP_KEY, id);
  };
  private nextWallpaper = () => {
    const i = WALLPAPERS.findIndex((w) => w.id === this.state.wallpaper);
    const next = WALLPAPERS[(i + 1) % WALLPAPERS.length];
    this.setWallpaper(next.id);
    this.notify("Wallpaper changed", next.name);
  };
  private copyText = (text: string, what: string) => {
    const done = (ok: boolean) => this.notify(ok ? `${what} copied` : "Copy blocked", ok ? text : "Select the text and copy it manually.");
    try {
      navigator.clipboard.writeText(text).then(() => done(true), () => done(false));
    } catch {
      done(false);
    }
  };
  private openUrl = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

  // ---------- context menu ----------
  private openCtx = (e: ReactMouseEvent, target: CtxTarget) => {
    if ((e.target as HTMLElement).closest?.("input, textarea")) return;
    e.preventDefault();
    e.stopPropagation();
    const x = Math.max(4, Math.min(e.clientX, window.innerWidth - 250));
    const y = Math.max(34, Math.min(e.clientY, window.innerHeight - 330));
    this.setState({ ctx: { x, y, target }, menu: false });
  };

  private ctxItems(): MenuItem[] {
    const c = this.state.ctx;
    if (!c) return [];
    const t = c.target;
    const sep: MenuItem = { sep: true };
    if (t.type === "desktop") {
      return [
        { label: "Open Projects", run: () => this.openApp("finder") },
        { label: "Search…", run: () => this.setState({ spot: true, spotQ: "" }) },
        sep,
        { label: "Change wallpaper…", run: () => this.openApp("settings") },
        { label: "Next wallpaper", run: this.nextWallpaper },
        { label: this.state.tips ? "Hide desktop widgets" : "Show desktop widgets", run: () => this.setState({ tips: !this.state.tips }) },
        ...(this.state.phone ? [] : [{ label: "Reset icon positions", run: this.resetIcons }]),
        sep,
        { label: "Contact Erantha", run: () => this.openApp("contact") },
        { label: "Copy email address", run: () => this.copyText(CONTACT.email, "Email") },
        sep,
        { label: "Close all windows", run: () => this.setState({ wins: {} }) },
        { label: "Shut down (back to website)", run: this.shutdown, danger: true },
      ];
    }
    if (t.type === "app") {
      const open = !!this.state.wins[t.id];
      return [{ label: `Open ${APPS[t.id].label}`, run: () => this.openApp(t.id) }, ...(open ? [{ label: "Close", run: () => this.closeWin(t.id) }] : [])];
    }
    if (t.type === "project") {
      const p = projects[t.id];
      const link = p.demo || p.github;
      const items: MenuItem[] = [{ label: "Open app", run: () => this.openProject(t.id) }];
      if (p.demo) items.push({ label: p.demoLabel ?? "Open live demo", run: () => this.browse(p.demo!) });
      if (p.github) items.push({ label: "View source on GitHub", run: () => this.browse(p.github!) });
      if (link) items.push(sep, { label: "Open in a new browser tab", run: () => this.openUrl(link), hint: "↗" }, { label: "Copy link", run: () => this.copyText(link, "Link") });
      return items;
    }
    const w = this.state.wins[t.id];
    if (!w) return [];
    const items: MenuItem[] = [
      { label: "Minimize", run: () => this.patchWin(w.id, { min: true }) },
      ...(this.state.phone ? [] : [{ label: w.max ? "Restore size" : "Maximize", run: () => this.patchWin(w.id, { max: !w.max }) }]),
    ];
    if (w.kind === "project") {
      const p = projects[w.pi!];
      if (p.demo) items.push(sep, { label: p.demoLabel ?? "Open live demo", run: () => this.browse(p.demo!) });
      if (p.github) items.push({ label: "View source on GitHub", run: () => this.browse(p.github!) });
    }
    items.push(sep, { label: "Close window", run: () => this.closeWin(w.id), danger: true });
    return items;
  }

  // ---------- render helpers ----------
  private get api(): OsApi {
    return {
      phone: this.state.phone,
      years: getYearsOfExperience(this.state.now),
      openApp: this.openApp,
      openProject: this.openProject,
      browse: this.browse,
      openCtx: this.openCtx,
      notify: this.notify,
      copyText: this.copyText,
      shutdown: this.shutdown,
      wallpaper: this.state.wallpaper,
      setWallpaper: this.setWallpaper,
      tips: this.state.tips,
      setTips: (tips) => this.setState({ tips }),
    };
  }

  private wallpaperStyle(): CSSProperties {
    const wp = WALLPAPERS.find((w) => w.id === this.state.wallpaper) ?? WALLPAPERS[0];
    return { backgroundImage: `url("${wp.src}")` };
  }

  private renderAppBody(w: Win, api: OsApi): ReactNode {
    switch (w.kind) {
      case "about": return <AboutApp os={api} />;
      case "finder": return <FinderApp os={api} />;
      case "career": return <CareerApp />;
      case "skills": return <SkillsApp />;
      case "contact": return <ContactApp os={api} />;
      case "term": return <TerminalApp os={api} />;
      case "browser": return <BrowserApp request={this.state.browserReq} />;
      case "settings": return <SettingsApp os={api} />;
      case "project": return <ProjectApp os={api} index={w.pi!} onNavigate={(to) => { this.closeWin(w.id); this.openProject(to); }} />;
    }
  }

  private renderWindow(w: Win, focusedId: string | undefined, api: OsApi) {
    const { phone } = this.state;
    const focused = w.id === focusedId;
    // Hidden windows stay mounted so app state (search, form input, terminal history) survives minimise.
    const hidden = w.min || (phone && !focused);
    const style: CSSProperties = phone
      ? { zIndex: 10 + w.z }
      : w.max
        ? { left: 0, top: 32, width: "100%", maxWidth: "100%", height: "calc(100% - 32px - 86px)", borderRadius: 0, zIndex: 10 + w.z }
        : { left: w.x, top: w.y, width: w.w, height: w.h, zIndex: 10 + w.z };
    if (hidden) style.display = "none";
    const finderOpen = this.state.wins.finder && !this.state.wins.finder.min;
    const backToFinder = w.kind === "project" && finderOpen;

    return (
      <section key={w.id} className={`eo-win${phone ? " ios" : ""}${focused ? "" : " blurred"}`} role="dialog" aria-label={w.title} style={style}
        onPointerDown={() => { if (!focused) this.focusWin(w.id); }}
        onContextMenu={(e) => this.openCtx(e, { type: "win", id: w.id })}>
        {phone ? (
          <div className="eo-iosnav">
            <button onClick={backToFinder ? () => this.closeWin(w.id) : this.goHome}>
              <ChevronLeft size={22} strokeWidth={2.6} aria-hidden="true" />{backToFinder ? "Projects" : "Home"}
            </button>
            <b>{w.title}</b>
            <span />
          </div>
        ) : (
          <div className="eo-titlebar"
            onPointerDown={(e) => {
              if (w.max || (e.target as HTMLElement).closest("button")) return;
              this.winDrag = { id: w.id, dx: e.clientX - w.x, dy: e.clientY - w.y };
            }}
            onDoubleClick={() => this.patchWin(w.id, { max: !w.max })}>
            <span className="eo-ctls">
              <button className="eo-ctl" style={{ background: "#ff5f57" }} aria-label={`Close ${w.title}`} title="Close"
                onClick={(e) => { e.stopPropagation(); this.closeWin(w.id); }}><CtlIcon kind="close" /></button>
              <button className="eo-ctl" style={{ background: "#febc2e" }} aria-label={`Minimize ${w.title}`} title="Minimize"
                onClick={(e) => { e.stopPropagation(); this.patchWin(w.id, { min: true }); }}><CtlIcon kind="min" /></button>
              <button className="eo-ctl" style={{ background: "#28c840" }} aria-label={`${w.max ? "Restore" : "Maximize"} ${w.title}`} title={w.max ? "Restore" : "Maximize"}
                onClick={(e) => { e.stopPropagation(); this.patchWin(w.id, { max: !w.max }); }}><CtlIcon kind={w.max ? "restore" : "max"} /></button>
            </span>
            <span className="eo-title">{w.title}</span>
          </div>
        )}
        {this.renderAppBody(w, api)}
      </section>
    );
  }

  private renderBoot() {
    const { bootStage, bootN, bootPct } = this.state;
    const lines = bootLines(getYearsOfExperience(), projects.length).slice(0, bootN);
    return (
      <div className="eo-screen eo-boot">
        {bootStage === "bios" ? (
          <div className="eo-bios eo-mono">
            {lines.map((l, i) => <div key={i} className="eo-bios-line" style={{ color: l.color }}>{l.text}</div>)}
            <span className="eo-bios-caret" />
          </div>
        ) : (
          <div className="eo-boot-logo">
            <div className="eo-ring">
              <svg viewBox="0 0 112 112" aria-hidden="true">
                <circle cx="56" cy="56" r="52" fill="none" stroke="rgba(163,123,255,.18)" strokeWidth="4" />
                <path d="M56 4a52 52 0 0 1 52 52" fill="none" stroke="#a37bff" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <span>E</span>
            </div>
            <div className="eo-boot-title">EraOS</div>
            <div className="eo-progress"><div style={{ width: `${Math.round(bootPct)}%` }} /></div>
            <div className="eo-boot-msg">{bootPct < 40 ? "Loading projects…" : bootPct < 80 ? "Preparing your desktop…" : "Welcome"}</div>
          </div>
        )}
        <button className="eo-skip" onClick={this.enterDesktop}>Skip ›</button>
      </div>
    );
  }

  private renderLock(clock: string, dateLine: string, slTime: string) {
    return (
      <div className={`eo-screen eo-wall eo-lock${this.state.lockOut ? " out" : ""}`} style={this.wallpaperStyle()}
        onPointerDown={(e) => { this.lockY = e.clientY; }}
        onPointerUp={(e) => { if (this.lockY !== null && this.lockY - e.clientY > 50) this.unlock(); this.lockY = null; }}>
        <div className="eo-lock-shade" />
        <div className="eo-lock-top">
          <Lock size={18} aria-hidden="true" />
          <span style={{ fontSize: 19, fontWeight: 500, marginTop: 6 }}>{dateLine}</span>
          <span className="eo-lock-time">{clock}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 14, opacity: 0.9 }}><MapPin size={12} aria-hidden="true" />Sri Lanka · {slTime}</span>
        </div>
        <div className="eo-lock-note">
          <span className="eo-badge">E</span>
          <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ display: "flex", justifyContent: "space-between", gap: 8 }}><b>EraOS</b><span style={{ opacity: 0.6, fontSize: 12 }}>now</span></span>
            <span>Welcome! Swipe up to explore Erantha’s apps and projects.</span>
          </span>
        </div>
        <div className="eo-lock-bottom">
          <button onClick={this.unlock}>Swipe up or tap to open</button>
          <span className="eo-lock-bar" />
        </div>
      </div>
    );
  }

  private renderMacChrome(clock: string, dateLine: string, dateShort: string, slTime: string, focused?: Win) {
    const { menu, tips, wins, dragIcon } = this.state;
    const ordered = Object.values(wins).sort((a, b) => a.seq - b.seq);
    const closeMenu = (fn: () => void) => () => { this.setState({ menu: false }); fn(); };
    return (
      <>
        <div className="eo-menubar" onPointerDown={(e) => e.stopPropagation()}>
          <div className="eo-menubar-group">
            <button className="eo-bar-btn eo-bar-logo" aria-expanded={menu} onClick={() => this.setState({ menu: !menu })}>◆ EraOS</button>
            <span className="eo-bar-text strong">{focused ? focused.title : "Desktop"}</span>
            {menu && (
              <div className="eo-menu">
                <button className="eo-pill" onClick={closeMenu(() => this.openApp("about"))}>About Erantha</button>
                <button className="eo-pill" onClick={closeMenu(() => this.openApp("finder"))}>Browse projects</button>
                <button className="eo-pill" onClick={closeMenu(() => this.setState({ spot: true, spotQ: "" }))}>Search…</button>
                <button className="eo-pill" onClick={closeMenu(() => this.openApp("settings"))}>Change wallpaper…</button>
                <button className="eo-pill" onClick={closeMenu(() => this.setState({ wins: {} }))}>Close all windows</button>
                <hr />
                <button className="eo-pill danger" onClick={this.shutdown}>Shut down (back to website)</button>
              </div>
            )}
          </div>
          <div className="eo-menubar-group">
            <button className="eo-bar-btn" aria-label="Search apps and projects" onClick={() => this.setState({ spot: true, spotQ: "" })}><Search size={15} aria-hidden="true" /></button>
            <span className="eo-bar-text strong" title="Based in Sri Lanka"><MapPin size={12} aria-hidden="true" />Sri Lanka</span>
            <span className="eo-bar-text eo-mono">{dateShort}</span>
            <span className="eo-bar-text eo-mono">{clock}</span>
            <button className="eo-bar-btn" style={{ background: "rgba(255,255,255,.1)" }} aria-label="Shut down and return to website" onClick={this.shutdown}><Power size={13} aria-hidden="true" />Exit</button>
          </div>
        </div>

        {tips && (
          <div className="eo-widget">
            <div className="eo-widget-clock"><b>{clock}</b><span>{dateLine}</span></div>
            <div className="eo-card eo-card-row">
              <span className="eo-card-icon"><MapPin size={20} aria-hidden="true" /></span>
              <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <b style={{ fontSize: 15 }}>Sri Lanka</b>
                <span style={{ fontSize: 13, color: "#d8d2f0" }}>Erantha’s local time · {slTime} (GMT+5:30)</span>
              </span>
            </div>
            <div className="eo-card eo-card-tips">
              <b>Getting around</b>
              <span className="eo-muted">Click an icon to open it, or drag it somewhere else. Each project runs as its own app.</span>
              <span className="eo-muted">Drag windows by their title bar. Use search to jump to anything.</span>
              <span className="eo-muted">Right-click anywhere for more options, including the wallpaper.</span>
            </div>
          </div>
        )}

        {APP_ORDER.map((id) => {
          const pos = this.iconPos(id);
          return (
            <button key={id} className={`eo-icon${dragIcon === id ? " dragging" : ""}`} style={{ left: pos.x, top: pos.y }} title={`${APPS[id].label}: click to open, drag to move`}
              onPointerDown={(e) => { if (e.button === 0) this.iconDrag = { id, sx: e.clientX, sy: e.clientY, ox: pos.x, oy: pos.y, moved: false }; }}
              onClick={() => { if (!this.justDragged) this.openApp(id); }}
              onContextMenu={(e) => this.openCtx(e, { type: "app", id })}>
              <AppTile id={id} size={52} />{APPS[id].label}
            </button>
          );
        })}

        <nav className="eo-dock" aria-label="Dock" onPointerDown={(e) => e.stopPropagation()}>
          {APP_ORDER.map((id) => (
            <button key={id} className="eo-dock-btn" aria-label={APPS[id].label} title={APPS[id].label} onClick={() => this.openApp(id)} onContextMenu={(e) => this.openCtx(e, { type: "app", id })}>
              <AppTile id={id} size={50} />
              {wins[id] && <span className="eo-dock-dot" />}
            </button>
          ))}
          {ordered.filter((w) => w.kind === "project").map((w) => (
            <button key={w.id} className="eo-dock-btn" aria-label={w.title} title={w.title} onClick={() => this.openProject(w.pi!)} onContextMenu={(e) => this.openCtx(e, { type: "win", id: w.id })}>
              <img src={projects[w.pi!].image} alt="" />
              <span className="eo-dock-dot" />
            </button>
          ))}
          <span className="eo-dock-sep" aria-hidden="true" />
          <button className="eo-dock-btn" aria-label="Shut down and return to website" title="Back to website" onClick={this.shutdown}>
            <span className="eo-tile" style={{ ...tileStyle("#2a2540", 50), color: "#ffb4c4" }}><Power size={22} aria-hidden="true" /></span>
          </button>
        </nav>
      </>
    );
  }

  private renderPhoneChrome(clock: string, slTime: string, years: number) {
    const anyOpen = Object.values(this.state.wins).some((w) => !w.min);
    const dayName = this.state.now.toLocaleDateString("en-GB", { weekday: "long" }).toUpperCase();
    return (
      <>
        <div className="eo-status">
          <span>{clock}</span>
          <span className="eo-island" />
          <span className="eo-status-right"><Signal size={16} aria-hidden="true" /><Wifi size={16} aria-hidden="true" /><BatteryFull size={22} aria-hidden="true" /></span>
        </div>
        <div className="eo-pager" ref={this.pagerRef} onScroll={this.onPagerScroll} aria-label="Home screen pages">
        <section className="eo-page" aria-label="Home, page 1 of 2">
          <div className="eo-widgets">
            <div className="eo-ios-widget">
              <span style={{ fontSize: 13, fontWeight: 600, color: "#ffb4a0" }}>{dayName}</span>
              <span style={{ fontSize: 44, fontWeight: 300, lineHeight: 1, letterSpacing: "-0.03em" }}>{clock}</span>
              <span style={{ display: "flex", flexDirection: "column", gap: 2, fontSize: 12, color: "#e3ddf7" }}>
                <b style={{ display: "inline-flex", gap: 4, alignItems: "center" }}><MapPin size={11} aria-hidden="true" />Sri Lanka</b>
                <span>Erantha’s time {slTime}</span>
              </span>
            </div>
            <button className="eo-ios-widget" style={{ cursor: "pointer" }} onClick={() => this.openApp("about")}>
              <img src={meImg} alt="" style={{ width: 54, height: 54, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,.4)" }} />
              <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <b style={{ fontSize: 15, lineHeight: 1.15 }}>Erantha Welikala</b>
                <span style={{ fontSize: 12, color: "#e3ddf7" }}>Associate Tech Lead · {years}+ yrs</span>
              </span>
            </button>
          </div>
          <div className="eo-home-grid">
            {APP_ORDER.map((id) => (
              <button key={id} className="eo-home-app" onClick={() => this.openApp(id)} onContextMenu={(e) => this.openCtx(e, { type: "app", id })}>
                <AppTile id={id} size={62} /><span>{APPS[id].label}</span>
              </button>
            ))}
            {[0, 1, 2].map((i) => (
              <button key={i} className="eo-home-app" onClick={() => this.openProject(i)} onContextMenu={(e) => this.openCtx(e, { type: "project", id: i })}>
                <img src={projects[i].image} alt="" /><span>{projects[i].title}</span>
              </button>
            ))}
            <button className="eo-home-app" onClick={this.shutdown}>
              <span className="eo-tile" style={{ ...tileStyle("#2a2540", 62), fontSize: 17, color: "#ffb4c4" }}>www</span><span>Website</span>
            </button>
          </div>
        </section>
        <section className="eo-page" aria-label="Projects, page 2 of 2">
          <div className="eo-page-title"><b>Projects</b><span>{projects.length} apps · tap one to open it</span></div>
          <div className="eo-home-grid">
            {projects.map((p, i) => (
              <button key={i} className="eo-home-app" onClick={() => this.openProject(i)} onContextMenu={(e) => this.openCtx(e, { type: "project", id: i })}>
                <img src={p.image} alt="" /><span>{p.title}</span>
              </button>
            ))}
          </div>
        </section>
        </div>
        <div className="eo-dots" role="tablist" aria-label="Home screen pages">
          {[0, 1].map((i) => (
            <button key={i} role="tab" aria-selected={this.state.homePage === i} aria-label={i === 0 ? "Home page" : "Projects page"} onClick={() => this.goToPage(i)}><i /></button>
          ))}
        </div>
        <nav className="eo-phone-dock" aria-label="Dock">
          {(["finder", "about", "contact", "term"] as AppId[]).map((id) => (
            <button key={id} aria-label={APPS[id].label} onClick={() => this.openApp(id)}><AppTile id={id} size={60} /></button>
          ))}
        </nav>
        {anyOpen && <button className="eo-homebar" aria-label="Go to home screen" onClick={this.goHome}><span /></button>}
      </>
    );
  }

  private renderOverlays() {
    const { ctx, spot, spotQ, toast } = this.state;
    const q = spotQ.trim().toLowerCase();
    const results = [
      ...APP_ORDER.filter((id) => !q || APPS[id].label.toLowerCase().includes(q)).map((id) => ({ key: id, title: APPS[id].label, sub: "Application", app: id as AppId, image: "", open: () => this.openApp(id) })),
      ...projects
        .map((p, i) => ({ p, i }))
        .filter(({ p }) => !q || `${p.title} ${p.technologies.join(" ")} ${p.kind} ${p.categories.join(" ")}`.toLowerCase().includes(q))
        .map(({ p, i }) => ({ key: `p${i}`, title: p.title, sub: `${p.kind} · ${p.technologies.slice(0, 3).join(", ")}`, app: null, image: p.image, open: () => this.openProject(i) })),
    ].slice(0, 12);

    return (
      <>
        {ctx && (
          <div className="eo-ctx" role="menu" style={{ left: ctx.x, top: ctx.y }} onPointerDown={(e) => e.stopPropagation()} onContextMenu={(e) => e.preventDefault()}
            onKeyDown={(e) => { if (e.key === "Escape") this.setState({ ctx: null }); }}>
            {this.ctxItems().map((m, i) =>
              m.sep ? <hr key={i} /> : (
                <button key={i} role="menuitem" className={m.danger ? "danger" : ""} onClick={() => { this.setState({ ctx: null }); m.run?.(); }}>
                  <span>{m.label}</span><span>{m.hint}</span>
                </button>
              ),
            )}
          </div>
        )}
        {spot && (
          <div className="eo-spot-bg" onPointerDown={() => this.setState({ spot: false })}>
            <div className="eo-spot" role="dialog" aria-label="Search" onPointerDown={(e) => e.stopPropagation()}>
              <label>
                <Search size={20} aria-hidden="true" />
                <input ref={this.spotRef} value={spotQ} onChange={(e) => this.setState({ spotQ: e.target.value })} aria-label="Search apps and projects" placeholder="Search apps, projects, technologies…"
                  onKeyDown={(e) => { if (e.key === "Escape") this.setState({ spot: false }); else if (e.key === "Enter" && results[0]) results[0].open(); }} />
                <button className="eo-chip" style={{ border: "1px solid rgba(255,255,255,.2)", background: "transparent", color: "#a39cc4", cursor: "pointer" }} onClick={() => this.setState({ spot: false })}>Esc</button>
              </label>
              <div className="eo-spot-res">
                {results.map((r, i) => (
                  <button key={r.key} className={i === 0 && q ? "first" : ""} onClick={r.open}>
                    {r.app ? <AppTile id={r.app} size={36} /> : <img src={r.image} alt="" />}
                    <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}><b>{r.title}</b><span className="eo-dim" style={{ fontSize: 12 }}>{r.sub}</span></span>
                  </button>
                ))}
                {results.length === 0 && <div className="eo-dim" style={{ padding: 20, textAlign: "center" }}>Nothing found.</div>}
              </div>
            </div>
          </div>
        )}
        {toast && (
          <div className="eo-toast" role="status">
            <span className="eo-badge">E</span>
            <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><b style={{ fontSize: 14 }}>{toast.title}</b><span style={{ fontSize: 13, color: "#cfc8ec", lineHeight: 1.45 }}>{toast.body}</span></span>
          </div>
        )}
      </>
    );
  }

  render() {
    const { phase, now, phone, wins, menu, ctx } = this.state;
    if (phase === "boot") return this.renderBoot();
    if (phase === "shutdown") {
      return (
        <div className="eo-screen eo-boot eo-shutdown">
          <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
            <circle cx="20" cy="20" r="17" fill="none" stroke="rgba(163,123,255,.2)" strokeWidth="3" />
            <path d="M20 3a17 17 0 0 1 17 17" fill="none" stroke="#a37bff" strokeWidth="3" strokeLinecap="round" />
          </svg>
          Shutting down EraOS…
        </div>
      );
    }

    const clock = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    const dateLine = now.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
    const dateShort = now.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
    let slTime = "";
    try { slTime = now.toLocaleTimeString("en-GB", { timeZone: "Asia/Colombo", hour: "2-digit", minute: "2-digit" }); } catch { /* old browsers */ }

    if (phase === "lock") return this.renderLock(clock, dateLine, slTime);

    const api = this.api;
    const visible = Object.values(wins).filter((w) => !w.min);
    const focused = visible.sort((a, b) => b.z - a.z)[0];
    const ordered = Object.values(wins).sort((a, b) => a.seq - b.seq);

    return (
      <div className={`eo-screen eo-wall eo-desktop${phone ? " eo-phone" : ""}`} style={this.wallpaperStyle()}
        onPointerDown={() => { if (menu || ctx) this.setState({ menu: false, ctx: null }); }}
        onContextMenu={(e) => this.openCtx(e, { type: "desktop" })}>
        {phone ? this.renderPhoneChrome(clock, slTime, api.years) : this.renderMacChrome(clock, dateLine, dateShort, slTime, focused)}
        {ordered.map((w) => this.renderWindow(w, focused?.id, api))}
        {this.renderOverlays()}
      </div>
    );
  }
}
