# Nikhil Patil — Portfolio

A single-page Next.js portfolio with a wizarding-world visual theme:
parallax backdrop, a wand-shaped custom cursor with a sparkle trail, a
3D-rotating Python logo as the page loader, a scroll-tracking side
navigation, and a working contact form.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000.

## 3. Update your content

Everything on the page — name, summary, experience, projects, skills,
education, contact email — comes from **one file**:

```
data/data.js
```

Edit that file and every section updates automatically. You never need
to touch the components to change wording.

## 4. Turn on the contact form

The form posts to `app/api/contact/route.js`, which sends mail over
SMTP using Nodemailer. It won't send anything until you provide
credentials:

1. Copy `.env.example` to `.env.local`.
2. Fill in `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`.
   - Easiest option: a Gmail address with an
     [App Password](https://myaccount.google.com/apppasswords) (requires
     2-factor auth on the account).
   - Any other SMTP provider (Zoho, Outlook, SendGrid SMTP, etc.) works
     the same way — just swap the host/port.
3. Restart `npm run dev`.

Until `.env.local` is set, the form will show a friendly error instead
of failing silently.

## 5. Deploy

This is a standard Next.js app, so it deploys as-is to Vercel:

```bash
npx vercel
```

Add the same `SMTP_*` (and optional `CONTACT_TO`) variables in your
Vercel project's Environment Variables settings — `.env.local` is never
uploaded.

## Design notes

- **Font**: headings use *Cinzel Decorative*, body text uses *EB
  Garamond* — both free Google Fonts chosen for an old-book / wizarding
  feel. The actual Harry Potter movie logotype is a licensed commercial
  font (not free to embed on a public site), so this is the closest
  legally-safe alternative rather than the literal typeface.
- **Cursor**: `components/CustomCursor.jsx` draws a fluttering golden snitch
  (ball + two flapping wings) that follows the pointer with spring lag and
  drops a short gold-dust trail. It only activates on devices with a precise
  pointer (desktop mice/trackpads) — touch devices keep native behavior.
- **Backdrop**: `components/MoonlitBranches.jsx` renders an original,
  hand-drawn scene — moon glow, drifting mist, bare branch silhouettes in the
  corners, and a castle skyline with a faint lake reflection along the
  horizon — inspired by the mood of Harry Potter key art, not traced from any
  specific poster or still.
- **Loader**: `components/Loader.jsx` rotates an SVG Python logo in 3D
  using a CSS `perspective` + `rotateY` animation on load.
- **Parallax**: `components/ParallaxBackground.jsx` renders three
  depth layers of soft light that scroll at different speeds, and the
  hero headline itself shifts on scroll for a subtle depth effect.
- **Navigation**: `components/Navigation.jsx` is a vertical gold
  thread that fills as you scroll, with a waypoint per section.

## Project structure

```
app/
  layout.js          Fonts + global shell
  page.js             Assembles the sections + loader
  globals.css         Base styles, theme colors
  api/contact/route.js  Contact form email handler
components/           One file per section/UI piece
data/data.js          <-- Edit your content here
```
