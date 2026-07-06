import Card from "../ui/Card";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function StatCard({ icon: Icon, label, value, prefix = "$", decimals = 2, positive, delay = 0, iconColor }) {
  return (
    <Card delay={delay} className="flex flex-col gap-3 min-w-0">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate">{label}</span>
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
            iconColor || "bg-primary-500/10 text-primary-600 dark:text-primary-400"
          }`}
        >
          <Icon size={16} />
        </div>
      </div>
      <p
        className={`text-xl xl:text-2xl font-bold truncate ${
          positive === true
            ? "text-emerald-600 dark:text-emerald-400"
            : positive === false
            ? "text-rose-600 dark:text-rose-400"
            : "text-slate-900 dark:text-white"
        }`}
        title={`${prefix}${value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`}
      >
        <AnimatedCounter value={value} prefix={prefix} decimals={decimals} />
      </p>
    </Card>
  );
}