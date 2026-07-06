import { Wallet, TrendingUp, TrendingDown, PiggyBank, Banknote, ShieldAlert, Landmark } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import AllocationChart from "../components/dashboard/AllocationChart";
import PerformanceChart from "../components/dashboard/PerformanceChart";
import DistributionChart from "../components/dashboard/DistributionChart";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import Watchlist from "../components/dashboard/Watchlist";
import TopPerformers from "../components/dashboard/TopPerformers";
import LatestNews from "../components/dashboard/LatestNews";
import RecentActivities from "../components/dashboard/RecentActivities";
import { summaryStats } from "../data/dashboardData";

export default function DashboardHome() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Top stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        <StatCard icon={Wallet} label="Portfolio Value" value={summaryStats.portfolioValue} delay={0} />
        <StatCard
          icon={TrendingUp}
          label="Today's Profit"
          value={summaryStats.todaysProfit}
          positive={true}
          delay={0.05}
          iconColor="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
        />
        <StatCard
          icon={TrendingDown}
          label="Today's Loss"
          value={Math.abs(summaryStats.todaysLoss)}
          positive={false}
          delay={0.1}
          iconColor="bg-rose-500/10 text-rose-600 dark:text-rose-400"
        />
        <StatCard icon={Landmark} label="Total Invested" value={summaryStats.totalInvested} delay={0.15} />
        <StatCard icon={Banknote} label="Available Cash" value={summaryStats.availableCash} delay={0.2} />
        <StatCard
          icon={ShieldAlert}
          label="Risk Score"
          value={summaryStats.riskScore}
          prefix=""
          decimals={0}
          delay={0.25}
          iconColor="bg-amber-500/10 text-amber-600 dark:text-amber-400"
        />
        <StatCard icon={PiggyBank} label="Net Worth" value={summaryStats.netWorth} delay={0.3} />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PerformanceChart />
        <AllocationChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DistributionChart />
        <RecentTransactions />
        <Watchlist />
      </div>

      {/* Third row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TopPerformers />
        <LatestNews />
        <RecentActivities />
      </div>
    </div>
  );
}