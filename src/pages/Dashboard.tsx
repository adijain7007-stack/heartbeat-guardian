import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { vitalSigns, healthScore, healthTip, recentAlerts } from "@/data/mockData";
import { Heart, Activity, Scale, Droplets, TrendingUp, TrendingDown, Minus, Lightbulb, AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Heart, Activity, Scale, Droplets };

const statusColors = {
  normal: "border-l-medical-success bg-medical-success/5",
  warning: "border-l-medical-warning bg-medical-warning/5",
  critical: "border-l-medical-critical bg-medical-critical/5",
};

const statusBadge = {
  normal: "bg-medical-success/10 text-medical-success",
  warning: "bg-medical-warning/10 text-medical-warning",
  critical: "bg-medical-critical/10 text-medical-critical",
};

const trendIcon = { up: TrendingUp, down: TrendingDown, stable: Minus };

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6 pb-20 md:pb-0">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-display font-bold">Good Morning, {user?.name?.split(" ")[0]} 👋</h1>
        <p className="text-muted-foreground text-sm">Here's your health overview for today</p>
      </div>

      {/* Vital Signs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {vitalSigns.map((vital) => {
          const Icon = iconMap[vital.icon] || Heart;
          const TrendIcon = trendIcon[vital.trend];
          return (
            <Card key={vital.label} className={`border-l-4 ${statusColors[vital.status]}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">{vital.label}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${statusBadge[vital.status]}`}>
                    {vital.status}
                  </span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-display font-bold">{vital.value}</span>
                  <span className="text-sm text-muted-foreground mb-1">{vital.unit}</span>
                  <TrendIcon className={`w-4 h-4 mb-1 ml-auto ${
                    vital.trend === "up" ? "text-medical-warning" : vital.trend === "down" ? "text-medical-success" : "text-muted-foreground"
                  }`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Health Score */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-display">Overall Health Score</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                <circle
                  cx="18" cy="18" r="15.5" fill="none"
                  stroke="hsl(var(--primary))" strokeWidth="3"
                  strokeDasharray={`${healthScore} ${100 - healthScore}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-display font-bold">{healthScore}</span>
                <span className="text-xs text-muted-foreground">/ 100</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Last checkup: Feb 10, 2026</p>
          </CardContent>
        </Card>

        {/* Health Tip */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-display flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-primary" />
              Health Tip of the Day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">{healthTip}</p>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-display">Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentAlerts.map((alert) => {
              const AlertIcon = alert.severity === "critical" ? AlertCircle
                : alert.severity === "warning" ? AlertTriangle : CheckCircle;
              return (
                <div key={alert.id} className="flex items-start gap-2">
                  <AlertIcon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                    alert.severity === "critical" ? "text-medical-critical"
                    : alert.severity === "warning" ? "text-medical-warning" : "text-medical-success"
                  }`} />
                  <div className="min-w-0">
                    <p className="text-sm leading-tight">{alert.message}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
