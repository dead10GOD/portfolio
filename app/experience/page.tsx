import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      role: "Summer Intern - Machine Learning Engineer",
      company: "Digital India Corporation (DIC)",
      period: "05/2024 – 07/2024",
      description:
        "Summer Intern at Digital India Corporation, contributing to security enhancements in DigiLocker and Entity Locker through AI-driven anti-spoofing solutions.",
      responsibilities: [
        "Developed and fine-tuned CNN models with over 92% accuracy to detect and prevent facial image spoofing attacks.",
        "Applied advanced image processing techniques, including LBP and FFT-based feature extraction, to improve spoof detection reliability.",
        "Trained models using a diverse dataset of 10,000+ real and spoofed facial images to ensure robustness against varied attack types.",
        "Collaborated in a cross-functional team to integrate anti-spoofing modules into existing infrastructure, improving overall system security.",
      ],
      technologies: ["Python", "OpenCV", "NumPy", "Pandas", "Matplotlib", "Git", "PyTorch"],
    },
    {
      id: 2,
      role: "Teaching Assistant",
      company: "KIIT University",
      period: "11/2024 – present",
      description: "Teaching Assistant at KIIT University, mentoring first-year B.Tech students in C programming and Mathematics with a focus on conceptual clarity and practical application.",
      responsibilities: [
        "Conducted weekly lab sessions and tutorials for 70+ students, ensuring hands-on coding practice and conceptual reinforcement.",
        "Provided one-on-one mentorship to 15+ students struggling with core concepts, leading to higher retention and exam success.",
        "Assisted faculty in curating curriculum-aligned materials, including problem sets and mini-projects, to enhance applied learning.",
      ],
      technologies: ["C/C++", "In-Person Teaching", "Curriculum Development", "Mentorship"],
    },
    {
      id: 3,
      role: "PR/Marketing Lead and CP member",
      company: "Coding Ninjas Club",
      period: "06/2024 – 10/2024",
      description:
        "PR/Marketing Lead at Coding Ninjas Club, spearheading sponsorships and strategic outreach to boost campus presence and community engagement.",
      responsibilities: [
        "Secured 5+ sponsorships and partnerships, contributing to a 40% increase in event funding and reach.",
        "Led a team of 8+ members, delegating tasks across marketing, content, and outreach for seamless event execution.",
        "Organized 3+ high-impact coding events/workshops, attracting 200+ participants across departments.",
        "Implemented targeted marketing campaigns across social platforms, increasing engagement by 60% over the campaign period.",
      ],
      technologies: ["NA"],
    },
  ]

  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Kalinga Institute of Industrial Technology (KIIT)",
      period: "2022 - 2026",
      description: "Specialized in Web Technologies and Human-Computer Interaction",
      achievements: [
        "Strengthened security in DigiLocker and Entity Locker by implementing CNN-based anti-spoofing measures using advanced image processing and diverse datasets.",
        "Led PR and marketing for Coding Ninjas Club, securing sponsorships and driving visibility through strategic partnerships and team coordination.",
      ],
    },
    
  ]

  return (
    <div className="container px-4 md:px-6 py-10 md:py-14">
      <div className="space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Experience</h1>
          <p className="text-xl text-muted-foreground max-w-[700px]">My professional journey and career highlights.</p>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card key={exp.id}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle>{exp.role}</CardTitle>
                      <CardDescription className="text-base">
                        {exp.company} | {exp.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{exp.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.id}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription className="text-base">
                        {edu.institution} | {edu.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{edu.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
