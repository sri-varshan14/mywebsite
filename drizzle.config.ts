import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
    path: '.env.local',
});

console.log(process.env.DB_URL!)
export default {
    schema: "./src/db/scheme.ts",
    out: "./drizzle",
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DB_URL!,
    },
} satisfies Config;
