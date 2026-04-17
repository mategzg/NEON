import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is required');
}

const sql = neon(databaseUrl);
const [result] = await sql`select current_database() as database, current_user as user_name, now()::text as checked_at`;

console.log(JSON.stringify({ ok: true, ...result }, null, 2));
