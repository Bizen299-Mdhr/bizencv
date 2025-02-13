import { motion } from "framer-motion"
import CircularProgress from "./CircularProgress"

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 1,
      }}
      className="min-h-screen py-20 flowing-gradient flex items-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-8"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
          <CircularProgress value={90} label="HTML" />
          <CircularProgress value={85} label="CSS" />
          <CircularProgress value={80} label="PHP" />
          <CircularProgress value={75} label="Javascript" />
        </div>
      </motion.div>
    </motion.section>
  )
}

export default About

