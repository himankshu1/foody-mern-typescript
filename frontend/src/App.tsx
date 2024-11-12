import ForgotPassword from "./auth/ForgotPassword";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VerifyEmail from "./auth/VerifyEmail";
import MainLayout from "./layouts/MainLayout";
import HeroSection from "./components/HeroSection";
import Profile from "./components/Profile";
import SearchPage from "./components/SearchPage";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HeroSection />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/search/:slug",
                element: <SearchPage />,
            },
        ],
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
