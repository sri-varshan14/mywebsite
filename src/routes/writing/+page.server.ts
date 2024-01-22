import type { PageServerLoad } from './$types';
import { getAllBlogDetail } from '$lib/db';

export const load: PageServerLoad = async ({ params }) => {
    return {
        post: await getAllBlogDetail()
    }
}

export const prerender = 'auto';
export const trailingSlash = 'always';
