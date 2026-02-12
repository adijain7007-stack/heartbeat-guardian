import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { appointments } from "@/data/mockData";
import { CalendarDays, Video, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const typeBadge = {
  routine: "bg-medical-info/10 text-medical-info border-medical-info/20",
  "follow-up": "bg-medical-warning/10 text-medical-warning border-medical-warning/20",
  urgent: "bg-medical-critical/10 text-medical-critical border-medical-critical/20",
};

const Appointments = () => (
  <div className="space-y-6 pb-20 md:pb-0">
    <div>
      <h1 className="text-2xl font-display font-bold">Appointments</h1>
      <p className="text-muted-foreground text-sm">Upcoming consultations and visits</p>
    </div>

    <div className="grid gap-4">
      {appointments.map((apt) => (
        <Card key={apt.id}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CalendarDays className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{apt.doctor}</h3>
                  <p className="text-sm text-muted-foreground">{apt.specialty}</p>
                  <p className="text-sm mt-1">
                    {new Date(apt.date).toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric" })} at {apt.time}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                    {apt.virtual ? <Video className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                    {apt.virtual ? "Virtual" : "In-person"}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Badge variant="outline" className={typeBadge[apt.type]}>
                  {apt.type}
                </Badge>
                {apt.virtual && (
                  <Button size="sm" variant="outline" className="text-xs">
                    <Video className="w-3 h-3 mr-1" /> Join
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Appointments;
