import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { universities } from "@/data/universities";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "University Grade Calculators",
 description:
  "Browse UK university grade calculator guides. Check module credits and use your programme regulations to confirm year weighting and classification rules.",
 path: "/universities/",
});

export default function UniversitiesPage() {
 return (
  <div className="container-main py-8">
   <Breadcrumb items={[{ label: "Universities" }]} />

   <div className="max-w-3xl mb-10">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
     University Grade Calculators
    </h1>
    <p className="text-lg text-slate-600">
     Choose your university to start a provisional credit-weighted calculation. Check your current programme regulations for the year weighting, rounding and borderline rules that apply to you.
    </p>
   </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {universities.map((university) => (
     <Link
      key={university.slug}
      href={`/universities/${university.slug}/`}
      className="group p-5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all"
     >
      <h2 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
       {university.name} Grade Calculator
      </h2>
      <p className="text-sm text-slate-500 mt-2">
       Credit-weighted estimate with guidance on the programme-specific rules to check.
      </p>
     </Link>
    ))}
   </div>

   <section className="prose-custom mt-12">
    <h2>Use university-specific tools carefully</h2>
    <p>
     These pages help you organise module marks and credits, but they cannot replace an official classification decision. University policies can differ by programme, academic year, placement route, resit status and borderline rules. Use the linked guidance as a starting point, then confirm the details in your programme handbook or academic regulations.
    </p>
   </section>
  </div>
 );
}
