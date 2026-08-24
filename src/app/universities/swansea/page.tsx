import type { Metadata } from "next";
import UniversityPage from "@/components/UniversityPage";
import { universities } from "@/data/universities";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

const uni = universities[5];

export const metadata: Metadata = generateSEO({
  title: "Swansea Grade Calculator - Swansea University",
  description: "Free Swansea University grade calculator. Calculate your degree classification using Swansea's year weighting system.",
  path: "/universities/swansea/",
});

export default function Page() {
  const toolSchema = generateToolSchema(uni.name + " Grade Calculator", uni.description, "https://uk-grade-calculator.vercel.app/universities/swansea/");
  const faqSchema = generateFAQSchema(uni.faqs);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <UniversityPage uni={uni} />
    </>
  );
}
