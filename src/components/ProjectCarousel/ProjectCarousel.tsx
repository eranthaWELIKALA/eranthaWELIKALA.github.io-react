import portfolioImg from '../../assets/images/projects/portfolio.png'
import altS3Img from '../../assets/images/projects/alt-s3.png'
import "./ProjectCarousel.css"

export default function ProjectCarousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide flex-grow user-select-none border main-color-border rounded py-3 mt-3 mx-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={portfolioImg} className='img-fluid bd-placeholder-img bd-placeholder-img-lg d-block' width="50%"/>
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="main-color-font">01. Portfolio Website</h5>
                        <p className="main-color-font">HTML/ CSS & JS Application for showcasing Experience, Projects and Skills</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='bd-placeholder-img bd-placeholder-img-lg d-block w-100 d-flex justify-content-center align-items-center'>
                        <img src={altS3Img} className='img-fluid bd-placeholder-img bd-placeholder-img-lg d-block' width="50%"/>
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="main-color-font">02. Alternative for AWS S3 Bucket</h5>
                        <p className="main-color-font">Alternative local application for AWS S3 bucket</p>
                    </div>
                </div>
                {/* <div className="carousel-item">
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={portfolioImg} className='img-fluid bd-placeholder-img bd-placeholder-img-lg d-block' width="50%"/>
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="main-color-font">First slide label</h5>
                        <p className="main-color-font">Some representative placeholder content for the first slide.</p>
                    </div>
                </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
