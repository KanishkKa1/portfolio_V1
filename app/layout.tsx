import "./globals.css";
import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import { Navbar } from "@/components/navigation/Navbar";
import { createMetadata } from "@/lib/seo";

const headingFont = Sora({
    subsets: ["latin"],
    variable: "--font-heading",
});

const bodyFont = Manrope({
    subsets: ["latin"],
    variable: "--font-body",
});

export const metadata: Metadata = createMetadata({
    title: "Software Engineer Portfolio",
    description:
        "Premium minimal portfolio for Kanishk Agarwal: software engineering, AI/ML, projects, resume, and contact.",
    path: "/",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${headingFont.variable} ${bodyFont.variable} min-h-screen bg-background text-foreground antialiased`}
            >
                {/* App shell keeps nav + content consistent across all routes. */}
                <div className="relative isolate min-h-screen overflow-x-hidden">
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(227,178,84,0.2),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(71,85,105,0.2),_transparent_35%)]" />
                    <Navbar />
                    <main id="main-content">{children}</main>
                </div>
            </body>
        </html>
    );
}
