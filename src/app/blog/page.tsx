import { Metadata } from "next";
import BlogPage from "@/components/route/BlogPage";

export const metadata: Metadata = {
    title: 'Blogs | Srivarshan',
    description: '',
};

export default function Blog() {
    return (
        <main className="w-screen min-h-screen bg-base-100 relative">
            <BlogPage />
        </main>
    )
}

