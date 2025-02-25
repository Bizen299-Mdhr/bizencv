"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

const Resume = () => {
  const resumeData = {
    education: [
      {
        degree: "Bachelors in Computer Application",
        school: "Indira Gandhi National Open University ",
        year: "2020",
      },
      {
        degree: "Intermediate +2 Science",
        school: "Kathmandu Institute of science and technology",
        year: "2008",
      },
      {
        degree: "School Leaving Certificate",
        school: "Holy vision International School",
        year: "2005",
      },
    ],
    experience: [
      {
        position: "Senior Full Stack Developer / Tech lead",
        company: "EK Solutions",
        year: "2017-01 - Present",
        responsibilities: [
          "Lead development of scalable web applications",
          "Mentor junior developers and conduct code reviews",
          "Implement CI/CD pipelines and Some DevOps best practices ",
          "Manage and monitor the performance of the team",
          "Design and implement new features and improvements to existing systems",
          "Collaborate with cross-functional teams to deliver high-quality software",
          "Optimized database queries and improved application performance",
        ],
      },
      {
        position: "Applied Innovation",
        company: "StartUp Solutions LLC",
        year: "2013 - 2016",
        responsibilities: [
          "Worked as a Senior PHP Programmer",
          "Successful completed a web application project of Shinga durbar :Audit observation record and tracking System AND Debt Management System",
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
      "Some of DevOps tools: Docker/Kubernetes",
      "Git/GitHub/GitLab",
      "GCP",
      "GraphQL",
      "Machine Learning",
      "Laravel",
      "Wordpress",
      "HTML/CSS/Tailwind",
      "Bootstrap",
      "JQuery",
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
            href="Bijendra Manandhar.pdf"
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

