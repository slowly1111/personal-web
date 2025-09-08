"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { personalData } from "@/lib/data"
import { motion } from "framer-motion"
import { Target, Wrench } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">关于我</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            专注于AI驱动的产品创新，致力于通过技术提升用户体验和业务效率
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="relative w-64 h-64 mx-auto mb-6">
                    <img 
                      src="/profile-photo.jpg" 
                      alt={personalData.name}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{personalData.name}</h3>
                  <p className="text-lg text-muted-foreground">{personalData.title}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info Cards */}
          <div className="space-y-8">
            {/* Keywords */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">核心领域</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {personalData.about.keywords.map((keyword, index) => (
                      <Badge key={index} variant="secondary" className="text-sm hover:scale-105 hover:shadow-md hover:-translate-y-0.5 hover:bg-primary/15 hover:text-primary transition-all duration-300 cursor-default">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-chart-2/10 rounded-lg">
                      <Wrench className="h-5 w-5 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">常用工具</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {personalData.about.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="text-xs hover:scale-105 hover:shadow-md hover:-translate-y-0.5 hover:bg-chart-2/15 hover:border-chart-2/40 hover:text-chart-2 hover:shadow-chart-2/20 transition-all duration-300 cursor-default">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
