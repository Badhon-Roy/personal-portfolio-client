import About from "@/components/modules/about";
import Contact from "@/components/modules/contact";
import Home from "@/components/modules/home";
import Resume from "@/components/modules/resume";
import Navbar from "@/components/shared/Navbar";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Contact />
    </div>
  );
};

export default HomePage;