'use client';

import Link from 'next/link';

export default function Header() {
  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Learn', href: '/learn' },
    { label: 'Systems', href: '/systems' },
    { label: 'Work With Me', href: '/work-with-me' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-brand-off-white border-b border-brand-soft-gray">
      <div className="px-6 py-5 max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-brand-charcoal"
        >
          Build With Shannon
        </Link>

        {/* Navigation */}
        <nav className="flex-1 ml-16">
          <ul className="flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-brand-charcoal hover:text-brand-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <Link
          href="/explore"
          className="ml-8 px-6 py-2 bg-brand-primary text-brand-off-white text-sm font-medium rounded-[var(--radius-btn)] hover:opacity-90 transition-opacity"
        >
          Explore
        </Link>
      </div>
    </header>
  );
}
