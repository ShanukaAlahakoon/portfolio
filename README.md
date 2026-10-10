# Shanuka Alahakoon - Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS. Fully static, no backend.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Edit your content

Everything lives in one file: `src/data/profile.ts`

- `projects`: add `github` (repo URL) and `demo` (live URL) per project. Links only render when set.
- `skills`, `education`, `certifications`, `profile`: plain data.
- Replace `public/Shanuka_Bandara_CV.pdf` when you update your CV.

## Structure

```
src/app/            layout, global styles (theme tokens), page
src/components/     header, hero, about, projects, skills, education, contact, footer
src/data/profile.ts all site content
src/fonts/          self-hosted Inter and JetBrains Mono
```

## Deploy

Push to GitHub, import the repo on Vercel. Every `git push` redeploys.
