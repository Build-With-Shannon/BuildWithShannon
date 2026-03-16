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
- build actual homepage
are the actual build, homepage first because it is the most complex and sets the pattern, then inner pages second

<!-- [Step 7](./DevDocs/)
- building the inner pages -->

<!-- .
Steps 6–7 are the actual build, homepage first because it is the most complex and sets the pattern, then inner pages second.
Step 8 is motion last, not first. This is important: animations added at the end are much easier to tune than ones baked in from the start.
Steps 9–10 are polish and deploy. -->