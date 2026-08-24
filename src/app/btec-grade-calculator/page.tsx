import type { Metadata } from "next";
import GradeCalculator from "@/components/GradeCalculator";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import ClassificationTable from "@/components/ClassificationTable";
import Breadcrumb from "@/components/Breadcrumb";
import { btecClassifications } from "@/lib/grades";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "BTEC Grade Calculator - Calculate BTEC Distinction, Merit & Pass",
 description:
 "Free BTEC grade calculator. Calculate your BTEC National, Extended Diploma, or Foundation Diploma grades instantly. Supports Distinction*, Distinction, Merit, and Pass boundaries.",
 path: "/btec-grade-calculator/",
});

const faqs = [
 { question: "How are BTEC grades calculated?", answer: "BTEC grades are calculated by averaging your unit marks across all assessed units, weighted by their credit values. Each unit is graded Pass (P), Merit (M), Distinction (D), or Distinction* (D*), which translate to percentage equivalents. The overall average determines your final BTEC grade." },
 { question: "What are the BTEC grade boundaries?", answer: "BTEC grade boundaries are: Distinction* (D*) at 85%+, Distinction (D) at 70-84%, Merit (M) at 60-69%, Pass (P) at 40-59%, and Fail below 40%. These may vary slightly depending on the specific BTEC qualification and Pearson's assessment criteria." },
 { question: "What is the difference between BTEC and A-Levels?", answer: "BTECs are vocational qualifications focused on practical, work-related skills, while A-Levels are academic qualifications. BTECs are assessed mainly through coursework and practical assignments, whereas A-Levels rely heavily on exams. Both are accepted by UK universities, and BTEC grades convert to UCAS tariff points." },
 { question: "How do BTEC grades convert to UCAS points?", answer: "For a BTEC National Extended Diploma: D*D*D* = 168 UCAS points, DDD = 144, DDM = 128, DMM = 112, MMM = 96, MMP = 80, MPP = 64, PPP = 48. A Distinction* in a single BTEC National is worth 56 points, Distinction is 48, Merit is 32, and Pass is 16." },
 { question: "Can I get into university with a BTEC?", answer: "Yes. Most UK universities accept BTEC qualifications for entry. Many universities specify their requirements in BTEC grades (e.g., DDM or DMM) alongside or instead of A-Level grades. Russell Group universities increasingly accept BTECs, particularly for vocational and applied subjects." },
 { question: "What BTEC grade do I need for a First at university?", answer: "There is no direct correlation between BTEC grades and university degree classifications, as they are separate qualifications. However, the study skills and subject knowledge from a BTEC with Distinction grades generally prepares students well for achieving strong university grades." },
 { question: "How many units are in a BTEC?", answer: "The number varies by qualification level. A BTEC National Certificate has 4 units, a National Diploma has 8 units, and a National Extended Diploma has 13 units. Each unit has its own assessment criteria and credit value." },
];

const relatedLinks = [
 { title: "University Grade Calculator", href: "/", description: "Calculate your degree classification once you start university." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Calculate individual module grades at university level." },
 { title: "UK Degree Classifications Explained", href: "/blog/uk-degree-classifications-explained/", description: "Understand the UK degree classification system in detail." },
 { title: "GPA Calculator UK", href: "/gpa-calculator/", description: "Convert your grades to GPA for international applications." },
];

export default function BTECGradeCalculatorPage() {
 const toolSchema = generateToolSchema("BTEC Grade Calculator", "Free calculator for BTEC National, Extended Diploma, and Foundation Diploma grades.", "https://uk-grade-calculator.vercel.app/btec-grade-calculator/");
 const faqSchema = generateFAQSchema(faqs);

 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "BTEC Grade Calculator" }]} />

 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 BTEC Grade Calculator
 </h1>
 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
 Calculate your BTEC grades instantly. Enter your unit marks to find out whether you are achieving a Distinction*, Distinction, Merit, or Pass overall.
 </p>
 </div>

 <GradeCalculator type="btec" showTarget={true} showCredits={true} defaultCredits="10" />

 <ClassificationTable classifications={btecClassifications} title="BTEC Grade Boundaries" />

 <div className="prose-custom mt-12">
 <h2>Understanding BTEC Qualifications</h2>
 <p>
 BTEC (Business and Technology Education Council) qualifications are vocational qualifications awarded by Pearson. They are designed to provide practical, work-related learning and are available in a wide range of subjects from business and IT to health and social care, sport, and engineering.
 </p>
 <p>
 BTECs are recognised by UK universities and employers as equivalent to A-Levels and other Level 3 qualifications. In 2023, over 250,000 students in England achieved BTEC qualifications, making them one of the most popular alternatives to traditional A-Levels.
 </p>

 <h2>BTEC Qualification Sizes and Structure</h2>
 <p>BTEC National qualifications come in several sizes, each equivalent to a different number of A-Levels:</p>
 <table>
 <thead><tr><th>BTEC Qualification</th><th>Guided Learning Hours</th><th>A-Level Equivalent</th><th>Units</th></tr></thead>
 <tbody>
 <tr><td>National Certificate</td><td>360</td><td>1 A-Level</td><td>4</td></tr>
 <tr><td>National Diploma</td><td>720</td><td>2 A-Levels</td><td>8</td></tr>
 <tr><td>National Extended Diploma</td><td>1080</td><td>3 A-Levels</td><td>13</td></tr>
 </tbody>
 </table>

 <h2>How BTEC Grading Works</h2>
 <p>
 BTEC grading differs from traditional exam-based qualifications. Each unit within a BTEC is assessed against specific learning aims and assessment criteria. There are three pass grades for each unit:
 </p>
 <ul>
 <li><strong>Pass (P):</strong> You have met the basic learning outcomes. You can describe, identify, and outline key concepts.</li>
 <li><strong>Merit (M):</strong> You have demonstrated a deeper understanding. You can explain, analyse, and compare concepts.</li>
 <li><strong>Distinction (D):</strong> You have shown exceptional understanding. You can evaluate, justify, and make recommendations with detailed analysis.</li>
 </ul>
 <p>
 Your overall BTEC grade is determined by combining your unit grades according to a points system. Internal units are assessed by your teachers and moderated by Pearson, while external units are set and marked by Pearson directly.
 </p>

 <h2>BTEC to UCAS Tariff Points Conversion</h2>
 <p>
 UCAS tariff points allow universities to compare different qualifications fairly. Here is how BTEC Extended Diploma grades convert:
 </p>
 <table>
 <thead><tr><th>Extended Diploma Grade</th><th>UCAS Points</th><th>A-Level Equivalent</th></tr></thead>
 <tbody>
 <tr><td>D*D*D*</td><td>168</td><td>A*A*A*</td></tr>
 <tr><td>D*D*D</td><td>160</td><td>A*A*A</td></tr>
 <tr><td>D*DD</td><td>152</td><td>A*AA</td></tr>
 <tr><td>DDD</td><td>144</td><td>AAA</td></tr>
 <tr><td>DDM</td><td>128</td><td>AAB</td></tr>
 <tr><td>DMM</td><td>112</td><td>ABB</td></tr>
 <tr><td>MMM</td><td>96</td><td>BBB</td></tr>
 <tr><td>MMP</td><td>80</td><td>BCC</td></tr>
 <tr><td>MPP</td><td>64</td><td>CDD</td></tr>
 <tr><td>PPP</td><td>48</td><td>DDD</td></tr>
 </tbody>
 </table>

 <h2>Tips for Achieving Higher BTEC Grades</h2>
 <ol>
 <li><strong>Understand the grading criteria.</strong> Each unit has specific Pass, Merit, and Distinction criteria published in the unit specification. Read these before starting your assignments to know exactly what is expected at each level.</li>
 <li><strong>Go beyond description.</strong> The biggest difference between Pass and Distinction work is depth. Pass-level work describes; Merit-level work explains and analyses; Distinction-level work evaluates, justifies, and makes informed recommendations.</li>
 <li><strong>Use real-world examples.</strong> BTEC assessments reward practical application. Link your work to real businesses, organisations, or case studies to demonstrate understanding.</li>
 <li><strong>Reference your sources.</strong> Even though BTECs are vocational, proper referencing shows academic rigour and can lift your work from Merit to Distinction territory.</li>
 <li><strong>Do not leave assignments to the last minute.</strong> Unlike exams, BTEC assignments can be revised and resubmitted. Use this to your advantage by submitting drafts early and incorporating feedback.</li>
 </ol>

 <h2>Common Mistakes in BTEC Assessments</h2>
 <ul>
 <li><strong>Only meeting Pass criteria.</strong> Many students stop once they have met the Pass requirements. To achieve Merit or Distinction, you must explicitly address the M and D criteria in your work.</li>
 <li><strong>Ignoring external unit preparation.</strong> External units are exam-based and cannot be resubmitted. Treat these with the same seriousness as A-Level exams.</li>
 <li><strong>Not checking the command verbs.</strong> Each criterion uses specific command verbs (describe, explain, evaluate, justify). Your answer must match the verb used.</li>
 <li><strong>Submitting late without an extension.</strong> Late submissions may be capped or rejected. If you need more time, request an extension before the deadline.</li>
 </ul>
 </div>

 <FAQ items={faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 </>
 );
}
