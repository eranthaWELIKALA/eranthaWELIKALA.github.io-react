import styles from "./About.module.css";
import myImage from "../../assets/images/me.png";
import cvFile from "../../assets/cv/EranthaWelikala20240520.pdf";

function About() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = cvFile;
        link.download = "Erantha Welikala Resume Last Updated on 20240520.pdf";
        link.click();
    };

    return (
        <div className={styles.aboutContainer}>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12 col-md-6">
                        <h2 className="main-color-font">About Me</h2>
                        <div className="container d-flex flex-column justify-content-center">
                            <div className="row mt-3">
                                <div className="col-3 col-md-6 text-start">
                                    <label className="main-color-font">
                                        Email
                                    </label>
                                </div>
                                <div className="col-9 col-md-6 text-start">
                                    <label className="main-color-font">
                                        eranthawelikala@gmail.com
                                    </label>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-3 col-md-6 text-start">
                                    <label className="main-color-font">
                                        Role
                                    </label>
                                </div>
                                <div className="col-9 col-md-6 text-start">
                                    <label className="main-color-font">
                                        Senior Software Engineer
                                    </label>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-3 col-md-6 text-start">
                                    <label className="main-color-font">
                                        Phone
                                    </label>
                                </div>
                                <div className="col-9 col-md-6 text-start">
                                    <label className="main-color-font">
                                        +94 77 577 8979
                                    </label>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center align-items-center mt-3">
                                <div className="col-auto">
                                    <button
                                        className={`btn btn-primary rounded ${styles.downloadBtn}`}
                                        onClick={handleDownload}
                                    >
                                        Download CV
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center my-5 my-md-0">
                        <div className={styles.imageContainer}>
                            <div className={styles.shadowBackground}></div>
                            <img className={styles.roundImage} src={myImage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
