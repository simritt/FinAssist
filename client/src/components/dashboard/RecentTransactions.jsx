import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import Card from "../ui/Card";
import { recentTransactions } from "../../data/dashboardData";
import { formatDate } from "../../utils/formatters";

export default function RecentTransactions() {
  return (
    <Card delay={0.25}>
      <h3 className="font-bold text-slate-900 dark:text-white mb-4">Recent Transactions</h3>
      <div className="space-y-1">
        {recentTransactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between py-2.5 px-2 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center ${
                  tx.type === "BUY"
                    ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                    : "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"
                }`}
              >
                {tx.type === "BUY" ? <ArrowDownCircle size={17} /> : <ArrowUpCircle size={17} />}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  {tx.type} {tx.symbol}
                </p>
                <p className="text-xs text-slate-400">{formatDate(tx.date)}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-slate-800 dark:text-white">
                ${tx.total.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-slate-400">{tx.qty} shares</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
