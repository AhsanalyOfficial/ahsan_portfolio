"use client"

import { motion } from "framer-motion"
import { Code2, Terminal, Zap } from "lucide-react"

export function PageLoader() {
  const codeLines = [
    "const developer = 'Ahsan Ali';",
    "const skills = ['React', 'Node.js', 'Next.js'];",
    "const passion = 'Building amazing apps';",
    "console.log('Welcome to my portfolio!');",
  ]

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 0.8 }}
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-50 flex items-center justify-center overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-teal-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            
            opacity: 0,
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="text-center relative z-10">
        {/* Main Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(239, 68, 68, 0.3)",
                "0 0 40px rgba(239, 68, 68, 0.6)",
                "0 0 20px rgba(239, 68, 68, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Code2 className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl font-bold font-poppins bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
            Ahsan Ali
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 1 }}
            className="h-0.5 bg-gradient-to-r from-teal-400 to-teal-400 mx-auto mb-3"
          />
          <p className="text-gray-400 font-inter">Full Stack Developer</p>
        </motion.div>

        {/* Code Terminal Animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 max-w-md mx-auto mb-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-4 h-4 text-teal-400" />
            <span className="text-xs text-gray-400 font-mono">portfolio.js</span>
            <div className="flex gap-1 ml-auto">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              <div className="w-2 h-2 bg-green-500 rounded-full" />
            </div>
          </div>
          <div className="text-left font-mono text-sm">
            
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + index * 0.3, duration: 0.5 }}
                className="text-gray-300 mb-1"
              >
                <span className="text-gray-500">{">"}</span> {line}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Loading Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          <Zap className="w-5 h-5 text-teal-400" />
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 bg-teal-400 rounded-full"
              />
            ))}
          </div>
          <span className="text-gray-400 font-inter text-sm">Initializing...</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
