"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { personalData } from "@/lib/data"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award, Users } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">教育经历</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            扎实的学术基础与优异的学业表现，为产品经理职业发展奠定坚实根基
          </p>
        </motion.div>

        <div className="space-y-8">
          {personalData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 py-3 flex items-center">
                  <div className="flex w-full flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-foreground">{edu.school}</h3>
                        <p className="text-lg text-muted-foreground font-medium">{edu.degree}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Courses */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <h4 className="font-semibold text-foreground">主要课程</h4>
                      </div>
                      <div className="space-y-2">
                        {edu.courses.map((course, courseIndex) => (
                          <div key={courseIndex} className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">{course.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {course.score}分
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Honors */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="h-4 w-4 text-accent" />
                        <h4 className="font-semibold text-foreground">荣誉奖项</h4>
                      </div>
                      <div className="space-y-2">
                        {edu.honors.map((honor, honorIndex) => (
                          <div key={honorIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{honor}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Activities */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Users className="h-4 w-4 text-chart-2" />
                        <h4 className="font-semibold text-foreground">校园经历</h4>
                      </div>
                      <div className="space-y-2">
                        {edu.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-chart-2 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
