import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "Contact Us",
 description: "Contact UK Grade Calculator by email at contact@unigradecalculator.co.uk. Report a calculator issue, suggest an improvement or request a review of UK university grading guidance. We aim to reply within 48 hours on working days.",
 path: "/contact/",
});

export default function ContactPage() {
 return (
  <div className="container-main py-8">
   <Breadcrumb items={[{ label: "Contact" }]} />
   <div className="max-w-3xl">
    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Contact us</h1>
    <p className="mt-4 text-lg leading-relaxed text-slate-600">
     Report a calculation problem, suggest an improvement, or flag university guidance that should be checked against an official source.
    </p>
    <p className="mt-4 leading-relaxed text-slate-600">
     Email us directly at{" "}
     <a className="font-medium text-indigo-600 hover:underline" href="mailto:contact@unigradecalculator.co.uk">
      contact@unigradecalculator.co.uk
     </a>{" "}
     or use the form below. We aim to reply within 48 hours on working days.
    </p>
    <ContactForm />
    <p className="mt-6 text-sm text-slate-500">
     You can also report a public issue on{" "}
     <a className="font-medium text-indigo-600 hover:underline" href="https://github.com/Zreeshah/uk-grade-calculator/issues" target="_blank" rel="noreferrer">
      GitHub
     </a>
     . Please do not include personal information in a public issue.
    </p>
   </div>
  </div>
 );
}
