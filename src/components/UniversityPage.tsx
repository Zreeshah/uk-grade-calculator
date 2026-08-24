"use client";

import Link from "next/link";
import GradeCalculator from "@/components/GradeCalculator";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import ClassificationTable from "@/components/ClassificationTable";
import Breadcrumb from "@/components/Breadcrumb";
import { degreeClassifications } from "@/lib/grades";
import type { UniversityData } from "@/data/universities";
import { universities } from "@/data/universities";

const regionGroups: Record<string, string[]> = {
  "Northern England": ["mmu", "leeds", "sheffield-hallam", "uclan"],
  "Southern & West England": ["portsmouth", "exeter", "swansea", "uwe"],
  "Scotland": ["st-andrews"],
  "Distance Learning": ["open-university"],
};

function getRelatedUnis(slug: string): { name: string; href: string }[] {
  let ownRegion = "";
  for (const [region, slugs] of Object.entries(regionGroups)) {
    if (slugs.includes(slug)) { ownRegion = region; break; }
  }
  const results: { name: string; href: string }[] = [];
  if (ownRegion) {
    for (const s of regionGroups[ownRegion]) {
      if (s !== slug) {
        const u = universities.find((uni) => uni.slug === s);
        if (u) results.push({ name: `${u.shortName} Grade Calculator`, href: `/universities/${u.slug}/` });
      }
    }
  }
  if (results.length < 3) {
    for (const [region, slugs] of Object.entries(regionGroups)) {
      if (region === ownRegion) continue;
      for (const s of slugs) {
        if (results.length >= 4) break;
        const u = universities.find((uni) => uni.slug === s);
        if (u) results.push({ name: `${u.shortName} Grade Calculator`, href: `/universities/${u.slug}/` });
      }
    }
  }
  return results.slice(0, 4);
}

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
 <Link href="/weighted-grade-calculator/">weighted grade calculator</Link> where you can set
 custom Year 2/Year 3 weightings to match {uni.shortName}&apos;s {uni.yearWeighting} split.
 </p>

 <h2>When to Use This {uni.shortName} Grade Calculator</h2>
 <p>
 Use this {uni.shortName} grade calculator when you have module percentages and credit values and want a clear, provisional view of your current average. It is most useful after a set of results has been released, before choosing how to prioritise remaining assessments, or when you are checking a target for your final year. Your university&apos;s exam board and academic regulations remain the source of your official classification.
 </p>
 <p>
 Start by calculating each module from its coursework, practical and exam components if needed. Then add the module result here with its credit value. If you are still waiting for results, use the target option to model a range of marks rather than relying on a single prediction. This gives {uni.shortName} students a practical route from individual assessment marks to an overall degree-classification estimate.
 </p>

 <h2>Useful Tools for {uni.shortName} Students</h2>
 <p>
 Beyond the basic calculator above, we have several tools that {uni.shortName} students find helpful:
 </p>
 <ul>
 <li>Use our <Link href="/">university grade calculator</Link> for a quick overall classification check across all your modules.</li>
 <li>Break down individual module marks from coursework and exams with the <Link href="/module-grade-calculator/">module grade calculator</Link>.</li>
 <li>Find out exactly what marks you need on remaining assessments with the <Link href="/final-grade-calculator/">target grade calculator</Link>.</li>
 <li>Read our guide to <Link href="/blog/uk-degree-classifications-explained/">UK degree classifications</Link> to understand what each class means for your career.</li>
 <li>If you need to convert your percentage to a GPA for international applications, try the <Link href="/gpa-calculator/">GPA calculator</Link>.</li>
 </ul>
 </div>

 <section className="mt-12">
 <h2 className="text-2xl font-bold text-slate-900 mb-6">Other University Grade Calculators</h2>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 {getRelatedUnis(uni.slug).map((related) => (
 <Link
 key={related.href}
 href={related.href}
 className="group p-5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all"
 >
 <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
 {related.name}
 </h3>
 <p className="text-sm text-slate-500 mt-1">Free grade calculator tailored for this university.</p>
 </Link>
 ))}
 </div>
 </section>

 <FAQ items={uni.faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 );
}
