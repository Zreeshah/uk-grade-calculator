import type { Metadata } from "next";
import UniversityPage from "@/components/UniversityPage";
import { universities } from "@/data/universities";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

const uni = universities[4];

export const metadata: Metadata = generateSEO({
 title: "Leeds Grade Calculator - University of Leeds",
 description: "Free University of Leeds grade calculator. Calculate your degree classification at this Russell Group university with custom year weightings.",
 path: "/universities/leeds/",
});

export default function Page() {
 const toolSchema = generateToolSchema(uni.name + " Grade Calculator", uni.description, "https://uk-grade-calculator.vercel.app/universities/leeds/");
 const faqSchema = generateFAQSchema(uni.faqs);
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <UniversityPage uni={uni} />
 </>
 );
}
