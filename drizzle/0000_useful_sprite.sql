CREATE TABLE IF NOT EXISTS "blogs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"rvalue" text DEFAULT '' NOT NULL,
	"title" text DEFAULT '' NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"readtime" text DEFAULT '5' NOT NULL,
	"category" text DEFAULT '' NOT NULL,
	"markdown" text DEFAULT '' NOT NULL,
	"thumbnail" text DEFAULT '' NOT NULL,
	"date" date DEFAULT CURRENT_DATE NOT NULL,
	CONSTRAINT "blogs_rvalue_unique" UNIQUE("rvalue")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "newsletter" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"fsubdate" date DEFAULT CURRENT_DATE NOT NULL,
	"disdate" date,
	"receive" boolean DEFAULT true NOT NULL,
	"date" date DEFAULT CURRENT_DATE NOT NULL,
	CONSTRAINT "newsletter_email_unique" UNIQUE("email")
);
