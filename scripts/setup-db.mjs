import { readFile } from 'node:fs/promises';
import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is required');
}

const sql = neon(databaseUrl);
const migration = await readFile(new URL('../migrations/001_init.sql', import.meta.url), 'utf8');

await sql(migration);
console.log('Database setup complete');
