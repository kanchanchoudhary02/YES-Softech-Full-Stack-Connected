# YES Softech — Full Stack Project

This folder contains the connected YES Softech application:

- `frontend/` — React + Vite website
- `backend/` — Express + MongoDB API

## Frontend ↔ Backend connection

Production API:
`https://yes-softech-new.onrender.com/api`

The frontend source uses `.env.production`:
`VITE_API_URL=https://yes-softech-new.onrender.com/api`

The included `frontend/dist/` is already patched to use the Render API, so its contents can be uploaded directly to GoDaddy `public_html`.

## GoDaddy frontend deployment

Upload the CONTENTS of `frontend/dist/` into:
`public_html/`

Keep `.htaccess` in `public_html/`.

Do not upload `frontend/` itself as a folder inside `public_html`.

## Render backend deployment

Render:
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

Set the production environment variables using `backend/.env.example` as the template.
Never upload a real `.env` file or API/password secrets to GitHub.

## Local development

Frontend:
`cd frontend`
`npm install`
`npm run dev`

Backend:
`cd backend`
`npm install`
`npm start`

For local frontend API override, create `frontend/.env.local`:
`VITE_API_URL=http://localhost:5000/api`
