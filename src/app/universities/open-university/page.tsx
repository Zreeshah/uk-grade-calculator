import type { Metadata } from "next";
import UniversityPage from "@/components/UniversityPage";
import { universities } from "@/data/universities";
import { generateSEO, generateToolSchema } from "@/lib/seo";

const uni = universities[1];

export const metadata: Metadata = generateSEO({
 title: "Open University Grade Calculator - OU Degree Classification",
 description: "Free Open University grade calculator. Calculate your OU degree classification with credit accumulation across modules and levels.",
 path: "/universities/open-university/",
});

export default function Page() {
 const toolSchema = generateToolSchema(uni.name + " Grade Calculator", uni.description, "https://unigradecalculator.co.uk/universities/open-university/");
  return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <UniversityPage uni={uni} />
 </>
 );
}
