import { motion } from "framer-motion";
import { Newspaper, TrendingUp, TrendingDown, Minus } from "lucide-react";
import Card from "../components/ui/Card";
import { financialNews } from "../data/dashboardData";

const sentimentConfig = {
  positive: { icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
  negative: { icon: TrendingDown, color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-500/10" },
  neutral: { icon: Minus, color: "text-slate-400", bg: "bg-slate-100 dark:bg-white/5" },
};

export default function NewsSentimentPage() {
  const positiveCount = financialNews.filter((n) => n.sentiment === "positive").length;
  const negativeCount = financialNews.filter((n) => n.sentiment === "negative").length;
  const neutralCount = financialNews.filter((n) => n.sentiment === "neutral").length;
  const overallScore = Math.round(
    ((positiveCount - negativeCount) / financialNews.length) * 50 + 50
  );

  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">News Sentiment Analyzer</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          AI-driven sentiment scoring across today's financial headlines.
        </p>
      </div>

      <Card hover={false} className="bg-gradient-to-br from-primary-600 to-indigo-600 text-white">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div>
            <p className="text-primary-100 text-sm mb-1">Overall Market Sentiment</p>
            <p className="text-4xl font-extrabold">{overallScore}/100</p>
            <p className="text-primary-100 text-sm mt-1">
              {overallScore > 60 ? "Bullish" : overallScore < 40 ? "Bearish" : "Neutral"} outlook detected
            </p>
          </div>
          <div className="flex gap-6 text-center">
            <div>
              <p className="text-2xl font-bold">{positiveCount}</p>
              <p className="text-xs text-primary-100">Positive</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{neutralCount}</p>
              <p className="text-xs text-primary-100">Neutral</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{negativeCount}</p>
              <p className="text-xs text-primary-100">Negative</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        {financialNews.map((news, i) => {
          const config = sentimentConfig[news.sentiment];
          return (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Card hover={false} className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${config.bg} ${config.color}`}>
                  <config.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800 dark:text-white truncate">{news.title}</p>
                  <p className="text-xs text-slate-400 mt-1">{news.source} • {news.time}</p>
                </div>
                <span className={`text-xs font-bold capitalize px-3 py-1 rounded-full ${config.bg} ${config.color}`}>
                  {news.sentiment}
                </span>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
