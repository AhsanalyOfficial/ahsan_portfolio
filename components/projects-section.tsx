"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Eye,
  Shield,
  Globe,
  Zap,
  Users,
  Database,
  Smartphone,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import denProject1 from "../assets/den_project01.png";
import denProject2 from "../assets/den_project02.png";
import denProject3 from "../assets/den_project03.png";
import realProject1 from "../assets/real_project01.png";
import realProject2 from "../assets/real_project02.png";
import realProject3 from "../assets/real_project03.png";
import ssoProject01 from "../assets/sso_project01.png";
import ssoProject02 from "../assets/sso_project02.png";
import ssoProject03 from "../assets/sso_project03.png";
import mobileProject01 from "../assets/mobile_project01.png";
import mobileProject02 from "../assets/mobile_project02.png";
import mobileProject03 from "../assets/mobile_project03.png";
import ecomProject01 from "../assets/ecom_project01.png";
import ecomProject02 from "../assets/ecom_project02.png";
import ecomProject03 from "../assets/ecom_project03.png";
import schoolProject01 from "../assets/school_project01.png";
import schoolProject02 from "../assets/school_project02.png";
import schoolProject03 from "../assets/school_project03.png";
import schoolProject04 from "../assets/school_project04.png";

interface Project {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  images: string[];
  technologies: string[];
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  github: string;
  demo: string;
  status: string;
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  // Get window dimensions on mount (client-side only)
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Only run on client side
    if (typeof window !== "undefined") {
      setIsClient(true);
      handleResize(); // Set initial size
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const projects = [
    {
      title: "Dentistry99 Platform",
      category: "Healthcare Platform",
      description:
        "Comprehensive dental practice management platform with advanced security and real-time features.",
      longDescription:
        "Architected a full-featured dental platform with multi-factor authentication, role-based access control, and real-time communication. Implemented Stripe payment processing and Redis caching for optimal performance.",
      images: [denProject1.src, denProject2.src, denProject3.src],
      technologies: [
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Stripe",
        "WebSockets",
        "Redis",
        "MFA",
        "RBAC",
      ],
      features: [
        "Multi-factor Authentication (MFA)",
        "Role-based Access Control (RBAC)",
        "Real-time WebSocket communication",
        "Stripe payment integration",
        "Redis caching for performance",
        "Comprehensive patient management",
        "Appointment scheduling system",
        "Treatment history tracking",
      ],
      icon: Shield,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      github: "https://github.com/AhsanalyOfficial/dentistry99",
      demo: "https://dentistry99.vercel.app",
      status: "Live",
    },
    {
      title: "Real Estate Platform",
      category: "Property Management",
      description:
        "Modern real estate platform with interactive maps, advanced search, and comprehensive property management.",
      longDescription:
        "Built a responsive real estate platform featuring Google Maps integration, advanced property search filters, and intuitive dashboards for both agents and clients.",
      images: [realProject1.src, realProject2.src, realProject3.src],
      technologies: [
        "React",
        "Tailwind CSS",
        "Google Maps API",
        "Node.js",
        "MongoDB",
        "Express.js",
      ],
      features: [
        "Interactive Google Maps integration",
        "Advanced property search & filters",
        "Agent and client dashboards",
        "Property listing management",
        "Responsive design for all devices",
        "Real-time property updates",
        "Virtual tour integration",
        "Mortgage calculator",
      ],
      icon: Globe,
      color: "text-teal-400",
      bgColor: "bg-teal-400/10",
      github: "https://github.com/AhsanalyOfficial/real-estate-app",
      demo: "https://real-estate-demo.vercel.app",
      status: "Live",
    },
    {
      title: "E-Commerce Platform",
      category: "Online Store",
      description:
        "Full-stack e-commerce solution with secure payments, inventory management, and admin dashboard.",
      longDescription:
        "Developed a complete e-commerce platform with React/Redux frontend and Node.js backend, featuring JWT authentication, Stripe payments, and comprehensive admin controls.",
      images: [ecomProject02.src, ecomProject01.src, ecomProject03.src],
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Stripe",
        "Material-UI",
      ],
      features: [
        "Secure JWT authentication",
        "Stripe payment processing",
        "Inventory management system",
        "Order tracking and management",
        "Admin dashboard with analytics",
        "Responsive shopping experience",
        "Product reviews and ratings",
        "Wishlist functionality",
      ],
      icon: Zap,
      color: "text-teal-400",
      bgColor: "bg-teal-400/10",
      github: "https://github.com/AhsanalyOfficial/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      status: "Live",
    },
    {
      title: "SSO.ID",
      category: "Authentication System",
      description:
        "Single Sign-On solution with optimized APIs and modern UI components.",
      longDescription:
        "Built an Angular-based SSO system with API optimizations, modern SCSS/Bootstrap layouts, and seamless integration capabilities for multiple applications.",
      images: [ssoProject01.src, ssoProject02.src, ssoProject03.src],
      technologies: [
        "Angular",
        "TypeScript",
        "SCSS",
        "Bootstrap",
        "Node.js",
        "JWT",
        "OAuth",
      ],
      features: [
        "Single Sign-On functionality",
        "API optimization and caching",
        "Modern Angular architecture",
        "SCSS/Bootstrap responsive design",
        "OAuth integration support",
        "Multi-application support",
        "User session management",
        "Security audit logging",
      ],
      icon: Users,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      github: "https://github.com/AhsanalyOfficial/sso-id",
      demo: "https://sso-demo.vercel.app",
      status: "Live",
    },
    {
      title: "School Management System",
      category: "Education Platform",
      description:
        "Comprehensive school management system with role-based access and intuitive UI/UX design.",
      longDescription:
        "Developed a complete school management system using HTML/JavaScript with multiple modules, role-based access control, and focus on exceptional UI/UX design.",
      images: [
        schoolProject01.src,
        schoolProject02.src,
        schoolProject03.src,
        schoolProject04.src,
      ],
      technologies: [
        "HTML5",
        "JavaScript",
        "CSS3",
        "Bootstrap",
        "PHP",
        "MySQL",
        "RBAC",
      ],
      features: [
        "Student information management",
        "Teacher and staff modules",
        "Role-based access control",
        "Grade and attendance tracking",
        "Parent-teacher communication",
        "Intuitive UI/UX design",
        "Report card generation",
        "Event calendar management",
      ],
      icon: Database,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      github: "https://github.com/AhsanalyOfficial/school-management",
      demo: "https://school-demo.vercel.app",
      status: "Live",
    },
    {
      title: "Store Web Application",
      category: "Responsive Web App",
      description:
        "Feature-rich mobile-first web application with forms, modals, and API integrations.",
      longDescription:
        "Created a responsive mobile web application with JavaScript features including dynamic forms, interactive modals, and seamless API integrations for optimal mobile experience.",
      images: [mobileProject02.src, mobileProject01.src, mobileProject03.src],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "REST APIs",
        "PWA",
      ],
      features: [
        "Mobile-first responsive design",
        "Dynamic forms with validation",
        "Interactive modal components",
        "REST API integrations",
        "Progressive Web App features",
        "Offline functionality support",
        "Push notification system",
        "Touch-optimized interactions",
      ],
      icon: Smartphone,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      github: "https://github.com/AhsanalyOfficial/mobile-web-app",
      demo: "https://mobile-demo.vercel.app",
      status: "Live",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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

        {/* Floating particles - Only render on client side */}
        {isClient && [...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full"
            initial={{
              x: Math.random() * (windowSize.width || 1200),
              y: Math.random() * (windowSize.height || 800),
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
            <Badge
              variant="outline"
              className="mb-4 bg-teal-400/10 text-teal-400 border-teal-400/30"
            >
              Featured Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                My{" "}
              </span>
              <span className="text-teal-400">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-inter">
              A showcase of diverse projects demonstrating expertise across
              different domains and technologies
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <div
                        className={`p-2 rounded-lg ${project.bgColor} bg-opacity-20`}
                      >
                        <project.icon className={`w-4 h-4 ${project.color}`} />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs bg-gray-700/50 text-gray-300 border-gray-600"
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-teal-400 transition-colors text-white">
                      {project.title}
                    </CardTitle>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-3 pt-0">
                    {/* Technologies */}
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-gray-700/50 text-gray-300 border-gray-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs bg-gray-700/50 text-gray-300 border-gray-600"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="default"
                        className="flex-1 bg-teal-400 hover:bg-teal-400 text-white"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Eye className="w-3 h-3 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${selectedProject.bgColor} bg-opacity-20`}
                  >
                    <selectedProject.icon
                      className={`w-5 h-5 ${selectedProject.color}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-xs bg-gray-700/50 text-gray-300 border-gray-600"
                    >
                      {selectedProject.category}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-6 space-y-6">
                {/* Project Images */}
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.images.map((image, index) => (
                    <motion.img
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    />
                  ))}
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-white">
                    Project Overview
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-white">
                    Key Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-white">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gray-700 text-gray-300"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {/* <div className="flex gap-4 pt-4">
                  <Button className="bg-teal-400 hover:bg-teal-400 text-white" asChild>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    asChild
                  >
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}