import { ArrowUp, ArrowDown } from "lucide-react";
import { tickerData } from "../../data/tickerData";

// Duplicate the array so the CSS animation loop (translateX -50%) is seamless
const loopData = [...tickerData, ...tickerData];

export default function StockTicker() {
  return (
    <div className="w-full bg-slate-900 dark:bg-black overflow-hidden border-b border-white/5 h-9 flex items-center">
      <div className="flex animate-ticker-scroll whitespace-nowrap">
        {loopData.map((stock, i) => (
          <div key={i} className="flex items-center gap-1.5 px-5 text-xs font-medium">
            <span className="text-slate-400">{stock.symbol}</span>
            <span className="text-white font-semibold">{stock.price.toLocaleString()}</span>
            <span
              className={`flex items-center gap-0.5 font-semibold ${
                stock.up ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {stock.up ? <ArrowUp size={11} /> : <ArrowDown size={11} />}
              {Math.abs(stock.change).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
