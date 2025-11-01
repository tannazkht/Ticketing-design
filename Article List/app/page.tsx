"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  Search,
  MoreVertical,
  Download,
  Eye,
  Edit,
  ChevronDown,
  Bell,
  LayoutDashboard,
  Ticket,
  MessageSquare,
  BookOpen,
  Settings,
  User,
  HelpCircle,
  Plus,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PersianDashboard() {
  const [activeTab, setActiveTab] = useState("articles")

  // Sample data for the table
  const articles = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: `#4F04F3001`,
      title: "عنوان مقاله",
      views: "۱۱۶",
      status: i < 5 ? "review" : "reviewed",
      date: "۱۴۰۴/۰۳/۰۶",
    }))

  return (
    <div className="min-h-screen bg-[#f6f6fb] rtl" dir="rtl">
      {/* Top Header */}
      <header className="bg-white border-b border-[#e5e5e5] px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 hover:opacity-80">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder.svg?height=36&width=36" />
                <AvatarFallback>کا</AvatarFallback>
              </Avatar>
              <span className="text-[#273240] text-sm font-medium">حساب کاربری</span>
              <ChevronDown className="h-4 w-4 text-[#627b87]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>پروفایل</DropdownMenuItem>
              <DropdownMenuItem>تنظیمات</DropdownMenuItem>
              <DropdownMenuItem>خروج</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button className="relative p-2 hover:bg-[#f1f2f7] rounded-lg">
            <Bell className="h-5 w-5 text-[#627b87]" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-[#ec5252] rounded-full"></span>
          </button>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#909ba5]" />
            <Input placeholder="جستجو" className="pr-10 bg-[#f6f6fb] border-[#e5e5e5] text-right" />
          </div>
        </div>

        <div className="text-left">
          <div className="text-[#627b87] text-sm">استخدام</div>
          <div className="text-[#273240] font-semibold">سافت</div>
        </div>
      </header>

      <div className="flex">
        {/* Right Sidebar */}
        <aside className="w-64 bg-white border-l border-[#e5e5e5] min-h-[calc(100vh-60px)] p-4">
          <nav className="space-y-1">
            <div className="text-[#909ba5] text-xs font-medium px-3 py-2">منو</div>
            <Button variant="ghost" className="w-full justify-end gap-3 text-white bg-[#707fdd] hover:bg-[#707fdd]/90">
              <span>داشبورد</span>
              <LayoutDashboard className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="w-full justify-end gap-3 text-[#627b87] hover:bg-[#f1f2f7]">
              <span>تیکت ها</span>
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="w-full justify-end gap-3 text-[#ec5252] hover:bg-[#f1f2f7]">
              <span className="flex items-center gap-2">
                <span className="bg-[#ec5252] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  ۳
                </span>
                <span className="text-[#ec5252]">تیکت جدید</span>
              </span>
              <Ticket className="h-5 w-5 text-[#ec5252]" />
            </Button>
            <Button variant="ghost" className="w-full justify-end gap-3 text-[#627b87] hover:bg-[#f1f2f7]">
              <span>پیام ها</span>
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="w-full justify-end gap-3 text-[#627b87] hover:bg-[#f1f2f7]">
              <span>پایگاه دانش</span>
              <BookOpen className="h-5 w-5" />
            </Button>

            <div className="pt-6">
              <div className="text-[#909ba5] text-xs font-medium px-3 py-2">OTHERS</div>
              <Button variant="ghost" className="w-full justify-end gap-3 text-[#627b87] hover:bg-[#f1f2f7]">
                <span>تنظیمات</span>
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" className="w-full justify-end gap-3 text-[#627b87] hover:bg-[#f1f2f7]">
                <span>حساب من</span>
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" className="w-full justify-end gap-3 text-[#627b87] hover:bg-[#f1f2f7]">
                <span>کمک</span>
                <HelpCircle className="h-5 w-5" />
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab("articles")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "articles" ? "bg-white text-[#273240] shadow-sm" : "text-[#627b87] hover:bg-white/50"
              }`}
            >
              مقالات آموزشی
            </button>
            <button
              onClick={() => setActiveTab("forum")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "forum" ? "bg-white text-[#273240] shadow-sm" : "text-[#627b87] hover:bg-white/50"
              }`}
            >
              انجمن پرسش و پاسخ
            </button>
          </div>

          {/* Articles Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px] text-right">
                    <SelectValue placeholder="وضعیت" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">همه</SelectItem>
                    <SelectItem value="review">درحال بررسی</SelectItem>
                    <SelectItem value="reviewed">بررسی شده</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-10 w-10 bg-transparent">
                    <Calendar className="h-4 w-4" />
                  </Button>
                  <span className="text-[#627b87] text-sm">تا تاریخ</span>
                  <span className="text-[#627b87]">—</span>
                  <span className="text-[#627b87] text-sm">از تاریخ</span>
                  <Button variant="outline" size="icon" className="h-10 w-10 bg-transparent">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>

                <div className="relative">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#909ba5]" />
                  <Input placeholder="جستجو" className="pr-10 w-[200px] text-right" />
                </div>
              </div>

              <Button className="bg-[#0080c9] hover:bg-[#0080c9]/90 text-white gap-2">
                <span>مقاله جدید</span>
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Table */}
            <div className="border border-[#e5e5e5] rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#f6f6fb]">
                  <tr className="text-[#627b87] text-sm">
                    <th className="px-4 py-3 text-right font-medium">عملیات</th>
                    <th className="px-4 py-3 text-right font-medium">آخرین بروزرسانی</th>
                    <th className="px-4 py-3 text-right font-medium">وضعیت</th>
                    <th className="px-4 py-3 text-right font-medium">تعداد بازدید</th>
                    <th className="px-4 py-3 text-right font-medium">عنوان مقاله</th>
                    <th className="px-4 py-3 text-center font-medium w-12">
                      <Checkbox />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article, index) => (
                    <tr key={index} className="border-t border-[#e5e5e5] hover:bg-[#f6f6fb]/50">
                      <td className="px-4 py-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="gap-2">
                              <Download className="h-4 w-4" />
                              <span>دانلود</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              <Eye className="h-4 w-4" />
                              <span>مشاهده</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              <Edit className="h-4 w-4" />
                              <span>ویرایش</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                      <td className="px-4 py-4 text-[#273240] text-sm">{article.date}</td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                            article.status === "review"
                              ? "border-[#707fdd] text-[#707fdd] bg-[#707fdd]/5"
                              : "border-[#216244] text-[#216244] bg-[#216244]/5"
                          }`}
                        >
                          {article.status === "review" ? "درحال بررسی" : "بررسی شده"}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-[#273240] text-sm">{article.views}</td>
                      <td className="px-4 py-4 text-[#273240] text-sm">{article.id}</td>
                      <td className="px-4 py-4 text-center">
                        <Checkbox />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <div className="text-[#627b87] text-sm">نمایش</div>
              <div className="flex items-center gap-2">
                <Select defaultValue="10">
                  <SelectTrigger className="w-[70px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">۱۰</SelectItem>
                    <SelectItem value="20">۲۰</SelectItem>
                    <SelectItem value="50">۵۰</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-[#627b87] text-sm">از صفحه</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-[#909ba5] text-xs">
            کلیه حقوق مادی و معنوی متعلق به شرکت راهبرد سیستم استانس میباشد
          </div>
        </main>
      </div>
    </div>
  )
}
