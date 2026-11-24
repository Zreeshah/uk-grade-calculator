export interface UniversityData {
 slug: string;
 name: string;
 shortName: string;
 keyword: string;
 description: string;
 yearWeighting: string;
 yearWeightY2: number;
 yearWeightY3: number;
 creditsPerYear: number;
 defaultModuleCredits: string;
 framework: string;
 degreeLength: string;
 specialNotes: string[];
 content: string[];
 faqs: { question: string; answer: string }[];
 /** Plain-language statement of the university's real published classification method. Rendered on the page. */
 methodNote: string;
 /** How to use the generic calculator on this page for this university's method. Rendered on the page. */
 calculatorNote: string;
 /** Per-university steps for the "How to calculate" section. Rendered on the page. */
 howToSteps: string[];
 /** Per-university "when to use" paragraph. Rendered on the page. */
 whenToUse: string;
 /** True when the published method is a simple two-level percentage split that the year-weighting tool can model. */
 splitMethod: boolean;
 visual?: {
 src: string;
 alt: string;
 caption: string;
 width: number;
 height: number;
 };
}

export const universities: UniversityData[] = [
 {
 slug: "mmu",
 name: "Manchester Metropolitan University",
 shortName: "MMU",
 keyword: "manchester metropolitan university grade calculator",
 description:
 "Free Manchester Metropolitan University grade calculator (MMU grade calculator). Estimate your classification from Level 5 and Level 6 results using current MMU rules.",
 yearWeighting: "25/75 (Level 5 / Level 6)",
 yearWeightY2: 25,
 yearWeightY3: 75,
 creditsPerYear: 120,
 defaultModuleCredits: "20",
 framework: "FHEQ (England)",
 degreeLength: "3 years (or 4 with placement)",
 specialNotes: [
 "The main MMU undergraduate method uses 25% from Level 5 and 75% from Level 6.",
 "Students who were in Level 5 during 2025/26 may also have an additional Level 6 profiling method, if they remained on schedule.",
 "MMU does not round to determine degree classification.",
 ],
 methodNote:
 "MMU's current main undergraduate method combines the credit-weighted Level 5 average (25%) with the credit-weighted Level 6 average (75%). Students who were in Level 5 in 2025/26 and stayed on schedule may also be considered under an additional Level 6 profiling method, and MMU applies the more favourable eligible outcome. MMU does not round when deciding a classification.",
 calculatorNote:
 "Use the MMU calculator above: pick the Level 5 cohort that matches your study history, enter completed Level 5 and Level 6 unit marks with their credit values, and use exactly 120 credits at each level for the standard-route estimate. The calculator models the current 25/75 route and, for the eligible 2025/26 Level 5 cohort, the additional Level 6 profiling route.",
 howToSteps: [
 "Select the Level 5 cohort that matches your study history.",
 "Enter completed Level 5 and Level 6 unit marks with their credit values.",
 "Use exactly 120 credits at each level for this standard-route estimate.",
 "Review the displayed main method and, where eligible, the additional Level 6 profiling result.",
 ],
 whenToUse:
 "Use this Manchester Metropolitan University grade calculator when you have module percentages and credit values and want a clear, provisional view of your current average under MMU's published rules. It is most useful after a set of results has been released, before choosing how to prioritise remaining assessments, or when you are checking a target for your final year. Your university's exam board and assessment regulations remain the source of your official classification, and the profiling route only applies to the eligible 2025/26 Level 5 cohort.",
 splitMethod: true,
 content: [
 "Manchester Metropolitan University (MMU) classifies standard undergraduate honours awards using its published Assessment Regulations, and its method is one of the more distinctive in England: the final year carries three times the weight of the second year. The current main method combines a credit-weighted Level 5 average, worth 25%, with a credit-weighted Level 6 average, worth 75%. That split matters more than most students expect. A strong final year can lift a middling second year a long way, while a weak final year is hard to rescue, because three quarters of the result comes from Level 6. The worked example below shows exactly how the numbers move.",
 "The key takeaways for MMU students are short. First, Level 5 counts, but Level 6 counts three times as much, so final-year modules deserve the most attention. Second, MMU does not round when it decides a classification, so an average of 69.9% is not a First, and there is no rounding up to the next boundary. Third, one cohort has an extra route: students who were in Level 5 in 2025/26 and stayed on schedule may also be considered under an additional Level 6 profiling method, and MMU applies the more favourable eligible outcome. Students who started Level 5 from 2026/27 onwards use the main 25/75 method only.",
 "A worked example makes the 25/75 split concrete. Suppose your credit-weighted Level 5 average is 60% and your Level 6 average is 68%. The calculation is (60 x 0.25) + (68 x 0.75) = 15 + 51 = 66%, a 2:1. Now suppose your Level 6 average rises to 72% while Level 5 stays at 60%: (60 x 0.25) + (72 x 0.75) = 15 + 54 = 69%, still a 2:1, because MMU does not round. Push Level 6 to 74% and the result becomes (60 x 0.25) + (74 x 0.75) = 15 + 55.5 = 70.5%, a First. The same four-point improvement at Level 5 would have moved the result by only one point. That asymmetry is the whole point of the 25/75 weighting, and it is why final-year planning matters so much at MMU.",
 "Module structure at MMU follows the standard English pattern: 120 credits at each level, with standard units usually worth 20 credits and larger units, such as dissertations and major projects, worth more. Enter the credit value shown for each unit in your programme information, and do not assume every unit carries the same weight. The calculator is an indicative tool for the standard 120-credit Level 5 and Level 6 route. Integrated master's degrees, programmes with professional-body requirements, and courses with non-standard credit structures can follow different rules, and your programme specification is the authoritative source for those.",
 "The additional Level 6 profiling method deserves a clear explanation, because it only applies to one cohort. Students who were enrolled on Level 5 in 2025/26, and who did not fall behind because of repeat years or interruptions, can also receive the more favourable outcome from an additional Level 6 profiling method. If you repeated a year, took an interruption, or started Level 5 from 2026/27 onwards, the profiling route does not apply to you and the main 25/75 method is the whole story. The calculator above asks for your Level 5 cohort first for exactly this reason, and it stops for unsupported cohorts rather than guessing.",
 "Placement years are the other common MMU complication. A four-year route with a placement year adds a year of study, and the placement is normally assessed separately from the graded Level 5 and Level 6 marks that feed the classification. Check your programme specification for whether your placement year carries credit into the classification calculation, because sandwich and integrated placement arrangements are not all treated the same way. The same advice applies to study abroad and exchange years: the marks may appear on your transcript without counting towards the classification average.",
 "Common mistakes at MMU are easy to list, and most of them come from using the wrong weighting. The most frequent is applying a 33/67 or 50/50 split borrowed from another university, which understates the final year and gives a misleading result. The second is assuming rounding: a 69.9% average feels like a First, but MMU's regulations state that rounding is not used, so it is a 2:1 unless the profiling route applies. The third is entering Year 1 marks into the calculation. Level 4 marks do not feed the standard classification method. Keep the calculator to Level 5 and Level 6, use confirmed marks rather than predictions where possible, and use the target feature to model what you still need.",
 ],
 faqs: [
 {
 question: "What weighting does MMU use for degree classification?",
 answer:
 "Under MMU's current main undergraduate method, the credit-weighted Level 5 average contributes 25% and the Level 6 average contributes 75%.",
 },
 {
 question: "Can MMU apply another method?",
 answer:
 "Students who were in Level 5 in 2025/26 and remained on schedule can also be considered under the additional Level 6 profiling method. MMU applies the more favourable eligible outcome.",
 },
 {
 question: "Does MMU round classification averages?",
 answer:
 "No. MMU's current regulations state that rounding is not used to determine the classification of an award, so 69.9% is a 2:1, not a First.",
 },
 {
 question: "Does the placement year count at MMU?",
 answer:
 "A placement year is normally assessed separately from the graded Level 5 and Level 6 marks that feed the classification. Check your programme specification, because sandwich and integrated placement arrangements are not all treated the same way.",
 },
 {
 question: "Do first-year marks count at MMU?",
 answer:
 "No. The standard MMU classification method uses Level 5 and Level 6 marks only. Level 4 (first-year) marks do not feed the calculation, although you must pass Level 4 to progress.",
 },
 {
 question: "What if I repeated a year or took an interruption?",
 answer:
 "Repeat years and interruptions can remove your eligibility for the additional Level 6 profiling method, which requires you to have remained on schedule. The main 25/75 method still applies. Check your programme regulations and speak to your programme team if you are unsure which route covers you.",
 },
 ],
 },
 {
 slug: "open-university",
 name: "The Open University",
 shortName: "OU",
 keyword: "open university grade calculator",
 description:
 "Free Open University grade calculator. Calculate your OU degree classification with the OU's credit-based method: best 120 Level 2 credits and best 120 Level 3 credits, with Level 3 double-weighted.",
 yearWeighting: "Credit-based: best 120 Level 2 credits + best 120 Level 3 credits double-weighted (no year split)",
 yearWeightY2: 0,
 yearWeightY3: 0,
 creditsPerYear: 120,
 defaultModuleCredits: "30",
 framework: "FHEQ (England)",
 degreeLength: "Flexible (typically 6-16 years part-time)",
 specialNotes: [
 "The OU uses a credit accumulation model rather than fixed academic years.",
 "An Honours degree requires 360 credits: 120 at Level 1, 120 at Level 2, and 120 at Level 3.",
 "Classification uses grade points 1 to 4, where 1 (Distinction) is the best and 4 is the lowest pass — a lower total score means a better class.",
 "Only your best 240 credits count: best 120 at Level 2 and best 120 at Level 3, with Level 3 double-weighted.",
 "Level 1 marks, ungraded credit and credit transfer (RPL) do not count towards classification.",
 ],
 methodNote:
 "The Open University (UK) does not use a year split at all. Classification is calculated from your best 240 credits: your best 120 credits at Level 2 and your best 120 credits at Level 3, with Level 3 credit double-weighted. Each module carries a grade point from 1 (Distinction, the best) to 4 (the lowest pass), and the weighted grade credit score runs from 360 to 1440 — lower is better. First is 360–630, 2:1 is 631–900, 2:2 is 901–1170, and Third is 1171–1440. A quality-assurance test also checks that your best 60 Level 3 credits are at least as good as the class the score indicates.",
 calculatorNote:
 "A percentage-based calculator cannot model the OU's grade-point method directly, so use the tool above as a planning aid only: enter your OU module percentage marks with their credit values to see a credit-weighted average, then work out your real classification from the grade-point score described on this page. Enter only Level 2 and Level 3 modules — Level 1 marks do not count — and remember that Stage 3 (Level 3) credit counts double in the official calculation.",
 howToSteps: [
 "List your graded OU modules at Level 2 and Level 3, with each module's grade (1 to 4) and credit value (usually 30 or 60).",
 "Take your best 120 credits at Level 2 and your best 120 credits at Level 3 — only your best grades count.",
 "Multiply each module's credits by its grade point, then double the total for your Level 3 modules.",
 "Add the Level 2 total to the doubled Level 3 total to get your weighted grade credit score (360 to 1440, lower is better).",
 "Match the score to the bands: 360–630 First, 631–900 2:1, 901–1170 2:2, 1171–1440 Third — then check the quality-assurance test on your best 60 Level 3 credits.",
 ],
 whenToUse:
 "Use this Open University grade calculator page when you are planning an OU honours degree and want to understand where you stand under the OU's own credit-based method. It is most useful when you have completed Level 2 modules and are choosing Level 3 modules, or when you are checking whether your best 120 Level 3 credits are strong enough to hold the class your score suggests. The OU's Student Support Team and your qualification regulations remain the authoritative sources, especially if your result sits near a boundary.",
 splitMethod: false,
 content: [
 "The Open University (UK) is the largest university in the UK by student numbers, with more than 170,000 students, and it classifies degrees in a way no other university in this guide does. There is no Year 2 and Year 3 split, because OU students do not follow fixed academic years. Instead, students accumulate credits module by module, often part-time over many years, and classification is worked out from the best 240 credits they have earned: the best 120 credits at Level 2 and the best 120 credits at Level 3. Level 3 credit is double-weighted. That single design choice — best credits only, with the final stage counting double — is what makes the OU method both forgiving and easy to get wrong.",
 "The key takeaways for OU students are short. First, forget percentages: OU modules are graded 1 to 4, where 1 is a Distinction and the best result, and 4 is the lowest pass. A lower total score means a better class, which is the opposite of how a percentage scale works. Second, only your best grades count, so a weak module can drop out of the calculation entirely if you have enough better credit. Third, Level 1 marks never count towards classification, and neither do ungraded credit or credit transferred in from another institution. Fourth, there is a quality-assurance test: your best 60 credits at Level 3 must be at least as good as the class your score indicates, or you do not get that class.",
 "The calculation itself is called the weighted grade credit score, and it is worth working through once by hand so the logic is clear. For each module used in classification, multiply its credit size by its grade point: a 60-credit module with grade 2 contributes 120, a 30-credit module with grade 1 contributes 30. For Level 3 modules, double the result. Then add the Level 2 total to the doubled Level 3 total. With the maximum 240 credits in the calculation, the score runs from 360 (every module a Distinction) to 1440 (every module a grade 4). The OU divides that range into four bands: 360–630 is a First, 631–900 is a 2:1, 901–1170 is a 2:2, and 1171–1440 is a Third.",
 "A worked example shows how forgiving the best-credits rule can be. Suppose your best 120 credits at Level 2 average a pass grade of 2: 120 x 2 = 240. Suppose your best 120 credits at Level 3 also average a grade of 2: 120 x 2 = 240, doubled to 480. Your total weighted grade credit score is 240 + 480 = 720, which sits in the 2:1 band (631–900). The quality-assurance test then asks whether your best 60 Level 3 credits are at least 2:1 standard. If your best 60 Level 3 credits average grade 2 or better, the 2:1 stands. Notice what did not matter: any weaker modules outside your best 240 credits, and all of your Level 1 study. An OU student with a poor first year can still finish with a strong class, which is not true at most other universities.",
 "Module structure is the practical detail that trips OU students up most often. OU modules are commonly 30 or 60 credits, with some 120-credit modules, and a 60-credit module carries twice the weight of a 30-credit module at the same grade. Most part-time students take 60 credits a year. Because only the best 120 credits at each level count, the size of your modules changes which results survive into the calculation: a single 60-credit Distinction at Level 3 contributes 60 x 1 x 2 = 120 to your score, while a 60-credit grade 4 at the same level contributes 480. Choosing Level 3 modules is therefore a classification decision, not just an academic one, and it is worth checking the qualification regulations for your specific degree before you enrol.",
 "Exit qualifications are another OU-specific point worth knowing. An Honours degree needs 360 credits: 120 at Level 1, 120 at Level 2, and 120 at Level 3. If you stop earlier, you can leave with a Certificate of Higher Education (120 credits at Level 1), a Diploma of Higher Education (240 credits at Levels 1 and 2), or an Ordinary degree (300 credits). Only Honours degrees are classified; ordinary and designated degrees are awarded unclassified. Credit transfer through Recognition of Prior Learning counts towards your credit total but its grades never enter the classification calculation, so a student who transfers in a large amount of credit may find their class decided by as little as 120 credits of OU Level 3 study.",
 "Common mistakes at the OU are easy to list. The most frequent is treating the grade-point scale like a percentage scale and assuming a higher number is better — it is the opposite, and a score of 720 is a 2:1, not a poor result. The second is including Level 1 marks, which never count. The third is counting every module instead of only the best 120 credits at each level, which understates your position. The fourth is forgetting the quality-assurance test on the best 60 Level 3 credits, which can hold you to a lower class even when the headline score looks good. And the fifth is assuming the method is the same for every OU qualification: qualification-specific regulations can change which credit is eligible, so check the regulations for your degree, and confirm anything near a boundary with the OU's Student Support Team.",
 ],
 faqs: [
 {
 question: "How does the Open University calculate degree classification?",
 answer:
 "The OU calculates classification from your best 240 credits: your best 120 credits at Level 2 and your best 120 credits at Level 3, with Level 3 double-weighted. Each module carries a grade point from 1 (Distinction, best) to 4 (lowest pass), and the weighted grade credit score runs from 360 to 1440 — lower is better. First is 360–630, 2:1 is 631–900, 2:2 is 901–1170, Third is 1171–1440.",
 },
 {
 question: "Do Open University Level 1 modules count towards my degree?",
 answer:
 "Level 1 modules are required to progress and contribute to your total credit count, but their marks do not count towards your final degree classification. Only Level 2 and Level 3 module marks are included.",
 },
 {
 question: "How many credits do I need for an OU Honours degree?",
 answer:
 "You need 360 credits: 120 at Level 1, 120 at Level 2, and 120 at Level 3. You can also exit with a Certificate of Higher Education (120 credits at Level 1), a Diploma of Higher Education (240 credits at Levels 1 and 2), or an Ordinary degree (300 credits). Only Honours degrees are classified.",
 },
 {
 question: "What size are Open University modules?",
 answer:
 "OU modules are commonly 30 or 60 credits, with some 120-credit modules. Most part-time students take 60 credits per year. A 60-credit module carries twice the weight of a 30-credit module at the same grade in the classification calculation.",
 },
 {
 question: "Can I transfer credits from another university to the OU?",
 answer:
 "Yes, through Recognition of Prior Learning. Transferred credits count towards your credit total, but the grades from another institution are not included in your classification calculation. Only marks from OU modules contribute to your class.",
 },
 {
 question: "What is the OU quality-assurance test?",
 answer:
 "After your weighted grade credit score indicates a class, the OU checks that your best 60 credits from Level 3 modules are at least as good as that class. You need to satisfy both tests to qualify for the class the score indicates.",
 },
 ],
 },
 {
 slug: "st-andrews",
 name: "University of St Andrews",
 shortName: "St Andrews",
 keyword: "st andrews grade calculator",
 description:
 "Free St Andrews grade calculator. Calculate your University of St Andrews degree classification using the Scottish 4-year structure, the 20-point scale, and the credit-weighted mean and median of your Honours grades.",
 yearWeighting: "No year split: credit-weighted mean and median of Honours-level (3000+) grades",
 yearWeightY2: 0,
 yearWeightY3: 0,
 creditsPerYear: 120,
 defaultModuleCredits: "20",
 framework: "SCQF (Scotland)",
 degreeLength: "4 years (MA/BSc Honours)",
 specialNotes: [
 "St Andrews uses the Scottish Credit and Qualifications Framework (SCQF).",
 "Honours degrees are 4 years: 2 sub-honours years + 2 Honours years.",
 "Classification uses a credit-weighted mean and median of Honours-level grades (3000 level and above).",
 "There are no discretionary classification border zones.",
 "The university awards MA for arts/humanities and BSc for sciences as first degrees.",
 ],
 methodNote:
 "St Andrews does not weight two years against each other. Classification is determined by a common algorithm that calculates a credit-weighted mean and a median of all grades achieved in Honours-level modules (3000 level and above), on the 20-point Common Reporting Scale. First requires a mean of 16.5 or more, or a mean of 16.0–16.4 with a median of 16.5 or more. 2:1 requires a mean of 13.5–15.9, or a mean of 13.0–13.4 with a median of 13.5 or more. 2:2 requires a mean of 10.5–12.9, or a mean of 10.0–10.4 with a median of 10.5 or more. Third is a mean of 7.0–9.9. There are no discretionary border zones.",
 calculatorNote:
 "A percentage-based calculator cannot model St Andrews' 20-point mean-and-median algorithm directly, so use the tool above as a planning aid only: enter your Honours module marks with their credit values to see a credit-weighted average, then apply the mean and median rules on this page. Enter only Honours-level modules (3000 level and above) — sub-honours marks from Years 1 and 2 do not count. Convert your 20-point grades to the rough percentage equivalents in the scale table below only as a guide; the official algorithm works on the 20-point scale itself.",
 howToSteps: [
 "List every Honours-level module (3000 level and above) with its grade on the 20-point scale and its SCQF credit value (usually 20).",
 "Work out the credit-weighted mean of those grades, to one decimal place.",
 "Work out the median of those grades, to one decimal place.",
 "Apply the algorithm: mean 16.5+ (or 16.0–16.4 with median 16.5+) is a First; mean 13.5–15.9 (or 13.0–13.4 with median 13.5+) is a 2:1; mean 10.5–12.9 (or 10.0–10.4 with median 10.5+) is a 2:2; mean 7.0–9.9 is a Third.",
 ],
 whenToUse:
 "Use this St Andrews grade calculator page when you are in your Honours years and want to understand where you stand under the university's own mean-and-median algorithm. It is most useful after Junior Honours results, when you can see how much your Senior Honours grades need to move the mean and the median. The university's classification policy and your school's handbook remain the authoritative sources, and individual schools publish their own marking and conversion procedures.",
 splitMethod: false,
 content: [
 "The University of St Andrews, founded in 1413, is Scotland's oldest university, and it classifies degrees in a way no English university does. There is no Year 2 versus Year 3 weighting to argue about, because the calculation does not work like that at all. Instead, St Andrews runs a common algorithm over every grade you earned in your Honours years and looks at two numbers: the credit-weighted mean of your Honours grades and the median of those grades, both on the university's 20-point Common Reporting Scale. That dual test is the whole point of the page, and it is also why a percentage-based calculator can only ever be a planning aid for St Andrews students.",
 "The key takeaways for St Andrews students are short. First, only Honours-level modules count — modules at 3000 level and above, normally your Junior Honours (Year 3) and Senior Honours (Year 4) years. Sub-honours marks from Years 1 and 2 do not count towards classification at all. Second, the algorithm uses both the mean and the median, so a handful of very high grades cannot rescue a weak overall profile the way they can under a simple average. Third, there are no discretionary border zones: the university's published policy says so plainly, so there is no borderline uplift to hope for. Fourth, the 20-point scale is a guide to classification, not a percentage: 17 to 20 is First-class territory, 14 to 16 is 2:1, 11 to 13 is 2:2, and 7 to 10 is Third.",
 "The classification table is worth stating in full, because it is the algorithm itself. A credit-weighted mean of 16.5 or more gives a First, whatever the median is. A mean of 16.0 to 16.4 gives a First only if the median is 16.5 or more; otherwise it is a 2:1. A mean of 13.5 to 15.9 gives a 2:1, and a mean of 13.0 to 13.4 gives a 2:1 only if the median is 13.5 or more. A mean of 10.5 to 12.9 gives a 2:2, and a mean of 10.0 to 10.4 gives a 2:2 only if the median is 10.5 or more. A mean of 7.0 to 9.9 gives a Third. Below 7.0, the result is not of Honours standard. Means and medians are calculated to one decimal place, with values rounded to the nearest tenth and exact halves rounded up.",
 "A worked example shows why the median matters. Suppose your twelve Honours modules, each worth 20 SCQF credits, carry these 20-point grades: 17, 16, 15, 18, 14, 16, 15, 17, 13, 16, 15, 14. The sum is 186, so the mean is 186 divided by 12, which is 15.5. Sorted, the grades run 13, 14, 14, 15, 15, 15, 16, 16, 16, 17, 17, 18, and the median — the middle of twelve values — is the average of the sixth and seventh, (15 + 16) / 2 = 15.5. A mean of 15.5 sits in the 13.5–15.9 band, so the result is a 2:1. Now change one grade: replace a 13 with a 19. The mean rises to 16.0, which on its own would still be a 2:1, but the median rises to 16.0 as well, still short of 16.5, so the result stays a 2:1. Under a simple average that single 19 might have felt like a First; under the St Andrews algorithm it is not, because the median holds the result down. That is the design: the median rewards consistent performance across all your Honours modules.",
 "The Scottish structure around the algorithm is the other thing English applicants get wrong. St Andrews Honours degrees run for four years: two sub-honours years of broad study, then Junior Honours and Senior Honours focused on your degree subject. Each year is 120 SCQF credits, modules are typically 20 SCQF credits, and an Honours degree needs 480 SCQF credits in total. Note that SCQF credits are not the same as FHEQ credits used in England: one SCQF credit equals half an FHEQ credit, so a 20-credit St Andrews module is equivalent to 10 FHEQ credits. The university awards an MA as the standard first degree in arts and humanities — a Scottish tradition, equivalent to a BA elsewhere despite the Master title — and a BSc in the sciences.",
 "School-level variation is the honest caveat on this page. Individual schools publish their own marking scales and procedures for converting marks to grades on the 20-point scale, so two schools can arrive at 20-point grades from different starting points. The classification algorithm itself is common across the university, but the grades that feed it are school-specific. If your school marks on a percentage scale and converts, ask your school for its conversion table before you try to model your result. The same applies to joint honours and to programmes with professional-body requirements: your school handbook, not a generic calculator, decides which modules count and how.",
 "Common mistakes at St Andrews are easy to list. The most frequent is including sub-honours marks in the calculation — Years 1 and 2 do not count, however good they were. The second is using a 25/75 or 30/70 Junior/Senior Honours weighting borrowed from another university; St Andrews does not weight the two Honours years against each other, it pools all Honours grades into one mean and one median. The third is treating the 20-point scale as a percentage: a grade of 14 is not 70%, it is a 2:1 indicator on a scale whose bands are 17–20 for First, 14–16 for 2:1, 11–13 for 2:2 and 7–10 for Third. The fourth is assuming a borderline uplift exists. It does not — the policy states there are no discretionary classification border zones, so a mean of 16.4 with a median of 16.4 is a 2:1, full stop.",
 ],
 faqs: [
 {
 question: "How does St Andrews calculate degree classification?",
 answer:
 "St Andrews uses a common algorithm based on the credit-weighted mean and the median of all grades achieved in Honours-level modules (3000 level and above), on the 20-point Common Reporting Scale. Sub-honours marks do not count. There are no discretionary border zones.",
 },
 {
 question: "Is a St Andrews degree 4 years?",
 answer:
 "Yes. Scottish Honours degrees at St Andrews are four years: two sub-honours years followed by Junior Honours (Year 3) and Senior Honours (Year 4). St Andrews awards an MA as the standard arts and humanities first degree, equivalent to a BA at English universities, and a BSc for sciences.",
 },
 {
 question: "What credit framework does St Andrews use?",
 answer:
 "St Andrews uses the Scottish Credit and Qualifications Framework (SCQF). Each year is 120 SCQF credits, modules are typically 20 SCQF credits, and an Honours degree needs 480 SCQF credits. One SCQF credit equals 0.5 FHEQ credits.",
 },
 {
 question: "Do sub-honours marks count at St Andrews?",
 answer:
 "No. Sub-honours marks from Years 1 and 2 do not count towards your final degree classification. You need sufficient sub-honours grades to be admitted to the Honours programme, but the classification algorithm only uses Honours-level grades.",
 },
 {
 question: "What does a 16.5 mean at St Andrews?",
 answer:
 "On the 20-point scale, a credit-weighted mean of 16.5 or more gives a First, whatever the median is. A mean of 16.0 to 16.4 gives a First only if the median is also 16.5 or more. The 20-point scale is a rough guide: 17–20 indicates First, 14–16 indicates 2:1, 11–13 indicates 2:2, and 7–10 indicates Third.",
 },
 {
 question: "Is there a borderline uplift at St Andrews?",
 answer:
 "No. The university's published classification policy states that there are no discretionary classification border zones. The mean and median thresholds decide the class.",
 },
 ],
 },
 {
 slug: "portsmouth",
 name: "University of Portsmouth",
 shortName: "Portsmouth",
 keyword: "portsmouth grade calculator",
 description:
 "University of Portsmouth degree classification uses the best of three published methods — there is no single fixed year weighting. See the universities hub for a summary and a general calculator.",
 yearWeighting: "Best of three methods (no fixed year split)",
 yearWeightY2: 0,
 yearWeightY3: 0,
 creditsPerYear: 120,
 defaultModuleCredits: "20",
 framework: "FHEQ (England)",
 degreeLength: "3 years (or 4 with placement)",
 specialNotes: [
 "Portsmouth's current regulations use the best of specified Level 5 and Level 6 calculation methods, including a route based on Level 6 after the lowest 20 credits are excluded.",
 "The current regulation does not state a standard borderline uplift.",
 ],
 methodNote:
 "Portsmouth's current regulations do not use one fixed year weighting. They set out alternative calculation methods — including a route based on Level 6 after the lowest 20 credits are excluded — and award the better outcome where applicable. This page has been consolidated into the universities hub; see the hub for the Portsmouth method summary.",
 calculatorNote:
 "Use the general university grade calculator on the universities hub for a credit-weighted planning estimate, then check the result against Portsmouth's published best-of-three methods in the Assessment Regulations.",
 howToSteps: [
 "See the universities hub for the Portsmouth method summary and the general calculator.",
 ],
 whenToUse:
 "Portsmouth students should use the universities hub, which summarises Portsmouth's best-of-three method and links to the university's own calculator and regulations.",
 splitMethod: false,
 content: [
 "The University of Portsmouth's degree classification method is summarised on the universities hub. Its current regulations use the best of specified Level 5 and Level 6 calculation methods, including a route based on Level 6 after the lowest 20 credits are excluded, rather than one fixed year weighting.",
 ],
 faqs: [
 {
 question: "What year weighting does the University of Portsmouth use?",
 answer:
 "Portsmouth's current regulations do not use one fixed year weighting. They set out alternative calculation methods and award the better outcome where applicable. See the universities hub for a summary and the Assessment Regulations for the full rules.",
 },
 ],
 },
 {
 slug: "leeds",
 name: "University of Leeds",
 shortName: "Leeds",
 keyword: "leeds grade calculator",
 description:
 "Free University of Leeds grade calculator. Calculate your degree classification using Leeds' 1:2 Year 2/Year 3 weighting and the automatic 0.5 borderline rule.",
 yearWeighting: "1:2 (Year 2 / Year 3)",
 yearWeightY2: 33,
 yearWeightY3: 67,
 creditsPerYear: 120,
 defaultModuleCredits: "20",
 framework: "FHEQ (England)",
 degreeLength: "3 years (or 4 with placement/study abroad)",
 specialNotes: [
 "Leeds uses a 1:2 Year 2 to Year 3 weighting for the current taught-programme algorithm.",
 "Classification averages within 0.5 of the next boundary are awarded the higher classification automatically.",
 "The current algorithm applies if you started your programme in or after 2022/23 and began your final year in or after 2024/25.",
 "Standard modules are 10 or 20 credits, dissertations typically 30 or 40 credits.",
 "Integrated master's degrees use a 1:2:2 weighting across Years 2, 3 and 4.",
 ],
 methodNote:
 "Leeds classifies Bachelor's honours degrees from credit-weighted average grades, with the classification average determined by a 1:2 weighting between programme Years 2 and 3 — the final year counts twice as much as the second year, and Year 1 does not count. The thresholds are 70.0 for a First, 60.0 for a 2:1, 50.0 for a 2:2 and 40.0 for a Third, and averages within 0.5 of the next boundary are awarded the higher classification automatically. This algorithm applies if you started your programme in or after 2022/23 and began your final year in or after 2024/25; earlier cohorts follow the previous Rules for Award. Integrated master's degrees use a 1:2:2 weighting across Years 2, 3 and 4.",
 calculatorNote:
 "Use the year-weighting tool below, pre-set to Leeds' 1:2 split: enter your credit-weighted Year 2 average and your Year 3 average, and it returns your classification average. The tool applies the 0.5 rule — an average of 69.5 or above is a First. Use the module calculator above first if you need to work out each year's credit-weighted average from individual module marks.",
 howToSteps: [
 "Work out your credit-weighted Year 2 average from your Level 5 module marks and credits (10, 20, 30 or 40 credits each).",
 "Work out your credit-weighted Year 3 average the same way from your Level 6 modules.",
 "Combine them 1:2 — Year 3 counts twice as much as Year 2 — using the year-weighting tool below, pre-set to Leeds' split.",
 "Apply the 0.5 rule: an average within 0.5 of the next boundary is awarded the higher class (69.5 is a First).",
 ],
 whenToUse:
 "Use this Leeds grade calculator when you have module marks for Years 2 and 3 and want a provisional classification under Leeds' published algorithm. It is most useful after second-year results, when you can see exactly what final-year average you need, and again after final-year results when you are checking whether the 0.5 rule lifts you. Your parent school's regulations and the Progression and Awards Board remain the authoritative sources, and programme or professional-body rules can vary the method.",
 splitMethod: true,
 content: [
 "The University of Leeds is a Russell Group research university with more than 38,000 students, and its classification method is one of the clearest in the UK — which is exactly why it is a good page to get right. The current algorithm, published in the university's Academic Regulations for Taught Programmes and explained on its Classification guidance page, is a 1:2 weighting between programme Years 2 and 3. Your second year counts once, your final year counts twice, and your first year does not count at all. The thresholds are 70.0 for a First, 60.0 for a 2:1, 50.0 for a 2:2 and 40.0 for a Third. And Leeds has the most generous borderline rule in this guide: any classification average within 0.5 of the next boundary is awarded the higher classification automatically.",
 "The key takeaways for Leeds students are short. First, the 1:2 split means the final year is worth twice the second year, so a strong final year can rescue a weaker second year, but not by as much as at a 25/75 university. Second, the 0.5 rule is automatic, not discretionary: 69.5 is a First, 59.5 is a 2:1, and 49.5 is a 2:2, with no profile check and no board discretion needed. Third, the current algorithm only applies if you started your programme in or after 2022/23 and began your final year in or after 2024/25. If you started earlier, or began your final year earlier, your award follows the previous Rules for Award — check with your parent school which set of rules covers you, because the numbers are not the same.",
 "A worked example shows how the 1:2 split and the 0.5 rule interact. Suppose your credit-weighted Year 2 average is 62% and your Year 3 average is 71%. The classification average is (62 x 1 + 71 x 2) / 3 = 204 / 3 = 68.0%, a 2:1 — and 68.0 is more than 0.5 away from 70, so the borderline rule does not help. Now suppose your Year 3 average is 73% instead: (62 + 146) / 3 = 208 / 3 = 69.33%, still a 2:1, because 69.33 is 0.67 below the boundary. Push Year 3 to 74% and the average becomes (62 + 148) / 3 = 210 / 3 = 70.0%, a First on the threshold itself. And if Year 2 had been 66% with Year 3 at 71.5%, the average is (66 + 143) / 3 = 209 / 3 = 69.67%, which is within 0.5 of 70 and is awarded a First automatically. That last case is the one students miss: at Leeds, 69.5 is a First, and you do not need to appeal for it.",
 "Module structure at Leeds is more varied than at most universities, and it matters for the arithmetic. Modules are commonly 10 or 20 credits, with dissertations and capstone projects typically worth 30 or 40 credits, and each year totals 120 credits. A 40-credit dissertation counts four times as much as a 10-credit module, so a strong dissertation can move your year average by several points while a weak 10-credit module barely registers. Work out each year's credit-weighted average properly — multiply each module mark by its credits, add the results, divide by 120 — rather than averaging module marks as if they were equal. The module calculator above does that step for you.",
 "Integrated master's degrees follow a different split, and Leeds students on four-year MEng, MSci and similar programmes should not use the 1:2 rule. For integrated degrees of Master and Bachelor, the classification average uses a 1:2:2 weighting across programme Years 2, 3 and 4. Year 1 still does not count. The same 0.5 borderline rule applies. If you are on an integrated programme with a year abroad or a year in industry, the treatment of that year depends on your programme: some years abroad are graded and counted, others are pass or fail and excluded. Your school will tell you which arrangement applies to your course, and the university's own guidance says to check with your parent school if you are unsure.",
 "Placement and study-abroad years are the other common Leeds complication. A Year in Industry or Year Abroad is typically assessed as pass or fail, or recorded separately, and does not contribute a graded mark to the classification average. That means a four-year degree with a placement year is still classified on the same Years 2 and 3 marks as a three-year degree, with the placement year sitting outside the calculation. Skills electives and other special arrangements can also change which marks count. The university publishes downloadable classification calculators for its own students, and those spreadsheets are worth comparing against this tool — a good web calculator should agree with the university's own spreadsheet, and if the two disagree, trust the university's version and check your programme regulations.",
 "Common mistakes at Leeds are easy to list. The most frequent is using a 33/67 split as if it were exact: 1:2 is one third and two thirds, so 33/67 is close, but the exact ratio matters near a boundary, and the year-weighting tool below is pre-set to the exact 1:2 split for that reason. The second is including Year 1 marks, which do not count. The third is forgetting the cohort scope: students who started before 2022/23 are not on the current algorithm. The fourth is assuming the 0.5 rule needs an appeal or a profile check — it does not, it is automatic. And the fifth is treating the result as final: Leeds states plainly that all marks and classifications must be confirmed by the Progression and Awards Board, so treat any calculator result as provisional until the board confirms it.",
 ],
 faqs: [
 {
 question: "What year weighting does the University of Leeds use?",
 answer:
 "For the current algorithm, Leeds uses a 1:2 weighting between programme Years 2 and 3: the final year counts twice as much as the second year, and Year 1 does not count. Integrated master's degrees use 1:2:2 across Years 2, 3 and 4.",
 },
 {
 question: "Does Leeds have a borderline policy?",
 answer:
 "Yes, and it is automatic. Classification averages within 0.5 of the next class boundary are awarded the higher classification — 69.5 is a First, 59.5 is a 2:1, 49.5 is a 2:2. No appeal or profile check is needed.",
 },
 {
 question: "What module sizes does Leeds use?",
 answer:
 "Leeds modules are commonly 10, 20, 30 or 40 credits. A 40-credit dissertation counts four times as much as a 10-credit module in your year average. Each year totals 120 credits.",
 },
 {
 question: "Does the Year in Industry count towards my Leeds degree?",
 answer:
 "A Year in Industry at Leeds is typically assessed as pass or fail and does not contribute a graded mark towards your degree classification. Your classification is based on your Level 5 and Level 6 academic module marks.",
 },
 {
 question: "Which Leeds students use the 1:2 algorithm?",
 answer:
 "The current algorithm applies if you started your programme in or after 2022/23 and began your final year in or after 2024/25. If you started earlier, your award follows the previous Rules for Award — check with your parent school.",
 },
 {
 question: "Is Leeds a Russell Group university?",
 answer:
 "Yes. The University of Leeds is a member of the Russell Group, a collection of 24 leading UK research-intensive universities.",
 },
 ],
 },
 {
 slug: "swansea",
 name: "Swansea University",
 shortName: "Swansea",
 keyword: "swansea grade calculator",
 description:
 "Free Swansea University grade calculator. Calculate your degree classification using Swansea's 3:2:1 banding method — best 80 final-year credits triple-weighted.",
 yearWeighting: "3:2:1 banding (best 80 Level 6 credits x3, next 80 credits x2, remaining Level 5 x1)",
 yearWeightY2: 0,
 yearWeightY3: 0,
 creditsPerYear: 120,
 defaultModuleCredits: "20",
 framework: "FHEQ (Wales)",
 degreeLength: "3 years (or 4 with placement/year abroad)",
 specialNotes: [
 "Swansea's standard method is a 3:2:1 banding across defined Level 6 and Level 5 credit sets, not a simple year split.",
 "Borderline cases within 2% of a boundary are considered under the preponderance and exit-velocity principles.",
 "Professionally accredited engineering and some Physics programmes use a different 2:1 banding instead.",
 "Standard modules are 10 or 20 credits.",
 ],
 methodNote:
 "Swansea's standard three-year method is a 3:2:1 banding, not a year split. The best 80 credits of your final year go into Band 3 (weight 3), the remaining 40 final-year credits and your best 40 Level 5 credits go into Band 2 (weight 2), and the remaining Level 5 credits go into Band 1 (weight 1). The weighted average of those bands is your classification average, against the standard boundaries of 70, 60, 50 and 40. If your average falls within 2% of a boundary, the board considers the preponderance principle (at least half the counted credit in the higher band) and the exit-velocity principle (your final-year average in the higher band). Professionally accredited engineering and some Physics programmes use a simpler 2:1 banding instead.",
 calculatorNote:
 "A percentage-based calculator cannot model Swansea's banding directly, so use the tool above as a planning aid only: enter your module marks with their credit values to see a credit-weighted average, then apply the 3:2:1 banding described on this page — best 80 final-year credits triple-weighted, the next 80 credits double-weighted, the rest single-weighted. The worked example below shows the arithmetic step by step.",
 howToSteps: [
 "List your Level 5 and Level 6 modules with their marks and credit values (usually 10 or 20 credits).",
 "Sort your final-year (Level 6) modules: the best 80 credits go into Band 3 (weight 3), the remaining 40 credits into Band 2 (weight 2).",
 "Sort your Level 5 modules: the best 40 credits go into Band 2 (weight 2), the rest into Band 1 (weight 1).",
 "Calculate the weighted average: (Band 3 average x 240 + Band 2 average x 160 + Band 1 average x 80) / 480.",
 "Compare the result with the boundaries (70, 60, 50, 40) and check the 2% borderline window if you are close.",
 ],
 whenToUse:
 "Use this Swansea grade calculator page when you have Level 5 and Level 6 marks and want to understand your position under Swansea's banding method, which rewards your best final-year work more than any simple year split does. It is most useful when you are choosing final-year modules or checking whether a strong final year can lift you across a boundary. Your college's regulations and the Progression and Awards Board remain the authoritative sources, and engineering and Physics students should check whether the 2:1 banding applies to them instead.",
 splitMethod: false,
 content: [
 "Swansea University is a research-led university on the coast of South Wales, and its classification method is the most interesting in this guide — because it is not a year split at all. Most UK universities weight one year against another, but Swansea sorts your modules into bands and weights the bands. The best 80 credits of your final year are triple-weighted, the next 80 credits are double-weighted, and the rest are single-weighted. That design rewards your best final-year work far more than a 33/67 split ever could, and it means two Swansea students with identical year averages can end up with different classifications depending on which modules their best marks sit in. If you are a Swansea student using a generic year-split calculator, you are using the wrong method.",
 "The key takeaways for Swansea students are short. First, your best 80 final-year credits count three times as much as your weakest second-year credits, so the modules you do best in during your final year matter enormously. Second, the banding uses your best credits, not all credits, so a weak module can drop into a lower band or out of the weighted calculation in a way that helps you. Third, there is a genuine borderline process: if your average falls within 2% of a boundary, the board looks at whether at least half your counted credit sits in the higher band (the preponderance principle) and whether your final-year average is in the higher band (the exit-velocity principle). Fourth, engineering and Physics students should stop here and check: professionally accredited engineering programmes and some Physics cohorts use a different 2:1 banding, not the 3:2:1 method.",
 "The banding itself is worth stating precisely, because the detail is the method. For a standard three-year degree, the marks in the best 80 credits of the final year are placed in Band 3 and given a weighting of 3. The marks in the remaining 40 final-year credits, and the best 40 credits at Level 5, are placed in Band 2 and given a weighting of 2. The marks in the remaining Level 5 credits are placed in Band 1 and given a weighting of 1. The weighted degree classification average is then calculated from those three bands. For four-year degrees with a year abroad or in industry, the same bands apply, with the year away given a weighting of 1 in a Band S — and the Level S mark is only included if it improves your result. For advanced initial degrees the bands run to 4:3:2:1 across Levels 7, 6 and 5.",
 "A worked example shows how the banding rewards strong final-year work. Suppose your final-year modules are six 20-credit modules at 72, 74, 70, 68, 65 and 60%. Your best 80 credits are 72, 74, 70 and 68, averaging 71%, and they go into Band 3. Your remaining 40 final-year credits average 62.5%. Suppose your best 40 Level 5 credits average 64% and your remaining 80 Level 5 credits average 58%. Band 2 is the average of the remaining final-year 40 credits and the best Level 5 40 credits: (62.5 + 64) / 2 = 63.25%. Band 1 is 58%. The weighted average is (71 x 80 x 3 + 63.25 x 80 x 2 + 58 x 80 x 1) / (80 x 3 + 80 x 2 + 80 x 1) = (17,040 + 10,120 + 4,640) / 480 = 31,800 / 480 = 66.25%, a 2:1. Notice that the simple year averages would have been 68.2% in the final year and 60% in the second year — a 33/67 split would give 65.4%, nearly a point lower. The banding paid you for your best final-year modules.",
 "The borderline process is the other half of the Swansea method, and it is more structured than most universities'. If your classification average falls within 2% of a boundary — the window of opportunity — the Progression and Awards Board considers two principles. The preponderance principle asks whether at least half of the credit contributing to your classification sits in the higher band: for a three-year degree, that means 120 or more credits at 70% or above to move from a 2:1 to a First. The exit-velocity principle asks whether your final-year average, unweighted, sits in the higher band. Satisfying either principle normally earns the higher class. Direct entrants to the final year are a special case: their classification is based on the straight average of the modules pursued at Swansea in the final year.",
 "Module structure at Swansea follows the standard Welsh pattern: 120 credits a year, with modules typically worth 10 or 20 credits. Year 1 (Level 4) marks do not normally contribute to the classification, although you must pass Level 4 to progress. Years abroad and years in industry are treated as Level S or Level E: a year abroad can contribute at a weighting of 1 if it helps you, while a year in industry is normally pass or fail and does not contribute. The exceptions matter as much as the rule: professionally accredited engineering programmes and undergraduate Physics programmes from the 2025/26 cohort use a 2:1 banding — Level 6 marks weighted 2, Level 5 marks weighted 1 — instead of the 3:2:1 method. If you are on one of those programmes, the worked example above does not apply to you.",
 "Common mistakes at Swansea are easy to list. The most frequent is using a 30/70 or 33/67 year split, which the university does not publish for the standard method and which understates strong final-year work. The second is counting every module equally instead of sorting your best 80 final-year credits into Band 3 — the banding is the method, and skipping it gives the wrong answer. The third is forgetting the exceptions: engineering and Physics students who apply the 3:2:1 method to a 2:1 programme will overestimate their result. The fourth is assuming the borderline window is automatic: unlike Leeds' 0.5 rule, Swansea's borderline process is a board decision based on the preponderance and exit-velocity principles, so a 68.5% average is a 2:1 unless the profile supports a raise. Check your college's regulations and, if you are close to a boundary, look at your profile before you assume anything.",
 ],
 faqs: [
 {
 question: "What year weighting does Swansea University use?",
 answer:
 "Swansea's standard method is not a year split — it is a 3:2:1 banding. The best 80 final-year credits are weighted 3, the remaining 40 final-year credits and the best 40 Level 5 credits are weighted 2, and the remaining Level 5 credits are weighted 1. Engineering and some Physics programmes use a 2:1 banding instead.",
 },
 {
 question: "Does Swansea have a borderline policy?",
 answer:
 "Yes. If your average falls within 2% of a boundary, the board considers the preponderance principle (at least half your counted credit in the higher band — 120+ credits for a three-year degree) and the exit-velocity principle (your final-year average in the higher band). Either can earn the higher class.",
 },
 {
 question: "What credit framework does Swansea use?",
 answer:
 "Swansea uses the Framework for Higher Education Qualifications (FHEQ), the same framework used across England, Wales and Northern Ireland. Each year is 120 credits, with standard modules worth 10 or 20 credits.",
 },
 {
 question: "Do first-year grades count at Swansea?",
 answer:
 "At most Swansea programmes, first-year (Level 4) marks do not count towards the final degree classification. You must pass Level 4 to progress, but the marks are excluded from the classification calculation.",
 },
 {
 question: "How does Swansea treat a year abroad or in industry?",
 answer:
 "A year abroad is treated as Level S and given a weighting of 1, but only if including it improves your result. A year in industry is normally assessed as pass or fail and does not contribute to the classification.",
 },
 {
 question: "Which Swansea programmes do not use the 3:2:1 banding?",
 answer:
 "Professionally accredited engineering programmes and undergraduate Physics programmes from the 2025/26 cohort use a 2:1 banding instead: Level 6 marks weighted 2 and Level 5 marks weighted 1. Check your programme regulations if you are on one of those courses.",
 },
 ],
 },
 {
 slug: "sheffield-hallam",
 name: "Sheffield Hallam University",
 shortName: "Sheffield Hallam",
 keyword: "sheffield hallam grade calculator",
 description:
 "Free Sheffield Hallam University grade calculator. Calculate your degree classification using SHU Regulation 10: the best of 25/75 or 100% Level 6, with published borderline rules.",
 yearWeighting: "Best of 25/75 (Level 5 / Level 6) or 100% Level 6",
 yearWeightY2: 25,
 yearWeightY3: 75,
 creditsPerYear: 120,
 defaultModuleCredits: "20",
 framework: "FHEQ (England)",
 degreeLength: "3 years (or 4 with placement)",
 specialNotes: [
 "Sheffield Hallam Regulation 10 uses a best-outcome method: 25/75 or 100% Level 6, whichever gives the better result.",
 "Borderline bands are published: 68.01–69.99% with 70% or more in at least 60 Level 6 credits gives a First.",
 "Standard modules are 20 credits, with dissertations typically 40 credits.",
 "Integrated master's degrees use 25/75 (Level 6/Level 7) or 20/30/50 (Level 5/Level 6/Level 7), best outcome.",
 ],
 methodNote:
 "Sheffield Hallam Regulation 10 calculates honours degrees by the best-outcome method: Method 1 is 25% of the Level 5 average and 75% of the Level 6 average; Method 2 is 100% of the Level 6 average. The Assessment Board automatically uses whichever method gives you the better result. The borderline rules are published: a final average of 68.01–69.99% with 70% or more in at least 60 Level 6 credits gives a First; 58.01–59.99% with 60% or more in at least 60 Level 6 credits gives a 2:1; 48.01–49.99% with 50% or more in at least 60 Level 6 credits gives a 2:2. Integrated master's degrees use the same best-outcome idea across Levels 6 and 7.",
 calculatorNote:
 "Use the year-weighting tool below, pre-set to SHU's Method 1 (25/75): enter your credit-weighted Level 5 and Level 6 averages. Then check Method 2 separately — your Level 6 average on its own — and take the better of the two results. If either result falls in a borderline band, check the Level 6 credit rule on this page: 60 or more Level 6 credits at the higher band's threshold can lift you a class.",
 howToSteps: [
 "Work out your credit-weighted Level 5 average and your Level 6 average from your module marks and credits (usually 20 credits, dissertations 40).",
 "Method 1: combine them 25/75 using the year-weighting tool below, pre-set to SHU's split.",
 "Method 2: take your Level 6 average on its own.",
 "Take the better of the two methods — the board does this automatically — then check the borderline table if you are in a borderline band.",
 ],
 whenToUse:
 "Use this Sheffield Hallam grade calculator when you have Level 5 and Level 6 marks and want a provisional classification under Regulation 10. It is most useful after second-year results, when you can see whether your final year needs to carry you under Method 2, and again after final-year results when you are checking the borderline table. Regulation 10 and your course requirements remain the authoritative sources, and the calculation can change with your confirmed-results date, so check the current version of the regulation.",
 splitMethod: true,
 content: [
 "Sheffield Hallam University (SHU) is one of the largest universities in the UK, with more than 30,000 students, and it has the most generous classification method in this guide — because it calculates your degree twice and gives you the better answer. Regulation 10, the university's published rule for the calculation of awards, sets out two methods for honours degrees. Method 1 combines your Level 5 average (25%) with your Level 6 average (75%). Method 2 uses your Level 6 average alone. The method used is the one that gives you the best outcome, selected automatically by the Assessment Board. If your second year was weak and your final year was strong, Method 2 can rescue a classification that Method 1 would have dragged down. No other university in this guide does this.",
 "The key takeaways for Sheffield Hallam students are short. First, always calculate both methods: the better one is your result, and many students only ever work out Method 1. Second, the borderline rules are published and precise, not discretionary: 68.01–69.99% with 70% or more in at least 60 Level 6 credits gives a First, 58.01–59.99% with 60% or more in at least 60 Level 6 credits gives a 2:1, and 48.01–49.99% with 50% or more in at least 60 Level 6 credits gives a 2:2. Third, the 60-credit condition is the part students miss: a borderline average alone is not enough, you need enough Level 6 credit at the higher mark. Fourth, the calculation can change with your confirmed-results date and course-specific requirements, so check the current Regulation 10 rather than an old copy.",
 "A worked example shows how the best-outcome method works in practice. Suppose your credit-weighted Level 5 average is 58% and your Level 6 average is 69%. Method 1 gives (58 x 0.25) + (69 x 0.75) = 14.5 + 51.75 = 66.25%, a 2:1. Method 2 gives 69% on its own. That is inside the 68.01–69.99% borderline band for a First, so the next question is your Level 6 profile: do you have at least 60 credits at Level 6 with marks of 70% or more? If you have, say, 80 Level 6 credits at 70% or above, the borderline rule lifts you to a First. If you have only 40 credits at 70% or above, you stay at a 2:1. Same averages, different profile, different degree class — and the difference is entirely in the Level 6 credit breakdown, which is why counting your credits matters as much as averaging your marks.",
 "Module structure at Sheffield Hallam follows the standard pattern: 120 credits a year, modules typically worth 20 credits, with dissertations and final-year projects usually worth 40 credits. An Honours degree needs 360 credits, with at least 120 at Level 6 and at least 120 at Level 5. Credit gained elsewhere can count towards your total, but marks for that credit are not used in the classification calculation — and for Method 2, if you transferred credit in, at least 120 credits must have been studied at the university for an honours degree to be awarded. Ordinary degrees need 300 credits with at least 60 at Level 6, and are classified on a different scale (Pass 40–55.99%, Merit 56–69.99%, Distinction 70%+), so do not apply the honours borderline table to an ordinary degree.",
 "Integrated master's degrees use the same best-outcome idea at a higher level. Method 1 for an integrated master's is 25% of the Level 6 average and 75% of the Level 7 average; Method 2 is 20% of Level 5, 30% of Level 6 and 50% of Level 7. The borderline table is the same shape, but measured in Level 7 credits: 68.01–69.99% with 70% or more in at least 60 Level 7 credits gives a First, and so on down the classes. If you are on an integrated programme, use the Level 6 and Level 7 figures, not the honours-degree 25/75 split — the numbers look similar but they are not the same calculation.",
 "Placement years are the other common Sheffield Hallam complication. Many programmes include an optional or compulsory placement year, which is typically assessed as pass or fail and does not contribute graded marks to the classification. Your classification is based on Level 5 and Level 6 academic marks only. The same applies to credit transferred from another institution: it can help you meet the credit total, but its marks do not enter the calculation. Check Regulation 10 for your confirmed-results date, because the regulation notes that the calculation changes by confirmed-results date, and course-specific requirements or Recognition of Prior Learning exclusions can also apply.",
 "Common mistakes at Sheffield Hallam are easy to list. The most frequent is only calculating Method 1 and never checking Method 2 — if your final year was your best year, Method 2 is often the better result and the board will use it, so you should know about it before results day. The second is assuming a borderline average is enough on its own: the 60-credit condition at Level 6 is part of the rule, and without it you stay in the lower class. The third is applying a 33/67 split borrowed from another university, which understates both the final year and the Method 2 route. The fourth is counting transferred credit marks in the average. Work out both methods, count your Level 6 credits at each band, and check the current Regulation 10.",
 ],
 faqs: [
 {
 question: "What year weighting does Sheffield Hallam use?",
 answer:
 "Regulation 10 uses a best-outcome method, not one fixed split. Method 1 is 25% Level 5 and 75% Level 6; Method 2 is 100% Level 6. The board automatically uses whichever method gives you the better result.",
 },
 {
 question: "Does Sheffield Hallam have a borderline policy?",
 answer:
 "Yes, and it is published in Regulation 10. A final average of 68.01–69.99% with 70% or more in at least 60 Level 6 credits gives a First; 58.01–59.99% with 60% or more in at least 60 Level 6 credits gives a 2:1; 48.01–49.99% with 50% or more in at least 60 Level 6 credits gives a 2:2.",
 },
 {
 question: "Does the placement year count at Sheffield Hallam?",
 answer:
 "Placement years at Sheffield Hallam are typically assessed as pass or fail. The graded marks from your placement do not contribute to your degree classification, which is based on Level 5 and Level 6 academic module marks only.",
 },
 {
 question: "What module sizes does Sheffield Hallam use?",
 answer:
 "Sheffield Hallam uses standard 20-credit modules for most courses. Dissertations and major projects are typically 40 credits. Each year totals 120 credits, and an Honours degree needs 360 credits with at least 120 at Level 6.",
 },
 {
 question: "What if I transferred credit from another university?",
 answer:
 "Transferred credit can count towards your 360-credit total, but its marks are not used in the classification calculation. For Method 2, at least 120 credits must have been studied at the university for an honours degree to be awarded.",
 },
 {
 question: "How are integrated master's degrees calculated at SHU?",
 answer:
 "Integrated master's degrees use the same best-outcome idea: Method 1 is 25% Level 6 and 75% Level 7, and Method 2 is 20% Level 5, 30% Level 6 and 50% Level 7. The borderline table is measured in Level 7 credits instead of Level 6.",
 },
 ],
 },
 {
 slug: "exeter",
 name: "University of Exeter",
 shortName: "Exeter",
 keyword: "exeter grade calculator",
 description:
 "Free University of Exeter grade calculator. Calculate your degree classification using Exeter's 1:2 Stage 2/Stage 3 weighting and the published threshold and profile routes.",
 yearWeighting: "1:2 (Stage 2 / Stage 3)",
 yearWeightY2: 33,
 yearWeightY3: 67,
 creditsPerYear: 120,
 defaultModuleCredits: "15",
 framework: "FHEQ (England)",
 degreeLength: "3 years (or 4 with placement/year abroad)",
 specialNotes: [
 "Exeter is a Russell Group university with high academic standards.",
 "Module sizes include 15 and 30 credits (rather than the 20 common elsewhere).",
 "The standard three-year weighting is 1:2 Stage 2 to Stage 3.",
 "Exeter publishes threshold and credit-profile routes to a higher class, and the average is calculated to two decimal places with no rounding.",
 ],
 methodNote:
 "For a standard three-year Bachelor's degree, Exeter weights the credit-weighted mean of Stage 2 and Stage 3 in the ratio 1:2 — Stage 3 counts twice as much as Stage 2. The average is calculated to two decimal places and is not rounded. The classification thresholds are: First at 69.50% or above, or 68.00% or above with at least 50% of weighted credits at 70% or more; 2:1 at 59.50% or above, or 58.00% or above with at least 50% of weighted credits at 60% or more; 2:2 at 49.50% or above, or 48.00% or above with at least 50% of weighted credits at 50% or more; Third at 40.00% or above. Year-out and integrated-programme variants use different stage ratios in the handbook.",
 calculatorNote:
 "Use the year-weighting tool below, pre-set to Exeter's 1:2 split: enter your credit-weighted Stage 2 average and your Stage 3 average. Then check the profile route: if your average is between 68.00% and 69.49%, count whether at least half of your weighted credits carry marks of 70% or more — if they do, you qualify for a First. The same check applies at the 2:1 and 2:2 boundaries.",
 howToSteps: [
 "Work out your credit-weighted Stage 2 average from your Level 5 module marks and credits (usually 15 or 30 credits each).",
 "Work out your credit-weighted Stage 3 average the same way from your Level 6 modules.",
 "Combine them 1:2 using the year-weighting tool below, pre-set to Exeter's split — Stage 3 counts twice as much as Stage 2.",
 "Apply the threshold and profile routes: 69.50% is a First outright, and 68.00–69.49% is a First if at least 50% of your weighted credits are at 70% or more.",
 ],
 whenToUse:
 "Use this Exeter grade calculator when you have Stage 2 and Stage 3 marks and want a provisional classification under the university's handbook rules. It is most useful after Stage 2 results, when you can see what Stage 3 average you need, and again after Stage 3 results when you are checking the profile route. The handbook and your programme specification remain the authoritative sources, and year-out and integrated-programme variants use different stage ratios.",
 splitMethod: true,
 content: [
 "The University of Exeter is a Russell Group research university with more than 25,000 students across campuses in Exeter and Penryn, and its classification method has a distinctive feature most students miss: there are two ways to earn each class. The standard route is a threshold — 69.50% for a First, 59.50% for a 2:1, 49.50% for a 2:2, 40.00% for a Third. The second route is a credit profile: a lower average still earns the higher class if at least half of your weighted credits sit at or above the higher band's threshold. A student with 68.50% and most of their weighted credit at 70% or above gets a First; a student with the same 68.50% and most of their credit below 70% stays at a 2:1. The profile, not just the average, decides the outcome near a boundary.",
 "The key takeaways for Exeter students are short. First, the standard three-year weighting is 1:2 between Stage 2 and Stage 3 — the final stage counts twice as much as the second, and Stage 1 does not count. Second, the average is calculated to two decimal places and is not rounded, so 69.49% is not 69.50% and does not qualify for a First on the threshold route. Third, the profile route is the one to check when you are close: 68.00% with at least 50% of weighted credits at 70% or more is a First, 58.00% with at least 50% at 60% or more is a 2:1, and 48.00% with at least 50% at 50% or more is a 2:2. Fourth, Exeter's module sizes are unusual — 15 and 30 credits rather than the 10 and 20 common elsewhere — and that changes how much each module moves your average.",
 "A worked example shows how the two routes interact. Suppose your credit-weighted Stage 2 average is 63% and your Stage 3 average is 70%. The combined average is (63 x 1 + 70 x 2) / 3 = 203 / 3 = 67.67%, a 2:1. That is below 68.00%, so the profile route cannot help either. Now suppose Stage 2 is 68% and Stage 3 is 72%: the combined average is (68 + 144) / 3 = 212 / 3 = 70.67%, a First on the threshold route. The interesting case is in between: Stage 2 at 66% and Stage 3 at 71% gives (66 + 142) / 3 = 208 / 3 = 69.33%. That is below the 69.50% threshold, but it is above 68.00%, so the profile route applies: if at least half of your weighted credits carry marks of 70% or more, the result is a First; if not, it stays a 2:1. Counting your weighted credits at each band is therefore part of the calculation, not an afterthought.",
 "Module structure is the practical detail that changes the arithmetic at Exeter. Modules are commonly 15 or 30 credits, with dissertations and extended projects sometimes worth 30 or 60 credits, and each year totals 120 credits. A 30-credit module counts twice as much as a 15-credit module, and a 60-credit dissertation counts four times as much. Work out each stage's credit-weighted average properly — multiply each module mark by its credits, add the results, divide by 120 — rather than averaging module marks as if they were equal. The module calculator above does that step for you, and it accepts the 15-credit default that matches Exeter's most common module size.",
 "Year-out and integrated-programme variants are the honest caveat on this page. Exeter's handbook sets different stage weightings for four-year programmes with a year out and for integrated master's degrees — the ratios depend on where the year out falls and on the programme structure, and they are set out in the handbook's stage-weighting table. If you are on a four-year degree with a year abroad or a year in industry, or on an integrated master's, do not apply the 1:2 rule from this page. Find your programme's row in the handbook table, or ask your programme team. Year-out marks are typically assessed separately and do not contribute directly to the classification in the same way as Stage 2 and Stage 3 marks.",
 "Common mistakes at Exeter are easy to list. The most frequent is using a 33/67 split as if it were exact: 1:2 is one third and two thirds, and the exact ratio matters near the 69.50% and 68.00% thresholds. The second is assuming the average is rounded: it is calculated to two decimal places with no rounding, so 69.49% is a 2:1 on the threshold route. The third is ignoring the profile route entirely — students who check only the threshold miss a First they have already earned through their credit profile. The fourth is including Stage 1 marks, which do not count for the standard route. And the fifth is applying the three-year 1:2 rule to a four-year or integrated programme, where the handbook sets different stage ratios. Work out both stages properly, count your weighted credits at each band, and check the handbook table for your programme.",
 ],
 faqs: [
 {
 question: "What year weighting does the University of Exeter use?",
 answer:
 "For a standard three-year Bachelor's degree, Exeter weights the credit-weighted mean of Stage 2 and Stage 3 in the ratio 1:2. Stage 1 does not count. Year-out and integrated-programme variants use different stage ratios set out in the handbook.",
 },
 {
 question: "What module sizes does Exeter use?",
 answer:
 "Exeter commonly uses 15 and 30 credit modules, which is different from the 10/20 split used by many other UK universities. Each year totals 120 credits. Dissertations and extended projects may be 30 or 60 credits.",
 },
 {
 question: "Is Exeter a Russell Group university?",
 answer:
 "Yes. The University of Exeter is a member of the Russell Group. It consistently ranks among the top 15 UK universities and is known for high-quality research and teaching.",
 },
 {
 question: "Does the Year Abroad count at Exeter?",
 answer:
 "Year Abroad marks at Exeter are typically assessed separately and do not contribute directly to your degree classification in the same way as Stage 2 and Stage 3 marks. Your programme handbook sets out the exact treatment for your course.",
 },
 {
 question: "How does Exeter's profile route work?",
 answer:
 "If your average is below the threshold but at least 68.00%, you can still earn a First if at least 50% of your weighted credits carry marks of 70% or more. The same shape applies at 58.00% for a 2:1 and 48.00% for a 2:2.",
 },
 {
 question: "Does Exeter round classification averages?",
 answer:
 "No. The average credit-weighted mark is calculated to two decimal places and rounding must not occur. A 69.49% average is a 2:1 on the threshold route, not a First.",
 },
 ],
 },
 {
 slug: "uclan",
 name: "University of Lancashire",
 shortName: "University of Lancashire",
 keyword: "university of lancashire grade calculator",
 description:
 "Free University of Lancashire grade calculator (formerly UCLan). Calculate your degree classification using the Award Percentage Mark: best of the 2:8 method, the best-100-Level-6 method, or the profile method.",
 yearWeighting: "Award Percentage Mark: best of 2:8 (Level 5 / Level 6), best 100 Level 6 credits, or profile method",
 yearWeightY2: 20,
 yearWeightY3: 80,
 creditsPerYear: 120,
 defaultModuleCredits: "20",
 framework: "FHEQ (England)",
 degreeLength: "3 years (or 4 with placement)",
 specialNotes: [
 "The university renamed itself the University of Lancashire; its regulations are published under that name, and UCLan is the former name.",
 "The honours classification is the best of three outcomes: the APM on the best 100 Level 6 and best 100 Level 5 credits at 2:8, the APM on the best 100 Level 6 credits alone, or the profile method.",
 "An APM of X9.5 or above is rounded up to the next classification.",
 "The calculation is framework dependent, including whether a course uses 20- or 30-credit modules.",
 ],
 methodNote:
 "The University of Lancashire (formerly the University of Central Lancashire, UCLan) classifies honours degrees from the Average Percentage Mark (APM), and the award is the best of three outcomes. Method 1 is the APM on the best 100 credits at Level 6 and the best 100 credits at Level 5, weighted 2:8 in favour of Level 6. Method 2 is the APM on the best 100 credits at Level 6 alone. Method 3 is the profile method: at least 60 credits at Level 6 in the classification band, with the highest APM no more than 2 percentage points below the boundary. An APM of X9.5 or above is rounded up to the next class — 69.5 becomes a First. The boundaries are 70 for a First, 60 for a 2:1, 50 for a 2:2 and 40 for a Third.",
 calculatorNote:
 "Use the year-weighting tool below, pre-set to the university's 2:8 split, for Method 1: enter your best-100-credit Level 5 and Level 6 averages. Then check Method 2 separately — your best 100 Level 6 credits on their own — and take the better result. If you are within 2 points of a boundary, check the profile method: 60 or more Level 6 credits in the higher band can lift you. Note that the tool uses your best 100 credits at each level, not all 120.",
 howToSteps: [
 "Work out your average across your best 100 credits at Level 5 and your best 100 credits at Level 6 (usually 20-credit modules; some courses use 30-credit modules).",
 "Method 1: combine them 2:8 using the year-weighting tool below, pre-set to the university's ratio — Level 6 counts four times as much as Level 5.",
 "Method 2: take your best 100 Level 6 credits on their own.",
 "Take the better of the two, apply the rounding rule (69.5 and above rounds up to a First), then check the profile method if you are within 2 points of a boundary.",
 ],
 whenToUse:
 "Use this University of Lancashire grade calculator when you have Level 5 and Level 6 marks and want a provisional classification under the university's Academic Regulations for Taught Programmes. It is most useful when you are checking whether your best 100 credits at each level — rather than all 120 — change your result, and when you are close to a boundary and the profile method may apply. The university's regulations and your programme team remain the authoritative sources, and the calculation is framework dependent, so confirm whether your course uses 20- or 30-credit modules.",
 splitMethod: true,
 content: [
 "The University of Lancashire — formerly the University of Central Lancashire, known to most students as UCLan — is a large public university based in Preston, with origins dating back to 1828 and more than 30,000 students. Its classification method is unusual in two ways: it uses the best 100 credits at each level rather than all 120, and it awards the best of three different outcomes. Both details matter, because a student who calculates a single weighted average over all 120 credits at each level will get a different — and usually lower — answer than the university's own calculation. This page explains the method as published in the university's Academic Regulations for Taught Programmes, which are issued under the University of Lancashire name.",
 "The key takeaways are short. First, the classification is based on the Average Percentage Mark (APM), and the honours award is the best of three outcomes: the APM on the best 100 Level 6 credits and the best 100 Level 5 credits weighted 2:8, the APM on the best 100 Level 6 credits alone, or the profile method. Second, only your best 100 credits at each level count, so your weakest 20 credits at each level drop out of the calculation entirely. Third, an APM of X9.5 or above is rounded up to the next class, so 69.5 is a First. Fourth, the calculation is framework dependent: whether your course uses 20- or 30-credit modules changes which credits count, so confirm your framework before you calculate.",
 "The 2:8 weighting is the part students get wrong most often, because it looks nothing like the 33/67 or 25/75 splits used elsewhere. Level 6 counts four times as much as Level 5: for every one point your Level 5 average contributes, your Level 6 average contributes four. A worked example shows the effect. Suppose your best 100 Level 5 credits average 62% and your best 100 Level 6 credits average 70%. Method 1 gives (62 x 0.2) + (70 x 0.8) = 12.4 + 56 = 68.4%, a 2:1. Method 2 gives 70% on its own — a First. The award is the best outcome, so the result is a First, even though the combined 2:8 figure is only 68.4%. A student who only calculated Method 1 would have walked away thinking they had a 2:1. That is the whole point of the best-of-three design: your strongest route wins.",
 "The profile method is the third route, and it is the one that helps students who are close to a boundary but whose averages do not quite reach it. The profile method applies when at least 60 credits at Level 6 sit in the classification band you are aiming for, and your highest APM is no more than 2 percentage points below the boundary for that class. So a student with an APM of 68.5% and 60 or more Level 6 credits at 70% or above can be awarded a First through the profile method, even though neither Method 1 nor Method 2 reaches 70%. The rounding rule helps too: an APM of 69.5% or above rounds up to the next class. Together, the three methods and the rounding rule mean that a Lancashire result near a boundary deserves a careful check rather than a quick average.",
 "Module structure is framework dependent, and that phrase in the regulations is worth taking seriously. Most courses use 20-credit modules, with dissertations and major projects worth 40 credits, but some courses run on a 30-credit framework, and the best-credit calculation works differently under each. The standard Honours degree needs 360 credits — 120 at each of Levels 4, 5 and 6 — and placement years are typically assessed as pass or fail and do not contribute graded marks to the classification. If you are unsure which framework your course uses, your programme specification or course leader can confirm it in a sentence, and it is worth asking before you spend time modelling your result.",
 "The rebrand is the other thing to know about this page. The university renamed itself the University of Lancashire, and its current Academic Regulations for Taught Programmes are published under that name, hosted on lancashire.ac.uk. Older material, student forums and many search results still call it UCLan, and the regulations themselves still refer to the institution as the University of Central Lancashire in their opening definitions. Both names refer to the same university and the same regulations. This page targets the new name — university of lancashire grade calculator — and keeps uclan grade calculator as a secondary term, because search demand for the old name will fade as the new name beds in, while students still search for UCLan today.",
 ],
 faqs: [
 {
 question: "What year weighting does the University of Lancashire use?",
 answer:
 "The honours classification uses the Average Percentage Mark with a 2:8 Level 5 to Level 6 weighting in its main method — but the award is the best of three outcomes, including the best-100-Level-6 method and the profile method, so the 2:8 figure is not the whole story.",
 },
 {
 question: "Is UCLan now the University of Lancashire?",
 answer:
 "Yes. The university renamed itself the University of Lancashire, and its current Academic Regulations for Taught Programmes are published under that name. UCLan was the former name, and both names refer to the same university and the same regulations.",
 },
 {
 question: "What are the University of Lancashire's degree classification boundaries?",
 answer:
 "The APM boundaries are 70–100% for a First, 60–69% for a 2:1, 50–59% for a 2:2 and 40–49% for a Third. An APM of X9.5 or above is rounded up to the next class.",
 },
 {
 question: "Does the University of Lancashire have a borderline policy?",
 answer:
 "Yes, through the profile method: at least 60 credits at Level 6 in the classification band, with the highest APM no more than 2 percentage points below the boundary. The rounding rule also helps — 69.5 rounds up to a First.",
 },
 {
 question: "Do first-year marks count at the University of Lancashire?",
 answer:
 "At most programmes, first-year (Level 4) marks do not count towards the final degree classification. You must pass Level 4 to progress, but the marks are excluded from the APM calculation.",
 },
 {
 question: "How many credits do I need for a Lancashire degree?",
 answer:
 "A standard Honours degree requires 360 credits: 120 at Level 4, 120 at Level 5, and 120 at Level 6. Students taking a placement year earn additional credits, but these do not normally affect classification.",
 },
 ],
 },
 {
 slug: "uwe",
 name: "University of the West of England",
 shortName: "UWE Bristol",
 keyword: "uwe bristol grade calculator",
 description:
 "Free UWE Bristol grade calculator. Calculate your University of the West of England degree classification using UWE's method: Level 6 weighted three times Level 5, with an automatic raise within 0.5 of the next class.",
 yearWeighting: "Level 6 x3 Level 5 (25/75)",
 yearWeightY2: 25,
 yearWeightY3: 75,
 creditsPerYear: 120,
 defaultModuleCredits: "20",
 framework: "FHEQ (England)",
 degreeLength: "3 years (or 4 with placement)",
 specialNotes: [
 "For students who started on or after 1 August 2022: all Level 6 credits and the best 100 credits at Level 5 count, with Level 6 weighted three times Level 5.",
 "For students who started before 1 August 2022: the best 100 credits at each level count, with Level 6 weighted three times Level 5.",
 "The Examining Board automatically awards a higher class when the final mark is within 0.5 of the next class.",
 "Standard modules are 20 credits, dissertations typically 40 credits.",
 ],
 methodNote:
 "UWE Bristol weights Level 6 three times Level 5 — a 25/75 split in effect. If you started on or after 1 August 2022, the calculation uses all your Level 6 credits and your best 100 credits at Level 5. If you started before 1 August 2022, it uses the best 100 credits at each level. The Examining Board automatically awards a higher class when your final overall mark is within 0.5 of the next class — 69.5% to 69.9% becomes a First. Foundation-degree entrants are classified on final-year marks only, and direct entrants to Level 6 on Level 6 marks only.",
 calculatorNote:
 "Use the year-weighting tool below, pre-set to UWE's 25/75 split: enter your Level 5 average (your best 100 credits if you started on or after 1 August 2022) and your Level 6 average. The tool applies the 0.5 rule — an average of 69.5% or above is a First. Check your start date first, because the pre-2022 formula uses the best 100 credits at each level rather than all Level 6 credits.",
 howToSteps: [
 "Check your start date: on or after 1 August 2022, or before.",
 "Work out your Level 6 average (all Level 6 credits if you started on or after 1 August 2022; your best 100 credits if you started earlier).",
 "Work out your Level 5 average from your best 100 credits.",
 "Combine them 25/75 using the year-weighting tool below, pre-set to UWE's split, then apply the 0.5 rule: 69.5% or above is a First.",
 ],
 whenToUse:
 "Use this UWE Bristol grade calculator when you have Level 5 and Level 6 marks and want a provisional classification under UWE's published method. It is most useful when you are checking whether your best 100 Level 5 credits — rather than all 120 — change your result, and when you are close to a boundary and the automatic 0.5 raise applies. Your programme specification and the university's degree-classifications guidance remain the authoritative sources, and variant regulations can apply to professionally accredited programmes.",
 splitMethod: true,
 content: [
 "The University of the West of England (UWE Bristol) is a large public university across several campuses in Bristol, with more than 30,000 students and a strong focus on professional practice and employability. Its classification method is simple to state and easy to get wrong: Level 6 counts three times as much as Level 5. In effect that is a 25/75 split, but the credit sets matter as much as the ratio. If you started your programme on or after 1 August 2022, the calculation uses all of your Level 6 credits and your best 100 credits at Level 5. If you started before 1 August 2022, it uses the best 100 credits at each level. The same 3-to-1 weighting applies either way, but which credits count is different — and that difference can move your result by a full class.",
 "The key takeaways for UWE students are short. First, check your start date before you calculate anything: the 1 August 2022 line decides which credit set applies to you. Second, only your best 100 Level 5 credits count, so your weakest 20 Level 5 credits drop out of the calculation entirely. Third, the Examining Board automatically awards a higher class when your final overall mark is within 0.5 of the next class — 69.5% to 69.9% becomes a First, with no appeal needed. Fourth, the standard route assumes a 360-credit honours degree; foundation-degree entrants and direct entrants follow different rules, set out below.",
 "A worked example shows how the best-100-credits rule helps. Suppose you started on or after 1 August 2022. Your Level 6 modules average 68% across all 120 credits, and your Level 5 modules average 60% across your best 100 credits (your weakest 20 Level 5 credits, averaging 52%, are excluded). The calculation is (60 x 100 x 1 + 68 x 120 x 3) / (100 + 360) = (6,000 + 24,480) / 460 = 30,480 / 460 = 66.26%, a 2:1. If your Level 6 average had been 70% instead, the result would be (6,000 + 25,200) / 460 = 31,200 / 460 = 67.83%, still a 2:1 — but if your Level 6 average reached 72%, the result becomes (6,000 + 25,920) / 460 = 31,920 / 460 = 69.39%, and if it reached 73% the result is 70.17%, a First. The 0.5 rule would also lift a 69.5% result to a First automatically.",
 "The exceptions are worth knowing because they are common at UWE. If you progressed from a foundation degree, your foundation degree contributes 240 credits towards the 360 total and you take the remaining 120 credits in the final year — and your classification is calculated on the marks achieved in that final year only, with all credits counted. If you entered directly at Level 6 without a foundation degree, your classification is based on all credits at Level 6. If you entered directly at Level 5, the standard university-wide formula applies. Some programmes have variant regulations, usually because a professional or statutory body requires a different method — the university names BEng Electrical and Electronic Engineering as an example — so check your programme specification before relying on the standard formula.",
 "Module structure at UWE follows the standard pattern: 120 credits a year, modules typically worth 20 credits, with dissertations and major projects usually worth 40 credits. Placement years are assessed as pass or fail and do not contribute graded marks to the classification. The university also publishes its own honours degree calculators as spreadsheets — one for students who started before 1 August 2022 and one for those who started after — and comparing your result against the university's own calculator is the best sanity check available. If the two disagree, trust the university's version and check your programme specification.",
 ],
 faqs: [
 {
 question: "What year weighting does UWE Bristol use?",
 answer:
 "UWE weights Level 6 three times Level 5 — a 25/75 split in effect. If you started on or after 1 August 2022, the calculation uses all Level 6 credits and your best 100 Level 5 credits; if you started earlier, it uses the best 100 credits at each level.",
 },
 {
 question: "Does UWE have a borderline policy?",
 answer:
 "Yes. The Examining Board automatically awards a higher class when your final overall mark is within 0.5 of the next class — for example, 69.5% to 69.9% becomes a First.",
 },
 {
 question: "Does the placement year count at UWE?",
 answer:
 "Placement years at UWE are assessed as pass or fail and do not contribute a graded mark towards your degree classification. Your classification is based on Level 5 and Level 6 academic module marks only.",
 },
 {
 question: "What module sizes does UWE use?",
 answer:
 "UWE uses standard 20-credit modules for most courses. Dissertations and major projects are typically 40 credits. Each year totals 120 credits.",
 },
 {
 question: "I started at UWE before August 2022 — does the method differ?",
 answer:
 "Yes. If you started before 1 August 2022, the calculation uses the best 100 credits at each level, with Level 6 weighted three times Level 5. If you started on or after that date, it uses all Level 6 credits and your best 100 Level 5 credits.",
 },
 ],
 },
];
