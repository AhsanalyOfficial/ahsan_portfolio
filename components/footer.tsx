"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail, Phone, Code, Zap } from "lucide-react"

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    { href: "mailto:ahsanalyofficial@gmail.com", icon: Mail, label: "Email" },
    { href: "https://linkedin.com/in/ahsan-ali-developer", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/AhsanalyOfficial", icon: Github, label: "GitHub" },
    { href: "tel:+923104458182", icon: Phone, label: "Phone" },
  ]

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

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
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

      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center"
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold font-poppins bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ahsan Ali
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md font-inter leading-relaxed">
              Full Stack Developer specializing in scalable web applications. Turning ideas into reality with modern
              technologies and exceptional user experiences.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-3 h-3 bg-green-500 rounded-full"
              />
              <div className="px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
                <span className="text-green-400 font-medium font-inter text-sm">Available for Projects</span>
              </div>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6 text-white font-poppins text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm font-inter"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6 text-white font-poppins text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-inter">
              <li className="hover:text-red-400 transition-colors cursor-default">Full Stack Development</li>
              <li className="hover:text-red-400 transition-colors cursor-default">React & Next.js Apps</li>
              <li className="hover:text-red-400 transition-colors cursor-default">API Development</li>
              <li className="hover:text-red-400 transition-colors cursor-default">Database Design</li>
              <li className="hover:text-red-400 transition-colors cursor-default">UI/UX Implementation</li>
              <li className="hover:text-red-400 transition-colors cursor-default">Performance Optimization</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-gray-400 font-inter">
            <span>© 2025 Ahsan Ali. Made with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
              <Heart className="w-4 h-4 text-red-500" />
            </motion.div>
            <span>and</span>
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>Next.js</span>
          </div>

          <div className="text-sm text-gray-500 font-inter">Crafted with passion and precision</div>
        </motion.div>
      </div>
    </footer>
  )
}
