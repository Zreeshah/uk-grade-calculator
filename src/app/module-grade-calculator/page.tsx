import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GradeCalculator from "@/components/GradeCalculator";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import ClassificationTable from "@/components/ClassificationTable";
import Breadcrumb from "@/components/Breadcrumb";
import { degreeClassifications } from "@/lib/grades";
import { generateSEO, generateToolSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "Module Grade Calculator UK - Calculate Individual Module Grades",
 description:
 "Free module grade calculator for UK university students. Calculate your individual module marks with credit weightings. Works for all UK universities with 20, 30, and 40-credit modules.",
 path: "/module-grade-calculator/",
});

const faqs = [
 {
 question: "How do I calculate my module grade?",
 answer:
 "Enter each assessment component (coursework, exams, presentations) with its percentage mark and credit or weighting value. The calculator multiplies each mark by its weight, sums the results, and divides by the total weighting to give your overall module grade as a percentage.",
 },
 {
 question: "What is the difference between a module grade and a degree grade?",
 answer:
 "A module grade is the percentage mark for one individual course or unit, based on its assessments. Your degree grade (classification) is the credit-weighted average of all your module grades across your degree, usually from Year 2 and Year 3 only.",
 },
 {
 question: "How many credits is a typical UK module?",
 answer:
 "Most UK undergraduate modules are worth 20 credits, which represents approximately 200 hours of study. Double modules are 40 credits, and dissertations or major projects are typically 40 or 60 credits. A full year of study is 120 credits.",
 },
 {
 question: "Do all assessments within a module count equally?",
 answer:
 "No. Most modules split assessment across multiple components with different weightings. For example, a module might be 60% exam and 40% coursework, or 50% essay and 50% presentation. Check your module handbook for the exact split.",
 },
 {
 question: "What happens if I fail a module?",
 answer:
 "If you fail a module (score below 40%), most universities allow you to resit the assessment. However, resit marks are typically capped at 40% (a bare pass), meaning the capped mark is used in your degree classification calculation. Some universities have different capping policies, so check your institution's regulations.",
 },
 {
 question: "Can I use this for postgraduate modules?",
 answer:
 "Yes, you can use this calculator for postgraduate modules. The grade input works the same way. However, postgraduate classifications use different boundaries: Distinction (70%+), Merit (60-69%), and Pass (50-59%). Use our Masters Grade Calculator for postgraduate-specific boundaries.",
 },
 {
 question: "How do I convert letter grades to percentages?",
 answer:
 "UK universities rarely use letter grades, but if yours does, common conversions are: A = 70-100%, B = 60-69%, C = 50-59%, D = 40-49%, F = below 40%. Some universities use finer distinctions (A+, A, A-). Check your university's specific grade conversion table.",
 },
 {
 question: "Why is my module grade different from the average of my assessments?",
 answer:
 "If your assessments have different weightings, a simple average will not match the weighted calculation. For example, if your exam (worth 70%) scored 55% and your coursework (worth 30%) scored 80%, the weighted average is (55 x 0.7) + (80 x 0.3) = 62.5%, not the simple average of 67.5%.",
 },
];

const relatedLinks = [
 { title: "University Grade Calculator", href: "/", description: "Calculate your overall degree classification from all module grades." },
 { title: "Weighted Grade Calculator", href: "/weighted-grade-calculator/", description: "Work out weighted averages with custom year and module weightings." },
 { title: "Final Grade Calculator", href: "/final-grade-calculator/", description: "Find out what you need on your final assessments to reach your target." },
 { title: "Degree Classification Calculator", href: "/degree-classification-calculator/", description: "Determine your degree classification based on your overall percentage." },
];

export default function ModuleGradeCalculatorPage() {
 const toolSchema = generateToolSchema(
 "Module Grade Calculator UK",
 "Free calculator for UK university students to calculate individual module grades with credit weightings.",
 "https://unigradecalculator.co.uk/module-grade-calculator/"
 );
 
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />

 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "Module Grade Calculator" }]} />

 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 Module Grade Calculator
 </h1>
 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
 Calculate your individual module grades with credit-weighted accuracy. Enter your assessment marks and their weightings to find your overall module percentage.
 </p>
 </div>

 <GradeCalculator type="module" showTarget={true} showCredits={true} defaultCredits="20" />

 <div className="prose-custom mt-12">
 <h2>How to Calculate Your Module Grade</h2>
 <p>
 A module grade in the UK university system is calculated by combining all assessment components within that module according to their assigned weightings. This is not a simple average. Each assessment component contributes to your final module mark in proportion to its weighting, which is set out in your module handbook at the start of the academic year. Once you have your module grades, use our <Link href="/">university grade calculator</Link> to see your overall degree classification.
 </p>
 <p>
 For example, if a module has three assessment components:
 </p>
 <ul>
 <li>Coursework essay (30% weighting): You scored 72%</li>
 <li>Group presentation (20% weighting): You scored 65%</li>
 <li>Final exam (50% weighting): You scored 58%</li>
 </ul>
 <p>
 Your module grade would be: (72 x 0.30) + (65 x 0.20) + (58 x 0.50) = 21.6 + 13.0 + 29.0 = <strong>63.6%</strong>
 </p>
 <p>
 This weighted calculation ensures that your exam, which counts for half the module, has the greatest influence on your final mark. This is why it is crucial to perform well on heavily weighted components.
 </p>

 <h2>Understanding Module Credits in the UK</h2>
 <p>
 The UK credit system is based on the Framework for Higher Education Qualifications (FHEQ) in England, Wales, and Northern Ireland, and the Scottish Credit and Qualifications Framework (SCQF) in Scotland. Here is how credits work:
 </p>
 <table>
 <thead>
 <tr>
 <th>Credit Value</th>
 <th>Study Hours</th>
 <th>Typical Module Type</th>
 </tr>
 </thead>
 <tbody>
 <tr><td>10 credits</td><td>100 hours</td><td>Short module or skills unit</td></tr>
 <tr><td>20 credits</td><td>200 hours</td><td>Standard single module</td></tr>
 <tr><td>30 credits</td><td>300 hours</td><td>Extended module</td></tr>
 <tr><td>40 credits</td><td>400 hours</td><td>Double module or dissertation</td></tr>
 <tr><td>60 credits</td><td>600 hours</td><td>Major project or dissertation</td></tr>
 </tbody>
 </table>
 <p>
 A full academic year requires 120 credits (1,200 hours of study). A standard three-year undergraduate degree totals 360 credits. These study hours include lectures, seminars, independent reading, assessment preparation, and the assessments themselves. For a full explanation of how these credits feed into your degree result, read our guide on <Link href="/blog/how-university-grading-works-uk/">how university grading works in the UK</Link>.
 </p>

 <h2>Why Credit Weighting Matters</h2>
 <p>
 Not all modules contribute equally to your degree classification. A 40-credit dissertation has exactly twice the impact of a 20-credit module. This is by design: your dissertation represents a significant independent research project that demonstrates your ability to work autonomously at degree level.
 </p>
 <p>
 This means you should allocate your study time proportionally. If you have a 40-credit dissertation and a 20-credit elective, the dissertation deserves roughly twice as much of your time and effort. Students who treat all modules equally often underperform on high-credit assessments and overinvest in lower-credit ones. Our <Link href="/weighted-grade-calculator/">weighted grade calculator</Link> shows you exactly how each module contributes to your overall average.
 </p>

 <h2>Module Grade Boundaries and What They Mean</h2>
 <p>
 While degree classifications (First, 2:1, 2:2, Third) apply to your overall degree, individual module grades are marked against the same percentage scale. Understanding where your module grades fall helps you track your progress toward your target classification:
 </p>
 </div>

 <ClassificationTable classifications={degreeClassifications} title="Module Grade Boundaries" />

 <div className="prose-custom">
 <h2>Assessment Types and Their Impact on Module Grades</h2>
 <p>
 UK university modules use a variety of assessment methods. Understanding these helps you prepare effectively for each component:
 </p>
 <h3>Examinations</h3>
 <p>
 Traditional exams remain common in many subjects, particularly STEM fields and professional qualifications. They typically carry 40-60% of the module weight. Exam techniques that can improve your mark include: answering the question asked (not the one you prepared for), managing time across questions, and structuring answers with clear introductions and conclusions.
 </p>
 <h3>Coursework and Essays</h3>
 <p>
 Extended written work allows you to demonstrate research skills, critical analysis, and structured argument. Coursework is often weighted at 30-50% of a module. The advantage of coursework is that you have time to revise, seek feedback on drafts (where permitted), and refine your argument.
 </p>
 <h3>Presentations and Group Work</h3>
 <p>
 Many modules include a presentation or group project component, usually weighted at 10-30%. These assess communication skills, teamwork, and your ability to synthesise and present information concisely. Group work marks may be modulated by peer assessment.
 </p>
 <h3>Practical Assessments and Labs</h3>
 <p>
 In science, engineering, and health subjects, practical work and laboratory reports form a significant assessment component. These assess your ability to apply theoretical knowledge to real-world problems and document your methods and findings systematically.
 </p>

 <h2>What to Do If Your Module Grade Is Lower Than Expected</h2>
 <p>
 If you receive a module grade that seems unexpectedly low, you have several options:
 </p>
 <ol>
 <li><strong>Request feedback.</strong> You are entitled to detailed feedback on your assessments. This helps you understand where marks were lost and how to improve in future modules.</li>
 <li><strong>Check for clerical errors.</strong> Occasionally, marks are entered incorrectly. If your grade does not match the feedback you received, contact your module leader.</li>
 <li><strong>Submit an academic appeal.</strong> If there were extenuating circumstances that affected your performance (illness, bereavement, etc.), you may be able to submit a formal appeal. Most universities have clear procedures for this.</li>
 <li><strong>Request a mark review.</strong> Some universities allow you to request a review of your marking. This is not a full re-mark but a check that the marking criteria were applied correctly.</li>
 <li><strong>Use it as a learning opportunity.</strong> Identify which assessment component pulled your grade down and focus on improving that skill for future modules.</li>
 </ol>

 <h2>Module Calculator: Breaking Down Your Individual Marks</h2>
 <p>
 A module calculator is an essential tool for any UK university student who wants to understand how individual marks contribute to their overall module grade. Rather than waiting until the end of the semester, you can enter each assessment component as you receive marks and see your running module grade in real time.
 </p>
 <p>
 This is particularly useful for modules with multiple assessment components. For example, a module might include a 2,000-word essay (30%), a group presentation (20%), and a two-hour exam (50%). As you receive each mark, enter it into the calculator to see how your individual module grade is shaping up and whether you need to adjust your effort for remaining assessments.
 </p>
 <p>
 Here is an example showing how different module marks combine:
 </p>
 <table>
 <thead><tr><th>Assessment</th><th>Weight</th><th>Your Mark</th><th>Weighted Contribution</th></tr></thead>
 <tbody>
 <tr><td>Literature Review Essay</td><td>25%</td><td>68%</td><td>17.0</td></tr>
 <tr><td>Lab Report</td><td>25%</td><td>72%</td><td>18.0</td></tr>
 <tr><td>Final Exam</td><td>50%</td><td>Not yet taken</td><td>?</td></tr>
 </tbody>
 </table>
 <p>
 With 35.0 out of a possible 50 already secured, this student knows they need at least 10% on the exam (out of 50% weight) to pass the module at 45%, or 40% on the exam to reach a module grade of 55% (a 2:2). This kind of forward planning turns the module calculator from a passive tool into an active study strategy.
 </p>

 <h2>How Module Grades Feed Into Your Degree Classification</h2>
 <p>
 Your individual module grade does not exist in isolation. It feeds into a larger calculation that determines your degree classification. Understanding this pipeline helps you prioritise effectively:
 </p>
 <ol>
 <li><strong>Assessment marks combine into a module grade.</strong> Each assessment within a module is weighted according to the module specification. The module calculator handles this step.</li>
 <li><strong>Module grades combine into a year average.</strong> All module grades within an academic year are combined using credit weighting. A 40-credit module counts twice as much as a 20-credit one.</li>
 <li><strong>Year averages combine into an overall degree average.</strong> Most universities weight Year 3 more heavily than Year 2 (commonly 67% vs 33%). Year 1 usually does not count.</li>
 <li><strong>The overall average determines your classification.</strong> 70%+ is a First, 60-69% is a 2:1, 50-59% is a 2:2, and 40-49% is a Third.</li>
 </ol>
 <p>
 This means a single poor module mark is not the end of the world, but a pattern of underperformance across multiple modules will drag your average down. Use the module calculator for each module, then feed the results into our <Link href="/">university grade calculator</Link> to see the bigger picture.
 </p>

 <h2>Tips for Maximising Your Module Grades</h2>
 <ul>
 <li><strong>Read the marking criteria carefully.</strong> Every module has published assessment criteria that tell you exactly what markers are looking for at each classification level. Study these before starting your work.</li>
 <li><strong>Front-load high-weight assessments.</strong> If your exam is worth 60%, start revision early and treat it as the priority. Do not let coursework deadlines push exam preparation to the last minute.</li>
 <li><strong>Use past papers and our <Link href="/final-grade-calculator/">final grade calculator</Link> to set targets.</strong> For exam modules, past papers are the single most effective revision tool. They show you the question format, topic coverage, and expected depth of answer.</li>
 <li><strong>Seek formative feedback.</strong> Many lecturers offer draft feedback on coursework or hold office hours where you can discuss your approach. Use these opportunities.</li>
 <li><strong>Manage your time across modules.</strong> A 40-credit module deserves twice the time of a 20-credit module. Timetable your study proportionally.</li>
 </ul>
 <h2>Module Calculator: From Assessment Marks to a Module Result</h2>
 <p>
 Students also search for a uni module calculator, university module calculator, module mark calculator, or module percentage calculator. They all describe the same first step: combine the weighted marks for coursework, exams, presentations, and practicals into one module percentage. Use this tool before adding that result to your wider degree calculation.
 </p>
 <p>
 Keep assessment weighting separate from module credits. An exam worth 60% changes the mark inside one module; a 40-credit module changes how much that completed module affects your degree average. Once you have a confirmed module grade, use the <Link href="/weighted-grade-calculator/">weighted average calculator</Link> for the credit-weighted stage.
 </p>
 </div>

 <figure className="my-10">
 <Image
 src="/images/infographics/how-to-calculate-a-module-grade.webp"
 alt="Step-by-step infographic calculating a module grade: coursework 65% weighted at 30% plus exam 72% weighted at 70% gives a final module mark of 69.9%"
 width={900}
 height={1897}
 loading="lazy"
 sizes="(max-width: 768px) 100vw, 800px"
 className="w-full h-auto rounded-xl border border-slate-200"
 />
 <figcaption className="text-sm text-slate-500 text-center mt-3">
 Worked example: turning assessment marks into one module grade.
 </figcaption>
 </figure>

 <FAQ items={faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 </>
 );
}
