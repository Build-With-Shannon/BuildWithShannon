# Build With Shannon

- `npm start` only serves the production build
- if there is no fresh build, it can fail with exit code 1

*Use this flow inside buildwithshannonapp:*
- `npm run build`
- `npm start`

*For active development, use:*
- `npm run dev`

“starter screen” = normal, because page.tsx:1 is still default.
“start fails” = usually means you need npm run build first.
--------------------------------------------------------------------


## Next.js with Tailwind v4
- uses CSS-based configuration via `@theme` in `globals.css` instead of a `tailwind.config.ts.`
- `globals.css` contains all five brand color tokens, font family slots, and base styles

## Brand Color Utility Chart

| Tailwind Utility Classes | Hex | Brand Name |
|---|---|---|
| `bg-brand-primary` / `text-brand-primary` | `#6C3EF4` | Primary Purple |
| `bg-brand-charcoal` / `text-brand-charcoal` | `#1F2430` | Deep Charcoal |
| `bg-brand-soft-gray` / `text-brand-soft-gray` | `#E9EAF0` | Soft Gray |
| `bg-brand-off-white` / `text-brand-off-white` | `#F8F9FC` | Off White |
| `bg-brand-violet` / `text-brand-violet` | `#B7A6F8` | Muted Violet |

- **Hero gradient :** two deep near-black-purple values for the cinematic dark hero background.

- **Font slots :** `--font-heading` and `--font-body` are wired up and ready for the actual font choices in Step 3.

- **Spacing, radius, shadows :** named tokens for consistent card corners, button radius, and the subtle purple-tinted card shadow that fits the brand.

## Font Choices: Choosing and configuring the fonts via Next Font
- replaced the default Geist fonts with a branded heading/body pair through Next Font
- **Heading font :** Cormorant Garamond (premium/editorial tone)
    - gives the feminine, polished, high-end brand feel
- **Body font :** Sora (modern/technical clarity)
    - keeps body copy clean and modern so the site still reads like a structured builder platform, not a fashion editorial
- Updated site metadata title/description for your brand
- Fixed the font token wiring so your design tokens now point to real Next Font variables