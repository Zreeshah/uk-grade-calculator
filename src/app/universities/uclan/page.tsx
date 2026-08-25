import type { Metadata } from "next";
import UniversityPage from "@/components/UniversityPage";
import { universities } from "@/data/universities";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

const uni = universities[8];

export const metadata: Metadata = generateSEO({
 title: "UCLan Grade Calculator - University of Central Lancashire",
 description: "Free UCLan grade calculator. Calculate your University of Central Lancashire degree classification with customisable year weightings.",
 path: "/universities/uclan/",
});

export default function Page() {
 const toolSchema = generateToolSchema(uni.name + " Grade Calculator", uni.description, "https://unigradecalculator.co.uk/universities/uclan/");
 const faqSchema = generateFAQSchema(uni.faqs);
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <UniversityPage uni={uni} />
 </>
 );
}
