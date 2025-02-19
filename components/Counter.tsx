"use client"

import { useState, useEffect } from "react"

const Counter = ({ end, title }: { end: number; title: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [end])

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white mb-2">{count}</div>
      <div className="text-gray-400 text-sm">{title}</div>
    </div>
  )
}

export default Counter

