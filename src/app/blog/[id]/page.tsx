import Blog from "@/components/route/Blog";

const DynamicBlogPost = ({ params }: { params: { id: string } }) => {
    return (
        <main className="w-screen min-h-screen bg-base-100 relative">
            <Blog id={params.id} />
        </main>
    )
}

export default DynamicBlogPost;
