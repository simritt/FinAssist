import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardHome from "./pages/DashboardHome";
import PortfolioAnalyzerPage from "./pages/PortfolioAnalyzerPage";
import ValuationCalculatorPage from "./pages/ValuationCalculatorPage";
import HistoricalTrackerPage from "./pages/HistoricalTrackerPage";
import NewsSentimentPage from "./pages/NewsSentimentPage";
import RiskAnalyzerPage from "./pages/RiskAnalyzerPage";
import SettingsPage from "./pages/SettingsPage";

import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/common/ProtectedRoute";

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected dashboard routes — nested under DashboardLayout */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="portfolio-analyzer" element={<PortfolioAnalyzerPage />} />
          <Route path="valuation-calculator" element={<ValuationCalculatorPage />} />
          <Route path="historical-tracker" element={<HistoricalTrackerPage />} />
          <Route path="news-sentiment" element={<NewsSentimentPage />} />
          <Route path="risk-analyzer" element={<RiskAnalyzerPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </AnimatePresence>
  );
}
