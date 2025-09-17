// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Building2, Calendar, MapPin, Code2 } from "lucide-react"

// export function ExperienceSection() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   }

//   const lineVariants = {
//     hidden: { height: 0 },
//     visible: {
//       height: "100%",
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut",
//       },
//     },
//   }

//   const experiences = [
//     {
//       company: "Haraz Co.",
//       position: "Full Stack Developer",
//       duration: "Jan 2025 – Present",
//       location: "Remote",
//       type: "Current Role",
//       description: "Leading the development of scalable web applications using modern technologies and best practices.",
//       achievements: [
//         "Led development of scalable web applications using Next.js, NestJS, and PostgreSQL",
//         "Collaborated with cross-functional teams to deliver user-centric solutions",
//         "Implemented complex API integrations including Stripe payments and OAuth authentication",
//         "Refactored legacy code resulting in 40% performance improvement",
//         "Architected microservices architecture for better scalability",
//         "Mentored junior developers and conducted code reviews",
//       ],
//       technologies: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "OAuth", "TypeScript", "Docker"],
//       icon: Building2,
//       color: "text-green-500",
//       bgColor: "bg-green-500/10",
//     },
//     {
//       company: "Asian Solutions Pvt. Ltd.",
//       position: "MERN Stack Developer",
//       duration: "Oct 2022 – Dec 2024",
//       location: "Lahore, Pakistan",
//       type: "Full-time",
//       description: "Developed and maintained full-stack web applications using the MERN stack.",
//       achievements: [
//         "Developed 15+ MERN stack applications from concept to deployment",
//         "Integrated third-party APIs and payment gateways for e-commerce platforms",
//         "Collaborated with UI/UX designers to implement pixel-perfect designs",
//         "Conducted comprehensive code reviews and mentored 3 junior developers",
//         "Optimized database queries resulting in 30% faster load times",
//         "Implemented automated testing reducing bugs by 25%",
//       ],
//       technologies: ["React", "Node.js", "MongoDB", "Express.js", "Redux", "JavaScript", "AWS"],
//       icon: Code2,
//       color: "text-teal-400",
//       bgColor: "bg-teal-400/10",
//     },
//   ]

//   return (
//     <section id="experience" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
//         <div className="absolute inset-0 opacity-20">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
//               `,
//               backgroundSize: "50px 50px",
//             }}
//           />
//         </div>

//         {/* Floating particles */}
//         {[...Array(10)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-teal-400 rounded-full"
//             initial={{
//               x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
//               y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
//               opacity: 0,
//             }}
//             animate={{
//               y: [null, -100],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: 4 + Math.random() * 2,
//               repeat: Number.POSITIVE_INFINITY,
//               delay: Math.random() * 3,
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* Section Header */}
//           <motion.div variants={itemVariants} className="text-center mb-16">
//             <Badge variant="outline" className="mb-4 bg-teal-400/10 text-red-400 border-teal-400/30">
//               Professional Experience
//             </Badge>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
//               <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                 My Professional{" "}
//               </span>
//               <span className="text-teal-400">Journey</span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto font-inter">
//               Building impactful solutions and leading teams across diverse projects and technologies
//             </p>
//           </motion.div>

//           {/* Timeline */}
//           <div className="relative">
//             {/* Timeline Line */}
//             <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal-400/30 md:transform md:-translate-x-0.5">
//               <motion.div variants={lineVariants} className="w-full bg-teal-400" style={{ transformOrigin: "top" }} />
//             </div>

//             {/* Experience Items */}
//             <div className="space-y-12">
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={exp.company}
//                   variants={itemVariants}
//                   className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
//                 >
//                   {/* Timeline Dot */}
//                   <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-teal-400 rounded-full border-4 border-gray-900 md:transform md:-translate-x-1/2 z-10">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       whileInView={{ scale: 1 }}
//                       transition={{ delay: 0.5 }}
//                       viewport={{ once: true }}
//                       className="w-full h-full bg-teal-400 rounded-full"
//                     />
//                   </div>

//                   {/* Content Card */}
//                   <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
//                     <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
//                       <Card className="hover:shadow-xl transition-shadow bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
//                         <CardHeader>
//                           <div className="flex items-start justify-between mb-2">
//                             <div className={`p-3 rounded-lg ${exp.bgColor} bg-opacity-20`}>
//                               <exp.icon className={`w-6 h-6 ${exp.color}`} />
//                             </div>
//                             <Badge
//                               variant={exp.type === "Current Role" ? "default" : "secondary"}
//                               className={
//                                 exp.type === "Current Role" ? "bg-teal-400 text-white" : "bg-gray-700 text-gray-300"
//                               }
//                             >
//                               {exp.type}
//                             </Badge>
//                           </div>
//                           <CardTitle className="text-xl text-white">{exp.position}</CardTitle>
//                           <div className="space-y-1 text-sm text-gray-400">
//                             <div className="flex items-center gap-2">
//                               <Building2 className="w-4 h-4" />
//                               <span className="font-medium text-gray-300">{exp.company}</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               <Calendar className="w-4 h-4" />
//                               <span>{exp.duration}</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               <MapPin className="w-4 h-4" />
//                               <span>{exp.location}</span>
//                             </div>
//                           </div>
//                         </CardHeader>
//                         <CardContent>
//                           <p className="text-gray-400 mb-4">{exp.description}</p>

//                           {/* Key Achievements */}
//                           <div className="mb-4">
//                             <h4 className="font-semibold mb-3 text-white">Key Achievements:</h4>
//                             <ul className="space-y-2">
//                               {exp.achievements.map((achievement, achIndex) => (
//                                 <motion.li
//                                   key={achIndex}
//                                   initial={{ opacity: 0, x: -20 }}
//                                   whileInView={{ opacity: 1, x: 0 }}
//                                   transition={{ delay: achIndex * 0.1 }}
//                                   viewport={{ once: true }}
//                                   className="flex items-start gap-2 text-sm"
//                                 >
//                                   <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
//                                   <span className="text-gray-300">{achievement}</span>
//                                 </motion.li>
//                               ))}
//                             </ul>
//                           </div>

//                           {/* Technologies */}
//                           <div>
//                             <h4 className="font-semibold mb-3 text-white">Technologies Used:</h4>
//                             <div className="flex flex-wrap gap-2">
//                               {exp.technologies.map((tech, techIndex) => (
//                                 <motion.div
//                                   key={tech}
//                                   initial={{ opacity: 0, scale: 0 }}
//                                   whileInView={{ opacity: 1, scale: 1 }}
//                                   transition={{ delay: techIndex * 0.05 }}
//                                   viewport={{ once: true }}
//                                 >
//                                   <Badge
//                                     variant="outline"
//                                     className="text-xs bg-gray-700/50 text-gray-300 border-gray-600"
//                                   >
//                                     {tech}
//                                   </Badge>
//                                 </motion.div>
//                               ))}
//                             </div>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
