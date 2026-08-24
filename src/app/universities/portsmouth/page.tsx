import type { Metadata } from "next";
import UniversityPage from "@/components/UniversityPage";
import { universities } from "@/data/universities";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

const uni = universities[3];

export const metadata: Metadata = generateSEO({
 title: "Portsmouth Grade Calculator - University of Portsmouth",
 description: "Free University of Portsmouth grade calculator. Calculate your degree classification using Portsmouth's 33/67 year weighting system.",
 path: "/universities/portsmouth/",
});

export default function Page() {
 const toolSchema = generateToolSchema(uni.name + " Grade Calculator", uni.description, "https://uk-grade-calculator.vercel.app/universities/portsmouth/");
 const faqSchema = generateFAQSchema(uni.faqs);
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <UniversityPage uni={uni} />
 </>
 );
}
