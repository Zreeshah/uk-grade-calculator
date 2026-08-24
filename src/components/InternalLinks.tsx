import Link from "next/link";

interface LinkItem {
  title: string;
  href: string;
  description: string;
}

export default function InternalLinks({ links, title = "Related Calculators" }: { links: LinkItem[]; title?: string }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1.5">
              {link.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
