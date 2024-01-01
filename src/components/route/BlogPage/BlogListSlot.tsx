import { BlogListSlotType } from "@/app/types/BlogListSlotType"
import { convertTimeStampToDate } from "@/app/utils/dateToString";

import * as dotenv from "dotenv";
import Link from "next/link";
dotenv.config();

const BlogListSlot = ({ blog }: { blog: BlogListSlotType }) => {
    const date = convertTimeStampToDate(blog.date)
    const alt_txt = blog.title + " thumbnail";
    const blog_route = "/blog/" + blog.id
    return (
        <div className="max-w-3xl flex sm:flex-col-reverse md:flex-col-reverse gap-4">
            <div className="flex flex-col h-32">
                <Link href={blog_route}>
                    <h3 className="font-bold font-raleway py-2 max-w-xl">{blog.title}</h3>
                    <p className="font-roboto font-light py-2 max-w-lg">{blog.description}</p>
                </Link>
                <div className="flex font-light">
                    <p>{date}</p>
                    <p>&nbsp;&#183;&nbsp;</p>
                    <p>{blog.readtime} min read</p>
                    <p>&nbsp;&#183;&nbsp;</p>
                    {
                        blog.category.split(' ').map((tag) => {
                            return <p className="bg-base-300 px-3 rounded-xl" key={tag}>{tag}</p>
                        })
                    }
                </div>
            </div>
            <div className="">
                <img className="aspect-video object-center h-32 sm:h-auto md:h-auto sm:w-full md:w-full" src={blog.thumbnail} alt={alt_txt} />
            </div>
        </div>
    )
}

export default BlogListSlot;
