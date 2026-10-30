export type MmuCohort = "level5-2025-26" | "level5-2026-27" | "other";

export type MmuUnit = {
  name: string;
  credits: number;
  mark: number;
};

export type MmuClassification = "First" | "2:1" | "2:2" | "Third" | "Fail";

type YearSummary = {
  average: number;
  credits: number;
};

export type MmuCalculation = {
  ready: boolean;
  reason?: string;
  level5?: YearSummary;
  level6?: YearSummary;
  mainAverage?: number;
  mainClassification?: MmuClassification;
  profileClassification?: MmuClassification;
  finalClassification?: MmuClassification;
  usedProfile?: boolean;
};

const classificationRank: Record<MmuClassification, number> = {
  Fail: 0,
  Third: 1,
  "2:2": 2,
  "2:1": 3,
  First: 4,
};

export function classifyMmuAverage(average: number): MmuClassification {
  if (average >= 70) return "First";
  if (average >= 60) return "2:1";
  if (average >= 50) return "2:2";
  if (average >= 40) return "Third";
  return "Fail";
}

function summariseYear(units: MmuUnit[]): YearSummary | null {
  if (units.length === 0) return null;
  if (units.some((unit) => !Number.isFinite(unit.credits) || !Number.isFinite(unit.mark) || unit.credits <= 0 || unit.mark < 0 || unit.mark > 100)) {
    return null;
  }

  const credits = units.reduce((total, unit) => total + unit.credits, 0);
  if (credits <= 0) return null;

  return {
    credits,
    average: units.reduce((total, unit) => total + unit.mark * unit.credits, 0) / credits,
  };
}

function profileClassification(level6Units: MmuUnit[], level6Average: number): MmuClassification {
  const rules: Array<{ classification: MmuClassification; minimumAverage: number; minimumCredits: number; minimumMark: number }> = [
    { classification: "First", minimumAverage: 68, minimumCredits: 60, minimumMark: 70 },
    { classification: "2:1", minimumAverage: 58, minimumCredits: 60, minimumMark: 60 },
    { classification: "2:2", minimumAverage: 48, minimumCredits: 60, minimumMark: 50 },
    { classification: "Third", minimumAverage: 40, minimumCredits: 120, minimumMark: 40 },
  ];

  for (const rule of rules) {
    const qualifyingCredits = level6Units
      .filter((unit) => unit.mark >= rule.minimumMark)
      .reduce((total, unit) => total + unit.credits, 0);
    if (level6Average >= rule.minimumAverage && qualifyingCredits >= rule.minimumCredits) {
      return rule.classification;
    }
  }

  return "Fail";
}

export function calculateMmuClassification({
  level5Units,
  level6Units,
  cohort,
}: {
  level5Units: MmuUnit[];
  level6Units: MmuUnit[];
  cohort: MmuCohort;
}): MmuCalculation {
  if (cohort === "other") {
    return {
      ready: false,
      reason: "This calculator supports only the two current cohort routes. Use MMU's official calculator if you repeated, interrupted study, or were in Level 5 before 2025/26.",
    };
  }

  const level5 = summariseYear(level5Units);
  const level6 = summariseYear(level6Units);
  if (!level5 || !level6) {
    return { ready: false, reason: "Enter a valid mark and credit value for every included unit." };
  }

  if (Math.abs(level5.credits - 120) > 0.001 || Math.abs(level6.credits - 120) > 0.001) {
    return {
      ready: false,
      level5,
      level6,
      reason: "This standard-route estimate requires exactly 120 completed credits at both Level 5 and Level 6. It does not model extra-credit selection, incomplete levels, or programme-specific rules.",
    };
  }

  const mainAverage = level5.average * 0.25 + level6.average * 0.75;
  const mainClassification = classifyMmuAverage(mainAverage);

  if (cohort === "level5-2026-27") {
    return {
      ready: true,
      level5,
      level6,
      mainAverage,
      mainClassification,
      finalClassification: mainClassification,
      usedProfile: false,
    };
  }

  const profile = profileClassification(level6Units, level6.average);
  const useProfile = classificationRank[profile] > classificationRank[mainClassification];

  return {
    ready: true,
    level5,
    level6,
    mainAverage,
    mainClassification,
    profileClassification: profile,
    finalClassification: useProfile ? profile : mainClassification,
    usedProfile: useProfile,
  };
}
