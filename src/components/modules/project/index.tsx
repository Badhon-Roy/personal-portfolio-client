import { IProject } from "@/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const Project = ({ projects }: { projects: IProject[] }) => {
  return (
    <div id="project" className="py-16">
      <div>
        <div>
          <h2 className="text-4xl font-bold text-center text-primary mb-12">My Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects?.map((project) => (
            <div key={project._id} className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 border p-4">
              {/* Project Image */}
              <div className="relative">
                <Image
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={project?.images[0]}
                  alt={project?.name}
                  width={500}
                  height={300}
                />
              </div>
              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold mb-2 text-[#019fc7]">{project?.name}</h3>
                  {
                    project?.projectType === 'team' && <p className="bg-[#019fc7] px-4 py-2 rounded-full font-bold text-sm ">Team Project</p>
                  }
                </div>
                <p className="mb-4">{project?.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* Displaying Technologies Used */}
                  <span className="font-semibold">Technologies:</span>

                  {/* Frontend Technologies */}
                  {project?.technologiesUsed?.frontend.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm rounded-full ${tech === "React.js" ? "bg-blue-500 text-white" :
                        tech === "Tailwind CSS" ? "bg-teal-500 text-white" :
                          "bg-gray-300 text-black" // Default case if tech is not specified
                        }`}
                    >
                      {tech}
                    </span>
                  ))}

                  {/* Backend Technologies */}
                  {project?.technologiesUsed?.backend.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm rounded-full ${tech === "Express.js" ? "bg-green-500 text-white" :
                        tech === "JWT" ? "bg-yellow-500 text-black" :
                          "bg-gray-300 text-black" // Default case if tech is not specified
                        }`}
                    >
                      {tech}
                    </span>
                  ))}

                  {/* Database */}
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${project?.technologiesUsed?.database === "MongoDB" ? "bg-green-600 text-white" : "bg-gray-300 text-black"
                      }`}
                  >
                    {project?.technologiesUsed?.database}
                  </span>

                  {/* Authentication */}
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${project?.technologiesUsed?.authentication === "Firebase" ? "bg-orange-500 text-white" : "bg-gray-300 text-black"
                      }`}
                  >
                    {project?.technologiesUsed?.authentication}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
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
                  <div className="flex justify-between items-center mt-6">
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
                    <div className="flex gap-4">
                      <a
                        href={project?.clientSiteGitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline hover:text-primary-dark transition duration-300 ease-in-out"
                      >
                        Client Code
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
