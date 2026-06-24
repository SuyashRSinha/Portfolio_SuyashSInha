import DeliveryMap from './DeliveryMap'
import Eyebrow from '@/components/ui/Eyebrow'
import FadeIn from '@/components/ui/FadeIn'

interface HeroSectionProps {
  eyebrow: string
  heading: React.ReactNode
  body: React.ReactNode
  showDeliveryMap?: boolean
  children?: React.ReactNode
}

export default function HeroSection({ eyebrow, heading, body, children, showDeliveryMap }: HeroSectionProps) {
  return (
    <section className="bg-bg-dark text-text-primary-dark pt-40 pb-24 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
          <FadeIn delay={0.1}>
            <Eyebrow className="mb-8">{eyebrow}</Eyebrow>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[64px] text-text-primary-dark leading-[1.1] tracking-tight mb-8">
              {heading}
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
              {body}
            </p>
          </FadeIn>
          
          {children && (
            <FadeIn delay={0.4}>
              <div className="mt-8">
                {children}
              </div>
            </FadeIn>
          )}
        </div>
        
        {showDeliveryMap && (
          <div className="lg:col-span-5 xl:col-span-4 flex lg:justify-end">
            <FadeIn delay={0.5} direction="left">
              <DeliveryMap />
            </FadeIn>
          </div>
        )}
      </div>
    </section>
  )
}
