import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FeedbackForm from "@/components/FeedbackForm";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
 title: "Contact and Feedback",
 description: "Report a calculator issue, suggest an improvement or request a review of UK university grading guidance.",
 path: "/contact/",
});

export default function ContactPage() {
 return (
  <div className="container-main py-8">
   <Breadcrumb items={[{ label: "Contact" }]} />
   <div className="max-w-3xl">
    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Contact and feedback</h1>
    <p className="mt-4 text-lg leading-relaxed text-slate-600">
     Report a calculation problem, suggest an improvement, or flag university guidance that should be checked against an official source.
    </p>
    <FeedbackForm />
   </div>
  </div>
 );
}
