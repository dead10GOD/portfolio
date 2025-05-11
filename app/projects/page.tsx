"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with forecasts, maps, and location-based data.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "OpenWeather API", "Mapbox", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media performance across platforms.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Chart.js", "Firebase", "Material UI"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Search and discover recipes based on ingredients, dietary restrictions, and preferences.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "Vuex", "Spoonacular API", "Vuetify"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-8">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter dark:text-gradient">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-[700px]">
            A collection of my work, side projects, and open-source contributions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={item} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="overflow-hidden flex flex-col h-full card-glow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm" className="group">
                    <Link href={project.demoUrl}>
                      <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:translate-y-[-2px]" />
                      Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="group">
                    <Link href={project.githubUrl}>
                      <Github className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                      Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
