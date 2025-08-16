"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Download, Projector } from "lucide-react";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "FULL STACK DEVELOPER",
    "MERN STACK DEVELOPER",
    "SOLUTION EXPERT",
    "WEB DEVELOPER",
  ];
  const currentTitle = titles[titleIndex];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentIndex < currentTitle.length) {
          setDisplayText((prev) => prev + currentTitle[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else if (!isDeleting && currentIndex === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        } else if (isDeleting && currentIndex === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      },
      isDeleting ? 100 : 150
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentTitle]);

  const techIcons = [
    {
      name: "React",
      icon: "⚛️",
      color: "from-blue-400 to-blue-600",
      delay: 0.2,
    },
    {
      name: "Node.js",
      icon: "🟢",
      color: "from-green-400 to-green-600",
      delay: 0.4,
    },
    {
      name: "Next.js",
      icon: "▲",
      color: "from-gray-400 to-gray-600",
      delay: 0.6,
    },
    {
      name: "NestJS",
      icon: "🔴",
      color: "from-red-400 to-red-600",
      delay: 0.8,
    },
    {
      name: "TypeScript",
      icon: "📘",
      color: "from-blue-500 to-blue-700",
      delay: 1.0,
    },
    {
      name: "MongoDB",
      icon: "🍃",
      color: "from-green-500 to-green-700",
      delay: 1.2,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
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
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight"
              >
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-[46px]">
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  style={{ width: "6px", height: "40px" }}
                  className="bg-red-500 ml-2 inline-block align-middle"
                ></motion.span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 1, duration: 1.2 }}
                className="h-1 bg-gradient-to-r from-red-500 to-red-600 mt-2 rounded-full"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 font-inter leading-relaxed"
            >
              Crafting exceptional digital experiences through modern
              technologies, innovative solutions, and user-centric design for
              impactful and seamless interactions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 group"
              >
                Hire Me
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                className="border-2 border-red-500 text-white hover:bg-red-500 hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-transparent backdrop-blur-sm group"
              >
                View My Work
                <Projector className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Central glowing orb */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 50px rgba(239, 68, 68, 0.3)",
                    "0 0 80px rgba(239, 68, 68, 0.5)",
                    "0 0 50px rgba(239, 68, 68, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="w-64 h-64 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-red-500/30"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="w-48 h-48 border-2 border-dashed border-red-500/50 rounded-full flex items-center justify-center"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white font-poppins">
                      AA
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Orbiting tech icons */}
              {techIcons.map((tech, index) => {
                const angle = index * 60 * (Math.PI / 180);
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: tech.delay, duration: 0.6 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      x: x,
                      y: y,
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center shadow-lg cursor-pointer group`}
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: -5 }}
                        className="absolute top-full mt-2 px-2 py-1 bg-black/80 text-white text-xs rounded font-inter whitespace-nowrap"
                      >
                        {tech.name}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Additional floating code elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 font-mono text-2xl backdrop-blur-sm border border-blue-500/30"
              >
                {"</>"}
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center text-green-400 font-mono text-2xl backdrop-blur-sm border border-green-500/30"
              >
                {"{ }"}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
