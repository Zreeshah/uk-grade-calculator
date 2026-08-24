import type { Metadata } from "next";
import GradeCalculator from "@/components/GradeCalculator";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import ClassificationTable from "@/components/ClassificationTable";
import Breadcrumb from "@/components/Breadcrumb";
import { degreeClassifications } from "@/lib/grades";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

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
    "https://uk-grade-calculator.vercel.app/module-grade-calculator/"
  );
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container-main py-8">
        <Breadcrumb items={[{ label: "Module Grade Calculator" }]} />

        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Module Grade Calculator
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Calculate your individual module grades with credit-weighted accuracy. Enter your assessment marks and their weightings to find your overall module percentage.
          </p>
        </div>

        <GradeCalculator type="module" showTarget={true} showCredits={true} defaultCredits="20" />

        <div className="prose-custom mt-12">
          <h2>How to Calculate Your Module Grade</h2>
          <p>
            A module grade in the UK university system is calculated by combining all assessment components within that module according to their assigned weightings. This is not a simple average. Each assessment component contributes to your final module mark in proportion to its weighting, which is set out in your module handbook at the start of the academic year.
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
            A full academic year requires 120 credits (1,200 hours of study). A standard three-year undergraduate degree totals 360 credits. These study hours include lectures, seminars, independent reading, assessment preparation, and the assessments themselves.
          </p>

          <h2>Why Credit Weighting Matters</h2>
          <p>
            Not all modules contribute equally to your degree classification. A 40-credit dissertation has exactly twice the impact of a 20-credit module. This is by design: your dissertation represents a significant independent research project that demonstrates your ability to work autonomously at degree level.
          </p>
          <p>
            This means you should allocate your study time proportionally. If you have a 40-credit dissertation and a 20-credit elective, the dissertation deserves roughly twice as much of your time and effort. Students who treat all modules equally often underperform on high-credit assessments and overinvest in lower-credit ones.
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

          <h2>Tips for Maximising Your Module Grades</h2>
          <ul>
            <li><strong>Read the marking criteria carefully.</strong> Every module has published assessment criteria that tell you exactly what markers are looking for at each classification level. Study these before starting your work.</li>
            <li><strong>Front-load high-weight assessments.</strong> If your exam is worth 60%, start revision early and treat it as the priority. Do not let coursework deadlines push exam preparation to the last minute.</li>
            <li><strong>Use past papers.</strong> For exam modules, past papers are the single most effective revision tool. They show you the question format, topic coverage, and expected depth of answer.</li>
            <li><strong>Seek formative feedback.</strong> Many lecturers offer draft feedback on coursework or hold office hours where you can discuss your approach. Use these opportunities.</li>
            <li><strong>Manage your time across modules.</strong> A 40-credit module deserves twice the time of a 20-credit module. Timetable your study proportionally.</li>
          </ul>
        </div>

        <FAQ items={faqs} />
        <InternalLinks links={relatedLinks} />
      </div>
    </>
  );
}
