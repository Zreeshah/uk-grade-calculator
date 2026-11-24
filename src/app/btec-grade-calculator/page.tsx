import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import Breadcrumb from "@/components/Breadcrumb";
import BtecExtendedDiplomaTariffLookup from "@/components/BtecExtendedDiplomaTariffLookup";
import { extendedDiplomaTariff } from "@/lib/btec";
import { generateSEO, generateToolSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "BTEC Grade Calculator & UCAS Points",
 description: "Check BTEC National Extended Diploma UCAS tariff points and use Pearson's official calculator for qualification-specific grade outcomes.",
 path: "/btec-grade-calculator/",
});

const faqs = [
 { question: "Can this page calculate my overall BTEC grade from percentages?", answer: "No. Pearson's overall-grade calculation depends on the qualification, size, sector, valid unit combination, internal unit grades and, where relevant, external-unit points. A percentage-and-credit average cannot produce an official or reliable BTEC overall grade." },
 { question: "What does this page calculate?", answer: "It looks up the UCAS tariff for a final 2016-RQF BTEC National Extended Diploma grade. It does not predict that final grade from unit work." },
 { question: "How does Pearson calculate a BTEC overall grade?", answer: "For the relevant qualification, Pearson converts eligible unit outcomes to points, checks the required units and valid combination, then applies the specification's grade thresholds. Use Pearson's official grade calculator and your current specification for a result estimate." },
 { question: "Does Distinction star apply to every BTEC unit?", answer: "No. In several Pearson RQF qualifications, Distinction star is an aggregated qualification grade rather than an individual unit grade. The available grades and rules vary by qualification." },
 { question: "Are BTEC UCAS points always accepted by a university?", answer: "Tariff points are only one part of an application. Check the course's entry requirements, accepted qualification titles and entry year directly with the provider." },
 { question: "What is the difference between a BTEC National Extended Diploma and a Diploma?", answer: "They are different sizes of the same qualification family. The Extended Diploma is the largest, with more guided learning hours and more units than the Diploma, and it carries a higher maximum UCAS tariff. The lookup on this page is for the Extended Diploma only; use Pearson's calculator for other sizes." },
 { question: "Can I retake a BTEC external assessment?", answer: "Resit and retake rules are set by Pearson for each qualification and specification. Confirm in your current specification whether a retake replaces the earlier grade, whether a cap applies, and how it affects the overall points total — and ask your school or college to confirm the rules for your cohort." },
];

const relatedLinks = [
 { title: "University Grade Calculator", href: "/", description: "Calculate your degree classification once you start university." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Calculate an individual university module result from assessments." },
 { title: "UK Degree Classifications Explained", href: "/blog/uk-degree-classifications-explained/", description: "Understand First, 2:1, 2:2 and Third class degrees." },
 { title: "GPA Calculator UK", href: "/gpa-calculator/", description: "Convert percentage results to an indicative GPA." },
];

export default function BTECGradeCalculatorPage() {
 const toolSchema = generateToolSchema("BTEC National Extended Diploma UCAS Tariff Lookup", "Lookup UCAS tariff points for a final BTEC National Extended Diploma grade. Pearson's official calculator determines qualification-specific overall grades.", "https://unigradecalculator.co.uk/btec-grade-calculator/");

 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "BTEC Grade Calculator" }]} />

 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">BTEC Grade Calculator</h1>
 <p className="text-lg text-slate-600 max-w-3xl mx-auto">BTEC results are qualification-specific. Use the official Pearson calculator to model an overall result, or use the limited Extended Diploma UCAS tariff lookup below once you already have a final grade.</p>
 </div>

 <BtecExtendedDiplomaTariffLookup />

 <div className="prose-custom mt-12">
 <h2>Why a generic percentage calculator cannot calculate a BTEC result</h2>
 <p>Pearson does not calculate every BTEC outcome by averaging percentage marks and credits. Its current calculators ask for the qualification size, sector and eligible optional units. They use awarded internal-unit grades and, for external units, points that are capped by that unit&apos;s guided-learning-hours size.</p>
 <p>For example, Pearson&apos;s BTEC Nationals AAQ calculator requires a qualification and sector before it shows the units. It then checks the chosen unit structure and total points before it returns an indicative qualification grade. That is materially different from a generic weighted-average tool.</p>

 <h2>Use the right Pearson calculator for your qualification</h2>
 <p>This page does <strong>not</strong> calculate an overall BTEC outcome from unit percentages. Use <a href="https://qualifications.pearson.com/en/support/support-topics/results-certification/understanding-marks-and-grades/using-the-next-generation-btec-nqf-grade-calculator.html" target="_blank" rel="noreferrer">Pearson&apos;s BTEC grade calculators</a> with your exact qualification title and specification. Pearson covers different BTEC Firsts, Tech Awards and BTEC Nationals with separate calculators and rules.</p>
 <p>If you are unsure which qualification you study, ask your school or college before entering results. Your qualification&apos;s specification is the source of truth for required units, assessment types, points and certification thresholds.</p>

 <h2>Limited scope: Extended Diploma UCAS tariff points</h2>
 <p>The lookup above is limited to an already-awarded <strong>2016-RQF BTEC National Extended Diploma</strong> final grade. It is a tariff lookup, not a qualification-grade predictor. Compare its values with <a href="https://qualifications.pearson.com/en/support/support-topics/understanding-our-qualifications/comparing-btec-to-other-qualifications/btec-ucas-points.html" target="_blank" rel="noreferrer">Pearson&apos;s BTEC and UCAS points table</a>.</p>
 <table>
 <thead><tr><th>Final Extended Diploma grade</th><th>UCAS tariff points</th></tr></thead>
 <tbody>{extendedDiplomaTariff.map((entry) => <tr key={entry.grade}><td>{entry.grade}</td><td>{entry.points}</td></tr>)}</tbody>
 </table>
 <p>Always check the course&apos;s current entry requirements. A tariff total does not establish that a university accepts a particular BTEC title, subject combination or entry profile.</p>

 <h2>How Pearson&apos;s qualification calculations work</h2>
 <ol>
 <li>Select the exact qualification size and sector.</li>
 <li>Select the permitted optional units so that the qualification structure is valid.</li>
 <li>Enter awarded internal grades and external-unit points in the format Pearson specifies.</li>
 <li>Check the resulting points total and qualification threshold against the current specification.</li>
 </ol>
 <p>Pearson presents its own calculator as a modelling tool only. Your final grade remains subject to the qualification&apos;s certification rules and Pearson&apos;s final result process.</p>

 <h2>BTEC Nationals, Firsts and Tech Awards Are Different Qualifications</h2>
 <p>
 &ldquo;BTEC&rdquo; is a family of qualifications, not one grading system. BTEC Nationals (including the Extended Diploma covered by the lookup above) are Level 3 qualifications aimed at progression to university or employment. BTEC Firsts are generally Level 2, and BTEC Tech Awards are Key Stage 4 qualifications for 14- to 16-year-olds. Each family has its own specifications, unit structures, grading scales, and calculators on Pearson&apos;s site, so a rule that applies to one BTEC does not automatically apply to another.
 </p>
 <p>
 Even within BTEC Nationals, the qualification size matters: an Extended Diploma, a Diploma, a Foundation Diploma, and a Certificate differ in guided learning hours, the number of units, and the grades available. The lookup on this page is limited to the 2016-RQF BTEC National Extended Diploma precisely because its tariff mapping is fixed for a final awarded grade. For any other size or family, use Pearson&apos;s calculator for your exact qualification title.
 </p>

 <h2>How Unit Grades Become a Qualification Grade</h2>
 <p>
 For the relevant Pearson qualification, eligible unit outcomes are converted to points, the required units and valid combination are checked, and the specification&apos;s grade thresholds are applied. Internal units are graded by your school or college against Pearson&apos;s criteria; external units are assessed by Pearson and carry points capped by the unit&apos;s guided-learning-hours size. A unit grade on its own therefore does not translate directly into a qualification grade — the points total and the thresholds decide the outcome.
 </p>
 <p>
 This is also why Distinction star (D*) needs care. In several Pearson RQF qualifications, D* is an aggregated qualification grade rather than a grade you can earn on an individual unit. Whether D* is available, and at what points threshold, depends on the qualification. Check your specification rather than assuming D* works the same way across BTECs.
 </p>

 <h2>External Assessment, Resits and Retakes</h2>
 <p>
 Many BTEC Nationals include externally assessed units alongside internally assessed ones. External assessment rules, resit opportunities, and retake limits are set by Pearson for each qualification and can change between specifications. If you are retaking an external unit or an internally assessed unit, confirm in your current specification whether the retake replaces the earlier grade, whether a cap applies, and whether the retake affects the overall points total. Your school or college can confirm the rules for your cohort.
 </p>

 <h2>BTEC Grades and UCAS Tariff: What Universities Actually Look At</h2>
 <p>
 UCAS tariff points are a shorthand that lets universities compare different qualifications, but they are only one part of an application. A course&apos;s entry requirements usually name the accepted qualification titles and grades — for example, &ldquo;DDD in a BTEC National Extended Diploma&rdquo; — and may also require specific subjects, a particular unit combination, or GCSE grades. A tariff total that matches the points requirement does not establish that the university accepts your BTEC title, subject, or entry profile.
 </p>
 <p>
 Some competitive courses also look beyond the tariff: personal statements, references, interviews, admissions tests, and portfolios can all matter. If a course lists BTEC requirements, compare your exact qualification title and grade against that list, and contact the university&apos;s admissions team if your combination is unusual. The <Link href="/blog/uk-degree-classifications-explained/">degree classifications guide</Link> explains what happens to grading once you start university, where percentages and credit weightings replace BTEC points entirely.
 </p>

 <h2>Moving from a BTEC to university</h2>
 <p>A BTEC tariff result is used for university applications, while a degree classification is calculated from university-level assessment. If you already study at university, use our <Link href="/">university grade calculator</Link> or <Link href="/weighted-grade-calculator/">weighted grade calculator</Link> instead.</p>
 </div>

 <FAQ items={faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 </>
 );
}
