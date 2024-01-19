ALTER TABLE "blogs" RENAME COLUMN "rvalue" TO "route";--> statement-breakpoint
ALTER TABLE "blogs" DROP CONSTRAINT "blogs_rvalue_unique";--> statement-breakpoint
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_route_unique" UNIQUE("route");