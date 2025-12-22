import { Question } from '@/types/quiz';

export const logQuestions: Question[] = [
  {
    id: "log-1",
    type: "free-response",
    question: "Simplify 5log(2)+3log(x)+2log(y)",
    correctAnswer: "log(32(x^3)(y^2))",
    explanation: "."
  },
  {
    id: "log-2",
    type: "free-response",
    question: "Simplify 2log(x)+ (2/3)log(y)-(1/4)log(z)",
    correctAnswer: "log((x^2(y^(2/3)))/(z^(1/4)))",
    explanation: "."
  },
  {
    id: "log-3",
    type: "free-response",
    question: "Simplify log(3)-log(x)-log(5)",
    correctAnswer: "log(3/(5x))",
    explanation: "."
  },
  {
    id: "log-4",
    type: "free-response",
    question: "Simplify (1/2)log_4(36)+3log_4(x)",
    correctAnswer: "log_4(6x^3)",
    explanation: "."
  },
  {
    id: "log-5",
    type: "free-response",
    question: "Simplify 5ln(x)+2ln(y)-ln(w)",
    correctAnswer: "ln((x^5(y^2))/w)",
    explanation: "."
  },
  {
    id: "log-6",
    type: "free-response",
    question: "Simplify xlog(2)-3log(x)-(1/2)log(y)",
    correctAnswer: "log((2^x(sqrt(y)))/(x^3(y)))",
    explanation: "."
  },
  {
    id: "log-7",
    type: "free-response",
    question: "Expand log_5((3y^4)/(z^2))",
    correctAnswer: "log_5(3) + 4log_5(y) - 2log_5(z)",
    explanation: "."
  },
  {
    id: "log-8",
    type: "free-response",
    question: "Expand ln((5e^2)/(sqrt(x)))",
    correctAnswer: "2 + ln(5) - (1/2)ln(x)",
    explanation: "."
  },
  {
    id: "log-9",
    type: "free-response",
    question: "Convert 9^(x-2) = 13 to logarithmic form",
    correctAnswer: "log_9(13) = x - 2",
    explanation: "."
  },
  {
    id: "log-10",
    type: "free-response",
    question: "Convert log_3(e) = 8x",
    correctAnswer: "3^(8x) = e",
    explanation: "."
  },
  {
    id: "log-11",
    type: "free-response",
    question: "log_2(16) = ",
    correctAnswer: "4",
    explanation: "."
  },
  {
    id: "log-12",
    type: "free-response",
    question: "log_100(10) = ",
    correctAnswer: "1/2",
    explanation: "."
  },
  {
    id: "log-13",
    type: "free-response",
    question: "log(10) = ",
    correctAnswer: "1",
    explanation: "."
  },
  {
    id: "log-14",
    type: "free-response",
    question: "ln(e^6) = ",
    correctAnswer: "6",
    explanation: "."
  },
  {
    id: "log-15",
    type: "free-response",
    question: "log_8(2) = ",
    correctAnswer: "1/3",
    explanation: "."
  },
  {
    id: "log-16",
    type: "free-response",
    question: "log_5(1/25) = ",
    correctAnswer: "-2",
    explanation: "."
  },
  {
    id: "log-17",
    type: "free-response",
    question: "log_36(1/6) = ",
    correctAnswer: "-1/2",
    explanation: "."
  },
  {
    id: "log-18",
    type: "free-response",
    question: "log_8(1) = ",
    correctAnswer: "0",
    explanation: "."
  },
  {
    id: "log-19",
    type: "free-response",
    question: "What is the domain g(x) = -3log_2(x+4)+1 in interval notation.",
    correctAnswer: "(-4, ∞)",
    explanation: "."
  },
  {
    id: "log-20",
    type: "free-response",
    question: "What is the domain h(x) = log_2(-3(x+1)) in interval notation.",
    correctAnswer: "(-∞, -1)",
    explanation: "."
  },
  {
    id: "log-21",
    type: "free-response",
    question: "The logarithmic function h is defined by h(x) = 3log_4(x), what is the concavity and it is increasing or decreasing?",
    correctAnswer: "The function of h is increasing and the graph of h is concave down",
    explanation: "."
  },
  {
    id: "log-22",
    type: "free-response",
    question: "The logarithmic function h is defined by h(x) = -2log_0.5(x), what is the concavity and it is increasing or decreasing?",
    correctAnswer: "The function h is increasing and the graph of h is concave up.",
    explanation: "."
  },
  {
    id: "log-23",
    type: "multiple-choice",
    question: "Given the limit statements: lim_x-->0+ f(x) = ∞ and lim_x-->∞ f(x) = -∞",
    options: [
      { "label": "A", "value": "A", "text": "f(x) = 2log_4(x)" },
      { "label": "B", "value": "B", "text": "f(x) = -2log_4(x)" },
      { "label": "C", "value": "C", "text": "f(x) = (1/2)log_4(x)" },
      { "label": "D", "value": "D", "text": "f(x) = (1/2)^x" }
    ],
    correctAnswer: "B",
    explanation: "."
  },
  {
    id: "log-24",
    type: "free-response",
    question: "What is the limit statements for the function l(x) = 5log(x-3)",
    correctAnswer: "lim_x-->3+ l(x) = -∞, lim_x-->∞ l(x) = ∞",
    explanation: "."
  },
  {
    id: "log-25",
    type: "free-response",
    //image: "",
    question: "Values of the function h are shown in the table above at selected values of x. Use ELOVI to explain the inputs and outputs relation.",
    correctAnswer: "h is logarithmic because over equal-length output value intervals, inputs change proportionally",
    explanation: "."
  },
  {
    id: "log-26",
    type: "free-response",
    question: "Using the log change of base rule, what is log_12(7).",
    correctAnswer: "log(7)/log(12)",
    explanation: "."
  },
  {
    id: "log-27",
    type: "multiple-choice",
    question: "Which of the following statements is true about the function f(x) = log_5(125x)",
    options: [
      { "label": "A", "value": "A", "text": "f(x) is a vertical dilation of log_5(x) by a factor of 1/125" },
      { "label": "B", "value": "B", "text": "f(x) is a horizontal dilation of log_5(x) by a factor of 125" },
      { "label": "C", "value": "C", "text": "f(x) is a vertical translation of log_5(x) by 3 units" },
      { "label": "D", "value": "D", "text": "f(x) is a vertical translation of log_5(x) by -3 units" }
    ],
    correctAnswer: "B",
    explanation: "."
  },
  {
    id: "log-28",
    type: "multiple-choice",
    //image: "",
    question: "The table gives values for the function f at selected values of x. If y = f(x) is graphed on a semi-log plot with the y-axis logarithmically scaled, the resulting graph would appear.",
    options: [
      { "label": "A", "value": "A", "text": "Increasing and linear" },
      { "label": "B", "value": "B", "text": "Decreasing and linear" },
      { "label": "C", "value": "C", "text": "Increasing and exponential" },
      { "label": "D", "value": "D", "text": "Decreasing and exponential" }
    ],
    correctAnswer: "A",
    explanation: "."
  },
  {
    id: "log-29",
    type: "free-response",
    question: "Convert y = e^(x-1) into logarithmic form ",
    correctAnswer: "ln(y) + 1 = x",
    explanation: "."
  },
  {
    id: "log-30",
    type: "free-response",
    question: "Convert log_16(y) = 1/2 into exponential form",
    correctAnswer: "y = 4",
    explanation: "."
  },
  {
    id: "log-31",
    type: "free-response",
    question: "Evaluate log_6(36)",
    correctAnswer: "1/2",
    explanation: "."
  },
  {
    id: "log-32",
    type: "free-response",
    question: "Evaluate ln(1/(e^5))",
    correctAnswer: "-5",
    explanation: "."
  },
  {
    id: "log-33",
    type: "free-response",
    question: "log_6(sqrt(6))",
    correctAnswer: "1/2",
    explanation: "."
  },
  {
    id: "log-34",
    type: "free-response",
    //image: "",
    question: "What function is this, Logarithmic, Exponential, or Neither?",
    correctAnswer: "Neither",
    explanation: "."
  },
  {
    id: "log-35",
    type: "free-response",
    //image: "",
    question: "What function is this, Logarithmic, Exponential, or Neither?",
    correctAnswer: "Logarithmic",
    explanation: "."
  },
  {
    id: "log-36",
    type: "free-response",
    question: "What is the end behavior of f(x) = 3log_2(x)",
    correctAnswer: "lim_x-->0+ g(x) = -∞, lim_x-->∞ g(x) = ∞",
    explanation: "."
  },
  {
    id: "log-37",
    type: "free-response",
    question: "What is the end behavior of g(x) = -2log(x)",
    correctAnswer: "lim_x-->0+ g(x) = ∞, lim_x-->∞ g(x) = -∞",
    explanation: "."
  },
  {
    id: "log-38",
    type: "free-response",
    question: "What is the end behavior of h(x) = (3/4)log_pi(x)",
    correctAnswer: "lim_x-->0+ h(x) = -∞, lim_x-->∞ h(x) = ∞",
    explanation: "."
  },
  {
    id: "log-39",
    type: "free-response",
    //image: "",
    question: "Find the value k",
    correctAnswer: "k = 4",
    explanation: "."
  },
  {
    id: "log-40",
    type: "free-response",
    //image: "",
    question: "Find the value k",
    correctAnswer: "k = 1/3",
    explanation: "."
  },
  {
    id: "log-41",
    type: "free-response",
    question: "Solve, (1/5)^(5x+7) = (25)^x",
    correctAnswer: "x = -1",
    explanation: "."
  },
  {
    id: "log-42",
    type: "free-response",
    question: "Solve, 14e^(x-3) + 8 = 12",
    correctAnswer: "x = ln(2/7) + 3",
    explanation: "."
  },
  {
    id: "log-43",
    type: "free-response",
    question: "Solve, 2log_3(x+3) + 4 = 10",
    correctAnswer: "x = 24",
    explanation: "."
  },
  {
    id: "log-44",
    type: "free-response",
    question: "Solve, (ln(2-x))/5 = 1",
    correctAnswer: "x = 2 - e^5",
    explanation: "."
  },
  {
    id: "log-45",
    type: "free-response",
    question: "Solve, ln(x+1) - ln(3x-5) = ln(7)",
    correctAnswer: "x = 9/5",
    explanation: "."
  },
  {
    id: "log-46",
    type: "free-response",
    question: "Solve, log_3(x+2) + log_3(x-3) = log_3(14)",
    correctAnswer: "x = 5",
    explanation: "."
  },
  {
    id: "log-47",
    type: "free-response",
    question: "Find the inverse of 3^(x-2) + 1",
    correctAnswer: "h^-1(x) = log_3(x-1) + 2",
    explanation: "."
  },
  {
    id: "log-48",
    type: "free-response",
    question: "Find the inverse of j(x) = 3log_2(x+1) - 2",
    correctAnswer: "j^-1(x) = 2^((x+2)/3) - 1",
    explanation: "."
  },
  {
    id: "log-49",
    type: "free-response",
    question: "Let of k(x) = ((e^x)^4)/(e^(1/3)). Solve k(x) = e^(1/2) for all values of x in the domain of k",
    correctAnswer: "x = 5/24",
    explanation: "."
  },
  {
    id: "log-50",
    type: "free-response",
    question: "Let m(x) = log_6(x) + log_6(x-9). Solve m(x) = 2 for all values of x in the domain of m",
    correctAnswer: "x = 12",
    explanation: "."
  },
  {
    id: "log-51",
    type: "free-response",
    question: "The equation A = A_0(1/2)^(t/3) represents the radioactive sample of a substance whose half-life is three years. If the initial mass of the substance 67 grams, how long will it take for the sample to reach 7 grams?",
    correctAnswer: "It would take 9.776202805 years for the sample to reach 7 grams from 67 grams.",
    explanation: "."
  },
  {
    id: "log-52",
    type: "free-response",
    question: "Let f(x) = log_3(x^2+x+2) - log_3(x+6). What are all the values of x for which f(x) < 0?",
    correctAnswer: "(-2, 2)",
    explanation: "."
  },
  {
    id: "log-53",
    type: "free-response",
    question: "Let f(x) = log(x^2-4x+7) - log(x+3). What are all the values of x for which f(x) > 0?",
    correctAnswer: "(-3, 1) U (4, ∞)",
    explanation: "."
  },
  {
    id: "log-54",
    type: "free-response",
    question: "(Calculator) The formula A = Pe^(rt) represents the amount of money invested (P) in an account that accrues interest (r) compounded continuously over t years. If Mr. Damiani invests $250,000 in his retirement that earns him 8.5% interest, how long will it take him to earn at least $1,000,000?",
    correctAnswer: "It would take Mr. Damiani 1.27769065 years to earn $1,000,000",
    explanation: "."
  },
  {
    id: "log-55",
    type: "free-response",
    question: "(Calculator) Find all values of x that satisfy log_3(x+3) > 3^x - 2",
    correctAnswer: "(-2.88363, 1.08127)",
    explanation: "."
  },
];
