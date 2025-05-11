"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const socialIcons = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/dead10GOD?tab=repositories", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/sankalp-prajapati-592b50278/", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  ]

  return (
    <motion.footer
      className="border-t"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 md:px-6 py-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-3" variants={item}>
            <h3 className="text-lg font-semibold">Sankalp</h3>
            <p className="text-sm text-muted-foreground">
              A showcase of my work, skills, and experience as a software developer and photographer.
            </p>
          </motion.div>
          <motion.div className="space-y-3" variants={item}>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="/photography" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Photography
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </motion.div>
          <motion.div className="space-y-3" variants={item}>
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.div key={social.label} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                  <Link href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>© {new Date().getFullYear()} Sankalp Prajapati. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
