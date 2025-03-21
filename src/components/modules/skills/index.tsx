"use client";

import Image from "next/image";
import { useState } from "react";

const skillsData : any = {
    "Front-end": [
        { name: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png" },
        { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" },
        { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" },
        { name: "Bootstrap", img: "https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" },
        { name: "JavaScript", img: "https://pnggallery.com/wp-content/uploads/javascript-logo-01.png" },
        { name: "Next.js", img: "https://marcbruederlin.gallerycdn.vsassets.io/extensions/marcbruederlin/next-icons/0.1.0/1723747598319/Microsoft.VisualStudio.Services.Icons.Default" },
        { name: "React", img: "https://static-00.iconduck.com/assets.00/react-javascript-js-framework-facebook-icon-1024x911-dnspa9ed.png" },
        { name: "Redux", img: "https://static-00.iconduck.com/assets.00/redux-icon-2048x1945-ahvhunxp.png" },
    ],
    "Back-end": [
        { name: "TypeScript", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" },
        { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/256/5968/5968322.png" },
        { name: "Express.js", img: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
    ],
    "Database": [
        { name: "MongoDB", img: "https://static-00.iconduck.com/assets.00/database-mongo-db-icon-980x1024-1q3t2p6x.png" },
        { name: "Mongoose", img: "https://img.icons8.com/?size=512&id=gKfcEStXI1Hm&format=png" },
    ],
    "Tools": [
        { name: "Git", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" },
        { name: "GitHub", img: "https://www.pngmart.com/files/23/Github-Logo-PNG.png" },
        { name: "Figma", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1365px-Figma-logo.svg.png" },
        { name: "VS Code", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" },
        { name: "Postman", img: "https://www.applivery.com/wp-content/uploads/2024/09/Postman.png" },
        { name: "Firebase", img: "https://seekvectors.com/files/download/ffe6fba930dfc0755e5c21537be68530.png" },
        { name: "NPM", img: "https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-8sw7kisf.png" },
        { name: "Vercel", img: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vercel.png" },
    ]
};

const skills = [
    { name: "Front-end Development", percentage: 85 },
    { name: "Back-end Development", percentage: 75 },
    { name: "Database Management", percentage: 70 },
    { name: "Tools ", percentage: 60 },
];

export default function Skills() {
    const [activeTab, setActiveTab] = useState("Front-end");

    return (
        <section id="skills" className="relative py-16 bg-gradient-to-br from-[#021024] to-[#0c1445] text-white my-16 rounded-lg md:mx-0 mx-4">
            {/* Gradient Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(2,155,192,0.2),_transparent)] pointer-events-none"></div>

            <div className="container mx-auto px-6">
                {/* Section Heading */}
                <h2 className="text-4xl font-bold text-center text-[#019fc7] mb-6">My Skills</h2>
                <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                    I specialize in modern web development, creating dynamic and responsive applications. Below are my core skills and technologies I work with.
                </p>

                {/* Skill Progress Bars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="border border-[#019fc7] p-8 rounded-2xl bg-[#11263a] transition duration-300 text-center">
                            {/* Radial Progress Bar */}
                            <div className="relative flex items-center justify-center w-28 h-28 mx-auto mb-4 rounded-full bg-gray-800">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                    <circle className="text-gray-700 stroke-current" strokeWidth="10" cx="50" cy="50" r="40" fill="transparent"></circle>
                                    <circle
                                        className="text-[#019fc7] stroke-current"
                                        strokeWidth="10"
                                        strokeDasharray="251.2"
                                        strokeDashoffset={(100 - skill.percentage) * 2.51}
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                    ></circle>
                                </svg>
                                <span className="absolute text-2xl font-bold">{skill.percentage}%</span>
                            </div>
                            {/* Skill Name */}
                            <h2 className="md:text-2xl text-xl font-bold">{skill.name}</h2>
                        </div>
                    ))}
                </div>

                {/* Skills Tabs & Content */}
                <div className="md:flex justify-between gap-8 my-12">
                    {/* Tabs */}
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-4 space-x-4 lg:w-1/5 md:2/5 mb-4">
                        {Object.keys(skillsData).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveTab(category)}
                                className={`px-6 py-3 w-full max-h-[50px] rounded-lg text-lg font-semibold relative transition-all duration-300 group 
                                    ${activeTab === category ? "bg-[#019fc7] text-white" : "bg-[#11263a] text-gray-300 hover:bg-[#019fc7] hover:text-white"}`}
                            >
                                {category}
                                {/* Animated Underline */}
                                {activeTab === category && (
                                    <span className="absolute left-1/2 bottom-0 h-1 w-3/4 bg-[#019fc7] transform -translate-x-1/2 transition-all duration-300"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Skill Content */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 md:gap-4 lg:gap-8 lg:w-4/5 md:w-3/5">
                        {skillsData[activeTab]?.map((skill : any, index : number) => (
                            <div key={index} className="h-[140px] border border-[#019fc7] rounded-2xl p-4 bg-[#11263a] transition duration-300 text-center flex flex-col gap-2 justify-center items-center">
                                <div>
                                    <Image className="object-cover" src={skill.img} alt={skill.name} width={60} height={60} />
                                </div>
                                <h2 className="text-xl font-medium mt-2">{skill.name}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
