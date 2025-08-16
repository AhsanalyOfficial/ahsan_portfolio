"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
// import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { PageLoader } from "@/components/page-loader"
import { BackToTop } from "@/components/back-to-top"
import { Toaster } from "@/components/ui/toaster"
import { motion } from "framer-motion"
import { ClientSection } from "@/components/client-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <PageLoader />}
      <ScrollProgress />
      <BackToTop />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: isLoading ? 3.5 : 0 }}
        className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900"
      >
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        {/* <ExperienceSection /> */}
        <ProjectsSection />
        <ClientSection />
        <ContactSection />
        <Footer />
      </motion.main>

      <Toaster />
    </>
  )
}
