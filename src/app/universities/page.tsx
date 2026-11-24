import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { universities } from "@/data/universities";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "University Grade Calculators",
 description:
  "Browse UK university grade calculator guides, each built around that university's published classification method — from Leeds' 1:2 weighting to Swansea's 3:2:1 banding and St Andrews' mean-and-median algorithm.",
 path: "/universities/",
});

const comparisonRows = [
 { name: "Manchester Metropolitan University", method: "25/75 Level 5/Level 6, plus Level 6 profiling for the 2025/26 Level 5 cohort", borderline: "No rounding", href: "/universities/mmu/" },
 { name: "The Open University", method: "Credit-based: best 120 Level 2 credits + best 120 Level 3 credits double-weighted", borderline: "Quality-assurance test on best 60 Level 3 credits", href: "/universities/open-university/" },
 { name: "University of St Andrews", method: "Credit-weighted mean and median of Honours-level grades (20-point scale)", borderline: "No discretionary border zones", href: "/universities/st-andrews/" },
 { name: "University of Leeds", method: "1:2 Year 2/Year 3", borderline: "Within 0.5 of the next boundary: higher class, automatic", href: "/universities/leeds/" },
 { name: "Swansea University", method: "3:2:1 banding across defined Level 6 and Level 5 credit sets", borderline: "Within 2%: preponderance and exit-velocity principles", href: "/universities/swansea/" },
 { name: "Sheffield Hallam University", method: "Best of 25/75 or 100% Level 6", borderline: "Published bands, e.g. 68.01–69.99% with 70% in 60+ Level 6 credits: First", href: "/universities/sheffield-hallam/" },
 { name: "University of Exeter", method: "1:2 Stage 2/Stage 3", borderline: "Threshold route (69.50%) or profile route (68.00% + 50% of weighted credits at 70%+)", href: "/universities/exeter/" },
 { name: "University of Lancashire (formerly UCLan)", method: "Award Percentage Mark: best of 2:8, best 100 Level 6 credits, or profile method", borderline: "APM of X9.5 rounds up; profile route within 2 points", href: "/universities/uclan/" },
 { name: "UWE Bristol", method: "Level 6 weighted three times Level 5 (best 100 Level 5 credits)", borderline: "Within 0.5 of the next class: higher class, automatic", href: "/universities/uwe/" },
];

export default function UniversitiesPage() {
 return (
  <div className="container-main py-8">
   <Breadcrumb items={[{ label: "Universities" }]} />

   <div className="max-w-3xl mb-10">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
     University Grade Calculators
    </h1>
    <p className="text-lg text-slate-600">
     Choose your university to start a provisional calculation built around that university&apos;s own published classification method — not a generic year split. Check your current programme regulations for the year weighting, rounding and borderline rules that apply to you.
    </p>
   </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {universities.filter((university) => university.slug !== "portsmouth").map((university) => (
     <Link
      key={university.slug}
      href={`/universities/${university.slug}/`}
      className="group p-5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all"
     >
      <h2 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
       {university.name} Grade Calculator
      </h2>
      <p className="text-sm text-slate-500 mt-2">
       {university.yearWeighting}
      </p>
     </Link>
    ))}
   </div>

   <section className="prose-custom mt-12">
    <h2>How UK degree classification works</h2>
    <p>
     UK honours degrees are classified as First, Upper Second (2:1), Lower Second (2:2) or Third, normally at the boundaries of 70%, 60%, 50% and 40%. But the number that is compared with those boundaries is calculated differently at almost every university. Most use a credit-weighted average of Level 5 and Level 6 marks, yet the weighting, the credits that count, and the borderline rules all vary. A 33/67 split at one university, a 25/75 split at another, a banding system at a third, and a mean-and-median algorithm at a fourth can give four different answers from the same set of marks. That is why this site builds one calculator page per university instead of one generic tool: use the page for your university, and use the <Link href="/weighted-grade-calculator/">weighted grade calculator</Link> or the <Link href="/blog/uk-degree-classifications-explained/">degree classifications guide</Link> only for the general principles.
    </p>
    <p>
     Three things decide most classifications. The first is which marks count: Year 1 almost never counts, and several universities use only your best credits — the best 100 at a level, or the best 80 final-year credits — rather than all of them. The second is the weighting: the final year usually counts more than the second, but the ratio runs from 1:2 to 2:8 and, at some universities, is replaced by banding or by a best-of-two-methods rule. The third is the borderline rule: some universities award the higher class automatically within 0.5 of a boundary, others require a credit profile, and St Andrews has no borderline uplift at all. Read your university&apos;s page for the exact combination, and confirm anything near a boundary in your programme handbook — a calculator result is provisional until your exam board confirms it.
    </p>
   </section>

   <section className="mt-12">
    <h2 className="text-2xl font-bold text-slate-900 mb-6">Compare the methods</h2>
    <div className="overflow-x-auto">
     <table className="w-full text-left text-sm border border-slate-200 rounded-xl overflow-hidden">
      <thead>
       <tr className="bg-slate-50">
        <th className="p-3 font-semibold text-slate-900">University</th>
        <th className="p-3 font-semibold text-slate-900">Classification method</th>
        <th className="p-3 font-semibold text-slate-900">Borderline rule</th>
       </tr>
      </thead>
      <tbody>
       {comparisonRows.map((row) => (
        <tr key={row.href} className="border-t border-slate-200">
         <td className="p-3"><Link href={row.href} className="font-medium text-indigo-600 hover:underline">{row.name}</Link></td>
         <td className="p-3 text-slate-700">{row.method}</td>
         <td className="p-3 text-slate-700">{row.borderline}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="prose-custom mt-12">
    <h2>One paragraph per university</h2>
    <p>
     <strong>Manchester Metropolitan University</strong> weights Level 5 at 25% and Level 6 at 75%, does not round, and offers an additional Level 6 profiling route to students who were in Level 5 in 2025/26 and stayed on schedule. See the <Link href="/universities/mmu/">Manchester Metropolitan University grade calculator</Link>.
    </p>
    <p>
     <strong>The Open University</strong> has no year split at all: classification comes from your best 120 Level 2 credits and best 120 Level 3 credits, with Level 3 double-weighted, on a grade-point scale from 1 (Distinction) to 4 where a lower total score means a better class. See the <Link href="/universities/open-university/">Open University grade calculator</Link>.
    </p>
    <p>
     <strong>University of St Andrews</strong> runs a four-year Scottish degree and classifies it with a credit-weighted mean and median of Honours-level grades on the 20-point scale, with no discretionary border zones. See the <Link href="/universities/st-andrews/">St Andrews grade calculator</Link>.
    </p>
    <p>
     <strong>University of Leeds</strong> uses a 1:2 Year 2/Year 3 weighting with an automatic higher class for averages within 0.5 of the next boundary — 69.5 is a First, with no appeal needed. See the <Link href="/universities/leeds/">Leeds grade calculator</Link>.
    </p>
    <p>
     <strong>Swansea University</strong> sorts modules into 3:2:1 bands — the best 80 final-year credits triple-weighted — and considers borderline cases within 2% under the preponderance and exit-velocity principles. See the <Link href="/universities/swansea/">Swansea grade calculator</Link>.
    </p>
    <p>
     <strong>Sheffield Hallam University</strong> calculates your degree twice under Regulation 10 — 25/75 and 100% Level 6 — and awards the better outcome, with published borderline bands measured in Level 6 credits. See the <Link href="/universities/sheffield-hallam/">Sheffield Hallam grade calculator</Link>.
    </p>
    <p>
     <strong>University of Exeter</strong> weights Stage 2 and Stage 3 in the ratio 1:2 and offers two routes to each class: a threshold (69.50% for a First) or a credit profile (68.00% with at least half of weighted credits at 70% or more). See the <Link href="/universities/exeter/">Exeter grade calculator</Link>.
    </p>
    <p>
     <strong>University of Lancashire</strong>, formerly UCLan, awards the best of three outcomes from the Average Percentage Mark: a 2:8 method, a best-100-Level-6 method, or a profile method, with rounding up from X9.5. See the <Link href="/universities/uclan/">University of Lancashire grade calculator</Link>.
    </p>
    <p>
     <strong>UWE Bristol</strong> weights Level 6 three times Level 5, using your best 100 Level 5 credits, and automatically raises your class when the final mark is within 0.5 of the next boundary. See the <Link href="/universities/uwe/">UWE Bristol grade calculator</Link>.
    </p>
    <p>
     <strong>University of Portsmouth</strong> does not use one fixed year weighting: its current regulations set out alternative calculation methods — including a route based on Level 6 after the lowest 20 credits are excluded — and award the better outcome where applicable. Portsmouth students can use the <Link href="/">general university grade calculator</Link> for a credit-weighted planning estimate, and the university&apos;s own calculator at soc.port.ac.uk/dcalc for the official methods. <strong>Middlesex University</strong> classifies degrees from the profile of grades across graded Level 5 and Level 6 credit — how much of the counted credit falls in each classification band — rather than from a single weighted average alone; the <Link href="/">general university grade calculator</Link> gives a credit-weighted planning average, and the profile and the board&apos;s borderline rules decide the official result.
    </p>
   </section>

   <section className="prose-custom mt-12">
    <h2>Use university-specific tools carefully</h2>
    <p>
     These pages help you organise module marks and credits, but they cannot replace an official classification decision. University policies can differ by programme, academic year, placement route, resit status and borderline rules. Use the linked guidance as a starting point, then confirm the details in your programme handbook or academic regulations.
    </p>
   </section>
  </div>
 );
}
