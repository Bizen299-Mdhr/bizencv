import { motion } from "framer-motion"

const Blog = () => {
  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 1,
      }}
      className="py-20 flowing-gradient"
    >
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Blog</h2>
        {/* Add your blog content here */}
        <p className="text-center text-gray-400">Blog posts coming soon...</p>
      </div>
    </motion.section>
  )
}

export default Blog

