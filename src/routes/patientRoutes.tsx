import type { RouteObject } from "react-router-dom";
import PatientLayout from "../layouts/PatientLayout";
import PatientDashboard from "../features/dashboard/pages/PatientDashboard";


const patientRoutes: RouteObject[] = [
    {
        element: <PatientLayout />,
        children: [
            {
                path: "dashboard",
                element: <PatientDashboard />,
            },
            {
                path: "doctors",
                element: <div>Find Doctors</div>,
            },
            {
                path: "hospitals",
                element: <div>Find Hospitals</div>,
            },
            {
                path: "appointments",
                element: <div>Patient Appointments</div>,
            },
            {
                path: "payments",
                element: <div>Patient Payments</div>,
            },
            {
                path: "consultations",
                element: <div>Patient Consultations</div>,
            },
            {
                path: "chat",
                element: <div>Patient Chats</div>,
            },
            {
                path: "notifications",
                element: <div>Patient Notifications</div>,
            },
            {
                path: "profile",
                element: <div>Patient My Profile</div>,
            },
            {
                path: "settings",
                element: <div>Patient Settings</div>,
            },
        ],
    },
];

export default patientRoutes;