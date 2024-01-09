import { serverClient } from "@/app/_trpc/serverClient";
import getBaseUrl from "@/utils/getBaseUrl";
import DynamicBlog from "@/components/route/DynamicBlog";

export async function generateMetadata({ params }: { params: { id: string } }) {
    const blog_detail = await serverClient.getBlogDetail(params.id);
    return {
        title: blog_detail.title,
        description: blog_detail.description,
        openGraph: {
            title: blog_detail.title,
            description: blog_detail.description,
            url: getBaseUrl() + "/blog" + params.id,
            images: [blog_detail.thumbnail]
        }
    }
}

const DynamicBlogPost = async ({ params }: { params: { id: string } }) => {
    const blog_content = await serverClient.getBlogContent(params.id);
    const blog_detail = await serverClient.getBlogDetail(params.id)
    return (
        <>
            <main className="w-screen min-h-screen bg-base-100 relative">
                <DynamicBlog blog_content={blog_content} blog_detail={blog_detail} />
            </main>
        </>
    )
}

export default DynamicBlogPost;
