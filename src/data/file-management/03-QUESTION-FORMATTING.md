# Question Formatting Guide

Complete reference for formatting questions, math expressions, tables, images, and special content.

---

## Question Types

### Multiple Choice
```typescript
{
  id: 'topic-1',
  type: 'multiple-choice',
  question: 'Your question?',
  options: [
    { label: 'A', value: 'A', text: 'Option A' },
    { label: 'B', value: 'B', text: 'Option B' },
    { label: 'C', value: 'C', text: 'Option C' },
    { label: 'D', value: 'D', text: 'Option D' },
  ],
  correctAnswer: 'A',
  explanation: 'Why A is correct.',
}
```

### Select All That Apply
```typescript
{
  id: 'topic-1b',
  type: 'select-all',
  question: 'Select all that apply:',
  options: [
    { label: 'A', value: 'A', text: 'Option A' },
    { label: 'B', value: 'B', text: 'Option B' },
    { label: 'C', value: 'C', text: 'Option C' },
    { label: 'D', value: 'D', text: 'Option D' },
  ],
  correctAnswers: ['A', 'C'],
  explanation: 'A and C are both correct because...',
}
```

**Select All rules:**
- Uses `type: 'select-all'` and `correctAnswers` (array) instead of `correctAnswer` (string)
- Displayed with checkboxes; users toggle multiple options
- Only correct if exactly the right options are selected (no extra, no missing)
- After submission: correct → green, wrong → red, missed → "Missed" label
- Fully supported in parts questions, custom editor, and ZIP export/import

### Free Response
```typescript
{
  id: 'topic-2',
  type: 'free-response',
  question: 'What is the answer?',
  correctAnswer: 'The expected answer',
  explanation: 'Explanation.',
}
```

### Parts (Multi-Part)
```typescript
{
  id: 'topic-3',
  type: 'parts',
  question: 'Main question stem:',
  parts: [
    {
      label: 'a',
      type: 'multiple-choice',
      question: 'Part A question?',
      options: [
        { label: 'A', value: 'A', text: 'Option' },
        // ...
      ],
      correctAnswer: 'A',
    },
    {
      label: 'b',
      type: 'select-all',
      question: 'Part B - select all that apply:',
      options: [
        { label: 'A', value: 'A', text: 'Option A' },
        { label: 'B', value: 'B', text: 'Option B' },
      ],
      correctAnswer: '',
      correctAnswers: ['A', 'B'],
    },
    {
      label: 'c',
      type: 'free-response',
      question: 'Part C question?',
      correctAnswer: 'Answer',
      explanation: 'Explanation',
    },
  ],
}
```

### List FRQ (Free Response with List Answers)
```typescript
{
  id: 'topic-4',
  type: 'free-response',
  question: 'Name the 4 macromolecules:',
  correctAnswer: '',
  listAnswers: ['Carbohydrates', 'Lipids', 'Proteins', 'Nucleic Acids'],
}
```

**List FRQ rules:**
- Only available on `free-response` questions (standalone or as parts)
- `listAnswers` is an array of strings — each is one correct item
- The quiz shows N text input blanks for the user to type their answers
- After submitting, a side-by-side table displays "Your Answer" and "Correct Answer" columns so users can compare
- Correct answers are shown in their original list order (no shuffling)
- `correctAnswer` can be empty when `listAnswers` is present
- In the custom editor, toggle "List Question" on any FRQ to enable
- Fully supported in ZIP export/import

---

## Math (LaTeX) Formatting

**IMPORTANT: LaTeX is explicit-only.** Math is ONLY rendered when wrapped in `$...$` (inline) or `$$...$$` (display mode). There is NO automatic conversion of plain text like `x^2`, `sqrt(x)`, `<=`, infinity symbols, or chemistry formulas. Everything must be explicitly wrapped.

In TypeScript strings, use `\\` for `\`.

| Element | Syntax | Example |
|---------|--------|---------|
| Fraction | `$\\frac{a}{b}$` | `$\\frac{x+1}{x-1}$` |
| Limit | `$\\lim_{x \\to a}$` | `$\\lim_{x \\to \\infty}$` |
| Square root | `$\\sqrt{x}$` | `$\\sqrt{x+1}$` |
| Exponent | `$x^{n}$` | `$x^{2}$` |
| ≤ / ≥ | `$\\leq$` / `$\\geq$` | `$x \\leq 5$` |
| Union | `$\\cup$` | `$(0,1) \\cup (2,3)$` |
| Infinity | `$\\infty$` | `$x \\to \\infty$` |
| Pi | `$\\pi$` | `$\\pi r^2$` |
| Log | `$\\log(x)$` | `$\\log_2(8)$` |
| Natural log | `$\\ln(x)$` | `$\\ln(e^2)$` |
| Chemistry | `$\\ce{H2O}$` | `$\\ce{NaCl}$` |

### Dollar Signs (Currency)
Escape with backslash: `\\$50` → displays as $50

---

## Line Breaks

Use `\n` in strings:
```typescript
explanation: 'Step 1: Do this.\nStep 2: Do that.\nStep 3: Get answer.'
```

---

## Images

### Question Image
```typescript
{
  id: 'topic-1',
  question: 'Based on the diagram...',
  image: '/images/subject/filename.png',
  // ...
}
```

### Option Images (MCQ)
```typescript
options: [
  { label: 'A', value: 'A', text: '', image: '/images/subject/optionA.png' },
  { label: 'B', value: 'B', text: '', image: '/images/subject/optionB.png' },
]
```

### Part Images
```typescript
parts: [
  {
    label: 'a',
    question: 'Look at this diagram:',
    image: '/images/subject/part-a.png',
    // ...
  },
]
```

**Image rules:**
- Store in `public/images/[subject]/`
- Reference as `/images/[subject]/filename.png`
- Use lowercase filenames with hyphens
- Never start path with `src/`

---

## Tables

```typescript
{
  id: 'topic-1',
  question: 'Based on the table...',
  table: {
    headers: ['x', 'f(x)', 'g(x)'],
    rows: [
      [1, 3, 5],
      [2, 7, 11],
    ],
  },
  // ...
}
```

---

## Calculator Flag

```typescript
{
  id: 'topic-1',
  calculator: true,  // Marks as calculator-allowed question
  // ...
}
```

---

## Chemistry Formatting

Chemistry formulas are NOT auto-formatted. Use the `\ce{}` command from the mhchem package within `$...$` delimiters:

```typescript
question: 'Balance the equation: $\\ce{H2 + O2 -> H2O}$'
question: 'What is the formula for sodium chloride? $\\ce{NaCl}$'
question: 'The ion $\\ce{Na+}$ reacts with $\\ce{Cl-}$'
```

**Key syntax:**
- Subscripts: `$\\ce{H2O}$` → H₂O
- Superscripts/charges: `$\\ce{Na+}$` → Na⁺
- Reaction arrows: `$\\ce{->}$` → →, `$\\ce{<=>}$` → ⇌
- No special syntax is applied automatically — always wrap in `$\\ce{...}$`

---

## Naming Conventions

| Item | Format | Example |
|------|--------|---------|
| File name | `[topic]-questions.ts` | `polynomial-questions.ts` |
| Variable name | `[topic]Questions` | `polynomialQuestions` |
| Question ID | `[topic]-[number]` | `polynomial-1` |
| Image file | `[topic][number].png` | `polynomial1.png` |
| MC type | `'multiple-choice'` | `type: 'multiple-choice'` |
| SATA type | `'select-all'` | `type: 'select-all'` |
| FRQ type | `'free-response'` | `type: 'free-response'` |
| Parts type | `'parts'` | `type: 'parts'` |

---

## Import/Export Handling

When questions go through ZIP export/import:
- `JSON.stringify()` automatically escapes backslashes
- The import parser's `unescapeString()` restores LaTeX correctly
- Double backslashes are handled first to protect LaTeX commands
- Parts questions are fully serialized/deserialized including per-part options and images
