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
}

export const universities: UniversityData[] = [
  {
    slug: "mmu",
    name: "Manchester Metropolitan University",
    shortName: "MMU",
    keyword: "mmu grade calculator",
    description:
      "Free MMU grade calculator for Manchester Metropolitan University students. Calculate your degree classification using MMU's 30/70 year weighting system. Works for all MMU undergraduate programmes.",
    yearWeighting: "30/70 (Year 2 / Year 3)",
    yearWeightY2: 30,
    yearWeightY3: 70,
    creditsPerYear: 120,
    defaultModuleCredits: "20",
    framework: "FHEQ (England)",
    degreeLength: "3 years (or 4 with placement)",
    specialNotes: [
      "MMU typically uses a 30/70 year weighting, though some programmes may differ.",
      "Standard modules are 20 credits, with dissertations typically 40 credits.",
      "MMU has a borderline policy where students within 2% of a boundary may be upgraded if 50% or more of their Level 6 credits fall in the higher band.",
      "Year 1 marks do not count towards the final classification but you must pass all Level 4 modules.",
    ],
    content: [
      "Manchester Metropolitan University (MMU) is one of the largest universities in the UK, with over 35,000 students. Located across multiple campuses in Manchester, MMU offers a wide range of undergraduate and postgraduate programmes spanning arts, sciences, business, education, and health.",
      "MMU uses the standard UK degree classification system (First, 2:1, 2:2, Third) with the Framework for Higher Education Qualifications (FHEQ) credit structure. Each academic year consists of 120 credits, with most individual modules worth 20 credits.",
      "The university typically applies a 30/70 year weighting for degree classification, where Year 2 (Level 5) contributes 30% and Year 3 (Level 6) contributes 70% to your final average. This means your final-year performance is significantly more important than your second year. However, some programmes may use different weightings, so always check your specific programme handbook.",
      "MMU operates a borderline classification policy. If your weighted average falls within 2 percentage points below a classification boundary (e.g., 68-69.99% for a First), the university may upgrade your classification if at least 50% of your Level 6 (final-year) credits achieve marks in the higher classification band. This policy provides a safety net for students who demonstrate strong performance in their final year despite a slightly lower overall average.",
      "To use this calculator for your MMU degree, enter your module grades and credit values. Set credits to 20 for standard modules, 40 for dissertations or double modules, and adjust if your programme uses non-standard credit values. The calculator uses the standard classification boundaries (70% for First, 60% for 2:1, 50% for 2:2, 40% for Third).",
    ],
    faqs: [
      {
        question: "What year weighting does MMU use for degree classification?",
        answer:
          "MMU typically uses a 30/70 year weighting, where Year 2 (Level 5) counts for 30% and Year 3 (Level 6) counts for 70% of your final classification. Some programmes may use different weightings, so check your programme handbook or speak to your programme leader for confirmation.",
      },
      {
        question: "Does my first year count at MMU?",
        answer:
          "No, first-year (Level 4) marks do not count towards your final degree classification at MMU. However, you must pass all Level 4 modules to progress to Level 5. First-year modules are designed to build foundational knowledge and skills for your later years.",
      },
      {
        question: "What is MMU's borderline policy?",
        answer:
          "MMU has a borderline policy for students whose weighted average falls within 2 percentage points below a classification boundary. If at least 50% of your Level 6 credits achieve marks in the higher classification band, you may be upgraded. For example, if your average is 68.5% and 60 or more of your 120 Level 6 credits are above 70%, you could be awarded a First instead of a 2:1.",
      },
      {
        question: "How many credits do I need for an MMU degree?",
        answer:
          "A standard MMU Honours degree requires 360 credits: 120 at Level 4 (Year 1), 120 at Level 5 (Year 2), and 120 at Level 6 (Year 3). If you complete a sandwich year (placement), that adds an additional year but typically contributes pass/fail rather than a graded mark towards your classification.",
      },
      {
        question: "How is the MMU dissertation weighted?",
        answer:
          "Most MMU dissertations are worth 40 credits out of the 120 Level 6 credits, giving them one-third of the final-year weighting. Combined with the 70% year weighting for Level 6, the dissertation contributes approximately 23% of your overall degree average. Some programmes have 60-credit dissertations, which carry even more weight.",
      },
    ],
  },
  {
    slug: "open-university",
    name: "The Open University",
    shortName: "OU",
    keyword: "open university grade calculator",
    description:
      "Free Open University grade calculator. Calculate your OU degree classification with credit accumulation across modules. Supports the OU's unique flexible learning structure and grading system.",
    yearWeighting: "Based on Level 2 and Level 3 credits",
    yearWeightY2: 33,
    yearWeightY3: 67,
    creditsPerYear: 120,
    defaultModuleCredits: "30",
    framework: "FHEQ (England)",
    degreeLength: "Flexible (typically 6-16 years part-time)",
    specialNotes: [
      "The OU uses a credit accumulation model rather than fixed academic years.",
      "An Honours degree requires 360 credits: 120 at Level 1, 120 at Level 2, and 120 at Level 3.",
      "The OU uses its own grading scale where modules are graded 1-4 or as pass/fail, alongside percentage marks.",
      "Classification is based on the weighted average of Level 2 and Level 3 credits.",
      "Module sizes vary: common values are 30 and 60 credits.",
    ],
    content: [
      "The Open University (OU) is the UK's largest university by student numbers, serving over 170,000 students. Founded in 1969, it pioneered distance learning and remains the primary choice for part-time and mature students in the UK. The OU's flexible model allows students to study at their own pace, accumulating credits over time rather than completing fixed academic years.",
      "The OU uses the FHEQ credit framework, and an Honours degree requires 360 credits: 120 at Level 1 (equivalent to first year), 120 at Level 2 (equivalent to second year), and 120 at Level 3 (equivalent to final year). However, because OU study is flexible, students do not follow a fixed year structure. Instead, they accumulate credits through individual modules.",
      "OU module sizes vary. Common sizes are 30 credits (a quarter of a level) and 60 credits (half a level). Some modules are 120 credits. Each module has its own assessment strategy, which may include tutor-marked assignments (TMAs), end-of-module assessments (EMAs), and sometimes exams.",
      "For degree classification, the OU calculates a weighted average of your Level 2 and Level 3 marks. Level 1 marks are required for progression but do not count towards classification. The weighting typically gives more importance to Level 3 modules. The OU uses the standard classification boundaries: 70%+ for First, 60-69% for 2:1, 50-59% for 2:2, and 40-49% for Third.",
      "The OU also uses its own grading bands within modules, where Grade 1 corresponds roughly to a First (85%+), Grade 2 to a 2:1 (70-84%), Grade 3 to a 2:2 (55-69%), and Grade 4 to a Third (40-54%). However, the final classification is based on the overall percentage average across qualifying modules.",
      "To use this calculator for your OU degree, enter each module's percentage mark and credit value. Set credits to 30 or 60 depending on your module size. Only enter Level 2 and Level 3 modules, as Level 1 modules do not count towards classification.",
    ],
    faqs: [
      {
        question: "How does the Open University calculate degree classification?",
        answer:
          "The OU calculates your degree classification based on a credit-weighted average of your Level 2 and Level 3 module marks. Level 1 marks are excluded. The standard boundaries apply: 70%+ for First, 60-69% for 2:1, 50-59% for 2:2, and 40-49% for Third. The OU typically weights Level 3 modules more heavily than Level 2.",
      },
      {
        question: "Do Open University Level 1 modules count towards my degree?",
        answer:
          "Level 1 modules are required to progress and contribute to your total credit count, but their marks do not count towards your final degree classification. Only Level 2 (second-level) and Level 3 (third-level) module marks are included in the classification calculation.",
      },
      {
        question: "How many credits do I need for an OU Honours degree?",
        answer:
          "You need 360 credits for an OU Honours degree: 120 at Level 1, 120 at Level 2, and 120 at Level 3. You can also exit with intermediate qualifications: a Certificate of Higher Education (120 credits at Level 1), a Diploma of Higher Education (240 credits at Levels 1-2), or an Ordinary degree (300 credits).",
      },
      {
        question: "What size are Open University modules?",
        answer:
          "OU modules come in various sizes: 30 credits (a quarter of a level, typically studied over about 16 weeks), 60 credits (half a level, typically about 32 weeks), and occasionally 120 credits. Most students take 60 credits per year for a manageable part-time study load.",
      },
      {
        question: "Can I transfer credits from another university to the OU?",
        answer:
          "Yes, the OU accepts credit transfer from other UK and international institutions through its Recognition of Prior Learning (RPL) process. Transferred credits count towards your credit total but the grades from another institution are not included in your OU classification calculation. Only marks from OU modules contribute to your degree classification.",
      },
    ],
  },
  {
    slug: "st-andrews",
    name: "University of St Andrews",
    shortName: "St Andrews",
    keyword: "st andrews grade calculator",
    description:
      "Free St Andrews grade calculator. Calculate your University of St Andrews degree classification using the Scottish 4-year degree structure and SCQF framework.",
    yearWeighting: "Varies by school (commonly 25/75 or 30/70 for Junior/Senior Honours)",
    yearWeightY2: 25,
    yearWeightY3: 75,
    creditsPerYear: 120,
    defaultModuleCredits: "20",
    framework: "SCQF (Scotland)",
    degreeLength: "4 years (MA/BSc Honours)",
    specialNotes: [
      "St Andrews uses the Scottish Credit and Qualifications Framework (SCQF).",
      "Honours degrees are 4 years: 2 sub-honours years + 2 Honours years.",
      "Classification is typically based on Junior Honours (Year 3) and Senior Honours (Year 4) marks.",
      "The university awards MA (Master of Arts) for arts/humanities, BSc for sciences, as first degrees.",
      "Individual schools may apply different weightings between Junior and Senior Honours.",
    ],
    content: [
      "The University of St Andrews, founded in 1413, is Scotland's oldest university and one of the most prestigious in the UK. It consistently ranks among the top five UK universities and attracts students from around the world. St Andrews uses the Scottish higher education framework, which differs from the English system in several important ways.",
      "Scottish Honours degrees are four years, compared to three in England. The first two years (sub-honours) provide broad academic training and allow students to take modules across multiple subjects. The final two years (Junior Honours in Year 3 and Senior Honours in Year 4) focus on the chosen degree subject. This structure means students have more time to explore before specialising.",
      "St Andrews uses the Scottish Credit and Qualifications Framework (SCQF), where each year consists of 120 SCQF credits. Modules are typically 20 SCQF credits (equivalent to 10 FHEQ credits in the English system). An Honours degree requires 480 SCQF credits across four years.",
      "Degree classification at St Andrews is based on Junior Honours and Senior Honours marks. Sub-honours marks (Years 1-2) do not count towards the final classification. The weighting between Junior and Senior Honours varies by school but is commonly 25/75 or 30/70, with Senior Honours carrying the greater weight.",
      "St Andrews uses the standard UK classification boundaries: 70%+ for First Class, 60-69% for Upper Second (2:1), 50-59% for Lower Second (2:2), and 40-49% for Third. The university's marking scheme uses the full 0-100 range, and the 20-point Common Reporting Scale is used for grade descriptors.",
    ],
    faqs: [
      {
        question: "How does St Andrews calculate degree classification?",
        answer:
          "St Andrews calculates degree classification based on a credit-weighted average of Junior Honours (Year 3) and Senior Honours (Year 4) marks. Sub-honours marks from Years 1 and 2 do not count. The weighting between Junior and Senior Honours varies by school, commonly 25/75 or 30/70.",
      },
      {
        question: "Is a St Andrews degree 4 years?",
        answer:
          "Yes, Scottish Honours degrees including those at St Andrews are four years: two sub-honours years followed by two Honours years. St Andrews awards an MA (Master of Arts) as the standard arts/humanities first degree, which is equivalent to a BA at English universities. Science degrees are awarded as BSc.",
      },
      {
        question: "What credit framework does St Andrews use?",
        answer:
          "St Andrews uses the Scottish Credit and Qualifications Framework (SCQF). Each year is 120 SCQF credits, and modules are typically 20 SCQF credits. Note that SCQF credits are not directly equivalent to FHEQ credits used in England: 1 SCQF credit = 0.5 FHEQ credits.",
      },
      {
        question: "Do sub-honours marks count at St Andrews?",
        answer:
          "No, sub-honours marks (Years 1 and 2) do not count towards your final degree classification at St Andrews. However, you need to achieve sufficient grades in sub-honours to be admitted to the Honours programme. The minimum requirement varies by school.",
      },
      {
        question: "What is the difference between an MA and a BA at St Andrews?",
        answer:
          "At St Andrews, the MA (Master of Arts) is a first undergraduate degree in arts and humanities subjects, equivalent to a BA at English universities. It is a Scottish academic tradition dating back centuries. Despite the 'Master' title, it is a bachelor-level qualification. Science students receive a BSc.",
      },
    ],
  },
  {
    slug: "portsmouth",
    name: "University of Portsmouth",
    shortName: "Portsmouth",
    keyword: "portsmouth grade calculator",
    description:
      "Free University of Portsmouth grade calculator. Calculate your degree classification using Portsmouth's 33/67 year weighting. Supports all UoP undergraduate programmes.",
    yearWeighting: "33/67 (Year 2 / Year 3)",
    yearWeightY2: 33,
    yearWeightY3: 67,
    creditsPerYear: 120,
    defaultModuleCredits: "20",
    framework: "FHEQ (England)",
    degreeLength: "3 years (or 4 with placement)",
    specialNotes: [
      "Portsmouth typically uses a 33/67 year weighting for most programmes.",
      "Standard modules are 20 credits, dissertations typically 40 credits.",
      "The university offers extensive placement year options across most courses.",
      "Portsmouth has a borderline policy for students within 2% of a classification boundary.",
    ],
    content: [
      "The University of Portsmouth is a public university located on the south coast of England. It has a strong reputation for professional and applied programmes, particularly in engineering, computing, pharmacy, and creative industries. The university serves over 25,000 students and has strong links with industry.",
      "Portsmouth uses the standard FHEQ credit framework with 120 credits per academic year. Most modules are 20 credits, with dissertations and major projects typically worth 40 credits. The university applies the standard UK degree classification boundaries.",
      "For degree classification, Portsmouth typically uses a 33/67 year weighting, where Level 5 (Year 2) contributes 33% and Level 6 (Year 3) contributes 67%. Year 1 (Level 4) marks do not count towards the final classification. Some programmes, particularly those with integrated placement years, may apply slightly different weightings.",
      "Portsmouth operates a borderline classification policy. Students whose weighted average falls within 2 percentage points below a classification boundary may be considered for upgrade. The exact criteria vary but typically require a certain proportion of Level 6 credits to fall in the higher band.",
      "The university offers sandwich placement years across most programmes. If you take a placement year, it is typically assessed as pass/fail and does not contribute a graded mark to your degree classification. However, the placement experience itself can be valuable for your CV and employability.",
    ],
    faqs: [
      {
        question: "What year weighting does the University of Portsmouth use?",
        answer:
          "Portsmouth typically uses a 33/67 year weighting: Year 2 (Level 5) counts for 33% and Year 3 (Level 6) counts for 67% of your final degree classification. Some programmes may use different weightings, so check your specific course handbook.",
      },
      {
        question: "Does the placement year count towards my Portsmouth degree?",
        answer:
          "Placement years at Portsmouth are typically assessed as pass/fail and do not contribute a graded mark towards your degree classification. Your final classification is based on your Level 5 and Level 6 academic module marks only.",
      },
      {
        question: "How many credits do I need for a Portsmouth degree?",
        answer:
          "A standard Portsmouth Honours degree requires 360 credits: 120 at Level 4 (Year 1), 120 at Level 5 (Year 2), and 120 at Level 6 (Year 3). If you take a placement year, that adds 120 additional credits but these do not affect your classification calculation.",
      },
      {
        question: "Does Portsmouth have a borderline policy?",
        answer:
          "Yes, Portsmouth has a borderline policy for students whose average falls close to a classification boundary. If your average is within 2% below a boundary and a sufficient proportion of your Level 6 credits fall in the higher band, you may be upgraded. Check your programme regulations for the exact criteria.",
      },
      {
        question: "What are Portsmouth's degree classification boundaries?",
        answer:
          "Portsmouth uses the standard UK degree classification boundaries: First Class at 70% and above, Upper Second (2:1) at 60-69%, Lower Second (2:2) at 50-59%, Third at 40-49%, and Fail below 40%.",
      },
    ],
  },
  {
    slug: "leeds",
    name: "University of Leeds",
    shortName: "Leeds",
    keyword: "leeds grade calculator",
    description:
      "Free University of Leeds grade calculator. Calculate your degree classification using Leeds' year weighting system. Supports all undergraduate programmes at this Russell Group university.",
    yearWeighting: "33/67 (some programmes use 25/75)",
    yearWeightY2: 33,
    yearWeightY3: 67,
    creditsPerYear: 120,
    defaultModuleCredits: "20",
    framework: "FHEQ (England)",
    degreeLength: "3 years (or 4 with placement/study abroad)",
    specialNotes: [
      "Leeds typically uses 33/67 year weighting, though some schools use 25/75.",
      "As a Russell Group university, Leeds has rigorous academic standards.",
      "Standard modules are 10 or 20 credits, dissertations typically 40 credits.",
      "Leeds operates a dual algorithm borderline policy.",
    ],
    content: [
      "The University of Leeds is a Russell Group research university and one of the largest in the UK, with over 38,000 students. Founded in 1904, it is consistently ranked among the top 100 universities globally. Leeds offers a broad range of undergraduate programmes across arts, sciences, engineering, business, and health.",
      "Leeds uses the FHEQ credit framework with 120 credits per year. Module sizes are commonly 10 or 20 credits, with dissertations and capstone projects typically worth 30 or 40 credits. The university applies the standard UK classification boundaries.",
      "For degree classification, Leeds typically uses a 33/67 year weighting (Level 5 at 33%, Level 6 at 67%), though some schools and programmes may use a 25/75 split. Year 1 marks do not count towards the final classification. Always check your specific school's regulations.",
      "Leeds operates a dual algorithm for borderline classification cases. The university calculates your classification using two methods and awards the higher result. This provides a fair system for students who perform differently across their qualifying years.",
      "Many Leeds programmes offer a Year in Industry or Year Abroad option. These are typically assessed as pass/fail or with a separate transcript notation and do not contribute graded marks to your degree classification calculation.",
    ],
    faqs: [
      {
        question: "What year weighting does the University of Leeds use?",
        answer:
          "Leeds typically uses a 33/67 year weighting: Level 5 (Year 2) at 33% and Level 6 (Year 3) at 67%. Some schools use a 25/75 split. Check your specific school or programme handbook for the exact weighting that applies to your course.",
      },
      {
        question: "Does Leeds have a borderline policy?",
        answer:
          "Yes, Leeds operates a dual algorithm system for borderline cases. The university calculates your classification using two different methods and awards the higher result. This is designed to be fair to students whose performance profile varies across their qualifying years.",
      },
      {
        question: "What module sizes does Leeds use?",
        answer:
          "Leeds uses module sizes of 10, 20, 30, and 40 credits. The most common are 10 and 20 credits. Dissertations and major projects are typically 30 or 40 credits. Each year totals 120 credits.",
      },
      {
        question: "Does the Year in Industry count towards my Leeds degree?",
        answer:
          "The Year in Industry at Leeds is typically assessed as pass/fail. It does not contribute a graded mark towards your degree classification. Your classification is based solely on your Level 5 and Level 6 academic module marks.",
      },
      {
        question: "Is Leeds a Russell Group university?",
        answer:
          "Yes, the University of Leeds is a member of the Russell Group, a collection of 24 leading UK research-intensive universities. Russell Group membership indicates high standards of research, teaching, and graduate employability.",
      },
    ],
  },
  {
    slug: "swansea",
    name: "Swansea University",
    shortName: "Swansea",
    keyword: "swansea grade calculator",
    description:
      "Free Swansea University grade calculator. Calculate your degree classification using Swansea's year weighting system. Works for all Swansea undergraduate programmes.",
    yearWeighting: "30/70 or 33/67 (varies by programme)",
    yearWeightY2: 33,
    yearWeightY3: 67,
    creditsPerYear: 120,
    defaultModuleCredits: "20",
    framework: "FHEQ (Wales)",
    degreeLength: "3 years (or 4 with placement/year abroad)",
    specialNotes: [
      "Swansea uses the FHEQ credit framework, aligned with Welsh higher education regulations.",
      "Year weightings vary by programme, commonly 30/70 or 33/67.",
      "Standard modules are 10 or 20 credits.",
      "Swansea has a borderline reclassification policy.",
    ],
    content: [
      "Swansea University is a research-led university located on the coast of South Wales. Founded in 1920, it is a member of the Association of Commonwealth Universities and has a strong reputation in engineering, science, and health. The university serves over 20,000 students across two campuses: Singleton Park and Bay Campus.",
      "Swansea uses the FHEQ credit framework, aligned with Welsh higher education quality standards regulated by HEFCW (Higher Education Funding Council for Wales) and the QAA. Each academic year consists of 120 credits, with modules typically worth 10 or 20 credits.",
      "For degree classification, Swansea applies year weightings that vary by programme. Common weightings include 30/70 and 33/67 (Year 2/Year 3). Year 1 marks do not count towards the final classification at most programmes. The standard UK classification boundaries apply.",
      "Swansea operates a borderline reclassification policy. Students whose weighted average falls within a specified range below a classification boundary may be considered for upgrade based on their module profile. The exact criteria depend on the college and programme.",
      "The university offers Year in Industry and Year Abroad options across many programmes. These are typically assessed separately and do not contribute graded marks to the degree classification calculation.",
    ],
    faqs: [
      {
        question: "What year weighting does Swansea University use?",
        answer:
          "Swansea's year weighting varies by programme. Common weightings are 30/70 and 33/67 (Year 2/Year 3). Check your specific programme handbook or speak to your programme director to confirm which weighting applies to your course.",
      },
      {
        question: "Does Swansea have a borderline policy?",
        answer:
          "Yes, Swansea has a borderline reclassification policy. If your average falls close to a classification boundary, the university considers your module profile to decide whether an upgrade is appropriate. Criteria vary by college, so check your programme regulations.",
      },
      {
        question: "What credit framework does Swansea use?",
        answer:
          "Swansea uses the Framework for Higher Education Qualifications (FHEQ), the same framework used across England, Wales, and Northern Ireland. Each year is 120 credits, with standard modules worth 10 or 20 credits.",
      },
      {
        question: "Do first-year grades count at Swansea?",
        answer:
          "At most Swansea programmes, first-year (Level 4) marks do not count towards the final degree classification. You must pass Level 4 to progress, but the marks are excluded from the classification calculation.",
      },
      {
        question: "Is Swansea a good university?",
        answer:
          "Yes, Swansea consistently ranks well in UK league tables and has a strong research profile. It was named Welsh University of the Year by The Times and Sunday Times Good University Guide in 2019. It is particularly well regarded for engineering, health sciences, and computer science.",
      },
    ],
  },
  {
    slug: "sheffield-hallam",
    name: "Sheffield Hallam University",
    shortName: "Sheffield Hallam",
    keyword: "sheffield hallam grade calculator",
    description:
      "Free Sheffield Hallam University grade calculator. Calculate your degree classification using SHU's 33/67 year weighting system. Works for all Sheffield Hallam undergraduate programmes.",
    yearWeighting: "33/67 (Year 2 / Year 3)",
    yearWeightY2: 33,
    yearWeightY3: 67,
    creditsPerYear: 120,
    defaultModuleCredits: "20",
    framework: "FHEQ (England)",
    degreeLength: "3 years (or 4 with placement)",
    specialNotes: [
      "Sheffield Hallam typically uses a 33/67 year weighting.",
      "Standard modules are 20 credits, with dissertations typically 40 credits.",
      "The university has a strong focus on employability and professional placements.",
      "SHU operates a borderline policy for students near classification boundaries.",
    ],
    content: [
      "Sheffield Hallam University (SHU) is one of the largest universities in the UK, with over 30,000 students. Located in Sheffield, South Yorkshire, it has a strong emphasis on applied learning, employability, and industry partnerships. The university offers a wide range of programmes across four academic colleges.",
      "Sheffield Hallam uses the FHEQ credit framework with 120 credits per year. Modules are typically 20 credits, with dissertations and final-year projects worth 40 credits. The standard UK classification boundaries apply.",
      "For degree classification, Sheffield Hallam typically uses a 33/67 year weighting: Year 2 (Level 5) contributes 33% and Year 3 (Level 6) contributes 67%. First-year marks do not count towards the final classification. Some programmes may use different weightings.",
      "SHU places a strong emphasis on work placements and industry experience. Many programmes include an optional or compulsory placement year, which is typically assessed as pass/fail and does not contribute graded marks to the degree classification.",
      "The university operates a borderline policy where students whose average falls close to a classification boundary may be considered for upgrade. The exact criteria involve the proportion of credits in the higher classification band at Level 6.",
    ],
    faqs: [
      {
        question: "What year weighting does Sheffield Hallam use?",
        answer:
          "Sheffield Hallam typically uses a 33/67 year weighting: Level 5 (Year 2) at 33% and Level 6 (Year 3) at 67%. Some programmes may differ, so check your course handbook for the specific weighting.",
      },
      {
        question: "Does Sheffield Hallam have a borderline policy?",
        answer:
          "Yes, SHU has a borderline policy for students near classification boundaries. If your average falls within a defined range below a boundary and a sufficient proportion of your Level 6 credits are in the higher band, you may be upgraded. Check your programme regulations for details.",
      },
      {
        question: "Does the placement year count at Sheffield Hallam?",
        answer:
          "Placement years at Sheffield Hallam are typically assessed as pass/fail. The graded marks from your placement do not contribute to your degree classification calculation. Your classification is based on Level 5 and Level 6 academic module marks only.",
      },
      {
        question: "What module sizes does Sheffield Hallam use?",
        answer:
          "Sheffield Hallam uses standard 20-credit modules for most courses. Dissertations and major projects are typically 40 credits. Each year totals 120 credits.",
      },
      {
        question: "Is Sheffield Hallam a good university?",
        answer:
          "Sheffield Hallam is one of the UK's largest and most diverse universities, with particular strengths in applied and professional subjects. It ranks well for student satisfaction, employability, and teaching quality, and has strong industry partnerships across many sectors.",
      },
    ],
  },
  {
    slug: "exeter",
    name: "University of Exeter",
    shortName: "Exeter",
    keyword: "exeter grade calculator",
    description:
      "Free University of Exeter grade calculator. Calculate your degree classification at this Russell Group university. Supports Exeter's year weighting system for all undergraduate programmes.",
    yearWeighting: "33/67 (some programmes weight Year 3 more heavily)",
    yearWeightY2: 33,
    yearWeightY3: 67,
    creditsPerYear: 120,
    defaultModuleCredits: "15",
    framework: "FHEQ (England)",
    degreeLength: "3 years (or 4 with placement/year abroad)",
    specialNotes: [
      "Exeter is a Russell Group university with high academic standards.",
      "Module sizes include 15 and 30 credits (rather than the 20 common elsewhere).",
      "Year weighting is typically 33/67 but some programmes use different splits.",
      "Exeter uses a detailed marking scheme with specific grade descriptors.",
    ],
    content: [
      "The University of Exeter is a Russell Group research university located in Devon, southwest England. It ranks consistently among the top 15 UK universities and is known for strong programmes in business, law, engineering, medical sciences, and humanities. The university has over 25,000 students across campuses in Exeter and Penryn (Cornwall).",
      "Exeter uses the FHEQ credit framework but with a module structure that differs slightly from many other UK universities. Modules are commonly 15 or 30 credits (rather than the 10/20 split common elsewhere), with each year totalling 120 credits. Dissertations and extended projects may be 30 or 60 credits.",
      "For degree classification, Exeter typically applies a 33/67 year weighting (Year 2 at 33%, Year 3 at 67%), though some programmes may weight the final year more heavily. Year 1 marks do not count towards the classification. The standard UK classification boundaries apply.",
      "As a Russell Group university, Exeter maintains rigorous academic standards. The university uses detailed marking criteria with grade descriptors that outline what is expected at each classification level. External examiners from leading universities review standards annually.",
      "Exeter offers Year Abroad and Year in Industry options across many programmes. These additional years are typically assessed separately and do not contribute directly to the degree classification calculation based on Level 5 and Level 6 academic marks.",
    ],
    faqs: [
      {
        question: "What year weighting does the University of Exeter use?",
        answer:
          "Exeter typically uses a 33/67 year weighting: Level 5 (Year 2) at 33% and Level 6 (Year 3) at 67%. Some programmes may use different weightings, so check your programme handbook for the specific split.",
      },
      {
        question: "What module sizes does Exeter use?",
        answer:
          "Exeter commonly uses 15 and 30 credit modules, which is slightly different from the 10/20 split used by many other UK universities. Each year totals 120 credits. Dissertations and extended projects may be 30 or 60 credits.",
      },
      {
        question: "Is Exeter a Russell Group university?",
        answer:
          "Yes, the University of Exeter is a member of the Russell Group. It consistently ranks among the top 15 UK universities and is known for high-quality research and teaching.",
      },
      {
        question: "Does the Year Abroad count at Exeter?",
        answer:
          "Year Abroad marks at Exeter are typically assessed separately and do not contribute directly to your degree classification. Your classification is based on your Level 5 and Level 6 marks from modules taken at Exeter.",
      },
      {
        question: "What are Exeter's degree classification boundaries?",
        answer:
          "Exeter uses the standard UK boundaries: First Class at 70% and above, 2:1 at 60-69%, 2:2 at 50-59%, Third at 40-49%, and Fail below 40%.",
      },
    ],
  },
  {
    slug: "uclan",
    name: "University of Central Lancashire",
    shortName: "UCLan",
    keyword: "uclan grade calculator",
    description:
      "Free UCLan grade calculator. Calculate your University of Central Lancashire degree classification. Supports all UCLan undergraduate programmes with customisable year weightings.",
    yearWeighting: "Varies by programme (commonly 33/67 or 40/60)",
    yearWeightY2: 33,
    yearWeightY3: 67,
    creditsPerYear: 120,
    defaultModuleCredits: "20",
    framework: "FHEQ (England)",
    degreeLength: "3 years (or 4 with placement)",
    specialNotes: [
      "UCLan's year weighting varies by programme. Common splits are 33/67 and 40/60.",
      "Standard modules are 20 credits.",
      "UCLan is one of the UK's largest universities by student numbers.",
      "The university has strong professional and vocational programmes.",
    ],
    content: [
      "The University of Central Lancashire (UCLan) is a large public university based in Preston, Lancashire. With origins dating back to 1828, it is one of the UK's largest universities and serves over 30,000 students. UCLan is known for its strong professional, vocational, and applied programmes, particularly in health, journalism, forensic science, and engineering.",
      "UCLan uses the FHEQ credit framework with 120 credits per academic year. Modules are typically 20 credits, with dissertations and major projects worth 40 credits. The standard UK classification boundaries apply across all programmes.",
      "Year weightings at UCLan vary by programme. Common splits include 33/67 and 40/60 (Year 2/Year 3). It is important to check your specific programme handbook to confirm which weighting applies to your course. Year 1 marks do not count towards the final classification at most programmes.",
      "UCLan offers placement opportunities across many programmes. Placement years are typically assessed as pass/fail and do not contribute graded marks to the degree classification. The university has strong links with industry, particularly in the North West of England.",
      "To use this calculator for your UCLan degree, enter your module grades and credit values. If your programme uses a 40/60 year weighting instead of the default 33/67, you can calculate each year's average separately and apply the weightings manually, or use our weighted grade calculator for more flexibility.",
    ],
    faqs: [
      {
        question: "What year weighting does UCLan use?",
        answer:
          "UCLan's year weighting varies by programme. Common splits are 33/67 and 40/60 (Year 2/Year 3). Check your programme handbook or contact your programme leader to confirm which weighting applies to your specific course.",
      },
      {
        question: "What are UCLan's degree classification boundaries?",
        answer:
          "UCLan uses the standard UK classification boundaries: First at 70%+, 2:1 at 60-69%, 2:2 at 50-59%, Third at 40-49%, and Fail below 40%.",
      },
      {
        question: "Does UCLan have a borderline policy?",
        answer:
          "UCLan has academic regulations that cover borderline cases. The exact policy may vary by faculty. Contact your programme team for specific details about borderline classification decisions.",
      },
      {
        question: "Do first-year marks count at UCLan?",
        answer:
          "At most UCLan programmes, first-year (Level 4) marks do not count towards the final degree classification. You must pass Level 4 to progress, but the marks are excluded from the calculation.",
      },
      {
        question: "How many credits do I need for a UCLan degree?",
        answer:
          "A standard UCLan Honours degree requires 360 credits: 120 at Level 4, 120 at Level 5, and 120 at Level 6. Students taking a placement year earn additional credits but these do not affect classification.",
      },
    ],
  },
  {
    slug: "uwe",
    name: "University of the West of England",
    shortName: "UWE Bristol",
    keyword: "uwe grade calculator",
    description:
      "Free UWE Bristol grade calculator. Calculate your University of the West of England degree classification using UWE's 33/67 year weighting system.",
    yearWeighting: "33/67 (Year 2 / Year 3)",
    yearWeightY2: 33,
    yearWeightY3: 67,
    creditsPerYear: 120,
    defaultModuleCredits: "20",
    framework: "FHEQ (England)",
    degreeLength: "3 years (or 4 with placement)",
    specialNotes: [
      "UWE Bristol typically uses a 33/67 year weighting.",
      "Standard modules are 20 credits, dissertations typically 40 credits.",
      "UWE has a strong focus on professional practice and employability.",
      "The university operates across multiple campuses in Bristol.",
    ],
    content: [
      "The University of the West of England (UWE Bristol) is a large public university located across several campuses in Bristol, southwest England. With over 30,000 students, UWE is known for its professional, practice-oriented programmes and strong links with industry. It consistently ranks well for graduate employability and student satisfaction.",
      "UWE uses the FHEQ credit framework with 120 credits per year. Modules are typically 20 credits, with dissertations and major projects worth 40 credits. The standard UK classification boundaries apply.",
      "For degree classification, UWE typically uses a 33/67 year weighting: Level 5 (Year 2) contributes 33% and Level 6 (Year 3) contributes 67%. Year 1 marks do not count towards the final classification. The university calculates a credit-weighted average across qualifying modules.",
      "UWE has a strong commitment to employability, and many programmes include placement year options. Placement years are assessed as pass/fail and do not contribute graded marks to the degree classification. The university also offers study abroad opportunities with similar assessment arrangements.",
      "UWE operates a borderline policy for students near classification boundaries. The exact criteria involve consideration of the module profile at Level 6. Check your programme handbook for specific details.",
    ],
    faqs: [
      {
        question: "What year weighting does UWE Bristol use?",
        answer:
          "UWE Bristol typically uses a 33/67 year weighting: Level 5 (Year 2) at 33% and Level 6 (Year 3) at 67%. Some programmes may vary, so check your programme handbook.",
      },
      {
        question: "Does UWE have a borderline policy?",
        answer:
          "Yes, UWE operates a borderline policy for students near classification boundaries. The criteria typically involve your Level 6 module profile. Check your programme regulations for specific details.",
      },
      {
        question: "Does the placement year count at UWE?",
        answer:
          "Placement years at UWE are assessed as pass/fail and do not contribute a graded mark towards your degree classification. Your classification is based on Level 5 and Level 6 academic module marks only.",
      },
      {
        question: "What module sizes does UWE use?",
        answer:
          "UWE uses standard 20-credit modules for most courses. Dissertations and major projects are typically 40 credits. Each year totals 120 credits.",
      },
      {
        question: "Is UWE Bristol a good university?",
        answer:
          "UWE Bristol is well regarded for its professional, practice-oriented approach to education. It ranks well for student satisfaction, graduate employability, and teaching quality. The university has strong industry links and excellent facilities across its Bristol campuses.",
      },
    ],
  },
];
