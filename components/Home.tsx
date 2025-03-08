"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import TypewriterComponent from "typewriter-effect"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { useDisableInspect } from '../hooks/useDisableInspect'

const Home = () => {
  useDisableInspect()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <motion.section
      ref={ref}
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen relative flex items-center pt-20 overflow-hidden"
      style={{
        backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1580089592698-WiXE8UjziejfFtlf1hROoX2hqT86Mm.jpeg")`,
        backgroundSize: "fit",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        filter: "grayscale(10%) contrast(100%) brightness(100%)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />

      {/* Social Media Links */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-6">
        <Link rel="canonical" href="https://www.facebook.com/bizen.m" className="text-gray-400 hover:text-red-900 transition-colors">
          <Facebook className="w-5 h-5" />
        </Link>
        <Link  rel="canonical" href="https://www.linkedin.com/in/bijendra-manandhar-0a430020/" className="text-gray-400 hover:text-red-900 transition-colors">
          <Linkedin className="w-5 h-5" />
        </Link>
        <div className="w-px h-20 bg-gray-600 mx-auto mt-4" />
        <span
          className="vertical-text text-gray-400 text-sm tracking-wider rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          Follow Me
        </span>
      </div>

      <motion.div className="container mx-auto px-8 relative z-10 ml-20" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.h2
            className="text-red-900 mb-4 text-lg futuristic-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I Am
            <TypewriterComponent
              options={{
                strings: ["Bizen","Manandhar"],
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 50,
                deleteSpeed: 50,
              }}
            />
          </motion.h2>
          <h1 className="text-3xl font-bold mb-12 text-white theme-glow">
            <TypewriterComponent
              options={{
                strings: [
                    "DEVELOPER",
                    "BACKEND ENGINEER",
                    "API ARCHITECT",
                    // "MICROSERVICES SPECIALIST",
                    "DATABASE EXPERT",
                    "SYSTEMS INTEGRATOR",
                    // "DEVOPS PRACTITIONER",
                    "SOFTWARE ARCHITECT",
                    "NODE.JS DEVELOPER",
                    "PYTHON DEVELOPER",
                    "SERVER-SIDE DEVELOPER",
                    "REST API DEVELOPER",
                    // "GRAPHQL DEVELOPER",
                    "SOFTWARE ENGINEER",
                    "TECH LEAD",
                    "SOLUTIONS ARCHITECT",
                    "SYSTEMS ENGINEER",
                    "INFRASTRUCTURE DEVELOPER"
                ],
                autoStart: true,
                loop: true,
                cursor: "",
                delay: 100,
              }}
            />
          </h1>

          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="border-l border-gray-600 pl-4">
              <h3 className="text-lg font-semibold mb-2 futuristic-text">City</h3>
              <p className="text-gray-400 text-sm">Kathmandu</p>
            </div>
            <div className="border-l border-gray-600 pl-4">
              <h3 className="text-lg font-semibold mb-2 futuristic-text">State</h3>
              <p className="text-gray-400 text-sm">Bagmati</p>
            </div>
            <div className="border-l border-gray-600 pl-4">
              <h3 className="text-lg font-semibold mb-2 futuristic-text">Country</h3>
              <p className="text-gray-400 text-sm">Nepal</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Home

