import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export const runtime = 'nodejs';

export async function GET() {
  const [result] = await sql<{ ok: number; checked_at: string }[]>`
    select 1 as ok, now()::text as checked_at
  `;

  return NextResponse.json({
    database: result.ok === 1 ? 'ok' : 'unexpected',
    checkedAt: result.checked_at,
  });
}
