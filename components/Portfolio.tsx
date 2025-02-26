"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "MySRM",
    image: "https://picsum.photos/id/1018/800/600",
    category: "Web Backend / frontend System",
    description: "MySRM is a SaaS for startup relationship management From scouting to M&A, MySRM helps corporates to leverage the value added brought by startups Public launch in October 2017."
  },
  {
    id: 2,
    title: "MDIS CRM",
    image: "/projects/mdis2.png",
    category: "Laravel web crm development",
    description: " Save The children - MDIS System",
    
  },
  {
    id: 3,
    title: "Project 3",
    image: "https://picsum.photos/id/1019/800/600",
    category: "UI/UX",
    description: "User interface redesign for a mobile application.",
  },
  {
    id: 4,
    title: "Project 4",
    image: "https://picsum.photos/id/1016/800/600",
    category: "Web Design",
    description: "Modern landing page design for a tech startup.",
  },
  {
    id: 5,
    title: "Project 5",
    image: "https://picsum.photos/id/1020/800/600",
    category: "Development",
    description: "Full-stack web application for project management.",
  },
  {
    id: 6,
    title: "Project 6",
    image: "https://picsum.photos/id/1021/800/600",
    category: "UI/UX",
    description: "Comprehensive UX research and design for a finance app.",
  },
]

const Portfolio = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedImageIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  }

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + portfolioItems.length) % portfolioItems.length : null))
    setLoading(true)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % portfolioItems.length : null))
    setLoading(true)
  }

  const closePopup = () => {
    setSelectedImageIndex(null)
  }

  return (
    <motion.section
      ref={ref}
      id="my-works"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      <motion.div className="container mx-auto px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">My Works</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-800"
              onClick={() => {
                setSelectedImageIndex(index)
                setLoading(true)
              }}
            >
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <span className="text-gray-300 text-sm">{item.category}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
            onClick={closePopup}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-[4/3] rounded-lg overflow-hidden border-4 border-red-900/20"
              initial={{ scale: 0.9, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotate: 10 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="w-16 h-16 border-4 border-t-red-900 border-r-transparent border-b-red-900 border-l-transparent rounded-full"
                  />
                </div>
              )}
              <div className="relative w-full h-full">
                <Image
                  src={portfolioItems[selectedImageIndex].image || "/placeholder.svg"}
                  alt={portfolioItems[selectedImageIndex].title}
                  fill
                  quality={100}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  className={`object-contain transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
                  onLoadingComplete={() => setLoading(false)}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 flex items-center"
              >
                <motion.button
                  className="mr-4 w-10 h-10 bg-red-900/50 hover:bg-red-900 rounded-full flex items-center justify-center text-white backdrop-blur-sm flex-shrink-0"
                  onClick={closePopup}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
                <div>
                  <h3 className="text-xl font-bold mb-1">{portfolioItems[selectedImageIndex].title}</h3>
                  <p className="text-sm text-gray-300">{portfolioItems[selectedImageIndex].description}</p>
                </div>
              </motion.div>
              <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <motion.button
                  className="w-10 h-10 bg-black/50 hover:bg-red-900/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm pointer-events-auto"
                  onClick={handlePrevious}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={24} />
                </motion.button>
                <motion.button
                  className="w-10 h-10 bg-black/50 hover:bg-red-900/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm pointer-events-auto"
                  onClick={handleNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={24} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default Portfolio

