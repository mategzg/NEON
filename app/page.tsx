export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', margin: '4rem auto', maxWidth: '48rem', padding: '0 1.5rem' }}>
      <h1>NEON</h1>
      <p>Next.js project configured for Neon Postgres.</p>
      <p>
        Check the database connection at <code>/api/health/db</code> after setting <code>DATABASE_URL</code>.
      </p>
    </main>
  );
}
