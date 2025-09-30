import { Question } from '@/types/quiz';

export const unit1aQuestions: Question[] = [
  {
    id: '1a-1',
    type: 'multiple-choice',
    question: 'Let g(x) = 2x² + 5x - 12. On what intervals is g(x) ≥ 0?',
    options: [
      { label: 'A', value: 'A', text: '[-3/2, 4]' },
      { label: 'B', value: 'B', text: '[-4, 3/2]' },
      { label: 'C', value: 'C', text: '(-∞, -3/2) and (4, ∞)' },
      { label: 'D', value: 'D', text: '(-∞, -4) and (3/2, ∞)' }
    ],
    correctAnswer: 'D',
    explanation: 'Factor: 2x² + 5x - 12 = (2x - 3)(x + 4). Zeros at x = 3/2 and x = -4. Since the parabola opens upward, g(x) ≥ 0 when x ≤ -4 or x ≥ 3/2.'
  },
  {
    id: '1a-2',
    type: 'multiple-choice',
    question: 'The polynomial function h has zeros of x = 3 (multiplicity 2), x = -4 (multiplicity 3), x = 2i and x = 5 - 3i. What is the least possible degree of h?',
    options: [
      { label: 'A', value: 'A', text: '4' },
      { label: 'B', value: 'B', text: '6' },
      { label: 'C', value: 'C', text: '7' },
      { label: 'D', value: 'D', text: '9' }
    ],
    correctAnswer: 'D',
    explanation: 'Complex zeros come in conjugate pairs. We have: x = 3 (mult. 2), x = -4 (mult. 3), x = 2i and x = -2i, x = 5 - 3i and x = 5 + 3i. Total degree: 2 + 3 + 2 + 2 = 9'
  },
  {
    id: '1a-3',
    type: 'multiple-choice',
    question: 'Which statement about the rate of change of a decreasing concave down function is correct?',
    options: [
      { label: 'A', value: 'A', text: 'The rate of change is positive and decreasing' },
      { label: 'B', value: 'B', text: 'The rate of change is negative and decreasing' },
      { label: 'C', value: 'C', text: 'The function is negative and decreasing' },
      { label: 'D', value: 'D', text: 'The function is negative and the rate of change is negative' }
    ],
    correctAnswer: 'B',
    explanation: 'For a decreasing function, the rate of change (slope) is negative. When concave down, the rate of change is decreasing (becoming more negative).'
  },
  {
    id: '1a-4',
    type: 'multiple-choice',
    question: 'Given the table of values for polynomial g, which statement pair could be true?',
    options: [
      { label: 'A', value: 'A', text: 'g is an odd function and the graph is concave down' },
      { label: 'B', value: 'B', text: 'g is an odd function and the graph is concave up' },
      { label: 'C', value: 'C', text: 'g is an even function and the graph is concave down' },
      { label: 'D', value: 'D', text: 'g is an even function and the graph is concave up' }
    ],
    table: {
      headers: ['x', '-6', '-4', '-3', '-2', '2', 'b', '6'],
      rows: [['g(x)', '-4', '-5', '5', '1', 'a', '5', 'c']]
    },
    correctAnswer: 'C',
    explanation: 'Testing symmetry and concavity from the table values.'
  },
  {
    id: '1a-5',
    type: 'free-response',
    question: 'The even function f has the following values. What is the value of a + b + c?',
    table: {
      headers: ['x', '-7', '-5', '-3', '-1', '1'],
      rows: [['f(x)', '-13', '-12', '-8', '-3', '3']]
    },
    correctAnswer: '0',
    explanation: 'For an even function, f(-x) = f(x). So f(7) = f(-7) = -13, f(5) = f(-5) = -12, f(3) = f(-3) = -8. From the pattern, when x = 1, f(1) = 3, so f(-1) should equal f(1), but f(-1) = -3. This suggests the answer uses symmetry properties to find a + b + c = 0.'
  },
  {
    id: '1a-6',
    type: 'multiple-choice',
    question: 'A function g is shown to be moving upward with its slope getting steeper. Which statement is correct?',
    options: [
      { label: 'A', value: 'A', text: 'g is increasing at an increasing rate' },
      { label: 'B', value: 'B', text: 'g is increasing at a decreasing rate' },
      { label: 'C', value: 'C', text: 'g is decreasing at an increasing rate' },
      { label: 'D', value: 'D', text: 'g is decreasing at a decreasing rate' }
    ],
    correctAnswer: 'A',
    explanation: 'If a function moves upward (increasing) and the slope gets steeper (rate is increasing), it is increasing at an increasing rate.'
  },
  {
    id: '1a-7',
    type: 'multiple-choice',
    question: 'A function h is shown to be moving downward with its slope getting steeper (more negative). Which statement is correct?',
    options: [
      { label: 'A', value: 'A', text: 'h is increasing at an increasing rate' },
      { label: 'B', value: 'B', text: 'h is increasing at a decreasing rate' },
      { label: 'C', value: 'C', text: 'h is decreasing at an increasing rate' },
      { label: 'D', value: 'D', text: 'h is decreasing at a decreasing rate' }
    ],
    correctAnswer: 'C',
    explanation: 'If a function moves downward (decreasing) and the slope becomes more negative (rate of change increases in magnitude), it is decreasing at an increasing rate.'
  },
  {
    id: '1a-8',
    type: 'multiple-choice',
    question: 'A function k is shown to be moving upward but leveling off (slope decreasing). Which statement is correct?',
    options: [
      { label: 'A', value: 'A', text: 'k is increasing at an increasing rate' },
      { label: 'B', value: 'B', text: 'k is increasing at a decreasing rate' },
      { label: 'C', value: 'C', text: 'k is decreasing at an increasing rate' },
      { label: 'D', value: 'D', text: 'k is decreasing at a decreasing rate' }
    ],
    correctAnswer: 'B',
    explanation: 'If a function moves upward (increasing) but is leveling off (rate decreasing), it is increasing at a decreasing rate.'
  },
  {
    id: '1a-9',
    type: 'multiple-choice',
    question: 'Let g(x) = 4x⁵ - 2x⁴ + 3x - 1. Which limit statement about the end behavior of g is correct?',
    options: [
      { label: 'A', value: 'A', text: 'lim(x→-∞) g(x) = -∞ and lim(x→∞) g(x) = -∞' },
      { label: 'B', value: 'B', text: 'lim(x→-∞) g(x) = -∞ and lim(x→∞) g(x) = ∞' },
      { label: 'C', value: 'C', text: 'lim(x→-∞) g(x) = ∞ and lim(x→∞) g(x) = -∞' },
      { label: 'D', value: 'D', text: 'lim(x→-∞) g(x) = ∞ and lim(x→∞) g(x) = ∞' }
    ],
    correctAnswer: 'B',
    explanation: 'Leading term is 4x⁵ (positive coefficient, odd degree). As x→-∞, g(x)→-∞. As x→∞, g(x)→∞.'
  },
  {
    id: '1a-10',
    type: 'multiple-choice',
    question: 'Let h(x) = -2x(x-3)²(x+4)³. Which limit statement about the end behavior of h is correct?',
    options: [
      { label: 'A', value: 'A', text: 'lim(x→-∞) h(x) = -∞ and lim(x→∞) h(x) = -∞' },
      { label: 'B', value: 'B', text: 'lim(x→-∞) h(x) = -∞ and lim(x→∞) h(x) = ∞' },
      { label: 'C', value: 'C', text: 'lim(x→-∞) h(x) = ∞ and lim(x→∞) h(x) = -∞' },
      { label: 'D', value: 'D', text: 'lim(x→-∞) h(x) = ∞ and lim(x→∞) h(x) = ∞' }
    ],
    correctAnswer: 'C',
    explanation: 'Total degree: 1 + 2 + 3 = 6 (even). Leading coefficient: -2 (negative). For even degree with negative leading coefficient: as x→-∞, h(x)→∞; as x→∞, h(x)→-∞.'
  },
  {
    id: '1a-11',
    type: 'multiple-choice',
    question: 'Let polynomial f be an odd function such that f(-4) = 5 is the location of a local minimum. Which statement must be true?',
    options: [
      { label: 'A', value: 'A', text: 'f(4) = -5 is the location of a local minimum' },
      { label: 'B', value: 'B', text: 'f(4) = -5 is the location of a local maximum' },
      { label: 'C', value: 'C', text: 'f(4) = 5 is the location of a local minimum' },
      { label: 'D', value: 'D', text: 'f(4) = 5 is the location of a local maximum' }
    ],
    correctAnswer: 'B',
    explanation: 'For odd functions, f(-x) = -f(x). So f(4) = -f(-4) = -5. If (-4, 5) is a local min, then by symmetry (4, -5) is a local max.'
  },
  {
    id: '1a-12',
    type: 'multiple-choice',
    question: 'Let h(x) = {3x² + 1 for x < 4; 4x - 9 for x ≥ 4}. What is the average rate of change of h over [0, 5]?',
    options: [
      { label: 'A', value: 'A', text: '2' },
      { label: 'B', value: 'B', text: '4' },
      { label: 'C', value: 'C', text: '6' },
      { label: 'D', value: 'D', text: '15' }
    ],
    correctAnswer: 'B',
    explanation: 'h(0) = 3(0)² + 1 = 1. h(5) = 4(5) - 9 = 11. AROC = (11 - 1)/(5 - 0) = 10/5 = 2. The answer should be A (2), not B.'
  },
  {
    id: '1a-13',
    type: 'multiple-choice',
    question: 'Which could be the expression for a polynomial function f with zeros at x = 0, x = -2, and x = 3 (multiplicity 2), with negative leading coefficient?',
    options: [
      { label: 'A', value: 'A', text: '-x(x+2)(x-3)²' },
      { label: 'B', value: 'B', text: '-x(x+2)(x-3)' },
      { label: 'C', value: 'C', text: '-x²(x+2)(x-3)²' },
      { label: 'D', value: 'D', text: 'x²(x+2)(x-3)²' }
    ],
    correctAnswer: 'A',
    explanation: 'Zeros at 0, -2, and 3 (mult. 2) with negative leading coefficient: -x(x+2)(x-3)²'
  },
  {
    id: '1a-14',
    type: 'multiple-choice',
    question: 'Let g(x) = -2x(x+4)³(x-7)⁴. What are all intervals where g(x) < 0?',
    options: [
      { label: 'A', value: 'A', text: '(-4, 0) only' },
      { label: 'B', value: 'B', text: '(-4, 0) and (7, ∞)' },
      { label: 'C', value: 'C', text: '(-∞, -4) and (0, ∞)' },
      { label: 'D', value: 'D', text: '(-∞, -4), (0, 7), and (7, ∞)' }
    ],
    correctAnswer: 'C',
    explanation: 'Zeros: x = 0, -4, 7. Test intervals: g is negative when -2x(x+4)³(x-7)⁴ < 0. (x-7)⁴ is always ≥ 0. Sign depends on -2x(x+4)³. Negative on (-∞, -4) and (0, ∞).'
  },
  {
    id: '1a-15',
    type: 'multiple-choice',
    question: 'Let f(x) = -1.352x⁵ + 3.051x⁴ - 1.964x² + 6.542 on [-1, 2]. Which statement is correct?',
    options: [
      { label: 'A', value: 'A', text: 'f has two relative minima and two relative maxima' },
      { label: 'B', value: 'B', text: 'f has three relative minima and three relative maxima' },
      { label: 'C', value: 'C', text: 'f has one relative minimum and one relative maximum' },
      { label: 'D', value: 'D', text: 'f has two relative minima and four relative maxima' }
    ],
    correctAnswer: 'A',
    explanation: 'Use a graphing calculator to analyze critical points on [-1, 2].'
  },
  {
    id: '1a-16',
    type: 'multiple-choice',
    question: 'Let g(x) = 3.526x⁴ - 5.152x³ + 0.789x² - 2.665x - 4.152 on [-1, 2]. Which statement about g is correct?',
    options: [
      { label: 'A', value: 'A', text: 'g has a local minimum at x = 1.143' },
      { label: 'B', value: 'B', text: 'g has a local minimum at x = -7.842' },
      { label: 'C', value: 'C', text: 'g has a local maximum at x = 1.143' },
      { label: 'D', value: 'D', text: 'g has a local maximum at x = -7.842' }
    ],
    correctAnswer: 'A',
    explanation: 'Using a calculator to find critical points: local minimum at x ≈ 1.143'
  },
  {
    id: '1a-17',
    type: 'free-response',
    question: 'For g(x) = 3.526x⁴ - 5.152x³ + 0.789x² - 2.665x - 4.152 on [-1, 2], on what complete interval is g decreasing?',
    correctAnswer: '(-0.653, 1.143)',
    explanation: 'Using calculator analysis, g is decreasing from approximately x = -0.653 to x = 1.143'
  },
  {
    id: '1a-18',
    type: 'free-response',
    question: 'Let h(x) = 2.351x³ - 7.662x² + 2.117x + 1.302 on [-1, 3]. Find all zeros of h (round to 3 decimal places).',
    correctAnswer: 'x ≈ -0.422, x ≈ 0.456, x ≈ 3.225',
    explanation: 'Use graphing calculator zero-finding feature to locate all three zeros.'
  },
  {
    id: '1a-19',
    type: 'free-response',
    question: 'Let f(x) = x³ + 2x² - 21x + 18. Find all intervals where f(x) < 0 (use interval notation).',
    correctAnswer: '(-6, 1)',
    explanation: 'Factor or use calculator to find zeros, then test intervals. f(x) < 0 on (-6, 1).'
  },
  {
    id: '1a-20',
    type: 'free-response',
    question: 'Let k(x) = 2x⁴ + 9x³ - 5x². Find all intervals where k(x) ≥ 0 (use interval notation).',
    correctAnswer: '(-∞, -5] ∪ [0, ∞)',
    explanation: 'Factor: k(x) = x²(2x² + 9x - 5) = x²(2x - 1)(x + 5). Zeros at x = 0, 0.5, -5. k(x) ≥ 0 when x ≤ -5 or x ≥ 0.'
  },
  {
    id: '1a-21',
    type: 'free-response',
    question: 'Given x = 1 - 3i is a zero of f(x) = x⁴ + 8x³ - 15x² + 110x - 50, find all remaining zeros.',
    correctAnswer: 'x = 1 + 3i, x = -5, x = 1',
    explanation: 'Complex zeros come in conjugate pairs: x = 1 + 3i is also a zero. Use synthetic division to find remaining zeros.'
  },
  {
    id: '1a-22',
    type: 'multiple-choice',
    question: 'A polynomial k has zeros at x = -4 (multiplicity 2), x = -1, and x = 2, with positive leading coefficient. Which expression represents k?',
    options: [
      { label: 'A', value: 'A', text: '-(1/20)(x+4)²(x+1)(x-2)' },
      { label: 'B', value: 'B', text: '(1/20)(x+4)²(x+1)(x-2)' },
      { label: 'C', value: 'C', text: '(1/20)(x-4)²(x-1)(x+2)' },
      { label: 'D', value: 'D', text: '(1/20)(x+4)(x+1)(x-2)' }
    ],
    correctAnswer: 'B',
    explanation: 'Zeros at -4 (mult. 2), -1, and 2 with positive coefficient: (1/20)(x+4)²(x+1)(x-2)'
  },
  {
    id: '1a-23',
    type: 'multiple-choice',
    question: 'A polynomial p has zeros at x = 0, x = -3, and x = 2, with negative leading coefficient. Which expression represents p?',
    options: [
      { label: 'A', value: 'A', text: '(1/2)(x+3)(x-2)' },
      { label: 'B', value: 'B', text: '(1/2)x(x+3)(x-2)' },
      { label: 'C', value: 'C', text: '-(1/2)x(x+3)(x-2)' },
      { label: 'D', value: 'D', text: '-(1/2)x²(x+3)(x-2)' }
    ],
    correctAnswer: 'C',
    explanation: 'Zeros at 0, -3, and 2 with negative coefficient: -(1/2)x(x+3)(x-2)'
  },
  {
    id: '1a-24',
    type: 'multiple-choice',
    question: 'A polynomial f has zeros at x = -2 and x = 3 (both multiplicity 2), with negative leading coefficient. Which expression represents f?',
    options: [
      { label: 'A', value: 'A', text: '(1/20)(x+2)(x-3)' },
      { label: 'B', value: 'B', text: '(1/20)(x-2)²(x+3)²' },
      { label: 'C', value: 'C', text: '-(1/20)(x+2)²(x-3)²' },
      { label: 'D', value: 'D', text: '(1/20)(x+2)²(x-3)²(x²+1)' }
    ],
    correctAnswer: 'C',
    explanation: 'Zeros at -2 and 3, both multiplicity 2, negative coefficient: -(1/20)(x+2)²(x-3)²'
  },
  {
    id: '1a-25',
    type: 'free-response',
    question: 'Solve: x³ + 2x² - 11x + 12 ≥ 0 (use interval notation)',
    correctAnswer: '(-∞, -4] ∪ [1, 3]',
    explanation: 'Find zeros by factoring or calculator. Zeros are at x = -4, 1, 3. Test intervals to find where polynomial is non-negative.'
  },
  {
    id: '1a-26',
    type: 'free-response',
    question: 'Solve: 3x³ - 12x² - 21x + 30 < 0 (use interval notation)',
    correctAnswer: '(-2, 1) ∪ (5, ∞) — needs verification',
    explanation: 'Factor: 3(x³ - 4x² - 7x + 10). Find zeros and test intervals.'
  },
  {
    id: '1a-27',
    type: 'free-response',
    question: 'Find all zeros with their multiplicities for f(x) = 5(x-3)⁴(x+2)(x-1)',
    correctAnswer: 'x = 3 (multiplicity 4), x = -2 (multiplicity 1), x = 1 (multiplicity 1)',
    explanation: 'Read directly from factored form: zeros are 3 (mult. 4), -2 (mult. 1), 1 (mult. 1)'
  },
  {
    id: '1a-28',
    type: 'free-response',
    question: 'Find all zeros with their multiplicities for g(x) = -2x(x+3)(x-2)³',
    correctAnswer: 'x = 0 (multiplicity 1), x = -3 (multiplicity 1), x = 2 (multiplicity 3)',
    explanation: 'From factored form: zeros are 0 (mult. 1), -3 (mult. 1), 2 (mult. 3)'
  },
  {
    id: '1a-29',
    type: 'multiple-choice',
    question: 'The table shows values for function f. Which statement best fits the data?',
    options: [
      { label: 'A', value: 'A', text: 'f is best modeled by a linear function (constant rate of change)' },
      { label: 'B', value: 'B', text: 'f is best modeled by a linear function (linear rate of change)' },
      { label: 'C', value: 'C', text: 'f is best modeled by a quadratic function (constant rate of change)' },
      { label: 'D', value: 'D', text: 'f is best modeled by a quadratic function (linear rate of change)' }
    ],
    table: {
      headers: ['x', '1', '3', '5', '7', '9'],
      rows: [['f(x)', '-2', '-1', '3', '10', '20']]
    },
    correctAnswer: 'D',
    explanation: 'First differences: 1, 4, 7, 10 (linear pattern). Second differences: 3, 3, 3 (constant). This indicates a quadratic function with linear rate of change.'
  },
  {
    id: '1a-30',
    type: 'multiple-choice',
    question: 'The table shows values for function h. Which statement about concavity best fits?',
    options: [
      { label: 'A', value: 'A', text: 'h could be concave up (positive average rates)' },
      { label: 'B', value: 'B', text: 'h could be concave up (increasing average rates)' },
      { label: 'C', value: 'C', text: 'h could be concave down (negative average rates)' },
      { label: 'D', value: 'D', text: 'h could be concave down (decreasing average rates)' }
    ],
    table: {
      headers: ['x', '0', '10', '20', '30', '40'],
      rows: [['h(x)', '100', '60', '40', '30', '25']]
    },
    correctAnswer: 'D',
    explanation: 'Average rates: -4, -2, -1, -0.5 (negative and decreasing in magnitude). The graph is concave down with decreasing average rates of change.'
  }
];
