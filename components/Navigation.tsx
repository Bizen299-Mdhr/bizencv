"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useDisableInspect } from "../hooks/useDisableInspect"

const Navigation = () => {
  useDisableInspect()
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const sections = ["home", "about", "what-i-do", "my-works", "resume", "blog", "contact"]

    const handleScroll = () => {
      const pageYOffset = window.pageYOffset
      let newActiveSection = sections[0]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop - 100 // Adjust this value based on your header height
          if (pageYOffset >= offsetTop) {
            newActiveSection = section
          } else {
            break
          }
        }
      }

      setActiveSection(newActiveSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial active section

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -80 // Adjust this value based on your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({
        top: y,
        behavior: "smooth",
      })

      // Add flowing animation to the target section
      element.classList.add("section-focus")
      setTimeout(() => element.classList.remove("section-focus"), 1000)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About me" },
    { id: "what-i-do", label: "What I Do" },
    { id: "my-works", label: "My Works" },
    { id: "resume", label: "My resume" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact Me" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <Link rel="canonical" href="/" className="text-2xl font-bold tracking-wider text-white group whitespace-nowrap">
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                className="text-red-900 inline-block"
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.2, 0.9, 1.1, 1],
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut",
                  },
                }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.7}
              >
                B
              </motion.span>
              IZEN
            </motion.span>
            <motion.div
              className="h-0.5 bg-red-900 w-0 group-hover:w-full transition-all duration-300"
              initial={false}
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-red-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.li key={item.id}>
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-2 py-1 transition-colors ${
                    activeSection === item.id ? "text-red-900" : "text-gray-300 hover:text-red-900"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-900"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                        mass: 1,
                      }}
                    />
                  )}
                </motion.button>
              </motion.li>
            ))}
          </ul>
          </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <motion.li key={item.id}>
                  <motion.button
                    onClick={() => {
                      scrollToSection(item.id)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`relative px-2 py-1 transition-colors ${
                      activeSection === item.id ? "text-red-900" : "text-gray-300 hover:text-red-900"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-900"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                          mass: 1,
                        }}
                      />
                    )}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation

