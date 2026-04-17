# NEON

Minimal Next.js project wired for Neon Postgres.

## Neon project

- Neon project name: `NEON`
- Neon project id: `weathered-thunder-93205669`
- Production branch id: `br-twilight-violet-an5xx30c`
- Database: `neondb`

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Copy the environment template:

```bash
cp .env.example .env.local
```

3. In `.env.local`, set `DATABASE_URL` from your Neon project connection string.

4. Apply the initial schema:

```bash
npm run db:setup
```

5. Start the app:

```bash
npm run dev
```

6. Open `http://localhost:3000/api/health/db` to verify the database connection.

## GitHub integration

This repository is prepared for Neon through:

- `DATABASE_URL` based configuration
- a database health route
- an initial SQL schema
- a GitHub Actions workflow that validates Neon connectivity when the `DATABASE_URL` secret exists

Add a GitHub repository secret named `DATABASE_URL` with the Neon pooled connection string. Do not commit the real connection string to the repository.

## Neon Console connection

To complete the official Neon Console to GitHub connection, install or authorize the Neon GitHub App for this repo from the Neon Console integrations/settings flow, selecting `mategzg/NEON`.