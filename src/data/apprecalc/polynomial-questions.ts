import { Question } from '@/types/quiz';

export const polynomialQuestions: Question[] = [
  {
    "id": "polynomial-52",
    "type": "free-response",
    "question": "The graph of the polynomial function f is shown above, where −5 ≤ x ≤ 5. The function f has local extrema at x = −2 and x = 2, and the graph of f has a point of inflection at x = 0. 1a) On what intervals is f increasing?",
    "image": "/images/apprecalc/polynomial-graph-extrema1.png",
    "correctAnswer": "1a) (-5, -2) ∪ (2, 5)",
    "explanation": "1a) The function f is increasing where the graph has a positive slope. From the graph, this occurs on the intervals (-5, -2) and (2, 5), which are before the local maximum at x = -2 and after the local minimum at x = 2."
  },
  {
    "id": "polynomial-53",
    "type": "free-response",
    "question": "The graph of the polynomial function f is shown above, where −5 ≤ x ≤ 5. The function f has local extrema at x = −2 and x = 2, and the graph of f has a point of inflection at x = 0. 1b) On what intervals is the graph of f concave down?",
    "image": "/images/apprecalc/polynomial-graph-extrema1.png",
    "correctAnswer": "1b) (-5, 0)",
    "explanation": "1b) The graph of f is concave down where the curve opens downward. From the graph and the given information that there is a point of inflection at x = 0, the function is concave down on the interval (-5, 0)."
  },
  {
    "id": "polynomial-54",
    "type": "free-response",
    "question": "the graph of 𝑔 is shown above, where −5 ≤ 𝑥 ≤ 4. The graph of 𝑔 has points of inflection at 𝑥 = −1 and 𝑥 = 1. 1a) On what intervals is g decreasing?",
    "image": "/images/apprecalc/polynomial-graph-extrema2.png",
    "correctAnswer": "1a) (-5, -3) U (0, 2)",
    "explanation": "Think about it."
  },
  {
    "id": "polynomial-55",
    "type": "free-response",
    "question": "the graph of 𝑔 is shown above, where −5 ≤ 𝑥 ≤ 4. The graph of 𝑔 has points of inflection at 𝑥 = −1 and 𝑥 = 1. 1b) On what intervals is the graph of g concave up?",
    "image": "/images/apprecalc/polynomial-graph-extrema2.png",
    "correctAnswer": "1b) (-5, -1) U (1, 4)",
    "explanation": "Think about it."
  },
];
