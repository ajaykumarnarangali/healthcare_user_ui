import type { RouteObject } from "react-router-dom";
import DoctorLayout from "../layouts/DoctorLayout";
import DoctorDashboard from "../features/dashboard/pages/DoctorDashboard";

const patientRoutes: RouteObject[] = [
    {
        element: <DoctorLayout />,
        children: [
            {
                path: "dashboard",
                element: <DoctorDashboard />,
            }
        ],
    },
];

export default patientRoutes;