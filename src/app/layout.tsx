import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
 title: "UK Grade Calculator - Free University Grade Calculator",
 description:
 "Free UK university grade calculator. Calculate your module grades, degree classification, weighted average, BTEC grades, GPA, and more. Trusted by thousands of UK students.",
 metadataBase: new URL("https://uk-grade-calculator.vercel.app"),
 alternates: {
 canonical: "https://uk-grade-calculator.vercel.app",
 },
 openGraph: {
 title: "UK Grade Calculator - Free University Grade Calculator",
 description:
 "Free UK university grade calculator. Calculate your module grades, degree classification, weighted average, BTEC grades, GPA, and more.",
 siteName: "UK Grade Calculator",
 locale: "en_GB",
 type: "website",
 },
 robots: {
 index: true,
 follow: true,
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en-GB" className={inter.className}>
 <body className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-1">{children}</main>
 <Footer />
 </body>
 </html>
 );
}
