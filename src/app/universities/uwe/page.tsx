import type { Metadata } from "next";
import UniversityPage from "@/components/UniversityPage";
import { universities } from "@/data/universities";
import { generateSEO, generateFAQSchema, generateToolSchema } from "@/lib/seo";

const uni = universities[9];

export const metadata: Metadata = generateSEO({
  title: "UWE Grade Calculator - University of the West of England",
  description: "Free UWE Bristol grade calculator. Calculate your University of the West of England degree classification.",
  path: "/universities/uwe/",
});

export default function Page() {
  const toolSchema = generateToolSchema(uni.name + " Grade Calculator", uni.description, "https://uk-grade-calculator.vercel.app/universities/uwe/");
  const faqSchema = generateFAQSchema(uni.faqs);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <UniversityPage uni={uni} />
    </>
  );
}
