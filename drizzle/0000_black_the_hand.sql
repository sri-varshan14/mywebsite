CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text,
	"readtime" numeric,
	"category" text,
	"markdown" text,
	"thumbnail" text
);
