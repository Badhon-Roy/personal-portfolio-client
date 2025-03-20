"use client"
import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ blogs }: { blogs: IBlog[] }) => {
    return (
        <div id="blog" className="py-16">
            <div>
                <h2 className="text-4xl font-bold text-center text-primary mb-12">My Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs?.map(blog => (
                        <div
                            key={blog?._id}
                            className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 border relative"
                        >
                            {/* Category Badge */}
                            <p className="absolute top-4 left-4 bg-[#019fc7] text-white rounded-full px-3 py-1 text-sm font-medium">
                                {blog?.category}
                            </p>

                            {/* Blog Image */}
                            <Image
                                className="w-full h-[250px] object-cover rounded-t-lg"
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
                                            className="text-sm bg-[#f0f4f8] text-gray-700 px-3 py-1 rounded-full font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-end items-end">
                                    <button className="my-4 BTN">
                                        <Link href={`/blog/${blog?._id}`} className="p-2 cursor-pointer md:text-xl">
                                            Read Now
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
