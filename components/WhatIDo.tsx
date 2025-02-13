import { motion } from "framer-motion"
import { Code, Palette, Camera } from "lucide-react"

const WhatIDo = () => {
  return (
    <motion.section
      id="what-i-do"
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-8"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Palette, title: "Branding" },
            { icon: Code, title: "Development" },
            { icon: Camera, title: "Photography" },
          ].map((service) => (
            <motion.div key={service.title} whileHover={{ scale: 1.05 }} className="p-6 bg-black rounded-lg">
              <service.icon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

export default WhatIDo

