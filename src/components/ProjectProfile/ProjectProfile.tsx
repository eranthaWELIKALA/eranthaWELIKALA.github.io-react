
import altS3Img from "../../assets/images/projects/alt-s3.png";
import audioVisualizationImg from "../../assets/images/projects/audio-visualization.png";
import beautyAppImg from "../../assets/images/projects/beauty-app.png";
import bmsImg from "../../assets/images/projects/bms.png";
import frsImg from "../../assets/images/projects/face-recognition-system.png";
import hnisImg from "../../assets/images/projects/handwritten-number-identificatio-system.png";
import imsImg from "../../assets/images/projects/ims.png";
import mockRESTAPIImage from "../../assets/images/projects/mock-rest-api.png";
import mtuteImg from "../../assets/images/projects/mtute.png";
import mtuteMobileImg from "../../assets/images/projects/mtute-mobile.png";
import openHoursImg from "../../assets/images/projects/open-hours.png";
import peraCricketImg from "../../assets/images/projects/pera-cricket.png";
import peraEMSImg from "../../assets/images/projects/pera-ems.png";
import portfolioImg from "../../assets/images/projects/portfolio.png";
import rtqwmsImg from "../../assets/images/projects/rtwqms.png";
import smpeaImg from "../../assets/images/projects/smpea.png";
import thunderCricketImg from "../../assets/images/projects/thunder-cricket.png";
import gitProfileManagerImg from "../../assets/images/projects/git-profile-manager.png";
import "./ProjectProfile.css";
import usePageTracking from "../../usePageTracking";

export default function ProjectProfile() {
    usePageTracking();
    let projects = [
        {
            title: "Stock Market Prediction Using an Ensemble Approach	",
            description:
                "Stock market prediction. Stock market is highly volatile. Therefore, most of investors wonders whether they can have a pre-idea about the market before investing on the stock market. So, our solution is to predict the stock market using an ensemble approach by focusing on the accuracy. Three individual models are implemented and used to make a combined model.",
            techStack: `Programming Interface{ Language: Python }
            User Interface{ Frontend: Angular, Backend: NodeJS, Python Flask, Database: Firebase }`,
            projectOwner: "Amila Indika, Nethmal Warusamana, Erantha Welikala",
            githubRepos: "https://github.com/eranthaWELIKALA/Stock_Market_Prediction_Platform.git",
            links: "",
            image: smpeaImg,
        },
        {
            title: "Bank Managing System",
            description:
                "e-Bank Management system for a bank to handle transactions and paying bills and etc. It is an individual project and tried for learning java swing framework.",
            techStack: "Java",
            projectOwner: "Erantha Welikala",
            githubRepos: "https://github.com/eranthaWELIKALA/Bank_Management_System",
            links: "",
            image: bmsImg,
        },
        {
            title: "Member Information Management System",
            description:
                "A web application that facilitates of handling and managing the information of an Old boy Association of a school.",
            techStack: "Frontend: HTML/CSS, Backend: PHP, Database: MySQL",
            projectOwner: "Dr.Dammika Elkaduwe",
            githubRepos: "https://github.com/eranthaWELIKALA/Information-Management-System.git",
            links: "",
            image: imsImg,
        },
        {
            title: "Pera EMS",
            description:
                "Web based E-System for Health Center of University to make its tasks easy.",
            techStack: "Frontend: HTML/CSS, Backend: PHP, Database: MySQL",
            projectOwner: "",
            githubRepos: "https://github.com/eranthaWELIKALA/PeraEMS-Project.git",
            links: "",
            image: peraEMSImg,
        },
        {
            title: "Portfolio Website",
            description:
                "HTML/ CSS & JS Application for showcasing Experience, Projects and Skills.",
            techStack:
                "Frontend: React, Hosting: Github",
            projectOwner: "Erantha Welikala",
            githubRepos: ["https://github.com/eranthaWELIKALA/eranthaWELIKALA.github.io.git", "https://github.com/eranthaWELIKALA/eranthaWELIKALA.github.io-react.git"],
            links: "eranthawelikala.github.io",
            image: portfolioImg,
        },
        {
            title: "Alternative for AWS S3 Bucket",
            description:
                "An alternative local application for AWS S3 bucket.",
            techStack:
                "Technologies: NodeJS with EJS, Docker",
            projectOwner: "Erantha Welikala",
            githubRepos: "https://github.com/eranthaWELIKALA/Alternative-AWS-S3-Bucket.git",
            links: "https://hub.docker.com/r/eranthawelikala/storage-service",
            image: altS3Img,
        },
        {
            title: "GIT Profile Manager",
            description:
                "Command line application which helps users to manage multiple GIT profiles within the same system. Using this, users can easily config their local git repositories instead of following a complex set of steps/commands.",
            techStack:
                "Technologies: Batch Scripts, Inno Setup, Shell Scripts",
            projectOwner: "Erantha Welikala",
            githubRepos: "https://github.com/eranthaWELIKALA/GIT-Profile-Manager",
            links: "https://eranthawelikala.github.io/GIT-Profile-Manager/",
            image: gitProfileManagerImg,
        },
        {
            title: "Mock REST API",
            description:
                "An API that provides a platform to test your client side without waiting till the backend decelopment is completed. Developers can provided the expected responses to the mock API and retrieve them using an endpoint.",
            techStack:
                "Technologies: NodeJS, Docker",
            projectOwner: "Erantha Welikala",
            githubRepos: "https://github.com/eranthaWELIKALA/ResponseHandler.git",
            links: "https://hub.docker.com/r/eranthawelikala/mock-rest-api",
            image: mockRESTAPIImage,
        },
        {
            title: "Pera Cricket",
            description:
                "A web application that facilitates of updating and storing information of cricket matches played by University of Peradeniya. This is a my own idea to provide an database to my own teammates so they can show off their statistics, compare the progress and motivate them to increase their performances.",
            techStack:
                "Frontend: HTML/CSS with bootstrap, Backend: PHP, Database: MySQL, Hosting: 000webhostapp",
            projectOwner: "Erantha Welikala",
            githubRepos: "https://github.com/eranthaWELIKALA/PeraCricket.git",
            links: "",
            image: peraCricketImg,
        },
        {
            title: "Real Time Water Quality Measurement System",
            description:
                "A web application which helps to get water quality measurements in real time with the help of the sensors in a node which placed in water.",
            techStack: "AVR, MySQL, PHP, HTML, CSS, Vue js",
            projectOwner: "",
            githubRepos: ["https://github.com/eranthaWELIKALA/RealTimeWaterQualityMeasurementSystem.git", "https://github.com/eranthaWELIKALA/RealTimeWaterQualityMeasurementSystem-API.git", "https://github.com/eranthaWELIKALA/RealTimeWaterQualityMeasurementSystem-EmbeddedDesign.git"],
            links: "",
            image: rtqwmsImg,
        },
        {
            title: "Open Hours",
            description:
                "A mobile application, tells you a shop is opened or not at now and support shop owners to do some promotions",
            techStack: "Android Studio",
            projectOwner:
                "Amila Indika, Erantha Welikala, Nethmal Warusumana, Rochana Pathiraja",
            githubRepos: "",
            links: "",
            image: openHoursImg,
        },
        {
            title: "Audio Visualization",
            description:
                "A web-based software that is visualizing the music while playing",
            techStack: "JavaScript, NodeJS",
            projectOwner: "Erantha Welikala, Kasun Vimukthi, Shehan Dinuka",
            githubRepos: "https://github.com/eranthaWELIKALA/AudioVisualization.git",
            links: "",
            image: audioVisualizationImg,
        },
        {
            title: "mtute.lk",
            description:
                "An Educational platform for Intitutes, Instructors and students to get together and share resources. Each of everyone has their own benefits. Intitutes can promote their classes. Instructors also can promote thier classes individually, publish papers and short-notes. Students can go through and find classes/ instructors, papers and notes.",
            techStack:
                "Frontend : Angular, Backend: NodeJS, Database: Firebase, Hosting: AWS EC2",
            projectOwner: "Ruwan Chamara",
            githubRepos: "",
            links: "",
            image: mtuteImg,
        },
        {
            title: "mtute Mobile",
            description:
                "Mobile applications for share papers and short notes between instructors and students. It is the mobile application of the www.mtute.lk website.",
            techStack: "Ionic",
            projectOwner: "Ruwan Chamara",
            githubRepos: "https://github.com/eranthaWELIKALA/Question-App.git",
            links: "",
            image: mtuteMobileImg,
        },
        {
            title: "Thunder Cricket",
            description:
                "A web application that facilitates of updating and storing information of cricket matches played by Thunder Cricket Club, Kandy This database is much similar to peracricket database. This was requested by a private cricket club after seeing the peracricket database.",
            techStack:
                "Frontend: HTML/CSS with bootstrap, Backend: PHP, Database: MySQL, Hosting: 000webhostapp",
            projectOwner: "Ruwan Sandakelum",
            githubRepos: "",
            links: "",
            image: thunderCricketImg,
        },
        {
            title: "Face Recognition System",
            description: "",
            techStack: "Python",
            projectOwner: "",
            githubRepos: "https://github.com/eranthaWELIKALA/Face-Recognition-through-Vision-and-Computer-Vision.git",
            links: "",
            image: frsImg,
        },
        // {
        //     title: "HandWritten Number Identification System",
        //     description: "",
        //     techStack: "Python",
        //     projectOwner: "",
        //     githubRepos: "",
        //     links: "",
        //     image: hnisImg,
        // },
    ];
    return (
        <div className="container my-3">
            <div className="row">
                {projects.map((project, index) => (
                    <div
                        className="col-md-4 d-flex align-items-stretch user-select-none"
                        key={index}
                    >
                        <div className="card mb-4 w-100 d-flex flex-column">
                            <img
                                src={project.image}
                                className="profileImg card-img-top img-fluid"
                                alt="..."
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">
                                    {project.description}
                                </p>
                                <p className="card-text">
                                    <strong>Tech Stack:</strong>{" "}
                                    {project.techStack}
                                </p>
                                <p className="card-text">
                                    <strong>Project Owner:</strong>{" "}
                                    {project.projectOwner}
                                </p>
                                <div className="mt-auto">
                                    {Array.isArray(project.githubRepos)
                                        ? project.githubRepos.map(
                                              (link, index) => (
                                                  <a
                                                      key={index}
                                                      href={link}
                                                      className="btn btn-primary m-1"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                  >
                                                      GitHub Repo {index+1}
                                                  </a>
                                              )
                                          )
                                        : project.githubRepos && (
                                              <a
                                                  href={project.githubRepos}
                                                  className="btn btn-primary m-1"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                              >
                                                  GitHub Repo
                                              </a>
                                          )}
                                    {Array.isArray(project.links)
                                        ? project.links.map((link, index) => (
                                              <a
                                                  key={index}
                                                  href={link}
                                                  className="btn btn-primary m-1"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                              >
                                                  Visit [Link {index+1}]
                                              </a>
                                          ))
                                        : project.links && (
                                              <a
                                                  href={project.links}
                                                  className="btn btn-primary m-1"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                              >
                                                  Visit
                                              </a>
                                          )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
