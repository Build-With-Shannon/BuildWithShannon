'use client';

import Link from 'next/link';
import Image from 'next/image';

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
    <footer className="dark-section border-t border-white/10">
      <div className="px-6 py-6 max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <Link href="/" className="focus-visible:outline-none">
          <Image
            src="/images/bws-logo-light-transparent.png"
            alt="Build With Shannon"
            width={160}
            height={36}
            className="h-8 w-auto"
          />
        </Link>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/40 hover:text-white/80 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Build With Shannon
        </p>

      </div>
    </footer>
  );
}
