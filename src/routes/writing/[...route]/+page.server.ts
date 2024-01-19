import type { PageServerLoad } from './$types';
import db from '$lib/db';
import { blog } from '$lib/db/scheme';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ params }) => {
    let blog_detail = await db.select({
        title: blog.title,
        date: blog.date,
        markdown: blog.markdown,
    }).from(blog).where(eq(blog.route, params.route));

    let content = await fetch(blog_detail[0].markdown).then(res => res.text());
    return {
        title: blog_detail[0].title,
        date: blog_detail[0].date,
        markdown: blog_detail[0].markdown,
        content: content
    }
}

