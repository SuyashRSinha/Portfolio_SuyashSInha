import HeroSection from '@/components/sections/HeroSection'
import Button from '@/components/ui/Button'
import FooterCTA from '@/components/sections/FooterCTA'
import Eyebrow from '@/components/ui/Eyebrow'
import FadeIn from '@/components/ui/FadeIn'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'
import { LayoutTemplate, Server, Database, Cpu } from 'lucide-react'

export const metadata = {
  title: 'About | Suyash Ranjan Sinha',
  description: 'Pre-Final year B.Tech ECE student at BIT Mesra developing expertise in full-stack development, AI/ML, and IoT systems.',
}

export default function AboutPage() {
  interface Skill {
    name: string
    logo?: string
    icon?: React.ReactNode
  }

  const frontendSkills: Skill[] = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  ]

  const backendSkills: Skill[] = [
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { 
      name: 'REST APIs', 
      icon: (
        <svg className="w-3 h-3 text-accent-orange shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      )
    },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ]

  const databasesEmbeddedSkills: Skill[] = [
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { 
      name: 'Vercel', 
      icon: (
        <svg className="w-3 h-3 fill-black dark:fill-white shrink-0" viewBox="0 0 75 65">
          <polygon points="37.5,0 75,65 0,65" />
        </svg>
      )
    },
    {
      name: 'Render',
      icon: (
        <svg className="w-3.5 h-3.5 text-cyan-500 fill-none stroke-current shrink-0" viewBox="0 0 24 24" strokeWidth="2.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      name: 'Railway',
      icon: (
        <svg className="w-3 h-3 fill-current text-pink-600 dark:text-pink-400 shrink-0" viewBox="0 0 24 24">
          <path d="M22 10v4h-6v-4h6zm-8-6v16h-4V4h4zm-6 6v4H2v-4h6z" />
        </svg>
      )
    },
    { name: 'ESP32', icon: <Cpu className="w-3.5 h-3.5 text-accent-orange shrink-0" /> },
    { name: 'Arduino IDE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
  ]

  return (
    <>
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <HeroSection
          eyebrow="ABOUT"
          heading={<>Developer, AI engineer,<br />builder of useful systems.</>}
          body="B.Tech ECE student at BIT Mesra and Full-Stack Java Developer with experience in building scalable web applications using Java, Spring Boot, databases, and modern web technologies. Passionate about AI integration, IoT solutions, and creating impactful software that solves real-world problems.
"
          showDeliveryMap={true}
        >
          <Button href="/now" className="flex items-center gap-2">
            See what I&apos;m doing now &rarr;
          </Button>
        </HeroSection>

        {/* Bio Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto">
            <FadeIn>
              <Eyebrow className="mb-8">MY STORY</Eyebrow>
              <div className="space-y-6 text-[15px] leading-[1.75] text-text-body">
                <p>
                  I&apos;m Suyash Ranjan Sinha, a Final year B.Tech Electronics and Communication Engineering (ECE) student at Birla Institute of Technology, Mesra. I specialize in full-stack Java development, hardware-software integration, and intelligent applications.
                </p>
                <p>
                  I work across the software and hardware spectrum, building scalable applications with<strong className="text-text-primary-light font-semibold">Java, Spring Boot, React, Node.js, MySQL, and MongoDB</strong> for web application development, and I also develop real-time IoT systems using<strong className="text-text-primary-light font-semibold">ESP32, Arduino IDE, and Google Firebase while leveraging Docker, AI integration</strong> and modern development tools to deliver intelligent, production-ready solutions.
                </p>
                <p>
                  Whether it&apos;s a full-stack enterprise KPI portal, a real-time IoT health monitoring system, or an AI-driven predictive maintenance platform, I focus on building reliable systems that solve real-world problems.
                </p>
                <p>
                  With experience clearing national hackathons like the EY Techathon 6.0, AtomQuest hackathons(AtomBerg) and participating in the Smart India Hackathon, I love taking on complex engineering challenges. If you are looking for a dedicated builder, let&apos;s talk.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Skills Grid Section */}
        <section className="py-24 px-6 lg:px-8 border-t border-border-light bg-bg-card">
          <div className="max-w-[1100px] mx-auto">
            <FadeIn>
              <Eyebrow className="mb-12 justify-center">WHAT I WORK WITH</Eyebrow>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Frontend */}
              <FadeIn delay={0.1}>
                <Card className="flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-accent-orange mb-6">
                    <LayoutTemplate size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary-light mb-6">Frontend</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {frontendSkills.map((skill) => (
                      <Tag key={skill.name} className="flex items-center gap-1.5 py-1 px-2.5 bg-bg-body text-xs border border-border-light hover:border-accent-orange transition-colors duration-200 shadow-sm">
                        {skill.logo ? (
                          <img src={skill.logo} alt="" className="w-3.5 h-3.5 object-contain shrink-0" />
                        ) : (
                          skill.icon
                        )}
                        <span>{skill.name}</span>
                      </Tag>
                    ))}
                  </div>
                </Card>
              </FadeIn>

              {/* Backend */}
              <FadeIn delay={0.2}>
                <Card className="flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-accent-orange mb-6">
                    <Server size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary-light mb-6">Backend</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {backendSkills.map((skill) => (
                      <Tag key={skill.name} className="flex items-center gap-1.5 py-1 px-2.5 bg-bg-body text-xs border border-border-light hover:border-accent-orange transition-colors duration-200 shadow-sm">
                        {skill.logo ? (
                          <img src={skill.logo} alt="" className="w-3.5 h-3.5 object-contain shrink-0" />
                        ) : (
                          skill.icon
                        )}
                        <span>{skill.name}</span>
                      </Tag>
                    ))}
                  </div>
                </Card>
              </FadeIn>

              {/* Databases, Cloud & Embedded */}
              <FadeIn delay={0.3}>
                <Card className="flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-6">
                    <Database size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary-light mb-6">Databases, Cloud & Embedded</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {databasesEmbeddedSkills.map((skill) => (
                      <Tag key={skill.name} className="flex items-center gap-1.5 py-1 px-2.5 bg-bg-body text-xs border border-border-light hover:border-accent-orange transition-colors duration-200 shadow-sm">
                        {skill.logo ? (
                          <img src={skill.logo} alt="" className="w-3.5 h-3.5 object-contain shrink-0" />
                        ) : (
                          skill.icon
                        )}
                        <span>{skill.name}</span>
                      </Tag>
                    ))}
                  </div>
                </Card>
              </FadeIn>

            </div>
          </div>
        </section>
      </main>
      <FooterCTA />
    </>
  )
}
