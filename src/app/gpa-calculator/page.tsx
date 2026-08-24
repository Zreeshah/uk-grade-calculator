import type { Metadata } from "next";
import Link from "next/link";
import GradeCalculator from "@/components/GradeCalculator";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "GPA Calculator UK - Convert UK Grades to GPA Scale",
 description:
 "Free GPA calculator for UK students. Convert UK university percentage grades to GPA (Grade Point Average) scale. Essential for international applications, exchanges, and postgraduate study abroad.",
 path: "/gpa-calculator/",
});

const faqs = [
 { question: "How do I convert UK grades to GPA?", answer: "There is no official universal conversion, but the most widely accepted mapping is: First (70%+) = 4.0 GPA, Upper 2:1 (65-69%) = 3.7, Lower 2:1 (60-64%) = 3.3, Upper 2:2 (55-59%) = 3.0, Lower 2:2 (50-54%) = 2.7, Upper Third (45-49%) = 2.3, Lower Third (40-44%) = 2.0, Fail (below 40%) = 0.0." },
 { question: "What GPA is a 2:1 equivalent to?", answer: "A UK 2:1 (60-69%) is generally equivalent to a GPA of 3.3 to 3.7, depending on where within the 2:1 range your average falls. Most US universities consider a 3.3+ GPA as equivalent to a UK 2:1 for admissions purposes." },
 { question: "What GPA is a First equivalent to?", answer: "A UK First Class degree (70%+) is equivalent to a 4.0 GPA on the US scale. This is the highest GPA possible and corresponds to an A grade average. Note that 70% in the UK system is considered exceptional, equivalent to much higher percentages in other systems." },
 { question: "Do UK universities use GPA?", answer: "Most UK universities use the percentage and classification system (First, 2:1, 2:2, Third) rather than GPA. However, some UK universities have started adopting GPA alongside traditional classifications. The Higher Education Academy has proposed a standardised UK GPA scale, but adoption is not universal." },
 { question: "Why are UK percentage grades lower than in other countries?", answer: "UK universities rarely award marks above 80%, and marks above 90% are almost unheard of. This is because the UK marking scale reserves the upper ranges for truly exceptional work. A UK 70% is considered equivalent to an A or 4.0 GPA in the US system, even though 70% seems low by other countries' standards." },
 { question: "How do I convert GPA to UK grades for my application?", answer: "For converting a US GPA to UK equivalents: 4.0 GPA = First (70%+), 3.3-3.9 GPA = 2:1 (60-69%), 2.7-3.2 GPA = 2:2 (50-59%), 2.0-2.6 GPA = Third (40-49%), below 2.0 = Fail. Always check the specific institution's conversion table, as these can vary." },
];

const relatedLinks = [
 { title: "University Grade Calculator", href: "/", description: "Calculate your UK degree classification from module grades." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Calculate individual module percentage grades." },
 { title: "Degree Classification Calculator", href: "/degree-classification-calculator/", description: "Check which classification your average corresponds to." },
 { title: "UK Degree Classifications Explained", href: "/blog/uk-degree-classifications-explained/", description: "Comprehensive guide to the UK grading system." },
];

export default function GPACalculatorPage() {
 const toolSchema = generateToolSchema("GPA Calculator UK", "Convert UK university percentage grades to GPA scale for international applications.", "https://uk-grade-calculator.vercel.app/gpa-calculator/");
 const faqSchema = generateFAQSchema(faqs);

 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "GPA Calculator" }]} />

 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 GPA Calculator UK
 </h1>
 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
 Convert your UK university grades to GPA (Grade Point Average). Enter your module percentages and credits to see both your UK classification and equivalent GPA score.
 </p>
 </div>

 <GradeCalculator type="gpa" showTarget={true} showCredits={true} />

 <div className="prose-custom mt-12">
 <h2>UK to GPA Conversion Table</h2>
 <p>
 The following table shows the most widely accepted conversion between UK percentage grades and the 4.0 GPA scale used in the United States and many other countries:
 </p>
 <table>
 <thead><tr><th>UK Percentage</th><th>UK Classification</th><th>GPA (4.0 Scale)</th><th>US Letter Grade</th></tr></thead>
 <tbody>
 <tr><td>70% and above</td><td>First</td><td>4.0</td><td>A</td></tr>
 <tr><td>65-69%</td><td>High 2:1</td><td>3.7</td><td>A-</td></tr>
 <tr><td>60-64%</td><td>Low 2:1</td><td>3.3</td><td>B+</td></tr>
 <tr><td>55-59%</td><td>High 2:2</td><td>3.0</td><td>B</td></tr>
 <tr><td>50-54%</td><td>Low 2:2</td><td>2.7</td><td>B-</td></tr>
 <tr><td>45-49%</td><td>High Third</td><td>2.3</td><td>C+</td></tr>
 <tr><td>40-44%</td><td>Low Third</td><td>2.0</td><td>C</td></tr>
 <tr><td>Below 40%</td><td>Fail</td><td>0.0</td><td>F</td></tr>
 </tbody>
 </table>

 <h2>Why UK and US Grades Are Not Directly Comparable</h2>
 <p>
 The UK and US grading systems are fundamentally different in how they use the percentage scale. Understanding these differences is essential for accurate conversion. For a complete guide to the UK system specifically, see our article on <Link href="/blog/uk-degree-classifications-explained/">UK degree classifications explained</Link>.
 </p>
 <ul>
 <li><strong>UK grading is compressed.</strong> In the UK, marks above 80% are rare, and marks above 90% are almost never given. A UK 75% represents outstanding work. In the US, 90%+ (an A) is commonly achieved.</li>
 <li><strong>Different marking philosophies.</strong> UK assessors often mark against an ideal standard, where perfection is theoretically possible but practically never achieved. US grading tends to be criterion-referenced, where meeting all criteria can yield close to 100%.</li>
 <li><strong>Assessment methods differ.</strong> UK degrees rely more heavily on final exams and extended essays, while US grades often include participation, homework, quizzes, and multiple smaller assessments throughout the semester.</li>
 <li><strong>Grade distributions vary.</strong> In the UK, the most common grade is a 2:1 (60-69%). In the US, the average GPA at many institutions is above 3.0, with significant grade inflation at some schools.</li>
 </ul>

 <h2>When You Need a GPA Conversion</h2>
 <p>UK students commonly need GPA conversions in these situations:</p>
 <ol>
 <li><strong>Applying to US graduate schools.</strong> American universities require GPA on applications. Most consider a UK First (4.0 GPA equivalent) as competitive for top programmes.</li>
 <li><strong>Study abroad and exchange programmes.</strong> If you are spending a semester at a US, Canadian, or Australian university, your grades may need to be converted.</li>
 <li><strong>International job applications.</strong> Multinational companies, particularly US-based firms, may ask for GPA on applications.</li>
 <li><strong>Professional qualifications.</strong> Some international professional certifications require a minimum GPA.</li>
 <li><strong>Scholarship applications.</strong> Many international scholarships state minimum GPA requirements. Calculate your UK percentage first with our <Link href="/">university grade calculator</Link>, then convert here.</li>
 </ol>

 <h2>GPA Conversion for Popular International Destinations</h2>
 <table>
 <thead><tr><th>Country</th><th>Grading Scale</th><th>UK First Equivalent</th><th>UK 2:1 Equivalent</th></tr></thead>
 <tbody>
 <tr><td>United States</td><td>4.0 GPA</td><td>4.0</td><td>3.3-3.7</td></tr>
 <tr><td>Canada</td><td>4.0 or 4.3 GPA</td><td>4.0-4.3</td><td>3.3-3.7</td></tr>
 <tr><td>Australia</td><td>7.0 scale</td><td>6.0-7.0 (HD)</td><td>5.0-5.9 (D)</td></tr>
 <tr><td>Germany</td><td>1.0-5.0 (1.0 = best)</td><td>1.0-1.5</td><td>1.5-2.5</td></tr>
 <tr><td>France</td><td>20-point scale</td><td>14-16+</td><td>12-14</td></tr>
 <tr><td>Netherlands</td><td>10-point scale</td><td>8.0-10.0</td><td>7.0-7.9</td></tr>
 </tbody>
 </table>

 <h2>Tips for International Applications</h2>
 <ul>
 <li><strong>Always check institution-specific conversions.</strong> Many universities publish their own conversion tables, which may differ from the general guidelines above. Use the target institution&apos;s table if available.</li>
 <li><strong>Provide context in your application.</strong> Explain that the UK grading system works differently. A brief note stating that &quot;70% and above constitutes a First Class degree, the highest classification in the UK system&quot; helps admissions officers understand your grades.</li>
 <li><strong>Get an official transcript.</strong> Most international institutions require an official transcript from your UK university. This typically includes both percentage grades and your degree classification.</li>
 <li><strong>Consider WES evaluation.</strong> World Education Services (WES) provides official credential evaluations that convert UK qualifications to US/Canadian equivalents. Many US universities accept or require WES evaluations.</li>
 <li><strong>Use the GPA calculator before applying.</strong> Calculate your GPA equivalent before you apply so you know which programmes match your academic profile.</li>
 </ul>

 <h2>The UK GPA Pilot Scheme</h2>
 <p>
 In recent years, some UK universities have participated in a pilot scheme to introduce GPA alongside traditional degree classifications. The proposed UK GPA scale runs from 0 to 4.25:
 </p>
 <table>
 <thead><tr><th>UK GPA</th><th>Traditional Classification</th></tr></thead>
 <tbody>
 <tr><td>4.25</td><td>High First (80%+)</td></tr>
 <tr><td>4.0</td><td>First (70-79%)</td></tr>
 <tr><td>3.5</td><td>High 2:1 (65-69%)</td></tr>
 <tr><td>3.0</td><td>Low 2:1 (60-64%)</td></tr>
 <tr><td>2.5</td><td>High 2:2 (55-59%)</td></tr>
 <tr><td>2.0</td><td>Low 2:2 (50-54%)</td></tr>
 <tr><td>1.0</td><td>Third (40-49%)</td></tr>
 <tr><td>0</td><td>Fail (below 40%)</td></tr>
 </tbody>
 </table>
 <p>
 This UK-specific GPA scale provides more granularity than the traditional classification system, allowing employers and institutions to distinguish between, say, a student with 72% and one with 85% (both currently classified as a First). However, adoption remains limited, and the traditional classification system continues to be the primary method used by most UK universities. To understand how your percentage maps to a classification, use our <Link href="/degree-classification-calculator/">degree classification calculator</Link>.
 </p>
 </div>

 <FAQ items={faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 </>
 );
}
