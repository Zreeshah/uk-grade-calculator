import type { Metadata } from "next";
import GradeCalculator from "@/components/GradeCalculator";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import ClassificationTable from "@/components/ClassificationTable";
import { degreeClassifications } from "@/lib/grades";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "University Grade Calculator UK - Free Degree Classification Calculator",
 description:
 "Free UK university grade calculator. Calculate your degree classification, module grades, and weighted average instantly. Supports First, 2:1, 2:2, and Third class. Trusted by UK students.",
 path: "/",
});

const faqs = [
 {
 question: "How does the UK university grade calculator work?",
 answer:
 "Enter your module grades (as percentages) and credit values. The calculator multiplies each grade by its credit weighting, sums the results, and divides by total credits to produce a credit-weighted average. This average is then mapped to the standard UK degree classification boundaries: 70%+ for a First, 60-69% for a 2:1, 50-59% for a 2:2, and 40-49% for a Third.",
 },
 {
 question: "What are the UK degree classification boundaries?",
 answer:
 "In the UK, undergraduate degrees are classified as: First Class Honours (1st) at 70% and above, Upper Second Class Honours (2:1) at 60-69%, Lower Second Class Honours (2:2) at 50-59%, Third Class Honours (3rd) at 40-49%, and a Fail below 40%. Some universities have slightly different boundaries, so always check your institution's regulations.",
 },
 {
 question: "Do all UK universities use the same grading system?",
 answer:
 "Most UK universities use the standard classification system (First, 2:1, 2:2, Third), but there are variations. For example, Scottish universities may use a different credit framework (SCQF vs FHEQ in England). Some universities also apply different year weightings or have borderline policies. Always verify your specific university's grading regulations.",
 },
 {
 question: "How are year weightings applied in degree calculations?",
 answer:
 "Most UK universities weight final-year marks more heavily. A common split is Year 2 counting for 33% and Year 3 for 67%. Some universities use 40/60 or 30/70 splits. First-year marks typically do not count towards the final classification but you usually need to pass all first-year modules to progress.",
 },
 {
 question: "What is a credit-weighted average?",
 answer:
 "A credit-weighted average accounts for the fact that different modules carry different credit values. A 40-credit dissertation has twice the impact of a 20-credit module. The formula is: (sum of grade x credits for each module) divided by (total credits). This gives a fairer representation of your overall performance than a simple average.",
 },
 {
 question: "Can I calculate my predicted degree grade?",
 answer:
 "Yes. Enter your completed module grades and use the target grade feature. Set your desired classification (e.g., 70% for a First) and enter your remaining credits. The calculator will tell you the average grade you need across your remaining modules to achieve your target.",
 },
 {
 question: "What is the difference between a module grade and an overall degree grade?",
 answer:
 "A module grade is the percentage mark for a single course or unit, typically based on coursework and exams. Your overall degree grade is the credit-weighted average of all your module grades (usually from Year 2 and Year 3 only), which determines your degree classification.",
 },
 {
 question: "Is this calculator accurate for my university?",
 answer:
 "This calculator uses the standard UK degree classification boundaries that apply to the majority of UK universities. However, some institutions have specific rules such as borderline rounding, module capping, or alternative classification algorithms. Check your university's academic regulations for their exact method.",
 },
];

const relatedLinks = [
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Calculate individual module grades with multiple assessments and custom weightings." },
 { title: "Weighted Grade Calculator", href: "/weighted-grade-calculator/", description: "Work out weighted averages with custom year and module weightings." },
 { title: "BTEC Grade Calculator", href: "/btec-grade-calculator/", description: "Calculate BTEC grades including Distinction*, Distinction, Merit, and Pass." },
 { title: "Masters Grade Calculator", href: "/masters-grade-calculator/", description: "Calculate postgraduate grades with Distinction, Merit, and Pass boundaries." },
 { title: "Final Grade Calculator", href: "/final-grade-calculator/", description: "Find out what you need on your final exams to reach your target grade." },
 { title: "GPA Calculator UK", href: "/gpa-calculator/", description: "Convert UK percentage grades to GPA scale for international applications." },
];

export default function HomePage() {
 const toolSchema = generateToolSchema(
 "UK University Grade Calculator",
 "Free calculator to determine UK university degree classification based on module grades and credit weightings.",
 "https://uk-grade-calculator.vercel.app/"
 );
 const faqSchema = generateFAQSchema(faqs);

 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

 <div className="container-main py-8">
 {/* Hero */}
 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
 University Grade Calculator
 </h1>
 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
 Calculate your UK degree classification instantly. Enter your module grades and credits to find out whether you are on track for a First, 2:1, 2:2, or Third.
 </p>
 </div>

 {/* Calculator */}
 <GradeCalculator type="undergraduate" showTarget={true} showCredits={true} />

 {/* SEO Content */}
 <div className="prose-custom mt-12">
 <h2>How to Use the UK University Grade Calculator</h2>
 <p>
 Using this university grade calculator is straightforward. Follow these steps to calculate your degree classification accurately:
 </p>
 <ol>
 <li><strong>Enter your module name</strong> in the first column. This is optional but helps you keep track of which grades belong to which modules.</li>
 <li><strong>Enter your grade as a percentage</strong> in the Grade column. If your university uses letter grades, convert them to percentages first (e.g., an A might be 75%).</li>
 <li><strong>Set the credit value</strong> for each module. Most UK modules are worth 20 credits, but dissertations and double modules are often 40 or 60 credits.</li>
 <li><strong>Add more modules</strong> by clicking the &quot;Add Module&quot; button. You can add as many as you need.</li>
 <li><strong>View your result</strong> at the top of the calculator. It shows your credit-weighted average and corresponding degree classification.</li>
 </ol>
 <p>
 The calculator updates in real time as you enter grades, so you can experiment with different scenarios to see how each module affects your overall classification.
 </p>

 <h2>Understanding UK Degree Classifications</h2>
 <p>
 The UK higher education system uses a classification system for undergraduate degrees that has been in place for over a century. Your degree classification appears on your certificate and transcript, and it is one of the first things employers look at when reviewing job applications.
 </p>
 <p>
 Degree classifications are based on your overall percentage average, which is calculated as a credit-weighted mean of your module marks. Here are the standard boundaries used by most UK universities:
 </p>
 </div>

 <ClassificationTable classifications={degreeClassifications} />

 <div className="prose-custom">
 <h3>First Class Honours (1st) - 70% and Above</h3>
 <p>
 A First is the highest undergraduate degree classification in the UK. It demonstrates exceptional academic achievement and a deep understanding of your subject. In the 2022/23 academic year, approximately 32% of UK graduates achieved a First Class degree, according to HESA data. A First is highly valued by employers, particularly for competitive graduate schemes, and is typically required for academic research positions and PhD applications.
 </p>

 <h3>Upper Second Class Honours (2:1) - 60% to 69%</h3>
 <p>
 A 2:1 (pronounced &quot;two-one&quot;) is the most common degree classification in the UK, achieved by around 44% of graduates. It is generally considered the minimum requirement for most competitive graduate jobs, management training programmes, and postgraduate study. Many employers list a 2:1 as their minimum entry requirement in job specifications.
 </p>

 <h3>Lower Second Class Honours (2:2) - 50% to 59%</h3>
 <p>
 A 2:2 (pronounced &quot;two-two&quot;) is achieved by approximately 18% of graduates. While some graduate schemes require a 2:1, many employers accept a 2:2, particularly in sectors where practical experience is valued over academic grades. A 2:2 still represents a solid academic achievement and opens doors to a wide range of career paths.
 </p>

 <h3>Third Class Honours (3rd) - 40% to 49%</h3>
 <p>
 A Third is the lowest honours degree classification. While it may limit some graduate scheme applications, it is still a valid degree. Many successful professionals started with a Third and built their careers through experience, further qualifications, and demonstrable skills.
 </p>

 <h2>How Degree Classification Is Calculated</h2>
 <p>
 Your degree classification depends on a credit-weighted average of your module marks. Here is the formula most UK universities use:
 </p>
 <p>
 <strong>Overall Average = (Sum of each Module Grade x Module Credits) / Total Credits</strong>
 </p>
 <p>
 For example, if you have three modules:
 </p>
 <ul>
 <li>Research Methods: 72% (20 credits) = 72 x 20 = 1,440</li>
 <li>Dissertation: 68% (40 credits) = 68 x 40 = 2,720</li>
 <li>Advanced Theory: 65% (20 credits) = 65 x 20 = 1,300</li>
 </ul>
 <p>
 Total weighted marks: 1,440 + 2,720 + 1,300 = 5,460<br />
 Total credits: 20 + 40 + 20 = 80<br />
 Overall average: 5,460 / 80 = <strong>68.25%</strong> = Upper Second Class (2:1)
 </p>
 <p>
 Notice how the 40-credit dissertation has twice the influence of a 20-credit module. This is why credit weighting matters and why a simple average of your grades would not give an accurate classification.
 </p>

 <h2>Year Weightings in UK Universities</h2>
 <p>
 Most UK universities do not weight all years equally when calculating your final degree classification. The most common approach is to give greater weight to your final year, because it represents your most recent and advanced work. Common weighting patterns include:
 </p>
 <table>
 <thead>
 <tr>
 <th>Weighting Pattern</th>
 <th>Year 1</th>
 <th>Year 2</th>
 <th>Year 3</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Most Common</td>
 <td>0%</td>
 <td>33%</td>
 <td>67%</td>
 </tr>
 <tr>
 <td>Alternative A</td>
 <td>0%</td>
 <td>40%</td>
 <td>60%</td>
 </tr>
 <tr>
 <td>Alternative B</td>
 <td>0%</td>
 <td>25%</td>
 <td>75%</td>
 </tr>
 <tr>
 <td>Equal Weighting</td>
 <td>0%</td>
 <td>50%</td>
 <td>50%</td>
 </tr>
 </tbody>
 </table>
 <p>
 Year 1 typically does not count towards your final classification, but you usually need to pass all first-year modules to progress to Year 2. Always check your university&apos;s specific regulations, as policies vary between institutions and even between departments within the same university.
 </p>

 <h2>Tips for Improving Your Degree Classification</h2>
 <p>
 If you are aiming for a higher classification, here are evidence-based strategies that can help:
 </p>
 <ol>
 <li><strong>Focus on high-credit modules.</strong> A dissertation worth 40 credits has double the impact of a standard 20-credit module. Invest proportionally more time in higher-credit work.</li>
 <li><strong>Use the target grade feature.</strong> Enter your completed grades into the calculator and use the target feature to see exactly what you need on remaining modules. This removes guesswork and helps you prioritise.</li>
 <li><strong>Understand marking criteria.</strong> Read your module handbooks carefully. Knowing the difference between a 2:1 and a First in your marker&apos;s eyes helps you target your effort.</li>
 <li><strong>Attend feedback sessions.</strong> Module feedback from previous assessments is the most underused resource in higher education. It tells you exactly where you lost marks and how to recover them.</li>
 <li><strong>Plan your module choices strategically.</strong> If you have elective choices, consider modules where the assessment style suits your strengths (e.g., coursework-heavy vs exam-heavy).</li>
 </ol>

 <h2>Common Mistakes When Calculating Grades</h2>
 <p>
 Students frequently make these errors when trying to work out their degree classification manually:
 </p>
 <ul>
 <li><strong>Ignoring credit weighting.</strong> A simple average of your grades is not the same as a credit-weighted average. A 40-credit module counts twice as much as a 20-credit one.</li>
 <li><strong>Including Year 1 grades.</strong> At most universities, first-year marks do not count towards your classification. Check whether yours is an exception.</li>
 <li><strong>Forgetting year weightings.</strong> If your university weights Year 3 at 67%, your final-year performance is twice as important as Year 2.</li>
 <li><strong>Using the wrong scale.</strong> Some modules are marked on different scales (e.g., pass/fail, letter grades). Convert everything to the same percentage scale before calculating.</li>
 <li><strong>Not accounting for capped marks.</strong> If you had a module mark capped due to a resit or late submission, use the capped mark, not the original mark.</li>
 </ul>

 <h2>Borderline Cases and University Policies</h2>
 <p>
 If your average falls close to a classification boundary (for example, 68-69% near the First/2:1 border), many universities have borderline policies that may upgrade your classification. Common approaches include:
 </p>
 <ul>
 <li><strong>Module profile method:</strong> If a certain percentage (often 50% or more) of your final-year credits fall in the higher classification band, you may be upgraded.</li>
 <li><strong>Preponderance calculation:</strong> The university looks at how many credits you scored in each classification band and awards the one where you have the most.</li>
 <li><strong>Viva voce:</strong> In rare cases, borderline students may be invited for an oral examination to determine their final classification.</li>
 <li><strong>Discretionary upgrade:</strong> Some exam boards have the authority to upgrade borderline candidates based on trajectory, extenuating circumstances, or overall performance profile.</li>
 </ul>
 <p>
 These policies vary significantly between institutions, so if you are near a boundary, check your university&apos;s academic regulations or speak with your personal tutor.
 </p>
 </div>

 <FAQ items={faqs} />

 <InternalLinks links={relatedLinks} />

 <div className="prose-custom mt-12">
 <h2>About This Calculator</h2>
 <p>
 This free UK university grade calculator was built for students who want a fast, accurate, and ad-light way to check their degree classification. Unlike other grade calculators that are cluttered with ads or require registration, this tool is completely free, works instantly in your browser, and does not store any of your data.
 </p>
 <p>
 Whether you are a first-year student planning ahead, a second-year trying to work out what you need for a 2:1, or a finalist checking whether a First is within reach, this calculator gives you the answer in seconds. Use our <a href="/module-grade-calculator/">module grade calculator</a> for individual module breakdowns, or the <a href="/weighted-grade-calculator/">weighted grade calculator</a> for multi-year calculations with custom year weightings.
 </p>
 </div>
 </div>
 </>
 );
}
