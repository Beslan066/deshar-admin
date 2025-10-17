import type { ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";
import useRole from "../shared/hooks/useRole";
import type { Role } from "../types/auth";

interface ProtectedRouteProps {
    children: ReactNode;
    allowedRoles: Role[];
    fallbackPath?: string;
    showLoader?: boolean;
}

export const ProtectedRoute = ({
    children,
    allowedRoles,
    fallbackPath = '/',
    showLoader = false
}: ProtectedRouteProps) => {
    const { role } = useRole();
    const location = useLocation();

    if (role === undefined && showLoader) {
        return <div>Loading...</div>;
    }
    const hasAccess = role && allowedRoles.includes(role);

    if (!hasAccess) {

        return <Navigate to={fallbackPath} state={{ from: location }} replace />;
    }

    return <>{children}</>;
};