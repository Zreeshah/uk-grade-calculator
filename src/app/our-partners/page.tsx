import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import InternalLinks from "@/components/InternalLinks";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Our Partners - Free Grade Tools for Students",
  description:
    "Our own public Google documents published by UniGrade Calculator: guides, data hub, presentation, calendar, map data and form.",
  path: "/our-partners/",
});

const googleResources = [
  {
    href: "https://drive.google.com/drive/folders/1pm43fp00eJgObrDrPO1mMehEcxs9eVTZ",
    label: "Drive hub",
    note: "The shared Drive folder holding our university grade resources.",
  },
  {
    href: "https://docs.google.com/spreadsheets/d/105b9f28RYkb7iaqVlxxfinsV1V69sXtQUNuc3ovyU0U/edit?usp=drivesdk",
    label: "Grade data hub (Sheets)",
    note: "The spreadsheet hub for our university grade data.",
  },
  {
    href: "https://docs.google.com/document/d/1q6UA4tfjsvw471KzxciYCxafC3enWToetO2WMpr1ge8/edit?usp=drivesdk",
    label: "University grade calculator guide (Doc)",
    note: "Our guide to the university grade calculator: how it works and what to enter.",
  },
  {
    href: "https://docs.google.com/document/d/1jLnuxOeBRVUJ65F806tU3iY-KOZYyjJ5hm-Xf8pqR-E/edit?usp=drivesdk",
    label: "Degree classification guide (Doc)",
    note: "Our guide to degree classifications: First, 2:1, 2:2, Third, and what each one means.",
  },
  {
    href: "https://docs.google.com/document/d/1EkHmXEfTqe5ozzcf4Yq7FY42XwBNKp_yZ4U1VvVn_L8/edit?usp=drivesdk",
    label: "Weighted grade calculator guide (Doc)",
    note: "Our guide to the weighted average maths behind your grade.",
  },
  {
    href: "https://docs.google.com/presentation/d/12mshPI2--MzlIQXYb3y7-yf-fuCTUJ_TolhN8x2pY_Q/edit?usp=drivesdk",
    label: "Presentation (Slides)",
    note: "Our university grade presentation.",
  },
  {
    href: "https://calendar.google.com/calendar/u/0/r?cid=7bb5292a2c58b5b9f0fd2b8bcd57ff689a8040cda3e1384af201c48caa9cbb8c@group.calendar.google.com",
    label: "Grade boundaries calendar",
    note: "University grade boundaries calendar published by UniGrade Calculator.",
  },
  {
    href: "https://drive.google.com/file/d/175DTxJ-mthhABvlw0whijb6CN6ZSmCct/view?usp=drivesdk",
    label: "UK grade regions map data (KML)",
    note: "Map data for UK university grade regions.",
  },
  {
    href: "https://docs.google.com/forms/d/1jy7ZINfK0uM4uOsBMl0Hzl4FbmqgjadJ8GH4zi4wBQI/edit?usp=drivesdk",
    label: "Intake form",
    note: "Contact and intake form published by UniGrade Calculator.",
  },
];

const links = [
  { title: "University Grade Calculator", href: "/", description: "Calculate your overall degree classification." },
  { title: "Degree Classification Calculator", href: "/degree-classification-calculator/", description: "Interpret an overall percentage as a classification." },
  { title: "Weighted Grade Calculator", href: "/weighted-grade-calculator/", description: "Apply credit and year weightings to your grades." },
  { title: "UK Degree Classifications Explained", href: "/blog/uk-degree-classifications-explained/", description: "Complete guide to First, 2:1, 2:2, and Third class degrees." },
];

export default function OurPartnersPage() {
  return (
    <div className="container-main py-8">
      <Breadcrumb items={[{ label: "Our Partners" }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Our Partners
      </h1>

      <div className="prose-custom">
        <p>
          This page lists our own public Google documents published by UniGrade Calculator.
          It is a resource list, not an endorsement by, or a partnership with, the platforms named
          here — these are the places where our own public documents live.
        </p>

        <h2>Our Google resources</h2>
        <ul>
          {googleResources.map((resource) => (
            <li key={resource.href}>
              <a
                className="font-medium text-indigo-600 hover:underline"
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.label}
              </a>{" "}
              — {resource.note}
            </li>
          ))}
        </ul>

        <h2>On this site</h2>
        <ul>
          <li>
            <Link className="font-medium text-indigo-600 hover:underline" href="/">
              University grade calculator
            </Link>{" "}
            — work out your degree classification from module grades and credits.
          </li>
          <li>
            <Link className="font-medium text-indigo-600 hover:underline" href="/degree-classification-calculator/">
              Degree classification calculator
            </Link>{" "}
            — First, 2:1, 2:2, Third: what each boundary means.
          </li>
          <li>
            <Link className="font-medium text-indigo-600 hover:underline" href="/weighted-grade-calculator/">
              Weighted grade calculator
            </Link>{" "}
            — the credit-weighted average behind your final grade.
          </li>
        </ul>
      </div>

      <InternalLinks links={links} title="Our Calculators" />
    </div>
  );
}
