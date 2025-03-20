"use client";

import Image from "next/image";
import { Progress } from "@/components/ui/progress"


const skills = [
  {
    name: "Front-end Development",
    percentage: 85,
    image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    name: "Back-end Development",
    percentage: 75,
    image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
  },
  {
    name: "UI/UX Design",
    percentage: 80,
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    name: "Database Management",
    percentage: 70,
    image: "https://cdn-icons-png.flaticon.com/512/833/833331.png",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-[#0a192f] text-white">
      <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-[#019fc7] mb-12">
            My Skills
            </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-[#019fc7] inline-block p-8 rounded-2xl bg-[#11263a] hover:border-[#7cc000] transition duration-300 text-center"
            >
              {/* Radial Progress Bar */}
              <div className="relative flex items-center justify-center w-32 h-32 mx-auto mb-4 rounded-full bg-gray-800">
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

              {/* Skill Image */}
              <Image src={skill.image} alt={skill.name} width={50} height={50} className="mx-auto mb-4" />

              {/* Skill Name */}
              <h2 className="text-2xl font-bold">{skill.name}</h2>

              {/* Horizontal Progress Bar (Alternative) */}
              <Progress value={skill.percentage} className="w-full h-3 mt-4 bg-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
