"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Download, Phone, Mail, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [activeTab, setActiveTab] = useState<'phone' | 'email' | 'wechat'>('wechat')

  const handlePhoneCall = () => {
    window.location.href = 'tel:17774374619'
  }

  const handleEmailSend = () => {
    window.location.href = 'mailto:2630115901@qq.com?subject=求职咨询&body=您好，我对您的简历很感兴趣，希望能进一步沟通。'
  }

  const handleSaveWechatQR = () => {
    const link = document.createElement('a')
    link.href = '/wechat-qr.jpg'
    link.download = '微信二维码.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-heading font-bold text-foreground">
            选择联系方式
          </DialogTitle>
        </DialogHeader>
        
        <motion.div 
          className="py-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* 联系方式选项卡 */}
          <div className="flex border-b mb-4">
            <button
              onClick={() => setActiveTab('wechat')}
              className={`flex-1 py-2 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'wechat'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <MessageCircle className="w-4 h-4 mx-auto mb-1" />
              微信
            </button>
            <button
              onClick={() => setActiveTab('phone')}
              className={`flex-1 py-2 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'phone'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Phone className="w-4 h-4 mx-auto mb-1" />
              电话
            </button>
            <button
              onClick={() => setActiveTab('email')}
              className={`flex-1 py-2 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'email'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Mail className="w-4 h-4 mx-auto mb-1" />
              邮箱
            </button>
          </div>

          {/* 联系方式内容 */}
          <div className="min-h-[200px] flex flex-col items-center justify-center space-y-4">
            {activeTab === 'wechat' && (
              <div className="text-center space-y-4">
                <div className="relative">
                  <img
                    src="/wechat-qr.jpg"
                    alt="微信二维码"
                    className="w-40 h-40 object-contain rounded-lg shadow-md mx-auto"
                  />
                </div>
                <div>
                  <p className="text-lg font-medium">微信联系</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    扫描二维码或保存图片到相册
                  </p>
                </div>
                <Button
                  onClick={handleSaveWechatQR}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  保存二维码
                </Button>
              </div>
            )}

            {activeTab === 'phone' && (
              <div className="text-center space-y-4">
                <Phone className="w-16 h-16 mx-auto text-blue-500" />
                <div>
                  <p className="text-lg font-medium">电话联系</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    点击下方按钮直接拨打电话
                  </p>
                </div>
                <Button
                  onClick={handlePhoneCall}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  拨打电话
                </Button>
              </div>
            )}

            {activeTab === 'email' && (
              <div className="text-center space-y-4">
                <Mail className="w-16 h-16 mx-auto text-green-500" />
                <div>
                  <p className="text-lg font-medium">邮箱联系</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    点击下方按钮发送邮件
                  </p>
                </div>
                <Button
                  onClick={handleEmailSend}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  发送邮件
                </Button>
              </div>
            )}
          </div>

          {/* 关闭按钮 */}
          <div className="mt-6">
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full"
            >
              关闭
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}