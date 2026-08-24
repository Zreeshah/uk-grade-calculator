import type { Metadata } from "next";
import Link from "next/link";
import GradeCalculator from "@/components/GradeCalculator";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import ClassificationTable from "@/components/ClassificationTable";
import Breadcrumb from "@/components/Breadcrumb";
import { degreeClassifications } from "@/lib/grades";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "Percentage Grade Calculator UK - Convert Marks to Percentages",
 description:
 "Free percentage grade calculator for UK university students. Convert raw marks to percentages and calculate your overall percentage grade across multiple modules.",
 path: "/percentage-grade-calculator/",
});

const faqs = [
 { question: "How do I convert my marks to a percentage?", answer: "Divide your mark by the total marks available, then multiply by 100. For example, if you scored 54 out of 75, your percentage is (54/75) x 100 = 72%." },
 { question: "What percentage do I need for a First?", answer: "You need an overall credit-weighted average of 70% or above for a First Class Honours degree at most UK universities. Individual modules may be below 70% as long as your weighted average reaches the threshold." },
 { question: "How do I calculate my overall percentage from multiple modules?", answer: "Multiply each module's percentage by its credit value, sum all the products, then divide by total credits. This gives your credit-weighted average percentage." },
 { question: "Are UK university percentages the same as school percentages?", answer: "No. UK university marking is significantly more compressed than school marking. A university mark of 70% (First Class) is considered excellent, while the same mark at school would be average. University assessors rarely award marks above 85%." },
];

const relatedLinks = [
 { title: "University Grade Calculator", href: "/", description: "Full calculator with credit weighting and classification display." },
 { title: "Weighted Grade Calculator", href: "/weighted-grade-calculator/", description: "Calculate weighted averages with custom module and year weights." },
 { title: "GPA Calculator UK", href: "/gpa-calculator/", description: "Convert your percentage grades to GPA for international use." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Break down module grades from assessment components." },
];

export default function PercentageGradeCalculatorPage() {
 const toolSchema = generateToolSchema("Percentage Grade Calculator UK", "Convert raw marks to percentages and calculate overall percentage grades.", "https://uk-grade-calculator.vercel.app/percentage-grade-calculator/");
 const faqSchema = generateFAQSchema(faqs);

 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "Percentage Grade Calculator" }]} />

 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 Percentage Grade Calculator
 </h1>
 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
 Calculate your overall percentage grade from multiple modules. Enter each module&apos;s percentage and credit value to see your credit-weighted average and corresponding degree classification.
 </p>
 </div>

 <GradeCalculator type="undergraduate" showTarget={true} showCredits={true} />

 <ClassificationTable classifications={degreeClassifications} title="Percentage to Classification Mapping" />

 <div className="prose-custom mt-12">
 <h2>Understanding Percentage Grades in UK Universities</h2>
 <p>
 The UK university grading system operates on a 0-100 percentage scale, but the way this scale is used differs significantly from school-level grading and from grading systems in other countries. Understanding these differences is essential for accurately interpreting your marks and setting realistic targets.
 </p>
 <p>
 In practice, the UK university marking scale functions more like a 40-80 scale. Marks below 40% typically represent a fail, and marks above 80% are exceptionally rare. The most commonly awarded marks fall between 55% and 75%, with the majority of students achieving averages in the 60-69% range (2:1 classification). For a full breakdown of what each classification means, see our <Link href="/blog/uk-degree-classifications-explained/">UK degree classifications guide</Link>.
 </p>

 <h2>How to Convert Raw Marks to Percentages</h2>
 <p>
 If your assessment results are given as raw marks (e.g., 42 out of 60), you need to convert them to percentages before using the grade calculator. The formula is:
 </p>
 <p><strong>Percentage = (Marks Obtained / Total Marks) x 100</strong></p>
 <p>Examples:</p>
 <ul>
 <li>42 out of 60 = (42/60) x 100 = <strong>70%</strong></li>
 <li>55 out of 80 = (55/80) x 100 = <strong>68.75%</strong></li>
 <li>28 out of 40 = (28/40) x 100 = <strong>70%</strong></li>
 </ul>

 <h2>Why UK Percentages Seem Lower Than Other Countries</h2>
 <p>
 International students and those applying abroad often wonder why UK grades seem low compared to other systems. A UK mark of 70% is outstanding (First Class), while in many other countries, 70% would be considered average. Here is why:
 </p>
 <ul>
 <li><strong>Criterion-referenced vs norm-referenced marking.</strong> UK university marking is often criterion-referenced against an ideal standard. Achieving &quot;perfect&quot; work is theoretically possible but practically never happens, so the top of the scale is rarely used.</li>
 <li><strong>Academic culture.</strong> There is a long-standing tradition in UK academia of reserving the highest marks for truly exceptional, publication-quality work. Even the best undergraduate work is not expected to reach 90%.</li>
 <li><strong>Assessment design.</strong> UK assessments often include open-ended questions, essays, and research projects where there is no single &quot;correct&quot; answer, making 100% logically unattainable.</li>
 </ul>

 <h2>Percentage Ranges by Subject Area</h2>
 <p>
 Average grades vary by subject area. STEM subjects tend to have slightly higher averages than humanities and social sciences, partly because quantitative assessments have more objectively correct answers:
 </p>
 <table>
 <thead><tr><th>Subject Area</th><th>Typical Average Range</th><th>Notes</th></tr></thead>
 <tbody>
 <tr><td>Mathematics and Sciences</td><td>60-68%</td><td>Problem-based marking can yield higher extremes</td></tr>
 <tr><td>Engineering</td><td>58-66%</td><td>Lab and project work can vary widely</td></tr>
 <tr><td>Humanities</td><td>58-65%</td><td>Essay-based assessment, tighter marking range</td></tr>
 <tr><td>Social Sciences</td><td>59-66%</td><td>Mix of essays and quantitative work</td></tr>
 <tr><td>Creative Arts</td><td>55-65%</td><td>Portfolio and performance-based, subjective element</td></tr>
 <tr><td>Law</td><td>57-64%</td><td>Essay-heavy, strict marking conventions</td></tr>
 <tr><td>Medicine</td><td>60-70%</td><td>Often pass/fail for clinical components</td></tr>
 </tbody>
 </table>

 <h2>Common Percentage Calculation Mistakes</h2>
 <ul>
 <li><strong>Using raw marks instead of percentages.</strong> If different assessments have different total marks (e.g., one out of 50 and another out of 100), you must convert both to percentages before calculating your weighted average.</li>
 <li><strong>Forgetting assessment weightings within a module.</strong> A module might be 60% exam and 40% coursework. You cannot simply average the two marks; you must weight them according to the split.</li>
 <li><strong>Rounding too early.</strong> Keep decimal places throughout your calculation and only round the final result. Rounding intermediate values can shift your result by several percentage points. Let our <Link href="/weighted-grade-calculator/">weighted grade calculator</Link> handle the maths for you. Or for your overall result, go straight to the <Link href="/">university grade calculator</Link>.</li>
 <li><strong>Confusing percentile rank with percentage grade.</strong> Being in the &quot;top 30%&quot; of your cohort is not the same as scoring 70%. Your position relative to classmates is different from your absolute percentage mark.</li>
 </ul>
 </div>

 <FAQ items={faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 </>
 );
}
