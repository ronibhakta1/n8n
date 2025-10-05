"use client"
import { signOut } from "next-auth/react";
import Providers from "../providers";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html >
            <body >
                <div className="min-h-screen">
                    <button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
                    {children}
                </div>
            </body>
        </html>
    );
}