import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";

export const metadata: Metadata = {
    title: "Kanishk Agarwal",
    description: "My personal portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-gray-900 text-white">
                <div className="flex min-h-screen">
                    <aside className="w-64 bg-gray-800 p-6 hidden md:block">
                        <Sidebar />
                    </aside>
                    <div className="flex-1">
                        <Navbar />
                        <main className="p-6">{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
