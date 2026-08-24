import type { Metadata } from "next";
import GradeCalculator from "@/components/GradeCalculator";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import ClassificationTable from "@/components/ClassificationTable";
import Breadcrumb from "@/components/Breadcrumb";
import { mastersClassifications } from "@/lib/grades";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "Masters Grade Calculator UK - Distinction, Merit & Pass Calculator",
 description:
 "Free masters degree grade calculator for UK postgraduate students. Calculate whether you are on track for a Distinction, Merit, or Pass. Supports MA, MSc, MBA, and other postgraduate degrees.",
 path: "/masters-grade-calculator/",
});

const faqs = [
 { question: "What are the masters degree grade boundaries in the UK?", answer: "UK masters degrees are classified as: Distinction at 70% and above, Merit at 60-69%, Pass at 50-59%, and Fail below 50%. Note that the pass mark for postgraduate degrees (50%) is higher than for undergraduate degrees (40%)." },
 { question: "Is a Distinction in a masters equivalent to a First?", answer: "A Distinction is the highest classification for a masters degree, similar to a First at undergraduate level. Both require an average of 70% or above. However, achieving 70% at postgraduate level is considered more challenging due to higher academic expectations." },
 { question: "How is a masters degree graded in the UK?", answer: "Masters degrees are graded using a credit-weighted average of all taught module marks and the dissertation. The dissertation typically carries 60 credits out of 180 total (one-third of the degree). Some universities weight the dissertation more heavily or separately." },
 { question: "How important is the dissertation for masters classification?", answer: "The dissertation is crucial. At 60 credits (one-third of a 180-credit masters), it has a major impact on your overall average. Some universities require a minimum dissertation mark of 50% to pass the degree, regardless of your taught module performance." },
 { question: "Can I still get a Distinction if I have some Merit-level modules?", answer: "Yes. Your classification is based on the overall credit-weighted average, not individual module grades. You can have some modules at Merit level and still achieve a Distinction overall, as long as your average reaches 70%. Use the calculator to check your exact position." },
 { question: "What is the pass mark for a masters degree?", answer: "The pass mark for UK masters degrees is typically 50%, compared to 40% for undergraduate degrees. This reflects the higher academic expectations at postgraduate level. Some professional masters programmes may have different pass marks." },
];

const relatedLinks = [
 { title: "University Grade Calculator", href: "/", description: "Calculate undergraduate degree classifications with the same credit-weighted method." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Calculate individual module marks from assessment components." },
 { title: "Weighted Grade Calculator", href: "/weighted-grade-calculator/", description: "Work out weighted averages with custom module weightings." },
 { title: "UK Degree Classifications Explained", href: "/blog/uk-degree-classifications-explained/", description: "Comprehensive guide to the UK classification system." },
];

export default function MastersGradeCalculatorPage() {
 const toolSchema = generateToolSchema("Masters Grade Calculator UK", "Free calculator for UK postgraduate students to determine masters degree classification.", "https://uk-grade-calculator.vercel.app/masters-grade-calculator/");
 const faqSchema = generateFAQSchema(faqs);

 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "Masters Grade Calculator" }]} />

 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 Masters Grade Calculator
 </h1>
 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
 Calculate your postgraduate degree classification instantly. Enter your taught module grades and dissertation mark to find out if you are on track for a Distinction, Merit, or Pass.
 </p>
 </div>

 <GradeCalculator type="masters" showTarget={true} showCredits={true} defaultCredits="20" />

 <ClassificationTable classifications={mastersClassifications} title="Masters Degree Classification Boundaries" />

 <div className="prose-custom mt-12">
 <h2>How Masters Degree Classification Works in the UK</h2>
 <p>
 UK masters degrees use a three-tier classification system: Distinction, Merit, and Pass. This is different from the four-tier undergraduate system (First, 2:1, 2:2, Third). The pass threshold is also higher at 50% compared to 40% for undergraduate degrees, reflecting the greater academic demands of postgraduate study.
 </p>
 <p>
 Your masters classification is determined by the credit-weighted average of all assessed components, including taught modules and your dissertation or major project. The standard structure for a taught masters degree is 180 credits over one year (full-time) or two years (part-time), broken down as:
 </p>
 <ul>
 <li><strong>Taught modules:</strong> 120 credits (typically six 20-credit modules)</li>
 <li><strong>Dissertation or major project:</strong> 60 credits</li>
 </ul>

 <h2>Understanding the Distinction Standard</h2>
 <p>
 A Distinction at masters level requires an overall average of 70% or above. This is the same percentage threshold as a First at undergraduate level, but achieving it is considerably harder at postgraduate level because:
 </p>
 <ul>
 <li>Marking standards are higher. Work that would receive a First at undergraduate level may only receive a Merit at masters level.</li>
 <li>The depth of analysis expected is significantly greater. You are expected to engage critically with primary sources and current research.</li>
 <li>The dissertation carries a heavy weighting and requires independent, original research.</li>
 <li>There is less time to recover from poor performance, with only one year of study.</li>
 </ul>
 <p>
 According to HESA data, approximately 65% of masters graduates achieve a Distinction or Merit, with around 30-35% achieving a Distinction in most subject areas.
 </p>

 <h2>The Role of the Dissertation in Masters Classification</h2>
 <p>
 The 60-credit dissertation represents one-third of your total masters credits. This means it has a substantial impact on your overall classification. Here is an example:
 </p>
 <table>
 <thead><tr><th>Component</th><th>Grade</th><th>Credits</th><th>Weighted</th></tr></thead>
 <tbody>
 <tr><td>Module 1 (Research Methods)</td><td>72%</td><td>20</td><td>1,440</td></tr>
 <tr><td>Module 2 (Core Theory)</td><td>68%</td><td>20</td><td>1,360</td></tr>
 <tr><td>Module 3 (Applied Practice)</td><td>74%</td><td>20</td><td>1,480</td></tr>
 <tr><td>Module 4 (Specialist Option)</td><td>65%</td><td>20</td><td>1,300</td></tr>
 <tr><td>Module 5 (Professional Skills)</td><td>70%</td><td>20</td><td>1,400</td></tr>
 <tr><td>Module 6 (Advanced Topics)</td><td>67%</td><td>20</td><td>1,340</td></tr>
 <tr><td>Dissertation</td><td>75%</td><td>60</td><td>4,500</td></tr>
 </tbody>
 </table>
 <p>Total: 12,820 / 180 = <strong>71.2%</strong> = Distinction</p>
 <p>
 If the dissertation had been 65% instead of 75%, the overall would drop to (12,820 - 4,500 + 3,900) / 180 = 67.9%, which is a Merit. This ten-percentage-point difference on the dissertation swings the entire classification.
 </p>

 <h2>Key Differences Between Masters and Undergraduate Grading</h2>
 <table>
 <thead><tr><th>Feature</th><th>Undergraduate</th><th>Masters</th></tr></thead>
 <tbody>
 <tr><td>Pass mark</td><td>40%</td><td>50%</td></tr>
 <tr><td>Highest classification</td><td>First (70%+)</td><td>Distinction (70%+)</td></tr>
 <tr><td>Classification tiers</td><td>4 (1st, 2:1, 2:2, 3rd)</td><td>3 (Dist, Merit, Pass)</td></tr>
 <tr><td>Total credits</td><td>360 (3 years)</td><td>180 (1 year)</td></tr>
 <tr><td>Dissertation weight</td><td>40-60 credits</td><td>60 credits (1/3 of degree)</td></tr>
 <tr><td>Year weightings</td><td>Yes (e.g. 33/67)</td><td>No (all counts equally)</td></tr>
 </tbody>
 </table>

 <h2>Strategies for Achieving a Distinction</h2>
 <ol>
 <li><strong>Start your dissertation early.</strong> The dissertation is worth 60 credits. Begin planning your research question during the taught modules phase, not after.</li>
 <li><strong>Target 70%+ on every module.</strong> With only 6 taught modules, each one counts. There is less room to average out poor performance than at undergraduate level.</li>
 <li><strong>Engage with your supervisor regularly.</strong> Your dissertation supervisor can guide you toward higher marks through regular feedback on drafts and research direction.</li>
 <li><strong>Read current research.</strong> Masters-level work is expected to engage with recent journal articles and primary sources, not just textbooks. Demonstrating awareness of current debates adds significant depth.</li>
 <li><strong>Use the calculator strategically.</strong> After your first semester results, enter them here to see where you stand and what you need on remaining modules.</li>
 </ol>

 <h2>Types of UK Masters Degrees</h2>
 <p>Different masters degrees have different structures, but the grading system remains consistent:</p>
 <ul>
 <li><strong>MA (Master of Arts):</strong> Arts, humanities, and social sciences. Usually 180 credits.</li>
 <li><strong>MSc (Master of Science):</strong> Sciences, technology, and quantitative subjects. Usually 180 credits.</li>
 <li><strong>MBA (Master of Business Administration):</strong> Business and management. May include work placement credits.</li>
 <li><strong>MRes (Master of Research):</strong> Research-focused, with a larger dissertation component (often 120 credits for research).</li>
 <li><strong>LLM (Master of Laws):</strong> Legal studies. Standard 180-credit structure.</li>
 </ul>
 </div>

 <FAQ items={faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 </>
 );
}
