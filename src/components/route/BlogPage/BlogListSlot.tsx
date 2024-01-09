import { BlogListSlotType } from "@/types/BlogListSlotType"
import { convertTimeStampToDate } from "@/utils/dateToString";

import * as dotenv from "dotenv";
import Link from "next/link";
dotenv.config();

const BlogListSlot = ({ blog }: { blog: BlogListSlotType }) => {
    const date = convertTimeStampToDate(blog.date)
    const alt_txt = blog.title + " thumbnail";
    const blog_route = "/blog/" + blog.id
    return (
        <div className="max-w-5xl hover:shadow-xl border-[2px] rounded-xl border-base-content px-10 sm:px-4 py-5 duration-300 transition-all">
            <div className="max-w-3xl sm:w-full flex sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse">
                <div className="flex flex-col">
                    <Link href={blog_route}>
                        <h3 className="font-bold font-raleway max-w-xl">{blog.title}</h3>
                        <p className="font-inter font-light max-w-lg">{blog.description}</p>
                    </Link>
                    <div className="flex font-light">
                        <p>{date}</p>
                        <p>&nbsp;&#183;&nbsp;</p>
                        <p>{blog.readtime} min read</p>
                        <p>&nbsp;&#183;&nbsp;</p>
                        {
                            blog.category.split('-').map((tag) => {
                                return <p className="bg-base-300 px-3 rounded-xl" key={tag}>{tag}</p>
                            })
                        }
                    </div>
                </div>
                <div className="flex items-center">
                    <img className="aspect-video object-fill h-32 sm:h-auto md:h-auto sm:w-full md:w-full" src={blog.thumbnail} alt={alt_txt} />
                </div>
            </div>

        </div>
    )
}

export default BlogListSlot;
