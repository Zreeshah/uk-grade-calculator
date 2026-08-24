import Link from "next/link";

const calculators = [
 { label: "University Grade Calculator", href: "/" },
 { label: "Module Grade Calculator", href: "/module-grade-calculator/" },
 { label: "Weighted Grade Calculator", href: "/weighted-grade-calculator/" },
 { label: "BTEC Grade Calculator", href: "/btec-grade-calculator/" },
 { label: "Masters Grade Calculator", href: "/masters-grade-calculator/" },
 { label: "Degree Classification Calculator", href: "/degree-classification-calculator/" },
 { label: "Final Grade Calculator", href: "/final-grade-calculator/" },
 { label: "GPA Calculator", href: "/gpa-calculator/" },
];

const guides = [
 { label: "UK Degree Classifications Explained", href: "/blog/uk-degree-classifications-explained/" },
 { label: "How University Grading Works", href: "/blog/how-university-grading-works-uk/" },
 { label: "Weighted Average Guide", href: "/blog/how-to-calculate-weighted-average/" },
];

const universities = [
 { label: "MMU Grade Calculator", href: "/universities/mmu/" },
 { label: "Open University", href: "/universities/open-university/" },
 { label: "Leeds", href: "/universities/leeds/" },
 { label: "Portsmouth", href: "/universities/portsmouth/" },
];

export default function Footer() {
 return (
 <footer className="bg-slate-50 border-t border-slate-200 mt-20">
 <div className="container-main py-12">
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
 <div>
 <h3 className="font-bold text-slate-900 mb-4">UK Grade Calculator</h3>
 <p className="text-sm text-slate-500 leading-relaxed">
 Free tools for UK university students to calculate module grades, degree classifications, weighted averages, and more.
 </p>
 </div>
 <div>
 <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Calculators</h4>
 <ul className="space-y-2">
 {calculators.map((link) => (
 <li key={link.href}>
 <Link href={link.href} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 <div>
 <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Guides</h4>
 <ul className="space-y-2">
 {guides.map((link) => (
 <li key={link.href}>
 <Link href={link.href} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 <div>
 <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Universities</h4>
 <ul className="space-y-2">
 {universities.map((link) => (
 <li key={link.href}>
 <Link href={link.href} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 </div>
 <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
 <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} UK Grade Calculator. All rights reserved.</p>
 <div className="flex gap-6">
 <Link href="/about/" className="text-sm text-slate-400 hover:text-indigo-600 transition-colors">About</Link>
 </div>
 </div>
 </div>
 </footer>
 );
}
