"use client";

import Link from "next/link";
import Image from "next/image";
import GradeCalculator from "@/components/GradeCalculator";
import MmuClassificationCalculator from "@/components/MmuClassificationCalculator";
import YearWeightingCalculator from "@/components/YearWeightingCalculator";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import ClassificationTable from "@/components/ClassificationTable";
import Breadcrumb from "@/components/Breadcrumb";
import { degreeClassifications } from "@/lib/grades";
import type { UniversityData } from "@/data/universities";
import { universities } from "@/data/universities";
import { universitySources } from "@/data/universitySources";

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
 { title: "Weighted Grade Calculator", href: "/weighted-grade-calculator/", description: "Calculate a credit-weighted average for one year or a set of modules." },
 { title: "UK Degree Classifications Explained", href: "/blog/uk-degree-classifications-explained/", description: "Understand First, 2:1, 2:2, and Third class degrees in detail." },
 { title: "Final Grade Calculator", href: "/final-grade-calculator/", description: "Find out what marks you need on remaining assessments." },
 { title: "BTEC Grade Calculator", href: "/btec-grade-calculator/", description: "Find Pearson's official calculator and look up final Extended Diploma UCAS tariff points." },
];

export default function UniversityPage({ uni }: { uni: UniversityData }) {
 const source = universitySources[uni.slug];

 return (
 <div className="container-main py-8">
 <Breadcrumb
 items={[
 { label: "Universities", href: "/universities/" },
 { label: `${uni.shortName} Grade Calculator` },
 ]}
 />

 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 {uni.shortName} Grade Calculator
 </h1>
 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
 Use this {uni.shortName} grade calculator to estimate your {uni.name} degree classification. Enter confirmed module grades and credits below.
 </p>
 </div>

 {uni.slug === "mmu" ? (
 <MmuClassificationCalculator />
 ) : (
 <GradeCalculator
 type="undergraduate"
 showTarget={true}
 showCredits={true}
 defaultCredits={uni.defaultModuleCredits}
 />
 )}

 <section className="card mt-8" aria-labelledby="method-heading">
  <h2 id="method-heading" className="text-xl font-bold text-slate-900">
   How {uni.shortName} classification works
  </h2>
  <p className="mt-3 text-slate-700">{uni.methodNote}</p>
  <p className="mt-3 text-sm text-slate-600">
   Published weighting: <strong>{uni.yearWeighting}</strong>. Framework: {uni.framework}. Standard route: {uni.degreeLength}.
  </p>
  <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
   {uni.specialNotes.map((note) => (
    <li key={note}>{note}</li>
   ))}
  </ul>
 </section>

 {uni.splitMethod && uni.slug !== "mmu" && (
 <YearWeightingCalculator
 defaultYearTwoWeight={String(uni.yearWeightY2)}
 defaultYearThreeWeight={String(uni.yearWeightY3)}
 yearTwoLabel="Level 5 average (%)"
 yearThreeLabel="Level 6 average (%)"
 yearTwoWeightLabel="Level 5 weighting (%)"
 yearThreeWeightLabel="Level 6 weighting (%)"
 />
 )}

 <div className="prose-custom mt-12">
 <h2>{uni.shortName} classification in detail</h2>
 {uni.content.map((paragraph, index) => (
 <p key={index}>{paragraph}</p>
 ))}
 </div>

 {uni.visual && (
 <figure className="my-10">
 <Image
 src={uni.visual.src}
 alt={uni.visual.alt}
 width={uni.visual.width}
 height={uni.visual.height}
 loading="lazy"
 sizes="(max-width: 768px) 100vw, 896px"
 className="w-full h-auto rounded-xl border border-slate-200"
 />
 <figcaption className="text-sm text-slate-500 text-center mt-3">
 {uni.visual.caption}
 </figcaption>
 </figure>
 )}

 <div className="prose-custom mt-12">
 <h2>Official {uni.shortName} regulations</h2>
 <p>{source.summary}</p>
 <p>
 <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>. {uni.slug === "mmu" ? "Checked 30 October 2026." : "Checked 19 October 2026."} {source.scope}
 </p>

 <h2>Degree Classification Boundaries</h2>
 <p>
 These are the usual UK honours classification boundaries. Your programme regulations remain authoritative:
 </p>
 </div>

 <ClassificationTable classifications={degreeClassifications} />

 <div className="prose-custom">
 <h2>How to Calculate Your {uni.shortName} Grade</h2>
 <ol>
 {uni.howToSteps.map((step) => (
 <li key={step}>{step}</li>
 ))}
 </ol>
 <p>{uni.calculatorNote}</p>

 <h2>When to Use This {uni.shortName} Grade Calculator</h2>
 <p>{uni.whenToUse}</p>
 <p>
 Start by calculating each module from its coursework, practical and exam components if needed. Then add the module result here with its credit value. If you are still waiting for results, use the target option to model a range of marks rather than relying on a single prediction. This gives {uni.shortName} students a practical route from individual assessment marks to an overall degree-classification estimate. Your university&apos;s exam board and academic regulations remain the source of your official classification.
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
