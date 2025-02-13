import { motion } from "framer-motion"
import Image from "next/image"

const Portfolio = () => {
  return (
    <motion.section
      id="portfolio"
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-8"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={`/placeholder.svg?height=400&width=400`}
                alt={`Portfolio item ${item}`}
                fill
                className="object-cover transition-transform hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Portfolio

