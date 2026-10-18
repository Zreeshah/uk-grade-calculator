export interface UniversitySource {
 title: string;
 url: string;
 summary: string;
 scope: string;
 faqs: { question: string; answer: string }[];
}

export const universitySources: Record<string, UniversitySource> = {
 mmu: {
  title: "Manchester Metropolitan University Undergraduate Assessment Regulations 2024/25",
  url: "https://www.mmu.ac.uk/legal/policies/undergraduate-assessment-regulations-24-25",
  summary: "MMU's regulations use a 25:75 Level 5 to Level 6 weighting for the main undergraduate classification method. Cohort rules and programme requirements can change the method.",
  scope: "The regulation applies across MMU undergraduate provision, subject to approved programme or professional-body variations. Check the version and cohort rules that apply to you.",
  faqs: [
   { question: "What weighting does MMU use?", answer: "The main MMU undergraduate method uses 25% from Level 5 and 75% from Level 6. The applicable method can depend on your cohort and programme." },
   { question: "Can MMU rules differ by course?", answer: "Yes. Programme and professional-body requirements can vary, so your current course regulations remain the authoritative source." },
  ],
 },
 "open-university": {
  title: "Open University Academic Regulations (Taught Courses) 2026/27",
  url: "https://help.open.ac.uk/documents/policies/academic-regulations/files/435/academic-regulations-taught-courses-2026-27.pdf",
  summary: "The Open University uses a credit-based classification algorithm. For a typical Bachelor's Honours award, Level 3 credit is double weighted, with rules for eligible classification credit and borderline decisions.",
  scope: "This source applies to modules starting from 1 August 2026. Qualification-specific regulations can change eligible credit or the classification method.",
  faqs: [
   { question: "Does the Open University use fixed academic years?", answer: "No. OU classification is based on eligible module credit and weighted grade points, not a standard Year 2/Year 3 split." },
   { question: "Does Level 3 count more at the OU?", answer: "For the standard Bachelor's Honours method, Level 3 credit is double weighted. Check your qualification regulations for the rule that applies to you." },
  ],
 },
 "st-andrews": {
  title: "University of St Andrews degree classifications",
  url: "https://www.st-andrews.ac.uk/guides/degree-classification/",
  summary: "St Andrews determines undergraduate honours classification using both a common credit-weighted mean and a median of honours-level grades, under its classification policy.",
  scope: "The university's published policy applies to undergraduate honours awards. It states that there are no discretionary classification border zones.",
  faqs: [
   { question: "How does St Andrews classify honours degrees?", answer: "The published method considers a common credit-weighted mean and a median of honours-level grades." },
   { question: "Does St Andrews use a borderline upgrade zone?", answer: "The published classification policy says there are no discretionary classification border zones." },
  ],
 },
 portsmouth: {
  title: "University of Portsmouth Assessment Regulations 2026/27",
  url: "https://policies.docstore.port.ac.uk/policy-107.pdf",
  summary: "Portsmouth's current regulations use the best of specified Level 5 and Level 6 calculation methods, including a route based on Level 6 after the lowest 20 credits are excluded.",
  scope: "Effective from 1 September 2026 for credit- and award-bearing taught courses. Apprenticeship plans, programme requirements and RPL rules can take precedence.",
  faqs: [
   { question: "Does Portsmouth use one fixed year weighting?", answer: "No. The current regulations set out alternative calculation methods and award the better outcome where applicable." },
   { question: "Does Portsmouth publish a standard borderline uplift?", answer: "The current regulation does not state a standard borderline uplift. Check the current rules for your award." },
  ],
 },
 leeds: {
  title: "University of Leeds Academic Regulations for Taught Programmes",
  url: "https://secretariat.leeds.ac.uk/home/academic-regulations-and-taught-student-policies-and-procedures/academic-regulations/",
  summary: "Leeds' current taught-programme regulations use a 1:2 weighting for Year 2 and Year 3, with credit-weighted module marks and an automatic higher class within 0.5 of the next boundary.",
  scope: "The cited 2026/27 regulations apply to taught provision, but programme and professional-body supplementary regulations can take precedence.",
  faqs: [
   { question: "What Year 2/Year 3 weighting does Leeds use?", answer: "The current general taught-programme regulations use a 1:2 Year 2 to Year 3 weighting." },
   { question: "Does Leeds have a published borderline rule?", answer: "The current regulations provide for an automatic higher class when the final mark is within 0.5 of the next boundary, subject to the applicable regulations." },
  ],
 },
 swansea: {
  title: "Swansea University Classification of Honours Degrees",
  url: "https://hwb.swansea.ac.uk/academic-life/academic-regulations/undergraduate-award-regulations/ug-assessment-regs/ug-assessment-regs-section-3/",
  summary: "Swansea's standard three-year method uses a 3:2:1 banding across defined Level 6 and Level 5 credit sets, with a published borderline process.",
  scope: "The source lists exceptions for professionally accredited engineering and some Physics cohorts, and programme or professional-body rules may vary.",
  faqs: [
   { question: "Does Swansea use one simple Year 2/Year 3 split?", answer: "No. The standard published method uses defined credit bands and a 3:2:1 weighting rather than one universal split." },
   { question: "Does Swansea have a borderline process?", answer: "Yes. The published regulations set out a borderline window and a module-profile or exit-velocity assessment, subject to exceptions." },
  ],
 },
 "sheffield-hallam": {
  title: "Sheffield Hallam Regulation 10: Calculation of Awards",
  url: "https://www.shu.ac.uk/myhallam/university-life/university-rules-and-regulations/standard-assessment-regulations/regulation-10---calculation-of-awards",
  summary: "Sheffield Hallam publishes a best-outcome method using Level 5 and Level 6 credits, plus defined borderline profile rules for standard honours awards.",
  scope: "The calculation changes by confirmed-results date and course-specific requirements or RPL exclusions can apply. Check the current Regulation 10 for your result date.",
  faqs: [
   { question: "Does Sheffield Hallam use a fixed 33/67 split?", answer: "The published Regulation 10 uses a best-outcome method instead of one universal 33/67 split." },
   { question: "Does Sheffield Hallam publish borderline rules?", answer: "Yes. Regulation 10 sets defined mark and Level 6-credit conditions for the standard honours classifications." },
  ],
 },
 exeter: {
  title: "University of Exeter Assessment, Progression and Awarding Handbook: Classification of Awards",
  url: "https://www.exeter.ac.uk/v8media/specificsites/tqa/apa/APA_Handbook_Chapter_9.pdf",
  summary: "For a standard three-year Bachelor's award, Exeter's current handbook uses a 1:2 Stage 2 to Stage 3 weighting and sets published threshold and profile routes for a higher class.",
  scope: "The handbook is for 2026/27 and includes separate tables for variants such as years abroad and integrated programmes. Use the section for your programme.",
  faqs: [
   { question: "What weighting does Exeter use for a standard three-year degree?", answer: "The current handbook uses a 1:2 Stage 2 to Stage 3 weighting for the standard three-year Bachelor's route." },
   { question: "How does Exeter handle borderline results?", answer: "The handbook sets threshold and credit-profile routes, including different rules for particular programme structures." },
  ],
 },
 uclan: {
  title: "University of Lancashire Academic Regulations for Taught Programmes 2025/26",
  url: "https://www.lancashire.ac.uk/assets/student-contracts/2025-26/academic-regulations-taught-2526.pdf",
  summary: "The University of Lancashire regulations use an Award Percentage Mark with a Level 5 to Level 6 weighting of 2:8, alongside alternative best-credit and profile methods.",
  scope: "The calculation is framework dependent, including whether a course uses 20- or 30-credit modules. The source applies from September 2025; use your programme's current regulations.",
  faqs: [
   { question: "What weighting does UCLan use?", answer: "The current general regulations use a 2:8 Level 5 to Level 6 weighting within the Award Percentage Mark, alongside other defined methods." },
   { question: "Why do credit values matter at UCLan?", answer: "The best-credit calculation is framework dependent, so the module-credit structure of your course matters." },
  ],
 },
 uwe: {
  title: "UWE Bristol degree classifications",
  url: "https://www.uwe.ac.uk/study/academic-information/degree-classifications",
  summary: "UWE Bristol's published method weights Level 6 three times Level 5 for the standard 360-credit honours route, with different credit sets for some starter cohorts and an automatic class raise within 0.5 of the next class.",
  scope: "The calculation depends on when you started and your programme specification or professional-body requirements may differ.",
  faqs: [
   { question: "How does UWE Bristol weight Level 5 and Level 6?", answer: "For the standard honours route, the published method weights Level 6 three times Level 5, subject to starter-cohort rules." },
   { question: "Does UWE Bristol have a published borderline rule?", answer: "Its degree-classifications guidance provides for an automatic class raise where the final mark is within 0.5 of the next class, subject to the applicable route." },
  ],
 },
};
