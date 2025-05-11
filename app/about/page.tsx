"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="container px-4 md:px-6 py-10 md:py-14 dark:bg-pattern"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
          <motion.h1 className="text-4xl md:text-5xl font-bold tracking-tighter dark:text-gradient" variants={item}>
            A little bit about me
          </motion.h1>
          <motion.div className="space-y-4 text-lg" variants={item}>
            <p>
            👋 Hey there, I'm Sankalp!, I&apos;m a Computer Science undergrad at KIIT University with a passion for building secure, scalable, and smart tech solutions. 
            From developing AI-powered anti-spoofing systems at <span className="font-semibold text-primary">Digital India Corporation</span> to mentoring first-year students in C programming and Mathematics, I love combining logic with impact.
            </p>
            <p>
            I’ve led marketing at <span className="font-semibold text-primary">Coding Ninjas Club</span>, secured strategic partnerships, and helped boost campus engagement. My projects range from image spoof detection using CNNs to app development for civic engagement as part of
            <span className="font-semibold text-primary">Smart India Hackathon.</span>
            </p>
            <p>When I’m not coding or teaching, you’ll find me playing guitar, or crushing it on the badminton court. I also play a mean game of chess</p>
          </motion.div>

          <motion.div className="grid grid-cols-3 gap-6 pt-6" variants={item}>
            <div>
              <h3 className="font-semibold text-lg mb-3">Work Experience</h3>
              <ul className="space-y-3">
                <motion.li className="transition-all hover:translate-x-1" whileHover={{ scale: 1.02 }}>
                  <p className="font-medium">Summer Intern - Machine Learning Engineer</p>
                  <p className="text-sm text-muted-foreground">at DIC | 05/2024 – 07/2024
                  </p>
                </motion.li>
                <motion.li className="transition-all hover:translate-x-1" whileHover={{ scale: 1.02 }}>
                  <p className="font-medium">Teaching Assistant</p>
                  <p className="text-sm text-muted-foreground">at KIIT| 11/2024 – present</p>
                </motion.li>
                <motion.li className="transition-all hover:translate-x-1" whileHover={{ scale: 1.02 }}>
                  <p className="font-medium">PR/Marketing Lead and CP member</p>
                  <p className="text-sm text-muted-foreground">at Coding Ninjas Club | 06/2024 – 10/2024</p>
                </motion.li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Dev Stack</h3>
              <ul className="space-y-3">
                {/* <motion.li className="transition-all hover:translate-x-1" whileHover={{ scale: 1.02 }}>
                  React-Native
                </motion.li> */}
                <motion.li className="transition-all hover:translate-x-1" whileHover={{ scale: 1.02 }}>
                  Python
                </motion.li>
                <motion.li className="transition-all hover:translate-x-1" whileHover={{ scale: 1.02 }}>
                  Pandas
                </motion.li>
                <motion.li className="transition-all hover:translate-x-1" whileHover={{ scale: 1.02 }}>
                  NumPy
                </motion.li>
                <motion.li className="transition-all hover:translate-x-1" whileHover={{ scale: 1.02 }}>
                  OpenCV
                </motion.li>
                <motion.li className="transition-all hover:translate-x-1" whileHover={{ scale: 1.02 }}>
                  Matplotlib
                </motion.li>
                <motion.li className="transition-all hover:translate-x-1" whileHover={{ scale: 1.02 }}>
                  Git
                </motion.li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Featured On</h3>
              <ul className="space-y-3">
                <motion.li whileHover={{ scale: 1.05 }}>
                  <Link href="#" className="text-primary hover:underline">
                    NA
                  </Link>
                </motion.li>
                
              </ul>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            className="relative h-[400px] w-full md:h-[500px] rounded-lg overflow-hidden shadow-lg dark:glow-effect"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Profile image"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -left-6 h-[200px] w-[200px] rounded-lg overflow-hidden border-4 border-background shadow-lg rotate-6 dark:glow-effect"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ rotate: 0 }}
          >
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Secondary profile image"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
