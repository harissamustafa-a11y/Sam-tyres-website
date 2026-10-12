import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { business } from '@/data/business'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#visit', label: 'Find us' },
]

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 rounded-md font-extrabold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="currentColor" />
        <circle cx="16" cy="16" r="7" fill="none" stroke="var(--accent)" strokeWidth="3" />
        <circle cx="16" cy="16" r="2" fill="var(--accent)" />
      </svg>
      <span className="text-lg">{business.name}</span>
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <a href={business.phoneHref}>
              <Phone aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border md:hidden">
          <ul className="container flex flex-col py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
