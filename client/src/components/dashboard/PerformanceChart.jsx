import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Card from "../ui/Card";
import { performanceData } from "../../data/dashboardData";
import { formatCompactNumber } from "../../utils/formatters";

export default function PerformanceChart() {
  return (
    <Card className="h-full lg:col-span-2" delay={0.15}>
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-bold text-slate-900 dark:text-white">Performance</h3>
        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-full">
          +39.6% YTD
        </span>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Portfolio value over the last 12 months</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={performanceData}>
            <defs>
              <linearGradient id="perfGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3366FF" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#3366FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148,163,184,0.15)" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <YAxis
              tickFormatter={(v) => formatCompactNumber(v)}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
              width={45}
            />
            <Tooltip
              formatter={(value) => [`$${value.toLocaleString()}`, "Value"]}
              contentStyle={{ borderRadius: 12, border: "none", fontSize: 12 }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3366FF"
              strokeWidth={2.5}
              fill="url(#perfGradient)"
              animationDuration={1000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
