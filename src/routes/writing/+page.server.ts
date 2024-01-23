import type { PageServerLoad } from './$types';
import { getAllBlogDetail } from '$lib/db';
import type { EntryGenerator } from './[...route]/$types';

export const load: PageServerLoad = async ({ }) => {
    return {
        post: await getAllBlogDetail()
    }
}

export const entries: EntryGenerator = async () => {
    let a = await getAllBlogDetail()

    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push({
            route: a[i].route
        })
    }
    return result;
};

