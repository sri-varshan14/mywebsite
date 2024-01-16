import { sql } from "drizzle-orm";
import { pgTable, text, uuid, date, boolean } from "drizzle-orm/pg-core";

export const blog = pgTable('blogs', {
    id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
    rvalue: text('rvalue').default("").notNull().unique(),
    title: text('title').default("").notNull(),
    description: text('description').default("").notNull(),
    readtime: text('readtime').default("5").notNull(),
    category: text('category').default("").notNull(),
    markdown: text('markdown').default("").notNull(),
    thumbnail: text('thumbnail').default("").notNull(),
    date: date('date').default(sql`CURRENT_DATE`).notNull()
});

export const newsletter = pgTable('newsletter', {
    id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
    email: text('email').notNull().unique(),
    fsubdate: date('fsubdate').default(sql`CURRENT_DATE`).notNull(),
    disdate: date('disdate'),
    receive: boolean('receive').default(true).notNull(),
    date: date('date').default(sql`CURRENT_DATE`).notNull()
})


