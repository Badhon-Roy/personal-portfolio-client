import Image from "next/image";


const Resume = () => {
    return (
        <section id="resume" className="py-16 mx-8">
            <h2 className="relative pb-3 text-3xl font-bold text-center md:text-5xl text-[#019fc7]">
                Resume
            </h2>
            <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            A passionate web developer with experience in the MERN stack, eager to contribute to innovative projects and grow in the tech industry.y.
            </p>

            <div className="md:flex justify-between gap-10">
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                        <Image className="w-[50px]" src="https://cdn-icons-png.flaticon.com/512/10655/10655913.png" alt="Experience_image" width={50} height={50} />
                        <h2 className="text-xl font-bold text-white md:text-2xl">Experience</h2>
                    </div>
                    <ol className="relative text-white-500 border-s border-gray-200">
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white">
                                <Image src={'https://cdn-icons-png.freepik.com/256/12148/12148631.png?semt=ais_hybrid'} alt="running_image" width={50} height={50}></Image>
                            </span>
                            <h2 className="text-xl font-bold text-color ml-2">Project</h2>
                            <p>Project Name : Inventory Management System</p>
                            <p>Duration : 6 days</p>
                            <p>Role : Front-end Developer</p>
                            <p>Technologies Used: tailwind css , react , express js , mongoDB etc. </p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white">
                                <Image src={'https://cdn.iconscout.com/icon/premium/png-256-thumb/front-end-development-4737657-3932344.png?f=webp'} alt="running_image" width={50} height={50}></Image>
                            </span>
                            <h2 className="text-xl font-bold text-color ml-2">Front-end Development</h2>
                            <p><strong className="text-white">Tailwind CSS:</strong> Developed proficiency in Tailwind CSS for rapid UI development.</p>
                            <p><strong className="text-white">React.js:</strong> Built interactive web applications using React components and hooks.</p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white">
                                <Image src={'https://cdn0.iconfinder.com/data/icons/web-development-22/256/web_building-512.png'} alt="running_image" width={50} height={50}></Image>
                            </span>
                            <h2 className="text-xl font-bold text-color ml-2">Back-end Development</h2>
                            <p> <strong className="text-white">Express.js:</strong> Learned server-side development with Express.js for building RESTful APIs.</p>
                            <p> <strong className="text-white">MongoDB:</strong> Gained hands-on experience with MongoDB for data storage and retrieval.</p>
                        </li>
                        <li className="ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white">
                                <Image src={'https://cdn2.iconfinder.com/data/icons/ux-and-ui-astute-vol-1/512/Full_Stack_Developer-512.png'} alt="running_image" width={50} height={50}></Image>
                            </span>
                            <h2 className="text-xl font-bold text-color ml-2">Full-Stack Development</h2>
                            <p className="mb-2 text-xl">
                                <strong className="text-white">Integration:</strong> Successfully integrated React with Express and MongoDB for full-stack applications.
                            </p>

                            <p className="mb-2 text-xl">
                                <strong className="text-white">Deployment:</strong> Deployed applications using Vercel and Render, ensuring smooth and reliable deployment processes. </p>
                        </li>
                    </ol>
                </div>
                <div className="flex-1 md:mt-0 mt-8">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <Image src="https://cdn-icons-png.flaticon.com/512/8576/8576501.png" alt="education_image" width={40} height={40} />
                            <h2 className="text-xl font-bold text-white md:text-2xl">Education</h2>
                        </div>
                        <ol className="relative text-white border-s border-gray-200 ">
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white">
                                    <Image src={'https://assets.streamlinehq.com/image/private/w_240,h_240,ar_1/f_auto/v1/icons/02-finance/certificate-ga5ul1nebx05ygwx2ug8zv.png/certificate-jkdh764lvw8j5w98q4vat.png?_a=DAJFJtWIZAAC'} alt="running_image" width={50} height={50}></Image>
                                </span>
                                <h2 className="text-xl font-bold text-color ml-2">Junior School Certificate (JSC)</h2>
                                <p>Passing Year: 2018</p>
                                <p>Result: 4.64 out of 5</p>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white">
                                    <Image src={'https://assets.streamlinehq.com/image/private/w_240,h_240,ar_1/f_auto/v1/icons/02-finance/certificate-ga5ul1nebx05ygwx2ug8zv.png/certificate-jkdh764lvw8j5w98q4vat.png?_a=DAJFJtWIZAAC'} alt="running_image" width={50} height={50}></Image>
                                </span>
                                <h2 className="text-xl font-bold text-color ml-2">Secondary School Certificate (SSC)</h2>
                                <p>Passing Year: 2021</p>
                                <p>Result: 5.00 out of 5</p>
                            </li>
                            <li className="ms-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white">
                                    <Image src={'https://cdn-icons-png.flaticon.com/512/5583/5583645.png'} alt="running_image" width={50} height={50}></Image>
                                </span>
                                <h2 className="text-xl font-bold text-color ml-2">Diploma in Computer Science</h2>
                                <p>Dinajpur Polytechnic Institute</p>
                                <p>Running..</p>
                            </li>
                        </ol>
                    </div>
                    <div className="mt-8">
                        <div className="flex items-center gap-4 mb-4">
                            <Image src="https://cdn-icons-png.flaticon.com/512/1575/1575251.png" alt="future_learning_image" width={30} height={30} />
                            <h2 className="text-xl font-bold text-white md:text-2xl">Future Learning Goals</h2>
                        </div>
                        <ol className="relative text-white border-s border-gray-200 ">
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white">
                                    <Image src={'https://cdn-icons-png.flaticon.com/512/11779/11779141.png'} alt="running_image" width={50} height={50}></Image>
                                </span>
                                <h2 className="text-xl font-bold text-color ml-2">Continued Learning</h2>
                                <p>Explore emerging front-end and back-end technologies to stay current with industry trends.</p>
                                <ul className="pl-4 text-gray-300 list-disc list-inside">
                                    <li>Investigate new JavaScript frameworks and libraries.</li>
                                    <li>Experiment with different back-end technologies and tools.</li>
                                    <li>Attend webinars, workshops, and conferences to gain insights.</li>
                                </ul>
                            </li>
                            <li className="ms-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white">
                                    <Image src={'https://www.rlogical.com/wp-content/uploads/2023/05/why-choose-mern-stack-for-developing-web-apps.webp'} alt="running_image" width={50} height={50}></Image>
                                </span>
                                <h2 className="text-xl font-bold text-color ml-2">Advanced React and MERN Stack</h2>
                                <p>Deepen understanding of advanced React concepts and enhance MERN stack skills.</p>
                                <ul className="pl-4 text-gray-300 list-disc list-inside">
                                    <li>Master state management libraries like Redux or Recoil.</li>
                                    <li>Build complex applications using advanced React features such as Suspense and Concurrent Mode.</li>
                                    <li>Improve knowledge of integrating React with Express.js and MongoDB.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
