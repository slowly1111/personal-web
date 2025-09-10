"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { personalData } from "@/lib/data"
import { motion } from "framer-motion"
import { Rocket, TrendingUp, Zap, Music } from "lucide-react"

const projectIcons = [Zap, TrendingUp, TrendingUp, Music]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">项目经历</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            把兴趣化为行动，在生活中持续探索 AI 的真实应用场景
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalData.projects.map((project, index) => {
            const IconComponent = projectIcons[index] || Rocket
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 flex flex-col">
                  <CardHeader className="pb-4 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                        {project.features && (
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2">
                                <span className="text-primary">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 mt-auto">
                    {project.metrics === "coze • agent" ? (
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                          Coze
                        </Badge>
                        <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                          Agent
                        </Badge>
                      </div>
                    ) : project.metrics === "Coze • 飞书多维表格" ? (
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                          Coze
                        </Badge>
                        <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                          飞书多维表格
                        </Badge>
                      </div>
                    ) : (
                      <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                        {project.metrics}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
