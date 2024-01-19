import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { Pool } from 'pg';

import * as dotenv from "dotenv";
dotenv.config();

const migrationClient = new Pool({
    connectionString: process.env.DATABASE_URL!
});

migrate(drizzle(migrationClient), { migrationsFolder: "drizzle" })
migrationClient.end().then(() => {
    console.log("Migration is completed!");
})
migrationClient.end();
