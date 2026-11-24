import type { Metadata } from "next";
import UniversityPage from "@/components/UniversityPage";
import { universities } from "@/data/universities";
import { generateSEO, generateToolSchema } from "@/lib/seo";

const uni = universities[8];

export const metadata: Metadata = generateSEO({
 title: "University of Lancashire Grade Calculator",
 description: "Free University of Lancashire grade calculator (formerly UCLan). Calculate your degree classification with the Award Percentage Mark: best of the 2:8 method, the best-100-Level-6 method, or the profile method.",
 path: "/universities/uclan/",
});

export default function Page() {
 const toolSchema = generateToolSchema(uni.name + " Grade Calculator", uni.description, "https://unigradecalculator.co.uk/universities/uclan/");
  return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <UniversityPage uni={uni} />
 </>
 );
}
