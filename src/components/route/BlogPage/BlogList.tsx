import { trpc } from "@/app/_trpc/client";
import BlogListSlot from "./BlogListSlot";
import { BlogListSlotType } from "@/app/types/BlogListSlotType";
import { serverClient } from "@/app/_trpc/serverClient";

const BlogList = ({ blog_list }: { blog_list: Awaited<ReturnType<(typeof serverClient)["getAllBlogList"]>> }) => {
    return (
        <section className="flex flex-col m-auto px-5">
            {
                blog_list.map((blog) => {
                    const blog_detail = blog as BlogListSlotType;
                    return <BlogListSlot blog={blog_detail} key={blog.id} />
                })
            }
        </section>
    )
}

export default BlogList;

