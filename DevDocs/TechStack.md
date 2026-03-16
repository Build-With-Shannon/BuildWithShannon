# Build With Shannon

## Tech Stack

| Part | What It Is For | Why It Fits This Project |
|---|---|---|
| Next.js | The main web framework for building the site. It handles pages, routing, layouts, SEO metadata, image optimization, and performance features. | It gives you a solid foundation for a polished brand website that can grow into multiple sections like Learn, Systems, Resources, and Work With Me without needing to restructure everything later. |
| TypeScript | Adds types to your JavaScript so your code is safer, clearer, and easier to maintain. | It helps keep the project organized as the site grows, especially when you have reusable components, structured content, and multiple sections that need consistency. |
| Tailwind CSS | The styling system used to design the interface quickly with utility classes. | It is one of the fastest ways to build a highly custom, premium-looking design without fighting a heavy component library or ending up with a generic template feel. |
| Local typed content files | Structured content stored directly in the project as TypeScript objects or similar local data files. | This is the simpler/faster replacement for a CMS. It lets you manage things like featured systems, resources, services, and learning content quickly while keeping the content organized and type-safe. |
| Framer Motion | A library for animation and transitions in React. | It helps add polished motion to the site, like hero reveals and section transitions, which supports the premium and intentional brand feel without requiring a complicated animation setup. |
| Next Font | Next.js’s built-in way to load and manage web fonts efficiently. | Typography is a big part of the visual identity you want, so this gives you better control over premium font choices while keeping performance strong. |
| Vercel | The hosting and deployment platform for putting the site online. | It works especially well with Next.js, makes deployment simple, and gives you preview links during development so the site is easy to iterate on. |


## What's Required For V1
| Part | Required For V1? | What It Does In The Build Process | Notes |
|---|---|---|---|
| Next.js | Yes | Creates the app structure, pages, layouts, navigation, metadata, and overall site behavior. | This is the foundation of the whole project. |
| TypeScript | Yes | Defines types for components, props, and content objects so the code stays organized and errors are caught earlier. | Strongly recommended from the start so the project does not get messy as it grows. |
| Tailwind CSS | Yes | Handles the visual styling of layouts, spacing, typography, colors, buttons, sections, and responsive behavior. | This is the fastest path to a custom, polished UI for your homepage and supporting pages. |
| Local typed content files | Yes | Stores content like navigation items, featured systems, resources, services, about copy, and learning cards directly in the codebase. | This is the simple v1 substitute for a CMS and keeps content easy to manage while the site is small. |
| Framer Motion | Optional but recommended | Adds motion effects like fade-ins, staggered reveals, hero entrance animations, and smooth section transitions. | Not required to launch, but useful if you want the site to feel more premium and intentional. |
| Next Font | Yes | Loads and configures your chosen fonts in a performant way so typography is consistent across the site. | Because this brand direction depends heavily on typography, I would treat this as essential. |
| Vercel | Yes for deployment | Hosts the site, runs builds, and gives you preview deployments as you iterate. | You could host elsewhere, but Vercel is the simplest and cleanest fit for this stack. |

A practical way to think about it is:

- Core build layer: Next.js, TypeScript, Tailwind
- Content layer: local typed content files
- Brand polish layer: Next Font, Framer Motion
- Launch layer: Vercel

## V1 Build Order

| Step | Layer | What To Do | Why At This Step |
|---|---|---|---|
| 1 | Foundation | Scaffold the Next.js project with TypeScript and the App Router. | Everything else depends on this. Get the project created and confirmed working before touching anything else. |
| 2 | Styling | Install and configure Tailwind CSS. Set up the design token layer: colors, spacing, radius, and shadows matching your brand system. | Styling needs to be ready before any pages or components are built. Doing this early prevents inconsistency. |
| 3 | Typography | Install and configure Next Font with your chosen fonts. Define heading, subheading, and body type styles. | Typography does a lot of the brand work here. Locking it in early means every component you build from this point has the right look. |
| 4 | Layout | Build the root layout with the Header and Footer. | Every page shares these. Getting them right early gives you a consistent shell to build all pages inside. |
| 5 | Content Files | Create the local typed content files for the homepage sections: hero, featured systems, learn content, services, resources, and about. | Writing out the content model before building sections prevents you from having to redesign components later when the content does not fit. |
| 6 | Homepage Sections | Build each homepage section one at a time: Hero, Intro Strip, Featured Work, Learn With Shannon, Work With Me, Resources, About Preview, Final CTA. | The homepage is the core of the brand and the most complex page. Building it section by section keeps things manageable and lets you review design as you go. |
| 7 | Supporting Pages | Build the inner pages: About, Learn, Systems, Work With Me, Resources, Contact. | These pages extend the homepage hub. They can be built more quickly because the component and content patterns are already established. |
| 8 | Motion | Add Framer Motion animations to the hero and key sections. | Motion is the last layer to add, not the first. Applying it after the sections are complete keeps build complexity low and makes it easier to tune. |
| 9 | Polish | Review spacing, typography, responsiveness, and transitions across all pages. Fix anything that feels off. | One focused polish pass at the end produces a cleaner result than patching while building. |
| 10 | Deploy | Connect the repo to Vercel and deploy. Confirm the live site looks correct and all pages are accessible. | Deploying is a milestone, not a final destination. Plan to iterate after launch. |
