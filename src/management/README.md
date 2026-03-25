# CSW Studying - Technical Handoff Documentation

## Overview

This folder contains comprehensive documentation for maintaining and extending the CSW Studying application.

---

## Documents

| File | Purpose |
|------|---------|
| [01-DATA-SCHEMA.md](./01-DATA-SCHEMA.md) | Complete data structures for courses, questions, and related entities |
| [02-CONTENT-AUTHORING-GUIDE.md](./02-CONTENT-AUTHORING-GUIDE.md) | Step-by-step instructions for adding new courses and questions |
| [03-STATE-AND-STORAGE.md](./03-STATE-AND-STORAGE.md) | How application state is managed and persisted (including quiz resume) |
| [04-EDGE-CASES-AND-FAILURE-MODES.md](./04-EDGE-CASES-AND-FAILURE-MODES.md) | Known edge cases and how to handle them |
| [05-PERFORMANCE-ASSUMPTIONS.md](./05-PERFORMANCE-ASSUMPTIONS.md) | Expected data sizes, caching, and limits |
| [06-DEPENDENCIES.md](./06-DEPENDENCIES.md) | All external dependencies and their purposes |
| [07-LOVABLE-REMOVAL-IMPACT.md](./07-LOVABLE-REMOVAL-IMPACT.md) | What changes when you leave Lovable |
| [08-GITHUB-HOSTING-GUIDE.md](./08-GITHUB-HOSTING-GUIDE.md) | How to host on GitHub Pages |
| [09-TROUBLESHOOTING-ERRORS.md](./09-TROUBLESHOOTING-ERRORS.md) | Common errors and how to fix them |
| [12-COUNTER-DEV-ANALYTICS.md](./12-COUNTER-DEV-ANALYTICS.md) | Counter.dev real-time analytics integration |
| [13-MATH-TEXT-LINE-BREAKS.md](./13-MATH-TEXT-LINE-BREAKS.md) | MathText component — explicit LaTeX rendering |
| [14-ADVERTISEMENTS-GUIDE.md](./14-ADVERTISEMENTS-GUIDE.md) | Ad setup, revenue, and placeholder infrastructure |
| [15-HOW-TO-USE-VIDEOS.md](./15-HOW-TO-USE-VIDEOS.md) | Adding tutorial videos to the How to Use page |

---

## Quick Start for New Maintainers

### 1. Understand the Architecture

```
src/
├── components/     # Reusable UI components
├── data/          # Question banks and configuration
│   ├── real-tests/ # Password-protected test data (separate from main site)
│   ├── temporary/ # Temporary practice topics (rotating content)
│   └── file-management/ # Data management documentation
├── hooks/         # React hooks for state management
├── pages/         # Page components (routes)
│   ├── categories/  # Category pages (Math, Science, Social, English, Other, Custom Units)
│   ├── PasswordPage.tsx   # Password gate for /tests
│   ├── TestsPage.tsx      # Tests category listing
│   ├── TestsUnitDetail.tsx # Tests unit detail page
│   ├── Results.tsx        # Quiz results with retake, targeted practice, preset download
│   ├── DataStatistics.tsx  # Data/Statistics page
│   ├── UpdateTracker.tsx   # Update tracker log page
│   ├── HowToUse.tsx        # Comprehensive how-to-use guide
│   ├── Contributors.tsx    # Contributors page with floating cards
├── types/         # TypeScript type definitions
└── utils/
    ├── questionLoader.ts       # Centralized question loading + unit lists + subject titles
    ├── inProgressQuizStorage.ts # Quiz persistence/resume
    └── customUnitsExport.ts    # ZIP export/import for custom units
```

### 2. Key Files

| Task | Primary File(s) |
|------|----------------|
| Add questions | `src/data/{subject}/{topic}-questions.ts` + `questionLoader.ts` |
| Add units/subjects | `questionLoader.ts` (questionMap + subjectUnits + subjectTitles) |
| Add test questions | `src/data/real-tests/{subject}/` + `testsQuestionLoader.ts` |
| Update site stats | `src/data/site-stats.ts` |
| Configure routing | `src/App.tsx` |
| Quiz logic | `src/pages/Quiz.tsx` |
| Results & targeted practice | `src/pages/Results.tsx` |
| Types | `src/types/quiz.ts` |
| Question loading (main) | `src/utils/questionLoader.ts` |
| Question loading (tests) | `src/data/real-tests/testsQuestionLoader.ts` |
| Tests toggle | `src/data/real-tests/password-config.ts` (TESTS_ENABLED flag) |
| Update tracker | `src/data/updates.ts` (shared data) + `src/pages/UpdateTracker.tsx` |
| Data proof | `src/data/data-proof.ts` (media + reviews) + `src/pages/DataProof.tsx` |
| Contributors | `src/pages/Contributors.tsx` (add to contributors array) |
| Custom units | `src/pages/categories/CustomUnitsCategory.tsx` + `src/hooks/useCustomUnits.ts` |
| How-to-use videos | `src/data/how-to-use-videos.ts` (config) + `src/components/SectionVideo.tsx` |
| Ad placeholders | `src/components/AdPlaceholder.tsx` (toggle via `ADS_ENABLED`) |

### 3. Most Common Tasks

**Add a new question to existing topic:**
→ See [02-CONTENT-AUTHORING-GUIDE.md](./02-CONTENT-AUTHORING-GUIDE.md)

**Create a new topic/unit:**
→ Edit `questionLoader.ts` (import + questionMap + subjectUnits) + category page

**Debug data issues:**
→ See [03-STATE-AND-STORAGE.md](./03-STATE-AND-STORAGE.md)

---

## Technology Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 |
| Build Tool | Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui (Radix UI) |
| Routing | React Router v6 |
| Math Rendering | KaTeX |
| State | React hooks + localStorage |
| Analytics | Counter.dev (real-time) |

---

## No Backend Required

This application is entirely client-side:
- No database server
- No API endpoints
- No authentication server
- All data stored in browser localStorage

---

## Important: Centralized Question Loading

**Main site** questions are loaded through `src/utils/questionLoader.ts`:
- Imports all question data
- Provides `getQuestions()`, `getQuestionMap()`, `getSubjectUnits()`, `getSubjectTitle()`
- Adding a new unit only requires editing `questionLoader.ts` + the category page

**Tests section** questions are loaded through `src/data/real-tests/testsQuestionLoader.ts`:
- Completely separate from the main loader
- Password-protected access via `TESTS_ENABLED` in `password-config.ts`

**Never import questions directly from data files!** Always use:
```typescript
import { getQuestions, getQuestionMap, getSubjectUnits, getSubjectTitle } from '@/utils/questionLoader';
```

---

## Key Features Summary

### Question Types
- **Multiple Choice (MCQ)**: Standard 4-option radio
- **Free Response (FRQ)**: Text input with self-grading
- **Select All That Apply (SATA)**: Checkbox multi-select
- **Parts (Multi-Part)**: Multiple sub-questions per item
- **List FRQ**: Multiple text inputs with side-by-side comparison (user answers shown in results)
- **True/False**: MCQ preset with 2 options (uses standard MCQ formatting)

### Quiz Features
- Skip & review, quiz persistence/resume, timer, calculator sections
- Keyboard shortcuts (number keys, Enter, arrows)
- Wrong answer tracking and targeted practice
- Preset builder for custom question sets
- Download wrong answers as preset files
- **Targeted Practice from results** — instantly redo wrong answers without downloading presets

### Custom Units
- Managed in dedicated **Custom Units** category (`/category/custom`)
- Create/edit/delete custom units and topics
- T/F preset for quick True/False creation
- ZIP export/import with images
- Combine topics feature

### FRQ Symbol Input
- Math symbols (∞, π, ≤, ≥, etc.)
- Chemistry symbols (equilibrium arrow ⇌)
- Directional arrows (→, ←, ↑, ↓, ↔)
- Spanish accents (á, é, í, ó, ú, ñ, ¿, ¡, ü)
- Keyboard shortcuts (sqrt, lim, inf + Space)

### Footer
- Compact layout with links in columns of 2 (left-to-right)
- "Made with Lovable" bottom-right

### Ad Placeholders
- Rendered first in DOM (underneath page content by order)
- Sidebar ads use `max-h-[calc(100vh-160px)]` to stop before footer
- Hidden on mobile for sidebar positions

---

## Last Updated

March 2026