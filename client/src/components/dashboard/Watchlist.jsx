import { ArrowUp, ArrowDown, Eye } from "lucide-react";
import Card from "../ui/Card";
import { watchlist } from "../../data/dashboardData";

export default function Watchlist() {
  return (
    <Card delay={0.3}>
      <div className="flex items-center gap-2 mb-4">
        <Eye size={16} className="text-primary-500" />
        <h3 className="font-bold text-slate-900 dark:text-white">Watchlist</h3>
      </div>
      <div className="space-y-1">
        {watchlist.map((stock) => (
          <div
            key={stock.symbol}
            className="flex items-center justify-between py-2.5 px-2 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
          >
            <span className="text-sm font-semibold text-slate-800 dark:text-white">{stock.symbol}</span>
            <div className="text-right">
              <p className="text-sm font-bold text-slate-800 dark:text-white">${stock.price}</p>
              <p
                className={`text-xs font-semibold flex items-center gap-0.5 justify-end ${
                  stock.up ? "text-emerald-500" : "text-rose-500"
                }`}
              >
                {stock.up ? <ArrowUp size={11} /> : <ArrowDown size={11} />}
                {Math.abs(stock.change)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
