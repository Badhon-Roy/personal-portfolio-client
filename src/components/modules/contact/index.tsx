"use client";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { Linkedin, Mail, MapPin, Phone, X } from "lucide-react";

const Contact = () => {
    const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        // Properly assert the form elements
        const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
        const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
        const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;

        console.log(name, email, subject, message);

        const templateParams = {
            to_email: "roybadhon286@gmail.com",
            message: `
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
            `,
        };

        emailjs.send("service_z4ctxgo", "template_3p3eh7m", templateParams, "eTQYSiXzdRPUO0Bzh")
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    Swal.fire({
                        title: "Your message",
                        text: "Sent successfully",
                        icon: "success",
                    });
                    form.reset();
                }
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };

    return (
        <div id="contact" className="px-5 my-16">
            <h2 className="md:text-4xl text-2xl font-bold relative text-center pb-2 text-color">
                Contact Me
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 border-b-2 border-white md:w-48 w-28"></span>
            </h2>
            <div className="md:flex gap-8 lg:p-16 md:p-12 p-5 bg-[#052f57] border border-[#019fc7] rounded-2xl my-10">
                <div className="flex-1">
                    <form onSubmit={handleContact}>
                        <label className="text-xl text-white">Your Name:</label>
                        <input
                            className="bg-[#123a60] border text-white w-full my-4 border-gray-400 px-4 py-2 rounded-md"
                            type="text" name="name" placeholder="Your Name *" required />

                        <label className="text-xl text-white">Your Email:</label>
                        <input
                            className="bg-[#123a60] border text-white w-full my-4 border-gray-400 px-4 py-2 rounded-md"
                            type="email" name="email" placeholder="Your Email *" required />

                        <label className="text-xl text-white">Subject:</label>
                        <input
                            className="bg-[#123a60] border text-white w-full my-4 border-gray-400 px-4 py-2 rounded-md"
                            type="text" name="subject" placeholder="Subject" />

                        <label className="text-xl text-white">Your Message:</label>
                        <textarea
                            rows={4}
                            className="bg-[#123a60] border text-white w-full my-4 border-gray-400 px-4 py-2 rounded-md"
                            name="message" placeholder="Your Message *" required></textarea>

                        <input type="submit" className="BTN my-4 cursor-pointer" value="Send Message" />
                    </form>
                </div>
                <div className="flex-1 md:border-l-2 md:pl-8">
                    <h2 className="md:text-4xl text-2xl font-bold text-white mb-4">Contact Info</h2>
                    <div className="flex items-center md:gap-5 gap-3">
                        <div className="border-2 inline-block md:p-4 p-2 rounded-full hover:border-[#019fc7] hover:text-[#019fc7]">
                            <Mail className="text-3xl font-bold text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl text-white">Email</h3>
                            <p className="cursor-pointer">roybadhon286@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center md:gap-5 gap-3 my-6">
                        <div className="border-2 inline-block md:p-4 p-2 rounded-full hover:border-[#019fc7] hover:text-[#019fc7]">
                            <Phone className="text-3xl font-bold text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl text-white">Phone</h3>
                            <p className="cursor-pointer">01825009171</p>
                        </div>
                    </div>
                    <div className="flex items-center md:gap-5 gap-3">
                        <div className="border-2 inline-block md:p-4 p-2 rounded-full hover:border-[#019fc7] hover:text-[#019fc7]">
                            <MapPin className="text-3xl font-bold text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl text-white">Address</h3>
                            <p className="cursor-pointer">Dinajpur, Bangladesh</p>
                        </div>
                    </div>
                    <h3 className="lg:text-3xl md:text-2xl text-xl font-bold text-white my-4">Visit my social profile and get connected</h3>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <a
                            className="btn btn-outline md:w-auto rounded-full w-full flex items-center gap-2 px-6 py-3 border-2 border-[#019fc7] hover:bg-[#019fc7] hover:border-[#019fc7] text-white justify-center text-xl font-bold transition-all duration-300"
                            href="https://www.linkedin.com/in/badhon-roy-515303297/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="text-3xl" />
                            LinkedIn
                        </a>
                        <a
                            className="btn btn-outline md:w-auto rounded-full w-full flex items-center gap-2 px-6 py-3 border-2 border-[#019fc7] hover:bg-[#019fc7] hover:border-[#019fc7] text-white justify-center text-xl font-bold transition-all duration-300"
                            href="https://twitter.com/BadhonRoy40241"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <X className="text-3xl" />
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
