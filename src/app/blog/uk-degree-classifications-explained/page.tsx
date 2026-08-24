import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import ClassificationTable from "@/components/ClassificationTable";
import { degreeClassifications, mastersClassifications } from "@/lib/grades";
import { generateSEO, generateFAQSchema, generateArticleSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "UK Degree Classifications Explained - First, 2:1, 2:2, Third",
 description:
 "Complete guide to UK degree classifications and uni grade boundaries. Understand First, 2:1, 2:2, and Third class degree grades, how they are calculated, and what employers think.",
 path: "/blog/uk-degree-classifications-explained/",
 type: "article",
 publishedTime: "2025-01-15T00:00:00Z",
 modifiedTime: "2025-08-24T00:00:00Z",
});

const faqs = [
 {
 question: "What percentage do you need for a First class degree?",
 answer:
 "You need an overall credit-weighted average of 70% or above to achieve a First Class Honours degree at most UK universities. This average is calculated across your second and final year modules, weighted by credit value. Some universities have borderline policies that may award a First to students with averages between 68% and 70% if a sufficient proportion of their credits fall in the First class band.",
 },
 {
 question: "Is a 2:1 degree good enough for employers?",
 answer:
 "Yes, a 2:1 is widely considered the standard requirement for competitive graduate schemes, professional training contracts, and postgraduate study. Around 44% of UK graduates achieve a 2:1, making it the most common classification. Most large employers, including those in law, finance, consulting, and the civil service, list a 2:1 as their minimum requirement. Some employers are now moving towards more holistic assessments that place less emphasis on degree classification alone.",
 },
 {
 question: "What is the difference between a 2:1 and a 2:2?",
 answer:
 "A 2:1 (Upper Second Class) requires an average of 60-69%, while a 2:2 (Lower Second Class) requires 50-59%. The practical difference is significant: a 2:1 opens the door to most competitive graduate schemes, while a 2:2 may limit some options in highly selective industries. However, a 2:2 is still a good degree and many employers, particularly in creative, technical, and vocational fields, welcome 2:2 graduates.",
 },
 {
 question: "Can I still get a good job with a Third class degree?",
 answer:
 "Absolutely. A Third class degree (40-49%) may close some doors to graduate schemes that have strict classification requirements, but many career paths do not have rigid academic thresholds. Sectors such as sales, marketing, entrepreneurship, creative industries, and skilled trades value experience and demonstrable skills over academic grades. Further qualifications, professional certifications, or a strong portfolio can also compensate for a lower classification.",
 },
 {
 question: "Do Scottish universities use the same degree classifications?",
 answer:
 "Scottish universities use the same classification labels (First, 2:1, 2:2, Third) but their degree structure differs. Most Scottish undergraduate degrees are four years rather than three. They use the Scottish Credit and Qualifications Framework (SCQF) rather than the Framework for Higher Education Qualifications (FHEQ) used in England, Wales, and Northern Ireland. The classification boundaries (70%, 60%, 50%, 40%) remain the same, but year weightings and credit structures may differ.",
 },
 {
 question: "What percentage of students get a First class degree?",
 answer:
 "According to HESA data for the 2022/23 academic year, approximately 32% of UK graduates achieved a First Class Honours degree. This proportion has risen significantly over the past two decades, from around 8% in the early 2000s. The increase has prompted debates about grade inflation in UK higher education, though universities attribute much of the rise to improved teaching quality and student support.",
 },
 {
 question: "How do UK degree classifications compare to international grades?",
 answer:
 "A UK First is broadly equivalent to a US GPA of 3.7-4.0, a German 1.0-1.5, or a French 16-20. A 2:1 corresponds roughly to a US GPA of 3.3-3.7, a German 1.5-2.5, or a French 14-16. A 2:2 maps to approximately a US GPA of 2.7-3.3. These equivalences are approximate because grading cultures and expectations differ between countries and institutions.",
 },
 {
 question: "What is an Ordinary degree?",
 answer:
 "An Ordinary degree (also called a pass degree or unclassified degree) is awarded to students who complete their degree requirements but do not meet the minimum threshold for Honours classification (typically below 40%). In Scotland, an Ordinary degree can be a deliberate three-year qualification distinct from the four-year Honours degree. An Ordinary degree is still a valid university qualification but carries less weight than an Honours degree in the job market.",
 },
];

const relatedLinks = [
 { title: "University Grade Calculator", href: "/", description: "Calculate your degree classification instantly using our free tool." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Work out individual module grades with custom assessment weightings." },
 { title: "Masters Grade Calculator", href: "/masters-grade-calculator/", description: "Calculate postgraduate Distinction, Merit, or Pass classifications." },
 { title: "How University Grading Works in the UK", href: "/blog/how-university-grading-works-uk/", description: "Deep dive into the UK grading process, credit frameworks, and assessment methods." },
 { title: "How to Calculate a Weighted Average", href: "/blog/how-to-calculate-weighted-average/", description: "Step-by-step guide to calculating credit-weighted averages for your degree." },
 { title: "Degree Classification Calculator", href: "/degree-classification-calculator/", description: "Check which classification band your average falls into." },
];

export default function UKDegreeClassificationsPage() {
 const faqSchema = generateFAQSchema(faqs);
 const articleSchema = generateArticleSchema(
 "UK Degree Classifications Explained - First, 2:1, 2:2, Third",
 "Complete guide to UK degree classifications including boundaries, employer expectations, calculation methods, history, and international equivalents.",
 "/blog/uk-degree-classifications-explained/",
 "2025-01-15T00:00:00Z",
 "2025-08-24T00:00:00Z"
 );

 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "Blog", href: "/blog/uk-degree-classifications-explained/" }, { label: "UK Degree Classifications Explained" }]} />

 <article className="prose-custom">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 UK Degree Classifications Explained: First, 2:1, 2:2, and Third
 </h1>
 <p className="text-lg text-slate-500 mb-8">
 Last updated: August 2025 &middot; 12 min read
 </p>

 <p>
 The UK degree classification system is one of the most recognisable academic grading frameworks in the world. Whether you are a current student tracking your progress, a prospective student wondering what to aim for, or a graduate explaining your qualification abroad, understanding how UK degree classifications work is essential.
 </p>
 <p>
 This guide covers every aspect of the system: what each classification means, the exact percentage boundaries, how universities calculate them, what employers really think about each level, how classifications compare internationally, and the ongoing debate about grade inflation. If you want to check your own classification right now, use our free <Link href="/">university grade calculator</Link>.
 </p>

 <nav className="my-8 p-5 rounded-xl bg-slate-50 border border-slate-200">
 <h2 className="text-lg font-semibold text-slate-900 mb-3">Table of Contents</h2>
 <ol className="space-y-1.5 text-sm">
 <li><a href="#what-are-degree-classifications">What Are UK Degree Classifications?</a></li>
 <li><a href="#classification-boundaries">Classification Boundaries and Percentages</a></li>
 <li><a href="#first-class">First Class Honours (1st)</a></li>
 <li><a href="#upper-second">Upper Second Class Honours (2:1)</a></li>
 <li><a href="#lower-second">Lower Second Class Honours (2:2)</a></li>
 <li><a href="#third-class">Third Class Honours (3rd)</a></li>
 <li><a href="#ordinary-degree">Ordinary Degree and Fail</a></li>
 <li><a href="#how-calculated">How Degree Classifications Are Calculated</a></li>
 <li><a href="#employer-perspectives">What Employers Think About Each Classification</a></li>
 <li><a href="#statistics">UK Degree Classification Statistics</a></li>
 <li><a href="#international-equivalents">International Equivalents</a></li>
 <li><a href="#borderline-policies">Borderline Policies</a></li>
 <li><a href="#history">A Brief History of UK Degree Classifications</a></li>
 <li><a href="#grade-inflation">The Grade Inflation Debate</a></li>
 <li><a href="#postgraduate">Postgraduate Classifications</a></li>
 <li><a href="#tips">Tips for Achieving a Higher Classification</a></li>
 </ol>
 </nav>

 <h2 id="what-are-degree-classifications">What Are UK Degree Classifications?</h2>
 <p>
 UK degree classifications are the grading system used to rank undergraduate Honours degrees at universities across England, Scotland, Wales, and Northern Ireland. Instead of a cumulative GPA like the American system, UK universities assign a single classification based on your overall weighted average mark across the qualifying years of study.
 </p>
 <p>
 The system dates back to the early 19th century at the University of Oxford and has since been adopted by virtually every UK higher education institution. There are four main Honours classifications, plus an Ordinary (unclassified) degree for students who do not reach the Honours threshold. For a deeper look at the grading process itself, including moderation, external examiners, and exam boards, see our guide on <Link href="/blog/how-university-grading-works-uk/">how university grading works in the UK</Link>.
 </p>
 <p>
 Your degree classification matters because it appears on your degree certificate, your academic transcript, and is often requested by employers, professional bodies, and postgraduate admissions teams. It serves as a standardised shorthand for your academic performance throughout your degree. Use our <Link href="/degree-classification-calculator/">degree classification calculator</Link> to check which band your current average falls into.
 </p>

 <h2 id="classification-boundaries">Classification Boundaries and Percentages</h2>
 <p>
 The following table shows the standard percentage boundaries used by the vast majority of UK universities. While most institutions follow these exact thresholds, some may apply slight variations. For instance, <Link href="/universities/mmu/">Manchester Metropolitan University</Link> and the <Link href="/universities/leeds/">University of Leeds</Link> both follow these standard boundaries but differ in their year weighting policies. Always check your own university&apos;s academic regulations.
 </p>
 </article>

 <ClassificationTable classifications={degreeClassifications} />

 <div className="prose-custom">
 <h2 id="first-class">First Class Honours (1st) &mdash; 70% and Above</h2>
 <p>
 A First Class Honours degree, commonly called a &quot;First,&quot; is the highest classification available to undergraduate students. It requires an overall credit-weighted average of 70% or above. A First signals exceptional academic ability, deep subject knowledge, strong analytical skills, and the capacity for independent thought.
 </p>
 <p>
 Achieving a First requires consistent high performance across most modules. A single outstanding mark cannot compensate for mediocre grades elsewhere because the classification is based on a weighted average. Students aiming for a First typically need to demonstrate excellence in both coursework and examinations, showing critical thinking beyond simple knowledge reproduction.
 </p>
 <p>
 In practical terms, a First opens doors to the most competitive career paths. Top-tier graduate schemes in investment banking, management consulting, corporate law, and the civil service fast stream typically require a First or a high 2:1. For students considering academia, a First is usually the minimum expectation for PhD programme entry and research funding applications.
 </p>
 <p>
 According to HESA data, approximately 32% of graduates in 2022/23 achieved a First. This represents a significant increase from around 8% in the early 2000s, which has fuelled ongoing debates about grade inflation in UK higher education.
 </p>

 <h2 id="upper-second">Upper Second Class Honours (2:1) &mdash; 60% to 69%</h2>
 <p>
 The Upper Second Class degree, universally known as a &quot;2:1&quot; (pronounced &quot;two-one&quot;), requires an average between 60% and 69%. It is the most commonly awarded UK degree classification, achieved by around 44% of graduates.
 </p>
 <p>
 A 2:1 is widely regarded as the benchmark for graduate employment. The majority of competitive graduate programmes list a 2:1 as their minimum academic requirement. This includes roles in finance, law, engineering, consulting, the NHS graduate management training scheme, and the civil service. Many postgraduate taught programmes (Masters degrees) also require a 2:1 for entry.
 </p>
 <p>
 The 2:1 band spans ten percentage points, which means there is a meaningful difference between a student averaging 61% and one averaging 69%. Some employers and postgraduate programmes differentiate within the 2:1 band, looking at the precise average or the proportion of modules in the First class range. If you are close to the 70% boundary, check whether your university has a borderline policy that could upgrade you to a First.
 </p>

 <h2 id="lower-second">Lower Second Class Honours (2:2) &mdash; 50% to 59%</h2>
 <p>
 A Lower Second Class degree, known as a &quot;2:2&quot; (pronounced &quot;two-two&quot;), requires an average between 50% and 59%. Approximately 18% of UK graduates receive a 2:2.
 </p>
 <p>
 While a 2:2 may exclude you from some highly competitive graduate schemes that specify a 2:1 minimum, it remains a solid academic achievement that many employers value. Sectors such as marketing, digital media, retail management, hospitality, creative industries, and technology startups frequently hire 2:2 graduates. Small and medium-sized enterprises (SMEs) often value personality, motivation, and relevant experience above degree classification.
 </p>
 <p>
 If you have a 2:2 and are targeting roles that typically require a 2:1, you can strengthen your application through relevant work experience, internships, professional certifications, a strong portfolio, or a postgraduate qualification. Some Masters programmes accept students with a 2:2, particularly if they have relevant professional experience.
 </p>

 <h2 id="third-class">Third Class Honours (3rd) &mdash; 40% to 49%</h2>
 <p>
 A Third Class Honours degree requires an average between 40% and 49%. It is the lowest Honours classification, achieved by approximately 4-5% of graduates.
 </p>
 <p>
 A Third is still a university degree and carries value. While it may limit access to some structured graduate programmes, many career paths do not have formal academic entry requirements. Entrepreneurship, sales, property, trades, and many creative fields focus on skills and experience rather than classification. Many highly successful business leaders and public figures graduated with a Third. Students with vocational qualifications like a BTEC can use our <Link href="/btec-grade-calculator/">BTEC grade calculator</Link> to check how their pre-university grades translate.
 </p>
 <p>
 If you are currently tracking towards a Third and want to improve, our <Link href="/final-grade-calculator/">final grade calculator</Link> can help you work out exactly what marks you need on your remaining assessments to reach a higher classification.
 </p>

 <h2 id="ordinary-degree">Ordinary Degree and Fail</h2>
 <p>
 Students who complete degree requirements but score below 40% may be awarded an Ordinary degree (also called a pass degree) rather than an Honours degree. This means no classification suffix appears on the certificate. In Scotland, an Ordinary degree is sometimes a deliberate three-year exit qualification, distinct from the four-year Honours programme.
 </p>
 <p>
 A Fail occurs when a student does not meet the minimum requirements for any degree award. This may happen due to not accumulating enough credits, failing compulsory modules without the option to resit, or not completing the programme.
 </p>

 <h2 id="how-calculated">How Degree Classifications Are Calculated</h2>
 <p>
 Degree classifications are based on a credit-weighted average of your module marks. The formula is:
 </p>
 <p>
 <strong>Overall Average = &Sigma;(Module Grade &times; Module Credits) &divide; Total Credits</strong>
 </p>
 <p>
 Most universities only include marks from your second and final years in this calculation. First-year marks typically do not count towards the classification, though you must pass them to progress. The final year usually carries more weight than the second year, with common splits being 33/67 or 40/60 (Year 2/Year 3).
 </p>
 <p>
 For a detailed walkthrough with examples, see our guide on <Link href="/blog/how-to-calculate-weighted-average/">how to calculate a weighted average</Link>, or use our <Link href="/weighted-grade-calculator/">weighted grade calculator</Link> to compute your result automatically.
 </p>

 <h3>Worked Example</h3>
 <p>Suppose a student has these Year 3 modules (Year 3 weighted at 67%):</p>
 <table>
 <thead>
 <tr><th>Module</th><th>Grade</th><th>Credits</th><th>Weighted</th></tr>
 </thead>
 <tbody>
 <tr><td>Dissertation</td><td>72%</td><td>40</td><td>2,880</td></tr>
 <tr><td>Advanced Theory</td><td>65%</td><td>20</td><td>1,300</td></tr>
 <tr><td>Research Methods</td><td>68%</td><td>20</td><td>1,360</td></tr>
 <tr><td>Specialist Option A</td><td>71%</td><td>20</td><td>1,420</td></tr>
 <tr><td>Specialist Option B</td><td>63%</td><td>20</td><td>1,260</td></tr>
 </tbody>
 </table>
 <p>
 Year 3 average = (2,880 + 1,300 + 1,360 + 1,420 + 1,260) &divide; 120 = 68.5%
 </p>
 <p>
 If Year 2 average was 62%, the overall degree average would be: (62 &times; 0.33) + (68.5 &times; 0.67) = 20.46 + 45.90 = <strong>66.36%</strong>, which is an Upper Second Class (2:1).
 </p>

 <h2 id="employer-perspectives">What Employers Think About Each Classification</h2>
 <p>
 Employer attitudes towards degree classifications vary by industry, company size, and role type. Here is a realistic breakdown:
 </p>
 <table>
 <thead>
 <tr><th>Sector</th><th>Typical Minimum</th><th>Notes</th></tr>
 </thead>
 <tbody>
 <tr><td>Investment Banking / Consulting</td><td>2:1 (often First)</td><td>Top firms use classification as a screening filter</td></tr>
 <tr><td>Law (Training Contract)</td><td>2:1</td><td>Magic circle firms may prefer a First</td></tr>
 <tr><td>Civil Service Fast Stream</td><td>2:2</td><td>Changed from 2:1 in recent years</td></tr>
 <tr><td>NHS Graduate Scheme</td><td>2:1</td><td>Some roles accept 2:2 with experience</td></tr>
 <tr><td>Technology / Startups</td><td>None / 2:2</td><td>Portfolio and skills valued over grades</td></tr>
 <tr><td>Creative Industries</td><td>None</td><td>Portfolio-driven hiring</td></tr>
 <tr><td>Teaching (PGCE)</td><td>2:2 or equivalent</td><td>Subject knowledge tests also required</td></tr>
 <tr><td>SMEs</td><td>Varies</td><td>Often no formal minimum</td></tr>
 </tbody>
 </table>
 <p>
 A growing number of large employers, including PwC, EY, Deloitte, and several technology firms, have removed or softened degree classification requirements in recent years, using aptitude tests and situational judgement assessments instead. This trend recognises that academic grades do not always predict workplace performance.
 </p>

 <h2 id="statistics">UK Degree Classification Statistics</h2>
 <p>
 The distribution of UK degree classifications has shifted substantially over the past two decades. According to HESA data:
 </p>
 <table>
 <thead>
 <tr><th>Classification</th><th>2002/03</th><th>2012/13</th><th>2022/23</th></tr>
 </thead>
 <tbody>
 <tr><td>First</td><td>8%</td><td>19%</td><td>32%</td></tr>
 <tr><td>2:1</td><td>42%</td><td>47%</td><td>44%</td></tr>
 <tr><td>2:2</td><td>37%</td><td>27%</td><td>18%</td></tr>
 <tr><td>Third / Ordinary</td><td>13%</td><td>7%</td><td>6%</td></tr>
 </tbody>
 </table>
 <p>
 The dramatic rise in Firsts and decline in lower classifications has been a major topic of discussion in UK higher education. Contributing factors include improved teaching, better student support, changes to assessment methods, increased use of coursework (where students tend to score higher than in exams), and, critics argue, institutional pressure to inflate grades.
 </p>

 <h2 id="international-equivalents">International Equivalents</h2>
 <p>
 If you need to explain your UK degree classification to an international employer or university, the following approximate equivalences are widely accepted:
 </p>
 <table>
 <thead>
 <tr><th>UK Classification</th><th>US GPA</th><th>German Grade</th><th>French Grade</th><th>ECTS Grade</th></tr>
 </thead>
 <tbody>
 <tr><td>First (70%+)</td><td>3.7 - 4.0</td><td>1.0 - 1.5</td><td>16 - 20</td><td>A</td></tr>
 <tr><td>2:1 (60-69%)</td><td>3.3 - 3.7</td><td>1.5 - 2.5</td><td>14 - 16</td><td>B</td></tr>
 <tr><td>2:2 (50-59%)</td><td>2.7 - 3.3</td><td>2.5 - 3.5</td><td>12 - 14</td><td>C</td></tr>
 <tr><td>Third (40-49%)</td><td>2.0 - 2.7</td><td>3.5 - 4.0</td><td>10 - 12</td><td>D-E</td></tr>
 </tbody>
 </table>
 <p>
 These are rough guidelines. Different credential evaluation services (such as UK ENIC, WES, or NACES members) may produce slightly different equivalences. If you need a formal comparison, request an official credential evaluation from a recognised agency. You can also use our <Link href="/percentage-grade-calculator/">percentage grade calculator</Link> to convert raw marks to percentages before doing any conversion.
 </p>
 <p>
 For a more precise conversion, our <Link href="/gpa-calculator/">GPA calculator</Link> can convert your UK percentage grades to the 4.0 GPA scale.
 </p>

 <h2 id="borderline-policies">Borderline Policies</h2>
 <p>
 One of the most anxiety-inducing aspects of the classification system is falling close to a boundary. If you average 68% or 69%, you may feel agonisingly close to a First. Many universities recognise this and have borderline policies to handle such cases fairly.
 </p>
 <p>
 Common borderline approaches include:
 </p>
 <ul>
 <li><strong>Module profile:</strong> If 50% or more of your final-year credits fall in the higher classification band, you may be upgraded. For example, if your average is 68% but 65 of your 120 final-year credits are above 70%, you could be awarded a First.</li>
 <li><strong>Preponderance:</strong> The classification is awarded based on which band contains the most credits.</li>
 <li><strong>Dual algorithm:</strong> Some universities run two calculations (e.g., with and without the best/worst module) and award the higher result.</li>
 <li><strong>Board discretion:</strong> Examination boards may have authority to upgrade borderline candidates based on trajectory, extenuating circumstances, or viva voce examination.</li>
 </ul>
 <p>
 Borderline zones vary by university but typically cover the 2-3 percentage points below each boundary (e.g., 68-69% for the First boundary, 58-59% for the 2:1 boundary). Check your university&apos;s regulations to understand their specific policy.
 </p>

 <h2 id="history">A Brief History of UK Degree Classifications</h2>
 <p>
 The classification system originated at the University of Oxford in the early 1800s. Initially, degrees were simply awarded as &quot;Honours&quot; or &quot;Pass,&quot; but the system was refined throughout the 19th century to include the familiar First, Second, and Third divisions. The split of Second Class into Upper and Lower (2:1 and 2:2) came later, becoming standard across UK universities by the mid-20th century.
 </p>
 <p>
 The system has faced periodic calls for reform. In 2009, the Burgess Group recommended replacing classifications with a Higher Education Achievement Record (HEAR), providing a more detailed transcript of a student&apos;s achievements. While the HEAR has been adopted alongside classifications, the traditional system persists because of its simplicity and widespread recognition among employers.
 </p>
 <p>
 Despite its longevity, the classification system has clear limitations. It reduces three or four years of academic work into a single label, ignoring the trajectory of a student&apos;s performance, the breadth of their skills, and their co-curricular achievements. The debate about replacing or supplementing it continues in UK higher education policy circles.
 </p>

 <h2 id="grade-inflation">The Grade Inflation Debate</h2>
 <p>
 The proportion of Firsts awarded has quadrupled since 2002, from 8% to 32%. This trend has prompted serious questions about whether standards are being maintained. The Office for Students (OfS) has flagged &quot;unexplained grade inflation&quot; as a regulatory concern and has required universities to explain increases in top grades that cannot be attributed to improvements in student intake or teaching quality.
 </p>
 <p>
 Universities argue that several legitimate factors contribute to higher grades: better teaching, improved learning technology, more effective student support services, increased use of formative assessment, and changes to module structures that allow students to play to their strengths. Critics counter that institutional rankings and student satisfaction surveys create perverse incentives to award higher grades.
 </p>
 <p>
 For students, the practical implication is that a First today may carry slightly less distinction than it did twenty years ago. However, it remains the highest classification and is still highly valued by employers and postgraduate programmes.
 </p>

 <h2 id="postgraduate">Postgraduate Classifications</h2>
 <p>
 Masters degrees use a different classification system:
 </p>
 </div>

 <ClassificationTable classifications={mastersClassifications} title="Masters Degree Classifications" />

 <div className="prose-custom">
 <p>
 Postgraduate certificates and diplomas may use the same boundaries or may simply award a Pass or Fail. Doctoral degrees (PhDs) are not classified; they are either awarded or not, based on a thesis and viva voce examination.
 </p>
 <p>
 For a detailed calculation of postgraduate grades, use our <Link href="/masters-grade-calculator/">masters grade calculator</Link>.
 </p>

 <h2 id="tips">Tips for Achieving a Higher Classification</h2>
 <p>
 If you are aiming to improve your degree classification, these strategies are backed by educational research and the experience of academic advisers:
 </p>
 <ol>
 <li><strong>Prioritise high-credit modules.</strong> A 40-credit dissertation has double the impact of a 20-credit module. Invest your best effort where it counts most.</li>
 <li><strong>Use our <Link href="/">grade calculator</Link> regularly.</strong> Track your progress throughout the year, not just at the end. Knowing your running average helps you set realistic targets for each remaining assessment.</li>
 <li><strong>Study marking criteria.</strong> Understanding the difference between a 60% and a 70% answer in your discipline is the fastest way to improve your grades. Request examples of high-scoring work from your department.</li>
 <li><strong>Act on feedback.</strong> Previous feedback tells you exactly where you lost marks. Students who systematically address feedback points typically see grade improvements of 5-10 percentage points.</li>
 <li><strong>Choose modules strategically.</strong> If you have elective options, consider assessment formats that suit your strengths (coursework vs exams) and topics where you have genuine interest and motivation.</li>
 <li><strong>Engage with academic support.</strong> Writing centres, study skills workshops, and personal tutors are underused resources that can help you develop the academic practices associated with higher grades.</li>
 <li><strong>Manage your time across the year.</strong> Consistent effort produces better results than last-minute cramming. Plan your semester around assessment deadlines and allocate time proportional to credit values.</li>
 </ol>

 <h2>Uni Grade Boundaries and Classification Thresholds</h2>
 <p>
 Uni grade boundaries are the percentage thresholds used to award UK honours degree classifications. For most undergraduate courses, an overall credit-weighted average of 70% earns a First, 60% earns a 2:1, 50% earns a 2:2, and 40% earns a Third. Your university&apos;s regulations determine which years count and how they are weighted, so use the boundaries as a reliable guide rather than a substitute for your official degree results.
 </p>
 <table>
 <thead><tr><th>Honours degree classification</th><th>Typical boundary</th><th>What it means</th></tr></thead>
 <tbody>
 <tr><td>First Class</td><td>70%+</td><td>Highest of the UK degree classes</td></tr>
 <tr><td>Upper Second (2:1)</td><td>60% to 69%</td><td>Common benchmark for graduate schemes</td></tr>
 <tr><td>Lower Second (2:2)</td><td>50% to 59%</td><td>A strong undergraduate qualification</td></tr>
 <tr><td>Third Class</td><td>40% to 49%</td><td>Honours degree awarded at the pass threshold</td></tr>
 </tbody>
 </table>
 <p>
 The classification boundaries do not automatically decide every close case. Many universities review students near a boundary, often around 68-69% for a First or 58-59% for a 2:1, and may consider the profile of final-year marks. Check your programme handbook for its exact borderline rule, then use the <Link href="/degree-classification-calculator/">degree classification calculator</Link> to model your own average.
 </p>

 <h3>What Is a 2:1 Degree?</h3>
 <p>
 A 2:1 degree, formally an Upper Second Class Honours degree, means your final average is normally between 60% and 69%. It is the most common outcome in UK higher education and is frequently listed as the minimum academic requirement for competitive graduate jobs and many taught masters courses. A 2:1 is not a single mark: a student graduating with 61% and one graduating with 69% both receive the same classification, although their module profiles may differ.
 </p>

 <h3>First Class Degree Percentage: What Marks Do You Need?</h3>
 <p>
 The usual First class degree percentage is 70% or above across the marks that count towards classification. Because credits and year weightings matter, a 70% average does not mean scoring 70% in every module. High marks in larger final-year modules can offset a lower mark elsewhere, while a low mark in a dissertation can carry substantial weight. Track the inputs with our <Link href="/weighted-grade-calculator/">weighted average calculator</Link> instead of relying on a simple average.
 </p>

 <h2>Key Takeaways</h2>
 <ul>
 <li>UK degrees are classified as First (70%+), 2:1 (60-69%), 2:2 (50-59%), Third (40-49%), or Ordinary/Fail (below 40%).</li>
 <li>Classifications are based on a credit-weighted average, usually calculated from Year 2 and Year 3 marks only.</li>
 <li>A 2:1 is the most common classification and the standard employer benchmark, though requirements are evolving.</li>
 <li>Borderline policies vary between universities and can result in upgrades for students near a boundary.</li>
 <li>International equivalences exist but are approximate. Use our <Link href="/gpa-calculator/">GPA calculator</Link> for a quick conversion.</li>
 <li>The proportion of Firsts has risen significantly, prompting grade inflation debates.</li>
 </ul>
 <h2>Degree Classification UK: What to Do With Your Average</h2>
 <p>
 When people search for UK degree classification, degree grades, or uni grade boundaries, they usually need a practical next step rather than another definition. First check which modules and years your regulations include. Then calculate the credit-weighted average and compare it with the published classification boundaries. A borderline result may trigger a university-specific review, but an online estimate cannot award an honours degree classification.
 </p>
 <p>
 Use the <Link href="/degree-classification-calculator/">degree classification calculator</Link> when you have an average to interpret, or the <Link href="/final-grade-calculator/">final grade calculator</Link> when you need to model remaining marks.
 </p>
 </div>

 <FAQ items={faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 </>
 );
}
