import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import InternalLinks from "@/components/InternalLinks";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "About UK Grade Calculator - Free Tools for UK Students",
 description:
 "Learn about UK Grade Calculator, a free suite of grade calculation tools designed for UK university and college students. No ads, no registration, no data collection.",
 path: "/about/",
});

const links = [
 { title: "University Grade Calculator", href: "/", description: "Calculate your overall degree classification." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Calculate individual module grades." },
 { title: "BTEC Grade Calculator", href: "/btec-grade-calculator/", description: "Calculate BTEC grades and UCAS points." },
 { title: "Masters Grade Calculator", href: "/masters-grade-calculator/", description: "Calculate postgraduate degree classifications." },
  { title: "Weighted Grade Calculator", href: "/weighted-grade-calculator/", description: "Apply credit and year weightings to your grades." },
  { title: "GPA Calculator UK", href: "/gpa-calculator/", description: "Convert UK grades to GPA for international applications." },
  { title: "UK Degree Classifications Explained", href: "/blog/uk-degree-classifications-explained/", description: "Complete guide to First, 2:1, 2:2, and Third class degrees." },
];

export default function AboutPage() {
 return (
 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "About" }]} />

 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
 About UK Grade Calculator
 </h1>

 <div className="prose-custom">
 <p>
 UK Grade Calculator is a free suite of tools built specifically for UK university and college students who want to calculate their grades quickly and accurately. We believe grade calculation tools should be fast, clean, and completely free, without requiring registration or collecting personal data.
 </p>

 <h2>Why We Built This</h2>
 <p>
 We noticed that most existing UK grade calculators are either outdated, cluttered with intrusive advertising, or require signup before you can use the basic tool. Our <Link href="/">university grade calculator</Link> solves all of these problems. Many also lack proper explanations of how UK university grading actually works, leaving students to figure it out on their own.
 </p>
 <p>
 We wanted to create something better: a modern, mobile-friendly tool with comprehensive educational content that helps students not only calculate their grades but also understand the system behind them.
 </p>

 <h2>What We Offer</h2>
 <ul>
 <li><strong>Instant calculations.</strong> All calculations happen in your browser. There is no server processing, no loading times, and no data sent anywhere.</li>
 <li><strong>Credit-weighted accuracy.</strong> Our calculators use the same <Link href="/blog/how-to-calculate-weighted-average/">credit-weighted average formula</Link> that UK universities use, giving you accurate results.</li>
 <li><strong>Target grade planning.</strong> Every calculator includes a target grade feature, and our dedicated <Link href="/final-grade-calculator/">final grade calculator</Link> lets you plan exactly what you need on remaining assessments.</li>
 <li><strong>Comprehensive guides.</strong> Each calculator page includes detailed explanations, worked examples, and frequently asked questions.</li>
 <li><strong>University-specific tools.</strong> We have tailored calculators for specific UK universities like <Link href="/universities/mmu/">Manchester Metropolitan</Link>, <Link href="/universities/leeds/">Leeds</Link>, and <Link href="/universities/open-university/">Open University</Link>, each with their exact grading scales and year weightings.</li>
 <li><strong>Completely free.</strong> No registration, no paywalls, no premium tiers. Every feature is available to every student.</li>
 </ul>

 <h2>Privacy and Data</h2>
 <p>
 We do not collect, store, or transmit any of your grade data. All calculations are performed entirely in your browser using JavaScript. When you close the page, your data is gone. We do not use cookies for tracking, and we do not sell data to third parties.
 </p>

 <h2>Accuracy Disclaimer</h2>
 <p>
 While our calculators use the standard UK degree classification boundaries and credit-weighted average formula, individual universities may have specific policies that affect your classification. These include borderline rules, module capping, year weighting variations, and alternative classification algorithms. Always verify your final classification with your university&apos;s academic office or student records department.
 </p>

 <h2>Contact</h2>
 <p>
 If you have suggestions for improving our calculators, notice an error, or want to request a university-specific calculator, please get in touch. We are continually improving and expanding our tools based on student feedback.
 </p>
 </div>

 <InternalLinks links={links} title="Our Calculators" />
 </div>
 );
}
