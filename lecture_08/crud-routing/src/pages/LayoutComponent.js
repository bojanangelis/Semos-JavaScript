import { Outlet } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

const LayoutComponent = () => (
    <ProtectedRoute >
      <Outlet />
    </ProtectedRoute>
);

export default LayoutComponent;