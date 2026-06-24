import HeroSection from '@/components/sections/HeroSection'
import FooterCTA from '@/components/sections/FooterCTA'
import DeliveryMap from '@/components/sections/DeliveryMap'
import Eyebrow from '@/components/ui/Eyebrow'
import Card from '@/components/ui/Card'
import FadeIn from '@/components/ui/FadeIn'
import { ShoppingCart, Bot, Terminal, ChevronRight, ChevronDown } from 'lucide-react'

export const metadata = {
  title: 'Services | Suyash Ranjan Sinha',
  description: 'Full-stack web development, AI integration, and business systems.',
}

export default function ServicesPage() {
  return (
    <>
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-bg-dark pt-20 pb-20 px-6 overflow-hidden relative">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-6 h-px bg-accent-orange"></span>
                <span className="text-[11px] font-semibold tracking-[0.08em] text-text-muted uppercase">Services</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-primary-dark leading-[1.1] tracking-tight mb-8">
                Three things I do well —<br />all of them end to end.
              </h1>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
                From database schema to deploy — scalable apps, AI features, and the business systems behind them. No templates, no generic solutions.
              </p>
            </div>
            
            {/* Right Widget */}
            <div className="lg:col-span-5 xl:col-span-4 flex lg:justify-end">
              <DeliveryMap />
            </div>
          </div>
          
          <div 
            className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
          ></div>
        </section>

        {/* Main Services */}
        <section className="bg-bg-body py-24 relative z-20">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-6">
              
              {/* Service 1 */}
              <FadeIn delay={0.1}>
                <div className="bg-bg-card rounded-[24px] p-8 border border-border-light shadow-sm flex flex-col hover:shadow-md transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-accent-orange/15 text-accent-orange flex items-center justify-center mb-6">
                  <ShoppingCart size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif text-text-primary-light">Web Apps, E-commerce & Marketplaces</h3>
                <p className="text-text-body mb-8 text-sm leading-relaxed">
                  Custom applications and digital storefronts built from scratch with Next.js, React, and Node.js. Vendor dashboards, complex search, and secure payments.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-text-body flex-grow">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-orange font-bold">✓</span> Vendor & admin dashboards
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-orange font-bold">✓</span> Advanced search & secure payments
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-orange font-bold">✓</span> Scalable architectures
                  </li>
                </ul>
                <div className="space-y-3 pt-6 border-t border-border-light text-sm font-medium">
                  <a href="/contact" className="flex items-center text-accent-orange hover:text-accent-orange-hover transition-colors">
                    Tell me what you need <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              </FadeIn>

              {/* Service 2 */}
              <FadeIn delay={0.2}>
                <div className="bg-bg-card rounded-[24px] p-8 border border-border-light shadow-sm flex flex-col hover:shadow-md transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-accent-orange/15 text-accent-orange flex items-center justify-center mb-6">
                  <Bot size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif text-text-primary-light">AI Integration & Automation</h3>
                <p className="text-text-body mb-8 text-sm leading-relaxed">
                  Claude, OpenAI, and custom LLM features embedded into your workflow. Document processing pipelines, automated agents, and intelligent chatbots.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-text-body flex-grow">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-orange font-bold">✓</span> Custom AI Assistants
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-orange font-bold">✓</span> Automated document processing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-orange font-bold">✓</span> Intelligent agentic workflows
                  </li>
                </ul>
                <div className="space-y-3 pt-6 border-t border-border-light text-sm font-medium">
                  <a href="/contact" className="flex items-center text-accent-orange hover:text-accent-orange-hover transition-colors">
                    Tell me what you need <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              </FadeIn>

              {/* Service 3 */}
              <FadeIn delay={0.3}>
                <div className="bg-bg-card rounded-[24px] p-8 border border-border-light shadow-sm flex flex-col hover:shadow-md transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 text-cyan-600 flex items-center justify-center mb-6">
                  <Terminal size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif text-text-primary-light">Business Systems & Internal Tools</h3>
                <p className="text-text-body mb-8 text-sm leading-relaxed">
                  Bespoke internal dashboards, CRM integrations, and data reporting tools designed exactly for how your team works.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-text-body flex-grow">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-orange font-bold">✓</span> Multi-role admin panels
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-orange font-bold">✓</span> Real-time data reporting
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-orange font-bold">✓</span> Full documentation & handover
                  </li>
                </ul>
                <div className="space-y-3 pt-6 border-t border-border-light text-sm font-medium">
                  <a href="/contact" className="flex items-center text-accent-orange hover:text-accent-orange-hover transition-colors">
                    Tell me what you need <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* Explore Grid */}
        <section className="bg-bg-card py-24 border-t border-border-light transition-colors duration-300">
          <div className="max-w-[1100px] mx-auto px-6">
            <FadeIn>
              <Eyebrow className="mb-12">EXPLORE EACH SERVICE</Eyebrow>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {[
                { title: "Web app development", desc: "Custom web app development with Next.js, React, Node.js, dashboards, auth, APIs, payments, and deployment." },
                { title: "Marketplace development", desc: "Robust platforms with vendor dashboards, advanced filtering, review systems, and secure transaction flows." },
                { title: "AI integration", desc: "Embedding LLM capabilities: ChatGPT, Claude, custom agents, RAG systems, and AI-driven automation." },
                { title: "Business systems", desc: "Custom CRMs, inventory tracking, reporting dashboards, and internal team management tools." },
                { title: "Automation pipelines", desc: "Scheduled jobs, data synchronization, API integrations, and webhook-driven business logic." }
              ].map((item, idx) => (
                <FadeIn key={idx} delay={0.1 * idx}>
                  <a href="/contact" className="bg-bg-body p-6 rounded-2xl border border-border-light hover:border-accent-orange/30 transition-all group flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-text-primary-light group-hover:text-accent-orange transition-colors">{item.title}</h4>
                    <ChevronRight size={16} className="text-text-muted group-hover:text-accent-orange transition-colors" />
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed mt-auto">{item.desc}</p>
                </a>
                </FadeIn>
              ))}
              
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-bg-body py-24">
          <div className="max-w-[800px] mx-auto px-6">
            <FadeIn>
              <Eyebrow className="mb-6">FAQ</Eyebrow>
              <h2 className="font-serif text-4xl font-medium mb-12 text-text-primary-light">Questions, answered honestly.</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                "Do you build from scratch or use templates?",
                "Can you handle complex authentication and payments?",
                "Do you work solo or with a team?",
                "Can you add AI features to my existing application?",
                "What happens after the project is launched?"
              ].map((question, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <button className="bg-bg-card border border-border-light px-6 py-5 rounded-xl flex justify-between items-center text-left hover:border-accent-orange/30 transition-colors w-full group shadow-sm">
                    <span className="font-medium text-sm text-text-primary-light">{question}</span>
                    <ChevronDown size={18} className="text-accent-orange group-hover:translate-y-0.5 transition-transform" />
                  </button>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Not sure CTA */}
        <section className="bg-bg-body pb-24">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="bg-bg-dark rounded-[24px] p-10 md:p-12 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-3">Not sure which one fits?</h3>
              <p className="text-gray-400 mb-8 max-w-lg text-sm">Tell me what you&apos;re building — I&apos;ll point you at the right starting place. Reply within 24 hours.</p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="/contact" className="bg-accent-orange hover:bg-accent-orange-hover text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
                  Tell me what you need
                </a>
                <a href="/contact" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors border border-white/10">
                  Book a call
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterCTA />
    </>
  )
}
