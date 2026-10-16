This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Previews and releases

- Branch from `main`, then open a pull request into `main`.
- Netlify posts a Deploy Preview link on every pull request into `main`;
  Cloudflare Pages also posts a preview link. Test there before merging.
- Merging into `main` releases the site.

## Design system

- Dark theme tokens and surfaces (`glass`, `dark-section`, `btn-glow`, …) live in
  `app/globals.css`; colours and fonts in `tailwind.config.ts`.
- Shared animations (`Reveal`, `Stagger`, `SplitText`, `CountUp`, `Magnetic`, `Tilt`)
  live in `app/components/motion.tsx` and respect `prefers-reduced-motion`.
