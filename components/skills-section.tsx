"use client"

import { motion } from "framer-motion"
import { Code, Palette, Server, Database, Globe, Settings } from "lucide-react"

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "from-blue-500 to-blue-600",
      skills: ["React", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    },
    {
      icon: Palette,
      title: "Styling",
      color: "from-pink-500 to-pink-600",
      skills: ["Tailwind CSS", "SCSS", "Bootstrap", "Material UI", "Framer Motion"],
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-green-500 to-green-600",
      skills: ["Node.js", "Express.js", "NestJS", ".NET Core", "WebSockets"],
    },
    {
      icon: Database,
      title: "Database",
      color: "from-purple-500 to-purple-600",
      skills: ["MongoDB", "PostgreSQL", "SQL", "MySQL", "Redis"],
    },
    {
      icon: Globe,
      title: "Integration",
      color: "from-orange-500 to-orange-600",
      skills: ["Stripe", "OAuth", "Payment Gateways", "UPS", "Third-party APIs"],
    },
    {
      icon: Settings,
      title: "Tools",
      color: "from-gray-500 to-gray-600",
      skills: ["Git & GitHub", "Docker", "Heroku", "Vercel", "Postman", "Swagger"],
    },
  ]

  return (
    <section
      id="skills"
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
              <span className="text-red-400 font-medium font-inter">Technical Skills</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Technologies I{" "}
              </span>
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Master</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6 rounded-full"
            />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-inter leading-relaxed">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full hover:border-red-500/50 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white font-poppins">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 bg-gray-800/50 border border-gray-600 rounded-lg text-sm text-gray-300 hover:border-red-500/50 hover:text-white transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
