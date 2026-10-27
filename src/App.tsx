import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { Toaster } from "sonner"

import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import VerifyEmailPage from "./features/auth/pages/VerifyEmailPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicOnlyRoute from "./routes/PublicOnlyRoute";
import NotFoundPage from "./components/NotFound";

function App() {

  const router = createBrowserRouter(
    [
      {
        element: <PublicOnlyRoute />,
        children: [
          {
            path: "/",
            element: <LoginPage />,
          },
          {
            path: "/register",
            element: <RegisterPage />,
          },
          {
            path: "/verify-email",
            element: <VerifyEmailPage />,
          },
        ],
      },
      {
        path: "/doctor",
        id: "doctor",
        element: <ProtectedRoute allowedRole="DOCTOR" />,
      },
      {
        path: "/patient",
        id: "patient",
        element: <ProtectedRoute allowedRole="PATIENT" />,
      },
      {
        path: "*",
        element: <NotFoundPage />
      },
    ],
    {
      async patchRoutesOnNavigation({ path, patch }) {
        if (path.startsWith("/doctor")) {
          console.log("data fetch working");
          const { default: doctorRoutes } =
            await import("./routes/doctorRoutes");

          patch("doctor", doctorRoutes);
        }

        if (path.startsWith("/patient")) {
          const { default: patientRoutes } =
            await import("./routes/patientRoutes");

          patch("patient", patientRoutes);
        }
      },
    }
  );

  return (
    <Fragment>
      <Toaster position="top-right" richColors />
      <RouterProvider router={router} />
    </Fragment>
  )
}

export default App;