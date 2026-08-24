"use client";

import { useState, useCallback } from "react";
import {
 Module,
 createModule,
 calculateWeightedAverage,
 getClassification,
 getMastersClassification,
 getBTECClassification,
 calculateTargetGrade,
 getGPAFromPercentage,
} from "@/lib/grades";

type CalcType = "undergraduate" | "masters" | "btec" | "module" | "gpa";

interface GradeCalculatorProps {
 type?: CalcType;
 showTarget?: boolean;
 showCredits?: boolean;
 defaultCredits?: string;
 title?: string;
}

export default function GradeCalculator({
 type = "undergraduate",
 showTarget = true,
 showCredits = true,
 defaultCredits = "20",
 title,
}: GradeCalculatorProps) {
 const [modules, setModules] = useState<Module[]>([
 { ...createModule(), credits: defaultCredits },
 { ...createModule(), credits: defaultCredits },
 { ...createModule(), credits: defaultCredits },
 ]);
 const [targetEnabled, setTargetEnabled] = useState(false);
 const [targetGrade, setTargetGrade] = useState("70");
 const [remainingCredits, setRemainingCredits] = useState("60");

 const addModule = useCallback(() => {
 setModules((prev) => [...prev, { ...createModule(), credits: defaultCredits }]);
 }, [defaultCredits]);

 const removeModule = useCallback((id: string) => {
 setModules((prev) => (prev.length > 1 ? prev.filter((m) => m.id !== id) : prev));
 }, []);

 const updateModule = useCallback((id: string, field: keyof Module, value: string) => {
 setModules((prev) =>
 prev.map((m) => (m.id === id ? { ...m, [field]: value } : m))
 );
 }, []);

 const resetAll = useCallback(() => {
 setModules([
 { ...createModule(), credits: defaultCredits },
 { ...createModule(), credits: defaultCredits },
 { ...createModule(), credits: defaultCredits },
 ]);
 setTargetEnabled(false);
 }, [defaultCredits]);

 const average = calculateWeightedAverage(modules);

 const getClassFn =
 type === "masters"
 ? getMastersClassification
 : type === "btec"
 ? getBTECClassification
 : getClassification;

 const result = average !== null ? getClassFn(average) : null;
 const gpa = average !== null ? getGPAFromPercentage(average) : null;

 const targetResult =
 targetEnabled && average !== null
 ? calculateTargetGrade(modules, Number(targetGrade), Number(remainingCredits))
 : null;

 return (
 <div className="card">
 {title && <h2 className="text-xl font-bold text-slate-900 mb-6">{title}</h2>}

 {/* Result display */}
 {average !== null && result && (
 <div className="mb-6 p-5 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
 <div>
 <p className="text-sm text-slate-500 mb-1">Your Overall Grade</p>
 <p className="text-3xl font-bold text-slate-900">{average.toFixed(2)}%</p>
 </div>
 <div className="text-right">
 <p className="text-sm text-slate-500 mb-1">Classification</p>
 <p className={`text-xl font-bold ${result.classColor}`}>{result.classification}</p>
 </div>
 {type === "gpa" && gpa !== null && (
 <div className="text-right">
 <p className="text-sm text-slate-500 mb-1">GPA Equivalent</p>
 <p className="text-xl font-bold text-indigo-600">{gpa.toFixed(1)}</p>
 </div>
 )}
 </div>

 {/* Progress bar */}
 <div className="mt-4">
 <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
 <div
 className={`h-full rounded-full transition-all duration-500 ${
 average >= 70
 ? "bg-green-500"
 : average >= 60
 ? "bg-blue-500"
 : average >= 50
 ? "bg-amber-500"
 : "bg-red-500"
 }`}
 style={{ width: `${Math.min(average, 100)}%` }}
 />
 </div>
 <div className="flex justify-between mt-1.5 text-xs text-slate-400">
 <span>0%</span>
 <span className="text-red-400">3rd (40%)</span>
 <span className="text-amber-400">2:2 (50%)</span>
 <span className="text-blue-400">2:1 (60%)</span>
 <span className="text-green-400">1st (70%)</span>
 <span>100%</span>
 </div>
 </div>
 </div>
 )}

 {/* Module table */}
 <div className="overflow-x-auto -mx-6 px-6">
 <table className="w-full">
 <thead>
 <tr className="border-b border-slate-200">
 <th className="text-left text-sm font-medium text-slate-500 pb-3 pr-3">
 {type === "btec" ? "Unit Name" : "Module Name"}
 </th>
 <th className="text-left text-sm font-medium text-slate-500 pb-3 pr-3 w-28">
 Grade (%)
 </th>
 {showCredits && (
 <th className="text-left text-sm font-medium text-slate-500 pb-3 pr-3 w-24">
 Credits
 </th>
 )}
 <th className="w-10 pb-3" />
 </tr>
 </thead>
 <tbody>
 {modules.map((mod, idx) => (
 <tr key={mod.id} className="group">
 <td className="py-2 pr-3">
 <input
 type="text"
 placeholder={`${type === "btec" ? "Unit" : "Module"} ${idx + 1}`}
 value={mod.name}
 onChange={(e) => updateModule(mod.id, "name", e.target.value)}
 className="input-field text-sm"
 />
 </td>
 <td className="py-2 pr-3">
 <input
 type="number"
 min="0"
 max="100"
 placeholder="0-100"
 value={mod.grade}
 onChange={(e) => updateModule(mod.id, "grade", e.target.value)}
 className="input-field text-sm"
 />
 </td>
 {showCredits && (
 <td className="py-2 pr-3">
 <input
 type="number"
 min="0"
 placeholder="20"
 value={mod.credits}
 onChange={(e) => updateModule(mod.id, "credits", e.target.value)}
 className="input-field text-sm"
 />
 </td>
 )}
 <td className="py-2">
 <button
 onClick={() => removeModule(mod.id)}
 className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"
 aria-label="Remove module"
 >
 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
 </svg>
 </button>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 {/* Actions */}
 <div className="flex flex-wrap gap-3 mt-4">
 <button onClick={addModule} className="btn-primary text-sm">
 <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
 <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
 </svg>
 Add {type === "btec" ? "Unit" : "Module"}
 </button>
 <button onClick={resetAll} className="btn-secondary text-sm">
 Reset All
 </button>
 </div>

 {/* Target grade */}
 {showTarget && (
 <div className="mt-6 pt-6 border-t border-slate-200">
 <label className="flex items-center gap-3 cursor-pointer">
 <input
 type="checkbox"
 checked={targetEnabled}
 onChange={(e) => setTargetEnabled(e.target.checked)}
 className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
 />
 <span className="text-sm font-medium text-slate-700">
 Calculate what I need on remaining modules
 </span>
 </label>

 {targetEnabled && (
 <div className="mt-4 flex flex-col sm:flex-row gap-4">
 <div className="flex-1">
 <label className="block text-sm text-slate-500 mb-1.5">Target Average (%)</label>
 <input
 type="number"
 min="0"
 max="100"
 value={targetGrade}
 onChange={(e) => setTargetGrade(e.target.value)}
 className="input-field text-sm"
 />
 </div>
 <div className="flex-1">
 <label className="block text-sm text-slate-500 mb-1.5">Remaining Credits</label>
 <input
 type="number"
 min="1"
 value={remainingCredits}
 onChange={(e) => setRemainingCredits(e.target.value)}
 className="input-field text-sm"
 />
 </div>
 </div>
 )}

 {targetEnabled && targetResult !== null && (
 <div className="mt-4 p-4 rounded-xl bg-amber-50amber-900/20 border border-amber-200">
 <p className="text-sm text-amber-800">
 {targetResult > 100 ? (
 <>Unfortunately, you would need <strong>{targetResult.toFixed(1)}%</strong> on your remaining modules, which is not achievable. Consider adjusting your target.</>
 ) : targetResult < 0 ? (
 <>Great news! You have already exceeded your target. Even with 0% on remaining modules, you will achieve your goal.</>
 ) : (
 <>You need an average of <strong className="text-lg">{targetResult.toFixed(1)}%</strong> across your remaining {remainingCredits} credits to achieve a {targetGrade}% overall average.</>
 )}
 </p>
 </div>
 )}
 </div>
 )}
 </div>
 );
}
