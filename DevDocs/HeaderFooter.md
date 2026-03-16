# Header Component

`app/components/Header.tsx`

- Logo text: "Build With Shannon" (left-aligned)
- Navigation menu (centered or left-aligned after logo):
    - About
    - Learn
    - Systems
    - Work With Me
    - Resources
    - Contact
- Primary button "Explore" (right-aligned)
- Use brand colors: off-white background, charcoal text, primary purple for the button
- Clean, premium spacing and typography


# Footer Component

`app/components/Footer.tsx`

- Logo text: "Build With Shannon"
- Short brand tagline below logo (e.g., "Building, Teaching & Creating Smart Solutions with AI")
- Navigation links (About, Learn, Systems, Work With Me, Resources, Contact)
- Social media placeholders (LinkedIn, Twitter, YouTube, etc.)
- Use brand colors: charcoal background or deep charcoal, off-white text
- Subtle borders using soft gray


# Update Root Layout
- Import both Header and Footer into app/layout.tsx
- Wrap the {children} with Header above and Footer below
- Ensures every page on the site has consistent header and footer

# Homepage Placeholder
- Replaced the default Next.js starter template
- Brand-branded with your colors and fonts
- Shows "Build With Shannon" heading with two CTA button

# Styling approach
- Use Tailwind utilities with your brand color tokens (bg-brand-charcoal, text-brand-off-white, etc.)
- Use the predefined spacing, radius, and shadow tokens from globals.css
- Keep both components minimal and centered — no clutter, lots of whitespace
- Mobile-responsive from the start (menu might collapse to hamburger on small screens)

# Build order
1. Create Header component with basic structure and styling
2. Create Footer component with basic structure and styling
3. Update layout.tsx to wrap children with Header and Footer
4. Run build to verify no TypeScript errors
5. Visually inspect via npm run dev to confirm layout and spacing look premium