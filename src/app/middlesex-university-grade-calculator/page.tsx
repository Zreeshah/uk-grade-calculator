import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import GradeCalculator from "@/components/GradeCalculator";
import InternalLinks from "@/components/InternalLinks";
import { generateSEO, generateToolSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "Middlesex University Grade Calculator",
 description:
 "Use this free Middlesex University grade calculator to estimate a credit-weighted degree average from your confirmed module marks and credits.",
 path: "/middlesex-university-grade-calculator/",
});

const faqs = [
 {
 question: "How do I use the Middlesex University grade calculator?",
 answer:
 "Enter each confirmed module mark and its credit value. The calculator produces a credit-weighted average and a provisional UK classification band. Check your programme handbook before relying on an estimate for an official result.",
 },
 {
 question: "What credit value should I enter for a Middlesex University module?",
 answer:
 "Use the credit value shown for the module in your official course information. Do not assume every module carries the same weight: dissertations, placements and specialist modules may be treated differently.",
 },
 {
 question: "Does this calculator give my official Middlesex University classification?",
 answer:
 "No. It is a planning tool. Middlesex University applies the academic regulations for your programme and its exam board makes the official classification decision.",
 },
];

const relatedLinks = [
 { title: "University Grade Calculator", href: "/", description: "Calculate a provisional UK degree classification from module grades and credits." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Work out one module mark from coursework, practical and exam components." },
 { title: "Weighted Grade Calculator", href: "/weighted-grade-calculator/", description: "Apply the credit or year weighting specified by your course." },
 { title: "Final Grade Calculator", href: "/final-grade-calculator/", description: "Plan the average you need on remaining work." },
];

export default function MiddlesexUniversityGradeCalculatorPage() {
 const toolSchema = generateToolSchema(
 "Middlesex University Grade Calculator",
 "Free planning tool for calculating a provisional credit-weighted degree average from module marks and credits.",
 "https://unigradecalculator.co.uk/middlesex-university-grade-calculator/"
 );

 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />

 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "Middlesex University Grade Calculator" }]} />

 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 Middlesex University Grade Calculator
 </h1>
 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
 Enter your confirmed module grades and credit values to calculate a clear, provisional Middlesex University degree average.
 </p>
 </div>

 <GradeCalculator type="undergraduate" showTarget={true} showCredits={true} defaultCredits="20" />

 <figure className="my-10">
 <Image
 src="/images/infographics/middlesex-university-grade-calculator-guide.svg"
 alt="Diagram showing module marks and credits being used to calculate a provisional Middlesex University degree result"
 width={1200}
 height={675}
 loading="lazy"
 sizes="(max-width: 768px) 100vw, 896px"
 className="w-full h-auto rounded-xl border border-slate-200"
 />
 <figcaption className="text-sm text-slate-500 text-center mt-3">
 Use actual credit values and confirm the rules for your Middlesex University programme before treating an estimate as final.
 </figcaption>
 </figure>

 <div className="prose-custom mt-12">
 <h2>How to Calculate a Middlesex University Degree Average</h2>
 <p>
 This Middlesex University grade calculator is designed for the practical first step: turning confirmed module marks and their credit values into a credit-weighted average. Enter every module that your programme says counts, use its published credits, and review the result as a planning estimate rather than an official classification.
 </p>
 <p>
 Credit weighting matters because a higher-credit module has a greater effect on your average than a smaller module. If you only have coursework and exam marks, calculate the module result first with our <Link href="/module-grade-calculator/">module grade calculator</Link>, then add that module percentage here.
 </p>

 <h2>Check Your Programme Regulations</h2>
 <p>
 Middlesex&apos;s <a href="https://www.mdx.ac.uk/media/middlesex-university/about-us-pdfs/academic-quality/University-Regulations-for-Undergraduate-Taught-Programmes-2025-26.pdf" target="_blank" rel="noreferrer">2025/26 undergraduate regulations</a> use a grade-profile method across graded FHEQ Level 5 and Level 6 credit, rather than one assumed percentage year split. They also set rules for borderline and discretionary cases.
 </p>
 <p>
 This source normally applies across undergraduate programmes, but approved programme variations are published in course documentation. Use the calculator here for a credit-weighted planning estimate, then confirm your classification with your current regulations. If you are planning remaining assessments, the <Link href="/final-grade-calculator/">final grade calculator</Link> can help you work out the average you need.
 </p>

 <h2>UK Degree Classification Bands</h2>
 <p>
 The calculator displays the standard UK bands as a helpful guide: First Class Honours at 70% and above, a 2:1 at 60% to 69%, a 2:2 at 50% to 59%, and a Third at 40% to 49%. The university and exam board determine whether those standard bands apply exactly to your programme and how any borderline case is handled.
 </p>
 </div>

 <FAQ items={faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 </>
 );
}
