import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "Privacy and Cookie Information",
 description: "How UK Grade Calculator handles calculation data, analytics and advertising technology.",
 path: "/privacy/",
});

export default function PrivacyPage() {
 return (
  <div className="container-main py-8">
   <Breadcrumb items={[{ label: "Privacy" }]} />
   <div className="prose-custom max-w-3xl">
    <h1>Privacy and cookie information</h1>
    <p>Last updated: 19 October 2026.</p>

    <h2>Your grade calculations</h2>
    <p>
     The marks, credits and targets you enter in the calculators are processed in your browser. We do not ask you to create an account or send those calculation inputs to our server.
    </p>

    <h2>Analytics and advertising technology</h2>
    <p>
     We use Google Analytics to understand aggregate use of the site, such as which calculators and guides are visited. We also use Google advertising technology to help fund the free tools.
    </p>
    <p>
     These services may use cookies or similar storage to measure visits and advertising activity. Read Google&apos;s information below for the controls available in your browser and Google account.
    </p>

    <h2>Third-party services</h2>
    <p>
     Google processes data under its own terms and privacy information. Read Google&apos;s <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noreferrer">cookie information</a> for more detail.
    </p>

    <h2>Your controls</h2>
    <p>
     You can manage cookies in your browser settings and use the controls available through your Google account. See Google&apos;s privacy and cookie information below for more detail.
    </p>

    <h2>Contact</h2>
    <p>
     For a privacy question or to report an issue, use our <Link href="/contact/">public contact route</Link>. Please do not send personal, academic or sensitive information through the feedback form.
    </p>
   </div>
  </div>
 );
}
