# Portfolio Frontend

Next.js frontend for [Emanuel Vicente](https://www.emanuelvicente.com.ar)’s personal portfolio.

Displays profile, experience, projects, and skills from the backend API, and includes a client-side AI assistant chat.

> **Note:** The assistant uses Google Gemini’s free tier. Answers may be limited, delayed, or unavailable under free-plan rate limits and quotas.

For the full project overview (frontend + backend), see the root [`README.md`](../README.md).

## Stack

- Next.js (App Router)
- React
- TypeScript

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The backend API should be running (default [http://localhost:3001](http://localhost:3001)).

## Environment variables

| Variable | Description |
| --- | --- |
| `API_URL` | Backend URL for server-side fetches (`/profile`) |
| `NEXT_PUBLIC_API_URL` | Backend URL for browser requests (`/assistant`) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for SEO |

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Lint |

## Project layout

```text
app/                 # Routes, layout, metadata, sitemap
components/layout/   # Header, footer, shared layout
features/
  profile/           # Hero + profile fetching
  experience/
  projects/
  skills/
  contact/
  assistant/         # AI chat UI
```
