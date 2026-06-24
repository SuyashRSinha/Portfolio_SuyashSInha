import DeliveryMap from '@/components/sections/DeliveryMap'
import FooterCTA from '@/components/sections/FooterCTA'
import FadeIn from '@/components/ui/FadeIn'
import { Mail, MessageCircle, Phone, MapPin, CalendarDays } from 'lucide-react'

export const metadata = {
  title: 'Contact | Suyash Ranjan Sinha',
  description: 'Reach out to discuss your project, integration, or system needs. I reply within 24 hours.',
}

export default function ContactPage() {
  return (
    <>
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-bg-dark pt-20 pb-20 px-6 overflow-hidden relative">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-6 h-px bg-accent-orange"></span>
                <span className="text-[11px] font-semibold tracking-[0.08em] text-text-muted uppercase">Contact</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-primary-dark leading-[1.1] tracking-tight mb-8">
                Tell me about your project.
              </h1>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
                Reply within 24 hours · NDA on request.
              </p>
            </div>
            
            {/* Right Widget */}
            <div className="lg:col-span-5 xl:col-span-4 flex lg:justify-end">
              <DeliveryMap />
            </div>
          </div>
          
          {/* Subtle background grid pattern */}
          <div 
            className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
          ></div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20 px-6">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Form Card */}
            <FadeIn className="lg:col-span-7 bg-bg-card border border-border-light rounded-2xl p-8 md:p-10 shadow-sm">
              <form className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-[13px] font-semibold text-text-primary-light mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full bg-white border border-border-light rounded-lg px-4 py-3 text-sm focus:ring-accent-orange focus:border-accent-orange outline-none transition-colors shadow-sm placeholder-gray-400" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[13px] font-semibold text-text-primary-light mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full bg-white border border-border-light rounded-lg px-4 py-3 text-sm focus:ring-accent-orange focus:border-accent-orange outline-none transition-colors shadow-sm placeholder-gray-400" 
                  />
                </div>
                <div>
                  <label htmlFor="need" className="block text-[13px] font-semibold text-text-primary-light mb-2">What do you need?</label>
                  <select 
                    id="need" 
                    name="need"
                    className="w-full bg-white border border-border-light rounded-lg px-4 py-3 text-sm focus:ring-accent-orange focus:border-accent-orange outline-none transition-colors shadow-sm text-text-body appearance-none"
                  >
                    <option value="web">Web app</option>
                    <option value="ai">AI integration</option>
                    <option value="business">Business system</option>
                    <option value="automation">Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[13px] font-semibold text-text-primary-light mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    className="w-full bg-white border border-border-light rounded-lg px-4 py-3 text-sm focus:ring-accent-orange focus:border-accent-orange outline-none transition-colors shadow-sm resize-y" 
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-accent-orange text-white rounded-full py-3.5 text-sm font-medium hover:bg-accent-orange-hover transition-colors mt-2 shadow-sm"
                >
                  Send project details.
                </button>
              </form>
            </FadeIn>

            {/* Right: Direct Info Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Reach Me Directly Card */}
              <FadeIn className="bg-bg-card border border-border-light rounded-2xl p-8 md:p-10 shadow-sm flex flex-col gap-8">
                <h3 className="text-xl font-semibold text-text-primary-light">Reach me directly</h3>
                
                <div className="flex flex-col gap-6">
                  {/* Email */}
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0 text-accent-orange mt-0.5">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-text-muted tracking-widest uppercase mb-1.5 block">Email</span>
                      <a href="mailto:suyash.sinha.104@gmail.com" className="text-sm font-medium text-text-primary-light hover:text-accent-orange transition-colors">suyash.sinha.104@gmail.com</a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0 text-accent-orange mt-0.5">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-text-muted tracking-widest uppercase mb-1.5 block">WhatsApp</span>
                      <a href="https://wa.me/917070747693" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-text-primary-light hover:text-accent-orange transition-colors">+91 70707 47693</a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0 text-accent-orange mt-0.5">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-text-muted tracking-widest uppercase mb-1.5 block">Phone</span>
                      <a href="tel:+917070747693" className="text-sm font-medium text-text-primary-light hover:text-accent-orange transition-colors">+91 70707 47693</a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0 text-accent-orange mt-0.5">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-text-muted tracking-widest uppercase mb-1.5 block">Location</span>
                      <span className="text-sm font-medium text-text-primary-light">Patna, India</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Talk it through Card (Dark) */}
              <FadeIn className="bg-bg-card-dark rounded-2xl p-8 md:p-10 flex flex-col items-start gap-5 text-white border border-border-dark">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center text-accent-orange mb-1 border border-accent-orange/20">
                  <CalendarDays size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Prefer to talk it through?</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed mb-2">
                  Book a short intro call — we&apos;ll scope what you&apos;re building, no pressure.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center bg-accent-orange text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-accent-orange-hover transition-colors gap-2 group"
                >
                  Book a call
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </FadeIn>

            </div>
          </div>
        </section>
      </main>
      <FooterCTA />
    </>
  )
}
