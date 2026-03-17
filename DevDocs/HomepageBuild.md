# Homepage Section Components Build

1. Create section components folder
- `app/components/sections/` to hold all homepage section components

2. Build each section component one at a time
**Create these files in `app/components/sections/`:**
- `HeroSection.tsx` : hero with headline (bold/semibold/thin lines), buttons, portrait placeholder
- `IntroStrip.tsx` : "Build with Shannon" left (40%), 3 content type icons right (60%)
- `FeaturedWorkSection.tsx` : eyebrow, headline, 2 featured project cards in grid
- `LearnSection.tsx` : headline, 3 content cards (tutorials, guides, videos)
- `WorkWithMeSection.tsx` : positioning copy on left, 4 service blocks on right
- `ResourcesSection.tsx` : headline, 3 resource cards in grid
- `AboutPreviewSection.tsx` : portrait on left, bio + CTA on right
- `FinalCTASection.tsx` : centered headline, description, 2 buttons

3. Styling approach for each section
- Use brand color tokens (bg-brand-primary, text-brand-charcoal, etc.)
- Use the predefined spacing, radius, shadows from globals.css
- Keep sections full-width with centered max-width container
- Premium spacing between sections and elements
- **Responsive:** stack elements vertically on mobile

4. Update the homepage
Import all section components into `app/page.tsx` and render them in order, passing the content data as props.

5. Verify TypeScript compiles
Run npm run build to catch any type errors.

6. Visually inspect in dev server
Run npm run dev and view http://localhost:3000 to see the full homepage come together.

I'll build all 8 section components in parallel, then wire them into the homepage. Let me first check the existing page.tsx to know what I'm replacing. 



After all 8 section components are created
- I need to install `lucide-react` (used by IntroStrip) and wire everything into `page.tsx. `
- lucide-react is an icon library for React
    - gives you lightweight SVG icons as React components, so you can import icons like BookOpen, FileText, or Youtube and render them directly in your JSX
- The Intro Strip called for clean icons next to “Tutorials,” “Guides,” and “YouTube.”
- lucide-react is simple, modern, and visually restrained, which fits your brand direction better than heavier or more decorative icon sets.
- The icons are easy to size, color, and style with Tailwind classes.
- It keeps the code clean because each icon is just a normal React component.

**What was built:**

| Section | File | Background |
|---|---|---|
| Hero | `HeroSection.tsx` | Dark cinematic purple gradient, left headline, right portrait |
| Intro Strip | `IntroStrip.tsx` | Off-white, 40/60 split with Lucide icons |
| Featured Work | `FeaturedWorkSection.tsx` | Off-white, 2-col with project cards |
| Learn | `LearnSection.tsx` | Soft gray tint, 3-col content cards |
| Work With Me | `WorkWithMeSection.tsx` | Deep charcoal, 4 service blocks |
| Resources | `ResourcesSection.tsx` | Off-white, 3 resource cards |
| About Preview | `AboutPreviewSection.tsx` | Soft gray, portrait + bio |
| Final CTA | `FinalCTASection.tsx` | Dark purple gradient, centered layout |

Run `npm run dev` inside buildwithshannonapp to see the full homepage. Next is **Step 7** — building the inner pages (About, Learn, Systems, Work With Me, Resources, Contact). Ready when you are.
---

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

**Steps 1–3 are setup**
*All these have to be right before you touch a single component*
- [foundation](./DevDocs/TechStack.md)
- [styling & typography](./DevDocs/StylingTypography.md)

**[Step 4](./DevDocs/HeaderFooter.md)** 
- gets the shared shell in place so every page has a consistent frame
- building the shared Header and Footer components

**[Step 5](./DevDocs/TypedContentFiles.md)**
- the content model, which comes before components, not after
- so you are not redesigning sections when the content does not fit

**[Steps 6](./DevDocs/HomepageBuild.md)**
- build actual homepage first because it is the most complex and sets the pattern, then inner pages second


STEP 7 COMPLETE yOU NEED TO CREATE BRANCH AND PUSH CHECK ANYTHING ELSE YOU WANT TO CHANGE OR ADD AND THEN START STEP 8
<!-- [Step 7](./DevDocs/)
- building the inner pages -->

<!-- .
Steps 6–7 are the actual build, homepage first because it is the most complex and sets the pattern, then inner pages second.
Step 8 is motion last, not first. This is important: animations added at the end are much easier to tune than ones baked in from the start.
Steps 9–10 are polish and deploy. -->