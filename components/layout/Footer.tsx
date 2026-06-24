import Link from 'next/link'
import { Code, Briefcase, MessageCircle, Mail } from 'lucide-react'

const exploreLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
]

const detailLinks = [
  { label: 'FAQ', href: '/services#faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Now', href: '/now' },
  { label: 'Uses', href: '#' },
  { label: 'Links', href: '#' },
]

const connectLinks = [
  { label: 'GitHub', href: 'https://github.com/SuyashRSinha', icon: Code },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/suyash-sinha-aa6261227/', icon: Briefcase },
  { label: 'WhatsApp', href: 'https://wa.me/917070747693', icon: MessageCircle },
  { label: 'Email', href: 'mailto:suyash.sinha.104@gmail.com', icon: Mail },
]

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white pt-20 pb-10 relative overflow-hidden border-t border-border-dark">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Col 1 - Brand */}
        <div className="space-y-4">
          <div className="font-bold text-lg">Suyash Ranjan Sinha</div>
          <p className="text-xs text-text-muted max-w-[200px]">
            Final year B.Tech ECE student and full-stack developer building intelligent applications.
          </p>
          <div className="text-[10px] text-text-muted uppercase tracking-wider flex items-center gap-2 pt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" /> PATNA · WORKING WORLDWIDE
          </div>
        </div>

        {/* Col 2 - Explore */}
        <div className="space-y-4">
          <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">EXPLORE</div>
          <ul className="space-y-3 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 - Details */}
        <div className="space-y-4">
          <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">DETAILS</div>
          <ul className="space-y-3 text-sm">
            {detailLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 - Connect */}
        <div className="space-y-4">
          <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">CONNECT</div>
          <ul className="space-y-3 text-sm">
            {connectLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <link.icon size={16} />
                    {link.label}
                  </span>
                  <span className="text-accent-orange opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1100px] mx-auto px-6 mt-20 pt-6 border-t border-border-dark flex flex-col md:flex-row justify-between items-center text-[10px] text-text-muted tracking-wider uppercase relative z-10">
        <div>© 2026 SUYASH RANJAN SINHA</div>
        <div className="mt-4 md:mt-0">DEVELOPMENT · HARDWARE · AI INTEGRATION</div>
      </div>

      {/* Giant Watermark */}
      <div className="absolute bottom-0 left-0 w-full text-center pointer-events-none select-none overflow-hidden leading-none z-0 translate-y-1/4">
        <span className="font-serif text-[120px] md:text-[200px] lg:text-[280px] font-bold text-white/[0.02] whitespace-nowrap">
          SUYASH RANJAN SINHA
        </span>
      </div>
    </footer>
  )
}
