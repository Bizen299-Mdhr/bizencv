import { motion } from "framer-motion"
import { Code, Database, Globe, Server, Terminal } from "lucide-react"

const servicesData = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Expertise in React.js, Next.js, and modern JavaScript. Creating responsive, interactive web applications with a focus on user experience and performance optimization."
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building robust server-side applications using Node.js, Nest js, Express, and MongoDB . Implementing RESTful APIs and microservices architecture."
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Proficient in both SQL and NoSQL databases. Experience with MongoDB, PostgreSQL, and database optimization techniques."
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web development using modern technologies. Creating scalable, secure, and maintainable web applications."
  },

  // {
  //   icon: Palette,
  //   title: "UI/UX Design",
  //   description: "Creating intuitive user interfaces with Tailwind CSS and Material-UI. Focus on responsive design and accessibility."
  // }
]

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
          {servicesData.map((service) => (
            <motion.div 
              key={service.title} 
              whileHover={{ scale: 1.05 }} 
              className="p-6 bg-black rounded-lg"
            >
              <service.icon className="w-12 h-12 text-red-900 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

export default WhatIDo

