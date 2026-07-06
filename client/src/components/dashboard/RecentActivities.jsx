import { Activity } from "lucide-react";
import Card from "../ui/Card";
import { recentActivities } from "../../data/dashboardData";

export default function RecentActivities() {
  return (
    <Card delay={0.45}>
      <div className="flex items-center gap-2 mb-4">
        <Activity size={16} className="text-primary-500" />
        <h3 className="font-bold text-slate-900 dark:text-white">Recent Activities</h3>
      </div>
      <div className="space-y-4">
        {recentActivities.map((activity, i) => (
          <div key={activity.id} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className="w-2 h-2 rounded-full bg-primary-500 mt-1.5" />
              {i !== recentActivities.length - 1 && (
                <span className="w-px flex-1 bg-slate-100 dark:bg-white/10 mt-1" />
              )}
            </div>
            <div className="pb-1">
              <p className="text-sm text-slate-700 dark:text-slate-300">{activity.text}</p>
              <p className="text-xs text-slate-400 mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
