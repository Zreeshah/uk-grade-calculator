import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import ClassificationTable from "@/components/ClassificationTable";
import { degreeClassifications } from "@/lib/grades";
import { generateSEO, generateFAQSchema, generateArticleSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "How University Grading Works in the UK - Complete Guide",
 description:
 "Understand how UK university grading works from start to finish. Covers credit frameworks (FHEQ, SCQF), assessment types, marking processes, moderation, external examiners, appeals, and how your final degree classification is determined.",
 path: "/blog/how-university-grading-works-uk/",
 type: "article",
 publishedTime: "2025-02-10T00:00:00Z",
 modifiedTime: "2025-08-24T00:00:00Z",
});

const faqs = [
 {
 question: "What credit framework does my UK university use?",
 answer:
 "Universities in England, Wales, and Northern Ireland use the Framework for Higher Education Qualifications (FHEQ), where a standard undergraduate year is 120 credits. Scottish universities use the Scottish Credit and Qualifications Framework (SCQF), where a standard year is also 120 SCQF credits but at different levels. Both frameworks align with the European Credit Transfer System (ECTS), where 1 FHEQ credit equals 0.5 ECTS credits.",
 },
 {
 question: "Do first-year grades count towards my degree classification?",
 answer:
 "At most UK universities, first-year (Level 4) grades do not count towards your final degree classification. You typically need to pass your first-year modules to progress, but the marks themselves are excluded from the final average. A few universities include first-year marks with a small weighting (usually 10-15%), so check your specific institution's regulations.",
 },
 {
 question: "How does anonymous marking work?",
 answer:
 "Most UK universities use anonymous marking for written assessments. Your work is identified by a candidate number rather than your name, so markers cannot identify whose work they are grading. This reduces the risk of unconscious bias. Anonymous marking is usually not possible for presentations, lab work, or other assessments where your identity is inherently visible.",
 },
 {
 question: "What is an external examiner?",
 answer:
 "An external examiner is an academic from another university who reviews a sample of assessed work, exam papers, and marking standards to ensure they are fair, consistent, and comparable to other UK institutions. External examiners attend examination boards and can flag concerns about marking standards. Their involvement is a key quality assurance mechanism in UK higher education.",
 },
 {
 question: "Can I appeal my degree classification?",
 answer:
 "You can appeal if you believe there were procedural irregularities, undisclosed extenuating circumstances, or evidence of bias or prejudice. You cannot normally appeal simply because you disagree with the academic judgement of your markers. Appeals processes vary by university but typically involve submitting a formal case to a student casework or academic appeals team. If the internal process is exhausted, you can escalate to the Office of the Independent Adjudicator (OIA).",
 },
 {
 question: "What happens if I fail a module?",
 answer:
 "If you fail a module, you are usually given the opportunity to resit the assessment. Resit marks may be capped at the pass mark (typically 40% for undergraduate, 50% for postgraduate), meaning even if you score higher on the resit, your recorded mark may be limited. Some universities allow one uncapped resit attempt. If you fail the resit, you may need to repeat the module or, in some cases, leave the programme.",
 },
 {
 question: "How does moderation work in UK universities?",
 answer:
 "Moderation is the process of checking that marking is consistent and fair. There are two main approaches: second marking (where a second academic independently marks the same work) and sample moderation (where a second marker reviews a representative sample). If significant discrepancies are found, the full cohort may be remarked. Moderation is a requirement of UK quality assurance frameworks.",
 },
 {
 question: "What is the difference between formative and summative assessment?",
 answer:
 "Formative assessments are designed to support learning and provide feedback. They typically do not count towards your final grade. Examples include draft submissions, practice quizzes, and peer review exercises. Summative assessments count towards your module mark and ultimately your degree classification. Examples include final essays, end-of-module exams, dissertations, and graded presentations.",
 },
];

const relatedLinks = [
 { title: "University Grade Calculator", href: "/", description: "Calculate your degree classification with our free online tool." },
 { title: "UK Degree Classifications Explained", href: "/blog/uk-degree-classifications-explained/", description: "Detailed guide to First, 2:1, 2:2, and Third class degrees." },
 { title: "How to Calculate a Weighted Average", href: "/blog/how-to-calculate-weighted-average/", description: "Step-by-step guide to calculating credit-weighted grade averages." },
 { title: "Weighted Grade Calculator", href: "/weighted-grade-calculator/", description: "Calculate weighted averages with custom year and module weightings." },
 { title: "Degree Classification Calculator", href: "/degree-classification-calculator/", description: "Check which classification band your average falls into." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Work out individual module grades from multiple assessments." },
];

export default function HowGradingWorksPage() {
 const faqSchema = generateFAQSchema(faqs);
 const articleSchema = generateArticleSchema(
 "How University Grading Works in the UK",
 "Complete guide to the UK university grading system covering credit frameworks, assessment types, marking, moderation, external examiners, and degree classification calculation.",
 "/blog/how-university-grading-works-uk/",
 "2025-02-10T00:00:00Z",
 "2025-08-24T00:00:00Z"
 );

 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "Blog", href: "/blog/uk-degree-classifications-explained/" }, { label: "How University Grading Works in the UK" }]} />

 <article className="prose-custom">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 How University Grading Works in the UK: A Complete Guide
 </h1>
 <p className="text-lg text-slate-500 mb-8">
 Last updated: August 2025 &middot; 14 min read
 </p>

 <p>
 Understanding how UK university grading works is essential for every student. The process involves much more than just sitting exams and receiving marks. From credit frameworks and assessment design to anonymous marking, moderation, external examining, and examination boards, there is a structured system designed to ensure your grades are fair, consistent, and comparable across institutions.
 </p>
 <p>
 This guide walks you through the entire UK grading process from start to finish, so you know exactly how your work is assessed, how marks are moderated, and how your final <Link href="/blog/uk-degree-classifications-explained/">degree classification</Link> is determined. If you want to calculate your current standing right now, use our free <Link href="/">university grade calculator</Link>.
 </p>

 <nav className="my-8 p-5 rounded-xl bg-slate-50slate-800 border border-slate-200">
 <h2 className="text-lg font-semibold text-slate-900 mb-3">Table of Contents</h2>
 <ol className="space-y-1.5 text-sm">
 <li><a href="#credit-frameworks">UK Credit Frameworks: FHEQ and SCQF</a></li>
 <li><a href="#credit-structure">Credit Structure and Levels</a></li>
 <li><a href="#assessment-types">Types of Assessment</a></li>
 <li><a href="#marking-process">The Marking Process</a></li>
 <li><a href="#moderation">Moderation and Second Marking</a></li>
 <li><a href="#external-examiners">External Examiners</a></li>
 <li><a href="#exam-boards">Examination Boards</a></li>
 <li><a href="#classification-calculation">How Classification Is Calculated</a></li>
 <li><a href="#year-weightings">Year Weightings Explained</a></li>
 <li><a href="#resits-and-capping">Resits and Mark Capping</a></li>
 <li><a href="#extenuating-circumstances">Extenuating Circumstances</a></li>
 <li><a href="#appeals">The Appeals Process</a></li>
 <li><a href="#quality-assurance">Quality Assurance in UK Higher Education</a></li>
 </ol>
 </nav>

 <h2 id="credit-frameworks">UK Credit Frameworks: FHEQ and SCQF</h2>
 <p>
 The UK uses two main credit frameworks that define the volume, level, and standards of learning required for academic qualifications:
 </p>
 <p>
 <strong>FHEQ (Framework for Higher Education Qualifications)</strong> is used in England, Wales, and Northern Ireland. It is maintained by the Quality Assurance Agency (QAA) and defines levels 4 through 8, covering certificates of higher education through to doctoral degrees.
 </p>
 <p>
 <strong>SCQF (Scottish Credit and Qualifications Framework)</strong> is used in Scotland. It is a broader framework covering all levels of education from school to doctorate, with levels 7 through 12 covering higher education.
 </p>
 <p>
 Both frameworks align with the European Qualifications Framework (EQF) and the European Credit Transfer and Accumulation System (ECTS). One FHEQ credit is equivalent to 0.5 ECTS credits, so a 120-credit UK year equals 60 ECTS credits.
 </p>

 <h2 id="credit-structure">Credit Structure and Levels</h2>
 <p>
 A standard full-time undergraduate year in the UK consists of 120 credits. A three-year Honours degree therefore requires 360 credits (or 480 in Scotland for a four-year degree). Credits are assigned at specific levels:
 </p>
 <table>
 <thead>
 <tr><th>Level (FHEQ)</th><th>Year</th><th>Qualification</th><th>Credits</th></tr>
 </thead>
 <tbody>
 <tr><td>Level 4</td><td>Year 1</td><td>Certificate of Higher Education</td><td>120</td></tr>
 <tr><td>Level 5</td><td>Year 2</td><td>Diploma of Higher Education / Foundation Degree</td><td>120</td></tr>
 <tr><td>Level 6</td><td>Year 3</td><td>Honours Degree</td><td>120</td></tr>
 <tr><td>Level 7</td><td>Postgraduate</td><td>Masters Degree</td><td>180</td></tr>
 <tr><td>Level 8</td><td>Doctoral</td><td>PhD / DPhil</td><td>540+</td></tr>
 </tbody>
 </table>
 <p>
 Individual modules are typically worth 20 credits (one sixth of a year&apos;s workload), though some are 10, 30, 40, or even 60 credits. A 20-credit module represents approximately 200 hours of total student effort, including lectures, seminars, independent study, and assessment preparation.
 </p>

 <h2 id="assessment-types">Types of Assessment</h2>
 <p>
 UK universities use a wide variety of assessment methods, broadly divided into two categories:
 </p>
 <h3>Summative Assessment (Counts Towards Your Grade)</h3>
 <ul>
 <li><strong>Written examinations:</strong> Timed assessments under controlled conditions, typically 2-3 hours. May be open-book or closed-book.</li>
 <li><strong>Coursework essays:</strong> Extended written pieces (typically 2,000-5,000 words) submitted to a deadline.</li>
 <li><strong>Dissertations:</strong> Major independent research projects, usually 8,000-15,000 words for undergraduate, 15,000-20,000 for Masters.</li>
 <li><strong>Presentations:</strong> Individual or group oral presentations, often with slides.</li>
 <li><strong>Practical assessments:</strong> Lab reports, clinical assessments, performances, studio work, or portfolios.</li>
 <li><strong>Group projects:</strong> Collaborative work with peer assessment components.</li>
 <li><strong>Online assessments:</strong> Timed or untimed assessments completed through a virtual learning environment.</li>
 </ul>
 <h3>Formative Assessment (Does Not Count)</h3>
 <ul>
 <li><strong>Draft submissions:</strong> Early versions of work submitted for feedback before the final deadline.</li>
 <li><strong>Practice tests:</strong> Mock exams or quizzes to help students gauge their understanding.</li>
 <li><strong>Peer review:</strong> Students review each other&apos;s work to develop critical skills.</li>
 <li><strong>Tutorial discussions:</strong> Verbal contributions in seminar settings.</li>
 </ul>
 <p>
 The balance between exams and coursework varies by discipline. STEM subjects tend to rely more on exams, while humanities and social sciences often weight coursework more heavily. Use our <Link href="/module-grade-calculator/">module grade calculator</Link> to combine different assessment components into an overall module grade.
 </p>

 <h2 id="marking-process">The Marking Process</h2>
 <p>
 When you submit an assessment, it goes through a structured marking process designed to ensure fairness and consistency:
 </p>
 <ol>
 <li><strong>Anonymous submission:</strong> Most written work is submitted under a candidate number to ensure anonymity.</li>
 <li><strong>First marking:</strong> The primary marker (usually the module leader or a member of the teaching team) assesses your work against published marking criteria.</li>
 <li><strong>Marking criteria:</strong> UK universities publish grade descriptors that define what is expected at each classification level. A First typically requires critical analysis, independent thinking, and evidence of extensive reading beyond core texts.</li>
 <li><strong>Moderation:</strong> A sample of marked work is reviewed by a second marker to check for consistency (see below).</li>
 <li><strong>Mark entry:</strong> Confirmed marks are entered into the student records system.</li>
 <li><strong>Feedback:</strong> You receive written feedback explaining your mark, typically within 15-20 working days of submission.</li>
 </ol>

 <h2 id="moderation">Moderation and Second Marking</h2>
 <p>
 Moderation is a critical quality assurance process. There are several approaches:
 </p>
 <ul>
 <li><strong>Double blind marking:</strong> Two markers independently assess the same work without seeing each other&apos;s marks. Used for dissertations, final-year projects, and borderline cases.</li>
 <li><strong>Second marking:</strong> A second marker reviews the work and the first marker&apos;s comments, then agrees or suggests adjustments.</li>
 <li><strong>Sample moderation:</strong> A second marker reviews a representative sample (e.g., 10-20% of submissions, including work from each classification band). If discrepancies are found, the moderation sample is expanded or the full cohort is remarked.</li>
 <li><strong>Statistical moderation:</strong> Mark distributions are reviewed against departmental and university norms. Unusual patterns may trigger further investigation.</li>
 </ul>
 <p>
 The QAA UK Quality Code requires all UK universities to have robust moderation processes. This is one of the reasons UK degrees are recognised and trusted internationally.
 </p>

 <h2 id="external-examiners">External Examiners</h2>
 <p>
 Every UK degree programme has at least one external examiner: an academic from another university who provides independent oversight of assessment standards. External examiners:
 </p>
 <ul>
 <li>Approve exam papers and coursework briefs before they are issued to students</li>
 <li>Review a sample of marked work across the full range of grades</li>
 <li>Attend examination boards and contribute to classification decisions</li>
 <li>Write an annual report commenting on standards, assessment practices, and student achievement</li>
 <li>Flag any concerns about fairness, consistency, or comparability with other institutions</li>
 </ul>
 <p>
 External examiner reports are typically available to students through your student union or learning and teaching committee. They provide valuable insights into how your programme&apos;s standards compare to the sector.
 </p>

 <h2 id="exam-boards">Examination Boards</h2>
 <p>
 After all marks have been finalised and moderated, they are presented to an examination board (also called a board of examiners or assessment board). This board:
 </p>
 <ul>
 <li>Confirms all module results</li>
 <li>Considers extenuating circumstances applications</li>
 <li>Makes decisions on progression (whether students can move to the next year)</li>
 <li>Determines final degree classifications using the approved algorithm</li>
 <li>Applies borderline policies where applicable</li>
 <li>Approves award recommendations</li>
 </ul>
 <p>
 The board includes internal academics, the programme leader, and external examiners. Its decisions are final, though they can be challenged through the formal appeals process.
 </p>

 <h2 id="classification-calculation">How Classification Is Calculated</h2>
 <p>
 Your degree classification is determined by a credit-weighted average of your qualifying module marks. The standard formula is:
 </p>
 <p>
 <strong>Overall Average = &Sigma;(Module Mark &times; Module Credits) &divide; Total Credits</strong>
 </p>
 <p>
 The qualifying marks typically include Level 5 (Year 2) and Level 6 (Year 3) modules only. Level 4 (Year 1) marks are usually excluded from the calculation, though you must pass them to progress.
 </p>
 <p>
 Use our <Link href="/">university grade calculator</Link> to compute this automatically, or see our detailed <Link href="/blog/how-to-calculate-weighted-average/">weighted average guide</Link> for a step-by-step manual calculation.
 </p>
 </article>

 <ClassificationTable classifications={degreeClassifications} />

 <div className="prose-custom">
 <h2 id="year-weightings">Year Weightings Explained</h2>
 <p>
 Most universities do not weight Year 2 and Year 3 equally. The rationale is that final-year work represents a higher level of academic achievement and should therefore carry more weight. Common weighting patterns are:
 </p>
 <ul>
 <li><strong>33/67:</strong> Year 2 counts for one-third, Year 3 for two-thirds. This is the most common split.</li>
 <li><strong>40/60:</strong> A slightly more balanced approach used by some institutions.</li>
 <li><strong>25/75:</strong> Gives maximum weight to the final year.</li>
 <li><strong>50/50:</strong> Equal weighting, used by some universities.</li>
 </ul>
 <p>
 If your university uses the 33/67 split and your Year 2 average is 58% while your Year 3 average is 72%, your overall average would be: (58 &times; 0.33) + (72 &times; 0.67) = 19.14 + 48.24 = 67.38%, which is a 2:1. Use our <Link href="/weighted-grade-calculator/">weighted grade calculator</Link> to run this calculation with your own marks.
 </p>

 <h2 id="resits-and-capping">Resits and Mark Capping</h2>
 <p>
 If you fail a module (typically scoring below 40% for undergraduate), you will usually be offered a resit opportunity. Key rules about resits:
 </p>
 <ul>
 <li><strong>Capped marks:</strong> Most universities cap resit marks at the pass threshold (40%). Even if you score 65% on a resit, your recorded mark may be 40%. This protects the value of first-attempt passes.</li>
 <li><strong>Number of attempts:</strong> You typically get one resit attempt per module. Some universities allow additional attempts in exceptional circumstances.</li>
 <li><strong>Timing:</strong> Resits usually take place in the late summer (August/September) or at the next available assessment opportunity.</li>
 <li><strong>Impact on classification:</strong> Capped resit marks can significantly affect your overall average and therefore your classification. If you have capped marks, use the capped values in our <Link href="/">grade calculator</Link>, not your original scores.</li>
 </ul>

 <h2 id="extenuating-circumstances">Extenuating Circumstances</h2>
 <p>
 If your academic performance has been affected by circumstances beyond your control, you can submit an extenuating circumstances (EC) claim. Common grounds include:
 </p>
 <ul>
 <li>Serious illness or injury (with medical evidence)</li>
 <li>Bereavement of a close family member</li>
 <li>Significant personal or family crisis</li>
 <li>Being a victim of crime</li>
 <li>Sudden deterioration of a long-term condition</li>
 </ul>
 <p>
 EC claims are reviewed by a panel and, if accepted, can result in deadline extensions, alternative assessments, or the affected module being excluded from your classification calculation. They do not typically result in higher marks being awarded; instead, they ensure you are not penalised for circumstances beyond your control.
 </p>

 <h2 id="appeals">The Appeals Process</h2>
 <p>
 If you believe your grade or classification is incorrect, you can appeal. Valid grounds for appeal typically include:
 </p>
 <ul>
 <li>Procedural irregularity in the assessment or examination board process</li>
 <li>Previously undisclosed extenuating circumstances (with a valid reason for non-disclosure)</li>
 <li>Evidence of bias, prejudice, or unfair treatment</li>
 </ul>
 <p>
 You <strong>cannot</strong> normally appeal on the grounds of academic judgement alone (i.e., disagreeing with the mark a qualified academic awarded your work). The appeals process typically involves:
 </p>
 <ol>
 <li>Informal resolution with the module or programme leader</li>
 <li>Formal appeal to the university&apos;s academic appeals committee</li>
 <li>If unresolved, escalation to the Office of the Independent Adjudicator (OIA), the independent external body for student complaints in England and Wales</li>
 </ol>

 <h2 id="quality-assurance">Quality Assurance in UK Higher Education</h2>
 <p>
 The UK higher education sector has a robust quality assurance framework that ensures grading standards are maintained. Key bodies include:
 </p>
 <ul>
 <li><strong>QAA (Quality Assurance Agency):</strong> Publishes the UK Quality Code for Higher Education, which sets expectations for all universities.</li>
 <li><strong>Office for Students (OfS):</strong> The independent regulator of higher education in England, responsible for ensuring quality and standards.</li>
 <li><strong>HESA (Higher Education Statistics Agency):</strong> Collects and publishes data on degree outcomes, enabling sector-wide analysis.</li>
 <li><strong>External examiners:</strong> Provide independent oversight of assessment standards at every institution.</li>
 <li><strong>Professional, statutory, and regulatory bodies (PSRBs):</strong> Accredit specific programmes (e.g., engineering, medicine, law) and set additional assessment standards.</li>
 </ul>
 <p>
 This multi-layered system is why UK degrees are recognised and respected internationally. When you receive a grade from a UK university, it has been through a rigorous process of marking, moderation, external scrutiny, and board approval.
 </p>

 <h2>Key Takeaways</h2>
 <ul>
 <li>UK universities use structured credit frameworks (FHEQ or SCQF) to define the volume and level of learning.</li>
 <li>Assessment is diverse, combining exams, coursework, dissertations, presentations, and practical work.</li>
 <li>Marks go through anonymous marking, moderation, and external examining before being confirmed.</li>
 <li>Degree classifications are calculated from a credit-weighted average of Year 2 and Year 3 marks.</li>
 <li>Year weightings mean your final year typically counts for 60-75% of your classification.</li>
 <li>Resit marks are usually capped at 40%, which can significantly affect your average.</li>
 <li>Appeals are possible for procedural issues but not for academic judgement disagreements.</li>
 <li>The system is externally quality-assured by the QAA, OfS, and external examiners.</li>
 </ul>
 </div>

 <FAQ items={faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 </>
 );
}
