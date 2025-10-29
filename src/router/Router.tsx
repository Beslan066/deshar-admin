import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { SignIn } from "../pages/SignIn/SignIn";
import { Class } from "../pages/Class/Class";
import { StudentPage } from "../pages/Student/Student";
import { Attestations } from "../pages/Attestations/Attestations";
import { ProtectedRoute } from "./ProtectedRoute";
import { Schools } from "../pages/Schools/Schools";
import { SchoolStat } from "../pages/SchoolStat/SchoolStat";
import { Teachers } from "../pages/Teachers/Teachers";
import { SchoolDashboard } from "../pages/SchoolDashboard/SchoolDashboard";
import { StatisticLayout } from "./StatisticLayout/StatisticLayout";
import { MainStatisticPageContent } from "../pages/MainStatistic/MainStatistic";
import { TeacherStudents } from "../components/TeacherStudents/TeacherStudents";

export const router = createBrowserRouter([
    {
        path: '/sign-in',
        element: <SignIn />
    },
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <ProtectedRoute allowedRoles={["admin", "teacher", "vicePrincipal", "department", "ministry"]} fallbackPath="/sign-in" showLoader={true}>
                    <StatisticLayout />
                </ProtectedRoute>,
                children: [
                    {
                        index: true,
                        element: <MainStatisticPageContent />
                    },
                    {
                        path: '/:schoolID',
                        element: <SchoolDashboard />
                    }
                ]
            },
            {
                path: '/class/:classId',
                element: <ProtectedRoute allowedRoles={["admin", "teacher", "vicePrincipal", "department"]} fallbackPath="/sign-in" showLoader={true}>
                    <Class />
                </ProtectedRoute>
            },
            {
                path: '/class/:classId/student/:studentId',
                element: <ProtectedRoute allowedRoles={["admin", "teacher", "vicePrincipal", "department"]} fallbackPath="/sign-in" showLoader={true}>
                    <StudentPage />
                </ProtectedRoute>
            },
            {
                path: '/attestations',
                element: <ProtectedRoute allowedRoles={["admin", "vicePrincipal", "department"]} fallbackPath="/sign-in" showLoader={true}>
                    <Attestations />
                </ProtectedRoute>
            },
            {
                path: '/schools',
                element: <ProtectedRoute allowedRoles={["admin", "department", "ministry"]} fallbackPath="/sign-in" showLoader={true}>
                    <Schools />
                </ProtectedRoute>
            },
            {
                path: '/schools/:schoolID',
                element: <ProtectedRoute allowedRoles={["admin", "department", "ministry"]} fallbackPath="/sign-in" showLoader={true}>
                    <SchoolStat />
                </ProtectedRoute>
            },
            {
                path: '/teachers',
                element: <ProtectedRoute allowedRoles={["admin", "department"]} fallbackPath="/sign-in" showLoader={true}>
                    <Teachers />
                </ProtectedRoute>
            },
            {
                path: '/teachers/:teacherID/students',
                element: <ProtectedRoute allowedRoles={["admin", "department"]} fallbackPath="/sign-in" showLoader={true}>
                    <TeacherStudents />
                </ProtectedRoute>
            },
        ]
    },
])