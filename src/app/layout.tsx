import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NeonAuthUIProvider } from "@/lib/auth/client";
import { authClient } from "@/lib/auth/client";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BetaBanner } from "@/components/BetaBanner";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";
import "@copilotkit/react-ui/styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pension.quest'),
  title: {
    default: "Pension Quest - UK Pension Guides & Calculators",
    template: "%s | Pension Quest",
  },
  description: "Your complete guide to UK pensions. Free pension calculators, expert guides on State Pension, NHS Pension, SIPP, workplace pensions, and retirement planning.",
  keywords: ["UK pension", "state pension", "pension calculator", "retirement planning", "NHS pension", "teachers pension", "SIPP", "pension drawdown"],
  authors: [{ name: "Pension Quest" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Pension Quest",
    title: "Pension Quest - UK Pension Guides & Calculators",
    description: "Your complete guide to UK pensions. Free calculators and expert guides.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pension Quest - UK Pension Guides & Calculators",
    description: "Your complete guide to UK pensions. Free calculators and expert guides.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="dark" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Pension Quest" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-950 text-white min-h-screen flex flex-col`}
      >
        <NeonAuthUIProvider
          authClient={authClient as any}
          redirectTo="/dashboard"
          emailOTP
          social={{ providers: ['google'] }}
        >
          <Providers>
            <BetaBanner />
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </Providers>
        </NeonAuthUIProvider>
      </body>
    </html>
  );
}
