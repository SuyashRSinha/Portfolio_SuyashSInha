import HeroSection from "@/components/sections/HeroSection";
import FooterCTA from "@/components/sections/FooterCTA";
import DeliveryMap from "@/components/sections/DeliveryMap";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowUpRight, Terminal, ShoppingCart, Bot, Cpu } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "Suyash Ranjan Sinha | ECE Student & Full-Stack Developer",
  description:
    "Pre-Final year B.Tech ECE student with a strong foundation in electronics and programming, developing expertise in frontend, backend, and AI/ML.",
};

const techStack = [
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Arduino IDE", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  { name: "ESP32", isCustomIcon: true, key: "esp32" },
  { name: "Vercel", isCustomIcon: true, key: "vercel" },
];

const renderTechIcon = (tech: typeof techStack[0]) => {
  if (tech.isCustomIcon) {
    if (tech.key === "esp32") {
      return <Cpu className="w-4 h-4 text-accent-orange shrink-0" />;
    }
    if (tech.key === "vercel") {
      return (
        <svg className="w-3.5 h-3.5 fill-current text-text-primary-light shrink-0" viewBox="0 0 75 65">
          <polygon points="37.5,0 75,65 0,65" />
        </svg>
      );
    }
  }
  return <img src={tech.logo} alt={tech.name} className="w-4 h-4 object-contain shrink-0" />;
};

export default function HomePage() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      <main className="flex-grow pt-24">
        <section className="bg-bg-dark pt-20 pb-20 px-6 overflow-hidden relative">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-6 h-px bg-accent-orange"></span>
                  <span className="text-[11px] font-semibold tracking-[0.08em] text-text-muted uppercase">
                    PATNA, INDIA / OPEN TO NEW PROJECTS
                  </span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-[64px] text-text-primary-dark leading-[1.1] tracking-tight mb-8">
                  Hi, I&apos;m Suyash.
                  <br />
                  I build systems that
                  <br />
                  ship.
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
                  I work across the full development stack, leveraging Java, Spring Boot, modern databases, and frontend technologies to build scalable applications. I also integrate AI solutions into real-world products to automate workflows and deliver intelligent user experiences.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <Button href="/contact">Let&apos;s talk</Button>
                  <Button variant="ghost-dark" href="/projects">
                    View my work
                  </Button>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 flex lg:justify-end">
              <FadeIn delay={0.5} direction="left">
                <DeliveryMap />
              </FadeIn>
            </div>
          </div>

          <div
            className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          ></div>
        </section>

        <section className="py-24 px-6 border-b border-border-light bg-bg-body">
          <div className="max-w-[1100px] mx-auto">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-8 items-end mb-12">
                <div className="space-y-4">
                  <Eyebrow>WORKING SYSTEM</Eyebrow>
                  <h2 className="font-sans text-3xl font-bold text-text-primary-light">
                    The toolbox I reach for,
                    <br />
                    chosen because it ships.
                  </h2>
                </div>
                <div className="text-text-muted text-sm md:text-right max-w-sm ml-auto">
                  A practical stack for product interfaces, business logic,
                  data, AI integrations, and production delivery.
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-bg-body before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-bg-body after:to-transparent">
                <div className="flex gap-4 w-max animate-marquee py-2">
                  {/* First iteration */}
                  {techStack.map((tech, idx) => (
                    <span
                      key={`${tech.name}-${idx}`}
                      className="inline-flex items-center gap-2.5 bg-white border border-border-light text-text-primary-light text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:border-accent-orange transition-colors cursor-default"
                    >
                      {renderTechIcon(tech)}
                      <span>{tech.name}</span>
                    </span>
                  ))}
                  {/* Second iteration for infinite loop */}
                  {techStack.map((tech, idx) => (
                    <span
                      key={`${tech.name}-dup-${idx}`}
                      className="inline-flex items-center gap-2.5 bg-white border border-border-light text-text-primary-light text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:border-accent-orange transition-colors cursor-default"
                    >
                      {renderTechIcon(tech)}
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <FadeIn>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="space-y-4">
                  <Eyebrow>SELECTED WORK</Eyebrow>
                  <h2 className="font-serif text-4xl md:text-5xl font-medium text-text-primary-light">
                    Real projects, real roles.
                  </h2>
                </div>
                <Button
                  href="/projects"
                  variant="ghost-dark"
                  className="!text-text-primary-light !border-border-dark hover:!bg-gray-50 w-fit"
                >
                  View all 13 projects
                </Button>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, idx) => (
                <FadeIn key={idx} delay={0.1 * idx}>
                  <article className="h-full bg-bg-body rounded-2xl border border-border-light overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
                    <div className="h-64 bg-gray-200 w-full overflow-hidden relative">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex gap-2 mb-4">
                        <span className="bg-white text-text-body text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border border-border-light">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary-light mb-3">
                        {project.title}
                      </h3>
                      <p className="text-text-body leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-text-muted font-medium px-2 py-1 bg-white rounded border border-border-light"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-orange text-sm font-semibold hover:underline inline-flex items-center group/link"
                        >
                          View live project{" "}
                          <ArrowUpRight
                            size={16}
                            className="ml-1 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                          />
                        </a>
                      ) : (
                        <span className="text-gray-400 text-sm font-semibold inline-flex items-center cursor-not-allowed">
                          Internal Project
                        </span>
                      )}
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-bg-body border-y border-border-light">
          <div className="max-w-[1100px] mx-auto">
            <FadeIn>
              <Eyebrow className="mb-12 justify-center">WHAT I DO</Eyebrow>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              <FadeIn delay={0.1}>
                <Card className="text-center flex flex-col items-center p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-accent-orange flex items-center justify-center mb-6">
                    <ShoppingCart size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-4 text-text-primary-light">
                    Full-Stack Web
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6 flex-grow">
                    Custom web applications and platforms built using modern technologies like React, Spring Boot, Node.js, and robust database backends.
                  </p>
                  <Link
                    href="/services"
                    className="text-accent-orange text-sm font-semibold hover:underline mt-auto"
                  >
                    Learn more →
                  </Link>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Card className="text-center flex flex-col items-center p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
                    <Bot size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-4 text-text-primary-light">
                    AI & Data Apps
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6 flex-grow">
                    Embedding behavior analytics, predictive maintenance modeling, and intelligent alert logic to design data-driven agentic applications.
                  </p>
                  <Link
                    href="/services"
                    className="text-accent-orange text-sm font-semibold hover:underline mt-auto"
                  >
                    Learn more →
                  </Link>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Card className="text-center flex flex-col items-center p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                    <Terminal size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-4 text-text-primary-light">
                    IoT & Embedded
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6 flex-grow">
                    Hardware-software integration using microcontrollers like ESP32, Arduino IDE, Firebase real-time data sync, and sensor arrays.
                  </p>
                  <Link
                    href="/services"
                    className="text-accent-orange text-sm font-semibold hover:underline mt-auto"
                  >
                    Learn more →
                  </Link>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white border-t border-border-light">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Eyebrow className="mb-4">RESUME & CREDENTIALS</Eyebrow>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-text-primary-light mb-6">
                  Professional experience & skills.
                </h2>
                <p className="text-sm text-text-body leading-relaxed mb-8">
                  View my full background, education at BIT Mesra, academic projects, technical skill set, and hackathon participation. You can read the online credentials or download the offline PDF format.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/resume">View Online Resume</Button>
                  <Button
                    href="/Suyash_Ranjan_Sinha_Resume.pdf"
                    download="Suyash_Ranjan_Sinha_Resume.pdf"
                    variant="ghost-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!text-text-primary-light !border-border-dark hover:!bg-gray-50"
                  >
                    Download PDF
                  </Button>
                </div>
              </div>
              <div className="bg-bg-body border border-border-light rounded-2xl p-8 space-y-6 shadow-sm">
                <div>
                  <h3 className="font-bold text-text-primary-light text-base mb-1">Birla Institute of Technology, Mesra</h3>
                  <p className="text-xs text-text-muted">B.Tech in Electronics & Communication Engineering (2023 - Present)</p>
                </div>
                <div>
                  <h3 className="font-bold text-text-primary-light text-base mb-1">Atomberg Hackathon & EY Techathon</h3>
                  <p className="text-xs text-text-muted">Award-winning solutions in predictive maintenance and enterprise portals.</p>
                </div>
                <div>
                  <h3 className="font-bold text-text-primary-light text-base mb-1">Core Tech Stack</h3>
                  <p className="text-xs text-text-muted">Java, Spring Boot, MySQL, MongoDB, Firebase, Docker, React, and ESP32.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterCTA />
    </>
  );
}
