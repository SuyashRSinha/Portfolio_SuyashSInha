'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Code, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[800px] bg-white/90 backdrop-blur-md border border-border-light rounded-full px-6 py-3 z-50 shadow-sm flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-text-primary-light whitespace-nowrap text-[15px]">
          Suyash Ranjan Sinha
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${pathname === link.href
                  ? 'text-text-primary-light font-semibold'
                  : 'text-text-body hover:text-text-primary-light'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-primary py-2 px-5 text-xs hidden sm:inline-flex"
          >
            Let&apos;s talk
          </Link>
          <div className="hidden sm:flex items-center gap-3 text-text-primary-light">
            <a
              href="https://github.com/SuyashRSinha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-orange transition-colors"
              aria-label="GitHub"
            >
              <Code size={20} />
            </a>
            <a
              href="https://wa.me/917070747693"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-orange transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-primary-light p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-white rounded-2xl shadow-xl border border-border-light p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-base font-medium transition-colors ${pathname === link.href
                    ? 'text-accent-orange'
                    : 'text-text-body hover:text-text-primary-light'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border-light flex items-center gap-4">
              <Link href="/contact" className="btn-primary py-2.5 px-6 text-sm flex-1 justify-center">
                Let&apos;s talk
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-text-body hover:text-text-primary-dark transition-colors bg-white hover:bg-gray-50 border border-border-light rounded-full" aria-label="GitHub">
                <Code size={22} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
