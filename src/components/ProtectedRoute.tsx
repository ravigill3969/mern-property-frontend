import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "../zustand/store";

// Define props for ProtectedRoute
interface ProtectedRouteProps {
  children: ReactNode; // This ensures React components can be passed as children
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = useAuth().isLoggedIn;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>; // Render children if authenticated
};

export default ProtectedRoute;
