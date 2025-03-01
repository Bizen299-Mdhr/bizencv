"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import type React from "react"
import toast, { Toaster } from 'react-hot-toast'
import { config } from '../config'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { name: "", email: "", subject: "", message: "" }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      isValid = false
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      try {
        const response = await fetch(`${config.apiUrl}/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': config.apiKey,
          },
          body: JSON.stringify(formData),
          mode: 'cors'
        })

        const result = await response.json()
        if (response.ok) {
          setFormData({ name: "", email: "", subject: "", message: "" })
          toast.success("Thank you for your message! I'll get back to you soon.", {
            duration: 4000,
            position: 'bottom-center',
            style: {
              background: '#1f2937',
              color: '#fff',
              padding: '16px',
              borderRadius: '8px',
            },
          })
        } else {
          throw new Error(result.error || 'Failed to send message')
        }
      } catch (error) {
        console.error('Error sending email:', error)
        toast.error('Failed to send message. Please try again later.', {
          duration: 4000,
          position: 'bottom-center',
          style: {
            background: '#dc2626',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
          },
        })
      }
    }
  }

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
      className="min-h-screen py-20 bg-gray-900 flowing-gradient flex items-center"
    >
      <Toaster />
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900"
              placeholder="Your Name"
            />
            {errors.name && <p className="mt-1 text-red-900 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900"
              placeholder="your@email.com"
            />
            {errors.email && <p className="mt-1 text-red-900 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900"
              placeholder="Message Subject"
            />
            {errors.subject && <p className="mt-1 text-red-900 text-sm">{errors.subject}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900"
              placeholder="Your Message"
            ></textarea>
            {errors.message && <p className="mt-1 text-red-900 text-sm">{errors.message}</p>}
          </div>
          <div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-900 text-white py-2 px-4 rounded-md hover:bg-red-900 transition duration-300 flex items-center justify-center"
            >
              <Send className="mr-2" size={18} />
              Send Message
            </motion.button>
          </div>
        </form>
      </div>
    </motion.section>
  )
}

export default Contact

