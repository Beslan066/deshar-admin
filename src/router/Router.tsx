import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { SignIn } from "../pages/SignIn/SignIn";
import { Main } from "../pages/Main/Main";
import { Class } from "../pages/Class/Class";
import { StudentPage } from "../pages/Student/Student";
import { Attestations } from "../pages/Attestations/Attestations";
import { ProtectedRoute } from "./ProtectedRoute";

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
                element: <Main />
            },
            {
                path: '/class/:classId',
                element: <Class />
            },
            {
                path: '/class/:classId/student/:studentId',
                element: <StudentPage />
            },
            {
                path: '/attestations',
                element: <ProtectedRoute allowedRoles={["vicePrincipal"]} fallbackPath="/sign-in">
                    <Attestations />
                </ProtectedRoute>
            }
        ]
    },
])