// Shared formatting helpers used across dashboard widgets

export function formatCurrency(value, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatCompactNumber(value) {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(
    value
  );
}

export function formatPercent(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export function isMarketOpen() {
  // Simplified: US market hours 9:30am - 4:00pm ET, Mon-Fri (approximate, ignoring timezone conversion for demo)
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  if (day === 0 || day === 6) return false;
  return hour >= 9 && hour < 16;
}
