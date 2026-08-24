interface Classification {
  classification: string;
  range: string;
  color: string;
}

export default function ClassificationTable({
  classifications,
  title = "UK Degree Classification Boundaries",
}: {
  classifications: Classification[];
  title?: string;
}) {
  return (
    <div className="my-8">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800">
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200 border-b-2 border-slate-200 dark:border-slate-600">
                Classification
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200 border-b-2 border-slate-200 dark:border-slate-600">
                Percentage Range
              </th>
            </tr>
          </thead>
          <tbody>
            {classifications.map((c) => (
              <tr key={c.classification} className="border-b border-slate-100 dark:border-slate-700">
                <td className={`px-4 py-3 font-medium ${c.color}`}>{c.classification}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{c.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
