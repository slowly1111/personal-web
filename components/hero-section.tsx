"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Download, Calendar } from "lucide-react"
import { personalData } from "@/lib/data"
import { motion } from "framer-motion"
import { ContactModal } from "@/components/wechat-modal"
import { useState } from "react"

export function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleDownloadResume = () => {
    // 跳转到夸克网盘下载简历
    window.open("https://pan.quark.cn/s/ab86309b13b0", "_blank")
  }

  const handleScheduleMeeting = () => {
    // 打开微信二维码弹窗
    setIsContactModalOpen(true)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            {personalData.title}
          </Badge>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {personalData.name}
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {personalData.tagline}
          </motion.p>

          {/* Contact Information */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{personalData.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{personalData.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{personalData.location}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={handleDownloadResume}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-medium"
            >
              <Download className="mr-2 h-5 w-5" />
              下载简历
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleScheduleMeeting}
              className="px-8 py-3 text-base font-medium bg-transparent"
            >
              <Calendar className="mr-2 h-5 w-5" />
              安排交流
            </Button>
          </motion.div>
        </motion.div>

        {/* 微信二维码弹窗 */}
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </div>
    </section>
  )
}
