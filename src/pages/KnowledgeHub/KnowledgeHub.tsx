import './KnowledgeHub.css';
import javaImg from '../../assets/images/knowledge-hub/java.png';
import cImg from '../../assets/images/knowledge-hub/c.png';
import pythonImg from '../../assets/images/knowledge-hub/python.png';
import htmlImg from '../../assets/images/knowledge-hub/html.png';
import jsImg from '../../assets/images/knowledge-hub/js.png';
import phpImg from '../../assets/images/knowledge-hub/php.png';
import angularImg from '../../assets/images/knowledge-hub/angular.png';
import reactjsImg from '../../assets/images/knowledge-hub/reactjs.png';
import nodejsImg from '../../assets/images/knowledge-hub/nodejs.png';
import ionicImg from '../../assets/images/knowledge-hub/ionic.png';
import mysqlImg from '../../assets/images/knowledge-hub/mysql.png';
import firebaseImg from '../../assets/images/knowledge-hub/firebase.png';
import mongoDBImg from '../../assets/images/knowledge-hub/mongodb.png';
import dotnetImg from '../../assets/images/knowledge-hub/dotnet.png';

export default function KnowledgeHub() {
    let knowledgePoints = [
        {
            technology: "Java",
            classification: "Programming",
            link: "",
            img: javaImg
        },
        {
            technology: "C Language",
            classification: "Programming",
            link: "",
            img: cImg
        },
        {
            technology: "Python",
            classification: "Programming",
            link: "",
            img: pythonImg
        },
        {
            technology: "HTML",
            classification: "Web Development",
            link: "",
            img: htmlImg
        },
        {
            technology: "Javascript",
            classification: "Web Development",
            link: "",
            img: jsImg
        },
        {
            technology: "PHP",
            classification: "Web Backend Development",
            link: "",
            img: phpImg
        },
        {
            technology: "Angular",
            classification: "Web Frontend Development",
            link: "",
            img: angularImg
        },
        {
            technology: "ReactJS",
            classification: "Web Frontend Development",
            link: "",
            img: reactjsImg
        },
        {
            technology: "NodeJS",
            classification: "Web Backend Development",
            link: "",
            img: nodejsImg
        },
        {
            technology: ".NET Core & Framework",
            classification: "Web Development",
            link: "",
            img: dotnetImg
        },
        {
            technology: "Ionic",
            classification: "Mobile Development",
            link: "",
            img: ionicImg
        },
        {
            technology: "MySQL",
            classification: "SQL Database",
            link: "",
            img: mysqlImg
        },
        {
            technology: "Firebase",
            classification: "No-SQL Database",
            link: "",
            img: firebaseImg
        },
        {
            technology: "MongoDB",
            classification: "No-SQL Database",
            link: "",
            img: mongoDBImg
        },
    ];
    return (
        <>
            <h1 className="major-mono-display-regular text-center main-color-font ms-3 my-3">Technologies/ Languages</h1>
            <div className='mx-3 user-select-none main-color-font'>
                <div className='d-flex flex-row major-mono-display-regular mx-3'>
                    <div className='col-md-3'>Tech/ Language</div>
                    <div className='col-md-3'>Classification</div>
                    {/* <div className='col-md-6'>Link</div> */}
                </div>
            {
                knowledgePoints.map((knowledgePoint, index) => {
                    return (
                        <div className='d-flex flex-row m-1 p-3 border main-color-border rounded' key={index}>
                            <div className='col-md-3 d-flex flex-row justify-content-start align-items-center'>
                                <img className='me-3' src={ knowledgePoint.img } width="40" height="40" />
                                <span className='me-3'>{ knowledgePoint.technology }</span>
                            </div>
                            <div className='col-md-3 d-flex flex-row justify-content-start align-items-center'>{ knowledgePoint.classification }</div>
                        </div>
                    );
                })
            }
            </div>
        </>
    )
}