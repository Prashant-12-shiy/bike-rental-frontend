import { Navigate } from "react-router-dom";

// Assuming you have a function or hook that checks for authentication
import { useAuth } from "../src/hooks/useAuth"; // Custom hook that checks user authentication
import { ReactNode } from "react";
interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  console.log("ProtectedRoute isAuthenticated:", isAuthenticated);

  if (isAuthenticated === false) {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // If the user is authenticated, render the children components
  return children;
};

export default ProtectedRoute;
