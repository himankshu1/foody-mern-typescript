import MainLayout from "./MainLayout";
import ForgotPassword from "./auth/ForgotPassword";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VerifyEmail from "./auth/VerifyEmail";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/verify-email",
        element: <VerifyEmail />,
    },
]);

function App() {
    return <RouterProvider router={appRouter} />;
}

export default App;
