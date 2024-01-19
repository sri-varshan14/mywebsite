import { drizzle } from 'drizzle-orm/postgres-js';
import { Pool } from "pg";

import * as dotenv from "dotenv";
dotenv.config();

console.log(process.env.DATABASE_URL!)
const queryClient = new Pool({
    connectionString: process.env.DATABASE_URL!
});
const db = drizzle(queryClient);

export default db;
