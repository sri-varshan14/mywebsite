import { Metadata } from "next";
import BlogPage from "@/components/route/BlogPage";
import { serverClient } from "../_trpc/serverClient";

export const metadata: Metadata = {
    title: 'Blogs | Srivarshan',
    description: '',
};

export default async function Blog() {
    const result = await serverClient.getAllBlogList();
    return (
        <main className="w-screen min-h-screen bg-base-100 relative">
            <BlogPage blog_list={result} />
        </main>
    )
}

