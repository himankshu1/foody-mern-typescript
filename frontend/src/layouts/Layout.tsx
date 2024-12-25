import Header from "@/components/Header";
import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="container mx-auto flex-1 py-10">{children}</div>
        </div>
    );
}
