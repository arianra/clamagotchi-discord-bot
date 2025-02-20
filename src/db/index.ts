import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { type NeonHttpDatabase } from "drizzle-orm/neon-http";

// Define the schema type
type Schema = typeof schema;

// Create the SQL connection
const sql = neon<boolean, boolean>(process.env.DATABASE_URL!);

// Create the database instance with typed schema
export const db: NeonHttpDatabase<Schema> = drizzle(sql, { schema });

// Export the schema for use in queries
export { schema };
