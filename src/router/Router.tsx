import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { SignIn } from "../pages/SignIn/SignIn";
import { Main } from "../pages/Main/Main";
import { Class } from "../pages/Class/Class";

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
            }
        ]
    },
])