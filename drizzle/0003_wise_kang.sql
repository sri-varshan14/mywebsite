ALTER TABLE "blogs" ADD COLUMN "rvalue" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_rvalue_unique" UNIQUE("rvalue");