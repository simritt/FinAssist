import { Settings as SettingsIcon, User, Bell, Palette, Shield } from "lucide-react";
import Card from "../components/ui/Card";
import { useAuth } from "../context/AuthContext";

const sections = [
  { icon: User, label: "Profile", desc: "Name, email, and profile photo" },
  { icon: Bell, label: "Notifications", desc: "Alerts and email preferences" },
  { icon: Palette, label: "Appearance", desc: "Theme and display options" },
  { icon: Shield, label: "Security", desc: "Password and session management" },
];

// Placeholder only — teammates can build out real forms/settings logic here.
export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Manage your account, {user?.fullName?.split(" ")[0]}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {sections.map((s) => (
          <Card key={s.label} className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
              <s.icon size={20} />
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-white">{s.label}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{s.desc}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card hover={false} className="flex items-center gap-3 text-slate-400">
        <SettingsIcon size={16} />
        <p className="text-sm">Full settings functionality coming soon.</p>
      </Card>
    </div>
  );
}
