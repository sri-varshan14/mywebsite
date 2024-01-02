import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as dotenv from "dotenv";
dotenv.config();

const queryClient = postgres(process.env.DB_URL!, { max: 1 });
const db = drizzle(queryClient);

export default db;