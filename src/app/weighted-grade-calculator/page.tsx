import type { Metadata } from "next";
import GradeCalculator from "@/components/GradeCalculator";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "Weighted Grade Calculator UK - Calculate Weighted Average Grades",
 description:
 "Free weighted grade calculator for UK university students. Calculate credit-weighted averages with custom module weightings. Works for all UK universities.",
 path: "/weighted-grade-calculator/",
});

const faqs = [
 { question: "What is a weighted grade calculator?", answer: "A weighted grade calculator computes your overall grade by considering that different modules or assessments carry different weights or credit values. Instead of a simple average, it multiplies each grade by its weight, sums the products, and divides by the total weight. This gives a more accurate representation of your academic performance." },
 { question: "How do I calculate a weighted average by hand?", answer: "Multiply each grade by its credit or weight value, add up all the products, then divide by the total credits or weights. For example: Module A (65%, 20 credits) + Module B (72%, 40 credits) = (65x20 + 72x40) / (20+40) = (1300 + 2880) / 60 = 69.67%." },
 { question: "Why is a weighted average different from a simple average?", answer: "A simple average treats all modules equally regardless of their credit value. A weighted average gives proportionally more influence to higher-credit modules. Since a 40-credit dissertation represents more work and academic weight than a 20-credit module, the weighted average reflects your true overall performance more accurately." },
 { question: "Do UK universities use weighted or simple averages?", answer: "All UK universities use credit-weighted averages for calculating degree classifications. This is a fundamental principle of the UK credit framework. A simple average would not account for the varying academic weight of different modules." },
 { question: "How do year weightings work?", answer: "Year weightings determine how much each academic year contributes to your final degree classification. For example, a common weighting is Year 2 at 33% and Year 3 at 67%. This means your final year counts twice as much as your second year. First-year grades typically do not count toward classification." },
 { question: "Can I weight different years differently?", answer: "Yes. Enter your Year 2 modules with their credit values, calculate the Year 2 average, then do the same for Year 3. To apply year weightings, multiply each year's average by its weight percentage: (Year 2 avg x 0.33) + (Year 3 avg x 0.67) = final overall average." },
];

const relatedLinks = [
 { title: "University Grade Calculator", href: "/", description: "Calculate your overall degree classification from all module grades." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Calculate individual module grades from assessment components." },
 { title: "Final Grade Calculator", href: "/final-grade-calculator/", description: "Find out what you need on remaining assessments to reach your target." },
 { title: "How to Calculate Weighted Average (Guide)", href: "/blog/how-to-calculate-weighted-average/", description: "Step-by-step guide to understanding and calculating weighted averages." },
];

export default function WeightedGradeCalculatorPage() {
 const toolSchema = generateToolSchema("Weighted Grade Calculator UK", "Free calculator to compute credit-weighted grade averages for UK university students.", "https://uk-grade-calculator.vercel.app/weighted-grade-calculator/");
 const faqSchema = generateFAQSchema(faqs);

 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "Weighted Grade Calculator" }]} />

 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 Weighted Grade Calculator
 </h1>
 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
 Calculate your credit-weighted average accurately. Enter module grades and their credit values to see how each module contributes to your overall percentage.
 </p>
 </div>

 <GradeCalculator type="undergraduate" showTarget={true} showCredits={true} defaultCredits="20" />

 <div className="prose-custom mt-12">
 <h2>How the Weighted Grade Calculator Works</h2>
 <p>
 A weighted grade calculator uses the credit-weighted average formula to determine your overall percentage. Unlike a simple average that treats every module equally, a weighted calculation accounts for the fact that different modules carry different credit loads and therefore different levels of academic significance.
 </p>
 <p>The formula is:</p>
 <p><strong>Weighted Average = (Grade₁ x Credits₁ + Grade₂ x Credits₂ + ... + Gradeₙ x Creditsₙ) / Total Credits</strong></p>

 <h2>Step-by-Step Weighted Average Calculation</h2>
 <p>Let us walk through a realistic example. Suppose you are a second-year History student with these modules:</p>
 <table>
 <thead><tr><th>Module</th><th>Grade (%)</th><th>Credits</th><th>Weighted Value</th></tr></thead>
 <tbody>
 <tr><td>Medieval Britain</td><td>68</td><td>20</td><td>1,360</td></tr>
 <tr><td>Research Methods</td><td>72</td><td>20</td><td>1,440</td></tr>
 <tr><td>Modern European History</td><td>61</td><td>20</td><td>1,220</td></tr>
 <tr><td>Dissertation Preparation</td><td>75</td><td>40</td><td>3,000</td></tr>
 <tr><td>Historical Theory</td><td>58</td><td>20</td><td>1,160</td></tr>
 </tbody>
 </table>
 <p>Total weighted value: 1,360 + 1,440 + 1,220 + 3,000 + 1,160 = <strong>8,180</strong></p>
 <p>Total credits: 20 + 20 + 20 + 40 + 20 = <strong>120</strong></p>
 <p>Weighted average: 8,180 / 120 = <strong>68.17%</strong> (Upper Second Class / 2:1)</p>
 <p>
 Notice that the simple average of the five grades would be (68+72+61+75+58)/5 = 66.8%. The weighted average is higher (68.17%) because the 40-credit Dissertation Preparation, where you scored well at 75%, has double the influence of the standard modules.
 </p>

 <h2>Why Weighting Matters for Your Degree Classification</h2>
 <p>
 The difference between a weighted and unweighted average can be the difference between degree classifications. In the example above, both calculations fall within the 2:1 range, but in borderline cases the distinction matters enormously.
 </p>
 <p>Consider a student with these Year 3 modules:</p>
 <ul>
 <li>Module A: 72% (20 credits)</li>
 <li>Module B: 68% (20 credits)</li>
 <li>Dissertation: 73% (60 credits)</li>
 </ul>
 <p>Simple average: (72 + 68 + 73) / 3 = 71.0% (First)</p>
 <p>Weighted average: (72x20 + 68x20 + 73x60) / 100 = (1440 + 1360 + 4380) / 100 = 71.8% (First)</p>
 <p>
 In this case, the weighted average is slightly higher because the dissertation (where the student scored well) carries 60% of the credits. But if the student had scored poorly on the dissertation, the weighted average would have been dragged down more than the simple average.
 </p>

 <h2>Applying Year Weightings to Your Calculation</h2>
 <p>
 Most UK universities do not weight all years equally. The standard approach is to calculate a credit-weighted average for each year separately, then combine them using year weightings. Here is how to do it:
 </p>
 <ol>
 <li><strong>Calculate Year 2 average:</strong> Enter all Year 2 modules into the calculator to get your Year 2 credit-weighted average.</li>
 <li><strong>Calculate Year 3 average:</strong> Do the same for Year 3 modules.</li>
 <li><strong>Apply year weightings:</strong> Multiply each year&apos;s average by its weighting percentage.</li>
 </ol>
 <p>Example with 33/67 weighting:</p>
 <ul>
 <li>Year 2 average: 62% x 0.33 = 20.46</li>
 <li>Year 3 average: 71% x 0.67 = 47.57</li>
 <li>Overall: 20.46 + 47.57 = <strong>68.03%</strong> (2:1)</li>
 </ul>
 <p>This shows why strong final-year performance is so important. Even though the student averaged only 62% in Year 2, their 71% in Year 3 (weighted at 67%) pulled their overall average up to a comfortable 2:1.</p>

 <h2>Common Year Weighting Patterns Across UK Universities</h2>
 <table>
 <thead><tr><th>University</th><th>Year 2</th><th>Year 3</th></tr></thead>
 <tbody>
 <tr><td>Most Russell Group universities</td><td>33%</td><td>67%</td></tr>
 <tr><td>Manchester Met, Portsmouth</td><td>30%</td><td>70%</td></tr>
 <tr><td>Some arts/humanities programmes</td><td>40%</td><td>60%</td></tr>
 <tr><td>Scottish 4-year degrees (Yr 3/4)</td><td>25-33%</td><td>67-75%</td></tr>
 </tbody>
 </table>
 <p>Always verify your specific programme&apos;s year weighting in your student handbook or academic regulations. Even within the same university, different departments may use different weightings.</p>

 <h2>Strategic Implications of Weighted Grades</h2>
 <p>Understanding how weighting works gives you a strategic advantage in managing your academic performance:</p>
 <ul>
 <li><strong>Prioritise high-credit modules.</strong> If your dissertation is worth 60 credits (half your year), it deserves at least half your study time for that year.</li>
 <li><strong>Plan module choices wisely.</strong> If you have optional modules, consider which assessment methods suit your strengths. A student who excels at essays should not choose exam-heavy electives unless necessary.</li>
 <li><strong>Use the target calculator.</strong> Enter your completed modules and use our target grade feature to see exactly what marks you need on remaining assessments.</li>
 <li><strong>Do not panic about one bad module.</strong> A poor mark on a 20-credit module can be offset by strong performance on a 40 or 60-credit module. Use the calculator to see how much impact each module actually has.</li>
 </ul>

 <h2>Common Mistakes in Weighted Calculations</h2>
 <ul>
 <li><strong>Treating all modules equally.</strong> This is the most common error. A 20-credit and a 40-credit module do not have the same influence on your average.</li>
 <li><strong>Forgetting to include all modules.</strong> Every credited module in the relevant year contributes to your average. Do not leave out modules you did poorly on.</li>
 <li><strong>Using wrong credit values.</strong> Check your transcript for the exact credit value of each module. Do not assume all modules are 20 credits.</li>
 <li><strong>Not applying year weightings.</strong> If you calculate Year 2 and Year 3 averages separately, remember to apply the year weighting before comparing to classification boundaries.</li>
 </ul>
 </div>

 <FAQ items={faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 </>
 );
}
