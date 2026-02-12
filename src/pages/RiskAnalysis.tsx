import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { overallRiskScore, riskCategories, radarData, insights, doctorRecommendations } from "@/data/mockData";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { CheckCircle, Circle, AlertTriangle, Info, TrendingUp } from "lucide-react";

const levelColors = { low: "bg-medical-success", medium: "bg-medical-warning", high: "bg-medical-critical" };
const levelText = { low: "text-medical-success", medium: "text-medical-warning", high: "text-medical-critical" };

const insightIcons = { positive: TrendingUp, warning: AlertTriangle, info: Info };
const insightColors = { positive: "border-l-medical-success bg-medical-success/5", warning: "border-l-medical-warning bg-medical-warning/5", info: "border-l-medical-info bg-medical-info/5" };

const RiskAnalysis = () => (
  <div className="space-y-6 pb-20 md:pb-0">
    <div>
      <h1 className="text-2xl font-display font-bold">AI Risk Analysis</h1>
      <p className="text-muted-foreground text-sm">ML-powered cardiovascular risk assessment</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Overall Risk Score */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-display">Overall Risk Score</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="relative w-36 h-36">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
              <circle
                cx="18" cy="18" r="15.5" fill="none"
                stroke={overallRiskScore > 60 ? "hsl(var(--medical-critical))" : overallRiskScore > 40 ? "hsl(var(--medical-warning))" : "hsl(var(--medical-success))"}
                strokeWidth="3"
                strokeDasharray={`${overallRiskScore} ${100 - overallRiskScore}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-display font-bold">{overallRiskScore}</span>
              <span className="text-xs text-muted-foreground">Medium</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Radar Chart */}
      <Card className="lg:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-display">Risk Dimensions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
                <Radar name="Risk" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Risk Category Cards */}
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
      {riskCategories.map((cat) => (
        <Card key={cat.name}>
          <CardContent className="p-4">
            <p className="text-sm font-medium mb-2">{cat.name}</p>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${levelColors[cat.level]}`} style={{ width: `${cat.score}%` }} />
            </div>
            <div className="flex justify-between mt-1">
              <span className={`text-xs font-medium capitalize ${levelText[cat.level]}`}>{cat.level}</span>
              <span className="text-xs text-muted-foreground">{cat.score}%</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* AI Insights */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-display">AI-Generated Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {insights.map((insight) => {
            const Icon = insightIcons[insight.type];
            return (
              <div key={insight.id} className={`border-l-4 rounded-r-lg p-3 ${insightColors[insight.type]}`}>
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{insight.title}</span>
                  <span className="text-xs text-muted-foreground ml-auto">{insight.time}</span>
                </div>
                <p className="text-xs text-muted-foreground">{insight.description}</p>
                <p className="text-xs font-medium text-primary mt-1">→ {insight.action}</p>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Doctor Recommendations */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-display">Doctor Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {doctorRecommendations.map((rec) => (
            <div key={rec.id} className="flex items-start gap-3">
              {rec.done ? (
                <CheckCircle className="w-5 h-5 text-medical-success mt-0.5 flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              )}
              <span className={`text-sm ${rec.done ? "line-through text-muted-foreground" : ""}`}>{rec.text}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  </div>
);

export default RiskAnalysis;
