import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { History } from "lucide-react";
import Card from "../components/ui/Card";
import { performanceData } from "../data/dashboardData";

const ranges = ["1M", "3M", "6M", "1Y", "ALL"];

export default function HistoricalTrackerPage() {
  const [activeRange, setActiveRange] = useState("1Y");

  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Historical Tracker</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Long-term portfolio performance trends.
          </p>
        </div>
        <div className="flex gap-1 bg-slate-100 dark:bg-white/5 rounded-xl p-1">
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRange(r)}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                activeRange === r
                  ? "bg-white dark:bg-surface-darkElevated text-primary-600 dark:text-primary-400 shadow-sm"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <Card>
        <div className="flex items-center gap-2 mb-6">
          <History size={18} className="text-primary-500" />
          <h3 className="font-bold text-slate-900 dark:text-white">Value Over Time ({activeRange})</h3>
        </div>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148,163,184,0.15)" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} width={50} />
              <Tooltip contentStyle={{ borderRadius: 12, border: "none" }} />
              <Line type="monotone" dataKey="value" stroke="#3366FF" strokeWidth={3} dot={{ r: 4 }} animationDuration={900} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Best Month", value: "+8.4%" },
          { label: "Worst Month", value: "-3.1%" },
          { label: "Avg Monthly Return", value: "+3.2%" },
          { label: "Volatility", value: "12.6%" },
        ].map((stat) => (
          <Card key={stat.label} hover={false} className="text-center py-6">
            <p className="text-xl font-extrabold text-slate-900 dark:text-white">{stat.value}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
