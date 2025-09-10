"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { personalData } from "@/lib/data"
import { motion } from "framer-motion"
import { Building2, Calendar, TrendingUp } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">实习经历</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            在多家头部互联网公司实践 AI 产品落地，积累 ToC 与 ToB 产品策划与增长经验；
          </p>
        </motion.div>

        <div className="space-y-8">
          {personalData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 py-3 flex items-center">
                  <div className="flex w-full flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-foreground">{exp.company}</h3>
                        <p className="text-muted-foreground font-medium">{exp.position}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-3">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-accent">主要成就</span>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
