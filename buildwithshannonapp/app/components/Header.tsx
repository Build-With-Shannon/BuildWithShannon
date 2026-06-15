'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Learn', href: '/learn' },
    { label: 'Systems', href: '/systems' },
    { label: 'Work With Me', href: '/work-with-me' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActiveRoute = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-soft-gray/45 bg-brand-off-white/58 backdrop-blur-lg supports-[backdrop-filter]:bg-brand-off-white/50">
      <div className="px-6 py-5 max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-off-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src="/images/bws-logo-light-transparent.png"
            alt="Build With Shannon"
            width={160}
            height={36}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-12 hidden flex-1 lg:block" aria-label="Primary navigation">
          <ul className="flex gap-6 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                  className={`whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-off-white ${
                    isActiveRoute(item.href)
                      ? 'text-brand-primary'
                      : 'text-brand-charcoal hover:text-brand-primary'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <Link
          href="/#featured-work"
          className="ml-6 hidden rounded-[var(--radius-btn)] bg-brand-cta px-6 py-2 text-sm font-medium text-brand-charcoal transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-off-white lg:inline-flex"
        >
          Explore
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex items-center justify-center rounded-full border border-brand-soft-gray/70 p-2 text-brand-charcoal transition-colors hover:border-brand-primary/50 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-off-white lg:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-brand-soft-gray/50 bg-brand-off-white/95 px-6 pb-8 pt-6 backdrop-blur-xl lg:hidden">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                    className={`block text-2xl font-medium tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-off-white ${
                      isActiveRoute(item.href)
                        ? 'text-brand-primary'
                        : 'text-brand-charcoal hover:text-brand-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/#featured-work"
            className="mt-8 inline-flex rounded-[var(--radius-btn)] bg-brand-cta px-6 py-3 text-base font-medium text-brand-charcoal transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-off-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Explore
          </Link>
        </div>
      ) : null}
    </header>
  );
}
