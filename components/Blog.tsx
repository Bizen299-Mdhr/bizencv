"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const blogPosts = [
  {
    title: "The Rise of GPT-4: A New Era in Natural Language Processing",
    image: "https://picsum.photos/id/1/600/400",
    excerpt:
      "Explore the capabilities of GPT-4 and its potential impact on various industries, from content creation to customer service.",
    date: "May 15, 2023",
  },
  {
    title: "AI in Healthcare: Revolutionizing Diagnosis and Treatment",
    image: "https://picsum.photos/id/2/600/400",
    excerpt:
      "Discover how artificial intelligence is transforming healthcare, from early disease detection to personalized treatment plans.",
    date: "June 2, 2023",
  },
  {
    title: "The Ethics of AI: Navigating the Challenges of Autonomous Systems",
    image: "https://picsum.photos/id/3/600/400",
    excerpt:
      "Delve into the ethical considerations surrounding AI development and deployment, and the importance of responsible AI practices.",
    date: "June 20, 2023",
  },
]

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
      className="py-20 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest in AI Tech</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                  >
                    Read More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Blog

