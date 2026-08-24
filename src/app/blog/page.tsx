import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "UK University Grading Guides - Degree Classifications & Weighted Averages",
 description:
 "Free guides to UK university grading. Understand degree classifications, uni grade boundaries, and how to calculate credit-weighted averages, with calculators for every step.",
 path: "/blog/",
});

const guides = [
 {
 title: "UK Degree Classifications Explained",
 image: "/images/blog/uk-degree-classifications-explained.webp",
 alt: "UK degree classification bands chart from First at 70%+ down to Third at 40-49%",
 description:
 "What First, 2:1, 2:2, and Third class degrees mean, the percentage boundaries behind them, employer expectations, borderline policies, and international equivalents.",
 href: "/blog/uk-degree-classifications-explained/",
 readTime: "12 min read",
 topics: ["degree classification", "uni grade boundaries", "2:1 degree", "first class percentage"],
 },
 {
 title: "How University Grading Works in the UK",
 image: "/images/blog/how-university-grading-works-uk.webp",
 alt: "Journey illustration from marked exam papers through a calculator to a degree certificate",
 description:
 "The full journey from assessment marks to confirmed degree result: FHEQ and SCQF credit frameworks, marking and moderation, external examiners, year weightings, and appeals.",
 href: "/blog/how-university-grading-works-uk/",
 readTime: "10 min read",
 topics: ["university grading system UK", "credits", "moderation", "external examiner"],
 },
 {
 title: "How to Calculate a Weighted Average",
 image: "/images/blog/how-to-calculate-weighted-average.webp",
 alt: "Balanced scale showing a 40-credit book equal to two 20-credit books for weighted averages",
 description:
 "Step-by-step weighted average formula with worked examples, year weighting, Excel method, capped resits, and every common mistake that changes a classification.",
 href: "/blog/how-to-calculate-weighted-average/",
 readTime: "8 min read",
 topics: ["weighted average formula", "credit weighted average", "year weighting", "Excel SUMPRODUCT"],
 },
];

const tools = [
 { title: "University Grade Calculator", href: "/", description: "Overall degree classification from your module grades." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Combine coursework, exam, and practical marks." },
 { title: "Weighted Average Calculator", href: "/weighted-grade-calculator/", description: "Credit-weighted averages across unequal modules." },
 { title: "Final Grade Calculator", href: "/final-grade-calculator/", description: "What you need on remaining credits to hit your target." },
];

export default function BlogIndexPage() {
 return (
 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "Blog" }]} />

 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 UK University Grading Guides
 </h1>
 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
 Clear explanations of how UK degrees are classified, graded, and calculated. Each guide pairs with a free calculator so you can go from understanding the system to checking your own grades in minutes.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
 {guides.map((guide) => (
 <Link
 key={guide.href}
 href={guide.href}
 className="group flex flex-col p-6 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all"
 >
 <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600 mb-2">Guide · {guide.readTime}</span>
 <Image
 src={guide.image}
 alt={guide.alt}
 width={600}
 height={315}
 sizes="(max-width: 768px) 100vw, 400px"
 className="w-full h-auto rounded-lg mb-3"
 />
 <h2 className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
 {guide.title}
 </h2>
 <p className="text-sm text-slate-600 leading-relaxed mb-4">{guide.description}</p>
 <span className="mt-auto flex flex-wrap gap-2">
 {guide.topics.map((topic) => (
 <span key={topic} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
 {topic}
 </span>
 ))}
 </span>
 </Link>
 ))}
 </div>

 <div className="prose-custom">
 <h2>Guides vs Calculators</h2>
 <p>
 The guides explain the rules; the calculators do the arithmetic. If you already know your marks and just need an answer, start with the{" "}
 <Link href="/">university grade calculator</Link>. If you want to understand why a 68% average might still earn a First, or how Year 2 and Year 3 combine, start with a guide above.
 </p>

 <h2>Where to Go Next</h2>
 <ul>
 {tools.map((tool) => (
 <li key={tool.href}>
 <strong>{tool.title}.</strong> {tool.description}
 </li>
 ))}
 </ul>
 <p>
 For a deeper explanation of any single step, the <Link href="/blog/uk-degree-classifications-explained/">degree classifications guide</Link> covers boundaries and outcomes, while the{" "}
 <Link href="/blog/how-university-grading-works-uk/">grading process guide</Link> covers moderation, external examiners, and exam boards.
 </p>
 </div>
 </div>
 );
}
