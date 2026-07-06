import { Newspaper } from "lucide-react";
import Card from "../ui/Card";
import { financialNews } from "../../data/dashboardData";

const sentimentStyles = {
  positive: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  negative: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
  neutral: "bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400",
};

export default function LatestNews() {
  return (
    <Card delay={0.4}>
      <div className="flex items-center gap-2 mb-4">
        <Newspaper size={16} className="text-primary-500" />
        <h3 className="font-bold text-slate-900 dark:text-white">Latest Financial News</h3>
      </div>
      <div className="space-y-4">
        {financialNews.map((news) => (
          <div key={news.id} className="pb-4 border-b border-slate-50 dark:border-white/5 last:border-0 last:pb-0">
            <p className="text-sm font-medium text-slate-800 dark:text-white leading-snug mb-2">
              {news.title}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>{news.source}</span>
              <span>•</span>
              <span>{news.time}</span>
              <span
                className={`ml-auto px-2 py-0.5 rounded-full font-semibold capitalize ${sentimentStyles[news.sentiment]}`}
              >
                {news.sentiment}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
