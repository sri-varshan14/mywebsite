import { pgTable, text, uuid, numeric } from "drizzle-orm/pg-core";

export const blog = pgTable('users', {
    id: uuid('id').primaryKey(),
    title: text('title'),
    readtime: numeric('readtime'),
    category: text('category'),
    markdown: text('markdown'),
    thumbnail: text('thumbnail'),
});
