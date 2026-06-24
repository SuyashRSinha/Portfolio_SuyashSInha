import HeroSection from '@/components/sections/HeroSection'
import FooterCTA from '@/components/sections/FooterCTA'
import Eyebrow from '@/components/ui/Eyebrow'
import FadeIn from '@/components/ui/FadeIn'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'
import { MapPin, Briefcase, GraduationCap, Flame, BookOpen, Laptop, Coffee } from 'lucide-react'

export const metadata = {
  title: 'Now | Suyash Ranjan Sinha',
  description: 'What I am focused on, learning, and doing right now.',
}

export default function NowPage() {
  const currentFocus = [
    {
      title: 'Academics & College Life',
      icon: <GraduationCap className="w-5 h-5 text-accent-orange" />,
      desc: 'Pre-final year B.Tech student in Electronics and Communication Engineering (ECE) at Birla Institute of Technology, Mesra. Actively balancing ECE coursework, hardware projects, and full-stack software development.',
    },
    {
      title: 'Full-Stack Software Engineering',
      icon: <Laptop className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      desc: 'Deepening backend development skills in Java & Spring Boot, designing clean RESTful APIs, securing them with Spring Security & JWT, and integrating MySQL/MongoDB databases. Crafting premium user interfaces using React, Next.js, and Tailwind CSS.',
    },
    {
      title: 'AI & Automation Integrations',
      icon: <Flame className="w-5 h-5 text-amber-500" />,
      desc: 'Experimenting with behavior analytics and Agentic AI predictive maintenance systems. Exploring custom LLM integrations, retrieval augmented generation (RAG) workflows, and automating repetitive tasks via API automation.',
    },
    {
      title: 'IoT & Embedded Systems',
      icon: <Coffee className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      desc: 'Designing and programming microcontroller systems. Refining IoT real-time logging pipelines using ESP32, Firebase Realtime Database, and various sensors for smart environment monitoring.',
    }
  ]

  const learningList = [
    'Advanced System Design & Microservices patterns',
    'Docker containerization and pipeline automation workflows',
    'Next.js 16 frameworks and React 19 server actions',
    'AI behavior analytics modeling and anomaly detection algorithms'
  ]

  return (
    <>
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <HeroSection 
          eyebrow="NOW"
          heading={<>What I&apos;m focused on<br />right now.</>}
          body={
            <span className="block mt-2">
              This is a &ldquo;now&rdquo; page detailing my current location, projects, learning tracks, and overall life focus. Inspired by the nownownow.com movement.
            </span>
          }
        />

        {/* Content Section */}
        <section className="py-20 px-6 bg-bg-card border-t border-border-light transition-colors duration-300">
          <div className="max-w-[800px] mx-auto space-y-16">
            
            {/* Location & Summary Card */}
            <FadeIn>
              <div className="bg-bg-body border border-border-light rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
                <div className="flex items-center gap-3 text-text-primary-light font-bold">
                  <MapPin className="w-5 h-5 text-accent-orange shrink-0 animate-bounce" />
                  <span>Patna, Bihar, India</span>
                </div>
                <p className="text-sm text-text-body leading-relaxed">
                  Currently residing in Patna while pursuing my B.Tech at BIT Mesra. Operating primarily in a hybrid setup—attending classes, programming systems, and collaborating on national hackathons (like SIH 2025 and EY Techathon). Available for freelance work and selective remote internship roles.
                </p>
              </div>
            </FadeIn>

            {/* Core Activities */}
            <div className="space-y-6">
              <FadeIn>
                <div className="flex items-center gap-2 pb-2 border-b border-border-light">
                  <Briefcase className="w-5 h-5 text-accent-orange" />
                  <h2 className="text-xl font-bold text-text-primary-light uppercase tracking-wider">Active Focus Areas</h2>
                </div>
              </FadeIn>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {currentFocus.map((focus, idx) => (
                  <FadeIn key={idx} delay={0.05 * idx}>
                    <Card className="flex flex-col p-6 h-full border border-border-light hover:border-accent-orange transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-bg-body border border-border-light flex items-center justify-center shrink-0">
                          {focus.icon}
                        </div>
                        <h3 className="font-bold text-text-primary-light text-sm">{focus.title}</h3>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed flex-grow">
                        {focus.desc}
                      </p>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* What I'm Studying */}
            <div className="space-y-6">
              <FadeIn>
                <div className="flex items-center gap-2 pb-2 border-b border-border-light">
                  <BookOpen className="w-5 h-5 text-accent-orange" />
                  <h2 className="text-xl font-bold text-text-primary-light uppercase tracking-wider">Current Learning Syllabus</h2>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <ul className="space-y-3.5 pt-2">
                  {learningList.map((syllabus, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-text-body">
                      <span className="text-accent-orange font-bold mt-0.5">✓</span>
                      <span>{syllabus}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Last Updated Timestamp */}
            <FadeIn delay={0.2}>
              <div className="pt-8 border-t border-border-light flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-text-muted">
                <div>
                  Last updated: <span className="font-mono text-text-primary-light">June 2026</span>
                </div>
                <div className="flex gap-2">
                  <Tag className="bg-bg-body text-[10px] border border-border-light">Study Mode</Tag>
                  <Tag className="bg-bg-body text-[10px] border border-border-light">Ship Mode</Tag>
                </div>
              </div>
            </FadeIn>

          </div>
        </section>
      </main>
      <FooterCTA />
    </>
  )
}
