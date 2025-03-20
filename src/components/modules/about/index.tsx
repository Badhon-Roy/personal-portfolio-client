import Image from "next/image";
import ProfileImg from "../../../app/assets/images/profile.png";

const About = () => {
    return (
        <section id="about" className="relative py-16 bg-gradient-to-br from-[#0c1445] to-[#021024] text-white rounded-lg">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(2,155,192,0.2),_transparent)]"></div>

            <div className="relative z-10 max-w-6xl px-8 mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center text-[#019fc7] mb-12 relative">
                    About Me
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 border-b-2 border-white md:w-44 w-28"></span>
                </h2>

                {/* About Content */}
                <div className="flex flex-col items-center justify-center mt-12 md:flex-row md:gap-12">

                    {/* Profile Image */}
                    <div
                        className="flex items-center justify-center relative p-2 transition-transform duration-500 rounded-full bg-gradient-to-br from-[#029bc0] to-[#44d286] hover:scale-105"
                        data-aos="fade-right"
                    >
                        <Image
                            src={ProfileImg}
                            alt="Profile Image"
                            width={350}
                            height={350}
                            className="rounded-full"
                        />
                        <div className="absolute inset-0 rounded-full bg-white opacity-5 blur-lg"></div>
                    </div>

                    {/* Info Section */}
                    <div className="flex-1 mt-10 md:mt-0 md:w-1/2" data-aos="fade-left">
                        <h3 className="text-3xl font-extrabold text-white">
                            Hi, I&apos;m Badhon Roy 🚀
                        </h3>
                        <p className="mt-3 text-lg font-semibold text-[#029bc0]">
                            Front-end Developer | React Enthusiast | UI Designer
                        </p>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            Passionate about crafting immersive web experiences using modern technologies.
                            I specialize in **React.js**, **Tailwind CSS**, and **Next.js**, ensuring seamless
                            performance and responsiveness.
                        </p>

                        <div className="grid grid-cols-2 text-start my-4">
                            <p className="mb-3 text-lg">📧 <span className="font-semibold">Email:</span> roybadhon286@gmail.com</p>
                            <p className="mb-3 text-lg">📞 <span className="font-semibold">Phone:</span> 01825009171</p>
                            <p className="mb-3 text-lg">📍 <span className="font-semibold">From:</span> Dinajpur, Bangladesh</p>
                            <p className="mb-3 text-lg">🗣️ <span className="font-semibold">Language:</span> English (Fresher), Bangla (Native)</p>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 gap-6 mt-6 md:grid-cols-3">
                            <div className="p-4 text-center border rounded-lg shadow-xl bg-[#021024]/50 border-[#029bc0]">
                                <h2 className="text-3xl font-bold text-white">10+</h2>
                                <p className="text-sm text-gray-300 mt-2">Total Projects</p>
                            </div>
                            <div className="p-4 text-center border rounded-lg shadow-xl bg-[#021024]/50 border-[#029bc0]">
                                <h2 className="text-3xl font-bold text-white">1.5+</h2>
                                <p className="text-sm text-gray-300 mt-2">Years Experience</p>
                            </div>
                            <div className="p-4 text-center border rounded-lg shadow-xl bg-[#021024]/50 border-[#029bc0]">
                                <h2 className="text-3xl font-bold text-white">2+</h2>
                                <p className="text-sm text-gray-300 mt-2">Certifications</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
