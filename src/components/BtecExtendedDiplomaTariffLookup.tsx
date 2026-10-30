"use client";

import { useState } from "react";
import { extendedDiplomaTariff, getExtendedDiplomaTariff, type ExtendedDiplomaGrade } from "@/lib/btec";

export default function BtecExtendedDiplomaTariffLookup() {
  const [grade, setGrade] = useState<ExtendedDiplomaGrade | "">("");

  return (
    <section className="card" aria-labelledby="btec-tariff-heading">
      <h2 id="btec-tariff-heading" className="text-xl font-bold text-slate-900">BTEC National Extended Diploma UCAS tariff lookup</h2>
      <p className="mt-1 text-sm text-slate-600">For a final 2016-RQF BTEC National Extended Diploma result only. This lookup does not calculate your Pearson qualification grade from unit work.</p>
      <label className="mt-5 block max-w-sm">
        <span className="mb-1.5 block text-sm font-medium text-slate-700">Final Extended Diploma grade</span>
        <select className="input-field" value={grade} onChange={(event) => setGrade(event.target.value as ExtendedDiplomaGrade | "") }>
          <option value="">Select your final grade</option>
          {extendedDiplomaTariff.map((entry) => <option key={entry.grade} value={entry.grade}>{entry.grade}</option>)}
        </select>
      </label>
      {grade && <div className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50 p-5"><p className="text-sm text-slate-600">UCAS tariff for {grade}</p><p className="mt-1 text-3xl font-bold text-slate-900">{getExtendedDiplomaTariff(grade)} points</p><p className="mt-2 text-sm text-slate-600">Check the course and entry year, as providers decide which qualifications they accept.</p></div>}
    </section>
  );
}
