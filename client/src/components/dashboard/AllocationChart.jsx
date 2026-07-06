import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import Card from "../ui/Card";
import { allocationData } from "../../data/dashboardData";

export default function AllocationChart() {
  return (
    <Card className="h-full" delay={0.1}>
      <h3 className="font-bold text-slate-900 dark:text-white mb-1">Portfolio Allocation</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Asset class distribution</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={allocationData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={3}
              animationDuration={900}
            >
              {allocationData.map((entry, i) => (
                <Cell key={i} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${value}%`, ""]}
              contentStyle={{ borderRadius: 12, border: "none", fontSize: 12 }}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              formatter={(value) => <span className="text-xs text-slate-600 dark:text-slate-300">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
