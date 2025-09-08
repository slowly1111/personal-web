"use client"

import { motion } from "framer-motion"
import { personalData } from "@/lib/data"

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      style={{ pointerEvents: "none" }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h1 className="text-4xl font-heading font-bold text-primary">{personalData.name}</h1>
          <p className="text-muted-foreground mt-2">{personalData.title}</p>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto max-w-xs"
        />
      </div>
    </motion.div>
  )
}
