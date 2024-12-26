import { Navigate, Route, Routes } from "react-router";
import { Layout } from "./layouts/Layout";
import HomePage from "./pages/HomePage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <HomePage />
                    </Layout>
                }
            />
            <Route path="/user-profile" element={<span>User</span>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
