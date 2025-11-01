import { Bell, Search, Plus, Calendar, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function TicketDashboard() {
  return (
    <div className="min-h-screen bg-[#f6f6fb] flex" dir="rtl">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-l border-[#e5e5e5] flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#e5e5e5]">
          <div className="text-right">
            <div className="text-[#707fdd] text-lg font-semibold">استیشن</div>
            <div className="text-[#707fdd] text-lg font-semibold">سافت</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="mb-2 text-xs text-[#a6abc8] px-3">منو</div>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#707fdd] text-white mb-1">
            <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="text-sm">داشبورد</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#627b87] hover:bg-[#f1f2f7] mb-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-current rounded-sm"></div>
            </div>
            <span className="text-sm">تیکت ها</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#627b87] hover:bg-[#f1f2f7] mb-1">
            <div className="w-5 h-5 bg-[#ec5252] rounded-full flex items-center justify-center">
              <Plus className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm">تیکت جدید</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#627b87] hover:bg-[#f1f2f7] mb-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-current rounded-full"></div>
            </div>
            <span className="text-sm">پایگاه دانش</span>
          </a>

          <div className="mt-6 mb-2 text-xs text-[#a6abc8] px-3">OTHERS</div>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#627b87] hover:bg-[#f1f2f7] mb-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-current rounded"></div>
            </div>
            <span className="text-sm">تنظیمات</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#627b87] hover:bg-[#f1f2f7] mb-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-current rounded"></div>
            </div>
            <span className="text-sm">حساب من</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#627b87] hover:bg-[#f1f2f7]">
            <div className="w-5 h-5 flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-current rounded"></div>
            </div>
            <span className="text-sm">کمک</span>
          </a>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#e5e5e5] text-center">
          <img src="/station-soft-logo.jpg" alt="Logo" className="mx-auto opacity-50" />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-[#e5e5e5] px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5 text-[#627b87]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#ec5252] rounded-full"></span>
              </Button>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-[#273240]">حساب کاربری</div>
                </div>
                <ChevronDown className="w-4 h-4 text-[#627b87]" />
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/diverse-user-avatars.png" />
                  <AvatarFallback>کا</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a6abc8]" />
                <Input placeholder="جستجو" className="pr-10 bg-[#f6f6fb] border-0 text-right" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8 overflow-auto">
          {/* Submit Ticket Button */}
          <div className="mb-6">
            <Button className="bg-[#0080d8] hover:bg-[#0080d8]/90 text-white gap-2">
              <Plus className="w-4 h-4" />
              ثبت تیکت
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-5 gap-4 mb-8">
            <Card className="p-6 text-center border-[#e5e5e5]">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#f1f2f7] flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-[#707fdd] rounded"></div>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#273240] mb-2">۲۴</div>
              <div className="text-sm text-[#627b87]">کل تیکت ها</div>
            </Card>

            <Card className="p-6 text-center border-[#e5e5e5]">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#f1f2f7] flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-[#ec5252] rounded-full"></div>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#ec5252] mb-2">۴</div>
              <div className="text-sm text-[#627b87]">تیکت های اولویت بالا</div>
            </Card>

            <Card className="p-6 text-center border-[#e5e5e5]">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#f1f2f7] flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-[#0080d8] rounded-full"></div>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#0080d8] mb-2">۴</div>
              <div className="text-sm text-[#627b87]">تیکت های جدید</div>
            </Card>

            <Card className="p-6 text-center border-[#e5e5e5]">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#f1f2f7] flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-[#e26900] rounded-full"></div>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#e26900] mb-2">۱۵</div>
              <div className="text-sm text-[#627b87]">درحال بررسی</div>
            </Card>

            <Card className="p-6 text-center border-[#e5e5e5]">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#f1f2f7] flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-[#27875b] rounded-full">
                    <svg className="w-full h-full" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M6 10L9 13L14 7"
                        stroke="#27875b"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#27875b] mb-2">۸</div>
              <div className="text-sm text-[#627b87]">حل شده</div>
            </Card>
          </div>

          {/* Recent Tickets */}
          <div>
            <h2 className="text-xl font-semibold text-[#273240] mb-4">تیکت های اخیر</h2>

            {/* Filters */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a6abc8]" />
                  <Input placeholder="جستجو" className="pr-10 bg-white border-[#e5e5e5] text-right w-64" />
                </div>

                <div className="flex items-center gap-2 px-4 py-2 border border-[#e5e5e5] rounded-lg bg-white">
                  <span className="text-sm text-[#627b87]">از تاریخ</span>
                  <Calendar className="w-4 h-4 text-[#a6abc8]" />
                </div>

                <span className="text-[#a6abc8]">←</span>

                <div className="flex items-center gap-2 px-4 py-2 border border-[#e5e5e5] rounded-lg bg-white">
                  <span className="text-sm text-[#627b87]">تا تاریخ</span>
                  <Calendar className="w-4 h-4 text-[#a6abc8]" />
                </div>

                <Button variant="outline" className="gap-2 border-[#e5e5e5] bg-transparent">
                  <span className="text-sm text-[#627b87]">وضعیت</span>
                  <ChevronDown className="w-4 h-4 text-[#a6abc8]" />
                </Button>
              </div>
            </div>

            {/* Ticket List */}
            <div className="space-y-4">
              {/* Ticket 1 */}
              <Card className="p-6 border-[#e5e5e5]">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-[#ec5252]/10 text-[#ec5252] border-[#ec5252]/20">
                      فوری
                    </Badge>
                    <Badge variant="outline" className="bg-[#0080d8]/10 text-[#0080d8] border-[#0080d8]/20">
                      درحال بررسی
                    </Badge>
                  </div>
                  <span className="text-sm text-[#0080d8] font-medium">#۲۰۲۴۰۰۱</span>
                </div>
                <h3 className="text-base font-semibold text-[#273240] mb-2 text-right">موضوع : کندی در اپلود فایل</h3>
                <p className="text-sm text-[#627b87] mb-4 text-right">محصول: DMS - سیستم مدیریت اسناد و مدارک</p>
                <div className="flex justify-between text-xs text-[#a6abc8]">
                  <span>آخرین بروزرسانی: ۱۴:۲۰ - ۱۴۰۳/۰۷/۱۵</span>
                  <span>ایجاد: ۹:۳۰ - ۱۴۰۳/۰۷/۱۵</span>
                </div>
              </Card>

              {/* Ticket 2 */}
              <Card className="p-6 border-[#e5e5e5]">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-[#e26900]/10 text-[#e26900] border-[#e26900]/20">
                      متوسط
                    </Badge>
                    <Badge variant="outline" className="bg-[#27875b]/10 text-[#27875b] border-[#27875b]/20">
                      بررسی شده
                    </Badge>
                  </div>
                  <span className="text-sm text-[#0080d8] font-medium">#۲۰۲۴۰۰۱</span>
                </div>
                <h3 className="text-base font-semibold text-[#273240] mb-2 text-right">موضوع : کندی در اپلود فایل</h3>
                <p className="text-sm text-[#627b87] mb-4 text-right">محصول: DMS - سیستم مدیریت اسناد و مدارک</p>
                <div className="flex justify-between text-xs text-[#a6abc8]">
                  <span>آخرین بروزرسانی: ۱۴:۲۰ - ۱۴۰۳/۰۷/۱۵</span>
                  <span>ایجاد: ۹:۳۰ - ۱۴۰۳/۰۷/۱۵</span>
                </div>
              </Card>

              {/* Ticket 3 */}
              <Card className="p-6 border-[#e5e5e5]">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-[#627b87]/10 text-[#627b87] border-[#627b87]/20">
                      کم
                    </Badge>
                    <Badge variant="outline" className="bg-[#27875b]/10 text-[#27875b] border-[#27875b]/20">
                      بررسی شده
                    </Badge>
                  </div>
                  <span className="text-sm text-[#0080d8] font-medium">#۲۰۲۴۰۰۱</span>
                </div>
                <h3 className="text-base font-semibold text-[#273240] mb-2 text-right">موضوع : کندی در اپلود فایل</h3>
                <p className="text-sm text-[#627b87] mb-4 text-right">محصول: DMS - سیستم مدیریت اسناد و مدارک</p>
                <div className="flex justify-between text-xs text-[#a6abc8]">
                  <span>آخرین بروزرسانی: ۱۴:۲۰ - ۱۴۰۳/۰۷/۱۵</span>
                  <span>ایجاد: ۹:۳۰ - ۱۴۰۳/۰۷/۱۵</span>
                </div>
              </Card>

              {/* Ticket 4 */}
              <Card className="p-6 border-[#e5e5e5]">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-[#627b87]/10 text-[#627b87] border-[#627b87]/20">
                      کم
                    </Badge>
                    <Badge variant="outline" className="bg-[#27875b]/10 text-[#27875b] border-[#27875b]/20">
                      بررسی شده
                    </Badge>
                  </div>
                  <span className="text-sm text-[#0080d8] font-medium">#۲۰۲۴۰۰۱</span>
                </div>
                <h3 className="text-base font-semibold text-[#273240] mb-2 text-right">موضوع : کندی در اپلود فایل</h3>
                <p className="text-sm text-[#627b87] mb-4 text-right">محصول: DMS - سیستم مدیریت اسناد و مدارک</p>
                <div className="flex justify-between text-xs text-[#a6abc8]">
                  <span>آخرین بروزرسانی: ۱۴:۲۰ - ۱۴۰۳/۰۷/۱۵</span>
                  <span>ایجاد: ۹:۳۰ - ۱۴۰۳/۰۷/۱۵</span>
                </div>
              </Card>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-[#627b87]">نمایش</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-[#e5e5e5] bg-transparent">
                  ۱۰
                  <ChevronDown className="w-4 h-4 mr-1" />
                </Button>
                <span className="text-sm text-[#627b87]">در صفحه</span>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-[#e5e5e5] px-8 py-4">
          <p className="text-center text-xs text-[#a6abc8]">
            کلیه حقوق مادی و معنوی متعلق به شرکت راهبرد سیستم استیشن میباشد
          </p>
        </footer>
      </div>
    </div>
  )
}
