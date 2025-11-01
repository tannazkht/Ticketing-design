import { Bell, Search, ChevronDown, Calendar } from "lucide-react"

export default function DashboardPage() {
  const tickets = [
    { id: 1, status: "received", statusText: "دریافت پرسش", priority: "زیاد" },
    { id: 2, status: "waiting", statusText: "منتظر", priority: "منتظر" },
    { id: 3, status: "rejected", statusText: "رد", priority: "کم" },
    { id: 4, status: "waiting", statusText: "منتظر", priority: "منتظر" },
    { id: 5, status: "waiting", statusText: "منتظر", priority: "منتظر" },
    { id: 6, status: "reviewed", statusText: "بررسی شده", priority: "بررسی شده" },
    { id: 7, status: "reviewed", statusText: "بررسی شده", priority: "بررسی شده" },
    { id: 8, status: "reviewed", statusText: "بررسی شده", priority: "بررسی شده" },
    { id: 9, status: "reviewed", statusText: "بررسی شده", priority: "بررسی شده" },
    { id: 10, status: "reviewed", statusText: "بررسی شده", priority: "بررسی شده" },
    { id: 11, status: "reviewed", statusText: "بررسی شده", priority: "بررسی شده" },
    { id: 12, status: "reviewed", statusText: "بررسی شده", priority: "بررسی شده" },
    { id: 13, status: "reviewed", statusText: "بررسی شده", priority: "بررسی شده" },
    { id: 14, status: "reviewed", statusText: "بررسی شده", priority: "بررسی شده" },
  ]

  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f6f6fb" }} dir="rtl">
      {/* Header */}
      <header className="bg-white border-bottom" style={{ borderColor: "#e5e5e5" }}>
        <div className="container-fluid px-4 py-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="User"
                  className="rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="d-flex align-items-center gap-1">
                  <span className="fw-medium" style={{ color: "#273240", fontSize: "14px" }}>
                    حساب کاربری
                  </span>
                  <ChevronDown style={{ width: "16px", height: "16px", color: "#627b87" }} />
                </div>
              </div>
              <div className="position-relative">
                <Bell style={{ width: "20px", height: "20px", color: "#627b87" }} />
                <span
                  className="position-absolute top-0 start-100 translate-middle rounded-circle"
                  style={{ width: "8px", height: "8px", backgroundColor: "#ec5252" }}
                ></span>
              </div>
            </div>

            <div className="flex-grow-1 mx-5" style={{ maxWidth: "400px" }}>
              <div className="position-relative">
                <Search
                  className="position-absolute top-50 translate-middle-y"
                  style={{ right: "12px", width: "16px", height: "16px", color: "#909ba5" }}
                />
                <input
                  type="text"
                  className="form-control border-0 text-end"
                  placeholder="جستجو"
                  style={{ backgroundColor: "#f1f2f7", paddingRight: "40px" }}
                />
              </div>
            </div>

            <div className="text-end">
              <div className="fw-semibold" style={{ color: "#707fdd", fontSize: "18px" }}>
                استخدام
              </div>
              <div style={{ color: "#909ba5", fontSize: "14px" }}>سافت</div>
            </div>
          </div>
        </div>
      </header>

      <div className="d-flex">
        {/* Sidebar */}
        <aside
          className="bg-white border-start p-3"
          style={{ width: "256px", minHeight: "calc(100vh - 65px)", borderColor: "#e5e5e5" }}
        >
          <nav className="d-flex flex-column gap-1">
            <button
              className="btn d-flex align-items-center justify-content-between text-white fw-medium rounded-3 px-3 py-2"
              style={{ backgroundColor: "#707fdd", fontSize: "14px" }}
            >
              <div className="d-flex align-items-center gap-2">
                <div
                  className="rounded"
                  style={{ width: "20px", height: "20px", backgroundColor: "rgba(255,255,255,0.2)" }}
                ></div>
                <span>داشبورد</span>
              </div>
              <span style={{ fontSize: "12px" }}>شو</span>
            </button>

            <button
              className="btn d-flex align-items-center justify-content-between fw-medium rounded-3 px-3 py-2"
              style={{ backgroundColor: "transparent", color: "#273240", fontSize: "14px" }}
            >
              <div className="d-flex align-items-center gap-2">
                <div className="rounded" style={{ width: "20px", height: "20px", backgroundColor: "#f1f2f7" }}></div>
                <span>تیکت ها</span>
              </div>
              <span
                className="badge rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "20px", height: "20px", backgroundColor: "#ec5252", fontSize: "11px" }}
              >
                3
              </span>
            </button>

            <button
              className="btn d-flex align-items-center justify-content-between fw-medium rounded-3 px-3 py-2"
              style={{ backgroundColor: "transparent", color: "#273240", fontSize: "14px" }}
            >
              <div className="d-flex align-items-center gap-2">
                <div className="rounded" style={{ width: "20px", height: "20px", backgroundColor: "#f1f2f7" }}></div>
                <span>پیام ها</span>
              </div>
            </button>

            <button
              className="btn d-flex align-items-center justify-content-between fw-medium rounded-3 px-3 py-2"
              style={{ backgroundColor: "transparent", color: "#273240", fontSize: "14px" }}
            >
              <div className="d-flex align-items-center gap-2">
                <div className="rounded" style={{ width: "20px", height: "20px", backgroundColor: "#f1f2f7" }}></div>
                <span>پایگاه دانش</span>
              </div>
            </button>

            <div className="pt-3 pb-2">
              <span className="fw-medium px-3" style={{ color: "#909ba5", fontSize: "12px" }}>
                OTHERS
              </span>
            </div>

            <button
              className="btn d-flex align-items-center justify-content-between fw-medium rounded-3 px-3 py-2"
              style={{ backgroundColor: "transparent", color: "#273240", fontSize: "14px" }}
            >
              <div className="d-flex align-items-center gap-2">
                <div className="rounded" style={{ width: "20px", height: "20px", backgroundColor: "#f1f2f7" }}></div>
                <span>تنظیمات</span>
              </div>
            </button>

            <button
              className="btn d-flex align-items-center justify-content-between fw-medium rounded-3 px-3 py-2"
              style={{ backgroundColor: "transparent", color: "#273240", fontSize: "14px" }}
            >
              <div className="d-flex align-items-center gap-2">
                <div className="rounded" style={{ width: "20px", height: "20px", backgroundColor: "#f1f2f7" }}></div>
                <span>حساب من</span>
              </div>
            </button>

            <button
              className="btn d-flex align-items-center justify-content-between fw-medium rounded-3 px-3 py-2"
              style={{ backgroundColor: "transparent", color: "#273240", fontSize: "14px" }}
            >
              <div className="d-flex align-items-center gap-2">
                <div className="rounded" style={{ width: "20px", height: "20px", backgroundColor: "#f1f2f7" }}></div>
                <span>کمک</span>
              </div>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow-1 p-4">
          {/* Filters */}
          <div className="bg-white rounded-3 p-3 mb-3 shadow-sm">
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <div className="flex-grow-1" style={{ minWidth: "200px" }}>
                <div className="position-relative">
                  <Search
                    className="position-absolute top-50 translate-middle-y"
                    style={{ right: "12px", width: "16px", height: "16px", color: "#909ba5" }}
                  />
                  <input
                    type="text"
                    className="form-control border-0 text-end"
                    placeholder="جستجو"
                    style={{ backgroundColor: "#f1f2f7", paddingRight: "40px" }}
                  />
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <span style={{ color: "#627b87", fontSize: "14px" }}>از تاریخ</span>
                <button className="btn border-0 d-flex align-items-center gap-2" style={{ backgroundColor: "#f1f2f7" }}>
                  <Calendar style={{ width: "16px", height: "16px" }} />
                </button>
              </div>

              <span style={{ color: "#627b87" }}>←</span>

              <div className="d-flex align-items-center gap-2">
                <span style={{ color: "#627b87", fontSize: "14px" }}>تا تاریخ</span>
                <button className="btn border-0 d-flex align-items-center gap-2" style={{ backgroundColor: "#f1f2f7" }}>
                  <Calendar style={{ width: "16px", height: "16px" }} />
                </button>
              </div>

              <select className="form-select border-0" style={{ width: "140px", backgroundColor: "#f1f2f7" }}>
                <option>وضعیت</option>
                <option>دریافت شده</option>
                <option>منتظر</option>
                <option>بررسی شده</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-3 shadow-sm overflow-hidden">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead style={{ backgroundColor: "#f6f6fb" }}>
                  <tr>
                    <th className="px-3 py-3">
                      <input type="checkbox" className="form-check-input" />
                    </th>
                    <th className="px-3 py-3 text-end fw-medium" style={{ color: "#627b87", fontSize: "14px" }}>
                      شناسه
                    </th>
                    <th className="px-3 py-3 text-end fw-medium" style={{ color: "#627b87", fontSize: "14px" }}>
                      عنوان
                    </th>
                    <th className="px-3 py-3 text-end fw-medium" style={{ color: "#627b87", fontSize: "14px" }}>
                      مشتری
                    </th>
                    <th className="px-3 py-3 text-end fw-medium" style={{ color: "#627b87", fontSize: "14px" }}>
                      محصول
                    </th>
                    <th className="px-3 py-3 text-end fw-medium" style={{ color: "#627b87", fontSize: "14px" }}>
                      اولویت
                    </th>
                    <th className="px-3 py-3 text-end fw-medium" style={{ color: "#627b87", fontSize: "14px" }}>
                      تاریخ ثبت
                    </th>
                    <th className="px-3 py-3 text-end fw-medium" style={{ color: "#627b87", fontSize: "14px" }}>
                      شماره تماس
                    </th>
                    <th className="px-3 py-3 text-end fw-medium" style={{ color: "#627b87", fontSize: "14px" }}>
                      زمان ثبت
                    </th>
                    <th className="px-3 py-3 text-end fw-medium" style={{ color: "#627b87", fontSize: "14px" }}>
                      وضعیت
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id} style={{ borderBottom: "1px solid #e5e5e5" }}>
                      <td className="px-3 py-3">
                        <input type="checkbox" className="form-check-input" />
                      </td>
                      <td className="px-3 py-3 text-end" style={{ color: "#273240", fontSize: "14px" }}>
                        #۴۲۰۲۴۰۰۱
                      </td>
                      <td className="px-3 py-3 text-end" style={{ color: "#273240", fontSize: "14px" }}>
                        کندی ایلود
                      </td>
                      <td className="px-3 py-3 text-end" style={{ color: "#627b87", fontSize: "14px" }}>
                        امیر رجبی
                      </td>
                      <td className="px-3 py-3 text-end" style={{ color: "#273240", fontSize: "14px" }}>
                        DMS
                      </td>
                      <td className="px-3 py-3">
                        <span
                          className="badge rounded-pill"
                          style={{
                            border: `1px solid ${ticket.priority === "زیاد" ? "#ec5252" : ticket.priority === "کم" ? "#627b87" : "#707fdd"}`,
                            color:
                              ticket.priority === "زیاد" ? "#ec5252" : ticket.priority === "کم" ? "#627b87" : "#707fdd",
                            backgroundColor:
                              ticket.priority === "زیاد"
                                ? "rgba(236, 82, 82, 0.05)"
                                : ticket.priority === "کم"
                                  ? "rgba(98, 123, 135, 0.05)"
                                  : "rgba(112, 127, 221, 0.05)",
                          }}
                        >
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-end" style={{ color: "#273240", fontSize: "14px" }}>
                        ۱۴۰۶/۰۴/۰۶
                      </td>
                      <td className="px-3 py-3 text-end" style={{ color: "#273240", fontSize: "14px" }}>
                        ۰۹۱۱۲۶۸۰۳۰۰
                      </td>
                      <td className="px-3 py-3 text-end" style={{ color: "#273240", fontSize: "14px" }}>
                        ۱۴:۲۰
                      </td>
                      <td className="px-3 py-3">
                        <span
                          className="badge rounded-pill"
                          style={{
                            border: `1px solid ${ticket.status === "rejected" ? "#627b87" : "#707fdd"}`,
                            color: ticket.status === "rejected" ? "#627b87" : "#707fdd",
                            backgroundColor:
                              ticket.status === "rejected" ? "rgba(98, 123, 135, 0.05)" : "rgba(112, 127, 221, 0.05)",
                          }}
                        >
                          {ticket.statusText}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div
              className="d-flex align-items-center justify-content-between px-4 py-3 border-top"
              style={{ borderColor: "#e5e5e5" }}
            >
              <div className="d-flex align-items-center gap-2">
                <span style={{ color: "#627b87", fontSize: "14px" }}>نمایش</span>
                <select className="form-select form-select-sm" style={{ width: "70px" }}>
                  <option>۱۰</option>
                  <option>۲۰</option>
                  <option>۵۰</option>
                </select>
                <span style={{ color: "#627b87", fontSize: "14px" }}>از صفحه</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-4">
            <p className="mb-1" style={{ color: "#909ba5", fontSize: "12px" }}>
              کلیه حقوق مادی و معنوی متعلق به شرکت راهبرد سیستم استانس میباشد
            </p>
            <p className="mb-0" style={{ color: "#909ba5", fontSize: "12px" }}>
              نسخه ۱۵.۳.۳
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
