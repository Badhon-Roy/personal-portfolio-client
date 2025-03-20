import About from "@/components/modules/about";
import Blog from "@/components/modules/blog";
import Contact from "@/components/modules/contact";
import Home from "@/components/modules/home";
import Project from "@/components/modules/project";
import Resume from "@/components/modules/resume";
import Skills from "@/components/modules/skills";
import { getAllBlogs } from "@/services/blog";
import { getAllProjects } from "@/services/project";

const HomePage = async() => {
  const {data : projects} = await getAllProjects();
  const {data : blogs} = await getAllBlogs();
  return (
    <div className="container mx-auto">
      <Home />
      <About />
      <Skills/>
      <Resume />
      <Project projects={projects}/>
      <Blog blogs={blogs}/>
      <Contact />
    </div>
  );
};

export default HomePage;