import About from "@/components/modules/about";
import Contact from "@/components/modules/contact";
import Home from "@/components/modules/home";
import Resume from "@/components/modules/resume";
import Skills from "@/components/modules/skills";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Resume />
      <Contact />
      <Footer/>
    </div>
  );
};

export default HomePage;