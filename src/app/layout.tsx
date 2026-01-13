import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NeonAuthUIProvider, UserButton } from "@neondatabase/auth/react";
import { authClient } from "@/lib/auth/client";
import { Providers } from "@/components/providers";
import "./globals.css";
import "@copilotkit/react-ui/styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Relocation Quest - AI Relocation Advisor",
  description: "Your voice-first AI guide to moving abroad. Explore destinations, visas, costs, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-950 text-white`}
      >
        <NeonAuthUIProvider
          authClient={authClient!}
          redirectTo="/account/settings"
          emailOTP
        >
          <header className="fixed top-4 right-4 z-50">
            <UserButton size="icon" />
          </header>
          <Providers>
            {children}
          </Providers>
        </NeonAuthUIProvider>
      </body>
    </html>
  );
}
