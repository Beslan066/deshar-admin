import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Main</div>
    },
    {
        path: '/test',
        element: <div>test</div>
    },
])