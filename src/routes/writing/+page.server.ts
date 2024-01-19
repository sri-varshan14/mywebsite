import type { PageServerLoad } from './$types';
import db from '$lib/db';
import { blog } from '$lib/db/scheme';

export const load: PageServerLoad = async ({ params }) => {
    return {
        post: await db.select().from(blog)
    }
}
