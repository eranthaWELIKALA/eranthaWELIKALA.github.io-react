import ProjectCarousel from "../../components/ProjectCarousel/ProjectCarousel";
import ProjectProfile from "../../components/ProjectProfile/ProjectProfile";
import usePageTracking from "../../usePageTracking";

function Projects() {
    usePageTracking();
    return (
    <>
    <ProjectCarousel />
    <ProjectProfile />
    </>
    );
}

export default Projects