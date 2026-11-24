import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "Privacy and Cookie Information",
 description: "How UK Grade Calculator handles calculation data, Google Analytics (GA4) and Google AdSense advertising. Operated by Connie D Johnson. Contact: contact@unigradecalculator.co.uk.",
 path: "/privacy/",
});

export default function PrivacyPage() {
 return (
  <div className="container-main py-8">
   <Breadcrumb items={[{ label: "Privacy" }]} />
   <div className="prose-custom max-w-3xl">
    <h1>Privacy and cookie information</h1>
    <p>Last updated: November 2026.</p>
    <p>
     UK Grade Calculator is operated by Connie D Johnson, 130 General Nelson Dr, Richmond, Kentucky, 40475.
     This page explains what data this site collects, what it does not collect, and how to contact us about privacy.
    </p>

    <h2>Your grade calculations</h2>
    <p>
     The marks, credits and targets you enter in the calculators are processed in your browser. We do not ask you to create an account, and we do not send those calculation inputs to our server or store them. Closing the page discards them. If you use the contact form, only the details you type into that form are sent — see &ldquo;Contact&rdquo; below.
    </p>

    <h2>Analytics: Google Analytics</h2>
    <p>
     We use Google Analytics 4 (measurement ID G-CQY69SX742) to understand aggregate use of the site, such as which calculators and guides are visited and how often. Google Analytics may collect your IP address, device and browser information, and cookie identifiers, and it may set cookies in your browser. We use this data only in aggregate — for example, to decide which calculators need better explanations — and we do not use it to identify individual visitors.
    </p>

    <h2>Advertising: Google AdSense</h2>
    <p>
     We intend to show advertising from Google AdSense to help fund the free tools. No advertising is displayed on the site yet, and no AdSense code is currently loaded. When advertising is shown, Google may use cookies and similar storage to serve and measure ads, including personalised advertising where applicable. Google collects and processes that advertising data under its own terms and privacy information.
    </p>
    <p>
     When advertising is live, consent for advertising cookies will be collected through Google Funding Choices, Google&apos;s consent management platform for AdSense. You will be able to withdraw or change that consent at any time through the Funding Choices controls shown with the ads.
    </p>

    <h2>Cookies and similar storage</h2>
    <p>
     This site uses cookies and local storage in three ways: Google Analytics cookies for aggregate usage measurement (described above); advertising cookies from Google when AdSense is live (described above); and your browser&apos;s own local storage for the calculator&apos;s convenience features, such as remembering values you entered on the page. No cookie on this site contains your name, student number, or marks.
    </p>
    <p>
     You can delete cookies and clear local storage in your browser settings at any time. Blocking cookies will not stop the calculators from working.
    </p>

    <h2>Third-party services</h2>
    <p>
     Google processes analytics and advertising data under its own terms and privacy information. Read Google&apos;s <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noreferrer">cookie information</a> for more detail.
    </p>
    <p>
     Some pages link to external services, such as Pearson&apos;s official grade calculators, university regulation documents, and a Gumroad page where a degree-planning download is sold. If you follow one of those links or make a purchase there, that service processes your data under its own privacy policy, not this one.
    </p>

    <h2>Contact form data</h2>
    <p>
     If you send us a message through the <Link href="/contact/">contact form</Link> or by email, we receive the name, email address, subject and message you provide. We use those details only to reply to you and to fix the issue you reported. We do not sell contact-form data or share it with third parties for marketing. The contact form does not send your message through our servers: it opens your own email app with a pre-filled email to contact@unigradecalculator.co.uk, and the message travels through your own email provider, not through any service run by this site.
    </p>

    <h2>Data retention</h2>
    <p>
     We keep contact messages only as long as needed to reply and to follow up on the issue raised — normally no longer than 12 months. Analytics data is retained by Google Analytics under its standard retention settings. We do not keep any record of the grades you calculate.
    </p>

    <h2>Your controls</h2>
    <p>
     You can manage cookies in your browser settings, use your Google account controls to manage advertising personalisation, and ask us to delete a contact message you sent. See Google&apos;s privacy and cookie information above for more detail.
    </p>

    <h2>Contact</h2>
    <p>
     For a privacy question, a correction, or to ask us to delete a message you sent, email{" "}
     <a href="mailto:contact@unigradecalculator.co.uk">contact@unigradecalculator.co.uk</a> or use our{" "}
     <Link href="/contact/">contact form</Link>. We aim to reply within 48 hours on working days. Please do not send personal, academic or sensitive information through the feedback form.
    </p>
   </div>
  </div>
 );
}
