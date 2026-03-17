# Inner Pages Build

- build all six page shells first
- reuse existing data wherever possible
- avoid final-detail polish until all routes exist


1. Create page routes
*Add route folders in app/ for:*
- `about`
- `learn`
- `systems`
- `work-with-me`
- `resources`
- `contact`
**Each gets its own `page.tsx.`**

2. Build simple but branded page shells first, for each inner page, create:
- a clear page heading
- short intro copy
- spacing and layout consistent with the homepage
- your header and footer already wrap them automatically

**The goal here is not to fully finish every page at once. It is to create solid branded structures that extend the homepage.**

3. Pull from the existing content model where useful
*Use the content you already created in app/data/ where it makes sense:*
- `about` can reuse/about extend the About Preview content
- `learn` can list the learning cards
- `systems` can reuse featured work items
- `work-with-me` can expand the service blocks
- `resources` can reuse the resource cards
- `contact` can start with a clean contact CTA section

4. Keep the first pass lightweight
*Each page should be structurally complete but not overbuilt.*
- hero or intro block
- section content/cards
- clean layout
- working navigation destination
**This makes the site feel complete without forcing every page into final polish too early.**

5. Make navigation links real
*Now that these routes exist, the Header and Footer links will point to real pages instead of placeholders or future paths.*

6. Verify build
- Run `npm run` build after all pages are added.

7. Review the full site flow
*Run `npm run dev` and click through:*
- home → about
- home → learn
- home → systems
- home → work with me
- home → resources
- home → contact



I also added a shared intro component so those pages feel consistent, reused the existing data layer on the Learn, Systems, Work With Me, and Resources pages, and fixed the homepage links that were pointing at routes that did not exist yet. The Header Explore button now goes to the homepage featured-work section instead of a missing /explore route.



This is where you check whether the site feels like one connected brand system rather than just separate pages.