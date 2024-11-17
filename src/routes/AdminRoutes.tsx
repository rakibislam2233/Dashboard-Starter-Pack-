import React from "react";
import { Navigate } from "react-router-dom";

interface IUser {
  name: string;
  email: string;
  role: string;
}
const AdminRoutes = ({ children }: { children: React.ReactNode }) => {
  const user: IUser = {
    name: "John Doe",
    email: "Kx2lH@example.com",
    role: "admin",
  };

  if (user.role === "admin") {
    return <div>{children}</div>;
  }
  <Navigate to="/login" replace={true} />;
};

export default AdminRoutes;
