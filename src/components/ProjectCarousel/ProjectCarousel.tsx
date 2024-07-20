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
import "./ProjectCarousel.css";

export default function ProjectCarousel() {
    const projectImages = [
        {
            src: portfolioImg,
            alt: "Portfolio Website",
            title: "Portfolio Website",
            description:
                "HTML/CSS & JS Application for showcasing Experience, Projects, and Skills",
        },
        {
            src: altS3Img,
            alt: "Alternative for AWS S3 Bucket",
            title: "Alternative for AWS S3 Bucket",
            description: "Alternative local application for AWS S3 bucket",
        },
        {
            src: audioVisualizationImg,
            alt: "Audio Visualization",
            title: "Audio Visualization",
            description: "Application for visualizing audio data",
        },
        {
            src: beautyAppImg,
            alt: "Beauty App",
            title: "Beauty App",
            description: "App for beauty and wellness management",
        },
        {
            src: bmsImg,
            alt: "BMS",
            title: "Bank Management System",
            description: "Bank Management System for bank account management",
        },
        {
            src: frsImg,
            alt: "Face Recognition System",
            title: "Face Recognition System",
            description: "System for recognizing faces",
        },
        {
            src: hnisImg,
            alt: "Handwritten Number Identification System",
            title: "Handwritten Number Identification System",
            description: "System for recognizing handwritten numbers",
        },
        {
            src: imsImg,
            alt: "IMS",
            title: "Member Information Management System",
            description: "Member Information Management System",
        },
        {
            src: mockRESTAPIImage,
            alt: "Mock REST API",
            title: "Mock REST API",
            description: "Mock implementation of a REST API",
        },
        {
            src: mtuteImg,
            alt: "MTute",
            title: "MTute",
            description: "Application for online tutoring",
        },
        {
            src: mtuteMobileImg,
            alt: "MTute Mobile",
            title: "MTute Mobile",
            description: "Mobile version of MTute",
        },
        {
            src: openHoursImg,
            alt: "Open Hours",
            title: "Open Hours",
            description: "Application for managing open hours",
        },
        {
            src: peraCricketImg,
            alt: "Pera Cricket",
            title: "Pera Cricket",
            description:
                "Cricket management system for University of Peradeniya",
        },
        {
            src: peraEMSImg,
            alt: "Pera EMS",
            title: "Pera E Medical System",
            description:
                "E Medical System for University of Peradeniya",
        },
        {
            src: rtqwmsImg,
            alt: "RTQWMS",
            title: "Real-Time Water Quality Management System",
            description: "Real-Time Water Quality Management System",
        },
        {
            src: smpeaImg,
            alt: "SMPEA",
            title: "Stock Management Platform using Ensemble Approach",
            description: "Stock Management Platform using Ensemble Approach",
        },
        {
            src: thunderCricketImg,
            alt: "Thunder Cricket",
            title: "Thunder Cricket",
            description: "Cricket management system",
        },
    ];
    return (
        <div
            id="carouselExampleAutoplaying"
            className="carousel slide flex-grow user-select-none border main-color-border rounded py-0 py-md-3 mt-3 mx-1 mx-md-5"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                {projectImages.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {projectImages.map((image, index) => (
                    <div
                        className={`carousel-item ${
                            index === 0 ? "active" : ""
                        }`}
                        key={index}
                    >
                        <div className="d-flex justify-content-center align-items-center">
                            <img
                                src={image.src}
                                className="img-fluid bd-placeholder-img bd-placeholder-img-lg d-block"
                                width="50%"
                                alt={image.alt}
                            />
                        </div>
                        <div className="carousel-caption d-none d-md-block highlight-text">
                            <h5>{index < 9 ? "0" + (index+1) : (index+1)}. {image.title}</h5>
                            <p>
                                {image.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
