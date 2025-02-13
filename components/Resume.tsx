import { motion } from "framer-motion"

const Resume = () => {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 1,
      }}
      className="py-20 bg-gray-900 flowing-gradient"
    >
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">My Resume</h2>
        {/* Add your resume content here */}
        <p className="text-center text-gray-400">Resume content coming soon...</p>
      </div>
    </motion.section>
  )
}

export default Resume

