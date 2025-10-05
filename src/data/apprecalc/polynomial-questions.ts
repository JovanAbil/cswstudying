import { Question } from '@/types/quiz';

export const polynomialQuestions: Question[] = [
  
  {
    "id": "polynomial-56",
    "type": "multiple-choice",
    "question": "The function g is decreasing at a decreasing rate. Which of the following could be the graph of g?",
    "options": [
      { "label": "A", "value": "A", "text": "", "image": "/images/apprecalc/polynomial6.png" },
      { "label": "B", "value": "B", "text": "", "image": "/images/apprecalc/polynomial7.png" },
      { "label": "C", "value": "C", "text": "", "image": "/images/apprecalc/polynomial8.png" },
      { "label": "D", "value": "D", "text": "", "image": "/images/apprecalc/polynomial9.png" }
    ],
    "correctAnswer": "D",
    "explanation": "A function that is decreasing at a decreasing rate has a negative first derivative (decreasing) and a positive second derivative (concave up). This means the graph slopes downward but curves upward."
  },
];
