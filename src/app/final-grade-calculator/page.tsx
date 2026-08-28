import type { Metadata } from "next";
import Link from "next/link";
import GradeCalculator from "@/components/GradeCalculator";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEO, generateToolSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "Final Grade Calculator UK - What Grade Do I Need?",
 description:
 "Free final grade calculator for UK students. Find out exactly what grade you need on your remaining modules or exams to achieve your target degree classification.",
 path: "/final-grade-calculator/",
});

const faqs = [
 { question: "How do I calculate what final grade I need?", answer: "Enter your completed module grades and their credit values into the calculator. Then enable the target grade feature, set your desired overall percentage (e.g., 70% for a First), and enter your remaining credits. The calculator will tell you the exact average you need across those remaining credits." },
 { question: "What if the required grade is over 100%?", answer: "If the calculator shows you need more than 100% on your remaining modules, your target is mathematically impossible to achieve with the credits you have left. You may need to adjust your target classification or check whether your university has borderline policies that could help." },
 { question: "Should I include Year 1 grades?", answer: "At most UK universities, Year 1 grades do not count toward your final degree classification. Only include Year 2 and Year 3 grades unless your university explicitly states that Year 1 contributes." },
 { question: "How do I account for year weightings?", answer: "If your university weights years differently (e.g., 33/67 for Year 2/Year 3), calculate each year separately. For example, if your Year 2 average is 62%, multiply by 0.33 to get Year 2's contribution (20.46%). Then calculate what Year 3 average you need for your target: (Target - 20.46) / 0.67." },
 { question: "What is the minimum grade I need to pass?", answer: "For UK undergraduate degrees, the minimum pass mark is typically 40%. For postgraduate degrees, it is usually 50%. However, some modules or programmes have higher pass thresholds, and you may need to pass all modules to progress or graduate." },
 { question: "Can this calculator account for resit caps?", answer: "If you have resit marks that were capped (usually at 40%), enter the capped mark rather than your original resit score. The capped mark is what counts toward your classification." },
];

const relatedLinks = [
 { title: "University Grade Calculator", href: "/", description: "Calculate your overall degree classification from all module grades." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Break down individual module grades from assessment components." },
 { title: "Weighted Grade Calculator", href: "/weighted-grade-calculator/", description: "Apply credit and year weightings to your calculation." },
 { title: "Degree Classification Calculator", href: "/degree-classification-calculator/", description: "Check which classification band your average falls into." },
];

export default function FinalGradeCalculatorPage() {
 const toolSchema = generateToolSchema("Final Grade Calculator UK", "Calculate what grades you need on remaining modules to achieve your target degree classification.", "https://unigradecalculator.co.uk/final-grade-calculator/");
 
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />

 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "Final Grade Calculator" }]} />

 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 Final Grade Calculator
 </h1>
 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
 Find out exactly what you need on your remaining modules or exams. Enter your completed grades, set your target, and let the calculator do the maths.
 </p>
 </div>

 <GradeCalculator type="undergraduate" showTarget={true} showCredits={true} />

 <div className="prose-custom mt-12">
 <h2>How to Use the Final Grade Calculator</h2>
 <p>
 This calculator answers the question every student asks at some point: &quot;What do I need to get on my remaining modules to achieve my target classification?&quot; Here is how to use it effectively. If you want to calculate your current overall average first, start with the <Link href="/">university grade calculator</Link>.
 </p>
 <ol>
 <li><strong>Enter your completed modules.</strong> Add every module you have received a mark for, including their percentage grade and credit value.</li>
 <li><strong>Enable the target grade feature.</strong> Tick the checkbox labelled &quot;Calculate what I need on remaining modules.&quot;</li>
 <li><strong>Set your target percentage.</strong> For a First, enter 70. For a 2:1, enter 60. You can also enter borderline values like 68 or 69 if your university has borderline upgrade policies.</li>
 <li><strong>Enter your remaining credits.</strong> This is the total credit value of all modules you have not yet completed. A typical year has 120 credits, so if you have completed 60 credits, enter 60 for remaining.</li>
 <li><strong>Read the result.</strong> The calculator tells you the average percentage you need across your remaining credits to achieve your target.</li>
 </ol>

 <h2>Worked Example: Can I Still Get a First?</h2>
 <p>
 Let us say you are a third-year student at a university that uses 33/67 year weighting. Your Year 2 average was 65% and you have completed 60 credits of Year 3 with an average of 68%. You have 60 credits remaining (including your dissertation). Can you get a First?
 </p>
 <p><strong>Step 1: Calculate Year 2 contribution</strong></p>
 <p>Year 2: 65% x 0.33 = 21.45</p>
 <p><strong>Step 2: Calculate what your Year 3 average needs to be</strong></p>
 <p>For an overall 70%: (70 - 21.45) / 0.67 = 72.46%</p>
 <p><strong>Step 3: Work out what you need on remaining Year 3 modules</strong></p>
 <p>You have 60 credits at 68% and need 72.46% overall for Year 3:</p>
 <p>(72.46 x 120 - 68 x 60) / 60 = (8,695 - 4,080) / 60 = 76.9%</p>
 <p>
 <strong>Answer:</strong> You need an average of 76.9% across your remaining 60 credits (including your dissertation) to achieve a First. That is challenging but achievable, especially if your dissertation is strong.
 </p>

 <h2>What Grade Do I Need? How to Find Out</h2>
 <p>
 To answer &quot;what grade do I need?&quot;, the target grade calculator starts with your completed credit-weighted marks, your target percentage, and the credits still available. The calculation is: <strong>(target percentage × total credits − points already earned) ÷ remaining credits</strong>. Your points already earned are the sum of each completed module mark multiplied by its credits.
 </p>
 <p>
 As a quick example, if 60 completed credits average 64%, you have 60 credits left, and you want a 68% final-year average, you need (68 × 120 − 64 × 60) ÷ 60 = 72%. The required grade changes immediately as new marks arrive, so recalculate after every result rather than guessing.
 </p>

 <h2>Target Grade Calculator: Planning Your Study Strategy</h2>
 <p>
 A target grade calculator is most useful when it helps you make a realistic study plan. Separate the remaining credits by module value, note which assessments are exams, coursework, or a dissertation, then prioritise high-credit work. A 5% improvement on a 40-credit module contributes as much as a 10% improvement on a 20-credit module.
 </p>
 <table>
 <thead><tr><th>Where you are now</th><th>What to calculate</th><th>Practical next step</th></tr></thead>
 <tbody>
 <tr><td>Mid-Year 2</td><td>Your likely Year 2 average and the Year 3 average needed</td><td>Use feedback now to improve before final-year weighting applies</td></tr>
 <tr><td>Start of Year 3</td><td>Target mark for each semester&apos;s credits</td><td>Set module targets based on assessment type and credit value</td></tr>
 <tr><td>Before a dissertation</td><td>How the 40- or 60-credit mark changes your classification</td><td>Protect time for proposal, supervision, drafting, and revision</td></tr>
 </tbody>
 </table>

 <h2>Calculate Final Grade With Year Weightings</h2>
 <p>
 Many students need to calculate final grade results across more than one year. With a 33/67 split, the formula is <strong>(Year 2 average × 0.33) + (Year 3 average × 0.67)</strong>. For example, a 63% Year 2 average and 69% Year 3 average gives (63 × 0.33) + (69 × 0.67) = 67.02%, typically a high 2:1. Confirm your course&apos;s rules because some programmes use different splits, the best 100 credits, or special dissertation conditions.
 </p>

 <h2>What If My Target Is Unreachable?</h2>
 <p>
 If the calculator shows you need more than 100% on your remaining modules, your target classification is mathematically impossible with the credits you have left. Do not panic. Here are your options:
 </p>
 <ul>
 <li><strong>Check borderline policies.</strong> If you are within 2% of a boundary, your university&apos;s borderline rules may still upgrade you. Many universities look at the proportion of credits in the higher band rather than just the overall average.</li>
 <li><strong>Adjust your target.</strong> If a First is unreachable, focus on securing a strong 2:1 (65%+). A 2:1 from a good university with strong extracurricular activities is still highly competitive.</li>
 <li><strong>Focus on the modules that matter most.</strong> Prioritise high-credit modules like dissertations, which have the greatest impact on your overall average.</li>
 <li><strong>Consider extenuating circumstances.</strong> If external factors affected your earlier grades, speak to your university about whether any adjustments can be made.</li>
 </ul>

 <h2>Strategic Grade Planning by Year</h2>
 <p>
 Understanding how your grades build over time helps you set realistic targets and allocate effort wisely:
 </p>
 <h3>If You Are in Year 2</h3>
 <p>
 Year 2 typically counts for only 33% of your final classification. This means even a moderate Year 2 performance can be overcome by a strong Year 3. If you are averaging 55% in Year 2, you would need approximately 77.5% in Year 3 (with 33/67 weighting) to achieve a First overall. That is difficult but not impossible, especially with improved study habits and more engagement with your subject.
 </p>
 <h3>If You Are in Year 3</h3>
 <p>
 Year 3 is where your classification is largely determined. With 67% weighting on Year 3, every percentage point matters. A 1% improvement in your Year 3 average translates to a 0.67% improvement in your overall average. Use our <Link href="/weighted-grade-calculator/">weighted grade calculator</Link> to model year-weighted scenarios. This is why consistent performance across all final-year modules is crucial.
 </p>

 <h2>How Remaining Credits Affect Your Target</h2>
 <p>
 The fewer credits you have remaining, the harder it becomes to shift your average. Here is how the maths works:
 </p>
 <table>
 <thead><tr><th>Credits Remaining</th><th>Flexibility</th><th>Strategy</th></tr></thead>
 <tbody>
 <tr><td>100+</td><td>High</td><td>Plenty of room to improve. Focus on building good habits across all remaining modules.</td></tr>
 <tr><td>60-80</td><td>Moderate</td><td>Each module matters. Prioritise high-credit assessments and use the target calculator frequently.</td></tr>
 <tr><td>20-40</td><td>Low</td><td>Limited room to manoeuvre. Focus entirely on maximising these remaining marks. Seek every available point.</td></tr>
 </tbody>
 </table>

 <h2>Tips for Hitting Your Target Grade</h2>
 <ol>
 <li><strong>Prioritise by credit value.</strong> A 60-credit dissertation has three times the impact of a 20-credit module. Invest your time accordingly.</li>
 <li><strong>Identify your weakest assessment types.</strong> If you consistently lose marks in exams, invest in exam technique. If coursework is your weakness, start earlier and seek more feedback.</li>
 <li><strong>Use feedback from previous modules.</strong> Marker feedback tells you exactly where you lost marks and how to recover them. This is the most underused resource in higher education.</li>
 <li><strong>Attend all lectures and seminars.</strong> Regular attendance keeps you connected to assessment guidance, examples, and opportunities to ask questions. For more on how marks are confirmed, read <Link href="/blog/how-university-grading-works-uk/">how university grading works</Link>.</li>
 <li><strong>Set interim targets.</strong> Rather than focusing only on the end-of-year target, set a target for each module and track your progress after each assessment.</li>
 </ol>
 <h2>University Final Grade Calculator: What to Enter</h2>
 <p>
 Whether you searched for a university final grade calculator, final uni grade calculator, grade calculator final, or target grade calculator, the inputs are the same: completed marks, the credits those marks represent, credits still available, and the overall percentage you want to reach.
 </p>
 <p>
 Update the calculation each time a result is confirmed. For a target that applies across differently weighted academic years, calculate the relevant year average first and use your published course weighting before making decisions about remaining assessments.
 </p>
 </div>

 <FAQ items={faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 </>
 );
}
