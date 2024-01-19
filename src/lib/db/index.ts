import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres'

import * as dotenv from "dotenv";
dotenv.config();

console.log(process.env.DATABASE_URL!)
const queryClient = postgres(process.env.DATABASE_URL!, { max: 1 });
const db = drizzle(queryClient);

export default db;

