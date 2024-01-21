import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres'

import * as dotenv from "dotenv";
import { blog } from './scheme';
import { arrayContains, eq } from 'drizzle-orm';
dotenv.config();

const queryClient = postgres(process.env.DATABASE_URL!, { max: 1 });
const db = drizzle(queryClient);


export async function getAllBlogDetail() {
    return await db.select().from(blog)
}

export async function getBlogContent(route: string) {
    return await db.select({
        title: blog.title,
        date: blog.date,
        markdown: blog.markdown,
    }).from(blog).where(eq(blog.route, route));
}

export default db;
