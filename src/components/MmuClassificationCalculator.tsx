"use client";

import { useMemo, useState } from "react";
import {
  calculateMmuClassification,
  type MmuCohort,
  type MmuUnit,
} from "@/lib/mmu";

type UnitRow = {
  id: string;
  name: string;
  credits: string;
  mark: string;
};

function makeRows(prefix: string): UnitRow[] {
  return Array.from({ length: 6 }, (_, index) => ({
    id: `${prefix}-${index}`,
    name: "",
    credits: "20",
    mark: "",
  }));
}

function toUnits(rows: UnitRow[]): MmuUnit[] | null {
  if (rows.some((row) => row.credits.trim() !== "" && row.mark.trim() === "")) return null;
  return rows
    .filter((row) => row.mark.trim() !== "")
    .map((row) => ({
      name: row.name,
      credits: Number(row.credits),
      mark: Number(row.mark),
    }));
}

function UnitTable({
  heading,
  rows,
  onChange,
  onAdd,
}: {
  heading: string;
  rows: UnitRow[];
  onChange: (id: string, field: keyof Omit<UnitRow, "id">, value: string) => void;
  onAdd: () => void;
}) {
  return (
    <section className="rounded-xl border border-slate-200 p-4">
      <h3 className="text-lg font-bold text-slate-900">{heading}</h3>
      <p className="mt-1 text-sm text-slate-600">Enter completed units only. The standard MMU route below needs 120 credits at this level.</p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[560px]">
          <thead>
            <tr className="border-b border-slate-200 text-left text-sm text-slate-500">
              <th className="pb-2 pr-3">Unit name</th>
              <th className="pb-2 pr-3">Credits</th>
              <th className="pb-2">Mark (%)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id}>
                <td className="py-2 pr-3"><input className="input-field text-sm" aria-label={`${heading} unit ${index + 1} name`} placeholder={`Unit ${index + 1} (optional)`} value={row.name} onChange={(event) => onChange(row.id, "name", event.target.value)} /></td>
                <td className="py-2 pr-3"><input className="input-field text-sm" aria-label={`${heading} unit ${index + 1} credits`} inputMode="decimal" min="0" type="number" value={row.credits} onChange={(event) => onChange(row.id, "credits", event.target.value)} /></td>
                <td className="py-2"><input className="input-field text-sm" aria-label={`${heading} unit ${index + 1} mark`} inputMode="decimal" min="0" max="100" type="number" placeholder="0–100" value={row.mark} onChange={(event) => onChange(row.id, "mark", event.target.value)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" onClick={onAdd} className="btn-secondary mt-3 text-sm">Add unit</button>
    </section>
  );
}

export default function MmuClassificationCalculator() {
  const [cohort, setCohort] = useState<MmuCohort>("level5-2026-27");
  const [level5Rows, setLevel5Rows] = useState<UnitRow[]>(() => makeRows("l5"));
  const [level6Rows, setLevel6Rows] = useState<UnitRow[]>(() => makeRows("l6"));

  const level5Units = toUnits(level5Rows);
  const level6Units = toUnits(level6Rows);
  const calculation = useMemo(() => {
    if (!level5Units || !level6Units) {
      return { ready: false, reason: "Add a mark for every row that has credits, or clear the unused row's credits." };
    }
    return calculateMmuClassification({ level5Units, level6Units, cohort });
  }, [cohort, level5Units, level6Units]);

  const updateRows = (setRows: React.Dispatch<React.SetStateAction<UnitRow[]>>) => (id: string, field: keyof Omit<UnitRow, "id">, value: string) => {
    setRows((rows) => rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const addRow = (setRows: React.Dispatch<React.SetStateAction<UnitRow[]>>, prefix: string) => () => {
    setRows((rows) => [...rows, { id: `${prefix}-${Date.now()}`, name: "", credits: "20", mark: "" }]);
  };

  return (
    <section className="card" aria-labelledby="mmu-calculator-heading">
      <h2 id="mmu-calculator-heading" className="text-xl font-bold text-slate-900">MMU degree classification estimate</h2>
      <p className="mt-1 text-sm text-slate-600">For a standard undergraduate route only. It applies MMU&apos;s current 25% Level 5 and 75% Level 6 method without rounding.</p>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-slate-800">Which Level 5 cohort applies to you?</legend>
        <div className="mt-2 grid gap-2">
          <label className="flex gap-2 text-sm text-slate-700"><input type="radio" name="mmu-cohort" checked={cohort === "level5-2026-27"} onChange={() => setCohort("level5-2026-27")} /> I was in Level 5 in 2026/27 or later</label>
          <label className="flex gap-2 text-sm text-slate-700"><input type="radio" name="mmu-cohort" checked={cohort === "level5-2025-26"} onChange={() => setCohort("level5-2025-26")} /> I was in Level 5 in 2025/26 and did not repeat or interrupt study</label>
          <label className="flex gap-2 text-sm text-slate-700"><input type="radio" name="mmu-cohort" checked={cohort === "other"} onChange={() => setCohort("other")} /> Another cohort, or I repeated/interrupted study</label>
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <UnitTable heading="Level 5" rows={level5Rows} onChange={updateRows(setLevel5Rows)} onAdd={addRow(setLevel5Rows, "l5")} />
        <UnitTable heading="Level 6" rows={level6Rows} onChange={updateRows(setLevel6Rows)} onAdd={addRow(setLevel6Rows, "l6")} />
      </div>

      {calculation.ready ? (
        <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50 p-5">
          <p className="text-sm text-slate-600">Level 5 average: <strong>{calculation.level5?.average.toFixed(2)}%</strong> · Level 6 average: <strong>{calculation.level6?.average.toFixed(2)}%</strong></p>
          <p className="mt-3 text-sm text-slate-600">Main 25/75 method</p>
          <p className="text-2xl font-bold text-slate-900">{calculation.mainAverage?.toFixed(2)}% · {calculation.mainClassification}</p>
          {calculation.profileClassification && <p className="mt-3 text-sm text-slate-700">Additional Level 6 profiling method: <strong>{calculation.profileClassification}</strong>. {calculation.usedProfile ? "This is the more favourable estimate." : "The main method is as favourable or more favourable."}</p>}
          <p className="mt-4 text-lg font-semibold text-indigo-800">Indicative result: {calculation.finalClassification}</p>
          <p className="mt-2 text-sm text-slate-600">MMU does not round to determine a classification. Your Assessment Board confirms the final award.</p>
        </div>
      ) : (
        <p role="status" className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">{calculation.reason}</p>
      )}
    </section>
  );
}
