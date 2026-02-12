

# Cardio Sentinel AI – Implementation Plan

## Overview
A comprehensive AI-powered patient health monitoring dashboard for the AWS AI for Bharat Hackathon. Frontend-only with realistic mock data, clean white/light medical theme, and mobile-first responsive design.

---

## Phase 1: Foundation & Authentication Pages

### Login & Signup
- Clean login page with email/password fields, role selector (Patient / Doctor)
- Signup page with name, email, password, and role selection
- Mock authentication flow that routes to the appropriate dashboard
- "Cardio Sentinel AI" branding with a heart/pulse logo

### App Layout
- Top navigation bar with patient name, notifications bell, and profile avatar
- Tab-based navigation: Dashboard, Trends, Risk Analysis, Medications, Appointments
- Responsive sidebar for desktop, bottom tabs for mobile

---

## Phase 2: Health Dashboard (Home)

### Vital Signs Cards
- Four key metric cards: Heart Rate, Blood Pressure, Weight, Cholesterol
- Each card shows current value, status badge (Normal/Warning/Critical), and trend arrow (↑↓→)
- Color-coded borders: green for normal, amber for warning, red for critical

### Quick Health Summary
- Overall health score as a circular progress indicator
- Last checkup date and next appointment preview
- AI-generated "Health Tip of the Day"

### Recent Alerts Section
- List of recent anomaly detections and warnings with timestamps
- Color-coded severity indicators

---

## Phase 3: Longitudinal Trends (Charts Page)

### 6-Month Health Trends
- Interactive line/area charts for heart rate, blood pressure, weight, and cholesterol over 6 months
- Toggle between daily, weekly, and monthly views
- Hover tooltips showing exact values and dates
- Baseline reference lines showing the patient's personal healthy range

### Comparison View
- Side-by-side past vs. current data comparison cards
- Progress percentage indicators showing improvement or decline

---

## Phase 4: AI Risk Prediction & Insights

### Risk Assessment Dashboard
- Overall risk score with a large circular progress indicator
- Radar chart showing five risk dimensions: Cardiac, Diabetes, Hypertension, Obesity, Stress
- Individual risk category cards with progress bars and color-coded levels (Low/Medium/High)

### AI-Generated Insights
- Categorized insight cards: Positive (green), Warning (amber), Informational (blue)
- Each insight with timestamp, description, and recommended action
- Doctor-guided recommendations displayed as a checklist

---

## Phase 5: Medication & Appointments

### Medication Management
- Medication list with name, dosage, frequency, and timing
- Active/inactive status toggle
- Refill tracking with "days until refill" indicator
- Visual pill icons and reminder indicators

### Appointment System
- Upcoming appointments list with doctor name, specialty, date/time
- Appointment type badges (Routine / Follow-up / Urgent)
- "Join Tele-consultation" button for virtual appointments
- Simple calendar view showing scheduled dates

---

## Phase 6: Additional Features

### Medical Reports
- Mock uploaded reports list (lab results, ECG, blood work)
- File type icons, dates, and download buttons

### Doctor Dashboard View
- When logged in as a doctor, show a patient list view
- Click into any patient to see their full dashboard
- Doctor can view AI insights and add recommendations

---

## Design Approach
- **Theme**: Clean white/light with blue and teal medical accents
- **Typography**: Clear, high-contrast text for accessibility
- **Cards**: Subtle shadows, rounded corners, organized grid layout
- **Mobile-first**: Touch-friendly controls, responsive grid that stacks on small screens
- **Charts**: Recharts library with consistent color palette and smooth animations

