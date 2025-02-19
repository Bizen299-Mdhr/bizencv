"use client"

import { motion } from "framer-motion"

interface Skill {
  name: string
  percentage: number
  category: string
}

const skills: Skill[] = [
  // Development Skills
  { name: "HTML/CSS", percentage: 95, category: "Development" },
  { name: "JavaScript", percentage: 90, category: "Development" },
  { name: "React/Next.js", percentage: 85, category: "Development" },
  { name: "Node.js", percentage: 80, category: "Development" },
  { name: "TypeScript", percentage: 85, category: "Development" },

  // Design Skills
  { name: "System Design", percentage: 90, category: "Design" },
  { name: "UX Design", percentage: 50, category: "Design" },

  // Other Skills
  { name: "Project Management", percentage: 85, category: "Other" },
  { name: "Team Leadership", percentage: 90, category: "Other" },
  { name: "Problem Solving", percentage: 95, category: "Other" },
]

const SkillBar = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-200 font-medium">{skill.name}</span>
        <span className="text-red-900 font-bold">{skill.percentage}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-red-900 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

const About = () => {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)))

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black text-gray-100"
    >
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-gray-300 text-center mb-12">
            I specialize in creating innovative digital solutions with a focus on user experience and modern
            technologies.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {categories.map((category, index) => (
              <div key={category} className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-2xl font-bold mb-6 text-red-900"
                >
                  {category} Skills
                </motion.h3>
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, skillIndex) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About

