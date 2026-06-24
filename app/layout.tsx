import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suyash Ranjan Sinha | ECE Student & Full-Stack Developer",
  description:
    "Full Stack Java Developer skilled in Java, Spring Boot, databases, and modern web technologies. Passionate about AI integration, building scalable applications, and continuously learning emerging technologies to solve real-world problems.",
  keywords: [
    "full-stack developer",
    "electronics and communication engineering",
    "ECE student",
    "BIT Mesra",
    "IoT developer",
    "embedded systems",
    "Java",
    "Spring Boot",
    "Next.js",
    "React",
    "Docker",
    "Suyash Ranjan Sinha",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ebGaramond.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-bg-body text-text-body transition-colors duration-300">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
