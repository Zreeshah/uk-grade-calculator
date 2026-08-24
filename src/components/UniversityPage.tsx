"use client";

import GradeCalculator from "@/components/GradeCalculator";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import ClassificationTable from "@/components/ClassificationTable";
import Breadcrumb from "@/components/Breadcrumb";
import { degreeClassifications } from "@/lib/grades";
import type { UniversityData } from "@/data/universities";

const relatedLinks = [
 { title: "University Grade Calculator", href: "/", description: "General UK university grade calculator for any institution." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Calculate individual module grades from multiple assessments." },
 { title: "Weighted Grade Calculator", href: "/weighted-grade-calculator/", description: "Apply custom year weightings to calculate your overall average." },
 { title: "UK Degree Classifications Explained", href: "/blog/uk-degree-classifications-explained/", description: "Understand First, 2:1, 2:2, and Third class degrees in detail." },
 { title: "Final Grade Calculator", href: "/final-grade-calculator/", description: "Find out what marks you need on remaining assessments." },
 { title: "BTEC Grade Calculator", href: "/btec-grade-calculator/", description: "Calculate BTEC Distinction, Merit, and Pass grades." },
];

export default function UniversityPage({ uni }: { uni: UniversityData }) {
 return (
 <div className="container-main py-8">
 <Breadcrumb
 items={[
 { label: "Universities", href: "/" },
 { label: `${uni.shortName} Grade Calculator` },
 ]}
 />

 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 {uni.shortName} Grade Calculator
 </h1>
 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
 Calculate your {uni.name} degree classification. Enter your module grades and credits below.
 </p>
 </div>

 <GradeCalculator
 type="undergraduate"
 showTarget={true}
 showCredits={true}
 defaultCredits={uni.defaultModuleCredits}
 />

 <div className="prose-custom mt-12">
 <h2>About {uni.name} Grading</h2>
 {uni.content.map((para, i) => (
 <p key={i}>{para}</p>
 ))}

 <h2>{uni.shortName} Year Weighting</h2>
 <p>
 {uni.name} uses a <strong>{uni.yearWeighting}</strong> year weighting for most programmes.
 This means Year 2 (Level 5) contributes {uni.yearWeightY2}% and Year 3 (Level 6) contributes {uni.yearWeightY3}% to your final degree average.
 </p>
 <table>
 <thead>
 <tr>
 <th>Detail</th>
 <th>Value</th>
 </tr>
 </thead>
 <tbody>
 <tr><td>Credit Framework</td><td>{uni.framework}</td></tr>
 <tr><td>Credits per Year</td><td>{uni.creditsPerYear}</td></tr>
 <tr><td>Degree Length</td><td>{uni.degreeLength}</td></tr>
 <tr><td>Year Weighting</td><td>{uni.yearWeighting}</td></tr>
 <tr><td>Standard Module Size</td><td>{uni.defaultModuleCredits} credits</td></tr>
 </tbody>
 </table>

 <h2>Important Notes for {uni.shortName} Students</h2>
 <ul>
 {uni.specialNotes.map((note, i) => (
 <li key={i}>{note}</li>
 ))}
 </ul>

 <h2>Degree Classification Boundaries</h2>
 <p>
 {uni.name} uses the standard UK degree classification boundaries:
 </p>
 </div>

 <ClassificationTable classifications={degreeClassifications} />

 <div className="prose-custom">
 <h2>How to Calculate Your {uni.shortName} Grade</h2>
 <ol>
 <li>Enter each module name, percentage grade, and credit value in the calculator above.</li>
 <li>Set credits to {uni.defaultModuleCredits} for standard modules. Adjust for dissertations or double modules.</li>
 <li>The calculator automatically computes your credit-weighted average and shows your classification.</li>
 <li>Use the target grade feature to find out what you need on remaining modules.</li>
 </ol>
 <p>
 For a more detailed calculation with year weightings, use our{" "}
 <a href="/weighted-grade-calculator/">weighted grade calculator</a> where you can set
 custom Year 2/Year 3 weightings to match {uni.shortName}&apos;s {uni.yearWeighting} split.
 </p>
 </div>

 <FAQ items={uni.faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 );
}
