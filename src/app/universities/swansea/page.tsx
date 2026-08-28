import type { Metadata } from "next";
import UniversityPage from "@/components/UniversityPage";
import { universities } from "@/data/universities";
import { generateSEO, generateToolSchema } from "@/lib/seo";

const uni = universities[5];

export const metadata: Metadata = generateSEO({
 title: "Swansea Grade Calculator - Swansea University",
 description: "Free Swansea University grade calculator. Calculate your degree classification using Swansea's year weighting system.",
 path: "/universities/swansea/",
});

export default function Page() {
 const toolSchema = generateToolSchema(uni.name + " Grade Calculator", uni.description, "https://unigradecalculator.co.uk/universities/swansea/");
  return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
 <UniversityPage uni={uni} />
 </>
 );
}
