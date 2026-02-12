import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { medications } from "@/data/mockData";
import { Pill, Clock, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Medications = () => (
  <div className="space-y-6 pb-20 md:pb-0">
    <div>
      <h1 className="text-2xl font-display font-bold">Medications</h1>
      <p className="text-muted-foreground text-sm">Your current medication schedule</p>
    </div>

    <div className="grid gap-4">
      {medications.map((med) => (
        <Card key={med.id} className={!med.active ? "opacity-60" : ""}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${med.active ? "bg-primary/10" : "bg-muted"}`}>
                  <Pill className={`w-5 h-5 ${med.active ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <h3 className="font-medium">{med.name}</h3>
                  <p className="text-sm text-muted-foreground">{med.dosage} · {med.frequency}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {med.timing}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Badge variant={med.active ? "default" : "secondary"}>
                  {med.active ? "Active" : "Inactive"}
                </Badge>
                {med.active && med.refillDays <= 14 && (
                  <div className="flex items-center gap-1 text-xs text-medical-warning">
                    <AlertTriangle className="w-3 h-3" />
                    Refill in {med.refillDays}d
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Medications;
