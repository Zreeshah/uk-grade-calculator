import type { Metadata } from "next";
import UniversityPage from "@/components/UniversityPage";
import { universities } from "@/data/universities";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

const uni = universities[2];

export const metadata: Metadata = generateSEO({
 title: "St Andrews Grade Calculator - University of St Andrews",
 description: "Free St Andrews grade calculator. Calculate your University of St Andrews degree classification using the Scottish 4-year degree structure.",
 path: "/universities/st-andrews/",
});

export default function Page() {
 const toolSchema = generateToolSchema(uni.name + " Grade Calculator", uni.description, "https://unigradecalculator.co.uk/universities/st-andrews/");
 const faqSchema = generateFAQSchema(uni.faqs);
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <UniversityPage uni={uni} />
 </>
 );
}
