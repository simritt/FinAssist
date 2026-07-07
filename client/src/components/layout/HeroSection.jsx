import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Wallet, PieChart, BarChart3 } from "lucide-react";
import Button from "../ui/Button";

const floatingCards = [
  { icon: TrendingUp, label: "Portfolio +12.4%", sub: "This month", pos: "top-6 -left-4 md:left-4", delay: 0 },
  { icon: Wallet, label: "$128,450.32", sub: "Net Worth", pos: "top-24 -right-2 md:right-8", delay: 0.4 },
  { icon: PieChart, label: "Risk Score 62", sub: "Moderate", pos: "bottom-24 -left-8 md:-left-2", delay: 0.8 },
  { icon: BarChart3, label: "AAPL ▲ 1.24%", sub: "Live price", pos: "bottom-6 right-2 md:right-16", delay: 1.2 },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32 px-6">
      {/* Static, restrained background — no animated rainbow gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/60 via-white to-white dark:from-primary-950/30 dark:via-surface-dark dark:to-surface-dark" />
        <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary-200 dark:border-primary-500/30 bg-white/60 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300 backdrop-blur-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Trusted by 12,000+ investors
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
        >
          Smarter Investment<br />
          <span className="text-primary-600 dark:text-primary-400">
            Decisions Start Here.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300"
        >
          Portfolio analysis, valuation tools, risk insights, and market sentiment —
          unified in one intelligent dashboard built for serious investors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/register">
            <Button variant="primary" className="text-base px-8 py-3.5">
              Get Started <ArrowRight size={18} />
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="secondary" className="text-base px-8 py-3.5">
              Login
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Floating finance illustration cards */}
      <div className="relative mx-auto mt-20 max-w-4xl h-64 hidden md:block">
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 + card.delay * 0.15 }}
            className={`absolute ${card.pos} animate-float`}
            style={{ animationDelay: `${card.delay}s` }}
          >
            <div className="glass-card rounded-2xl px-5 py-3.5 flex items-center gap-3 min-w-[180px]">
              <div className="w-9 h-9 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <card.icon size={18} />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-slate-800 dark:text-white">{card.label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{card.sub}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}