import React, { useEffect, useRef } from "react";
import "./Timeline.css";

function Timeline() {
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        }, options);

        if (timelineRef != null && timelineRef.current != null) {
            const timelineItems =
                timelineRef?.current?.querySelectorAll(".timeline");
            timelineItems.forEach((item: Element) => observer.observe(item));

            return () => {
                timelineItems.forEach((item: Element) =>
                    observer.unobserve(item)
                );
            };
        }
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="main-timeline" ref={timelineRef}>
                        <div className="timeline">
                            <a className="timeline-content">
                                <div className="timeline-icon">
                                    <i className="fa fa-award"></i>
                                </div>
                                <h3 className="title">
                                    Senior Software Engineer
                                </h3>
                                <h6 className="sub-title fst-italic">
                                    AtLink Communication Inc [2023 Jan - Now]
                                </h6>
                                <div className="description">
                                    Frontent development using{" "}
                                    <b>Angular, HTML/CSS & JS</b>
                                </div>
                                <div className="description">
                                    Backend development using{" "}
                                    <b>NodeJS, Laravel</b>
                                </div>
                                <div className="description">
                                    Fullstack development using{" "}
                                    <b>ASP.NET, VB.NET</b>
                                </div>
                                <div className="description">
                                    Mobile development using <b>Ionic</b>
                                </div>
                                <div className="description">
                                    CICD using <b>Jenkins, Docker</b>
                                </div>
                                <div className="description">
                                    Code Quality Maintenance using{" "}
                                    <b>SonarQube</b>
                                </div>
                                <div className="description">
                                    Research and Development on <b>ELK Stack</b>
                                </div>
                            </a>
                        </div>
                        <div className="timeline py-5">
                            <a className="timeline-content">
                                <div className="timeline-icon">
                                    <i className="fa fa-atom"></i>
                                </div>
                                <h3 className="title">Software Engineer</h3>
                                <h6 className="sub-title fst-italic">
                                    AtLink Communication Inc [2020 Aug - 2022]
                                </h6>
                                <div className="description">
                                    Mobile development using{" "}
                                    <p>
                                        <b>Android Studio(Java)</b>,{" "}
                                        <b>Objective-C</b> & <b>Ionic</b>
                                    </p>
                                </div>
                                <div className="description">
                                    Fullstack development using <b>Django</b>
                                </div>
                                <div className="description">
                                    Backend development using <b>NodeJS</b>
                                </div>
                                <div className="description">
                                    Frontent development using <b>Angular</b>
                                </div>
                            </a>
                        </div>
                        <div className="timeline py-5">
                            <a className="timeline-content">
                                <div className="timeline-icon">
                                    <i className="fa fa-brain"></i>
                                </div>
                                <h3 className="title">
                                    Associate Software Engineer
                                </h3>
                                <h6 className="sub-title fst-italic">
                                    AtLink Communication Inc [2019 DEC - JAN]
                                </h6>
                                <div className="description">
                                    Backend development using <b>Java</b>
                                </div>
                                <div className="description">
                                    Frontent development using <b>Angular</b>
                                </div>
                            </a>
                        </div>
                        <div className="timeline mb-5 py-5">
                            <a className="timeline-content">
                                <div className="timeline-icon">
                                    <i className="fa fa-user-graduate"></i>
                                </div>
                                <h3 className="title">
                                    Software Engineer Trainee
                                </h3>
                                <h6 className="sub-title fst-italic">
                                    AtLink Communication Inc [2019 FEB - JUL]
                                </h6>
                                <div className="description">
                                    Automation testing using <b>Protractor</b>
                                </div>
                                <div className="description">
                                    Research and development using{" "}
                                    <b>ThreeJS</b> and <b>UWP</b>
                                </div>
                                <div className="description">
                                    Backend development using <b>Java</b>
                                </div>
                                <div className="description">
                                    Frontent development using <b>Angular</b>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
