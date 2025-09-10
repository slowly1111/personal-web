"use client"

import { personalData } from "@/lib/data"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base text-muted-foreground">
            <span>{personalData.name}</span>
            <span className="hidden sm:inline">•</span>
            <span>{personalData.phone}</span>
            <span className="hidden sm:inline">•</span>
            <span>{personalData.email}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
