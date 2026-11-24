import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "University of Portsmouth Grade Calculator",
 description:
 "University of Portsmouth degree classification uses the best of three published methods, not one fixed year weighting. See the universities hub for a summary and a general calculator.",
 path: "/universities/portsmouth/",
});

export default function Page() {
 return (
 <div className="container-main py-8">
 <Breadcrumb
 items={[
 { label: "Universities", href: "/universities/" },
 { label: "Portsmouth Grade Calculator" },
 ]}
 />

 <div className="max-w-3xl mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 Portsmouth Grade Calculator
 </h1>
 <p className="text-lg text-slate-600">
 This page has been consolidated into the <Link href="/universities/">universities hub</Link>. Portsmouth does not use one fixed year weighting, so a single Portsmouth calculator page would give a misleading answer.
 </p>
 </div>

 <div className="prose-custom">
 <h2>How Portsmouth classification works</h2>
 <p>
 The University of Portsmouth&apos;s current Assessment Regulations use the best of specified Level 5 and Level 6 calculation methods, including a route based on Level 6 after the lowest 20 credits are excluded, and award the better outcome where applicable. The current regulation does not state a standard borderline uplift. Placement years are typically assessed as pass or fail and do not contribute a graded mark to the classification.
 </p>
 <p>
 For a planning estimate, use the <Link href="/">general university grade calculator</Link> to work out a credit-weighted average from your module marks and credits, then check the result against the university&apos;s published methods. The university&apos;s own calculator and the full Assessment Regulations are the authoritative sources for a Portsmouth classification.
 </p>
 <p>
 <Link href="/universities/">Browse all university grade calculators</Link>
 </p>
 </div>
 </div>
 );
}
