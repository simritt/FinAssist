import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sun, Moon, Bell, ChevronDown, Menu, User, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import { getGreeting, isMarketOpen } from "../../utils/formatters";

const notifications = [
  { id: 1, text: "TSLA dropped below your alert price of $180", time: "12m ago" },
  { id: 2, text: "Your portfolio gained +2.4% today", time: "1h ago" },
  { id: 3, text: "New AI risk report is ready to view", time: "3h ago" },
];

export default function TopNavbar({ onMobileMenuClick }) {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const marketOpen = isMarketOpen();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const firstName = user?.fullName?.split(" ")[0] || "there";

  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl border-b border-slate-100 dark:border-white/5 px-4 md:px-6 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Left: mobile menu + greeting */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onMobileMenuClick}
            className="lg:hidden text-slate-600 dark:text-slate-300"
          >
            <Menu size={22} />
          </button>
          <div className="hidden md:block min-w-0">
            <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">
              {getGreeting()}, {firstName} 👋
            </p>
            <p className="text-xs text-slate-400">
              {time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
            </p>
          </div>
        </div>

        {/* Center: search */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search stocks, tools, insights..."
            className="w-full rounded-xl bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary-400 focus:bg-white dark:focus:bg-surface-darkElevated pl-10 pr-4 py-2.5 text-sm outline-none transition-all"
          />
        </div>

        {/* Right: market status, theme, notifications, profile */}
        <div className="flex items-center gap-2 md:gap-3">
          <span
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
              marketOpen
                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                : "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${marketOpen ? "bg-emerald-500" : "bg-rose-500"} animate-pulse`} />
            Market {marketOpen ? "Open" : "Closed"}
          </span>

          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setNotifOpen((p) => !p);
                setProfileOpen(false);
              }}
              className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            >
              <Bell size={17} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 border-2 border-white dark:border-surface-dark" />
            </button>
            <AnimatePresence>
              {notifOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-80 glass-card rounded-2xl overflow-hidden"
                >
                  <div className="px-4 py-3 border-b border-slate-100 dark:border-white/5 font-semibold text-sm text-slate-800 dark:text-white">
                    Notifications
                  </div>
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className="px-4 py-3 border-b border-slate-50 dark:border-white/5 last:border-0 hover:bg-slate-50 dark:hover:bg-white/5"
                    >
                      <p className="text-sm text-slate-700 dark:text-slate-200">{n.text}</p>
                      <p className="text-xs text-slate-400 mt-1">{n.time}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setProfileOpen((p) => !p);
                setNotifOpen(false);
              }}
              className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                {user?.fullName?.[0]?.toUpperCase() || "U"}
              </div>
              <ChevronDown size={14} className="hidden md:block text-slate-400" />
            </button>
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-56 glass-card rounded-2xl overflow-hidden p-1.5"
                >
                  <div className="px-3 py-2.5 mb-1">
                    <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">
                      {user?.fullName}
                    </p>
                    <p className="text-xs text-slate-400 truncate">{user?.email}</p>
                  </div>
                  <button
                    onClick={() => navigate("/dashboard/settings")}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                  >
                    <User size={16} /> Profile
                  </button>
                  <button
                    onClick={() => navigate("/dashboard/settings")}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                  >
                    <Settings size={16} /> Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
