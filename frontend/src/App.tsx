import MainLayout from "./MainLayout";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
]);

function App() {
    return <RouterProvider router={appRouter} />;
}

export default App;
