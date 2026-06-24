'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-border-light/60 bg-transparent shrink-0" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 flex items-center justify-center rounded-full border border-border-light dark:border-border-dark bg-bg-card hover:bg-bg-body dark:bg-bg-card-dark dark:hover:bg-bg-card transition-colors duration-200 focus:outline-none cursor-pointer shrink-0 select-none overflow-hidden group shadow-sm"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {theme === 'light' ? (
            <Sun size={17} className="text-accent-orange group-hover:scale-110 transition-transform" />
          ) : (
            <Moon size={17} className="text-amber-200 group-hover:scale-110 transition-transform" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}
