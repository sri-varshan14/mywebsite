CREATE TABLE IF NOT EXISTS "newsletter" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"date" date DEFAULT CURRENT_DATE NOT NULL,
	"receive" boolean DEFAULT true NOT NULL,
	CONSTRAINT "newsletter_email_unique" UNIQUE("email")
);
