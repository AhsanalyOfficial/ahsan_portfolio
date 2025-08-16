"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const clients = [
  {
    name: "Shahid Bilal",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "Ahsan delivered high-quality work with impressive attention to detail. His ability to meet deadlines while maintaining clean, efficient code made the project a success.",
  },
  {
    name: "Muazzam Ali",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "Great technical expertise and excellent communication throughout the project. He made complex tasks look easy and ensured everything worked seamlessly.",
  },
  {
    name: "Ayesha Khan",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "Ahsan transformed our vision into a modern, functional website that exceeded expectations. His blend of creativity and technical skills truly stood out.",
  },
  {
    name: "David Citron",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "He quickly solved challenging problems with innovative solutions. His deep knowledge of modern web technologies made a noticeable difference in the project’s success.",
  },
  {
    name: "Aizaz Ahmed",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "The website Ahsan delivered was fast, reliable, and user-friendly. It directly improved our performance metrics and overall customer experience.",
  },
  {
    name: "Amina Ashiq",
    image: "/placeholder.svg?height=80&width=80",
    testimonial:
      "Professional, detail-oriented, and dedicated. Working with Ahsan was smooth and productive, and the final outcome exceeded expectations.",
  },
]

export function ClientSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="clients" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-6 h-6 text-red-500" />
            <span className="text-red-500 font-medium tracking-wider uppercase text-sm">Trusted Clients</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            What My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Clients</span> Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter">
            Building lasting relationships through exceptional web development and reliable project delivery
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
                  <Quote className="w-12 h-12 text-red-500/60 mb-6 mx-auto" />

                  <p className="text-gray-300 text-lg md:text-xl mb-8 font-inter leading-relaxed text-center max-w-3xl mx-auto">
                    "{clients[currentIndex].testimonial}"
                  </p>

                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center gap-4 justify-center">
                    <img
                      src={clients[currentIndex].image || "/placeholder.svg"}
                      alt={clients[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
                    />
                    <div className="text-center md:text-left">
                      <h4 className="text-white font-semibold font-poppins text-lg">{clients[currentIndex].name}</h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-red-500/50 text-white p-3 rounded-full transition-all duration-300 hover:bg-red-500/10 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:text-red-500 transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-red-500/50 text-white p-3 rounded-full transition-all duration-300 hover:bg-red-500/10 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:text-red-500 transition-colors duration-300" />
          </button>
          <div className="flex justify-center gap-2 mt-8">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-red-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
