import { useState } from "react";
import { Outlet } from "react-router-dom";
import StockTicker from "../components/dashboard/StockTicker";
import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";
import PageTransition from "../components/common/PageTransition";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-surface-subtle dark:bg-surface-dark">
      <StockTicker />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNavbar onMobileMenuClick={() => setMobileOpen(true)} />
          <main className="flex-1 overflow-y-auto px-4 md:px-6 py-6">
            <PageTransition>
              <Outlet />
            </PageTransition>
          </main>
        </div>
      </div>
    </div>
  );
}
