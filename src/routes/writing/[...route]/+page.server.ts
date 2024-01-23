import type { PageServerLoad } from './$types';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { markedHighlight } from 'marked-highlight';
import { getBlogContent } from '$lib/db';


export const load: PageServerLoad = async ({ params }) => {
    let blog_detail = await getBlogContent("/" + params.route);
    let content = await fetch(blog_detail[0].markdown).then(res => res.text());
    marked.use(gfmHeadingId());
    marked.use(
        markedHighlight({
            langPrefix: 'hljs language-',
            highlight(code, lang) {
                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language }).value;
            }
        }),
    );
    let render_content = await marked(content, {
        async: true,
        gfm: true,
    });
    return {
        title: blog_detail[0].title,
        date: blog_detail[0].date,
        markdown: blog_detail[0].markdown,
        markdown_content: content,
        render_content: render_content
    }
}


export const prerender = true
