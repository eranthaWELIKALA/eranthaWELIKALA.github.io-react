import "./KnowledgeHub.css";
import javaImg from "../../assets/images/knowledge-hub/java.png";
import cImg from "../../assets/images/knowledge-hub/c.png";
import pythonImg from "../../assets/images/knowledge-hub/python.png";
import htmlImg from "../../assets/images/knowledge-hub/html.png";
import jsImg from "../../assets/images/knowledge-hub/js.png";
import phpImg from "../../assets/images/knowledge-hub/php.png";
import angularImg from "../../assets/images/knowledge-hub/angular.png";
import reactjsImg from "../../assets/images/knowledge-hub/reactjs.png";
import nodejsImg from "../../assets/images/knowledge-hub/nodejs.png";
import ionicImg from "../../assets/images/knowledge-hub/ionic.png";
import mysqlImg from "../../assets/images/knowledge-hub/mysql.png";
import firebaseImg from "../../assets/images/knowledge-hub/firebase.png";
import mongoDBImg from "../../assets/images/knowledge-hub/mongodb.png";
import dotnetImg from "../../assets/images/knowledge-hub/dotnet.png";
import usePageTracking from "../../usePageTracking";

export default function KnowledgeHub() {
    usePageTracking();

    let knowledgePoints = [
        {
            technology: "Java",
            classification: "Programming",
            description:
                "General-purpose programming language used for building cross-platform applications.",
            skillLevel: "Advanced",
            link: "https://docs.oracle.com/javase/8/docs/",
            img: javaImg,
        },
        {
            technology: "C Language",
            classification: "Programming",
            description:
                "A foundational programming language used in system and application software.",
            skillLevel: "Intermediate",
            link: "https://en.wikipedia.org/wiki/C_(programming_language)",
            img: cImg,
        },
        {
            technology: "Python",
            classification: "Programming",
            description:
                "Versatile programming language used for web development, data analysis, and more.",
            skillLevel: "Advanced",
            link: "https://www.python.org/doc/",
            img: pythonImg,
        },
        {
            technology: "HTML",
            classification: "Web Development",
            description: "Standard markup language for creating web pages.",
            skillLevel: "Advanced",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            img: htmlImg,
        },
        {
            technology: "JavaScript",
            classification: "Web Development",
            description:
                "Programming language used to create interactive effects within web browsers.",
            skillLevel: "Advanced",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            img: jsImg,
        },
        {
            technology: "PHP",
            classification: "Web Backend Development",
            description:
                "Server-side scripting language used for web development.",
            skillLevel: "Intermediate",
            link: "https://www.php.net/docs.php",
            img: phpImg,
        },
        {
            technology: "Angular",
            classification: "Web Frontend Development",
            description: "Framework for building dynamic web applications.",
            skillLevel: "Intermediate",
            link: "https://angular.io/docs",
            img: angularImg,
        },
        {
            technology: "ReactJS",
            classification: "Web Frontend Development",
            description:
                "JavaScript library for building user interfaces, particularly single-page applications.",
            skillLevel: "Intermediate",
            link: "https://reactjs.org/docs/getting-started.html",
            img: reactjsImg,
        },
        {
            technology: "NodeJS",
            classification: "Web Backend Development",
            description:
                "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
            skillLevel: "Intermediate",
            link: "https://nodejs.org/en/docs/",
            img: nodejsImg,
        },
        {
            technology: ".NET Core & Framework",
            classification: "Web Development",
            description:
                "Framework for building and running applications on Windows, macOS, and Linux.",
            skillLevel: "Intermediate",
            link: "https://docs.microsoft.com/en-us/dotnet/",
            img: dotnetImg,
        },
        {
            technology: "Ionic",
            classification: "Mobile Development",
            description:
                "Framework for building cross-platform mobile applications using web technologies.",
            skillLevel: "Intermediate",
            link: "https://ionicframework.com/docs",
            img: ionicImg,
        },
        {
            technology: "MySQL",
            classification: "SQL Database",
            description: "Open-source relational database management system.",
            skillLevel: "Advanced",
            link: "https://dev.mysql.com/doc/",
            img: mysqlImg,
        },
        {
            technology: "Firebase",
            classification: "No-SQL Database",
            description:
                "Platform for developing mobile and web applications with backend services.",
            skillLevel: "Intermediate",
            link: "https://firebase.google.com/docs",
            img: firebaseImg,
        },
        {
            technology: "MongoDB",
            classification: "No-SQL Database",
            description:
                "NoSQL database for handling large volumes of unstructured data.",
            skillLevel: "Intermediate",
            link: "https://www.mongodb.com/docs/",
            img: mongoDBImg,
        },
    ];

    return (
        <>
            <h1 className="major-mono-display-regular text-center main-color-font ms-3 my-3">
                Technologies/ Languages
            </h1>
            <div className="mx-3 user-select-none main-color-font">
                <div className="d-flex flex-row major-mono-display-regular mx-3">
                    <div className="col-md-3">Tech/ Language</div>
                    <div className="col-md-3">Classification</div>
                    <div className="col-md-3">Description</div>
                    <div className="col-md-3">Link</div>
                </div>
                {knowledgePoints.map((knowledgePoint, index) => (
                    <div
                        className="d-flex flex-column flex-md-row m-1 p-3 border main-color-border rounded"
                        key={index}
                    >
                        <div className="col-12 col-md-3 d-flex flex-row justify-content-start align-items-center mb-2 mb-md-0">
                            <img
                                className="me-3"
                                src={knowledgePoint.img}
                                width="40"
                                height="40"
                                alt={knowledgePoint.technology}
                            />
                            <span className="me-3">
                                {knowledgePoint.technology}
                            </span>
                        </div>
                        <div className="col-6 col-md-3 d-flex flex-row justify-content-start align-items-center mb-2 mb-md-0">
                            {knowledgePoint.classification}
                        </div>
                        <div className="col-12 col-md-3 d-flex flex-row justify-content-start align-items-center mb-2 mb-md-0 text-start">
                            {knowledgePoint.description}
                        </div>
                        <div className="col-12 col-md-3 d-flex flex-row justify-content-start justify-content-md-center align-items-center">
                            <a
                                href={knowledgePoint.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
