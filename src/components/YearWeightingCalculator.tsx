"use client";

import { useMemo, useState } from "react";
import { getClassification } from "@/lib/grades";

function numberOrNull(value: string): number | null {
 const number = Number(value);
 return value.trim() !== "" && Number.isFinite(number) ? number : null;
}

export default function YearWeightingCalculator() {
 const [yearTwoAverage, setYearTwoAverage] = useState("");
 const [yearThreeAverage, setYearThreeAverage] = useState("");
 const [yearTwoWeight, setYearTwoWeight] = useState("33");
 const [yearThreeWeight, setYearThreeWeight] = useState("67");

 const result = useMemo(() => {
  const yearTwo = numberOrNull(yearTwoAverage);
  const yearThree = numberOrNull(yearThreeAverage);
  const weightTwo = numberOrNull(yearTwoWeight);
  const weightThree = numberOrNull(yearThreeWeight);

  if ([yearTwo, yearThree, weightTwo, weightThree].some((value) => value === null)) {
   return { average: null, error: null };
  }

  if (
   yearTwo! < 0 || yearTwo! > 100 || yearThree! < 0 || yearThree! > 100 ||
   weightTwo! <= 0 || weightThree! <= 0
  ) {
   return { average: null, error: "Enter averages from 0 to 100 and positive year weights." };
  }

  if (Math.abs(weightTwo! + weightThree! - 100) > 0.01) {
   return { average: null, error: "Your two year weights must add up to 100%." };
  }

  return { average: (yearTwo! * weightTwo! + yearThree! * weightThree!) / 100, error: null };
 }, [yearTwoAverage, yearThreeAverage, yearTwoWeight, yearThreeWeight]);

 const classification = result.average === null ? null : getClassification(result.average);

 return (
  <section className="card mt-8" aria-labelledby="year-weighting-heading">
   <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
    <div>
     <h2 id="year-weighting-heading" className="text-xl font-bold text-slate-900">
      Combine Year 2 and Year 3 averages
     </h2>
     <p className="mt-1 text-sm text-slate-600">
      Use this only when your programme publishes a simple two-year percentage split. It does not model best-credit, profile, rounding or other programme-specific algorithms.
     </p>
    </div>
   </div>

   <div className="mt-6 grid gap-4 sm:grid-cols-2">
    <label className="block">
     <span className="mb-1.5 block text-sm font-medium text-slate-700">Year 2 average (%)</span>
     <input className="input-field" inputMode="decimal" min="0" max="100" type="number" placeholder="e.g. 64.5" value={yearTwoAverage} onChange={(event) => setYearTwoAverage(event.target.value)} />
    </label>
    <label className="block">
     <span className="mb-1.5 block text-sm font-medium text-slate-700">Year 3 average (%)</span>
     <input className="input-field" inputMode="decimal" min="0" max="100" type="number" placeholder="e.g. 70.5" value={yearThreeAverage} onChange={(event) => setYearThreeAverage(event.target.value)} />
    </label>
    <label className="block">
     <span className="mb-1.5 block text-sm font-medium text-slate-700">Year 2 weighting (%)</span>
     <input className="input-field" inputMode="decimal" min="0" max="100" type="number" value={yearTwoWeight} onChange={(event) => setYearTwoWeight(event.target.value)} />
    </label>
    <label className="block">
     <span className="mb-1.5 block text-sm font-medium text-slate-700">Year 3 weighting (%)</span>
     <input className="input-field" inputMode="decimal" min="0" max="100" type="number" value={yearThreeWeight} onChange={(event) => setYearThreeWeight(event.target.value)} />
    </label>
   </div>

   {result.error && <p role="alert" className="mt-4 text-sm text-red-700">{result.error}</p>}

   {result.average !== null && classification && (
    <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50 p-5">
     <p className="text-sm text-slate-600">Provisional overall average</p>
     <p className="mt-1 text-3xl font-bold text-slate-900">{result.average.toFixed(2)}%</p>
     <p className={`mt-2 font-semibold ${classification.classColor}`}>{classification.classification}</p>
     <p className="mt-3 text-sm text-slate-600">
      Calculation: ({yearTwoAverage}% × {yearTwoWeight}%) + ({yearThreeAverage}% × {yearThreeWeight}%).
     </p>
    </div>
   )}
  </section>
 );
}
