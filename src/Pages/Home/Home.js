import { useRef } from "react";
import NavBar from "../../Components/Navbar/Navbar";
import Landing from "./Landing/Landing";
import MinorProjects from "./OtherProjects/minorProjects";
import Skills from "./Skills/skills";
import Project from "./Projects/Project";
import Experience from "./Experiences/Experience";
import Footer from "./Footer/Footer";
import BackToTop from "../../Components/BackToTop/backToTop";
import PreLoader from '../../Components/PreLoader/PreLoader';

function Home() {
  let Landing_ref = useRef(null);
  let Project_ref = useRef(null);
  let Skills_ref = useRef(null);
  let Experience_ref = useRef(null);
  let Profile_ref = useRef(null);

  const ScrollToLanding = () => {
   Landing_ref.current.scrollIntoView({ behavior: "smooth" });
  
 };

  const ScrollToProject = () => {
    Project_ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollToSkills = () => {
   Skills_ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollToExperience = () => {
   Experience_ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollToProfile = () => {
   Profile_ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <PreLoader/>
      <NavBar
        onClickProject={ScrollToProject}
        onClickSkills={ScrollToSkills}
        onClickExperiences={ScrollToExperience}
        onClickProfile={ScrollToProfile}
        onClickLanding={ScrollToLanding}

      />
      <Landing Landing_ref={Landing_ref}/>
      <Experience Experience_ref={Experience_ref}/>
      <Project Project_ref={Project_ref} />
      <MinorProjects />
      <Skills Skills_ref={Skills_ref}/>
      <Footer onClickLanding={ScrollToLanding} Profile_ref={Profile_ref}/>
      <BackToTop/>
    </>
  );
}

export default Home;
