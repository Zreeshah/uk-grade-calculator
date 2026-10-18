import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PrivacySettingsButton from "@/components/PrivacySettingsButton";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "Privacy Choices and Cookie Information",
 description: "How UK Grade Calculator handles calculation data, analytics, advertising technology and privacy choices.",
 path: "/privacy/",
});

export default function PrivacyPage() {
 return (
  <div className="container-main py-8">
   <Breadcrumb items={[{ label: "Privacy" }]} />
   <div className="prose-custom max-w-3xl">
    <h1>Privacy choices and cookie information</h1>
    <p>Last updated: 19 October 2026.</p>

    <h2>Your grade calculations</h2>
    <p>
     The marks, credits and targets you enter in the calculators are processed in your browser. We do not ask you to create an account or send those calculation inputs to our server.
    </p>

    <h2>Optional technologies</h2>
    <p>
     On your first visit, you can choose whether to allow analytics and advertising technology. We do not load Google Analytics or Google advertising scripts until you make a choice that allows the relevant category.
    </p>
    <ul>
     <li><strong>Analytics:</strong> Google Analytics helps us understand aggregate use of the site, such as which calculators and guides are visited.</li>
     <li><strong>Advertising:</strong> Google advertising technology may use cookies or similar storage to display and measure ads that support the free tools.</li>
    </ul>
    <p>Your choice is stored in your browser so that we can remember it. You can change it at any time.</p>
    <PrivacySettingsButton />

    <h2>Third-party services</h2>
    <p>
     If you allow a category, the relevant Google service processes data under its own terms and privacy information. Read Google&apos;s <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noreferrer">cookie information</a> for more detail.
    </p>

    <h2>Your controls</h2>
    <p>
     You can reject non-essential technologies, accept them, or enable each category separately in the privacy panel. You can also clear this site&apos;s browser storage to remove the saved choice; the panel will then be shown again.
    </p>

    <h2>Contact</h2>
    <p>
     For a privacy question or to report an issue, use our <Link href="/contact/">public contact route</Link>. Please do not send personal, academic or sensitive information through the feedback form.
    </p>
   </div>
  </div>
 );
}
