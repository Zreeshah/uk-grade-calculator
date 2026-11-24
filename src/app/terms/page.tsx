import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "Terms of Use",
 description: "Terms of use for UK Grade Calculator. Free grade tools operated by Connie D Johnson. Results are provisional planning estimates, not official classifications.",
 path: "/terms/",
});

export default function TermsPage() {
 return (
  <div className="container-main py-8">
   <Breadcrumb items={[{ label: "Terms of Use" }]} />
   <div className="prose-custom max-w-3xl">
    <h1>Terms of use</h1>
    <p>Last updated: November 2026.</p>
    <p>
     UK Grade Calculator is operated by Connie D Johnson, 130 General Nelson Dr, Richmond, Kentucky, 40475.
     By using this site you agree to these terms. If you do not agree, please do not use the calculators or guides.
    </p>

    <h2>What this site provides</h2>
    <p>
     This site provides free grade calculators and educational guides for UK university and college students. The tools cover module grades, weighted averages, degree classifications, BTEC UCAS tariff points, GPA conversion, and university-specific grade calculations. All features are free to use and no account or registration is required.
    </p>

    <h2>Results are provisional estimates</h2>
    <p>
     Every result on this site is a provisional planning estimate, not an official result. Degree classifications depend on your university&apos;s academic regulations, your programme&apos;s rules on year weightings, borderline cases, resit caps and discretionary decisions, and the exam board&apos;s final decision. BTEC overall grades depend on Pearson&apos;s specification for your exact qualification. Always confirm an official classification with your university or awarding body before acting on an estimate.
    </p>
    <p>
     We take care to base the calculators on published rules and to link to official sources, but we do not guarantee that any result is correct for your individual circumstances. We are not responsible for decisions made on the basis of an estimate from this site, including module choices, resit decisions, or applications.
    </p>

    <h2>Acceptable use</h2>
    <p>
     You may use the calculators and guides for your own study planning. You must not use the site to misrepresent your grades, to submit false information to a university or employer, or to interfere with the site or its hosting. Automated bulk use that degrades the service for other visitors is not permitted.
    </p>

    <h2>Your inputs</h2>
    <p>
     The marks and credits you enter are processed in your browser and are not sent to our server or stored. See our <Link href="/privacy/">privacy and cookie information</Link> for details. If you send us a message through the contact form, we use the details you provide only to reply and to fix the issue you reported.
    </p>

    <h2>External links and resources</h2>
    <p>
     This site links to external sources, including university regulation documents, Pearson&apos;s official calculators, UCAS, and a Gumroad page where a degree-planning download is sold. We are not responsible for the content, availability, or privacy practices of external sites, and a link does not imply endorsement or affiliation.
    </p>

    <h2>Intellectual property</h2>
    <p>
     The calculator tools, guides, and explanatory content on this site are the property of the operator unless otherwise stated. You may share links to our pages and quote short extracts with attribution. You may not copy substantial parts of the site or present them as your own work.
    </p>

    <h2>Changes to these terms</h2>
    <p>
     We may update these terms when the site or the services it uses change. The &ldquo;Last updated&rdquo; date at the top of this page shows when the current version was published. Continued use of the site after a change means you accept the updated terms.
    </p>

    <h2>Contact</h2>
    <p>
     For questions about these terms, email <a href="mailto:contact@unigradecalculator.co.uk">contact@unigradecalculator.co.uk</a> or use our <Link href="/contact/">contact form</Link>. We aim to reply within 48 hours on working days.
    </p>
   </div>
  </div>
 );
}
