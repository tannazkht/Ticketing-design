"use client"

import {
  Bell,
  ChevronDown,
  Search,
  X,
  Filter,
  MoreVertical,
  Edit,
  Phone,
  MessageSquare,
  ImageIcon,
  Paperclip,
  Smile,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function MessagingInterface() {
  const conversations = [
    {
      id: 1,
      name: "تینا دیبا",
      subtitle: "آنلاین",
      message: "نام کاربری خودم رو روزانه میفرستید...",
      unread: 1,
      avatar: "/diverse-woman-portrait.png",
    },
    {
      id: 2,
      name: "محمد بیات",
      message: "نام کاربری خودم رو روزانه میفرستید...",
      unread: 1,
      avatar: "/man.jpg",
    },
    {
      id: 3,
      name: "آنا نادری",
      message: "نام کاربری خودم رو روزانه میفرستید...",
      unread: 3,
      avatar: "/woman-2.jpg",
    },
    {
      id: 4,
      name: "آنا نادری",
      message: "نام کاربری خودم رو روزانه میفرستید...",
      unread: 3,
      avatar: "/woman-3.jpg",
    },
    {
      id: 5,
      name: "آنا نادری",
      message: "نام کاربری خودم رو روزانه میفرستید...",
      unread: 3,
      avatar: "/woman-4.jpg",
    },
  ]

  const messages = [
    {
      id: 1,
      text: "سلام. مشکل شما در حال بررسی است. لطفا نام کاربری دقیق خود را ارسال کنید.",
      time: "13:34",
      sent: true,
    },
    { id: 2, text: "نام کاربری من ahmad.mohammadi است", time: "13:34", sent: false },
    {
      id: 3,
      text: "سلام. مشکل شما در حال بررسی است. لطفا نام کاربری دقیق خود را ارسال کنید.",
      time: "13:34",
      sent: true,
    },
    { id: 4, text: "اوکی", time: "13:34", sent: false, centered: true },
    {
      id: 5,
      text: "سلام. مشکل شما در حال بررسی است. لطفا نام کاربری دقیق خود را ارسال کنید.",
      time: "13:34",
      sent: true,
    },
    { id: 6, text: "نام کاربری من ahmad.mohammadi است", time: "13:34", sent: false },
  ]

  return (
    <div className="flex h-screen bg-[#f6f6fb]" dir="rtl">
      {/* Right Sidebar */}
      <div className="w-64 bg-[#f1f2f7] border-l border-[#e1e1e1] flex flex-col">
        <div className="p-6">
          <h1 className="text-[#273240] text-2xl font-bold mb-1">استینو</h1>
          <p className="text-[#a6abc8] text-sm">سافت</p>
        </div>

        <nav className="flex-1 px-3">
          <div className="mb-6">
            <p className="text-[#909ba5] text-xs font-medium px-3 mb-2">منو</p>
            <Button variant="ghost" className="w-full justify-end text-[#273240] hover:bg-[#e9f1fc] mb-1">
              <span className="mr-3">دانشبورد</span>
              <div className="w-8 h-8 bg-[#707fdd] rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded" />
              </div>
            </Button>
            <Button variant="ghost" className="w-full justify-end text-[#273240] hover:bg-[#e9f1fc] mb-1 relative">
              <span className="mr-3">تیکت ها</span>
              <Badge className="absolute left-3 bg-[#ff283f] text-white text-xs px-1.5 min-w-[20px] h-5">۲</Badge>
              <MessageSquare className="w-5 h-5 text-[#909ba5]" />
            </Button>
            <Button variant="ghost" className="w-full justify-end text-[#273240] hover:bg-[#e9f1fc] mb-1">
              <span className="mr-3">پیام ها</span>
              <MessageSquare className="w-5 h-5 text-[#909ba5]" />
            </Button>
            <Button variant="ghost" className="w-full justify-end text-[#273240] hover:bg-[#e9f1fc]">
              <span className="mr-3">پایگاه دانش</span>
              <MessageSquare className="w-5 h-5 text-[#909ba5]" />
            </Button>
          </div>

          <div>
            <p className="text-[#909ba5] text-xs font-medium px-3 mb-2">OTHERS</p>
            <Button variant="ghost" className="w-full justify-end text-[#273240] hover:bg-[#e9f1fc] mb-1">
              <span className="mr-3">تنظیمات</span>
              <MessageSquare className="w-5 h-5 text-[#909ba5]" />
            </Button>
            <Button variant="ghost" className="w-full justify-end text-[#273240] hover:bg-[#e9f1fc] mb-1">
              <span className="mr-3">حساب من</span>
              <MessageSquare className="w-5 h-5 text-[#909ba5]" />
            </Button>
            <Button variant="ghost" className="w-full justify-end text-[#273240] hover:bg-[#e9f1fc]">
              <span className="mr-3">کمک</span>
              <MessageSquare className="w-5 h-5 text-[#909ba5]" />
            </Button>
          </div>
        </nav>

        <div className="p-4 border-t border-[#e1e1e1]">
          <p className="text-[#909ba5] text-xs text-center">
            کلیه حقوق مادی و معنوی متعلق به شرکت راهبر سیستم استینوس میباشد
          </p>
          <p className="text-[#909ba5] text-xs text-center mt-1">نسخه 1.5 P.P</p>
        </div>
      </div>

      {/* Middle Section - Conversations List */}
      <div className="w-96 bg-white border-l border-[#e1e1e1] flex flex-col">
        <div className="p-4 border-b border-[#e1e1e1]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#909ba5]" />
              <Button variant="outline" size="sm" className="text-[#273240] border-[#c8cbd9] rounded-lg bg-transparent">
                پیام جدید
                <X className="w-4 h-4 mr-2" />
              </Button>
              <Button variant="outline" size="sm" className="text-[#273240] border-[#c8cbd9] rounded-lg bg-transparent">
                خوانده نشده
                <X className="w-4 h-4 mr-2" />
              </Button>
            </div>
            <h2 className="text-[#273240] font-semibold">گفتگو ها</h2>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#909ba5]" />
            <Input placeholder="جستجو" className="pr-4 pl-10 bg-[#f6f6fb] border-[#e1e1e1] text-right" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className="p-4 border-b border-[#e1e1e1] hover:bg-[#f6f6fb] cursor-pointer flex items-center gap-3"
            >
              <MoreVertical className="w-5 h-5 text-[#909ba5] flex-shrink-0" />
              <Badge className="bg-[#ff283f] text-white text-xs px-2 min-w-[24px] h-6 flex-shrink-0">
                {conv.unread}
              </Badge>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#273240] font-semibold text-sm mb-1">{conv.name}</h3>
                <p className="text-[#909ba5] text-xs truncate">{conv.message}</p>
              </div>
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={conv.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{conv.name[0]}</AvatarFallback>
                </Avatar>
                {conv.subtitle && <span className="text-[#909ba5] text-xs">{conv.subtitle}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="p-4 border-b border-[#e1e1e1] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-[#273240]">
              <Edit className="w-4 h-4 ml-2" />
              Edit
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <h3 className="text-[#273240] font-semibold">تینا دیبا</h3>
              <p className="text-[#909ba5] text-xs">آنلاین</p>
            </div>
            <Avatar className="w-10 h-10">
              <AvatarImage src="/diverse-woman-portrait.png" />
              <AvatarFallback>ت</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* User Info Section */}
        <div className="p-4 bg-[#f6f6fb] border-b border-[#e1e1e1]">
          <div className="flex items-center justify-between mb-3">
            <Button variant="ghost" size="sm" className="text-[#707fdd] text-sm">
              اضافه کردن اطلاعات بیشتر
              <span className="mr-2">+</span>
            </Button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <h3 className="text-[#273240] font-semibold">تینا دیبا</h3>
              </div>
              <Avatar className="w-10 h-10">
                <AvatarImage src="/diverse-woman-portrait.png" />
                <AvatarFallback>ت</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-[#909ba5]">۱۰۲۰۴۰۰۱</span>
              <span className="text-[#273240]">شناسه تیکت</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#909ba5]">۰۹۱۲۶۷۰۷۰۰</span>
              <span className="text-[#273240]">شماره همراه</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#909ba5]" />
                <span className="text-[#909ba5]">محصول</span>
              </div>
              <span className="text-[#273240]">سیستم اسناد مدارک DMS</span>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={message.centered ? "flex justify-center" : ""}>
              {message.centered ? (
                <div className="bg-[#e9f1fc] text-[#557697] text-sm px-4 py-2 rounded-lg">{message.text}</div>
              ) : message.sent ? (
                <div className="flex items-start gap-3 justify-end">
                  <Avatar className="w-8 h-8 order-1">
                    <AvatarImage src="/diverse-woman-portrait.png" />
                    <AvatarFallback>ت</AvatarFallback>
                  </Avatar>
                  <div className="max-w-md">
                    <div className="bg-[#1d7ad6] text-white p-4 rounded-2xl rounded-tl-sm">
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    <p className="text-[#909ba5] text-xs mt-1 text-left">{message.time}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <div className="max-w-md">
                    <div className="bg-[#f1f2f7] text-[#273240] p-4 rounded-2xl rounded-tr-sm">
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    <p className="text-[#909ba5] text-xs mt-1 text-right">{message.time}</p>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="flex justify-center">
            <div className="bg-[#e9f1fc] text-[#557697] text-sm px-4 py-2 rounded-lg">پیام های ناله</div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-[#e1e1e1]">
          <div className="bg-[#f6f6fb] rounded-lg p-3">
            <Input
              placeholder="پاسخ خود را بنویسید..."
              className="bg-transparent border-0 text-right mb-3 focus-visible:ring-0"
            />
            <div className="flex items-center justify-between">
              <Button className="bg-[#1d7ad6] hover:bg-[#1d577a] text-white rounded-lg px-6">
                <Send className="w-4 h-4 ml-2 rotate-180" />
                ارسال
              </Button>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="text-[#909ba5]">
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-[#909ba5]">
                  <Smile className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-[#909ba5]">
                  <ImageIcon className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-[#909ba5]">
                  <MessageSquare className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Right Header */}
      <div className="absolute top-0 left-0 right-64 p-4 flex items-center justify-between bg-white border-b border-[#e1e1e1]">
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/abstract-geometric-shapes.png" />
            <AvatarFallback>ح</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <ChevronDown className="w-4 h-4 text-[#909ba5]" />
            <span className="text-[#273240] font-medium">حساب کاربری</span>
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-[#909ba5]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#ff283f] rounded-full" />
          </Button>
        </div>
      </div>
    </div>
  )
}
