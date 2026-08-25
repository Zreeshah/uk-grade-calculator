import type { Metadata } from "next";
import UniversityPage from "@/components/UniversityPage";
import { universities } from "@/data/universities";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

const uni = universities[6];

export const metadata: Metadata = generateSEO({
 title: "Sheffield Hallam Grade Calculator - SHU Degree Classification",
 description: "Free Sheffield Hallam University grade calculator. Calculate your SHU degree classification using the 33/67 year weighting system.",
 path: "/universities/sheffield-hallam/",
});

export default function Page() {
 const toolSchema = generateToolSchema(uni.name + " Grade Calculator", uni.description, "https://unigradecalculator.co.uk/universities/sheffield-hallam/");
 const faqSchema = generateFAQSchema(uni.faqs);
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <UniversityPage uni={uni} />
 </>
 );
}
