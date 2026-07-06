import { Trophy } from "lucide-react";
import Card from "../ui/Card";
import { topPerformers } from "../../data/dashboardData";

export default function TopPerformers() {
  return (
    <Card delay={0.35}>
      <div className="flex items-center gap-2 mb-4">
        <Trophy size={16} className="text-amber-500" />
        <h3 className="font-bold text-slate-900 dark:text-white">Top Performers</h3>
      </div>
      <div className="space-y-3">
        {topPerformers.map((stock, i) => (
          <div key={stock.symbol} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-xs font-bold text-slate-500">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white">{stock.symbol}</p>
                <p className="text-xs text-slate-400 truncate max-w-[140px]">{stock.name}</p>
              </div>
            </div>
            <span className="text-sm font-bold text-emerald-500">+{stock.change}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
