import { serverClient } from "@/app/_trpc/serverClient";
import Footer from "../common/Footer";
import SideBar from "../common/SideBar";
import ThemeToggler from "../common/ThemeToggler";
import Content from "./BlogPage/Content";

const BlogPage = ({ blog_list }: { blog_list: Awaited<ReturnType<(typeof serverClient)["getAllBlogList"]>> }) => {
    return (
        <>
            <SideBar />
            <Content blog_list={blog_list} />
            <Footer />
            <ThemeToggler />
        </>
    )
}

export default BlogPage;
