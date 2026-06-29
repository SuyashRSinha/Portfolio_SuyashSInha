# Portfolio

A modern, highly aesthetic, and fully responsive personal portfolio and blog built for full-stack developers and AI engineers.

## 🚀 Features

- **Next.js 16 (App Router)** - Modern React architecture for optimal performance and SEO.
- **Tailwind CSS v4** - Custom utility classes and a beautiful curated design system with carefully selected color palettes.
- **Framer Motion Animations** - Smooth page transitions, fade-ins, and engaging micro-interactions.
- **MDX Blog** - Write blog posts using Markdown and React components (`next-mdx-remote` & `gray-matter`).
- **Responsive Layout** - Beautiful on desktop, tablet, and mobile with a custom flex/grid system.
- **Custom UI Components** - Reusable buttons, cards, tags, and a custom Javascript-based scroll-to-top feature.
- **Typography** - Professional and elegant fonts using `next/font/google` (Inter and EB Garamond).

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Content:** MDX

## 📂 Project Structure

- `app/` - Application routes (Home, About, Blog, Contact, Projects, Services).
- `components/` - Reusable React components.
  - `layout/` - Navbar, Footer, etc.
  - `sections/` - Major page sections (Hero, Features, etc.).
  - `ui/` - Granular UI elements (Buttons, Cards, ScrollToTop).
- `content/blog/` - MDX files for blog posts.
- `data/` - Static data files (projects, services, blog metadata).

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Customization

- **Styling:** Edit `app/globals.css` to update the global design system variables (colors, fonts).
- **Content:** Modify the `.ts` files inside the `data/` directory to update your projects, services, and profile info. Add new MDX files to `content/blog/` to publish new posts.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
