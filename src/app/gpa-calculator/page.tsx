import type { Metadata } from "next";
import Link from "next/link";
import GradeCalculator from "@/components/GradeCalculator";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEO, generateToolSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "GPA Calculator UK - Convert to GPA",
 description:
 "Free UK GPA calculator. Convert university percentage grades to the GPA scale for international applications and postgraduate study.",
 path: "/gpa-calculator/",
});

const faqs = [
 { question: "Is there an official UK-to-GPA conversion?", answer: "No. There is no single official conversion from UK percentage marks or degree classifications to a 4.0 GPA. Universities, credential evaluators, employers and scholarship providers can use different methods." },
 { question: "What does this calculator show?", answer: "It produces an illustrative 4.0-scale estimate from the marks and credits you enter. Use it for planning only, not as an official conversion for an application." },
 { question: "What should I submit with an international application?", answer: "Follow the receiving institution's instructions. Usually this means your official transcript and degree certificate or classification. If it requests a conversion, use its published method or the credential evaluator it names." },
 { question: "Can a 2:1 or a First be converted to one fixed GPA?", answer: "No. A UK classification is not a universal GPA value. A receiving institution may evaluate your overall average, individual modules, credits, institution or course level differently." },
 { question: "Should I convert each module separately?", answer: "Only if the receiving institution asks for a module-by-module conversion and gives a method. Otherwise, do not assume that an illustrative module conversion is the figure it will use." },
 { question: "Do UK universities use GPA on official records?", answer: "UK institutions commonly issue percentage marks and degree classifications, but practices vary. Your university's transcript and academic regulations are the authoritative record for your course." },
];

const relatedLinks = [
 { title: "University Grade Calculator", href: "/", description: "Calculate your UK degree classification from module grades." },
 { title: "Module Grade Calculator", href: "/module-grade-calculator/", description: "Calculate individual module percentage grades." },
 { title: "Degree Classification Calculator", href: "/degree-classification-calculator/", description: "Check which classification your average corresponds to." },
 { title: "UK Degree Classifications Explained", href: "/blog/uk-degree-classifications-explained/", description: "Comprehensive guide to the UK grading system." },
];

export default function GPACalculatorPage() {
 const toolSchema = generateToolSchema("GPA Calculator UK", "Convert UK university percentage grades to GPA scale for international applications.", "https://unigradecalculator.co.uk/gpa-calculator/");
 
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />

 <div className="container-main py-8">
 <Breadcrumb items={[{ label: "GPA Calculator" }]} />

 <div className="text-center mb-10">
 <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
 GPA Calculator UK
 </h1>
 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
 Enter confirmed module percentages and credits to see your UK average, classification and an illustrative 4.0-scale GPA estimate. Check the receiving institution&apos;s own conversion method before using it in an application.
 </p>
 </div>

 <GradeCalculator type="gpa" showTarget={true} showCredits={true} />

 <div className="prose-custom mt-12">
 <h2>UK GPA Calculator: An Illustrative Estimate, Not an Official Conversion</h2>
 <p>
 This GPA calculator turns the confirmed module percentages and credits you enter into a transparent 4.0-scale <strong>planning estimate</strong>. It is designed to help you understand your marks before you begin an international application. It does not create an official UK-to-GPA conversion, and it cannot decide how an admissions team, employer, scholarship provider or credential evaluator will assess your qualification.
 </p>
 <p>
 There is no one conversion rule used by every organisation. A receiver may assess an overall degree result, every module on a transcript, the credit system, the award level or its own entry policy. Always treat your university transcript and classification as the authoritative record.
 </p>

 <h2>How to Use This UK GPA Calculator</h2>
 <ol>
 <li><strong>Use confirmed results.</strong> Enter the percentage and credit value shown on your transcript or results record for each relevant module.</li>
 <li><strong>Check the scope first.</strong> Include only the modules or years that the application, evaluator or your course rules make relevant.</li>
 <li><strong>Read the estimate as a scenario.</strong> The calculator shows the result produced by its stated 4.0-scale mapping, not a result awarded by your university.</li>
 <li><strong>Follow the receiving institution&apos;s method.</strong> If it publishes a conversion table, requests a named credential evaluator or says not to self-convert, its instructions take priority.</li>
 </ol>
 <p>
 If you need to work out the UK average before considering a GPA estimate, use the <Link href="/weighted-grade-calculator/">weighted grade calculator</Link> first. It helps you model marks with different credit values.
 </p>

 <h2>Overall Estimate or Module-by-Module Estimate?</h2>
 <p>
 These are different tasks. An <strong>overall estimate</strong> starts with one confirmed average or classification. A <strong>module-by-module estimate</strong> applies a transparent mapping to each entered module and then weights those entries by their credits. Do not switch between them unless the receiving institution tells you which method it uses.
 </p>
 <table>
 <thead><tr><th>If the receiver asks for…</th><th>Safer next step</th></tr></thead>
 <tbody>
 <tr><td>Your official degree result</td><td>Report the percentage and classification exactly as your university records them.</td></tr>
 <tr><td>A specific conversion method</td><td>Use the method and rounding rule it publishes.</td></tr>
 <tr><td>A transcript review</td><td>Provide the transcript and grading information it requests; do not assume a single self-converted GPA will replace it.</td></tr>
 <tr><td>A credential evaluation</td><td>Use the named or accepted evaluator and follow its document requirements.</td></tr>
 </tbody>
 </table>

 <h2>Why Credits and Year Weightings Matter</h2>
 <p>
 A simple average treats every module equally. That can be misleading when one module carries more credits than another. This calculator uses the credit values you enter, so a higher-credit module has more influence on the estimate. Check the credits on your official record rather than assuming that every module has the same value.
 </p>
 <p>
 Year weightings are a separate rule. Some programmes combine year averages using a published method, while others use different included-credit, rounding or profile rules. Calculate the relevant UK average using your programme&apos;s own rules before using an estimate for application planning.
 </p>

 <h2>Before an International Application: Document Checklist</h2>
 <ul>
 <li><strong>Official transcript:</strong> request it early and confirm that it includes the module marks and credits the receiver needs.</li>
 <li><strong>Degree certificate or final classification:</strong> provide the document requested for a completed award.</li>
 <li><strong>Grading information:</strong> include your university&apos;s grading-scale explanation if the receiver asks for it.</li>
 <li><strong>Programme-specific instructions:</strong> record whether it asks for an overall figure, an external evaluation or no self-conversion.</li>
 <li><strong>Deadline allowance:</strong> leave time for transcript production, certified copies or a required evaluation.</li>
 </ul>

 <h2>What This Calculator Cannot Decide</h2>
 <p>
 The calculator cannot determine whether you meet an entry requirement, whether a university will accept a classification, or how an application will be ranked. It also cannot reproduce rules that are not in its inputs, such as a receiver&apos;s institutional preference, a specific subject requirement or an external evaluator&apos;s methodology.
 </p>
 <p>
 If an application asks for a GPA but supplies no conversion method, contact the admissions team or follow its guidance. Do not present an illustrative estimate as an official equivalence.
 </p>

 <h2>A Transparent Planning Example</h2>
 <p>
 Imagine a transcript with three confirmed modules: 68% in a 20-credit module, 64% in a 20-credit module and 70% in a 40-credit module. The UK credit-weighted average is calculated from the marks and credits: (68 × 20 + 64 × 20 + 70 × 40) ÷ 80 = 68%. The larger module has more influence because it carries more credits.
 </p>
 <p>
 That calculation gives a transparent UK average. What happens next depends on the receiver. If it gives a conversion method, apply that exact method. If it asks for the transcript, submit the transcript. If it uses an evaluator, do not substitute this calculator&apos;s estimate for the evaluator&apos;s result. The useful part of a planning tool is seeing how your confirmed record fits together, not guessing an official outcome.
 </p>

 <h2>Choosing the Right Next Step</h2>
 <table>
 <thead><tr><th>Your situation</th><th>What to do next</th></tr></thead>
 <tbody>
 <tr><td>You are still studying</td><td>Use confirmed marks only, keep provisional results separate and update your UK average as new results are issued.</td></tr>
 <tr><td>You have a completed degree</td><td>Start with the official overall percentage and classification on your university documents.</td></tr>
 <tr><td>An application asks for a GPA but gives no method</td><td>Read all application guidance, then ask the receiving team whether it wants a self-reported estimate, transcript review or formal evaluation.</td></tr>
 <tr><td>An application has a required GPA</td><td>Do not assume a UK percentage clears that threshold. Check how that institution evaluates UK qualifications.</td></tr>
 <tr><td>You are comparing course options</td><td>Use the estimate only as one planning input alongside the course&apos;s published entry requirements, costs and fit.</td></tr>
 </tbody>
 </table>

 <h2>How to Read the Result on This Page</h2>
 <p>
 The calculator displays three separate ideas. Your <strong>overall grade</strong> is the credit-weighted percentage created from the modules you enter. Your <strong>UK classification band</strong> is a provisional comparison with common undergraduate bands. The <strong>illustrative 4.0-scale estimate</strong> is the result of this tool&apos;s stated mapping. These are different labels with different purposes.
 </p>
 <p>
 A course-specific classification can depend on more than a percentage. Its regulations may specify included credits, year weighting, compensation, capped marks, rounding or a profile calculation. For that reason, a calculator result should help you prepare questions for your institution or application, not replace the outcome it records.
 </p>

 <h2>When a Credit-Weighted Estimate Is Useful</h2>
 <p>
 Credit weighting is useful when your record includes modules with different sizes. It stops a small module from carrying the same influence as a larger project merely because both appear once in a list. It is also useful for checking your own arithmetic before you submit a transcript or ask an admissions team about its process.
 </p>
 <p>
 It is not useful to invent missing information. If you do not know the credit values, cannot confirm which modules count, or have only a final classification, use the official result you do have and seek the receiver&apos;s guidance. A more precise-looking number is not necessarily a more reliable one.
 </p>

 <h2>Questions to Resolve Before You Apply</h2>
 <ul>
 <li>Does the application ask for a GPA, a percentage, a classification or all three?</li>
 <li>Does it publish a UK qualification requirement instead of a GPA threshold?</li>
 <li>Does it want every module, only the final years, or an overall award result?</li>
 <li>Does it specify a required credential evaluator or document format?</li>
 <li>Does it explain how to report results that are still provisional?</li>
 </ul>
 <p>
 Keeping these answers with your application documents makes it easier to use the calculator responsibly and prevents an illustrative estimate from being mistaken for an official conversion.
 </p>

 <h2>Common Mistakes When Converting UK Grades to GPA</h2>
 <ul>
 <li><strong>Using an unconfirmed mark.</strong> Update the estimate when a provisional result changes or a final result is issued.</li>
 <li><strong>Ignoring credit values.</strong> A higher-credit module can change a weighted estimate more than a lower-credit module.</li>
 <li><strong>Treating a classification as a fixed GPA.</strong> A First, 2:1, 2:2 or Third is not a universal GPA value.</li>
 <li><strong>Applying a country-wide rule to one institution.</strong> The receiving organisation&apos;s policy is the rule that matters for that application.</li>
 <li><strong>Replacing official documents with a calculator result.</strong> Keep the transcript and classification at the centre of the application.</li>
 </ul>

 <h2>Related UK Grade Tools</h2>
 <p>
 Start with the <Link href="/">university grade calculator</Link> for a provisional UK credit-weighted average. Use the <Link href="/module-grade-calculator/">module grade calculator</Link> when you need to combine assessment components within one module, and the <Link href="/final-grade-calculator/">final grade calculator</Link> when you want to model the average needed across remaining relevant credits.
 </p>
 </div>

 <FAQ items={faqs} />
 <InternalLinks links={relatedLinks} />
 </div>
 </>
 );
}
