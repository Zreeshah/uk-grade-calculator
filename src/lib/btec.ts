export const extendedDiplomaTariff = [
  { grade: "D*D*D*", points: 168 },
  { grade: "D*D*D", points: 160 },
  { grade: "D*DD", points: 152 },
  { grade: "DDD", points: 144 },
  { grade: "DDM", points: 128 },
  { grade: "DMM", points: 112 },
  { grade: "MMM", points: 96 },
  { grade: "MMP", points: 80 },
  { grade: "MPP", points: 64 },
  { grade: "PPP", points: 48 },
] as const;

export type ExtendedDiplomaGrade = (typeof extendedDiplomaTariff)[number]["grade"];

export function getExtendedDiplomaTariff(grade: ExtendedDiplomaGrade): number {
  return extendedDiplomaTariff.find((entry) => entry.grade === grade)?.points ?? 0;
}
