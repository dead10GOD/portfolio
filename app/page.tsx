"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Camera, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  return (
    <motion.div className="container px-4 md:px-6 py-10 md:py-14" variants={container} initial="hidden" animate="show">
      <div className="flex flex-col gap-12 md:gap-20">
        <motion.section className="relative space-y-8 text-center" variants={item}>
          <div className="space-y-4">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 animate-gradient-shift bg-[length:200%_auto] dark:text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              Software Developer & Educator
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-[700px] mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.7 }}
            >
              Exploring the world of code, numbers, and new places.
              Passionate about teaching, obsessed with competitive programming, and always curious about the math behind machine learning.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.9 }}
          >
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="relative overflow-hidden group">
              <Link href="/contact">
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </Button>
          </motion.div>

          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] dark:bg-primary/10" />
        </motion.section>

        <motion.section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8" variants={item}>
          <motion.div
            className="flex flex-col items-center text-center p-8 rounded-xl glass-effect card-glow"
            variants={cardVariants}
            whileHover="hover"
          >
            <Code className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Development</h3>
            <p className="text-muted-foreground">Creating responsive, accessible, and performant web applications</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center p-8 rounded-xl glass-effect card-glow"
            variants={cardVariants}
            whileHover="hover"
            transition={{ delay: 0.1 }}
          >
            <Camera className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Photography</h3>
            <p className="text-muted-foreground">Capturing moments and telling stories through visual imagery</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center p-8 rounded-xl glass-effect card-glow"
            variants={cardVariants}
            whileHover="hover"
            transition={{ delay: 0.2 }}
          >
            <Briefcase className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Experience</h3>
            <p className="text-muted-foreground">Years of professional experience across various industries</p>
          </motion.div>
        </motion.section>

        <motion.section className="py-8 dark:bg-pattern" variants={item}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              className="flex-1 space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter">Recent Work</h2>
              <p className="text-muted-foreground">Check out some of my latest projects and collaborations</p>
              <Button asChild variant="outline" className="group">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              className="flex-1 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="aspect-square relative overflow-hidden rounded-lg card-glow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Project+${i}`}
                    alt={`Project preview ${i}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      View Project
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}
