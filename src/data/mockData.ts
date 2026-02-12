// ============ VITAL SIGNS ============
export const vitalSigns = [
  { label: "Heart Rate", value: 72, unit: "bpm", status: "normal" as const, trend: "stable" as const, icon: "Heart", min: 60, max: 100 },
  { label: "Blood Pressure", value: "138/88", unit: "mmHg", status: "warning" as const, trend: "up" as const, icon: "Activity", min: "90/60", max: "120/80" },
  { label: "Weight", value: 78.5, unit: "kg", status: "normal" as const, trend: "down" as const, icon: "Scale", min: 65, max: 85 },
  { label: "Cholesterol", value: 215, unit: "mg/dL", status: "warning" as const, trend: "up" as const, icon: "Droplets", min: 0, max: 200 },
];

export const healthScore = 78;

export const healthTip = "Regular 30-minute walks can reduce cardiovascular risk by up to 30%. Try incorporating a morning walk into your routine today!";

export const recentAlerts = [
  { id: 1, message: "Blood pressure elevated above baseline", severity: "warning" as const, time: "2 hours ago" },
  { id: 2, message: "Cholesterol trending upward over 2 weeks", severity: "warning" as const, time: "1 day ago" },
  { id: 3, message: "Heart rate within normal range", severity: "normal" as const, time: "3 hours ago" },
  { id: 4, message: "Missed medication reminder: Atorvastatin", severity: "critical" as const, time: "5 hours ago" },
];

// ============ TREND DATA (6 months) ============
const months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];

export const heartRateData = months.map((m, i) => ({
  month: m,
  value: [74, 76, 71, 73, 70, 72][i],
  baseline: 72,
}));

export const bpData = months.map((m, i) => ({
  month: m,
  systolic: [130, 135, 128, 140, 136, 138][i],
  diastolic: [82, 85, 80, 90, 86, 88][i],
  baselineSys: 120,
  baselineDia: 80,
}));

export const weightData = months.map((m, i) => ({
  month: m,
  value: [82, 81, 80, 79.5, 79, 78.5][i],
  baseline: 75,
}));

export const cholesterolData = months.map((m, i) => ({
  month: m,
  value: [200, 205, 195, 210, 208, 215][i],
  baseline: 200,
}));

// ============ RISK DATA ============
export const overallRiskScore = 42;

export const riskCategories = [
  { name: "Cardiac", score: 45, level: "medium" as const },
  { name: "Diabetes", score: 25, level: "low" as const },
  { name: "Hypertension", score: 62, level: "high" as const },
  { name: "Obesity", score: 30, level: "low" as const },
  { name: "Stress", score: 50, level: "medium" as const },
];

export const radarData = riskCategories.map((c) => ({ subject: c.name, value: c.score, fullMark: 100 }));

// ============ INSIGHTS ============
export const insights = [
  { id: 1, type: "positive" as const, title: "Heart Rate Improving", description: "Your resting heart rate has decreased by 4 bpm over the past 3 months.", action: "Continue current exercise routine", time: "Today" },
  { id: 2, type: "warning" as const, title: "Blood Pressure Elevated", description: "Your systolic BP has been above 130 mmHg for 2 consecutive weeks.", action: "Reduce sodium intake and monitor daily", time: "Yesterday" },
  { id: 3, type: "info" as const, title: "Cholesterol Check Due", description: "Your last lipid panel was 3 months ago. Consider scheduling a follow-up.", action: "Book lab appointment", time: "2 days ago" },
  { id: 4, type: "positive" as const, title: "Weight Loss Progress", description: "You've lost 3.5 kg over the past 6 months. Great progress!", action: "Maintain balanced diet", time: "3 days ago" },
  { id: 5, type: "warning" as const, title: "Stress Level Rising", description: "Elevated cortisol patterns detected from recent health data.", action: "Practice meditation or breathing exercises", time: "1 week ago" },
];

export const doctorRecommendations = [
  { id: 1, text: "Reduce daily sodium intake to under 2,300 mg", done: true },
  { id: 2, text: "Walk 30 minutes daily, 5 days a week", done: true },
  { id: 3, text: "Schedule follow-up lipid panel in 2 weeks", done: false },
  { id: 4, text: "Monitor blood pressure twice daily", done: false },
  { id: 5, text: "Increase potassium-rich foods in diet", done: false },
];

// ============ MEDICATIONS ============
export const medications = [
  { id: 1, name: "Atorvastatin", dosage: "20mg", frequency: "Once daily", timing: "Evening", active: true, refillDays: 12 },
  { id: 2, name: "Lisinopril", dosage: "10mg", frequency: "Once daily", timing: "Morning", active: true, refillDays: 25 },
  { id: 3, name: "Aspirin", dosage: "81mg", frequency: "Once daily", timing: "Morning", active: true, refillDays: 40 },
  { id: 4, name: "Metformin", dosage: "500mg", frequency: "Twice daily", timing: "Morning & Evening", active: false, refillDays: 0 },
];

// ============ APPOINTMENTS ============
export const appointments = [
  { id: 1, doctor: "Dr. Priya Patel", specialty: "Cardiologist", date: "2026-02-18", time: "10:00 AM", type: "follow-up" as const, virtual: true },
  { id: 2, doctor: "Dr. Anand Kumar", specialty: "General Physician", date: "2026-02-25", time: "2:30 PM", type: "routine" as const, virtual: false },
  { id: 3, doctor: "Dr. Sneha Reddy", specialty: "Endocrinologist", date: "2026-03-05", time: "11:00 AM", type: "routine" as const, virtual: true },
  { id: 4, doctor: "Dr. Priya Patel", specialty: "Cardiologist", date: "2026-03-20", time: "9:30 AM", type: "urgent" as const, virtual: false },
];

// ============ MEDICAL REPORTS ============
export const medicalReports = [
  { id: 1, name: "Complete Blood Count", type: "Lab Report", date: "2026-02-01", fileType: "pdf" },
  { id: 2, name: "ECG Report", type: "Cardiac", date: "2026-01-20", fileType: "pdf" },
  { id: 3, name: "Lipid Panel", type: "Lab Report", date: "2026-01-10", fileType: "pdf" },
  { id: 4, name: "Chest X-Ray", type: "Radiology", date: "2025-12-15", fileType: "image" },
];

// ============ DOCTOR VIEW - PATIENTS LIST ============
export const patientsList = [
  { id: "p1", name: "Rahul Sharma", age: 45, riskScore: 42, lastVisit: "2026-02-10", status: "warning" as const },
  { id: "p2", name: "Meera Iyer", age: 62, riskScore: 68, lastVisit: "2026-02-08", status: "critical" as const },
  { id: "p3", name: "Anil Verma", age: 38, riskScore: 15, lastVisit: "2026-02-05", status: "normal" as const },
  { id: "p4", name: "Sunita Devi", age: 55, riskScore: 54, lastVisit: "2026-01-28", status: "warning" as const },
  { id: "p5", name: "Vikram Singh", age: 50, riskScore: 32, lastVisit: "2026-02-12", status: "normal" as const },
];
