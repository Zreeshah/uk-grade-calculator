"use client";

import { useState } from "react";

interface FAQItem {
 question: string;
 answer: string;
}

export default function FAQ({ items, title = "Frequently Asked Questions" }: { items: FAQItem[]; title?: string }) {
 const [openIndex, setOpenIndex] = useState<number | null>(0);

 return (
 <section className="mt-12">
 <h2 className="text-2xl font-bold text-slate-900 mb-6">{title}</h2>
 <div className="space-y-3">
 {items.map((item, i) => (
 <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
 <button
 onClick={() => setOpenIndex(openIndex === i ? null : i)}
 className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
 >
 <span className="font-medium text-slate-900 pr-4">{item.question}</span>
 <svg
 className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
 strokeWidth="2"
 >
 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
 </svg>
 </button>
 {openIndex === i && (
 <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed">
 {item.answer}
 </div>
 )}
 </div>
 ))}
 </div>
 </section>
 );
}
