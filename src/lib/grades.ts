export interface Module {
 id: string;
 name: string;
 grade: string;
 credits: string;
}

export interface YearData {
 modules: Module[];
 weight: number;
}

export interface GradeResult {
 average: number;
 classification: string;
 classColor: string;
}

export function createModule(): Module {
 return {
 id: crypto.randomUUID(),
 name: "",
 grade: "",
 credits: "20",
 };
}

export function calculateWeightedAverage(modules: Module[]): number | null {
 const valid = modules.filter(
 (m) => m.grade !== "" && m.credits !== "" && !isNaN(Number(m.grade)) && !isNaN(Number(m.credits))
 );
 if (valid.length === 0) return null;

 let totalWeighted = 0;
 let totalCredits = 0;

 for (const m of valid) {
 const grade = Number(m.grade);
 const credits = Number(m.credits);
 if (credits <= 0) continue;
 totalWeighted += grade * credits;
 totalCredits += credits;
 }

 if (totalCredits === 0) return null;
 return totalWeighted / totalCredits;
}

export function getClassification(average: number): { classification: string; classColor: string } {
 if (average >= 70) return { classification: "First Class Honours (1st)", classColor: "grade-first" };
 if (average >= 60) return { classification: "Upper Second Class Honours (2:1)", classColor: "grade-two-one" };
 if (average >= 50) return { classification: "Lower Second Class Honours (2:2)", classColor: "grade-two-two" };
 if (average >= 40) return { classification: "Third Class Honours (3rd)", classColor: "grade-third" };
 return { classification: "Fail", classColor: "text-red-700" };
}

export function getMastersClassification(average: number): { classification: string; classColor: string } {
 if (average >= 70) return { classification: "Distinction", classColor: "grade-first" };
 if (average >= 60) return { classification: "Merit", classColor: "grade-two-one" };
 if (average >= 50) return { classification: "Pass", classColor: "grade-two-two" };
 return { classification: "Fail", classColor: "text-red-700" };
}

export function getBTECClassification(average: number): { classification: string; classColor: string } {
 if (average >= 85) return { classification: "Distinction* (D*)", classColor: "grade-first" };
 if (average >= 70) return { classification: "Distinction (D)", classColor: "grade-first" };
 if (average >= 60) return { classification: "Merit (M)", classColor: "grade-two-one" };
 if (average >= 40) return { classification: "Pass (P)", classColor: "grade-two-two" };
 return { classification: "Fail", classColor: "text-red-700" };
}

export function getGPAFromPercentage(percentage: number): number {
 if (percentage >= 70) return 4.0;
 if (percentage >= 65) return 3.7;
 if (percentage >= 60) return 3.3;
 if (percentage >= 55) return 3.0;
 if (percentage >= 50) return 2.7;
 if (percentage >= 45) return 2.3;
 if (percentage >= 40) return 2.0;
 return 0.0;
}

export function calculateTargetGrade(
 currentModules: Module[],
 targetAverage: number,
 remainingCredits: number
): number | null {
 const valid = currentModules.filter(
 (m) => m.grade !== "" && m.credits !== "" && !isNaN(Number(m.grade)) && !isNaN(Number(m.credits))
 );

 let totalWeighted = 0;
 let totalCredits = 0;
 for (const m of valid) {
 totalWeighted += Number(m.grade) * Number(m.credits);
 totalCredits += Number(m.credits);
 }

 const needed = (targetAverage * (totalCredits + remainingCredits) - totalWeighted) / remainingCredits;
 return needed;
}

export const degreeClassifications = [
 { classification: "First Class Honours (1st)", range: "70% and above", color: "grade-first" },
 { classification: "Upper Second Class (2:1)", range: "60% - 69%", color: "grade-two-one" },
 { classification: "Lower Second Class (2:2)", range: "50% - 59%", color: "grade-two-two" },
 { classification: "Third Class (3rd)", range: "40% - 49%", color: "grade-third" },
 { classification: "Fail", range: "Below 40%", color: "text-red-700" },
];

export const mastersClassifications = [
 { classification: "Distinction", range: "70% and above", color: "grade-first" },
 { classification: "Merit", range: "60% - 69%", color: "grade-two-one" },
 { classification: "Pass", range: "50% - 59%", color: "grade-two-two" },
 { classification: "Fail", range: "Below 50%", color: "text-red-700" },
];

export const btecClassifications = [
 { classification: "Distinction* (D*)", range: "85% and above", color: "grade-first" },
 { classification: "Distinction (D)", range: "70% - 84%", color: "grade-first" },
 { classification: "Merit (M)", range: "60% - 69%", color: "grade-two-one" },
 { classification: "Pass (P)", range: "40% - 59%", color: "grade-two-two" },
 { classification: "Fail", range: "Below 40%", color: "text-red-700" },
];
