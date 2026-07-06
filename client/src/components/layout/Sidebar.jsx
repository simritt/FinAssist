import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  PieChart,
  Calculator,
  LineChart,
  Newspaper,
  ShieldAlert,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Logo from "../ui/Logo";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/dashboard/portfolio-analyzer", icon: PieChart, label: "Portfolio Analyzer" },
  { to: "/dashboard/valuation-calculator", icon: Calculator, label: "Valuation Calculator" },
  { to: "/dashboard/historical-tracker", icon: LineChart, label: "Historical Tracker" },
  { to: "/dashboard/news-sentiment", icon: Newspaper, label: "News Sentiment Analyzer" },
  { to: "/dashboard/risk-analyzer", icon: ShieldAlert, label: "Risk Analyzer" },
];

export default function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <motion.aside
        animate={{ width: collapsed ? 84 : 264 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed lg:static z-50 h-screen flex flex-col bg-white dark:bg-surface-darkCard border-r border-slate-100 dark:border-white/5 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ width: collapsed ? 84 : 264 }}
      >
        {/* Top: Logo + collapse button */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-slate-100 dark:border-white/5">
          {!collapsed && <Logo size="sm" />}
          {collapsed && <Logo size="sm" showText={false} />}
          <button
            onClick={() => setCollapsed((p) => !p)}
            className="hidden lg:flex w-7 h-7 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 hover:bg-primary-500 hover:text-white transition-colors"
          >
            {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/dashboard"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? "bg-primary-500 text-white shadow-glow"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                }`
              }
              title={collapsed ? item.label : undefined}
            >
              <item.icon size={19} className="shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Bottom: Settings + Logout */}
        <div className="px-3 py-4 border-t border-slate-100 dark:border-white/5 space-y-1">
          <NavLink
            to="/dashboard/settings"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary-500 text-white"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
              }`
            }
            title={collapsed ? "Settings" : undefined}
          >
            <Settings size={19} className="shrink-0" />
            {!collapsed && <span>Settings</span>}
          </NavLink>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors"
            title={collapsed ? "Logout" : undefined}
          >
            <LogOut size={19} className="shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </motion.aside>
    </>
  );
}
