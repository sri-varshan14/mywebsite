import remarkGfm from 'remark-gfm'
import Markdown from 'react-markdown'
import { trpc } from '@/app/_trpc/client'
import { convertTimeStampToDate } from '@/app/utils/dateToString'

const PageContent = ({ id }: { id: string }) => {
    const result = trpc.getBlogContent.useQuery(id)
    const blog_detail_result = trpc.getBlogDetail.useQuery(id)
    const markdown = result.data
    const blog_detail = blog_detail_result.data
    const date = convertTimeStampToDate(blog_detail?.date!)
    return (
        <section className='pl-14 '>
            <article className='m-auto max-w-2xl sm:w-screen md:w-screen pt-[15vh] blog'>
                <h1 className='d3 font-raleway py-8'>{blog_detail?.title}</h1>
                <div className='flex flex-wrap'>
                    {
                        blog_detail?.category.split(' ').map((tag) => {
                            return <p className="bg-base-300 px-3 rounded-xl" key={tag}>{tag}</p>
                        })
                    }
                </div>
                <div className="divider"></div>
                <ul className='flex items-center justify-between px-4'>
                    <li>{date}</li>
                    <li>{blog_detail?.readtime} min read</li>
                </ul>
                <div className="divider"></div>
                <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            </article>
        </section>
    )
}

export default PageContent;
