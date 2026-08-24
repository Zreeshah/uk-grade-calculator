# Semantic Internal Linking Plan

## Site Architecture (Hub-and-Spoke)

### Pillar Hub: Homepage (`/`)
The homepage is the topical authority center. Every page links to it. It links outward to every cluster.

### Cluster 1: Core Calculation Tools
- Hub: `/` (University Grade Calculator)
- Spokes:
  - `/module-grade-calculator/` - individual module breakdown
  - `/weighted-grade-calculator/` - credit-weighted averages
  - `/degree-classification-calculator/` - classification lookup
  - `/percentage-grade-calculator/` - percentage conversion
  - `/final-grade-calculator/` - target grade planning

### Cluster 2: Specialist Calculators
- Hub: `/`
- Spokes:
  - `/btec-grade-calculator/` - vocational qualifications
  - `/masters-grade-calculator/` - postgraduate
  - `/gpa-calculator/` - international conversion

### Cluster 3: Educational Guides
- Hub: `/blog/uk-degree-classifications-explained/`
- Spokes:
  - `/blog/how-university-grading-works-uk/`
  - `/blog/how-to-calculate-weighted-average/`

### Cluster 4: University-Specific
- Hub: `/` (with university section)
- Spokes: All 10 university pages
- Cross-link groups:
  - Northern England: MMU, Leeds, Sheffield Hallam, UCLan
  - Southern/Welsh: Portsmouth, Exeter, Swansea, UWE
  - Scottish: St Andrews
  - Distance: Open University

## Linking Rules

1. Every page links to the pillar (`/`) at least once in-content
2. Every calculator page links to at least 2 blog guides inline
3. Every blog page links to at least 3 calculators inline
4. Every university page links to 2-3 other universities in the same region
5. The homepage links to all clusters including universities and blog
6. Minimum 6 contextual in-content links per page (not counting bottom RelatedLinks)
7. Anchor text is descriptive and varied (not just "click here" or repeated exact-match)

## Link Matrix

### From Homepage (`/`)
- TO module-grade-calculator (anchor: "module grade calculator")
- TO weighted-grade-calculator (anchor: "weighted grade calculator")
- TO btec-grade-calculator (anchor: "BTEC grade calculator")
- TO masters-grade-calculator (anchor: "masters grade calculator")
- TO final-grade-calculator (anchor: "target grade calculator")
- TO gpa-calculator (anchor: "GPA calculator")
- TO degree-classification-calculator (anchor: "degree classification calculator")
- TO blog/uk-degree-classifications-explained (anchor: "UK degree classifications")
- TO blog/how-university-grading-works-uk (anchor: "how university grading works")
- TO blog/how-to-calculate-weighted-average (anchor: "weighted average guide")
- TO universities/mmu (anchor: "MMU grade calculator")
- TO universities/leeds (anchor: "Leeds grade calculator")
- TO universities/open-university (anchor: "Open University grade calculator")

### From Each Calculator Page
- TO / (pillar link)
- TO 2-3 semantically related calculators
- TO 1-2 relevant blog guides
- TO 1 university page as example

### From Each University Page
- TO / (pillar link)
- TO weighted-grade-calculator (year weighting tool)
- TO module-grade-calculator (module tool)
- TO blog/uk-degree-classifications-explained (classification guide)
- TO 2-3 nearby/related university pages
- TO final-grade-calculator (target planning)

### From Each Blog Page
- TO / (pillar link)
- TO 3-4 relevant calculators
- TO other blog pages
- TO 1-2 university pages as examples
