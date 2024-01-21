import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres'

import * as dotenv from "dotenv";
dotenv.config();

const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 });

migrate(drizzle(migrationClient), { migrationsFolder: "drizzle" })
migrationClient.end().then(() => {
    console.log("Migration is completed!");
})
migrationClient.end();
