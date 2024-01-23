import type { PageServerLoad } from './$types';
import { getBlogContent } from '$lib/db';

export const load: PageServerLoad = async ({ params }) => {
    let blog_detail = await getBlogContent("/" + params.route);

    let content = await fetch(blog_detail[0].markdown).then(res => res.text());
    return {
        title: blog_detail[0].title,
        date: blog_detail[0].date,
        markdown: blog_detail[0].markdown,
        content: content
    }
}


export const prerender = true
