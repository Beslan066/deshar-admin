import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { SignIn } from "../pages/SignIn/SignIn";
import { Main } from "../pages/Main/Main";
import { Class } from "../pages/Class/Class";
import { StudentPage } from "../pages/Student/Student";
import { Attestations } from "../pages/Attestations/Attestations";
import { ProtectedRoute } from "./ProtectedRoute";
import { Schools } from "../pages/Schools/Schools";
import { SchoolStat } from "../pages/SchoolStat/SchoolStat";
import { Teachers } from "../pages/Teachers/Teachers";

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
                element: <ProtectedRoute allowedRoles={["admin", "teacher", "department"]} fallbackPath="/sign-in" showLoader={true}>
                    <Main />
                </ProtectedRoute>
            },
            {
                path: '/:schoolId',
                element: <ProtectedRoute allowedRoles={["admin", "department"]} fallbackPath="/sign-in" showLoader={true}>
                    <SchoolStat />
                </ProtectedRoute>
            },
            {
                path: '/class/:classId',
                element: <ProtectedRoute allowedRoles={["admin", "teacher", "department"]} fallbackPath="/sign-in" showLoader={true}>
                    <Class />
                </ProtectedRoute>
            },
            {
                path: '/class/:classId/student/:studentId',
                element: <ProtectedRoute allowedRoles={["admin", "teacher", "department"]} fallbackPath="/sign-in" showLoader={true}>
                    <StudentPage />
                </ProtectedRoute>
            },
            {
                path: '/attestations',
                element: <ProtectedRoute allowedRoles={["admin", "department"]} fallbackPath="/sign-in" showLoader={true}>
                    <Attestations />
                </ProtectedRoute>
            },
            {
                path: '/schools',
                element: <ProtectedRoute allowedRoles={["admin", "department"]} fallbackPath="/sign-in" showLoader={true}>
                    <Schools />
                </ProtectedRoute>
            },
            {
                path: '/schools/:schoolID',
                element: <ProtectedRoute allowedRoles={["admin", "department"]} fallbackPath="/sign-in" showLoader={true}>
                    <SchoolStat />
                </ProtectedRoute>
            },
            {
                path: '/teachers',
                element: <ProtectedRoute allowedRoles={["admin", "department"]} fallbackPath="/sign-in" showLoader={true}>
                    <Teachers />
                </ProtectedRoute>
            },
        ]
    },
])