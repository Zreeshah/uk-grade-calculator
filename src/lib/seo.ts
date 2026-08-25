import type { Metadata } from "next";

interface SEOProps {
 title: string;
 description: string;
 path: string;
 type?: "website" | "article";
 publishedTime?: string;
 modifiedTime?: string;
 image?: string;
}

const SITE_NAME = "UK Grade Calculator";
const BASE_URL = "https://unigradecalculator.co.uk";

export function generateSEO({
 title,
 description,
 path,
 type = "website",
 publishedTime,
 modifiedTime,
 image,
}: SEOProps): Metadata {
 const url = `${BASE_URL}${path}`;
 const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;

 return {
 title: fullTitle,
 description,
 metadataBase: new URL(BASE_URL),
 alternates: {
 canonical: url,
 },
 openGraph: {
 title: fullTitle,
 description,
 url,
 siteName: SITE_NAME,
 type: type === "article" ? "article" : "website",
 locale: "en_GB",
 ...(publishedTime && { publishedTime }),
 ...(modifiedTime && { modifiedTime }),
 ...(image && {
 images: [{ url: `${BASE_URL}${image}`, width: 1200, height: 630, alt: title }],
 }),
 },
 twitter: {
 card: image ? "summary_large_image" : "summary",
 title: fullTitle,
 description,
 ...(image && { images: [`${BASE_URL}${image}`] }),
 },
 robots: {
 index: true,
 follow: true,
 googleBot: {
 index: true,
 follow: true,
 "max-snippet": -1,
 "max-image-preview": "large",
 },
 },
 };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
 return {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: faqs.map((faq) => ({
 "@type": "Question",
 name: faq.question,
 acceptedAnswer: {
 "@type": "Answer",
 text: faq.answer,
 },
 })),
 };
}

export function generateToolSchema(name: string, description: string, url: string) {
 return {
 "@context": "https://schema.org",
 "@type": "WebApplication",
 name,
 description,
 url,
 applicationCategory: "EducationalApplication",
 operatingSystem: "Any",
 offers: {
 "@type": "Offer",
 price: "0",
 priceCurrency: "GBP",
 },
 browserRequirements: "Requires JavaScript",
 softwareVersion: "1.0",
 };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
 return {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: items.map((item, index) => ({
 "@type": "ListItem",
 position: index + 1,
 name: item.name,
 item: `${BASE_URL}${item.url}`,
 })),
 };
}

export function generateArticleSchema(
 title: string,
 description: string,
 url: string,
 datePublished: string,
 dateModified: string
) {
 return {
 "@context": "https://schema.org",
 "@type": "Article",
 headline: title,
 description,
 url: `${BASE_URL}${url}`,
 datePublished,
 dateModified,
 publisher: {
 "@type": "Organization",
 name: SITE_NAME,
 },
 mainEntityOfPage: {
 "@type": "WebPage",
 "@id": `${BASE_URL}${url}`,
 },
 };
}
