import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.section
      id="contact"
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
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        {/* Add your contact form or contact information here */}
        <p className="text-center text-gray-400">Contact information coming soon...</p>
      </div>
    </motion.section>
  )
}

export default Contact

