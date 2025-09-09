"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { personalData } from "@/lib/data"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Download, Calendar, MessageCircle, Copy } from "lucide-react"
import { ContactModal } from "@/components/wechat-modal"
import { useState } from "react"

export function ContactSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleDownloadResume = () => {
    // 跳转到夸克网盘下载简历
    window.open("https://pan.quark.cn/s/ab86309b13b0", "_blank")
  }

  const handleScheduleMeeting = () => {
    // 打开微信二维码弹窗
    setIsContactModalOpen(true)
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${personalData.email}`
  }

  const handlePhoneClick = () => {
    window.location.href = `tel:${personalData.phone}`
  }

  const handleCopyPhone = async (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(personalData.phone)
      // 可以添加toast提示
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(personalData.email)
      // 可以添加toast提示
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">联系我</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            期待与您进一步交流，共同探讨AI产品的创新机会
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">联系方式</h3>
                </div>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                    onClick={handlePhoneClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">手机号码</p>
                      <p className="font-medium text-foreground text-lg">{personalData.phone}</p>
                      <p className="text-xs text-muted-foreground mt-1">点击拨打 • 点击右侧复制</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopyPhone}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-2 h-8 w-8"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                    onClick={handleEmailClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">邮箱地址</p>
                      <p className="font-medium text-foreground text-lg">{personalData.email}</p>
                      <p className="text-xs text-muted-foreground mt-1">点击发送邮件 • 点击右侧复制</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopyEmail}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-2 h-8 w-8"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </motion.div>

                  <div className="flex items-center gap-4 p-4 rounded-lg">
                    <div className="p-2 bg-chart-2/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-chart-2" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">所在地点</p>
                      <p className="font-medium text-foreground">{personalData.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">开始合作</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    如果您对我的经历感兴趣，欢迎下载我的详细简历， 或者直接安排一次深入的交流会议。
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    onClick={handleDownloadResume}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base font-medium"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    下载简历
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleScheduleMeeting}
                    className="w-full py-3 text-base font-medium border-primary/30 hover:bg-primary/10 bg-transparent"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    安排交流
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-center text-sm text-muted-foreground">期待与您的进一步沟通交流</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      {/* 微信二维码弹窗 */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  )
}
