import Link from 'next/link'

export default function FooterCTA() {
  return (
    <section className="py-24 px-6 bg-bg-dark border-t border-border-dark text-white">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-[10px] text-accent-orange uppercase tracking-wider font-semibold mb-4">
            — AVAILABLE FOR SELECT PROJECTS
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
            Need a system<br />your team can<br />rely on?
          </h2>
        </div>
        <div className="space-y-6 md:pl-12">
          <p className="text-sm text-text-muted leading-relaxed">
            Tell me what needs to work. I&apos;ll help map the right build, integration, or automation.
          </p>
          <Link
            href="/contact"
            className="btn-ghost-dark bg-white text-bg-dark hover:bg-gray-100 border-none px-8"
          >
            Start a conversation →
          </Link>
        </div>
      </div>
    </section>
  )
}
