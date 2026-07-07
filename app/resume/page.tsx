import HeroSection from '@/components/sections/HeroSection'
import FooterCTA from '@/components/sections/FooterCTA'
import Eyebrow from '@/components/ui/Eyebrow'
import FadeIn from '@/components/ui/FadeIn'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'
import Button from '@/components/ui/Button'
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  Wrench,
  Database,
  Cpu,
  ExternalLink,
  Layers
} from 'lucide-react'

export const metadata = {
  title: 'Resume | Suyash Ranjan Sinha',
  description: 'Full Stack Java Developer skilled in Java, Spring Boot, databases, and modern web technologies. Passionate about AI integration, building scalable applications, and continuously learning emerging technologies to solve real-world problems.',
}

export default function ResumePage() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="w-4 h-4 text-accent-orange" />,
      skills: [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
      ]
    },
    {
      title: 'Web Development',
      icon: <Wrench className="w-4 h-4 text-cyan-600" />,
      skills: [
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
      ]
    },
    {
      title: 'Frameworks & Tools',
      icon: <Cpu className="w-4 h-4 text-purple-600" />,
      skills: [
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Arduino IDE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
      ]
    },
    {
      title: 'Databases & Embedded',
      icon: <Database className="w-4 h-4 text-blue-500" />,
      skills: [
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
        { name: 'Sensors Integration', logo: '' }
      ]
    }
  ]

  const projects = [
    {
      title: 'Enterprise KPI & Goal Management Portal',
      subtitle: 'Atomberg 48hr Hackathon',
      date: '05/2026',
      tech: 'React.js, Spring Boot, MySQL, Tailwind CSS & JWT Authentication',
      highlights: [
        'Built a full-stack enterprise KPI management platform supporting Employee, Manager, and Admin workflows.',
        'Developed secure JWT-based authentication and role-based authorization using Spring Security.',
        'Implemented quarterly goal tracking, manager approval/rework workflows, governance analytics, and KPI dashboards.',
        'Designed responsive UI with React, Tailwind CSS, Framer Motion, and Recharts.',
        'Integrated REST APIs with MySQL database and deployed frontend/backend using Vercel and Railway/Render.'
      ]
    },
    {
      title: 'Smart Health Monitoring System',
      subtitle: 'IoT-Based Real-Time Health Monitoring',
      date: '03/2026 – 05/2026',
      tech: 'ESP32, Arduino IDE, Firebase, JavaScript, HTML, CSS, IoT, Sensors',
      highlights: [
        'Developed an IoT-based health monitoring system using ESP32 and MAX30102 to track heart rate and SpO₂ in real time.',
        'Integrated Firebase Realtime Database for live data storage and synchronization.',
        'Built a web dashboard using HTML, CSS, JavaScript to visualize real-time and historical data.',
        'Implemented efficient data transmission and basic alert system for abnormal readings.'
      ]
    },
    {
      title: 'Vehicle-Insight-Orchestrator',
      subtitle: 'EY Techathon 6.0 | Agentic AI — Predictive Maintenance System',
      date: '10/2025 – 01/2026',
      tech: 'Agentic AI, Behavior Analytics, RESTful APIs, Real-time Ingestion Pipeline',
      highlights: [
        'Designed and implemented a real-time data ingestion pipeline for vehicle and user events.',
        'Built behavior analytics and basic UEBA logic to detect anomalies and unusual patterns.',
        'Developed RESTful APIs for secure data exchange between frontend and backend.',
        'Created interactive dashboards for live insights, alerts, and activity visualization.',
        'Integrated authentication and session-based user flow for seamless customer engagement.'
      ]
    }
  ]

  const miniProjects = [
    { name: 'Netflix UI Clone', description: 'Built using HTML, CSS, JavaScript' },
    { name: 'Voice Controlled Home Automation', description: 'Embedded automation with voice controller & Obstacle Detection Radar' },
    { name: 'Smart India Hackathon Project', description: 'Smart-Health-Surveillance prototype for SIH 2025' },
    { name: 'Currency Converter', description: 'Real-time API currency converter system' },
    { name: 'Brick Breaker Game', description: 'Classic arcade game implemented in Java Swing' }
  ]

  const participations = [
    {
      role: 'Round 1 Qualifier',
      organization: 'EY Techathon 6.0 (EY)',
      date: '10/2025 – 01/2026',
      description: 'Cleared Round 1 of EY Techathon 6.0, a National-level hackathon focused on advanced technical solutions.'
    },
    {
      role: 'National-level Participant',
      organization: 'Smart India Hackathon 2025',
      date: '09/2025 – 10/2025',
      description: 'Participated in the national-level event developing solutions for real-world smart health problems.'
    }
  ]

  return (
    <>
      <main className="flex-grow pt-24">

        <HeroSection
          eyebrow="RESUME"
          heading={<>Professional Resume & Credentials</>}
          body={
            <span className="block mt-2">
              Full Stack Java Developer skilled in Java, Spring Boot, databases, and modern web technologies. Passionate about AI integration, building scalable applications, and continuously learning emerging technologies to solve real-world problems.
            </span>
          }
        >
          <div className="flex flex-wrap gap-4 mt-6">
            <Button
              href="/Suyash_Sinha_Resume.pdf"
              download="/public/Suyash_Sinha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download PDF
            </Button>
            <Button
              href="mailto:suyash.sinha.104@gmail.com"
              variant="ghost-dark"
              className="flex items-center gap-2 !text-text-primary-dark !border-border-dark hover:!bg-white/10"
            >
              <Mail className="w-4 h-4" /> Contact Email
            </Button>
          </div>
        </HeroSection>

        <section className="py-20 px-6 bg-bg-card border-t border-border-light transition-colors duration-300">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-8 space-y-12">

              <FadeIn>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-border-light">
                    <Briefcase className="w-5 h-5 text-accent-orange" />
                    <h2 className="text-xl font-bold text-text-primary-light uppercase tracking-wider">Professional Profile</h2>
                  </div>
                  <p className="text-text-body leading-relaxed text-[15px] pt-2">
                    Final year B.Tech ECE student with a strong foundation in electronics and programming, developing expertise in frontend, backend, and AI/ML. Interested in full-stack development and data-driven applications to pursue a career in full-stack development and data-driven applications and to solve real-world problems. Skilled in Java, Spring Boot, databases, and modern web technologies.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-border-light">
                    <Code2 className="w-5 h-5 text-accent-orange" />
                    <h2 className="text-xl font-bold text-text-primary-light uppercase tracking-wider">Key Projects</h2>
                  </div>

                  <div className="space-y-8 pt-2">
                    {projects.map((project, idx) => (
                      <div key={idx} className="space-y-3 group">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                          <h3 className="text-lg font-bold text-text-primary-light group-hover:text-accent-orange transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-xs text-text-muted font-medium shrink-0 bg-bg-body px-2 py-0.5 rounded border border-border-light">
                            {project.date}
                          </span>
                        </div>
                        <div className="text-sm font-semibold text-accent-orange/80">
                          {project.subtitle}
                        </div>
                        <div className="text-xs font-mono text-text-muted">
                          Tech: {project.tech}
                        </div>
                        <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-text-body">
                          {project.highlights.map((highlight, hIdx) => (
                            <li key={hIdx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-border-light">
                    <Layers className="w-5 h-5 text-accent-orange" />
                    <h2 className="text-xl font-bold text-text-primary-light uppercase tracking-wider">Additional Projects</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {miniProjects.map((mini, idx) => (
                      <Card key={idx} className="p-5 flex flex-col justify-between hover:border-accent-orange transition-colors">
                        <h4 className="font-bold text-text-primary-light text-sm mb-2">{mini.name}</h4>
                        <p className="text-xs text-text-muted leading-relaxed">{mini.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </FadeIn>

            </div>

            <div className="lg:col-span-4 space-y-12">

              <FadeIn delay={0.2}>
                <div className="bg-bg-body border border-border-light rounded-2xl p-6 space-y-4 shadow-sm">
                  <h3 className="font-bold text-text-primary-light text-sm pb-3 border-b border-border-light uppercase tracking-wider">
                    Contact Details
                  </h3>
                  <div className="space-y-3.5 text-xs text-text-body">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-text-muted shrink-0" />
                      <a href="mailto:suyash.sinha.104@gmail.com" className="hover:text-accent-orange transition-colors break-all">
                        suyash.sinha.104@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-text-muted shrink-0" />
                      <a href="tel:+917070747693" className="hover:text-accent-orange transition-colors">
                        +91-7070747693
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-text-muted shrink-0" />
                      <span>Patna, India</span>
                    </div>
                    <div className="flex items-center gap-3 pt-2 border-t border-border-light">
                      <Briefcase className="w-4 h-4 text-text-muted shrink-0" />
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors flex items-center gap-1.5">
                        LinkedIn <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Code2 className="w-4 h-4 text-text-muted shrink-0" />
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors flex items-center gap-1.5">
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-border-light">
                    <GraduationCap className="w-5 h-5 text-accent-orange" />
                    <h2 className="text-md font-bold text-text-primary-light uppercase tracking-wider">Education</h2>
                  </div>
                  <div className="space-y-2 pt-2">
                    <h4 className="font-bold text-text-primary-light text-sm">
                      Bachelors of Technology
                    </h4>
                    <p className="text-xs text-text-muted">
                      Birla Institute of Technology, Mesra
                    </p>
                    <p className="text-xs text-text-body font-medium">
                      ECE | 09/2023 – Present
                    </p>
                    <div className="mt-2 text-xs flex gap-3 text-text-muted font-mono bg-bg-body p-2 rounded border border-border-light">
                      <div>SGPA: <span className="text-text-primary-light font-bold">8.48</span></div>
                      <div className="w-px bg-border-light" />
                      <div>CGPA: <span className="text-text-primary-light font-bold">7.8</span></div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-border-light">
                    <Wrench className="w-5 h-5 text-accent-orange" />
                    <h2 className="text-md font-bold text-text-primary-light uppercase tracking-wider">Skills Directory</h2>
                  </div>

                  <div className="space-y-5 pt-2">
                    {skillCategories.map((cat, idx) => (
                      <div key={idx} className="space-y-2.5">
                        <h4 className="text-xs font-bold text-text-primary-light uppercase tracking-wider flex items-center gap-2">
                          {cat.icon}
                          <span>{cat.title}</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((skill, sIdx) => (
                            <Tag
                              key={sIdx}
                              className="flex items-center gap-1.5 py-1 px-2.5 bg-bg-body text-xs border border-border-light hover:border-accent-orange transition-colors duration-200 shadow-sm"
                            >
                              {skill.logo && (
                                <img src={skill.logo} alt="" className="w-3.5 h-3.5 object-contain" />
                              )}
                              <span>{skill.name}</span>
                            </Tag>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-border-light">
                    <Award className="w-5 h-5 text-accent-orange" />
                    <h2 className="text-md font-bold text-text-primary-light uppercase tracking-wider">Participation</h2>
                  </div>

                  <div className="space-y-4 pt-2">
                    {participations.map((part, idx) => (
                      <div key={idx} className="space-y-1 text-xs">
                        <div className="flex justify-between items-baseline gap-1">
                          <h4 className="font-bold text-text-primary-light">{part.role}</h4>
                          <span className="text-[10px] text-text-muted shrink-0">{part.date}</span>
                        </div>
                        <div className="text-accent-orange font-medium">{part.organization}</div>
                        <p className="text-text-muted leading-relaxed mt-1">{part.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

            </div>

          </div>
        </section>
      </main>
      <FooterCTA />
    </>
  )
}
