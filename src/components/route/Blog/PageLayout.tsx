"use client"
import StickyBox, { useStickyBox } from "react-sticky-box";
import Toc from "react-toc";
import PageContent from "./PageContent";
import { BlogListSlotType } from "@/types/BlogListSlotType";
import { convertTimeStampToDate } from "@/utils/dateToString";
import Link from "next/link";

const PageLayout = ({ blog_content, blog_detail }: { blog_content: string, blog_detail: BlogListSlotType }) => {
    const stickyRef = useStickyBox({ offsetTop: 0, offsetBottom: 0 })
    const date = convertTimeStampToDate(blog_detail.date)
    return (
        <section className="w-screen min-h-screen relative" id="top">
            <div className="flex justify-center pl-14 sm:pl-0 md:pl-0 lg:pl-0 sm:flex-col md:flex-col lg:flex-col gap-10">
                <StickyBox>
                    <aside className="py-[calc(8vh+8rem)]" ref={stickyRef}>
                        <Link className="my-2 text-primary hover:underline" href="/blog">All Post</Link>
                        <Toc className='blog_toc' markdownText={blog_content}></Toc>
                    </aside>
                </StickyBox>
                <div className="py-[8vh]">
                    <h1 className='h1 font-poppins'>{blog_detail?.title}</h1>
                    <p className="py-4">{date}</p>
                    <PageContent blog_content={blog_content} />
                </div>
            </div>
        </section >
    )
}

export default PageLayout;
