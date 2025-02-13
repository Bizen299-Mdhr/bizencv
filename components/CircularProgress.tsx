import { motion } from "framer-motion"

const CircularProgress = ({ value, label }: { value: number; label: string }) => (
  <div className="relative w-32 h-32">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <circle className="text-gray-800 stroke-current" strokeWidth="8" cx="50" cy="50" r="40" fill="transparent" />
      <motion.circle
        className="text-red-600 stroke-current"
        strokeWidth="8"
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: value / 100 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{
          transformOrigin: "center",
          transform: "rotate(-90deg)",
        }}
      />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="text-2xl font-bold">{value}%</span>
      <span className="text-sm text-gray-400">{label}</span>
    </div>
  </div>
)

export default CircularProgress

