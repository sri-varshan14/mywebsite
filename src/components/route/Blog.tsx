"use client"
import SideBar from '../common/SideBar'
import ThemeToggler from '../common/ThemeToggler'
import PageContent from './Blog/PageContent'

const Blog = ({ id }: { id: string }) => {
    return (
        <>
            <SideBar />
            <PageContent id={id} />
            <ThemeToggler />
        </>
    )
}

export default Blog;
