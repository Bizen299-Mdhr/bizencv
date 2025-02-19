"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

const Resume = () => {
  const resumeData = {
    education: [
      {
        degree: "Master of Science in Computer Science",
        school: "Stanford University",
        year: "2018 - 2020",
      },
      {
        degree: "Bachelor of Science in Software Engineering",
        school: "Massachusetts Institute of Technology",
        year: "2014 - 2018",
      },
    ],
    experience: [
      {
        position: "Senior Full Stack Developer",
        company: "Tech Innovators Inc.",
        year: "2020 - Present",
        responsibilities: [
          "Lead development of scalable web applications",
          "Mentor junior developers and conduct code reviews",
          "Implement CI/CD pipelines and DevOps best practices",
        ],
      },
      {
        position: "Software Engineer",
        company: "StartUp Solutions LLC",
        year: "2018 - 2020",
        responsibilities: [
          "Developed and maintained multiple client-facing applications",
          "Collaborated with cross-functional teams to deliver high-quality software",
          "Optimized database queries and improved application performance",
        ],
      },
    ],
    skills: [
      "JavaScript/TypeScript",
      "React/Next.js",
      "Node.js",
      "Python",
      "SQL/NoSQL Databases",
      "AWS/Azure Cloud Services",
      "Docker/Kubernetes",
      "GraphQL",
      "Machine Learning",
    ],
  }

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
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">My Resume</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-red-900">Education</h3>
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="mb-6"
              >
                <h4 className="text-xl font-semibold">{edu.degree}</h4>
                <p className="text-gray-400">{edu.school}</p>
                <p className="text-gray-500">{edu.year}</p>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-red-900">Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="mb-6"
              >
                <h4 className="text-xl font-semibold">{exp.position}</h4>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-gray-500">{exp.year}</p>
                <ul className="list-disc list-inside mt-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-400">
                      {resp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-red-900">Skills</h3>
          <div className="flex flex-wrap gap-4">
            {resumeData.skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <motion.a
            href="/path-to-your-resume.pdf"
            download="Bizen_Manandhar_Resume.pdf"
            className="bg-red-900 hover:bg-red-900 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}

export default Resume

