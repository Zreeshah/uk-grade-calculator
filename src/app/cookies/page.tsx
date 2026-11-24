import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "Cookie Information",
 description: "How UK Grade Calculator uses cookies: Google Analytics for aggregate usage, Google AdSense advertising when live, and local storage for calculator values.",
 path: "/cookies/",
});

export default function CookiesPage() {
 return (
  <div className="container-main py-8">
   <Breadcrumb items={[{ label: "Cookie Information" }]} />
   <div className="prose-custom max-w-3xl">
    <h1>Cookie information</h1>
    <p>Last updated: November 2026.</p>
    <p>
     This page explains the cookies and similar storage used by UK Grade Calculator, operated by Connie D Johnson.
     A cookie is a small file stored in your browser. This site uses cookies only for the purposes listed below.
    </p>

    <h2>Analytics cookies</h2>
    <p>
     We use Google Analytics 4 (measurement ID G-CQY69SX742) to understand aggregate use of the site, such as which calculators and guides are visited. Google Analytics may set cookies in your browser and may collect your IP address and device information. We use this data only in aggregate and do not use it to identify individual visitors. You can opt out of Google Analytics with Google&apos;s opt-out tools or by blocking cookies in your browser.
    </p>

    <h2>Advertising cookies</h2>
    <p>
     We intend to show advertising from Google AdSense to help fund the free tools. No advertising is displayed on the site yet, and no AdSense code is currently loaded. When advertising is shown, Google may use cookies and similar storage to serve and measure ads, including personalised advertising where applicable. Consent for advertising cookies will be collected through Google Funding Choices, Google&apos;s consent management platform for AdSense, and you will be able to withdraw or change that consent at any time through the Funding Choices controls shown with the ads.
    </p>

    <h2>Calculator storage</h2>
    <p>
     The calculators may save the values you enter in your browser&apos;s local storage so that a page remembers them while you work. This storage stays on your device; it is not sent to our server. Clearing your browser data removes it. Blocking cookies will not stop the calculators from working.
    </p>

    <h2>How to manage cookies</h2>
    <p>
     You can delete or block cookies in your browser settings — every modern browser lets you clear cookies for a single site or for all sites, and to block third-party cookies. You can also manage advertising personalisation in your Google account settings. If you block analytics cookies, the calculators and guides will continue to work normally.
    </p>

    <h2>More information</h2>
    <p>
     Read our <Link href="/privacy/">privacy and cookie information</Link> for the full picture, including third-party services and data retention. For questions about cookies, email <a href="mailto:contact@unigradecalculator.co.uk">contact@unigradecalculator.co.uk</a> or use our <Link href="/contact/">contact form</Link>.
    </p>
   </div>
  </div>
 );
}
