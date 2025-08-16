"use client"

import { motion } from "framer-motion"
import { Code, Users, Target, Award } from "lucide-react"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Mentoring juniors and leading cross-functional teams to success",
    },
    {
      icon: Target,
      title: "User-Centric",
      description: "Building applications that solve real problems and drive business growth",
    },
    {
      icon: Award,
      title: "Best Practices",
      description: "Committed to debugging, code reviews, and continuous improvement",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6"
            >
              <span className="text-red-400 font-medium font-inter">About Me</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Passionate About Building{" "}
              </span>
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6 rounded-full"
            />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-inter leading-relaxed">
              From mentoring juniors to leading projects, I'm dedicated to creating impactful web applications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-3xl flex items-center justify-center border border-red-500/20 backdrop-blur-sm"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(239, 68, 68, 0.3)",
                          "0 0 40px rgba(239, 68, 68, 0.5)",
                          "0 0 20px rgba(239, 68, 68, 0.3)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Code className="w-16 h-16 text-white" />
                    </motion.div>
                    <p className="text-gray-400 font-inter">Professional Developer</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold font-poppins mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Hello, I'm Ahsan Ali
                </h3>
                <div className="space-y-4 text-gray-400 leading-relaxed font-inter">
                  <p>
                    As a full-stack developer with expertise in{" "}
                    <span className="text-red-400 font-medium">React, Next.js, Node.js, NestJS</span>, and modern web
                    technologies, I focus on delivering high-performance applications that drive business growth.
                  </p>

                  <p>
                    My journey began with a{" "}
                    <span className="text-red-400 font-medium">
                      curiosity about how websites work
                    </span>
                    , and it has evolved into a passion for creating seamless digital experiences. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.
                  </p>

                  <p>
                    From mentoring junior developers to leading complex projects, I believe in the power of clean code,
                    collaborative teamwork, and continuous learning. Every project is an opportunity to solve real
                    problems and make a meaningful impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 font-poppins bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Drives Me
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="text-center"
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full hover:border-red-500/50 transition-all duration-300 group">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all duration-300"
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="font-semibold mb-3 text-white font-poppins text-lg">{value.title}</h4>
                    <p className="text-sm text-gray-400 font-inter leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
