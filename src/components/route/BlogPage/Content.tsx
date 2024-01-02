"use client"
import StickyBox from "react-sticky-box";
import BlogAside from "./BlogAside";
import BlogList from "./BlogList";
import { serverClient } from "@/app/_trpc/serverClient";

const Content = ({ blog_list }: { blog_list: Awaited<ReturnType<(typeof serverClient)["getAllBlogList"]>> }) => {
    return (
        <section className="min-h-screen">
            <div className="flex pl-14 sm:pl-0 md:pl-0 sm:flex-col md:flex-col py-28">
                <StickyBox >
                    <BlogAside />
                </StickyBox>
                <BlogList blog_list={blog_list} />
            </div>
        </section>
    )
}

export default Content;
