
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import SkillsAbout from "./components/SkillsAbout";
import ProjectsSection from "./components/ProjectsSection";

const Main = () => {
    return (
    <main>
        <HomeSection />
        <SkillsAbout/>
        {/* <AboutSection /> */}
        <ProjectsSection/>
    </main>
);
};

export default Main;
