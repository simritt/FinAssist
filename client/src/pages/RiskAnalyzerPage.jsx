import { motion } from "framer-motion";
import { ShieldAlert, AlertCircle, CheckCircle2 } from "lucide-react";
import Card from "../components/ui/Card";
import { summaryStats } from "../data/dashboardData";

const riskFactors = [
  { label: "Crypto Exposure", level: "High", pct: 85, tone: "rose" },
  { label: "Sector Concentration", level: "Moderate", pct: 55, tone: "amber" },
  { label: "Volatility (Beta)", level: "Moderate", pct: 60, tone: "amber" },
  { label: "Cash Reserve Ratio", level: "Healthy", pct: 30, tone: "emerald" },
  { label: "Diversification", level: "Good", pct: 25, tone: "emerald" },
];

const toneClasses = {
  rose: { bar: "bg-rose-500", text: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-500/10" },
  amber: { bar: "bg-amber-500", text: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-500/10" },
  emerald: { bar: "bg-emerald-500", text: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
};

export default function RiskAnalyzerPage() {
  const riskScore = summaryStats.riskScore;

  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Risk Analyzer</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Quantified exposure across your portfolio's key risk vectors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card hover={false} className="lg:col-span-1 flex flex-col items-center justify-center py-10">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="10" className="text-slate-100 dark:text-white/5" />
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={264}
                initial={{ strokeDashoffset: 264 }}
                animate={{ strokeDashoffset: 264 - (264 * riskScore) / 100 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{riskScore}</span>
              <span className="text-xs text-slate-400">/ 100</span>
            </div>
          </div>
          <p className="mt-4 font-semibold text-amber-500 flex items-center gap-1.5">
            <ShieldAlert size={16} /> Moderate Risk
          </p>
        </Card>

        <Card className="lg:col-span-2">
          <h3 className="font-bold text-slate-900 dark:text-white mb-5">Risk Factor Breakdown</h3>
          <div className="space-y-5">
            {riskFactors.map((factor, i) => {
              const tone = toneClasses[factor.tone];
              return (
                <div key={factor.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{factor.label}</span>
                    <span className={`font-bold ${tone.text}`}>{factor.level}</span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${factor.pct}%` }}
                      transition={{ duration: 0.7, delay: i * 0.1 }}
                      className={`h-full rounded-full ${tone.bar}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <Card hover={false} className="flex items-start gap-3 bg-amber-50/50 dark:bg-amber-500/5 border-amber-100 dark:border-amber-500/10">
        <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
        <p className="text-sm text-slate-600 dark:text-slate-300">
          <strong className="text-slate-900 dark:text-white">Recommendation:</strong> High crypto
          exposure is your largest risk driver. Reducing it by 5-8% would move your overall score
          into the "Low-Moderate" range.
        </p>
      </Card>
    </div>
  );
}
