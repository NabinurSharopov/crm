import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import img1 from "../../assets/ADAM.png";
import img2 from "../../assets/img1.png";
import img3 from "../../assets/img2.png";

import {
  LayoutDashboard,
  Users,
  BookOpen,
  CreditCard,
  Settings,
  Menu,
  Download,
  Phone,
  Send,
  ChevronsLeft,
  ChevronsUpDown,
  FileText,
  Briefcase,
  ClipboardList,
  BarChart3,
  Bell,
  Shield,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: ClipboardList, label: "Arizalar", href: "/applications" },
  { icon: CreditCard, label: "Qarzlar", href: "/debts" },
  { icon: Users, label: "Mijozlar", href: "/customers" },
  { icon: Briefcase, label: "Klinikalar", href: "/clinics" },
  { icon: BookOpen, label: "Xizmatlar", href: "/services" },
  { icon: CreditCard, label: "To'lovlar", href: "/payments" },
  { icon: BarChart3, label: "Hisobotlar", href: "/reports" },
  { icon: Shield, label: "Audit", href: "/audit" },
  { icon: Bell, label: "Xabarnomalar", href: "/notifications" },
  { icon: Settings, label: "Sozlamalar", href: "/setting" },
];

function Sidebar({ userRole = "admin", sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  React.useEffect(() => {
    const currentItem = menuItems.find((item) =>
      item.href === "/"
        ? location.pathname === "/"
        : location.pathname.includes(item.href),
    );
    if (currentItem) setActiveItem(currentItem.label);
  }, [location]);

  if (!userRole) return null;

  return (
    <aside
      className={`${sidebarOpen ? "w-[260px]" : "w-[80px]"} bg-white dark:bg-[#0A0A0A] border-r border-gray-200 dark:border-[#1a1a1a] transition-all duration-300 flex flex-col h-screen`}
    >
      <div className="bg-gradient-to-b from-[#0fb87d] to-[#0c1914] pb-3 border-b border-gray-200 dark:border-black">
        <div
          className={`h-14 flex items-center ${sidebarOpen ? "justify-between px-4" : "justify-center px-2"}`}
        >
          {sidebarOpen ? (
            <img src={img1} alt="Logo" className="h-6 w-auto object-contain" />
          ) : (
            <span className="text-xl font-bold text-white">
              A<span className="text-[#00D084]">.</span>
            </span>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-300 hover:text-white p-1 rounded transition-colors"
          >
            {sidebarOpen ? <ChevronsLeft size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {sidebarOpen && (
          <div className="px-3 mt-1.5">
            <div className="bg-[#0f291f] rounded-lg p-2 flex items-center gap-2.5 border border-[#1a4232] cursor-pointer hover:bg-[#133226] transition-colors">
              <div className="w-8 h-8 bg-white rounded-full overflow-hidden shrink-0 border border-gray-200/20">
                <img
                  className="w-full h-full object-cover"
                  src={img2}
                  alt="Clinic"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-[12px] font-semibold truncate">
                  Horev Medical Center
                </p>
              </div>
              <ChevronsUpDown size={12} className="text-gray-400 shrink-0" />
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-3 custom-scrollbar">
        <ul className="px-3">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={`
                  flex items-center ${sidebarOpen ? "px-3.5 py-2.5" : "px-0 py-2.5 justify-center"} 
                  text-[14px] font-medium rounded-xl mb-1 transition-all
                  ${
                    activeItem === item.label
                      ? "bg-[#0A1912] text-[#00D084]"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#151D1A]"
                  }
                `}
                title={!sidebarOpen ? item.label : undefined}
              >
                <item.icon
                  className={`${sidebarOpen ? "mr-3" : ""} w-[18px] h-[18px] ${activeItem === item.label ? "text-[#00D084]" : "text-gray-400 dark:text-gray-400"}`}
                  strokeWidth={activeItem === item.label ? 2.5 : 2}
                />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-4 py-3 border-t border-gray-200 dark:border-[#1a1a1a] bg-white dark:bg-[#0A0A0A]">
        {sidebarOpen ? (
          <div>
            <div className="space-y-2 mb-3">
              <a
                href="tel:+998990307322"
                className="flex items-center gap-2 text-gray-500 hover:text-[#00D084] transition-colors text-[12px] font-medium"
              >
                <Phone size={14} /> +998 99 030 73 22
              </a>
              <a
                href="https://t.me/adam_support"
                className="flex items-center gap-2 text-gray-500 hover:text-[#00D084] transition-colors text-[12px] font-medium"
              >
                <Send size={14} /> @adam_support
              </a>
            </div>

            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="text-[10px] text-gray-400 font-medium mb-0.5">
                  Powered by
                </p>
                <img src={img3} alt="ADAM" className="h-3 opacity-50" />
              </div>
              <span className="text-[10px] font-medium text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md">
                7.1.2
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-2">
            <a
              href="tel:+998990307322"
              className="text-gray-400 hover:text-[#00D084] transition-colors"
            >
              <Phone size={16} />
            </a>
            <a
              href="https://t.me/adam_support"
              className="text-gray-400 hover:text-[#00D084] transition-colors"
            >
              <Send size={16} />
            </a>
            <div className="w-full border-t border-gray-200 dark:border-[#1a1a1a] my-1"></div>
            <img src={img3} className="h-3 opacity-40" alt="ADAM" />
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
