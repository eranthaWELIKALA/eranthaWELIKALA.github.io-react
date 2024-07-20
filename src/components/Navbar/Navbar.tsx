import { NavLink } from "react-router-dom";
import { useRef } from "react";

function Navbar() {
    const name = "Erantha";
    const navbarCollapseRef = useRef<HTMLDivElement>(null);

    const handleNavLinkClick = () => {
        if (navbarCollapseRef.current && navbarCollapseRef.current?.classList.contains("show")) {
            navbarCollapseRef.current.classList.remove("show");
        }
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light user-select-none">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {name}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                end
                                aria-current="page"
                                onClick={handleNavLinkClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                end
                                aria-current="page"
                                onClick={handleNavLinkClick}
                            >
                                Experience
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                end
                                aria-current="page"
                                onClick={handleNavLinkClick}
                            >
                                Contact
                            </NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                end
                                aria-current="page"
                                onClick={handleNavLinkClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                end
                                aria-current="page"
                                onClick={handleNavLinkClick}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/knowledge-hub"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                end
                                aria-current="page"
                                onClick={handleNavLinkClick}
                            >
                                Knowledge Lib
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
