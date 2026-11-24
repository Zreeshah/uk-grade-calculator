import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import InternalLinks from "@/components/InternalLinks";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "About - Free Grade Tools for Students",
 description:
 "About UK Grade Calculator, free grade tools for UK university and college students. Operated by Connie D Johnson. No registration required; grade data is calculated in your browser.",
 path: "/about/",
});

const links = [
 { title: "University Grade Calculator", href: "/", description: "Calculate your overall degree classification." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Calculate individual module grades." },
 { title: "BTEC Grade Calculator", href: "/btec-grade-calculator/", description: "Find Pearson's official calculator and look up final Extended Diploma UCAS tariff points." },
 { title: "Masters Grade Calculator", href: "/masters-grade-calculator/", description: "Calculate postgraduate degree classifications." },
  { title: "Weighted Grade Calculator", href: "/weighted-grade-calculator/", description: "Apply credit and year weightings to your grades." },
  { title: "GPA Calculator UK", href: "/gpa-calculator/", description: "Convert UK grades to GPA for international applications." },
  { title: "UK Degree Classifications Explained", href: "/blog/uk-degree-classifications-explained/", description: "Complete guide to First, 2:1, 2:2, and Third class degrees." },
];

export default function AboutPage() {
 return (
 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "About" }]} />

 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
 About UK Grade Calculator
 </h1>

 <div className="prose-custom">
 <p>
 UK Grade Calculator is a free suite of university grade calculator tools for UK students who want a clear, provisional way to calculate grades. The site is designed to make common calculations easier without requiring an account or asking you to enter personal identity details.
 </p>

 <h2>Who Runs This Site</h2>
 <p>
 UK Grade Calculator is operated by <strong>Connie D Johnson</strong>, 130 General Nelson Dr, Richmond, Kentucky, 40475. She is responsible for the content on this site, including the calculator logic, the grade-boundary tables, and the guides on UK university grading.
 </p>
 <p>
 The site is an independent educational resource. It is not affiliated with, endorsed by, or operated on behalf of any university, UCAS, or Pearson. Where a page refers to a university&apos;s regulations or a Pearson specification, it links to that official source so you can verify the rule yourself. If you find an error, please tell us through the <Link href="/contact/">contact page</Link> — corrections are checked against the official source and fixed promptly.
 </p>

 <h2>How Our Calculators Are Checked</h2>
 <p>
 Every calculator on this site is built around published rules, not guesses. The degree-classification boundaries (First at 70%, 2:1 at 60%, 2:2 at 50%, Third at 40%) are the standard UK honours bands. The university-specific calculators use each university&apos;s published method where one is available — for example, the <Link href="/universities/mmu/">Manchester Metropolitan calculator</Link> uses MMU&apos;s published year weightings, and the <Link href="/middlesex-university-grade-calculator/">Middlesex calculator</Link> reflects the grade-profile method in Middlesex University&apos;s undergraduate regulations.
 </p>
 <p>
 BTEC results work differently from university grades, so the <Link href="/btec-grade-calculator/">BTEC page</Link> does not pretend a percentage average can produce a BTEC overall grade. It points you to Pearson&apos;s official grade calculators and provides only a UCAS tariff lookup for an already-awarded Extended Diploma grade. When a rule cannot be verified from an official source, the page says so instead of presenting an estimate as fact.
 </p>

 <h2>Why We Built This</h2>
 <p>
 We noticed that most existing UK grade calculators are either outdated, cluttered with intrusive advertising, or require signup before you can use the basic tool. Our <Link href="/">university grade calculator</Link> solves all of these problems. Many also lack proper explanations of how UK university grading actually works, leaving students to figure it out on their own.
 </p>
 <p>
 We wanted to create something better: a modern, mobile-friendly tool with comprehensive educational content that helps students not only calculate their grades but also understand the system behind them.
 </p>

 <h2>What We Offer</h2>
 <ul>
 <li><strong>Instant calculations.</strong> All calculations happen in your browser. There is no server processing, no loading times, and no data sent anywhere.</li>
 <li><strong>Credit-weighted calculations.</strong> Our tools use the standard <Link href="/blog/how-to-calculate-weighted-average/">credit-weighted average formula</Link> used in many UK degree calculations. Your course regulations determine the official method and result.</li>
 <li><strong>Target grade planning.</strong> Every calculator includes a target grade feature, and our dedicated <Link href="/final-grade-calculator/">final grade calculator</Link> lets you plan exactly what you need on remaining assessments.</li>
 <li><strong>Comprehensive guides.</strong> Each calculator page includes detailed explanations, worked examples, and frequently asked questions.</li>
 <li><strong>University-specific tools.</strong> We have tailored calculators for specific UK universities like <Link href="/universities/mmu/">Manchester Metropolitan</Link>, <Link href="/universities/leeds/">Leeds</Link>, and <Link href="/universities/open-university/">Open University</Link>, each with their exact grading scales and year weightings.</li>
 <li><strong>Completely free.</strong> No registration, no paywalls, no premium tiers. Every feature is available to every student.</li>
 </ul>

 <h2>How to Use a Grade Calculator Responsibly</h2>
 <p>
 A free grade calculator is best used as a planning tool. Enter confirmed marks, use the credit values in your module handbook, and keep any intermediate rounding to a minimum. If your course has a resit cap, a placement year, a special classification algorithm, or a borderline policy, check the academic regulations before acting on an estimate.
 </p>
 <p>
 Use the <Link href="/module-grade-calculator/">module grade calculator</Link> for assessment components, the <Link href="/weighted-grade-calculator/">weighted average calculator</Link> for unequal credits, and the <Link href="/degree-classification-calculator/">degree classification calculator</Link> to interpret an overall percentage. This sequence helps avoid mixing raw marks, module marks, and final degree averages.
 </p>

 <h2>Privacy and Data</h2>
 <p>
 We do not collect, store, or transmit the grade data you enter into the calculators. All calculations are performed in your browser. Read our <Link href="/privacy/">privacy and cookie information</Link> for details of the analytics and advertising technologies used on the site.
 </p>

 <h2>Accuracy Disclaimer</h2>
 <p>
 While the calculators use common UK degree-classification boundaries and credit-weighted formulas, individual universities and programmes can use rules that affect the result. These include borderline rules, module capping, year-weighting variations, and alternative classification algorithms. Always verify a final classification with your university&apos;s published regulations or student records team.
 </p>

 <h2>What the Calculators Cannot Do</h2>
 <p>
 A grade calculator can only work with the numbers you enter and the rules you select. It cannot know about programme variations, approved exceptions, extenuating circumstances, or discretionary decisions by an exam board. Two students with identical averages can receive different classifications if their programmes apply different borderline or capping rules. Treat every result here as a planning estimate and confirm the official outcome with your university.
 </p>
 <p>
 The tools also cannot replace your module handbook. Credit values, year weightings, and resit rules differ between courses, and a calculator set to the wrong weighting will give a confident-looking wrong answer. If a result surprises you, check the inputs first — a mistyped credit value is the most common cause — then check the regulations for your programme.
 </p>

 <h2>Contact</h2>
 <p>
 If you have suggestions for improving our calculators, notice an error, or want to request a university-specific calculator, use our <Link href="/contact/">contact page</Link> or email <a href="mailto:contact@unigradecalculator.co.uk">contact@unigradecalculator.co.uk</a>. We aim to reply within 48 hours on working days. We are continually improving and expanding our tools based on student feedback.
 </p>
 </div>

 <InternalLinks links={links} title="Our Calculators" />
 </div>
 );
}
