import { getSingeBlog } from "@/services/blog";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const { data: blog } = await getSingeBlog(id);
    const { title, tags, category, content, thumbnail } = blog;

    return (
        <section className="py-16 px-6 container mx-auto">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-8">

                {/* Blog Image */}
                <Image
                    src={thumbnail}
                    alt={title}
                    width={800}
                    height={400}
                    className="w-full h-[300px] object-cover rounded-lg mb-6"
                />

                {/* Category Badge */}
                <span className="bg-[#019fc7] text-white text-sm font-semibold px-4 py-1 rounded-full">
                    {category}
                </span>

                {/* Blog Title */}
                <h1 className="text-3xl font-bold text-gray-800 mt-4">{title}</h1>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag: string, index: number) => (
                        <span
                            key={index}
                            className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Blog Content */}
                <p className="mt-6 text-gray-700 leading-relaxed text-lg">{content}</p>
            </div>
            <div className="flex justify-center items-center mt-4">
                <button className="my-4 BTN">
                    <Link href={`/`} className="p-2 cursor-pointer md:text-xl">
                        Back Home
                    </Link>
                </button>
            </div>
        </section>
    );
};

export default BlogDetailsPage;
