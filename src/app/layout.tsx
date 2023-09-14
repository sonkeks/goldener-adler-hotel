import Layout from "./components/Layout";
import "./global.css";
import React from "react";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}