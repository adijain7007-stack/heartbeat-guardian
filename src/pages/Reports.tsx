import { Card, CardContent } from "@/components/ui/card";
import { medicalReports } from "@/data/mockData";
import { FileText, Image, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reports = () => (
  <div className="space-y-6 pb-20 md:pb-0">
    <div>
      <h1 className="text-2xl font-display font-bold">Medical Reports</h1>
      <p className="text-muted-foreground text-sm">Your uploaded lab results and documents</p>
    </div>

    <div className="grid gap-4">
      {medicalReports.map((report) => (
        <Card key={report.id}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                {report.fileType === "pdf" ? <FileText className="w-5 h-5 text-primary" /> : <Image className="w-5 h-5 text-primary" />}
              </div>
              <div>
                <h3 className="font-medium text-sm">{report.name}</h3>
                <p className="text-xs text-muted-foreground">{report.type} · {new Date(report.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Download className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Reports;
