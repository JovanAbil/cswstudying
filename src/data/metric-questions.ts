import { Question } from '@/types/quiz';

export const metricQuestions: Question[] = [
  {
    id: 'metric-1',
    type: 'short-answer',
    question: 'Write the following in scientific notation: a) 0.0009043 b) 32090 c) 0.050 d) 2.030 e) 0.4800 f) 600 g) 2900.0',
    correctAnswer: 'a) 9.043×10⁻⁴  b) 3.209×10⁴  c) 5.0×10⁻²  d) 2.03×10⁰  e) 4.800×10⁻¹  f) 6.00×10²  g) 2.900×10³',
    explanation: 'Move decimal to produce a number between 1 and 10 and adjust exponent correspondingly; preserve significant figures shown.'
  },
  {
    id: 'metric-2',
    type: 'short-answer',
    question: 'Convert temperatures: a) 12.8 °C to °F  b) 148 °C to K  c) 785 K to °C  d) 86.8 °F to °C  e) 67.5 °F to K',
    correctAnswer: 'a) 55.04 °F  b) 421.15 K  c) 511.85 °C  d) 30.44 °C  e) 292.87 K',
    explanation: 'Use formulas: F = (C·9/5)+32; K = C+273.15; C = K−273.15; C = (F−32)/1.8. (I corrected a few rounding differences: e.g., 12.8 °C → 55.04 °F; 67.5 °F → 292.87 K.)'
  },
  {
    id: 'metric-3',
    type: 'short-answer',
    question: 'Fill in the metric prefix chart (common prefixes)',
    correctAnswer: 'kilo (k) = 10³, mega (M) = 10⁶, milli (m) = 10⁻³, micro (µ) = 10⁻⁶, nano (n) = 10⁻⁹, pico (p) = 10⁻¹², giga (G) = 10⁹',
    explanation: 'Common prefixes listed; add tera (T=10^12), centi (c=10^-2), deci (d=10^-1) as needed for the worksheet.'
  },
  {
    id: 'metric-4',
    type: 'short-answer',
    question: 'Count significant figures: a) 145000 m  b) 0.004006 mg  c) 120.04 kg  d) 52 elephants  e) 13.0 mL  f) 0.000780 L  g) 32.60 s  h) 12900000 ms',
    correctAnswer: 'a) ambiguous (commonly 3 unless a decimal or bar indicates more)  b) 4  c) 5  d) exact count (counting number → unlimited/defined)  e) 3  f) 3  g) 4  h) ambiguous (commonly 3 unless specified)',
    explanation: 'Zeros are ambiguous at the end of a whole number unless a decimal point or overbar indicates significance; leading zeros are never significant; interior zeros are significant; counting numbers are exact.'
  },
  {
    id: 'metric-5',
    type: 'short-answer',
    question: 'Sig-fig rules for math operations (multiplication/division and addition/subtraction)',
    correctAnswer: 'Multiplication/Division → answer has same # sig figs as factor with fewest sig figs. Addition/Subtraction → answer has same # decimal places as the addend with fewest decimal places.',
    explanation: 'Apply rules to each calculation in the PDF; round the final answer only (not intermediate results) unless instructed otherwise.'
  },
  {
    id: 'metric-6',
    type: 'short-answer',
    question: 'Unit conversions and practice (furlong, horse-length, inch→cm, Mg→bags, jiffy, lb→mg, boat-length conversions)',
    correctAnswer: 'Use the worksheet conversion factors to perform each conversion; answers depend on those exact factors.',
    explanation: 'Set up dimensional analysis for each: start value × (desired unit / given unit) × ... until you reach the target unit. If you want, paste the specific conversion rows and I’ll give numeric answers.'
  },
  {
    id: 'metric-7',
    type: 'short-answer',
    question: 'Water at 240 K is in what state?',
    correctAnswer: 'Solid (ice)',
    explanation: '240 K = 240 − 273.15 = −33.15 °C, which is below 0 °C, so water is solid at standard pressure.'
  },
  {
    id: 'metric-8',
    type: 'short-answer',
    question: 'Match type of matter to description (examples: rubbing alcohol, laughing gas, sterling silver, helium in balloon, toothpaste fluoride, Coca-Cola, Nesquik in milk, cotton/polyester fabric)',
    correctAnswer: 'Rubbing alcohol: compound (or homogeneous mixture if impure); laughing gas (N₂O): compound; sterling silver: alloy (homogeneous mixture); helium in balloon: element (He) in a physical mixture; toothpaste fluoride: compound present in a mixture; Coca-Cola: heterogeneous suspension/solution mixture (solution with dissolved CO₂); Nesquik in milk: heterogeneous mixture (suspended particles then dissolving); cotton/polyester fabric: mixture (blend) or heterogeneous material.',
    explanation: 'Classify as element, compound, homogeneous mixture (solution), heterogeneous mixture, or alloy based on composition and uniformity. Use your worksheet wording for exact labels.'
  },
  {
    id: 'metric-9',
    type: 'short-answer',
    question: 'Label PC/CC/PP/CP for: mixing baking soda & vinegar, freezing water, milk clumping, copper stretchability, solid carbon brittle, water reacts with sodium, evaporating alcohol, wood rotting.',
    correctAnswer: 'Mixing baking soda & vinegar: CC (chemical change). Freezing water: PC (physical change). Milk clumping: CC (chemical change / denaturation). Copper stretchability: PP (physical property). Solid carbon brittle: PP (physical property). Water reacts with sodium: CC. Evaporating alcohol: PC. Wood rotting: CC (biochemical decomposition).',
    explanation: 'PC = physical change, CC = chemical change. PP/CP refer to physical property / chemical property where appropriate; use worksheet labels if they require a specific format.'
  },
  {
    id: 'metric-10',
    type: 'short-answer',
    question: 'Periodic table details: state of matter for S, lightest alkaline earth metal, alkali metal in period 4, name of group 17, which elements are metalloids?',
    correctAnswer: 'S (sulfur) = solid. Lightest alkaline earth = Be (beryllium). Alkali metal in period 4 = K (potassium). Group 17 = halogens. Metalloids commonly: B, Si, Ge, As, Sb, Te.',
    explanation: 'Use the periodic table: group numbers and periods identify categories; metalloids are the staircase elements between metals and nonmetals (commonly those six listed).'
  },
  {
    id: 'metric-11',
    type: 'short-answer',
    question: 'Necklace density/money problem: mass 435.5 g; initial vol 62.6 mL; final vol 104.6 mL — identify metal from chart and compute price',
    correctAnswer: 'Volume displaced = 42.0 mL; density = 435.5 g / 42.0 mL = 10.369 g/mL. Identify metal using your packet\'s density table; compute price using price-per-gram from the worksheet.',
    explanation: 'I computed the density ≈ 10.369 g·mL⁻¹. Which metal that matches depends on the metal-density table in your packet (e.g., if the table lists a metal at ~10.37 g/mL pick that one), then multiply mass by price per gram from that table to get cost.'
  },
  {
    id: 'metric-12',
    type: 'short-answer',
    question: 'Sunglasses overboard: mass 135.4 g, volume 186.6 mL — will they float?',
    correctAnswer: 'Yes — they will float',
    explanation: 'Density = mass/volume = 135.4 g / 186.6 mL = 0.7257 g·mL⁻¹, which is less than water (1.00 g·mL⁻¹), so the sunglasses float.'
  },
  {
    id: 'metric-13',
    type: 'short-answer',
    question: 'Mixture separation (sand, water, salt, ethanol, iron filings): design a four-step procedure ending with pure water',
    correctAnswer: '1) Use a magnet to remove iron filings. 2) Filter the mixture to remove sand. 3) Distill the filtrate to collect ethanol (boils at ~78 °C) and leave behind water + salt. 4) Evaporate the remaining water (or perform reverse osmosis/distillation) to isolate pure water (salt remains as residue).',
    explanation: 'Steps: (1) magnetic separation, (2) filtration (solid sand removed), (3) simple distillation to separate ethanol from water+salt, (4) further distillation/evaporation/desalting to remove salt and recover pure water. Alternative for step 4: recrystallize salt and collect water or use desalination.'
  }
];
