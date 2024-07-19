import Timeline from "../../components/Timeline/Timeline";
import UserDescription from "../../components/UserDescription/UserDescription";
import styles from "./HomePage.module.css";
import myImage from "../../assets/images/me.png";

function Home() {
    return (
        <div>
            <UserDescription />

            <div className="container user-select-none">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className={styles.imageContainer}>
                            <img
                                className={styles.roundImage}
                                src={myImage}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 main-color-font">
                        <div>
                            <h2>4+ Years of Experience</h2>
                        </div>
                        <p>
                            Computer Engineer graduated from Universtity of
                            Peradeniya, Engineering Faculty
                        </p>
                        <p>
                            Senior Software Engineer, AtLink Communication Inc.
                        </p>
                        <p>Software Engineer, AtLink Communication Inc.</p>
                        <p>
                            Associate Software Engineer, AtLink Communication
                            Inc.
                        </p>
                        <p>
                            Software Engineer Traineer, AtLink Communication
                            Inc.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container user-select-none">
                <div className="row">
                    <div className={`col-md-6 d-flex justify-content-start align-items-center my-5 p-0 ${styles.serviceItem}`}>
                        <div className="">
                            <div className={styles.serviceIcon}>
                                <i className="fa fa-laptop-code"></i>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-start align-items-center">Web Development</div>
                    </div>

                    <div className={`col-md-6 d-flex justify-content-start align-items-center my-5 p-0 ${styles.serviceItem}`}>
                        <div className="">
                            <div className={styles.serviceIcon}>
                                <i className="fab fa-apple"></i>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-start align-items-center">Mobile Development</div>
                    </div>

                    <div className={`col-md-6 d-flex justify-content-start align-items-center my-5 p-0 ${styles.serviceItem}`}>
                        <div className="">
                            <div className={styles.serviceIcon}>
                                <i className="fas fa-code-branch"></i>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-start align-items-center">CI/ CD</div>
                    </div>
                </div>
            </div>

            <Timeline />
        </div>
    );
}

export default Home;