export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  thumbnail: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-realtime-video-platform',
    title: 'How I Built a Real-Time Video Platform with mediasoup',
    excerpt: 'A deep dive into building SupportCast: WebRTC architecture decisions, mediasoup SFU setup, scaling challenges, and lessons from shipping a production video platform...',
    category: 'CASE STUDY',
    date: '10 Jun 2026',
    readTime: '7 min read',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7dJvd3t62hGmeO78n3lLtJZMYPUe88vZ5whPluIYJtvDqemOZpbHV2JRlNftIyNH1tdkXyXJcgZe0XYzAo_Vrp3gjERyIZy4uVddJuoyrQpyi-jPRt6bt0JLc6qYghAr_sBbrNU_Y-No0t2goYTbp-dovHL0uzcR_YUihSQ5bvX-spa57rD1Wshsp9cadv5J68hYFqn1ZZ_55ov5AYResowPRpphdHS4yNoFXfne4eK35M5jNFPR_9XMtrZDBqpLBdCxi48oDpwQ',
  },
  {
    slug: 'custom-web-app-cost-2026',
    title: 'How Much Does a Custom Web App Cost in 2026?',
    excerpt: 'Custom web app cost in 2026 explained: price bands from $500 landing pages to $10k marketplace MVPs, the real cost drivers, hidden...',
    category: 'GUIDE',
    date: '10 Jun 2026',
    readTime: '6 min read',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz8_ADHG0JdxjEmS2v-uKNUGNabZmoATnI7PR19GR6Cx4BYAOgibbMQzTzbVMY1mhx6fKVbUTUJcrZ5JwJf70h7zU811tFtzdakbAfyDrwaLL6Tu6uOkLRke6C3XNA3v6_eNUlZiZwRq7OQlQSqYA6Y6kjTFjRj6kDxE80gD3Dinem1GZ60CMqdvpx3zAy782CwkKsbvjNSOjLoCMyckdme3bMEObr_-uu9OaybBjEJTQFLhvmIa5EDfKjt1RD1wK63AyloWV45Ic',
  },
  {
    slug: 'nextjs-vs-wordpress-business',
    title: 'Next.js vs WordPress for Business Websites',
    excerpt: 'Next.js vs WordPress for business websites: when each one wins on cost, speed, SEO, maintenance and custom logic — plus a simple decision...',
    category: 'GUIDE',
    date: '15 Jun 2026',
    readTime: '8 min read',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAagYLKZuzpdsy5-Fpfojo1L3N8lnX10vM7Malnnm6cPIWvyhcjdfu4AbGTsnKMSzt6D2hUKajfkbPZvnjYYH3X7THNYYBLPAliYxZaoHisx2ZKXPsu1-PYHmfP2PYimApB795l9reD1DtJF-cwhgVEC9Gic87-6s2SVOdAAttAJgD5csQhI6eym1XpMy5jx0QMksKEANANisHAv5PlFdHzCmjOlftkrggs7TiTKD_WcRLXLdPfi9n0yKhTLHL81K0ltIvmaf8-1s',
  },
  {
    slug: 'ai-automation-small-business',
    title: 'AI Automation for Small Business: 7 Tasks You Can Automate',
    excerpt: 'AI automation for small business: 7 practical tasks to automate, how to pick the first one, what it costs to run, and keeping a human in the loop.',
    category: 'AI',
    date: '10 Jun 2026',
    readTime: '6 min read',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGg5r7QkDPRgVjpGqtW9gDG6BTDNbPWSQvMPNmk4bowFFfBT6ehrPzOUEY4ASjGe5M2huE9lSkiRYViLIq9rrQ5QF-uXAOq1xl9Y-K3nuZL9SnOifPOYRdxkXCIuS9JgkFaIYJIe0Ow-F2dL-CmDoRWd26ITICXDH-cwxFSaC4gZO1JVueU36j7AJ3Pu34foZoXxz_3ygktoSUByE_1z0wZPmxE-lruf_jP7A0UWvCvsNG4hoxZpMwLoqsqPjDNW2vj_RENmBU3MQ',
  },
  {
    slug: 'signs-business-needs-dashboard',
    title: '5 Signs Your Business Needs a Custom Dashboard',
    excerpt: 'Five clear signs your business has outgrown spreadsheets and needs a custom dashboard: slow sheets, duplicated data, errors, no access...',
    category: 'BUSINESS',
    date: '10 Jun 2026',
    readTime: '8 min read',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9bfOiWxXQrNr94tdhC6ZTKX4pgdXJllKMbcle1nEDZDV-h0W9LcH_Jw1WYqtnnUBppR57At7Fncvv8_YBNMoMuSXOuDqXR210ZY0y8EmsifiwN5zSGZOd51ebS4h0AxzjyL8sHVNhOziYqI36sZXKxsoHGOwn6PI9n5ymgYmd3egzNraQeFMqhBrpWxIGPkykKvDnSshmvb7xeA1-Yq0T6Ldde1Py9K2IAcb0M8pVRj1OUrbz6sF5K2IuFBfeIC-axyXaPjjfkVY',
  },
  {
    slug: 'choose-freelance-developer',
    title: 'How to Choose a Freelance Full-Stack Developer',
    excerpt: 'How to choose a freelance developer: check shipped production work, live links, rate clarity, code ownership, and milestone delivery — not ju...',
    category: 'GUIDE',
    date: '16 Jun 2026',
    readTime: '6 min read',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpd5qKl360IijRAOzWhrMgksVWEFsfTktEqb7V9djB1gjp5KuVIRhM6-gIcRyWX9N5CbfdQIUXn_No39ZLbMVsB60HdrlbSs6wtpxFFcESsc-XAlQtPCPNm9L3_AQuN3xBZFPhT2tAoqDKVBgP-gIAL4SQIhSU9-lA3bYq6xfqPNc5stPbIYJT2ckr3dlkpw5RWniUvYhpVdILSd8yXIylj4gzGjBh4Z3xbXtIvFXo6Rl3TqPpqEdYVDkPF6i1_dlZbihP3tL41ug',
  },
  {
    slug: 'react-vs-nextjs-founders',
    title: 'React vs Next.js: What Founders Need to Know',
    excerpt: 'React is a UI library; Next.js is a full framework on top of it. A founder-friendly guide to when each fits, and why I default to Next.js for MVPs.',
    category: 'ENGINEERING',
    date: '10 Jun 2026',
    readTime: '7 min read',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBME2gMtylxHYscz5nsfGCXe3j4qBvyyYCTnYMeMvlL9oiGTGhp7Tn6TAXBdkPhyDa3-J3ZYDOkuxuiLjHiWRCD3CZombOTpNRCzae9ufWSDx_ezvd_5LceFIDf0P-r_u5YuhUvEr49fbw0yjCzNW44c79XjfgJovzIZcj17yoaV6FTZbszOB05dean6wweiiY3JHlTQDlH--P1yJooWUnUQqybcm1b1lz23nM3APl_GR8Y2B5MFsnrJ5t3HRy9t7ePlHJtOQb5Fng',
  },
  {
    slug: 'ecommerce-nextjs',
    title: 'Building an E-Commerce Site with Next.js',
    excerpt: 'Custom Next.js e-commerce shines when business logic, vendors, search, and admin matter. When to go custom vs Shopify, plus a realistic build path.',
    category: 'E-COMMERCE',
    date: '10 Jun 2026',
    readTime: '6 min read',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeix5JvoyzfxjgxK4v689CnvFFDt7nL8uGawLK1Nqo-4bIAncIuSRFw6tsZ8eg6HdfpgiEg33FkFj6DpJLQFU_xvbu-kx1MaNFosFUpOL7TGH-oUklIwqYzqgMm1CS4NF1_Tgtclc6AwuFJjUtUASeUsoonenXqE1EaV6NmJcqiZXo-YVj7PLuvs5wkwJEfDmov1kg2m8spri3Yb298ZffmSOE9cqzmoq6uCmfwXE8mv0De0xcEghiGAlBTRoYVWr7ls2k0cp8nC4',
  },
  {
    slug: 'startup-mvp-nextjs',
    title: 'Why Your Startup MVP Should Use Next.js',
    excerpt: 'Next.js lets one stack handle frontend, API routes, SEO pages, and deployment — so a small team can scope, build, and ship a startup MVP fast.',
    category: 'STARTUPS',
    date: '12 Jun 2026',
    readTime: '8 min read',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXccKnZ8w1SAqSjn-umayXh3rX7HLIG_4XmEJBEwGDMnu-xBLNzsrToGe90UTduU57ybk9p2ekRYWZDAirNG72_x0vvOsIhLXZCxHGdd0DP2Vb67NIYU1nV0QpuHBkPPh1eNhbkDAWH2avHs827Ma-e-3rFtuuQ5kop2kI_LiMcNTttZ8S3Jz-SeQEb35BaRqHcZabtN02Orm1hNtQ6g94PxEJqv65y5GiCvnru2oO_h50QM7d4HX6HrFoS5ec4uEmKCERzjRiHDA',
  },
  {
    slug: 'add-ai-features-existing-app',
    title: 'How to Add AI Features to an Existing Web App',
    excerpt: 'How to add AI to an existing app without a rebuild: pick one task, wire Claude or OpenAI through the backend, add a safe UI, log outputs, control cost...',
    category: 'AI',
    date: '10 Jun 2026',
    readTime: '7 min read',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvPfgfqigLFQZvBSoZARhHPSRsRU3aFpW6GW1fIZmlh2jEFwByN9EsIszbxYibCfuoUH05dnscnEn1qih9gP-QqDf2XHChS4yT-tjXQ627pCZ0h0n2rA1zcoFaXCFV0ZJqNdgH6QfkC2aqS67PfoRMdTNcdqf-QLKKHWliJ2dOjh1vACLcULfFq4oEqLSf7xS0iqAvRuJYuSxSPicwk2oTurP2YIw1S40gDyTnDAD7d0YXnwFQjVp0GfVVWCUi_mZ1Ih7gA90qx2U',
  },
]
