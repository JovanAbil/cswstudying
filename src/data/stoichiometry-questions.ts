import { Question } from '@/types/quiz';

export const stoichiometryQuestions: Question[] = [
  {
  id: 'stoichiometry-1',
  type: 'short-answer',
  question: 'How many moles of Fe₂O₃ can be produced from 6.3 moles of O₂?  (4 Fe + 3 O₂ → 2 Fe₂O₃)',
  correctAnswer: '4.20 mol Fe₂O₃',
  explanation: 'Using the ratio 3 O₂ → 2 Fe₂O₃, (6.3 mol O₂ × 2 / 3) = 4.20 mol Fe₂O₃.'
},
{
  id: 'stoichiometry-2',
  type: 'short-answer',
  question: 'If 7.2 moles of butane combust, how many moles of CO₂ are produced?  (2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O)',
  correctAnswer: '28.8 mol CO₂',
  explanation: 'From the ratio 2 C₄H₁₀ → 8 CO₂, (7.2 × 8 / 2) = 28.8 mol CO₂.'
},
{
  id: 'stoichiometry-3',
  type: 'short-answer',
  question: 'If 4.35 moles of Mg react with excess N₂, how many grams of Mg₃N₂ are produced?  (3 Mg + N₂ → Mg₃N₂)',
  correctAnswer: '146.3 g Mg₃N₂ (≈1.45 mol)',
  explanation: '(4.35 mol Mg × 1 mol Mg₃N₂ / 3 mol Mg) = 1.45 mol Mg₃N₂; × 100.9 g/mol = 146.3 g Mg₃N₂.'
},
{
  id: 'stoichiometry-4',
  type: 'short-answer',
  question: 'How many moles of O₂ are required to completely combust 175.0 g of hexane?  (2 C₆H₁₄ + 19 O₂ → 12 CO₂ + 14 H₂O)',
  correctAnswer: '19.29 mol O₂',
  explanation: '175 g C₆H₁₄ ÷ 86.18 g/mol = 2.03 mol; (2.03 × 19 / 2) = 19.29 mol O₂.'
},
{
  id: 'stoichiometry-5',
  type: 'short-answer',
  question: 'How many grams of O₂ are produced from the complete decomposition of 245.0 g of KClO₃?  (2 KClO₃ → 2 KCl + 3 O₂)',
  correctAnswer: '95.96 g O₂',
  explanation: '245 g ÷ 122.55 g/mol = 2.00 mol KClO₃; (2.00 × 3 / 2) = 3.00 mol O₂; × 32.00 g/mol = 95.96 g.'
},
{
  id: 'stoichiometry-6',
  type: 'short-answer',
  question: 'If 84.0 g of propane combust, how many grams of CO₂ are produced?  (C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O)',
  correctAnswer: '251.5 g CO₂',
  explanation: '84.0 g ÷ 44.09 g/mol = 1.91 mol propane; (1.91 × 3) = 5.73 mol CO₂; × 44.01 g/mol = 251.5 g CO₂.'
},
{
  id: 'stoichiometry-7',
  type: 'short-answer',
  question: 'How many liters of N₂O are produced at STP from the decomposition of 72.5 g of NH₄NO₃?  (NH₄NO₃ → N₂O + 2 H₂O)',
  correctAnswer: '20.30 L N₂O (at STP)',
  explanation: '72.5 g ÷ 80.04 g/mol = 0.906 mol NH₄NO₃; 1:1 ratio → 0.906 mol N₂O; × 22.4 L/mol = 20.30 L.'
},
{
  id: 'stoichiometry-8',
  type: 'short-answer',
  question: 'If 67.2 L of NH₃ reacted at STP, how many grams of water are produced?  (4 NH₃ + 3 O₂ → 2 N₂ + 6 H₂O)',
  correctAnswer: '81.0 g H₂O',
  explanation: '67.2 L ÷ 22.4 L/mol = 3.00 mol NH₃; (3 × 6 / 4) = 4.50 mol H₂O; × 18.02 g/mol = 81.0 g.'
},
{
  id: 'stoichiometry-9',
  type: 'short-answer',
  question: 'An airbag inflates with 36.0 L of N₂ gas at 1.10 atm and 298 K. What mass of NaN₃ was used?  (2 NaN₃ → 2 Na + 3 N₂)',
  correctAnswer: '70.2 g NaN₃ (≈1.0796 mol)',
  explanation: 'Use PV = nRT → n(N₂) ≈ 1.0796 mol; (1.0796 × 2 / 3) = 0.7197 mol NaN₃; × 97.0 g/mol ≈ 70.2 g.'
},
{
  id: 'stoichiometry-10',
  type: 'short-answer',
  question: 'If 1.25 g of Mg reacts with excess HCl, what volume of H₂ gas is produced at 120.4 kPa and 35°C?  (Mg + 2 HCl → MgCl₂ + H₂)',
  correctAnswer: '1.09 L H₂ (≈1090 mL)',
  explanation: '1.25 g ÷ 24.31 g/mol = 0.0514 mol Mg → 0.0514 mol H₂; V = nRT/P ≈ 1.09 L at 120.4 kPa and 308 K.'
},
{
  id: 'stoichiometry-11',
  type: 'short-answer',
  question: 'How many milliliters of 0.350 M NaOH are required to completely neutralize 75.0 mL of 0.275 M H₂SO₄?  (H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O)',
  correctAnswer: '118 mL NaOH (≈117.9 mL)',
  explanation: 'Moles H₂SO₄ = 0.0750 L × 0.275 M = 0.02063 mol; needs 0.04126 mol NaOH; V = 0.04126 ÷ 0.350 = 0.118 L.'
},
{
  id: 'stoichiometry-12',
  type: 'short-answer',
  question: 'What mass of PbI₂ will precipitate when 150.0 mL of 0.225 M Pb(NO₃)₂ is mixed with excess KI?  (Pb(NO₃)₂ + 2 KI → PbI₂ + 2 KNO₃)',
  correctAnswer: '15.56 g PbI₂',
  explanation: 'Moles Pb²⁺ = 0.150 L × 0.225 M = 0.03375 mol → same moles PbI₂; × 461.0 g/mol = 15.56 g.'
},
{
  id: 'stoichiometry-13',
  type: 'short-answer',
  question: 'If 10.0 g of ethanol reacts with 30.0 g of O₂ (C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O), calculate:\n a) grams of CO₂ produced\n b) limiting and excess reactants\n c) grams of excess reactant leftover',
  correctAnswer: 'a) 19.1 g CO₂\nb) Limiting: ethanol; Excess: O₂\nc) 9.16 g O₂ leftover',
  explanation: 'Moles ethanol = 10 ÷ 46.08 ≈ 0.217 mol → needs 0.651 mol O₂ but only 0.938 mol present → ethanol limits; yields 0.434 mol CO₂ = 19.1 g; leftover O₂ = 0.938 – 0.651 = 0.287 mol → 9.16 g.'
},
{
  id: 'stoichiometry-14',
  type: 'short-answer',
  question: 'If 10.0 g of Al reacts with 15.0 g of O₂ (4 Al + 3 O₂ → 2 Al₂O₃), calculate:\n a) grams of Al₂O₃ produced\n b) limiting and excess reactants\n c) grams of excess reactant leftover',
  correctAnswer: 'a) 18.9 g Al₂O₃\nb) Limiting: Al; Excess: O₂\nc) 6.11 g O₂ leftover',
  explanation: 'Moles Al = 0.370 mol; needs 0.277 mol O₂; available = 0.469 mol → O₂ in excess → Al limits; product = 0.185 mol Al₂O₃ = 18.9 g; leftover O₂ = 0.192 mol = 6.11 g.'
},
{
  id: 'stoichiometry-15',
  type: 'short-answer',
  question: 'If 80.0 g of N₂ reacts with 120.0 g of Cl₂ and the actual yield of NCl₃ is 95.0 g (N₂ + 3 Cl₂ → 2 NCl₃), calculate the percent yield.',
  correctAnswer: '≈70.0% yield',
  explanation: 'Moles N₂ = 2.857; needs 8.57 mol Cl₂ but only 3.38 mol → Cl₂ limits; produces (3.38 × 2 / 3) = 2.25 mol NCl₃ → 135.8 g theoretical; 95.0 / 135.8 × 100% ≈ 70.0%.'
},
{
  id: 'stoichiometry-16',
  type: 'short-answer',
  question: 'If 150.0 g of Fe reacts with 200.0 g of O₂ and the actual yield of Fe₂O₃ is 220.0 g (4 Fe + 3 O₂ → 2 Fe₂O₃), calculate the percent yield.',
  correctAnswer: '≈102.6% yield',
  explanation: 'Moles Fe = 2.688; needs 2.016 mol O₂ but available = 6.25 mol → Fe limits; product = (2.688 × 2 / 4) = 1.344 mol Fe₂O₃ → 214.46 g theoretical; 220.0 / 214.46 × 100% ≈ 102.6%.'
}
];
