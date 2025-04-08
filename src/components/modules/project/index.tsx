import { IProject } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ projects }: { projects: IProject[] }) => {
  return (
    <div id="project" className="py-16 mx-4">
      <div>
        <div>
          <h2 className="text-4xl font-bold text-center text-[#019fc7] mb-12">My Projects</h2>
          <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Explore a collection of my latest web development projects, showcasing creativity, clean UI, and powerful functionality built with modern technologies.
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects?.map((project) => (
            <div data-aos="zoom-out-up" key={project._id} className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-white/20 hover:border-[#60a5f9] p-4 bg-[#0f1524]">
              {/* Project Image */}
              <div className="relative">
                <Image
                  className="w-full md:h-48 h-38 object-cover rounded-t-lg"
                  src={project?.images[0]}
                  alt={project?.name}
                  width={500}
                  height={300}
                />
              </div>
              {/* Project Info */}
              <div className="md:p-6 md:py-0 py-4">
                <div className="flex justify-between items-center gap-8 my-4">
                  <h3 className="text-xl font-semibold text-[#019fc7]">{project?.name}</h3>
                  {
                    project?.projectType === 'team' && <p className="bg-[#019fc7] md:px-4 md:py-2 px-2 py-1 rounded-full font-bold md:text-sm text-[12px] ">Team Project</p>
                  }
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* Displaying Technologies Used */}
                  <span className="font-semibold">Technologies:</span>

                  {/* Frontend Technologies */}
                  {project?.technologiesUsed?.frontend.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 border hover:border-[#60a5f9] border-white/30 flex items-center gap-2 p-2 rounded-full bg-[#171f2e] hover:scale-105 transition-all duration-300 ease-in-out text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                  {/* Backend Technologies */}
                  {project?.technologiesUsed?.backend.map((tech, index) => (
                    <span
                      key={index}
                       className="px-3 py-1 border hover:border-[#60a5f9] border-white/30 flex items-center gap-2 p-2 rounded-full bg-[#171f2e] hover:scale-105 transition-all duration-300 ease-in-out text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                  {/* Database */}
                  <span
                     className="px-3 py-1 border hover:border-[#60a5f9] border-white/30 flex items-center gap-2 p-2 rounded-full bg-[#171f2e] hover:scale-105 transition-all duration-300 ease-in-out text-sm"
                  >
                    {project?.technologiesUsed?.database}
                  </span>

                  {/* Authentication */}
                  <span
                      className="px-3 py-1 border hover:border-[#60a5f9] border-white/30 flex items-center gap-2 p-2 rounded-full bg-[#171f2e] hover:scale-105 transition-all duration-300 ease-in-out text-sm"
                  >
                    {project?.technologiesUsed?.authentication}
                  </span>
                </div>

                <div className="md:flex flex-col gap-3 md:mb-0">
                  {/* Key Features */}
                  <div>
                    <p className="font-semibold">Key Features:</p>
                    <ul className="list-disc list-inside">
                      {project?.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Links to GitHub */}
                  <div className="md:flex justify-between items-center mt-6">
                    {/* Live Site */}
                    <a
                      href={project?.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#019fc7] text-white py-3 px-6 rounded-md shadow-lg hover:bg-primary-dark hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      Visit Live Site <ExternalLink />
                    </a>

                    {/* GitHub Links */}
                    <div className="flex gap-4 md:mt-0 mt-4 justify-between">
                      <a
                        href={project?.clientSiteGitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline hover:text-primary-dark transition duration-300 ease-in-out "
                      >Client Code
                      </a>
                      <a
                        href={project?.serverSiteGitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline hover:text-primary-dark transition duration-300 ease-in-out"
                      >
                        Server Code
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
