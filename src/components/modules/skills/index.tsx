"use client";

import { CodeXml, Cpu, Database } from "lucide-react";
import Image from "next/image";


const frontendSkills = [
    { name: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png" },
    { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" },
    { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" },
    { name: "Bootstrap", img: "https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" },
    { name: "JavaScript", img: "https://pnggallery.com/wp-content/uploads/javascript-logo-01.png" },
    { name: "Next.js", img: "https://marcbruederlin.gallerycdn.vsassets.io/extensions/marcbruederlin/next-icons/0.1.0/1723747598319/Microsoft.VisualStudio.Services.Icons.Default" },
    { name: "React", img: "https://static-00.iconduck.com/assets.00/react-javascript-js-framework-facebook-icon-1024x911-dnspa9ed.png" },
    { name: "Redux", img: "https://static-00.iconduck.com/assets.00/redux-icon-2048x1945-ahvhunxp.png" }
]

const backendSkills = [
    { name: "TypeScript", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" },
    { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/256/5968/5968322.png" },
    { name: "Express.js", img: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
    { name: "MongoDB", img: "https://static-00.iconduck.com/assets.00/database-mongo-db-icon-980x1024-1q3t2p6x.png" },
    { name: "Mongoose", img: "https://img.icons8.com/?size=512&id=gKfcEStXI1Hm&format=png" },
]
const tools = [
    { name: "Git", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" },
    { name: "GitHub", img: "https://www.pngmart.com/files/23/Github-Logo-PNG.png" },
    { name: "Figma", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1365px-Figma-logo.svg.png" },
    { name: "VS Code", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" },
    { name: "Postman", img: "https://www.applivery.com/wp-content/uploads/2024/09/Postman.png" },
    { name: "Firebase", img: "https://seekvectors.com/files/download/ffe6fba930dfc0755e5c21537be68530.png" },
    { name: "NPM", img: "https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-8sw7kisf.png" },
    { name: "Vercel", img: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vercel.png" },
]
export default function Skills() {
    // const [activeTab, setActiveTab] = useState("Front-end");
    return (
        <section id="skills" className="relative py-16 text-white my-16 rounded-lg md:mx-0 mx-4">

            <div className="container mx-auto px-6">
                {/* Section Heading */}
                <h2 className="text-4xl font-bold text-center text-[#019fc7] mb-6">My Skills</h2>
                <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                    I specialize in modern web development, creating dynamic and responsive applications. Below are my core skills and technologies I work with.
                </p>
                <div className="grid grid-cols-3 gap-6">
                    <div className="p-6 rounded-lg border border-white/30 bg-[#0f1524] hover:shadow-lg shadow-[#60a5f9] transition-all duration-300 ease-in-out hover:border hover:border-[#60a5f9]">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#171f2e] inline-block p-4 rounded-lg ">
                                <CodeXml className="text-[#60a5f9]" size={30} />
                            </div>
                            <h2 className="text-[24px] font-bold"> Frontend Development</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            {
                                frontendSkills?.map((skill: any) => (
                                    <div key={skill?.name} className="border hover:border-[#60a5f9] border-white/30 flex items-center gap-2 p-2 rounded-full bg-[#171f2e] hover:scale-105 transition-all duration-300 ease-in-out">
                                        <Image className="w-[15px]" src={skill?.img} alt={skill?.name} width={100} height={100}></Image>
                                        <h2 className="text-sm">{skill?.name}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="p-6 rounded-lg border border-white/30 bg-[#0f1524] hover:shadow-lg shadow-[#60a5f9] transition-all duration-300 ease-in-out hover:border hover:border-[#60a5f9]">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#171f2e] inline-block p-4 rounded-lg ">
                                <Database className="text-[#44c675]" size={30} />
                            </div>
                            <h2 className="text-[24px] font-bold"> Backend Development</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            {
                                backendSkills?.map((skill: any) => (
                                    <div key={skill?.name} className="border hover:border-[#60a5f9] border-white/30 flex items-center gap-2 p-2 rounded-full bg-[#171f2e] hover:scale-105 transition-all duration-300 ease-in-out">
                                        <Image className="w-[15px]" src={skill?.img} alt={skill?.name} width={100} height={100}></Image>
                                        <h2 className="text-sm">{skill?.name}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="p-6 rounded-lg border border-white/30 bg-[#0f1524] hover:shadow-lg shadow-[#60a5f9] transition-all duration-300 ease-in-out hover:border hover:border-[#60a5f9]">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#171f2e] inline-block p-4 rounded-lg ">
                                <Cpu className="text-[#e76dae]" size={30} />
                            </div>
                            <h2 className="text-[24px] font-bold"> Tools & Technologies</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            {
                                tools?.map((skill: any) => (
                                    <div key={skill?.name} className="border hover:border-[#60a5f9] border-white/30 flex items-center gap-2 p-2 rounded-full bg-[#171f2e] hover:scale-105 transition-all duration-300 ease-in-out">
                                        <Image className="w-[15px]" src={skill?.img} alt={skill?.name} width={100} height={100}></Image>
                                        <h2 className="text-sm">{skill?.name}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
