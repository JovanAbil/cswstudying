# Fake Data Folder

This folder contains fake/practice questions that are shown when real test data is locked.

## How It Works

The fake data system prevents students from seeing actual test questions before the test date. When a topic is "locked":
- Fake questions are shown instead of real ones
- This applies to ALL features: Quiz, View All Questions, Build Custom Practice, etc.
- Visual indicators show "(Practice)" or "Practice Mode Active"

## Architecture

All question loading goes through `src/utils/questionLoader.ts`, which:
1. Checks the test schedule in `src/data/test-schedule-config.ts`
2. Determines if the current date allows real data
3. Returns fake data if locked, real data if unlocked

## File Structure

```
src/data/fake/
├── README.md (this file)
├── chemistry/
│   ├── atomic-questions.ts
│   ├── compounds-questions.ts
│   └── ...
├── biology/
│   ├── biochemistry-questions.ts
│   └── ...
├── apprecalc/
│   ├── polynomial-questions.ts
│   └── ...
└── worldhistory/
    ├── renaissance-questions.ts
    └── ...
```

## Creating Fake Data Files

1. Copy the structure from the real file
2. Change the questions to be similar but different (practice questions)
3. Keep the **same variable name** and export
4. Prefix IDs with `fake-` to distinguish them

### Example: `src/data/fake/chemistry/atomic-questions.ts`

```typescript
import { Question } from '@/types/quiz';

// FAKE/PRACTICE DATA - Shown when real test is locked
export const atomicQuestions: Question[] = [
  {
    id: 'fake-atomic-1',
    type: 'multiple-choice',
    question: 'Practice question about atomic structure...',
    options: [
      { label: 'A', value: 'a', text: 'Practice option A' },
      { label: 'B', value: 'b', text: 'Practice option B' },
      { label: 'C', value: 'c', text: 'Practice option C' },
      { label: 'D', value: 'd', text: 'Practice option D' },
    ],
    correctAnswer: 'a',
    explanation: 'This is practice content.',
  },
  // Add more practice questions...
];
```

## Adding a New Protected Test

### Step 1: Create the Fake Data File

Create `src/data/fake/[subject]/[topic]-questions.ts` with practice questions.

### Step 2: Import in questionLoader.ts

Open `src/utils/questionLoader.ts`:

```typescript
// Add import with alias
import { atomicQuestions as fakeAtomicQuestions } from '@/data/fake/chemistry/atomic-questions';

// Add to fakeDataMap
const fakeDataMap: Record<string, Question[]> = {
  'chemistry-atomic': fakeAtomicQuestions,
  // Add more...
};
```

### Step 3: Configure Test Date

Edit `src/data/test-schedule-config.ts`:

```typescript
export const testScheduleConfig: Record<string, TestSchedule> = {
  'chemistry-atomic': { testDate: '2026-01-25', hasFakeData: true },
  // Add more entries...
};
```

## Timeline Example

For a test with date `2026-01-25`:

| Period | Data Shown | Reason |
|--------|-----------|--------|
| Before Jan 25, 2026 | FAKE | Test hasn't happened yet |
| Jan 25, 2026 - Aug 31, 2027 | REAL | Test completed, study period |
| Sep 1, 2027 - Feb 1, 2028 | FAKE | Locked for new semester |
| Feb 1, 2028 - Aug 31, 2028 | REAL | Next cycle begins (test date + 7 days) |
| ... | ... | Pattern repeats yearly |

## Visual Indicators When Locked

- **UnitDetail.tsx**: Topic shows "(Practice)" suffix
- **ViewAllQuestions.tsx**: Orange banner "📚 Practice Mode Active"
- **PresetBuilder.tsx**: Orange banner with unlock date

## Testing

1. Change the test date in `test-schedule-config.ts` to a future date
2. Visit the topic's quiz, view all questions, and build custom practice
3. Verify all show fake data with practice indicators
4. Check console for `[Test Schedule] Using practice data for...` messages

## Full Documentation

See [10-FAKE-DATA-SYSTEM.md](/src/management/10-FAKE-DATA-SYSTEM.md) for complete details.
