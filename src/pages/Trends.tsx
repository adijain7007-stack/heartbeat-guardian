import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { heartRateData, bpData, weightData, cholesterolData } from "@/data/mockData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Area, AreaChart } from "recharts";

type Metric = "heartRate" | "bp" | "weight" | "cholesterol";

const metrics: { key: Metric; label: string; color: string }[] = [
  { key: "heartRate", label: "Heart Rate", color: "hsl(0, 84%, 60%)" },
  { key: "bp", label: "Blood Pressure", color: "hsl(199, 89%, 48%)" },
  { key: "weight", label: "Weight", color: "hsl(172, 66%, 50%)" },
  { key: "cholesterol", label: "Cholesterol", color: "hsl(38, 92%, 50%)" },
];

const Trends = () => {
  const [active, setActive] = useState<Metric>("heartRate");

  return (
    <div className="space-y-6 pb-20 md:pb-0">
      <div>
        <h1 className="text-2xl font-display font-bold">Health Trends</h1>
        <p className="text-muted-foreground text-sm">6-month longitudinal view of your vitals</p>
      </div>

      {/* Metric Tabs */}
      <div className="flex gap-2 flex-wrap">
        {metrics.map((m) => (
          <button
            key={m.key}
            onClick={() => setActive(m.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              active === m.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Main Chart */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-display">
            {metrics.find((m) => m.key === active)?.label} — Last 6 Months
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              {active === "bp" ? (
                <LineChart data={bpData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[60, 160]} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
                  <ReferenceLine y={120} stroke="hsl(var(--medical-success))" strokeDasharray="5 5" label={{ value: "Normal Sys", fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                  <ReferenceLine y={80} stroke="hsl(var(--medical-success))" strokeDasharray="5 5" label={{ value: "Normal Dia", fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                  <Line type="monotone" dataKey="systolic" stroke="hsl(199, 89%, 48%)" strokeWidth={2} dot={{ r: 4 }} name="Systolic" />
                  <Line type="monotone" dataKey="diastolic" stroke="hsl(172, 66%, 50%)" strokeWidth={2} dot={{ r: 4 }} name="Diastolic" />
                </LineChart>
              ) : (
                <AreaChart data={active === "heartRate" ? heartRateData : active === "weight" ? weightData : cholesterolData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
                  <ReferenceLine y={active === "heartRate" ? 72 : active === "weight" ? 75 : 200} stroke="hsl(var(--medical-success))" strokeDasharray="5 5" label={{ value: "Baseline", fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                  <defs>
                    <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={metrics.find(m => m.key === active)?.color} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={metrics.find(m => m.key === active)?.color} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="value" stroke={metrics.find(m => m.key === active)?.color} strokeWidth={2} fill="url(#colorFill)" dot={{ r: 4 }} />
                </AreaChart>
              )}
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Heart Rate", current: "72 bpm", past: "76 bpm", change: -5.3, improved: true },
          { label: "Systolic BP", current: "138 mmHg", past: "130 mmHg", change: 6.2, improved: false },
          { label: "Weight", current: "78.5 kg", past: "82 kg", change: -4.3, improved: true },
          { label: "Cholesterol", current: "215 mg/dL", past: "200 mg/dL", change: 7.5, improved: false },
        ].map((item) => (
          <Card key={item.label}>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className="text-lg font-display font-bold">{item.current}</p>
              <div className="flex items-center gap-1 mt-1">
                <span className={`text-xs font-medium ${item.improved ? "text-medical-success" : "text-medical-critical"}`}>
                  {item.change > 0 ? "+" : ""}{item.change}%
                </span>
                <span className="text-xs text-muted-foreground">vs 6mo ago</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Trends;
