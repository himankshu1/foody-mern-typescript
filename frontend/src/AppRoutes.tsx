import { Navigate, Route, Routes } from "react-router";
import { Layout } from "./layouts/Layout";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout>Home</Layout>} />
            <Route path="/user-profile" element={<span>User</span>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
