import { sql } from "drizzle-orm";
import { pgTable, text, uuid, date } from "drizzle-orm/pg-core";

export const blog = pgTable('blogs', {
    id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
    route: text('route').default("").notNull().unique(),
    title: text('title').default("").notNull(),
    description: text('description').default("").notNull(),
    readtime: text('readtime').default("5").notNull(),
    category: text('category').default("").notNull(),
    markdown: text('markdown').default("").notNull(),
    thumbnail: text('thumbnail').default("").notNull(),
    date: date('date').default(sql`CURRENT_DATE`).notNull()
});

export type Blog = typeof blog.$inferSelect
export type NewBlog = typeof blog.$inferInsert
