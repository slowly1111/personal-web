"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { personalData } from "@/lib/data"
import { motion } from "framer-motion"
import { Dumbbell, MapPin, Camera } from "lucide-react"

export function InterestsSection() {
  const interestCategories = [
    {
      title: "运动健身",
      icon: Dumbbell,
      items: personalData.interests.sports,
      color: "primary",
      description: "保持身体健康，培养团队协作精神",
    },
    {
      title: "旅行探索",
      icon: MapPin,
      items: personalData.interests.travel,
      color: "accent",
      description: "探索自然美景，体验不同文化",
    },
    {
      title: "摄影记录",
      icon: Camera,
      items: personalData.interests.photography,
      color: "chart-2",
      description: "用镜头捕捉美好瞬间",
    },
  ]

  return (
    <section id="interests" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">兴趣爱好</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            工作之余的多元化兴趣，展现积极向上的生活态度和全面发展的个人素养
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {interestCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-3 rounded-lg transition-colors ${
                          category.color === "primary"
                            ? "bg-primary/10 group-hover:bg-primary/20"
                            : category.color === "accent"
                              ? "bg-accent/10 group-hover:bg-accent/20"
                              : "bg-chart-2/10 group-hover:bg-chart-2/20"
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
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIndex) => (
                        <Badge
                          key={itemIndex}
                          variant="outline"
                          className={`text-sm hover:scale-105 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default ${
                            category.color === "primary"
                              ? "hover:bg-primary/15 hover:border-primary/40 hover:text-primary hover:shadow-primary/20"
                              : category.color === "accent"
                                ? "hover:bg-accent/15 hover:border-accent/40 hover:text-accent hover:shadow-accent/20"
                                : "hover:bg-chart-2/15 hover:border-chart-2/40 hover:text-chart-2 hover:shadow-chart-2/20"
                          }`}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Lifestyle Philosophy */}
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
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">生活理念</h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  相信对生活的热爱能够激发更多创造力。通过运动保持身心健康，
                  通过旅行开阔视野格局，通过摄影培养审美，这些经历都为产品工作带来了更丰富的视角和灵感。
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
