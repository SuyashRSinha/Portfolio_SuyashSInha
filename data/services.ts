export interface ServiceItem {
  title: string
  description: string
}

export interface ServiceCategory {
  title: string
  items: ServiceItem[]
}

export const services: ServiceCategory[] = [
  {
    title: 'Full-Stack Development',
    items: [
      {
        title: 'Custom Web Applications',
        description: 'End-to-end development using Next.js, React, Node.js, and modern databases. I build scalable, fast, and secure web applications tailored to your specific business needs.',
      },
      {
        title: 'Marketplaces & E-commerce',
        description: 'Robust marketplace platforms and custom e-commerce solutions with complex payment flows, vendor dashboards, and intelligent search capabilities.',
      },
      {
        title: 'Business Systems & Dashboards',
        description: 'Internal tools, admin panels, and data dashboards that streamline your operations and provide actionable insights into your business data.',
      },
    ],
  },
  {
    title: 'AI Integration & Automation',
    items: [
      {
        title: 'LLM & AI Features',
        description: 'Integrating OpenAI, Claude, and other LLMs into your existing products to add intelligent features like chatbots, content generation, or automated analysis.',
      },
      {
        title: 'Workflow Automation',
        description: 'Connecting your existing tools through APIs and webhooks to automate repetitive tasks, sync data, and save your team hundreds of hours.',
      },
      {
        title: 'RAG Systems',
        description: 'Building Retrieval-Augmented Generation systems that allow AI to accurately answer questions based on your proprietary documents and data.',
      },
    ],
  },
  {
    title: 'Architecture & Consulting',
    items: [
      {
        title: 'System Architecture Design',
        description: 'Designing scalable, maintainable, and cost-effective system architectures before you write a single line of code.',
      },
      {
        title: 'Technical Consulting',
        description: 'Reviewing your existing codebase, advising on tech stack choices, or helping you plan your product roadmap and technical strategy.',
      },
      {
        title: 'Performance Optimization',
        description: 'Auditing and optimizing your application for speed, Core Web Vitals, and SEO to improve user experience and conversion rates.',
      },
    ],
  },
]
