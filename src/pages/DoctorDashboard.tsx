import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { patientsList } from "@/data/mockData";
import { useAuth } from "@/contexts/AuthContext";
import { Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const statusBadge = {
  normal: "bg-medical-success/10 text-medical-success border-medical-success/20",
  warning: "bg-medical-warning/10 text-medical-warning border-medical-warning/20",
  critical: "bg-medical-critical/10 text-medical-critical border-medical-critical/20",
};

const DoctorDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6 pb-20 md:pb-0">
      <div>
        <h1 className="text-2xl font-display font-bold">Welcome, {user?.name} 👋</h1>
        <p className="text-muted-foreground text-sm">Your patient overview</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-display font-bold">{patientsList.length}</p>
              <p className="text-xs text-muted-foreground">Total Patients</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-medical-warning/10 flex items-center justify-center">
              <span className="text-medical-warning font-bold">{patientsList.filter(p => p.status === "warning").length}</span>
            </div>
            <div>
              <p className="text-sm font-medium">Needs Attention</p>
              <p className="text-xs text-muted-foreground">Warning status</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-medical-critical/10 flex items-center justify-center">
              <span className="text-medical-critical font-bold">{patientsList.filter(p => p.status === "critical").length}</span>
            </div>
            <div>
              <p className="text-sm font-medium">Critical</p>
              <p className="text-xs text-muted-foreground">Immediate review</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-display">Patient List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {patientsList.map((patient) => (
              <div key={patient.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                    {patient.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{patient.name}</p>
                    <p className="text-xs text-muted-foreground">Age {patient.age} · Last visit: {new Date(patient.lastVisit).toLocaleDateString("en-IN", { month: "short", day: "numeric" })}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-medium">Risk: {patient.riskScore}%</p>
                    <Badge variant="outline" className={`text-xs ${statusBadge[patient.status]}`}>
                      {patient.status}
                    </Badge>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorDashboard;
