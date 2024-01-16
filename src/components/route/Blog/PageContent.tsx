import remarkGfm from 'remark-gfm'
import Markdown from 'react-markdown'
import remarkToc from 'remark-toc'


const PageContent = ({ blog_content }: { blog_content: string }) => {
    return (
        <article className=''>
            <Markdown
                className="blog"
                components={{
                    h2(props) {
                        function get_id(str: string | undefined) {
                            return str?.toLowerCase().replaceAll(' ', '-')
                        }
                        const { node, ...rest } = props;
                        let heading_id = get_id(rest.children?.toString())
                        return <h2 id={heading_id} {...rest} />
                    }
                }}
                remarkPlugins={[remarkGfm, remarkToc]}>{blog_content}</Markdown>
        </article >
    )
}

export default PageContent;
