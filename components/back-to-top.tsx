"use client"

import { motion } from "framer-motion"
import { ChevronUp } from "lucide-react"

export function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.button
        onClick={scrollToTop}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 25px rgba(239, 68, 68, 0.5)",
        }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      >
        <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ChevronUp className="w-6 h-6 text-white group-hover:text-white/90" />
        </motion.div>
      </motion.button>
    </motion.div>
  )
}
