

const About = () => {
    return (
        <div id="about">
            <div  className="my-16 px-5 py-12 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
                <h2 className="relative pb-2 mb-12 text-2xl font-bold text-center md:text-4xl text-color">
                    About Me
                    <span className="absolute transform -translate-x-1/2 border-b-4 border-yellow-400 -bottom-2 left-1/2 md:w-48 w-28"></span>
                </h2>
                <div className="items-center justify-between gap-12 md:flex">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="mb-4 text-3xl font-extrabold text-yellow-400 md:text-4xl">Hi There! I am Badhon Roy</h2>
                        <p className="mb-6 text-2xl font-semibold text-yellow-300 md:text-3xl">Front-end Developer</p>
                        <div className="mx-auto mb-6 divider divider-info md:w-3/4 md:mx-0"></div>
                        <p className="mb-3 text-lg">🎂 <span className="font-semibold">Birthday:</span> March 03, 2005</p>
                        <p className="mb-3 text-lg">📞 <span className="font-semibold">Phone:</span> 01825009171</p>
                        <p className="mb-3 text-lg">📧 <span className="font-semibold">Email:</span> roybadhon286@gmail.com</p>
                        <p className="mb-3 text-lg">📍 <span className="font-semibold">From:</span> Dinajpur, Bangladesh</p>
                        <p className="mb-3 text-lg">🗣️ <span className="font-semibold">Language:</span> English (Fresher), Bangla (Native)</p>
                    </div>
                    <div className="flex-1">
                        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
                            <div className="px-6 py-4 text-center border border-blue-400 rounded-md shadow-lg bg-gradient-to-r from-blue-600 to-blue-400">
                                <h2 className="text-3xl font-extrabold text-white md:text-4xl">10+</h2>
                                <p className="mt-2 text-sm text-white">Total Projects</p>
                            </div>
                            <div className="px-6 py-4 text-center border border-green-400 rounded-md shadow-lg bg-gradient-to-r from-green-600 to-green-400">
                                <h2 className="text-3xl font-extrabold text-white md:text-4xl">1.5+</h2>
                                <p className="mt-2 text-sm text-white">Years of<br /> Experience</p>
                            </div>
                            <div className="px-6 py-4 text-center border border-purple-400 rounded-md shadow-lg bg-gradient-to-r from-purple-600 to-purple-400">
                                <h2 className="text-3xl font-extrabold text-white md:text-4xl">1+</h2>
                                <p className="mt-2 text-sm text-white">Certifications</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;