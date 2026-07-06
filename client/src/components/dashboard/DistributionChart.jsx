import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";
import Card from "../ui/Card";
import { distributionData } from "../../data/dashboardData";

const colors = ["#3366FF", "#6366F1", "#10B981", "#F59E0B", "#F43F5E", "#94A3B8"];

export default function DistributionChart() {
  return (
    <Card delay={0.2}>
      <h3 className="font-bold text-slate-900 dark:text-white mb-1">Sector Distribution</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Holdings by industry sector</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={distributionData} layout="vertical" margin={{ left: 10 }}>
            <XAxis type="number" hide />
            <YAxis
              dataKey="sector"
              type="category"
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
              width={80}
            />
            <Tooltip
              formatter={(value) => [`${value}%`, "Allocation"]}
              contentStyle={{ borderRadius: 12, border: "none", fontSize: 12 }}
            />
            <Bar dataKey="pct" radius={[0, 6, 6, 0]} animationDuration={900} barSize={16}>
              {distributionData.map((_, i) => (
                <Cell key={i} fill={colors[i % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
