// Realistic dummy data powering the dashboard UI.
// Structured so it can later be replaced 1:1 with real API responses.

export const summaryStats = {
  portfolioValue: 128450.32,
  todaysProfit: 2145.6,
  todaysLoss: -340.15,
  totalInvested: 98500.0,
  availableCash: 12300.5,
  riskScore: 62,
  netWorth: 141890.4,
};

export const allocationData = [
  { name: "Equities", value: 52, color: "#3366FF" },
  { name: "Crypto", value: 18, color: "#6366F1" },
  { name: "Bonds", value: 15, color: "#10B981" },
  { name: "Cash", value: 10, color: "#F59E0B" },
  { name: "Real Estate", value: 5, color: "#F43F5E" },
];

export const performanceData = [
  { month: "Jan", value: 92000 },
  { month: "Feb", value: 95500 },
  { month: "Mar", value: 93800 },
  { month: "Apr", value: 99200 },
  { month: "May", value: 104500 },
  { month: "Jun", value: 101800 },
  { month: "Jul", value: 110200 },
  { month: "Aug", value: 115900 },
  { month: "Sep", value: 112400 },
  { month: "Oct", value: 121300 },
  { month: "Nov", value: 124800 },
  { month: "Dec", value: 128450 },
];

export const distributionData = [
  { sector: "Technology", pct: 34 },
  { sector: "Finance", pct: 21 },
  { sector: "Healthcare", pct: 15 },
  { sector: "Energy", pct: 12 },
  { sector: "Consumer", pct: 10 },
  { sector: "Other", pct: 8 },
];

export const recentTransactions = [
  { id: 1, type: "BUY", symbol: "AAPL", qty: 10, price: 212.53, date: "2026-07-04", total: 2125.3 },
  { id: 2, type: "SELL", symbol: "TSLA", qty: 5, price: 178.2, date: "2026-07-03", total: 891.0 },
  { id: 3, type: "BUY", symbol: "NVDA", qty: 8, price: 143.87, date: "2026-07-02", total: 1150.96 },
  { id: 4, type: "BUY", symbol: "BTC", qty: 0.05, price: 96432.1, date: "2026-07-01", total: 4821.6 },
  { id: 5, type: "SELL", symbol: "AMZN", qty: 12, price: 201.12, date: "2026-06-29", total: 2413.44 },
];

export const watchlist = [
  { symbol: "AAPL", price: 212.53, change: 1.24, up: true },
  { symbol: "AMD", price: 168.91, change: 3.02, up: true },
  { symbol: "GOOGL", price: 197.22, change: 1.05, up: true },
  { symbol: "TSLA", price: 178.2, change: -0.91, up: false },
];

export const topPerformers = [
  { symbol: "NVDA", change: 2.11, name: "NVIDIA Corp." },
  { symbol: "AMD", change: 3.02, name: "Advanced Micro Devices" },
  { symbol: "BTC", change: 2.87, name: "Bitcoin" },
  { symbol: "GOOGL", change: 1.05, name: "Alphabet Inc." },
];

export const financialNews = [
  {
    id: 1,
    title: "Fed signals potential rate cuts as inflation cools further",
    source: "Bloomberg",
    time: "2h ago",
    sentiment: "positive",
  },
  {
    id: 2,
    title: "Tech earnings season kicks off with mixed investor expectations",
    source: "Reuters",
    time: "4h ago",
    sentiment: "neutral",
  },
  {
    id: 3,
    title: "Semiconductor stocks rally on strong AI chip demand outlook",
    source: "CNBC",
    time: "6h ago",
    sentiment: "positive",
  },
  {
    id: 4,
    title: "Oil prices dip amid concerns over global demand slowdown",
    source: "WSJ",
    time: "9h ago",
    sentiment: "negative",
  },
];

export const recentActivities = [
  { id: 1, text: "You set a price alert for TSLA at $170", time: "1h ago" },
  { id: 2, text: "Portfolio rebalancing suggestion generated", time: "3h ago" },
  { id: 3, text: "You added NVDA to your watchlist", time: "5h ago" },
  { id: 4, text: "Risk analyzer flagged high crypto exposure", time: "1d ago" },
];
