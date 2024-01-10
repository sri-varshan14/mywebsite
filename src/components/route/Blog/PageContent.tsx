import remarkGfm from 'remark-gfm'
import Markdown from 'react-markdown'
import { convertTimeStampToDate } from '@/utils/dateToString'
import { BlogListSlotType } from '@/types/BlogListSlotType'

const PageContent = ({ blog_content, blog_detail }: { blog_content: string, blog_detail: BlogListSlotType }) => {
    const date = convertTimeStampToDate(blog_detail.date)
    return (
        <section className='pl-14 min-h-screen'>
            <article className='m-auto max-w-3xl sm:w-screen md:w-screen py-[15vh]'>
                <h1 className='d3 font-poppins py-8'>{blog_detail?.title}</h1>
                <div className='flex flex-wrap'>
                    {
                        blog_detail?.category.split('-').map((tag) => {
                            return <p className="bg-base-300 px-3 rounded-xl" key={tag}>{tag}</p>
                        })
                    }
                </div>
                <div className="divider"></div>
                <ul className='flex items-center justify-between px-4'>
                    <li>{date}</li>
                    <li>{blog_detail.readtime} min read</li>
                </ul>
                <div className="divider"></div>
                <Markdown className="blog" remarkPlugins={[remarkGfm]}>{blog_content}</Markdown>
            </article>
        </section>
    )
}

export default PageContent;
