import { Question } from '@/types/quiz';

export const reactionsQuestions: Question[] = [
  {
    id: 'reactions-1',
    type: 'short-answer',
    question: 'List at least four differences between endothermic and exothermic reactions.',
    correctAnswer: 'Endothermic absorbs heat (ΔH > 0), cools surroundings, products higher in energy than reactants, includes melting/evaporation; Exothermic releases heat (ΔH < 0), warms surroundings, products lower in energy, includes combustion/freezing.',
    explanation: 'Compare heat flow (absorbs vs releases), surroundings’ temperature change, relative energy levels on diagram, and typical processes.'
  },
  {
    id: 'reactions-2',
    type: 'short-answer',
    question: 'List at least three facts about catalysts.',
    correctAnswer: 'Catalysts lower activation energy, speed up reaction by providing alternative pathway, are not consumed and do not change ΔH or equilibrium constant.',
    explanation: 'Catalysts affect the reaction rate, not thermodynamics; they remain unchanged after reaction and only alter the kinetic path.'
  },
  {
    id: 'reactions-3',
    type: 'short-answer',
    question: 'Identify the type of each given reaction and balance the equation.',
    correctAnswer: 'Types: synthesis, decomposition, single replacement, double replacement, combustion, redox. Provide balanced equations for each as given on worksheet.',
    explanation: 'Classify each reaction by pattern and apply atom conservation to write balanced equations.'
  },
  {
    id: 'reactions-4',
    type: 'short-answer',
    question: 'For each factor, state whether it increases or decreases the rate of reaction: dilute the nitric acid; grind the MgO; heat it up; add more MgO; add more HNO3; cool it down; add a catalyst; dissolve the MgO.',
    correctAnswer: 'Dilute acid – decrease; grind MgO – increase; heat up – increase; add more MgO – increase (if acid is in excess); add more HNO3 – increase; cool down – decrease; add catalyst – increase; dissolve MgO – increase.',
    explanation: 'Rate increases with higher concentration, temperature, surface area, or catalyst; decreases with dilution or cooling.'
  },
  {
    id: 'reactions-5',
    type: 'short-answer',
    question: 'For the reaction (ΔH = –42 kJ), state whether each change shifts equilibrium left or right: add NO₂; add O₂; add N₂O₅; decrease volume; decrease pressure; decrease temperature; increase volume; increase temperature; increase pressure; remove NO₂; remove N₂O₅; remove O₂.',
    correctAnswer: 'Adding a reactant shifts right, adding a product shifts left. Exothermic reaction so lowering temperature shifts right, raising shifts left. Increasing pressure or lowering volume shifts to side with fewer gas moles; opposite for decreasing pressure or increasing volume. Removing a substance shifts toward that substance.',
    explanation: 'Use Le Chatelier’s principle: system shifts to oppose change—toward side that consumes added species or replaces removed species; temperature acts as reactant/product in exothermic/endothermic reactions.'
  },
  {
    id: 'reactions-6',
    type: 'short-answer',
    question: 'Using the provided energy diagram, determine: endothermic or exothermic, PE of reactants, PE of products, PE of activated complex, forward ΔH, reverse ΔH, forward Ea, reverse Ea.',
    correctAnswer: 'Read values directly from diagram; if products above reactants → endothermic (ΔH > 0), otherwise exothermic (ΔH < 0); use height differences for ΔH and activation energies.',
    explanation: 'Identify whether diagram’s products lie above/below reactants and subtract energy levels accordingly.'
  },
  {
    id: 'reactions-7',
    type: 'short-answer',
    question: 'For each descriptive scenario (a–f), write the full balanced molecular equation with states, then write the complete ionic and net ionic equations.',
    correctAnswer: 'Provide molecular equation with correct (s), (aq), (l), (g); break strong electrolytes into ions for complete ionic; remove spectator ions for net ionic.',
    explanation: 'Translate word description to chemical equation, balance atoms, assign correct states, then separate and simplify ions.'
  },
  {
    id: 'reactions-8',
    type: 'short-answer',
    question: 'Predict products, balance, and fill in all states for each reaction. If no reaction occurs, write “No Reaction.” (activity series questions)',
    correctAnswer: 'Use reactivity series: more active element displaces less active from compound. Provide balanced equations or state “No Reaction.”',
    explanation: 'Compare relative reactivity; if displacement is possible, write products and balance, otherwise note no reaction.'
  },
  {
    id: 'reactions-9',
    type: 'short-answer',
    question: 'A 121.8 g piece of brass at 152 °C is dropped into 138 g water at 23.7 °C in an insulated container. Brass specific heat = 0.385 J/g·°C. Find final temperature.',
    correctAnswer: '≈33.34 °C',
    explanation: 'Heat lost by brass equals heat gained by water: m·c·ΔT_brass = m·c·ΔT_water → solve for final T.'
  },
  {
    id: 'reactions-10',
    type: 'short-answer',
    question: 'A 2.50 g sample of zinc (c = 0.390 J/g·°C) is heated then placed in 65.0 g water; water warms from 22.0 °C to 22.50 °C. Find initial temperature of zinc.',
    correctAnswer: '≈161.97 °C',
    explanation: 'Heat lost by zinc equals heat gained by water: m·c·(T_initial – 22.50 °C) = m_water·c_water·(22.50 – 22.0 °C).'
  },
  {
    id: 'reactions-11',
    type: 'short-answer',
    question: 'Calculate total heat to change 65.1 g methanol from –102.3 °C to 98 °C given: MP = –97.6 °C, BP = 64.7 °C, Csolid = 3.28 J/g·°C, Cliquid = 2.53 J/g·°C, Cgas = 3.62 J/g·°C, ΔHfus = 99 J/g, ΔHvap = 1165 J/g.',
    correctAnswer: '≈117.9 kJ',
    explanation: 'Add sensible heats for warming each phase plus latent heats for melting and vaporization.'
  },
  {
    id: 'reactions-12',
    type: 'short-answer',
    question: 'Use bond energy data to calculate ΔH for combustion of ethanol: C₂H₅OH + O₂ → CO₂ + H₂O.',
    correctAnswer: '≈ –1367 kJ per mol ethanol',
    explanation: 'ΔH = Σ(bonds broken) – Σ(bonds formed); combustion of ethanol is strongly exothermic.'
  },
  {
    id: 'reactions-13',
    type: 'short-answer',
    question: '8.00 g of canola oil burned under a can with 150.0 g water (c = 4.184 J/g·°C) in insulated container. Water warmed from 22.7 °C to 53.8 °C; mass of oil after burn 6.50 g. Find experimental enthalpy of combustion in kJ/g.',
    correctAnswer: '≈ –13.01 kJ/g',
    explanation: 'Heat gained by water: 150 × 4.184 × (53.8 – 22.7) = 19,518 J; mass burned = 1.50 g → 19,518 J ÷ 1.50 g ≈ 13.01 kJ/g (exothermic so negative).'
  }
];
