import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
      {
        path: "/doctor",
        id: "doctor",
        element: <ProtectedRoute />,
      },
      {
        path: "/patient",
        id: "patient",
        element: <ProtectedRoute />,
      },
    ],
    {
      async patchRoutesOnNavigation({ path, patch }) {
        if (path.startsWith("/doctor")) {
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
      <RouterProvider router={router} />
    </Fragment>
  )
}

export default App;