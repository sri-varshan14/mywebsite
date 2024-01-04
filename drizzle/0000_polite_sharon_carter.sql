CREATE TABLE IF NOT EXISTS "blogs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text DEFAULT '' NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"readtime" text DEFAULT '5' NOT NULL,
	"category" text DEFAULT '' NOT NULL,
	"markdown" text DEFAULT '' NOT NULL,
	"thumbnail" text DEFAULT '' NOT NULL,
	"date" date DEFAULT CURRENT_DATE NOT NULL
);
