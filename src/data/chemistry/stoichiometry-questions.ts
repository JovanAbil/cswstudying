import { Question } from '@/types/quiz';

// Topic: stoichiometry
// Math Enabled: true
// Questions: 11

export const stoichiometryQuestions: Question[] = [
  {
    id: "stoichiometry-1",
    type: "free-response",
    question: "What is the percent yield equation?",
    correctAnswer: "(Actual yield/Theoretical yield) * 100% = percent yield",
  },
  {
    id: "stoichiometry-2",
    type: "free-response",
    question: "What are the steps of percent yield.",
    correctAnswer: "",
    listAnswers: ["Follow all limiting reactants steps as before","Calculate mass of products in question","Label that 'theoretical yield'","Read question again for actual yield","Calculate percent yield"],
  },
  {
    id: "stoichiometry-3",
    type: "free-response",
    question: "Can percent yield be above 100%?",
    correctAnswer: "Yes",
  },
  {
    id: "stoichiometry-4",
    type: "free-response",
    question: "Which percent yield is good, above or below?",
    correctAnswer: "Neither",
  },
  {
    id: "stoichiometry-5",
    type: "free-response",
    question: "Calculate the number of moles of NaOH that are needed to react with 500.0 g of H$_{2}$SO$_{4}$ according to the following equation.\n\nH$_{2}$SO$_{4}$ + 2NaOH -> Na$_{2}$SO$_{4}$ + 2H$_{2}$O",
    correctAnswer: "10.196 moles of NaOH",
  },
  {
    id: "stoichiometry-6",
    type: "free-response",
    question: "Calculate the mass of NH$_{3}$ that can be produced from the reaction of 125 g of NCl$_{3}$ according to the following equation.\n\nNCl$_{3}$ + 3H$_{2}$O -> NH$_{3}$ + 3HOCl",
    correctAnswer: "17.7 grams of NH$_{3}$",
  },
  {
    id: "stoichiometry-7",
    type: "free-response",
    question: "How many grams of P$_{4}$O$_{10}$ can be produced from the reaction of 52.9 g of KClO$_{3}$ with excess phosphorous as shown below:\nKClO$_{3}$(s) + P$_{4}$ (s) -> P$_{4}$O$_{10}$(s) + KCl(s)",
    correctAnswer: "36.8 grams of P$_{4}$O$_{10}$",
  },
  {
    id: "stoichiometry-8",
    type: "parts",
    question: "When 50.0 g of MgCO$_{3}$ react completely with H$_{3}$PO$_{4}$ as shown below, 15.8 g of CO$_{2}$ is produced. \n2H$_{3}$PO$_{4}$ + 3MgCO$_{3}$ -> Mg$_{3}$(PO$_{4}$)$_{2}$ + 3CO$_{2}$ + 3H$_{2}$O",
    parts: [{"label":"a","type":"free-response","question":"Determine the theoretical yield for this reaction.","correctAnswer":"26.1 grams"},{"label":"b","type":"free-response","question":"Determine the percent yield for this reaction.","correctAnswer":"60.5% "}],
  },
  {
    id: "stoichiometry-9",
    type: "free-response",
    question: "How many grams of sodium sulfate will be formed if you start with 200 grams of sodium hydroxide and you have an excess of sulfuric acid?\n2NaOH + H$_{2}$SO$_{4}$ -> 2H$_{2}$O + Na$_{2}$SO$_{4}$",
    correctAnswer: "355.19 grams of sodium sulfate",
  },
  {
    id: "stoichiometry-10",
    type: "free-response",
    question: "How many grams of lithium nitrate will be needed to make 250 grams of lithium sulfate, assuming that you have an adequate amount of lead (IV) sulfate to do the reaction?\nPb(SO$_{4}$)$_{2}$ + 4LiNO$_{3}$ -> Pb(NO$_{3}$)$_{4}$ + 2Li$_{2}$SO$_{4}$",
    correctAnswer: "313.58 grams of lithium nitrate",
  },
  {
    id: "stoichiometry-11",
    type: "parts",
    question: "Acetylene gas C$_{2}$H$_{2}$ undergoes combustion to form carbon dioxide and water when it is used in the oxyacetylene torch for welding. Balance the reaction and answer the following questions.\n\nC$_{2}$H$_{2}$(g) + O$_{2}$(g) -> CO$_{2}$(g) + H$_{2}$O(g)",
    parts: [{"label":"a","type":"free-response","question":"How many grams of water can form if 113 grams of acetylene is burned?","correctAnswer":"78.11 grams of water"},{"label":"b","type":"free-response","question":"How many grams of acetylene react if 1.10 mol of CO$_{2}$ are produced?","correctAnswer":"14.32 grams of acetylene reacts."}],
  },
];
