import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Ahsan Ali - Full Stack Developer | MERN & Next.js Specialist",
  description:
    "Experienced Full Stack Developer specializing in scalable web applications. Expert in React, Next.js, Node.js, and modern web technologies. Available for freelance projects.",
  keywords: "Full Stack Developer, MERN Stack, Next.js, React, Node.js, Freelancer, Web Development, Pakistan",
  authors: [{ name: "Ahsan Ali" }],
  creator: "Ahsan Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahsan-ali-portfolio.vercel.app",
    title: "Ahsan Ali - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in scalable web applications",
    siteName: "Ahsan Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahsan Ali - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in scalable web applications",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased font-inter">{children}</body>
    </html>
  )
}
