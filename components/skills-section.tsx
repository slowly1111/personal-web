"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { personalData } from "@/lib/data"
import { motion } from "framer-motion"
import { Brain, BarChart3, Wrench } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "产品/数据",
      icon: BarChart3,
      skills: personalData.skills.product,
      color: "primary",
    },
    {
      title: "AI/算法素养",
      icon: Brain,
      skills: personalData.skills.ai,
      color: "accent",
    },
    {
      title: "工具技能",
      icon: Wrench,
      skills: personalData.skills.tools,
      color: "chart-2",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">技能矩阵</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            具备全面的产品技能，从数据分析到AI算法，再到各类专业工具的熟练运用
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-lg ${
                          category.color === "primary"
                            ? "bg-primary/10"
                            : category.color === "accent"
                              ? "bg-accent/10"
                              : "bg-chart-2/10"
                        }`}
                      >
                        <IconComponent
                          className={`h-6 w-6 ${
                            category.color === "primary"
                              ? "text-primary"
                              : category.color === "accent"
                                ? "text-accent"
                                : "text-chart-2"
                          }`}
                        />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground">{category.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className={`text-sm hover:scale-105 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default ${
                            category.color === "primary"
                              ? "hover:bg-primary/15 hover:border-primary/40 hover:text-primary hover:shadow-primary/20"
                              : category.color === "accent"
                                ? "hover:bg-accent/15 hover:border-accent/40 hover:text-accent hover:shadow-accent/20"
                                : "hover:bg-chart-2/15 hover:border-chart-2/40 hover:text-chart-2 hover:shadow-chart-2/20"
                          }`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">核心优势</h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  结合AI技术背景与产品实践经验，擅长将前沿技术转化为用户价值，
                  通过数据驱动的方法论持续优化产品体验，实现业务增长目标。
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
