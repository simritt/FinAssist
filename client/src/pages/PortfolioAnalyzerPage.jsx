import { motion } from "framer-motion";
import { PieChart as PieIcon, TrendingUp, AlertTriangle, Layers } from "lucide-react";
import Card from "../components/ui/Card";
import { allocationData } from "../data/dashboardData";

export default function PortfolioAnalyzerPage() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Portfolio Analyzer</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Deep insight into diversification, concentration, and asset health.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { icon: Layers, label: "Diversification Score", value: "78 / 100", tone: "text-emerald-500" },
          { icon: AlertTriangle, label: "Concentration Risk", value: "Moderate", tone: "text-amber-500" },
          { icon: TrendingUp, label: "Annualized Return", value: "+18.4%", tone: "text-emerald-500" },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Card hover={false} className="text-center py-8">
              <m.icon className={`mx-auto mb-3 ${m.tone}`} size={26} />
              <p className={`text-2xl font-extrabold ${m.tone}`}>{m.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{m.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card>
        <div className="flex items-center gap-2 mb-6">
          <PieIcon size={18} className="text-primary-500" />
          <h3 className="font-bold text-slate-900 dark:text-white">Holdings Breakdown</h3>
        </div>
        <div className="space-y-4">
          {allocationData.map((asset, i) => (
            <div key={asset.name}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium text-slate-700 dark:text-slate-300">{asset.name}</span>
                <span className="font-bold text-slate-900 dark:text-white">{asset.value}%</span>
              </div>
              <div className="h-2.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${asset.value}%` }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: asset.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card hover={false} className="bg-primary-50/50 dark:bg-primary-500/5 border-primary-100 dark:border-primary-500/10">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          <strong className="text-slate-900 dark:text-white">Insight:</strong> Your crypto allocation
          (18%) is above the recommended 10-15% threshold for a moderate risk profile. Consider
          rebalancing toward bonds or cash equivalents.
        </p>
      </Card>
    </div>
  );
}
