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
 {
 question: "What is the grade-profile method Middlesex uses?",
 answer:
 "Under Middlesex University's undergraduate regulations, classification is decided from the profile of your grades across graded Level 5 and Level 6 credit — how much of your counted credit falls in each classification band — rather than from a single weighted average alone. The calculator here gives you the credit-weighted average as a planning figure; the profile and the board's borderline rules decide the official result.",
 },
 {
 question: "Do my second-year marks count at Middlesex?",
 answer:
 "Yes, they can. The grade-profile method applies across graded Level 5 and Level 6 credit, so second-year modules are part of the picture, not ignored. Which modules count and how programme variations apply is set out in your course documentation and the university's undergraduate regulations.",
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

 <h2>How Middlesex Calculates a Degree Result: The Grade-Profile Method</h2>
 <p>
 Middlesex University does not classify degrees from a single weighted average alone. Its undergraduate regulations use a grade-profile method: the exam board looks at the profile of your grades across graded FHEQ Level 5 and Level 6 credit — that is, how much of your counted credit sits in each classification band — rather than reducing everything to one percentage. This matters because two students with the same average can have different profiles: one with consistently strong marks across most modules, and another whose average is lifted by a small number of very high marks.
 </p>
 <p>
 That is why this calculator gives you a credit-weighted average and a provisional band, but cannot reproduce the profile decision itself. Use the average as a planning figure, then check your own profile: count how many of your Level 5 and Level 6 credits fall in the First, 2:1, 2:2 and Third bands, and read the regulations for how the board weighs the profile against the average. If your average sits near a boundary, the profile — and the board&apos;s borderline and discretionary rules — can decide the outcome either way.
 </p>

 <h2>Worked Example: Turning Module Marks into an Average</h2>
 <p>
 Suppose you have four Level 6 modules: a 30-credit dissertation at 68%, a 30-credit specialist module at 62%, and two 15-credit modules at 71% and 58%. A credit-weighted average multiplies each mark by its credits, adds the results, and divides by the total credits: (68 × 30) + (62 × 30) + (71 × 15) + (58 × 15) = 5,835, divided by 90 credits, gives 64.8% — a provisional 2:1. This example is illustrative only; your programme&apos;s regulations decide which modules count, how Level 5 credit is treated, and whether the profile changes the result.
 </p>
 <p>
 The same arithmetic shows why credit values matter so much. In the example, the dissertation and the specialist module together carry two-thirds of the credit, so their marks dominate the result. A 10% improvement on a 30-credit module moves the average roughly three times as far as the same improvement on a 15-credit module. Enter the credit value from your official course information for every module, and do not assume every module carries the same weight.
 </p>

 <h2>What Counts: Level 5 and Level 6 Credit</h2>
 <p>
 Middlesex&apos;s regulations apply the grade-profile method across graded Level 5 and Level 6 credit, so both years of study can matter — not just the final year. Check your programme documentation for which modules count, whether a placement year or a failed-and-retaken module is included, and how any approved programme variation changes the rules for your course. Dissertations and placements sometimes carry different credit or assessment arrangements, so confirm them in your handbook rather than guessing.
 </p>
 <p>
 If you are planning remaining assessments rather than reviewing finished modules, the <Link href="/final-grade-calculator/">final grade calculator</Link> can show the average you need on the work still to come, and the <Link href="/weighted-grade-calculator/">weighted grade calculator</Link> can model different year weightings if your programme specifies them.
 </p>

 <h2>Common Mistakes to Avoid</h2>
 <ul>
 <li><strong>Using unconfirmed marks.</strong> Provisional or predicted marks can change after moderation. Base planning estimates on confirmed marks and update them when results are final.</li>
 <li><strong>Ignoring the profile.</strong> A single average hides the spread of your marks. A student with half their credits at First level and half at 2:2 level has a very different profile from a student with everything at 2:1, even if the averages match.</li>
 <li><strong>Assuming a fixed year split.</strong> Middlesex uses the grade-profile method, not one assumed percentage year split. Do not apply another university&apos;s 25/75 or 40/60 weighting to a Middlesex result.</li>
 <li><strong>Treating the estimate as official.</strong> The exam board makes the classification decision under the regulations for your programme. Confirm the outcome with your university before relying on it.</li>
 </ul>

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
