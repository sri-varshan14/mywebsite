import db from "@/db/client";
import { z } from 'zod';
import { publicProcedure, router } from "./trpc";
import { blog } from "@/db/scheme";
import axios from 'axios';
import { eq } from "drizzle-orm";

export const appRouter = router({
    getAllBlogList: publicProcedure
        .query(async () => {
            let result = await db.select().from(blog)
            return result
        }),
    getBlogContent: publicProcedure
        .input(z.string())
        .query(async (opts) => {
            const { input } = opts;
            let result = await db.select({ markdown: blog.markdown }).from(blog).where(eq(blog.id, input))
            let mk_link = result[0].markdown;
            let response = await axios.get(mk_link);
            const content = response.data;
            return content;
        }),
    getBlogDetail: publicProcedure
        .input(z.string())
        .query(async (opts) => {
            const { input } = opts;
            let result = await db.select().from(blog).where(eq(blog.id, input))
            return result[0]
        })
})

export type AppRouter = typeof appRouter;
