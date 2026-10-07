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
            }
        ],
    },
];

export default patientRoutes;