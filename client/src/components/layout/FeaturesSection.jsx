import { motion } from "framer-motion";
import { PieChart, Calculator, LineChart, Newspaper, ShieldAlert, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    desc: "See your entire financial picture — holdings, cash, performance — in one live view.",
  },
  {
    icon: PieChart,
    title: "Portfolio Analyzer",
    desc: "Understand allocation, diversification, and concentration risk across every asset.",
  },
  {
    icon: Calculator,
    title: "Valuation Calculator",
    desc: "Estimate fair value using DCF and comparable models before you invest.",
  },
  {
    icon: LineChart,
    title: "Historical Tracker",
    desc: "Track long-term performance trends with clean, interactive charting.",
  },
  {
    icon: Newspaper,
    title: "News Sentiment Analyzer",
    desc: "AI-driven sentiment scoring on breaking financial news, in real time.",
  },
  {
    icon: ShieldAlert,
    title: "Risk Analyzer",
    desc: "Quantify portfolio risk exposure and get actionable rebalancing signals.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide"
          >
            Everything you need
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            One platform. Every tool.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-7 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-5 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
