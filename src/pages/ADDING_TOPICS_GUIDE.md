# Guide: Adding Topics and Units to CSW Studying

This guide explains how to add new topics, units, and subjects to the study app.

---

## Table of Contents
1. [File Structure Overview](#file-structure-overview)
2. [Adding a Topic to an Existing Unit](#adding-a-topic-to-an-existing-unit)
3. [Adding a New Unit to an Existing Subject](#adding-a-new-unit-to-an-existing-subject)
4. [Adding a Completely New Subject](#adding-a-completely-new-subject)
5. [Protecting Tests with Fake Data](#protecting-tests-with-fake-data)
6. [Question Format Reference](#question-format-reference)

---

## File Structure Overview

```
src/
├── data/
│   ├── [subject]/
│   │   ├── [topic]-questions.ts    # Question files
│   │   └── info.md                 # Subject info
│   ├── fake/                       # Fake data for test protection
│   │   └── [subject]/
│   │       └── [topic]-questions.ts
│   ├── test-schedule-config.ts     # Test date configuration
│   └── FORMATTING_GUIDE.md         # Question formatting reference
├── utils/
│   └── questionLoader.ts           # Centralized question loading (IMPORTANT!)
├── pages/
│   ├── Quiz.tsx                    # Main quiz component
│   ├── UnitDetail.tsx              # Unit detail page
│   ├── ViewAllQuestions.tsx        # View all questions
│   ├── PresetBuilder.tsx           # Build custom practice
│   ├── CourseChallenge.tsx         # Course challenge page
│   └── categories/
│       ├── MathCategory.tsx
│       ├── ScienceCategory.tsx
│       ├── SocialCategory.tsx
│       └── OtherCategory.tsx
└── types/
    └── quiz.ts                     # Question type definitions
```

---

## Adding a Topic to an Existing Unit

### Step 1: Create the Questions File

Create a new file in `src/data/[subject]/[topic]-questions.ts`:

```typescript
import { Question } from '@/types/quiz';

export const [topicName]Questions: Question[] = [
  {
    id: '[topic]-1',
    type: 'multiple-choice',
    question: 'Your question here?',
    options: [
      { label: 'A', value: 'a', text: 'Option A' },
      { label: 'B', value: 'b', text: 'Option B' },
      { label: 'C', value: 'c', text: 'Option C' },
      { label: 'D', value: 'd', text: 'Option D' },
    ],
    correctAnswer: 'a',
    explanation: 'Explanation of the answer.',
  },
  // Add more questions...
];
```

### Step 2: Add to questionLoader.ts

Open `src/utils/questionLoader.ts` and:

1. **Add the import** in the "REAL DATA IMPORTS" section:
```typescript
import { [topicName]Questions } from '@/data/[subject]/[topic]-questions';
```

2. **Add to the realDataMap**:
```typescript
'[subject]-[topic]': [topicName]Questions,
```

### Step 3: Add to UnitDetail.tsx

Open `src/pages/UnitDetail.tsx` and find the `getUnits()` function. Add your topic to the appropriate subject's unit list.

---

## Adding a New Unit to an Existing Subject

### Step 1: Create All Topic Files

Create all necessary question files in `src/data/[subject]/`.

### Step 2: Add to questionLoader.ts

Import all question files and add them to `realDataMap`.

### Step 3: Update UnitDetail.tsx

In `src/pages/UnitDetail.tsx`, find the `getUnits()` function and add your new unit:

```typescript
case '[subject]':
  return [
    // ... existing units
    { id: '[new-unit]', name: 'Unit X - New Unit Name' },
  ];
```

### Step 4: Update CourseChallenge.tsx

In `src/pages/CourseChallenge.tsx`, find the `getUnits()` function and add the same unit:

```typescript
case '[subject]':
  return [
    // ... existing units
    { id: '[new-unit]', name: 'Unit X - New Unit Name' },
  ];
```

---

## Adding a Completely New Subject

### Step 1: Create Subject Folder and Files

1. Create folder: `src/data/[newsubject]/`
2. Create an `info.md` file with subject description
3. Create topic question files

### Step 2: Add to questionLoader.ts

Import all question files and add them to `realDataMap`:

```typescript
// Import
import { topic1Questions } from '@/data/newsubject/topic1-questions';

// Add to realDataMap
'newsubject-topic1': topic1Questions,
```

### Step 3: Update Category Page

Choose the appropriate category page in `src/pages/categories/`:
- `MathCategory.tsx` - for math subjects
- `ScienceCategory.tsx` - for science subjects  
- `SocialCategory.tsx` - for social studies subjects
- `OtherCategory.tsx` - for other subjects

Add the new subject card:

```typescript
{
  id: '[newsubject]',
  name: 'New Subject Name',
  description: 'Description of the subject',
  icon: <Icon className="h-6 w-6" />,
  units: ['unit1', 'unit2'],
}
```

### Step 4: Update UnitDetail.tsx

Add a new case in the `getUnits()` function:

```typescript
case '[newsubject]':
  return [
    { id: 'unit1', name: 'Unit 1 - Name' },
    { id: 'unit2', name: 'Unit 2 - Name' },
  ];
```

### Step 5: Update CourseChallenge.tsx

Add a new case in the `getUnits()` function similar to above.

---

## Protecting Tests with Fake Data

To prevent students from seeing test questions before the test date:

### Step 1: Create Fake Data File

Create `src/data/fake/[subject]/[topic]-questions.ts` with practice questions:

```typescript
import { Question } from '@/types/quiz';

export const [topicName]Questions: Question[] = [
  {
    id: 'fake-[topic]-1',
    type: 'multiple-choice',
    question: 'Practice: Your practice question here?',
    options: [...],
    correctAnswer: 'a',
    explanation: 'Practice content.',
  },
];
```

### Step 2: Add to questionLoader.ts

Import and add to `fakeDataMap`:

```typescript
import { [topicName]Questions as fake[TopicName]Questions } from '@/data/fake/[subject]/[topic]-questions';

const fakeDataMap: Record<string, Question[]> = {
  '[subject]-[topic]': fake[TopicName]Questions,
};
```

### Step 3: Configure Test Date

In `src/data/test-schedule-config.ts`:

```typescript
export const testScheduleConfig: Record<string, TestSchedule> = {
  '[subject]-[topic]': { testDate: '2026-01-25', hasFakeData: true },
};
```

See [10-FAKE-DATA-SYSTEM.md](/src/management/10-FAKE-DATA-SYSTEM.md) for full details.

---

## Question Format Reference

### Multiple Choice Question

```typescript
{
  id: 'unique-id',
  type: 'multiple-choice',
  question: 'What is the question?',
  options: [
    { label: 'A', value: 'a', text: 'Answer option A' },
    { label: 'B', value: 'b', text: 'Answer option B' },
    { label: 'C', value: 'c', text: 'Answer option C' },
    { label: 'D', value: 'd', text: 'Answer option D' },
  ],
  correctAnswer: 'a', // Must match one of the option values
  explanation: 'Why this is correct...',
  image: '/images/subject/image.png', // Optional
}
```

### Free Response Question

```typescript
{
  id: 'unique-id',
  type: 'free-response',
  question: 'What is the answer?',
  correctAnswer: 'The expected answer',
  explanation: 'Explanation of the answer.',
  image: '/images/subject/image.png', // Optional
}
```

### With Table

```typescript
{
  id: 'unique-id',
  type: 'multiple-choice',
  question: 'Based on the table...',
  table: {
    headers: ['Column 1', 'Column 2', 'Column 3'],
    rows: [
      ['Row 1 Data', 'Value', 'Result'],
      ['Row 2 Data', 'Value', 'Result'],
    ],
  },
  options: [/* ... */],
  correctAnswer: 'a',
  explanation: 'Explanation...',
}
```

### With Math (LaTeX)

Use `$$...$$` for display math or `$...$` for inline math:

```typescript
{
  id: 'math-1',
  type: 'free-response',
  question: 'Solve: $$\\frac{x^2 + 1}{2}$$',
  correctAnswer: '$x = 5$',
  explanation: 'The solution is $$x = 5$$ because...',
}
```

See [FORMATTING_GUIDE.md](/src/data/FORMATTING_GUIDE.md) for complete LaTeX reference.

---

## Files to Edit Summary

| Action | Files to Edit |
|--------|---------------|
| Add topic to existing unit | 1. Create `[topic]-questions.ts`<br>2. `questionLoader.ts` (import + realDataMap) |
| Add new unit | 1. Create question files<br>2. `questionLoader.ts`<br>3. `UnitDetail.tsx`<br>4. `CourseChallenge.tsx` |
| Add new subject | 1. Create `src/data/[subject]/` folder<br>2. `questionLoader.ts`<br>3. Category page<br>4. `UnitDetail.tsx`<br>5. `CourseChallenge.tsx` |
| Protect test | 1. Create `src/data/fake/[subject]/[topic]-questions.ts`<br>2. `questionLoader.ts` (import + fakeDataMap)<br>3. `test-schedule-config.ts` |

---

## Tips

1. **Question IDs**: Use a consistent format like `[topic]-[number]` (e.g., `biochem-1`, `biochem-2`)
2. **Images**: Store in `public/images/[subject]/` folder
3. **LaTeX**: Use KaTeX syntax for math expressions (see FORMATTING_GUIDE.md)
4. **Testing**: After adding questions, test in cram mode, view all questions, and build custom practice to verify all features work
5. **Always use questionLoader**: Never import questions directly from data files - use `getQuestions()` or `getQuestionMap()`
