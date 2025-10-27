import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { SignIn } from "../pages/SignIn/SignIn";
import { Main } from "../pages/Main/Main";
import { Class } from "../pages/Class/Class";
import { StudentPage } from "../pages/Student/Student";
import { Attestations } from "../pages/Attestations/Attestations";
import { ProtectedRoute } from "./ProtectedRoute";
import { School } from "../pages/School/School";

export const router = createBrowserRouter([
    {
        path: '/sign-in',
        element: <SignIn />
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <ProtectedRoute allowedRoles={["admin", "teacher", "department"]} fallbackPath="/sign-in">
                    <Main />
                </ProtectedRoute>
            },
            {
                path: '/:schoolId',
                element: <ProtectedRoute allowedRoles={["admin", "teacher", "department"]} fallbackPath="/sign-in">
                    <School />
                </ProtectedRoute>
            },
            {
                path: '/class/:classId',
                element: <ProtectedRoute allowedRoles={["admin", "teacher", "department"]} fallbackPath="/sign-in">
                    <Class />
                </ProtectedRoute>
            },
            {
                path: '/class/:classId/student/:studentId',
                element: <ProtectedRoute allowedRoles={["admin", "teacher", "department"]} fallbackPath="/sign-in">
                    <StudentPage />
                </ProtectedRoute>
            },
            {
                path: '/attestations',
                element: <ProtectedRoute allowedRoles={["admin", "teacher", "department"]} fallbackPath="/sign-in">
                    <Attestations />
                </ProtectedRoute>
            },
        ]
    },
])