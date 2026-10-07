import type { RouteObject } from "react-router-dom";
import DoctorLayout from "../layouts/DoctorLayout";
import DoctorDashboard from "../features/dashboard/pages/DoctorDashboard";

const doctorRoutes: RouteObject[] = [
    {
        element: <DoctorLayout />,
        children: [
            {
                path: "dashboard",
                element: <DoctorDashboard />,
            },
            {
                path: "appointments",
                element: <div>Doctor Appointments</div>,
            },
            {
                path: "patients",
                element: <div>Doctor Patients</div>,
            },
            {
                path: "consultations",
                element: <div>Doctor Consultations</div>,
            },
            {
                path: "schedule",
                element: <div>Doctor Schedule</div>,
            },
            {
                path: "independent-practice",
                element: <div>Doctor Independent Practice</div>,
            },
            {
                path: "hospital-assignments",
                element: <div>Doctor Hospital Assignments</div>,
            },
            {
                path: "leave",
                element: <div>Doctor Leave Management</div>,
            },
            {
                path: "chat",
                element: <div>Doctor Chat</div>,
            },
            {
                path: "notifications",
                element: <div>Doctor Notifications</div>,
            },
            {
                path: "earnings",
                element: <div>Doctor Earnings & Payments</div>,
            },
            {
                path: "profile",
                element: <div>Doctor My Profile</div>,
            },
            {
                path: "settings",
                element: <div>Doctor Settings</div>,
            },
        ],
    },
];

export default doctorRoutes;
