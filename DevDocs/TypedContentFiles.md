# Creating the local typed content files
**Creating the data layer with TypeScript interfaces and placeholder content for all homepage sections.**

1. Create a content structure folder
*Create app/data/ to hold all typed content files.*

2. Define content types with TypeScript interfaces
*Create app/data/types.ts with TypeScript interfaces for each homepage section:*
- **HeroContent :** headline, subheadline, CTA buttons
- **FeaturedWork :** featured projects/systems with images, tags, descriptions
- **LearnContent :** tutorial/guide cards with titles, descriptions, thumbnails
- **ServiceBlocks :** service offerings with descriptions
- **ResourceCard :** resource/product cards with cover, title, type, description
- **AboutPreview :** short bio and CTA
- **FinalCTA :** closing call-to-action

3. Create content data files
*Create individual files in app/data/ for each section:*
- `app/data/hero.ts` : hero headline, buttons, description
- `app/data/featured-work.ts` : array of featured projects
- `app/data/learn.ts` : array of learning content cards
- `app/data/services.ts` : array of service blocks
- `app/data/resources.ts` : array of resource cards
- `app/data/about.ts` : about preview content
- `app/data/cta.ts` : final CTA content

4. Use real or placeholder data
*Fill each file with either:*
- Real content from your README/brief, or
- Placeholder/template data that matches the structure

5. Export everything from index
*Create app/data/index.ts that re-exports all content for easy importing elsewhere.*

6. Verify TypeScript compiles
*Run npm run build to ensure all types are valid and no import errors.*

### Content Structure

**app/data/ folder with:**
- types.ts — TypeScript interfaces for all homepage sections (Hero, FeaturedWork, Learn, WorkWithMe, Resources, AboutPreview, FinalCTA)
- hero.ts — your headline ("Shannon Reed. Building, Teaching & Creating. Smart Solutions with AI"), buttons, and styling info
- featured-work.ts — featured projects/systems with titles, tags, descriptions
- learn.ts — learning cards (tutorials, guides, videos)
- work-with-me.ts — 4 service blocks (Strategy, System Design, Technical, Teaching)
- resources.ts — 3 resource cards (Handbook, Template Kit, AI Playbook)
- about.ts — about preview with bio and CTA
- cta.ts — final call-to-action section
- index.ts — exports everything for easy importing

All the content is now separated from components, typed, and ready
**Update any section anytime by editing its `.ts` file.**


After this is done, every homepage section will have a clear, typed data structure. Then next, build the actual components that consume this data.