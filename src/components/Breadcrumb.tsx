import Link from "next/link";

interface BreadcrumbItem {
 label: string;
 href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
 return (
 <nav aria-label="Breadcrumb" className="mb-6">
 <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
 <li>
 <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
 </li>
 {items.map((item, i) => (
 <li key={i} className="flex items-center gap-1.5">
 <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 {item.href ? (
 <Link href={item.href} className="hover:text-indigo-600 transition-colors">{item.label}</Link>
 ) : (
 <span className="text-slate-700 font-medium">{item.label}</span>
 )}
 </li>
 ))}
 </ol>
 </nav>
 );
}
