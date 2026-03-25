# Data Mapping Reference

This document shows exactly where every piece of data is connected and mapped in the app.

---

## The Data Pipeline

### Main Site
```
Question File (.ts)
  → questionLoader.ts (import + questionMap + subjectUnits + subjectTitles)
    → Category Page (subject card + units array)
      → UnitDetail.tsx (reads subject/unitId from URL params)
        → Quiz.tsx, ViewAllQuestions.tsx, PresetBuilder.tsx
    → CourseChallenge.tsx (reads getSubjectUnits() from questionLoader)
    → CourseChallengePresetBuilder.tsx (reads getSubjectUnits() from questionLoader)
```

### Tests Section (Password-Protected)
```
Question File (.ts) in src/data/real-tests/
  → testsQuestionLoader.ts (import + testsQuestionMap + testsCategories)
    → TestsPage.tsx (category listing + Course Challenge links)
      → TestsUnitDetail.tsx (unit detail with cram, view all, preset builder)
        → Quiz.tsx (?source=tests), ViewAllQuestions.tsx (?source=tests)
      → CourseChallenge.tsx (via /tests/course-challenge/:subject)
```

### Custom Units (Browser localStorage)
```
User creates unit in CustomUnitsCategory.tsx
  → useCustomUnits.ts (localStorage: custom-units-data)
    → CustomUnitsCategory.tsx (list/manage units + topics)
      → CustomTopicEditor.tsx (add/edit questions)
      → Quiz.tsx (custom-{unitId} as subject)
      → CustomUnitChallenge.tsx (course challenge for custom units)
```

---

## questionLoader.ts — The Central Hub

**Location:** `src/utils/questionLoader.ts`

Contains:
- `questionMap`: Maps `{subject}-{topicId}` keys to question arrays
- `subjectUnits`: Unit lists per subject (used by CourseChallenge pages)
- `subjectTitles`: Display names per subject

### Key Functions
```typescript
getQuestions(key)        // Get questions for one topic
getQuestionMap()         // Get all questions as a map
getSubjectUnits(subject) // Get unit list for CourseChallenge pages
getSubjectTitle(subject) // Get display name for a subject
```

---

## Category Pages

| Category Page | Subjects |
|---------------|----------|
| `MathCategory.tsx` | AP Precalculus |
| `ScienceCategory.tsx` | Chemistry, Biology |
| `SocialCategory.tsx` | World History |
| `OtherCategory.tsx` | Memory Training, AP CSP, Temporary Practice |
| `CustomUnitsCategory.tsx` | User-created custom units (localStorage) |
| `TestsPage.tsx` | Chemistry, Biology, World History (password-protected, separate loader) |

---

## UnitDetail.tsx

Reads `subject` and `unitId` from URL params, looks up questions via `getQuestionMap()`. No hardcoded unit lists — unit listing is driven by category pages.

---

## CourseChallenge.tsx & CourseChallengePresetBuilder.tsx

Both read unit lists from `getSubjectUnits()` in questionLoader.ts. Adding a unit to `subjectUnits` is all that's needed.

---

## Results.tsx — Post-Quiz Features

After completing a quiz, the results page provides:
- **Retake Quiz** — Redo the same questions
- **Targeted Practice** — Instantly redo only wrong answers (no preset download needed)
- **Download Wrong Answers** — Export wrong answers as a preset .json file
- **List FRQ Review** — Shows your answers vs correct answers in a side-by-side table

---

## App.tsx — Routes

```
# Main site
/category/:categoryId → Category pages (math, science, social, english, other, custom)
/unit/:subject/:unitId → UnitDetail page
/quiz/:subject/:unitId/:quizType → Quiz page
/view-all/:subject/:unitId → ViewAllQuestions page
/course-challenge/:subject → CourseChallenge page
/custom-unit/:unitId → CustomUnitChallenge page
/custom-topic/:unitId/:topicId → CustomTopicEditor page

# Informational pages
/privacy, /data, /updates, /how-to-use, /contributors

# Tests section (password-protected)
/password → PasswordPage
/tests → TestsPage
/tests/unit/:subject/:unitId → TestsUnitDetail
/tests/quiz/:subject/:unitId/:quizType → Quiz (?source=tests)
/tests/course-challenge/:subject → CourseChallenge
```

---

## Custom Units Export Naming

- **Topic files:** `{topicname}-questions.ts`
- **Image files:** `{topicname}{number}.{ext}`
- **Metadata:** `unit-metadata.json`

---

## Last Updated

March 2026