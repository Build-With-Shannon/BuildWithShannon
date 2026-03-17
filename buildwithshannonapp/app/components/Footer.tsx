'use client';

import Link from 'next/link';

export default function Footer() {
  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Learn', href: '/learn' },
    { label: 'Systems', href: '/systems' },
    { label: 'Work With Me', href: '/work-with-me' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-brand-charcoal text-brand-off-white border-t border-brand-violet border-opacity-30">
      <div className="px-6 py-12 max-w-7xl mx-auto">
        {/* Top section */}
        <div className="mb-8 flex flex-col items-start gap-10 border-b border-brand-violet border-opacity-20 pb-8 lg:flex-row lg:justify-between lg:gap-12">
          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="text-lg font-semibold tracking-tight mb-2 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal">
              Build With Shannon
            </Link>
            <p className="text-sm text-brand-soft-gray">
              Building, Teaching & Creating Smart Solutions with AI
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-soft-gray hover:text-brand-off-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="w-full lg:w-auto">
            <p className="text-xs uppercase tracking-wider text-brand-violet mb-3">
              Connect
            </p>
            <ul className="flex flex-wrap gap-4">
              {[
                { label: 'LinkedIn', href: '#' },
                { label: 'Twitter', href: '#' },
                { label: 'YouTube', href: '#' },
              ].map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    className="text-sm text-brand-soft-gray hover:text-brand-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-xs text-brand-soft-gray text-center">
          <p>&copy; {new Date().getFullYear()} Shannon Reed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
