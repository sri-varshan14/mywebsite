"use client"
import { BlogListSlotType } from '@/types/BlogListSlotType'
import Footer from '../common/Footer'
import SideBar from '../common/SideBar'
import ThemeToggler from '../common/ThemeToggler'
import PageContent from './Blog/PageContent'

const DynamicBlog = ({ blog_content, blog_detail }: { blog_content: string, blog_detail: BlogListSlotType }) => {
    return (
        <>
            <SideBar />
            <PageContent blog_content={blog_content} blog_detail={blog_detail} />
            <Footer />
            <ThemeToggler />
        </>
    )
}

export default DynamicBlog;
