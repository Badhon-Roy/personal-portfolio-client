"use client"
import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ blogs }: { blogs: IBlog[] }) => {
    return (
        <div id="blog" className="py-16 mx-4">
            <div>
                <h2 className="text-4xl font-bold text-center text-[#019fc7] mb-12">My Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {blogs?.map(blog => (
                        <div
                        data-aos="zoom-out-up"
                            key={blog?._id}
                            className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-white/20 hover:border-[#60a5f9] relative"
                        >
                            {/* Category Badge */}
                            <p className="absolute top-4 left-4 bg-[#019fc7] text-white rounded-full px-3 py-1 text-sm font-medium">
                                {blog?.category}
                            </p>

                            {/* Blog Image */}
                            <Image
                                className="w-full md:h-[250px] h-[180px] object-cover rounded-t-lg"
                                src={blog?.thumbnail}
                                alt={blog?.title}
                                width={400}
                                height={200}
                            />

                            <div className="p-4">
                                {/* Blog Title */}
                                <h2 className="text-xl font-semibold text-[#019fc7] mt-4 mb-2">{blog?.title}</h2>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {blog?.tags?.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 border hover:border-[#60a5f9] border-white/30 flex items-center gap-2 p-2 rounded-full bg-[#171f2e] hover:scale-105 transition-all duration-300 ease-in-out text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-end items-end">
                                    <button className="my-4">
                                        <Link href={`/blog/${blog?._id}`} className="p-2 cursor-pointer md:text-xl underline hover:text-[#60a5f9]">
                                            Read More
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
