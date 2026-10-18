import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentManager from "@/components/ConsentManager";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
 title: "UK Grade Calculator - Free University Grade Calculator",
 description:
 "Free UK university grade calculator. Calculate your module grades, degree classification, weighted average, BTEC grades, GPA, and more. Trusted by thousands of UK students.",
 metadataBase: new URL("https://unigradecalculator.co.uk"),
 alternates: {
 canonical: "https://unigradecalculator.co.uk",
 },
 icons: {
 icon: [
 { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
 { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
 { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
 ],
 apple: [
 { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
 ],
 },
 openGraph: {
 title: "UK Grade Calculator - Free University Grade Calculator",
 description:
 "Free UK university grade calculator. Calculate your module grades, degree classification, weighted average, BTEC grades, GPA, and more.",
 siteName: "UK Grade Calculator",
 locale: "en_GB",
 type: "website",
 images: [
 {
 url: "/images/social/uk-grade-calculator-open-graph.jpg",
 width: 1200,
 height: 630,
 alt: "UK Grade Calculator illustration showing a university grade calculator and degree result bands",
 },
 ],
 },
 twitter: {
 card: "summary_large_image",
 title: "UK Grade Calculator - Free University Grade Calculator",
 description:
 "Free UK university grade calculator. Calculate your module grades, degree classification, weighted average, BTEC grades, GPA, and more.",
 images: ["/images/social/uk-grade-calculator-open-graph.jpg"],
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
 <ConsentManager />
 <Header />
 <main className="flex-1">{children}</main>
 <Footer />
 </body>
 </html>
 );
}
