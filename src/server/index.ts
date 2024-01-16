import db from "@/db/client";
import { z } from 'zod';
import { publicProcedure, router } from "./trpc";
import { blog, newsletter } from "@/db/scheme";
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
            let result = await db.select({ markdown: blog.markdown }).from(blog).where(eq(blog.rvalue, input))
            let mk_link = result[0].markdown;
            let response = await axios.get(mk_link);
            const content = response.data;
            return content;
        }),
    getBlogDetail: publicProcedure
        .input(z.string())
        .query(async (opts) => {
            const { input } = opts;
            let result = await db.select().from(blog).where(eq(blog.rvalue, input))
            return result[0]
        }),
    getSearchDetails: publicProcedure
        .query(async (opts) => {
            let result = await db.select({
                id: blog.id,
                title: blog.title,
                description: blog.description,
                tags: blog.category
            }).from(blog);
            return result;
        }),
    subNewsLetter: publicProcedure
        .input(z.string())
        .query(async (opts) => {
            const { input } = opts;
            let result = await db.select({
                receive: newsletter.receive
            }).from(newsletter).where(eq(newsletter.email, input))
            if (result.length == 0) {
                await db.insert(newsletter).values({
                    email: input
                });
                return {
                    error: false,
                    msg: "Thanks for the subscribe."
                }
            }
            else if (result.length == 1 && result[0].receive == false) {
                await db.update(newsletter).set({ receive: true }).where(eq(newsletter.email, input))
                return {
                    error: false,
                    msg: "Thanks for the resubscribe."
                }
            }
            else {
                return {
                    error: true,
                    msg: "User already exist."
                }
            }
        })
})

export type AppRouter = typeof appRouter;
