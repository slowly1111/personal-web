"use client"

import { Card, CardContent } from "@/components/ui/card"
import { personalData } from "@/lib/data"
import { motion } from "framer-motion"
import { Trophy, Star, Medal } from "lucide-react"

export function HonorsSection() {
  const honorIcons = [Trophy, Star, Medal]

  return (
    <section id="honors" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">荣誉成就</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            在学术和竞赛中取得的优异成绩，体现了持续学习和追求卓越的能力
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalData.honors.map((honor, index) => {
            const IconComponent = honorIcons[index] || Trophy
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-4 leading-relaxed">{honor}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">学术表现总结</h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  在本科和硕士阶段均保持优异的学术表现，专业排名稳居前列，
                  多次获得奖学金认可，并在全国性竞赛中取得佳绩，展现了扎实的学术基础和持续进步的能力。
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
