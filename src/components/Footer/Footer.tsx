import styles from "./Footer.module.css";

function Footer() {
    return (
        <div
            className={`${styles.footer} d-flex flex-column justify-content-center align-items-center jacquard-12-regular`}
        >
            <div className="container-fluid mt-3">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="h1">Erantha Welikala</div>
                        <div className="h2">Sri Lanka</div>
                        <div
                            className={`${styles.footerInfo} h4 d-flex flex-row justify-content-center align-items-center`}
                        >
                            <div className="d-none d-md-block">
                                <span>+94 77 5778979</span>
                                <span className="mx-2">|</span>
                                <span>
                                    <a href="mailto:eranthawelikala@gmail.com">
                                        eranthawelikala@gmail.com
                                    </a>
                                </span>
                                <span className="mx-2">|</span>
                                <span>
                                    <a href="mailto:eranthawelikala@eng.pdn.ac.lk">
                                        eranthawelikala@eng.pdn.ac.lk
                                    </a>
                                </span>
                            </div>
                            <div className="d-block d-md-none">
                                <div className="row text-center"><span>+94 77 5778979</span></div>
                                <span className="row text-center">
                                    <a href="mailto:eranthawelikala@gmail.com">
                                        eranthawelikala@gmail.com
                                    </a>
                                </span>
                                <span className="row text-center">
                                    <a href="mailto:eranthawelikala@eng.pdn.ac.lk">
                                        eranthawelikala@eng.pdn.ac.lk
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className={`${styles.footerSocial} h3`}>
                            <a
                                href="https://www.linkedin.com/in/eranthawelikala/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin-in me-3"></i>
                            </a>
                            <a
                                href="https://github.com/eranthaWELIKALA"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github me-3"></i>
                            </a>
                            <a
                                href="https://twitter.com/Eranthawelikala"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-twitter me-3"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/erantha.welikala"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-facebook-f me-3"></i>
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCmRE5-5F7sRd74FTl3sHNnw"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`${styles.copyright} container`}>
                    <p>
                        &copy; <a href="#">Erantha Welikala</a>
                    </p>
                </div>
            </div>
            <a href="#" className="btn back-to-top">
                <i className="fa fa-chevron-up"></i>
            </a>
        </div>
    );
}

export default Footer;
