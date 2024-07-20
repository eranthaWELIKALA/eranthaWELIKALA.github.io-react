import Timeline from "../../components/Timeline/Timeline";
import UserDescription from "../../components/UserDescription/UserDescription";
import styles from "./HomePage.module.css";
import myImage from "../../assets/images/me.png";
import usePageTracking from "../../usePageTracking";

function Home() {
    usePageTracking();
    return (
        <div>
            <UserDescription />

            <div className="container user-select-none">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className={styles.imageContainer}>
                            <img className={styles.roundImage} src={myImage} />
                        </div>
                    </div>
                    <div className="col-md-6 main-color-font mt-5 mt-md-0">
                        <div>
                            <h2>4+ Years of Experience</h2>
                        </div>
                        <p>BSc Engineering in Computing</p>
                        <p>Faculty of Engineering, University of Peradeniya</p>
                        <p>
                            Skilled in a diverse array of technologies and
                            frameworks, ensuring versatile and effective
                            problem-solving
                        </p>
                        <p>
                            Highly motivated in self-learning and rapidly
                            acquiring new skills to stay current with industry
                            advancements and emerging technologies
                        </p>
                        <p>
                            Demonstrated ability to tackle complex challenges
                            with innovative solutions and effective strategies.
                        </p>
                        <p>
                            Notable roles at AtLink Communication Inc.,
                            including Software Engineer Trainee, Associate
                            Software Engineer, Software Engineer, and Senior
                            Software Engineer
                        </p>
                    </div>
                </div>
            </div>

            <div className="container user-select-none">
                <div className="row mx-2 mx-md-0">
                    <div
                        className={`col-md-6 d-flex justify-content-start align-items-center my-5 p-0 ${styles.serviceItem}`}
                    >
                        <div>
                            <div className={styles.serviceIcon}>
                                <i className="fa fa-laptop-code"></i>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-start align-items-center flex-grow-1">
                            Web Development
                        </div>
                    </div>

                    <div
                        className={`col-md-6 d-flex justify-content-start align-items-center my-5 p-0 ${styles.serviceItem}`}
                    >
                        <div>
                            <div className={styles.serviceIcon}>
                                <i className="fab fa-apple"></i>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-start align-items-center flex-grow-1">
                            Mobile Development
                        </div>
                    </div>

                    <div
                        className={`col-md-6 d-flex justify-content-start align-items-center my-5 p-0 ${styles.serviceItem}`}
                    >
                        <div>
                            <div className={styles.serviceIcon}>
                                <i className="fas fa-code-branch"></i>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-start align-items-center flex-grow-1">
                            CI/ CD
                        </div>
                    </div>
                </div>
            </div>

            <Timeline />
        </div>
    );
}

export default Home;
