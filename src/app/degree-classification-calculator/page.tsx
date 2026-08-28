import type { Metadata } from "next";
import Link from "next/link";
import GradeCalculator from "@/components/GradeCalculator";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import ClassificationTable from "@/components/ClassificationTable";
import Breadcrumb from "@/components/Breadcrumb";
import { degreeClassifications } from "@/lib/grades";
import { generateSEO, generateToolSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "Degree Classification Calculator UK - Uni Grade Boundaries & Results",
 description:
 "Free degree classification calculator for UK university students. Check uni grade boundaries, enter your module grades and find your degree results: First, 2:1, 2:2, or Third. Includes borderline policies, HESA statistics, and year weightings.",
 path: "/degree-classification-calculator/",
});

const faqs = [
 { question: "What is a degree classification?", answer: "A degree classification is the grading system used for UK undergraduate degrees. It categorises your academic achievement into bands: First Class Honours (1st) at 70%+, Upper Second Class (2:1) at 60-69%, Lower Second Class (2:2) at 50-59%, Third Class (3rd) at 40-49%, and Fail below 40%. Your classification appears on your degree certificate and transcript." },
 { question: "How is degree classification decided?", answer: "Degree classification is determined by calculating the credit-weighted average of your module marks, usually from Year 2 and Year 3 only. Year 3 is typically weighted more heavily (e.g., 67%) than Year 2 (33%). Some universities also apply borderline rules that may upgrade your classification if you are close to a boundary." },
 { question: "What percentage of students get a First?", answer: "According to HESA data for the 2022/23 academic year, approximately 32% of UK graduates achieved a First Class degree, up from around 16% a decade earlier. About 44% achieved a 2:1, 18% a 2:2, and 6% a Third or below." },
 { question: "Does my degree classification matter for employers?", answer: "Yes, particularly for graduate schemes and competitive roles. Most large employers and graduate programmes require a minimum of a 2:1. Some sectors (consulting, investment banking, law) strongly prefer or require a First. However, many roles value experience, skills, and personality alongside academic grades." },
 { question: "What happens if I am on a borderline?", answer: "If your average falls within 1-2% of a classification boundary (e.g., 68-69% near the First/2:1 border), many universities apply borderline policies. These may include: checking if 50%+ of your credits fall in the higher band, a preponderance calculation, or discretionary upgrade by the exam board." },
 { question: "Can I improve my degree classification after graduating?", answer: "No. Once your degree is awarded, your classification is final. Some universities allow you to top up an Ordinary degree to Honours, but you cannot change the classification of an existing Honours degree. This is why tracking your grades throughout your studies is important." },
];

const relatedLinks = [
 { title: "University Grade Calculator", href: "/", description: "Full-featured calculator with target grade and credit weighting support." },
 { title: "Final Grade Calculator", href: "/final-grade-calculator/", description: "Calculate what you need on remaining modules to reach your target classification." },
 { title: "Weighted Grade Calculator", href: "/weighted-grade-calculator/", description: "Apply custom year and module weightings to your grade calculation." },
 { title: "UK Degree Classifications Explained", href: "/blog/uk-degree-classifications-explained/", description: "Complete guide to what each classification means." },
];

export default function DegreeClassificationCalculatorPage() {
 const toolSchema = generateToolSchema("Degree Classification Calculator UK", "Free tool to determine your UK degree classification from module grades.", "https://unigradecalculator.co.uk/degree-classification-calculator/");
 
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />

 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "Degree Classification Calculator" }]} />

 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 Degree Classification Calculator
 </h1>
 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
 Check your UK degree classification by entering your module grades. See instantly whether your degree grades put you on track for a First, 2:1, 2:2, or Third class honours degree, with full uni grade boundaries and borderline rules explained.
 </p>
 </div>

 <GradeCalculator type="undergraduate" showTarget={true} showCredits={true} />

 <ClassificationTable classifications={degreeClassifications} />

 <div className="prose-custom mt-12">
 <h2>How Degree Classification Is Determined</h2>
 <p>
 Your UK degree classification is the culmination of your academic performance across your entire degree programme. It is the grade that appears on your degree certificate and the one employers, postgraduate admissions teams, and professional bodies use to assess your academic achievement.
 </p>
 <p>
 The process for determining your classification involves several steps, and understanding each one helps you plan your study strategy effectively. For the full explanation, see our guide on <Link href="/blog/how-university-grading-works-uk/">how university grading works in the UK</Link>.
 </p>

 <h3>Step 1: Module Marks Are Recorded</h3>
 <p>
 Every assessed module generates a percentage mark. This mark may come from a combination of coursework, exams, presentations, and practical work. Each module also has a credit value, typically 20 credits for a standard module or 40-60 credits for a dissertation.
 </p>

 <h3>Step 2: Credit-Weighted Average Is Calculated</h3>
 <p>
 Your module marks are combined using a credit-weighted formula. This means a 40-credit dissertation has twice the influence of a 20-credit module. The formula multiplies each mark by its credit value, sums the products, and divides by total credits.
 </p>

 <h3>Step 3: Year Weightings Are Applied</h3>
 <p>
 Most universities weight your final year more heavily. The most common split is 33% for Year 2 and 67% for Year 3. First-year marks typically do not count toward classification. This means a strong final year can compensate for a weaker second year.
 </p>

 <h3>Step 4: Borderline Rules Are Checked</h3>
 <p>
 If your average falls close to a classification boundary, the university&apos;s exam board applies borderline policies. These vary by institution but may upgrade your classification if enough of your credits fall in the higher band.
 </p>

 <h2>Degree Classification Statistics in the UK</h2>
 <p>
 Understanding how degree classifications are distributed nationally provides useful context for your own performance. According to HESA (Higher Education Statistics Agency) data:
 </p>
 <table>
 <thead><tr><th>Classification</th><th>2022/23</th><th>2018/19</th><th>2013/14</th></tr></thead>
 <tbody>
 <tr><td>First</td><td>32%</td><td>28%</td><td>22%</td></tr>
 <tr><td>2:1</td><td>44%</td><td>47%</td><td>49%</td></tr>
 <tr><td>2:2</td><td>18%</td><td>19%</td><td>22%</td></tr>
 <tr><td>Third/Pass</td><td>6%</td><td>6%</td><td>7%</td></tr>
 </tbody>
 </table>
 <p>
 The proportion of Firsts has increased significantly over the past decade, a trend that has generated debate about grade inflation in UK higher education. However, universities point to improved teaching, better learning resources, and more continuous assessment as contributing factors.
 </p>

 <h2>UK Uni Grade Boundaries Explained</h2>
 <p>
 Uni grade boundaries are the percentage thresholds that separate one honours degree classification from another. These classification boundaries are standardised across most UK universities, though borderline policies vary by institution. Here are the standard uni grade boundaries used by the majority of UK higher education providers:
 </p>
 <table>
 <thead><tr><th>Boundary</th><th>Percentage Threshold</th><th>Classification Below</th><th>Classification Above</th></tr></thead>
 <tbody>
 <tr><td>First / 2:1 boundary</td><td>70%</td><td>Upper Second (2:1)</td><td>First Class Honours</td></tr>
 <tr><td>2:1 / 2:2 boundary</td><td>60%</td><td>Lower Second (2:2)</td><td>Upper Second (2:1)</td></tr>
 <tr><td>2:2 / Third boundary</td><td>50%</td><td>Third Class</td><td>Lower Second (2:2)</td></tr>
 <tr><td>Third / Fail boundary</td><td>40%</td><td>Fail</td><td>Third Class Honours</td></tr>
 </tbody>
 </table>
 <p>
 These classification boundaries apply to your overall credit-weighted average, not to individual module marks. You can score below 70% on some modules and still achieve a First overall, as long as your weighted average reaches the boundary. Use the degree classification calculator above to check exactly where your grades place you relative to these uni grade boundaries.
 </p>
 <p>
 Some universities use slightly different boundaries for specific programmes. For example, certain professional degrees may require a higher pass mark, and Scottish universities operating under the SCQF framework may apply different credit structures (though the percentage boundaries for honours classifications remain the same). Always verify your programme-specific boundaries in your academic regulations.
 </p>

 <h2>Degree Classification by Subject Area</h2>
 <p>
 Your degree grades do not exist in a vacuum. The distribution of degree results varies significantly across subject areas, which means a 65% in one discipline may represent a stronger relative performance than a 65% in another. Here is how honours degree classifications break down by broad subject group, based on HESA data:
 </p>
 <table>
 <thead><tr><th>Subject Area</th><th>First (%)</th><th>2:1 (%)</th><th>2:2 (%)</th><th>Third/Pass (%)</th></tr></thead>
 <tbody>
 <tr><td>Mathematics</td><td>42%</td><td>32%</td><td>18%</td><td>8%</td></tr>
 <tr><td>Economics</td><td>35%</td><td>42%</td><td>18%</td><td>5%</td></tr>
 <tr><td>Biological Sciences</td><td>34%</td><td>44%</td><td>17%</td><td>5%</td></tr>
 <tr><td>English</td><td>30%</td><td>48%</td><td>18%</td><td>4%</td></tr>
 <tr><td>History</td><td>29%</td><td>49%</td><td>18%</td><td>4%</td></tr>
 <tr><td>Engineering</td><td>28%</td><td>43%</td><td>22%</td><td>7%</td></tr>
 <tr><td>Law</td><td>25%</td><td>47%</td><td>22%</td><td>6%</td></tr>
 <tr><td>Psychology</td><td>28%</td><td>46%</td><td>20%</td><td>6%</td></tr>
 <tr><td>Creative Arts</td><td>26%</td><td>44%</td><td>23%</td><td>7%</td></tr>
 <tr><td>Business Studies</td><td>24%</td><td>45%</td><td>24%</td><td>7%</td></tr>
 <tr><td>Computer Science</td><td>30%</td><td>38%</td><td>22%</td><td>10%</td></tr>
 </tbody>
 </table>
 <p>
 Mathematics consistently produces the highest proportion of Firsts, partly because quantitative assessments allow for objectively correct answers that can score very high marks. Arts and humanities subjects tend to have a tighter marking range, with fewer Firsts but also fewer Thirds. If you are comparing your degree results with friends in different subjects, keep these differences in mind.
 </p>

 <h2>Degree Grades Quick Reference</h2>
 <p>
 Here is a quick-reference summary of how degree grades work in the UK honours degree classifications system:
 </p>
 <ul>
 <li><strong>First Class Honours (1st):</strong> 70%+ overall. The highest honours degree classification. Around 32% of graduates achieve this.</li>
 <li><strong>Upper Second Class (2:1):</strong> 60-69% overall. The most common degree result, achieved by approximately 44% of graduates. Required by most graduate employers.</li>
 <li><strong>Lower Second Class (2:2):</strong> 50-59% overall. A solid result that opens doors to many careers. Around 18% of graduates.</li>
 <li><strong>Third Class Honours (3rd):</strong> 40-49% overall. The minimum for an honours degree. About 5-6% of graduates.</li>
 <li><strong>Ordinary Degree / Pass:</strong> Some universities award an ordinary (unclassified) degree to students who pass but do not meet honours requirements.</li>
 <li><strong>Fail:</strong> Below 40% overall. No degree awarded.</li>
 </ul>
 <p>
 Your degree classification is determined by your credit-weighted average across relevant years (usually Year 2 and Year 3). Use our <Link href="/weighted-grade-calculator/">weighted grade calculator</Link> to apply year weightings, or our <Link href="/percentage-grade-calculator/">percentage grade calculator</Link> to convert raw marks first.
 </p>

 <h2>How Employers Use Degree Classifications</h2>
 <p>
 Your degree classification is one of the key criteria employers use during recruitment, particularly for graduate-level positions. Here is how different sectors typically view classifications:
 </p>
 <ul>
 <li><strong>Investment banking, consulting, law (top firms):</strong> Often require a First or strong 2:1 (65%+). Some firms have specific minimum grade requirements that filter applications automatically.</li>
 <li><strong>Civil service fast stream:</strong> Requires a minimum 2:2, but the assessment process is highly competitive and most successful candidates have a 2:1 or First.</li>
 <li><strong>Technology and startups:</strong> Increasingly focus on skills and portfolio over classification. A 2:2 with strong practical skills can be competitive.</li>
 <li><strong>Teaching (PGCE):</strong> Requires a minimum 2:2 (or equivalent) for most subjects. Some subjects accept Thirds in combination with relevant experience.</li>
 <li><strong>Postgraduate study:</strong> Most masters programmes require a 2:1 minimum. PhD programmes typically require a First or high 2:1 plus a masters Distinction.</li>
 </ul>

 <h2>Borderline Classification Policies Explained</h2>
 <p>
 If your credit-weighted average falls within 2% of a classification boundary (for example, 68-69.9% near the First/2:1 border), your university&apos;s exam board will apply its borderline policy. Common approaches include:
 </p>
 <ol>
 <li><strong>Module profile method:</strong> If 50% or more of your final-year credits fall in the higher classification band, you are upgraded. For example, if you average 68.5% overall but 60 out of 120 final-year credits scored 70%+, you may receive a First.</li>
 <li><strong>Best modules method:</strong> Some universities calculate your average using only your best-performing modules (e.g., the best 100 out of 120 credits). If this gives a higher classification, they use it.</li>
 <li><strong>Discretionary upgrade:</strong> The exam board reviews borderline cases individually. They consider factors like your grade trajectory (improving over time), any extenuating circumstances, and the distribution of your marks.</li>
 </ol>
 <p>
 These policies exist because a student averaging 69.8% has demonstrated very similar academic ability to one averaging 70.2%, even though they fall on different sides of a classification boundary. Always check your university&apos;s specific borderline policy in their academic regulations.
 </p>

 <h2>Practical Tips for Tracking Your Classification</h2>
 <ul>
 <li><strong>Update your calculation after every module result.</strong> Do not wait until the end of the year. Regular tracking lets you identify problems early. Use our <Link href="/">university grade calculator</Link> after every result to adjust your strategy.</li>
 <li><strong>Focus on modules where you have the most room for improvement.</strong> If you consistently score 72-75% in some modules and 58-62% in others, the lower-scoring modules offer more potential for grade improvement.</li>
 <li><strong>Plan your final year strategically.</strong> If your Year 2 average is 62% and your university uses 33/67 weighting, you would need a 72.5% Year 3 average to reach an overall 69%. Use our <Link href="/final-grade-calculator/">final grade calculator</Link> to run these scenarios.</li>
 <li><strong>Know your borderline policy.</strong> If you are near a boundary, understanding your university&apos;s borderline rules could make the difference. Some policies reward strong performance in specific areas rather than just the overall average.</li>
 </ul>
 <h2>How to Calculate Degree Classification</h2>
 <p>
 A degree classification calculator is useful once you have the right average. Students also search for a degree calculator, uni classification calculator, UK degree classification, or degree grades. The terminology varies, but your final result normally depends on the credit-weighted marks and the classification rules in your programme regulations.
 </p>
 <p>
 For a reliable estimate, calculate each module first, include only the levels and credits your course counts, and then compare the result with the relevant uni grade boundaries. If your result is close to a boundary, your university&apos;s exam board applies the official borderline policy.
 </p>
 </div>

 <FAQ items={faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 </>
 );
}
