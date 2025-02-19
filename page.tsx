"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import About from "./components/About"
import WhatIDo from "./components/WhatIDo"
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import LoadingScreen from "./components/LoadingScreen"
import Counter from "./components/Counter"

export default function MainPage() {
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 transform-origin-0 z-50"
        style={{ scaleX }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      <Home />
      <About />
      <WhatIDo />
      <Portfolio />
      <Resume />
      <Blog />
      <Contact />

      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={8250} title="Hours of Work" />
            <Counter end={315} title="Projects Done" />
            <Counter end={250} title="Happy Clients" />
            <Counter end={32} title="Awards Won" />
          </div>
        </div>
      </section>
    </div>
  )
}

