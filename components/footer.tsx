"use client"

import { personalData } from "@/lib/data"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{personalData.name}</h3>
            <p className="text-muted-foreground">{personalData.title}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
            <span>{personalData.location}</span>
            <span className="hidden sm:inline">•</span>
            <span>{personalData.email}</span>
            <span className="hidden sm:inline">•</span>
            <span>{personalData.phone}</span>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <p className="text-sm text-muted-foreground">© 2025 {personalData.name}. 用AI赋能产品，用热爱赋能自己</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
