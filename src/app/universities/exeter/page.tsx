import type { Metadata } from "next";
import UniversityPage from "@/components/UniversityPage";
import { universities } from "@/data/universities";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

const uni = universities[7];

export const metadata: Metadata = generateSEO({
  title: "Exeter Grade Calculator - University of Exeter",
  description: "Free University of Exeter grade calculator. Calculate your degree classification at this Russell Group university.",
  path: "/universities/exeter/",
});

export default function Page() {
  const toolSchema = generateToolSchema(uni.name + " Grade Calculator", uni.description, "https://uk-grade-calculator.vercel.app/universities/exeter/");
  const faqSchema = generateFAQSchema(uni.faqs);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <UniversityPage uni={uni} />
    </>
  );
}
