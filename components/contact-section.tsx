"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, Github, Linkedin, Send, CheckCircle, Clock, MessageSquare, User } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahsanalyofficial@gmail.com",
      href: "mailto:ahsanalyofficial@gmail.com",
      color: "text-teal-400",
      bgColor: "bg-teal-400/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 310 4458182",
      href: "tel:+923104458182",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/AhsanalyOfficial",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ahsan-ali-developer",
      color: "hover:text-teal-400",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:ahsanalyofficial@gmail.com",
      color: "hover:text-teal-400",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSubmitted(true)
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      // Reset form after success
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" })
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.message

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-20">
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

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-teal-400/10 text-teal-400 border-teal-400/30">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Let's Work </span>
              <span className="text-teal-400">Together</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-inter">
              Ready to bring your ideas to life? I'm available for freelance projects and would love to hear about your
              next venture.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="hover:shadow-md transition-shadow bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${info.bgColor} bg-opacity-20`}>
                              <info.icon className={`w-5 h-5 ${info.color}`} />
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">{info.label}</p>
                              {info.href.startsWith("http") ||
                              info.href.startsWith("mailto") ||
                              info.href.startsWith("tel") ? (
                                <a
                                  href={info.href}
                                  target={info.href.startsWith("http") ? "_blank" : undefined}
                                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                  className="font-medium hover:text-red-400 transition-colors text-white"
                                >
                                  {info.value}
                                </a>
                              ) : (
                                <p className="font-medium text-white">{info.value}</p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg transition-colors hover:bg-gray-700/50 text-gray-300 hover:text-red-400"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <MessageSquare className="w-5 h-5 text-teal-400" />
                    Send Me a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2 text-white">Message Sent Successfully!</h3>
                      <p className="text-gray-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                          <Label htmlFor="name" className="flex items-center gap-2 text-gray-300">
                            <User className="w-4 h-4" />
                            Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                            className="transition-all focus:ring-2 focus:ring-teal-400/20 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                          />
                        </motion.div>

                        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                          <Label htmlFor="email" className="flex items-center gap-2 text-gray-300">
                            <Mail className="w-4 h-4" />
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            required
                            className="transition-all focus:ring-2 focus:ring-teal-400/20 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                          />
                        </motion.div>
                      </div>

                      <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-300">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Project inquiry, collaboration, etc."
                          className="transition-all focus:ring-2 focus:ring-teal-400/20 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </motion.div>

                      <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                        <Label htmlFor="message" className="text-gray-300">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project, requirements, timeline, and budget..."
                          rows={5}
                          required
                          className="transition-all focus:ring-2 focus:ring-teal-400/20 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </motion.div>

                      <Button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        className="w-full bg-teal-400 hover:bg-teal-400 text-white"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <Clock className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-gray-400 text-center">
                        I typically respond within 24 hours. For urgent inquiries, feel free to call me directly.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
