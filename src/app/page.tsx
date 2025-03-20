import About from "@/components/modules/about";
import Contact from "@/components/modules/contact";
import Home from "@/components/modules/home";
import Project from "@/components/modules/project";
import Resume from "@/components/modules/resume";
import Skills from "@/components/modules/skills";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { getAllProjects } from "@/services/project";

const HomePage = async() => {
  const {data : projects} = await getAllProjects();
  return (
    <div className="container mx-auto">
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Resume />
      <Project projects={projects}/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default HomePage;