'use client'

import { useState } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import FooterCTA from '@/components/sections/FooterCTA'
import FadeIn from '@/components/ui/FadeIn'
import { ArrowUpRight, Trophy } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Enterprise KPI & Goal Management Portal',
    category: 'full-stack',
    role: 'Full Stack Java Developer',
    badge: 'Atomberg Hackathon',
    thumbnail: '/projects/kpi.png',
    description:
      'Built a full-stack enterprise KPI management platform supporting Employee, Manager and Admin workflows.',
    techStack: ['React', 'Spring Boot', 'MySQL', 'JWT'],
    link: 'https://goalportal-frontend.vercel.app/manager-dashboard'
  },
  {
    id: 2,
    title: 'Vehicle Insight Orchestrator',
    category: 'ai',
    role: 'AI & Backend Developer',
    badge: 'EY Techathon 6.0',
    thumbnail: '/projects/ai.png',
    description:
      'Agentic AI predictive maintenance platform with analytics and dashboards.',
    techStack: ['Spring Boot', 'MySQL', 'REST API'],
    link: 'https://github.com/SuyashRSinha/vehicle-insight-orchestrator'
  },
  {
    id: 3,
    title: 'Smart Health Monitoring System',
    category: 'iot',
    role: 'IoT Developer',
    badge: 'Featured',
    thumbnail: '/projects/health.png',
    description:
      'ESP32-based healthcare monitoring system using Firebase.',
    techStack: ['ESP32', 'Firebase', 'Arduino'],
    link: 'https://health-system-one.vercel.app/login.html'
  },
  {
    id: 10,
    title: 'Netflix UI Clone',
    category: 'mini-project',
    role: 'Frontend Developer',
    badge: 'Mini Project',
    thumbnail: '/projects/netflix.jpg',
    description:
      'A responsive Netflix-inspired landing page built using HTML, CSS, and JavaScript focusing on modern UI design and responsive layouts.',
    techStack: [
      'HTML',
      'CSS',
      'JavaScript'
    ],
    link: 'https://github.com/SuyashRSinha/NETFLIX-UI-Clone'
  },

  {
    id: 11,
    title: 'Voice Controlled Home Automation System',
    category: 'iot',
    role: 'Embedded Systems Developer',
    badge: 'IoT Project',
    thumbnail: '/projects/voice.png',
    description:
      'Smart home automation system that allows users to control electrical appliances through voice commands using Arduino and sensor integration.',
    techStack: [
      'Arduino',
      'IoT',
      'Sensors',
      'Embedded Systems'
    ],
    link: '#'
  },

  {
    id: 12,
    title: 'Obstacle Detection Radar System',
    category: 'iot',
    role: 'Embedded Systems Developer',
    badge: 'IoT Project',
    thumbnail: '/projects/radar.png',
    description:
      'Radar-style obstacle detection system using ultrasonic sensors and servo motors for real-time object tracking and visualization.',
    techStack: [
      'Arduino',
      'Ultrasonic Sensor',
      'Servo Motor',
      'Embedded Systems'
    ],
    link: '#'
  },

  {
    id: 13,
    title: 'Smart Health Surveillance',
    category: 'hackathon',
    role: 'Team Member',
    badge: 'SIH 2025',
    thumbnail: '/projects/health.png',
    description:
      'Healthcare surveillance and monitoring solution developed for Smart India Hackathon 2025 to provide intelligent health tracking and analytics.',
    techStack: [
      'IoT',
      'Healthcare',
      'Analytics',
      'Sensors'
    ],
    link: '#'
  },

  {
    id: 14,
    title: 'Currency Converter Website',
    category: 'mini-project',
    role: 'Frontend Developer',
    badge: 'API Integration',
    thumbnail: '/projects/converter.png',
    description:
      'Currency conversion web application integrated with live exchange rate APIs for real-time conversion between currencies.',
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'REST API'
    ],
    link: 'https://github.com/SuyashRSinha/Currency-Converter'
  },

  {
    id: 15,
    title: 'Brick Breaker Game',
    category: 'mini-project',
    role: 'Java Developer',
    badge: 'Java Swing',
    thumbnail: '/projects/brick.png',
    description:
      'Classic Brick Breaker arcade game built using Java Swing demonstrating OOP concepts, collision detection, and event handling.',
    techStack: [
      'Java',
      'Swing',
      'OOP'
    ],
    link: 'https://github.com/SuyashRSinha/Bricks-Breaker-Game'
  }
]

const ALL_CATEGORIES = [
  'All',
  'full-stack',
  'ai',
  'iot',
  'mini-project'
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
        project => project.category === activeCategory
      )

  return (
    <>
      <main className="flex-grow pt-24">
        <HeroSection
          eyebrow="PROJECTS"
          heading="Building Full-Stack, AI & IoT Solutions."
          body="A collection of hackathon projects, intelligent applications, embedded systems and full-stack products built throughout my engineering journey."
          showDeliveryMap={true}
        />

        <section className="bg-bg-body py-24 px-6">
          <div className="max-w-[1200px] mx-auto">

            <FadeIn>
              <div className="mb-16 flex flex-wrap gap-3">
                {ALL_CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border transform hover:-translate-y-1 ${activeCategory === category
                      ? 'bg-accent-orange text-white border-accent-orange shadow-lg'
                      : 'bg-bg-card text-text-primary-light border-border-light hover:bg-accent-orange hover:text-white hover:border-accent-orange hover:shadow-lg'
                      }`}
                  >
                    {category === 'All'
                      ? 'All Projects'
                      : category === 'ai'
                        ? 'AI'
                        : category === 'iot'
                          ? 'IoT'
                          : category.charAt(0).toUpperCase() +
                          category.slice(1)}
                  </button>
                ))}
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <FadeIn
                  key={project.id}
                  delay={0.1 * (idx % 3)}
                >
                  <article className="bg-bg-card
    rounded-2xl
    border
    border-border-light
    overflow-hidden
    h-full
    flex
    flex-col
    transition-all
    duration-300
    hover:border-accent-orange
    hover:bg-gradient-to-br
    hover:from-orange-50
    dark:hover:from-accent-orange/10
    hover:to-bg-card
    dark:hover:to-bg-card
    hover:-translate-y-1
    hover:shadow-xl
    group">

                    <div className="h-52 overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-grow">

                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-tag-bg text-text-body px-3 py-1 rounded-full text-xs transition-colors
    duration-300
    group-hover:bg-orange-100
    dark:group-hover:bg-accent-orange/20">
                          {project.category}
                        </span>

                        {project.badge && (
                          <span className="bg-orange-50 dark:bg-accent-orange/10 text-orange-600 dark:text-accent-orange px-3 py-1 rounded-full text-xs flex items-center gap-1">
                            <Trophy size={12} />
                            {project.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-accent-orange text-text-primary-light">
                        {project.title}
                      </h3>

                      <p className="text-sm mb-4 flex-grow text-text-body">
                        {project.description}
                      </p>

                      <p className="text-sm mb-4 text-text-body">
                        <strong>Role:</strong> {project.role}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-tag-bg text-text-body px-2 py-1 rounded text-xs transition-all
    duration-300
    group-hover:bg-orange-100
    dark:group-hover:bg-accent-orange/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border-light mt-auto">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-orange-500 font-semibold"
                        >
                          View Project
                          <ArrowUpRight
                            size={16}
                            className="ml-1"
                          />
                        </a>
                      </div>

                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>
      </main>

      <FooterCTA />
    </>
  )
}