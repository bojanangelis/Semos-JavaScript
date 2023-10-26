import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    if (!localStorage.getItem('email')) {
      return <Navigate to="/login" />;
    }
    return children;
  };