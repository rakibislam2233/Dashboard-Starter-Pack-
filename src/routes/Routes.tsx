import { createBrowserRouter } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>Not Found</h1>,
    element: (
      <AdminRoutes>
        <App />
      </AdminRoutes>
    ),
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
    ],
  },
]);

export default router;
