"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// Updated data structure to include tech stack and improved descriptions
const works = [
  {
    id: 1,
    title: "Bigmart CRM 2.0",
    images: ["./projects/bigmart1.png", "./projects/bigmart2.png", "./projects/bigmart3.png"],
    category: "Node js Development",
    techStack: [
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "BullMQ" },
      { name: "Firebase Integration" },
      { name: "Google Analytics" },
    ],
    description: [
      "Developed a comprehensive CRM system for Bigmart using modern Node.js technologies.",
      "Implemented real-time data synchronization and automated reporting features.",
      "Integrated with multiple third-party services for enhanced functionality.",
    ],
  },
  {
    id: 2,
    title: "Save The children - MDIS System",
    images: ["./projects/mdis1.png", "./projects/mdis2.png"],
    category: "Laravel Development",
    techStack: [
      { name: "Laravel" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "Sparrow SMS" },
      { name: "GIS Map" },
    ],
    description: [
      "Developed a comprehensive management system for Save The Children.",
      "Integrated SMS capabilities for real-time communication.",
      "Implemented robust reporting and analytics features.",
    ],
  },
  {
    id: 3,
    title: "MIS System",
    images: ["./projects/mis1.png", "./projects/mis11.png", "./projects/mis2.png"],
    category: "Laravel Development",
    techStack: [
      { name: "Laravel Backend / API" },
      { name: "MySQL" },
      { name: "Sparrow SMS" },
      { name: "GIS Map" },
      { name: "Leaflet JS" },
    ],
    description: [
      "Developed a management system for a Redcross organization.",
      "Created integrated mobile application for field operations.",
      "Implemented real-time data synchronization between web and mobile platforms.",
    ],
  },
  {
    id: 4,
    title: "UNPLUG",
    images: ["./projects/unplug1.png", "./projects/unplug2.png"],
    category: "Node js Development",
    techStack: [
      { name: "Express.js" },
      { name: "PostgreSQL" },
      { name: "MongoDB"},
      { name: "AWS" },
      { name: "Stripe" },
      { name: "BullMQ" },
      { name: "React" }
    ],
    description: [
      "Developed robust backend API using Express.js and PostgreSQL.",
      "Implemented secure payment processing with Stripe integration.",
      "Set up scalable AWS infrastructure and background job processing.",
      "Implemented AWS S3 for file storage and retrieval and AWS Lambda for background job processing.",
    ],
  },
  {
    id: 5,
    title: "MyPlace",
    images: ["./projects/myplace1.png", "./projects/myplace2.png", "./projects/myplace3.png"],
    category: "Node js Development",
    techStack: [
      { name: "Express js" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "BullMQ" },
      { name: "Vue js" },
    ],
    description: [
      "Developed CRM application for a JAPAN real estate company.",
      "Implemented complex property management system.",
      "Created real-time notification system for property updates.",
    ],
  },
  {
    id: 7,
    title: "RECKI",
    images: [
      "./projects/recki1.png",
      "./projects/recki2.png",
    ],
    category: "Node js Development",
    techStack: [
      { name: "Mono Repo Express js" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "BullMQ" },
      { name: "GCP" },
      { name: "Google Analytics" },
      { name: "Kubernetes load balancer" },
      { name: "Docker" },
    ],
    description: [
      "Implemented a efficient system backend API for RECKI app",
      "Implemented Google Analytics for tracking user behavior",
      "Implemented Some DevOps best practices like Kubernetes load balancer for efficient resource management",
      "Implemented BullMQ for background job processing",
      "Implemented GCP for scalable infrastructure and storage",
      "Implemented Redis for caching",
    ],
  },
  {
    id: 6,
    title: "AI-Powered Analytics Platform",
    images: [
      "https://picsum.photos/id/8/800/600",
      "https://picsum.photos/id/1/800/600"
    ],
    category: "AI Development",
    techStack: [
      { name: "Next js" },
      { name: "FastAPI" },
    ],
    description: [
      "Built an AI-powered analytics platform",
      "Implemented machine learning models Prompts for predictive analytics.",
    ],
  }
]

// Extract unique categories
const categories = ["All", ...Array.from(new Set(works.map((work) => work.category)))]

const TechStackBar = ({ tech }: { tech: { name: string } }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
    >
      {tech.name}
    </motion.span>
  )
}

// Add type for DEFAULT_IMAGES
interface DefaultImages {
  [key: string]: string;
  default: string;
}

const DEFAULT_IMAGES: DefaultImages = {
  "Node.js Development": "/tech/node.jpg",
  "Laravel Development": "/tech/laravel.jpg",
  "Full Stack Development": "/tech/fullstack.jpg",
  "UI/UX": "/tech/ui-ux.jpg",
  default: "/tech/coding.jpg",
};

const MyWorks = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const ref = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const ITEMS_PER_PAGE = 6

  // Filter works based on selected category
  const filteredWorks = works.filter((work) => (selectedCategory === "All" ? true : work.category === selectedCategory))

  // Calculate total pages
  const totalPages = Math.ceil(filteredWorks.length / ITEMS_PER_PAGE)

  // Get current page items
  const currentItems = filteredWorks.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE)

  useEffect(() => {
    setCurrentPage(0) // Reset to first page when category changes
  }, [selectedCategory])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      })
    }
  }, [])

  useEffect(() => {
    if (selectedProjectIndex !== null) {
      document.body.style.overflow = "hidden"

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" || e.key === "ArrowUp") {
          closePopup()
        } else if (e.key === "ArrowLeft") {
          if (selectedProjectIndex !== null) {
            const imageCount = works[selectedProjectIndex].images.length
            setCurrentImageIndex((prev) => (prev - 1 + imageCount) % imageCount)
            setLoading(true)
          }
        } else if (e.key === "ArrowRight") {
          if (selectedProjectIndex !== null) {
            const imageCount = works[selectedProjectIndex].images.length
            setCurrentImageIndex((prev) => (prev + 1) % imageCount)
            setLoading(true)
          }
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => {
        window.removeEventListener("keydown", handleKeyDown)
      }
    } else {
      document.body.style.overflow = "unset"
    }
  }, [selectedProjectIndex])

  useEffect(() => {
    if (selectedProjectIndex !== null) {
      setCurrentImageIndex(0)
    }
  }, [selectedProjectIndex])

  // Horizontal scroll handling
  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentPage((prev) => Math.max(0, prev - 1))
    } else {
      setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
    }
  }

  // Navigate between projects
  const handlePreviousProject = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedProjectIndex((prev) => (prev !== null ? (prev - 1 + works.length) % works.length : null))
    setLoading(true)
    setCurrentImageIndex(0)
  }

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedProjectIndex((prev) => (prev !== null ? (prev + 1) % works.length : null))
    setLoading(true)
    setCurrentImageIndex(0)
  }

  // Navigate between images within the same project
  const handlePreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedProjectIndex !== null) {
      const imageCount = works[selectedProjectIndex].images.length
      setCurrentImageIndex((prev) => (prev - 1 + imageCount) % imageCount)
      setLoading(true)
    }
  }

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedProjectIndex !== null) {
      const imageCount = works[selectedProjectIndex].images.length
      setCurrentImageIndex((prev) => (prev + 1) % imageCount)
      setLoading(true)
    }
  }

  const closePopup = () => {
    setSelectedProjectIndex(null)
    setCurrentImageIndex(0)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: { opacity: 0 },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: { opacity: 0, y: -20 },
  }

  const getDefaultImage = (category: string) => {
    return DEFAULT_IMAGES[category] || DEFAULT_IMAGES.default
  }

  return (
    <motion.section
      ref={ref}
      id="my-works"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-12 md:py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      <motion.div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-white">
          My Project Involvement / Works
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-red-900 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-red-900/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Works Grid with Horizontal Scroll */}
        <div className="relative overflow-hidden">
          {filteredWorks.length > ITEMS_PER_PAGE && (
            <>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleScroll("left")}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 sm:p-3 rounded-full hover:bg-red-900/50 transition-colors hidden md:flex items-center justify-center transform-none ${
                  currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleScroll("right")}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 sm:p-3 rounded-full hover:bg-red-900/50 transition-colors hidden md:flex items-center justify-center transform-none ${
                  currentPage >= totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentPage >= totalPages - 1}
              >
                <ChevronRight className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.button>
            </>
          )}

          <div ref={scrollRef} className="overflow-hidden">
            <div className="container mx-auto">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 p-2 md:p-4"
                style={{ width: "100%", gridTemplateRows: "repeat(2, 1fr)" }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={selectedCategory}
              >
                {currentItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full aspect-[4/3] relative overflow-hidden rounded-lg cursor-pointer bg-gray-800"
                    onClick={() => {
                      setSelectedProjectIndex(works.findIndex((w) => w.id === item.id))
                      setCurrentImageIndex(0)
                      setLoading(true)
                    }}
                  >
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                      <Image
                        src={item.images[0] || getDefaultImage(item.category)}
                        alt={item.title}
                        width={800}
                        height={900}
                        quality={10}
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-700 hover:scale-110"
                      />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <h3 className="text-white text-xl font-bold mb-2 text-center">{item.title}</h3>
                      <span className="text-gray-300 text-sm">{item.category}</span>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentPage === index ? "bg-red-900" : "bg-gray-600"
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProjectIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[60] p-2 sm:p-4 md:p-6"
            onClick={closePopup}
          >
            <motion.div
              className="relative w-full max-w-5xl rounded-lg overflow-hidden border-4 border-red-900/20 bg-black/30"
              initial={{ scale: 0.9, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotate: 10 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4">
                {/* Image Section */}
                <div className="relative aspect-[4/3]">
                  {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
                      <motion.div
                        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        className="w-16 h-16 border-4 border-t-red-900 border-r-transparent border-b-red-900 border-l-transparent rounded-full"
                      />
                    </div>
                  )}
                  <Image
                    src={works[selectedProjectIndex].images[currentImageIndex] || "/placeholder.svg"}
                    alt={works[selectedProjectIndex].title}
                    fill
                    className={`object-cover w-full h-full transition-opacity duration-300 ${
                      loading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => setLoading(false)}
                    style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
                  />

                  {/* Image counter indicator */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {currentImageIndex + 1} / {works[selectedProjectIndex].images.length}
                  </div>

                  {/* Image navigation */}
                  <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                    <motion.button
                      className="w-10 h-10 bg-black/50 hover:bg-red-900/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm pointer-events-auto"
                      onClick={handlePreviousImage}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft size={24} />
                    </motion.button>
                    <motion.button
                      className="w-10 h-10 bg-black/50 hover:bg-red-900/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm pointer-events-auto"
                      onClick={handleNextImage}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight size={24} />
                    </motion.button>
                  </div>

                  {/* Overlapping Description Section */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 md:p-6 max-h-[40%] overflow-y-auto custom-scrollbar"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <h4 className="text-base md:text-lg font-semibold mb-2 text-white">Description</h4>
                    <ul className="space-y-2">
                      {works[selectedProjectIndex].description.map((desc, index) => (
                        <li key={index} className="text-sm md:text-base text-gray-300">
                          • {desc}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Tech Stack Section */}
                <div className="p-4 md:p-6 bg-gray-900/50 backdrop-blur-sm overflow-y-auto max-h-[300px] md:max-h-[600px] custom-scrollbar">
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold mb-1">{works[selectedProjectIndex].title}</h3>
                        <span className="text-sm text-gray-400">{works[selectedProjectIndex].category}</span>
                      </div>
                      <motion.button
                        className="w-8 h-8 bg-red-900/50 hover:bg-red-900 rounded-full flex items-center justify-center text-white backdrop-blur-sm flex-shrink-0 ml-4"
                        onClick={closePopup}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <X size={18} />
                      </motion.button>
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-semibold mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {works[selectedProjectIndex].techStack.map((tech, index) => (
                          <TechStackBar key={index} tech={tech} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default MyWorks

