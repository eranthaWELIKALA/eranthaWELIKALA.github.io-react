import { useState } from "react";
import { Link } from "react-router-dom";
import { Power, X } from "lucide-react";
import { storage } from "./storage";
import "./eraos.css";

const DISMISS_KEY = "eraos-launch-dismissed";

/** Floating card on the normal site that boots EraOS. Dismissible; the nav button stays available. */
const LaunchCard = () => {
  const [hidden, setHidden] = useState(() => storage.get(DISMISS_KEY) === "1");
  if (hidden) return null;
  return (
    <div className="eo-launch">
      <button className="eo-launch-x" aria-label="Hide EraOS card" onClick={() => { storage.set(DISMISS_KEY, "1"); setHidden(true); }}>
        <X size={14} aria-hidden="true" />
      </button>
      <span className="eo-launch-text">
        <b>Try EraOS</b>
        <span className="eo-launch-desktop">Explore my work as a desktop</span>
        <span className="eo-launch-phone">Explore my work as a phone</span>
      </span>
      <Link to="/os" className="eo-launch-go"><Power size={16} strokeWidth={2.4} aria-hidden="true" />Boot</Link>
    </div>
  );
};

export default LaunchCard;
