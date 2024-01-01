import { trpc } from "@/app/_trpc/client";
import BlogListSlot from "./BlogListSlot";
import { BlogListSlotType } from "@/app/types/BlogListSlotType";

const BlogList = () => {
    const blogList = trpc.getAllBlogList.useQuery();
    return (
        <section className="flex flex-col m-auto px-5">
            {
                blogList.data?.map((blog) => {
                    const blog_detail = blog as BlogListSlotType;
                    return <BlogListSlot blog={blog_detail} key={blog.id} />
                })
            }
        </section>
    )
}

export default BlogList;

