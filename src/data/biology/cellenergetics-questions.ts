import { Question } from '@/types/quiz';

export const cellenergeticsQuestions: Question[] = [
  {
    id: 'cellenergetics-1',
    type: 'multiple-choice',
    question: 'One of the principal chemical compounds that living things use to store energy is',
    options: [
      { label: 'A', value: 'A', text: 'DNA' },
      { label: 'B', value: 'B', text: 'ATP' },
      { label: 'C', value: 'C', text: 'Water' },
      { label: 'D', value: 'D', text: 'Carbon Dioxide' }
    ],
    correctAnswer: 'B',
    explanation: 'ATP (adenosine triphosphate) temporarily stores and releases energy for cellular work.'
  },
  {
    id: 'cellenergetics-2',
    type: 'multiple-choice',
    question: 'A student studied the effects of light intensity on oxygen production in green algae. The graph shows the results. An increase in the rate of oxygen production by algae would be accompanied by a comparable increase in the rate of production of which of the following substances?',
    image: "/images/biology/energetics1.png",
    options: [
      { label: 'A', value: 'A', text: 'C6H12O6' },
      { label: 'B', value: 'B', text: 'CO2' },
      { label: 'C', value: 'C', text: 'CH4' },
      { label: 'D', value: 'D', text: 'NH3' }
    ],
    correctAnswer: 'A',
    explanation: 'Oxygen and glucose are both products of photosynthesis.'
  },
  {
    id: 'cellenergetics-3',
    type: 'multiple-choice',
    question: 'In addition to light and chlorophyll, photosynthesis requires',
    options: [
      { label: 'A', value: 'A', text: 'water and oxygen' },
      { label: 'B', value: 'B', text: 'oxygen and carbon dioxide' },
      { label: 'C', value: 'C', text: 'water and sugars' },
      { label: 'D', value: 'D', text: 'water and carbon dioxide' }
    ],
    correctAnswer: 'D',
    explanation: 'Photosynthesis uses water and carbon dioxide to form glucose and oxygen.'
  },
  {
    id: 'cellenergetics-4',
    type: 'multiple-choice',
    question: 'The energy required to run the Calvin cycle reactions of photosynthesis comes from which two substances produced during the light-dependent reactions?',
    options: [
      { label: 'A', value: 'A', text: 'ATP and NADPH' },
      { label: 'B', value: 'B', text: 'ADP and PO4' },
      { label: 'C', value: 'C', text: 'H+ and PO2' },
      { label: 'D', value: 'D', text: 'O2 and CO2' }
    ],
    correctAnswer: 'A',
    explanation: 'ATP provides energy and NADPH provides high-energy electrons for carbon fixation.'
  },
  {
    id: 'cellenergetics-5',
    type: 'multiple-choice',
    question: 'Which equation best summarizes the process of photosynthesis?',
    options: [
      { label: 'A', value: 'A', text: 'Water + carbon dioxide → sugar + oxygen' },
      { label: 'B', value: 'B', text: 'Sugars + oxygen → water + carbon' },
      { label: 'C', value: 'C', text: 'Water + oxygen → sugars + carbon dioxide' },
      { label: 'D', value: 'D', text: 'Oxygen + carbon dioxide → sugars + oxygen' }
    ],
    correctAnswer: 'A',
    explanation: 'Photosynthesis converts water and carbon dioxide into glucose and oxygen using sunlight.'
  },
  {
    id: 'cellenergetics-6',
    type: 'multiple-choice',
    question: 'Light is required for the light reactions because',
    options: [
      { label: 'A', value: 'A', text: 'it is the source for electrons' },
      { label: 'B', value: 'B', text: 'it splits the water molecule' },
      { label: 'C', value: 'C', text: 'it energizes electrons in the photosystems' },
      { label: 'D', value: 'D', text: 'it splits ATP molecules to power the Calvin Cycle' }
    ],
    correctAnswer: 'C',
    explanation: 'Light energy excites electrons in chlorophyll, initiating electron transport.'
  },
  {
    id: 'cellenergetics-7',
    type: 'multiple-choice',
    question: 'The light-dependent reactions of photosynthesis take place in the',
    options: [
      { label: 'A', value: 'A', text: 'thylakoid membrane' },
      { label: 'B', value: 'B', text: 'stroma' },
      { label: 'C', value: 'C', text: 'cytoplasm' },
      { label: 'D', value: 'D', text: 'nucleus' }
    ],
    correctAnswer: 'A',
    explanation: 'Light-dependent reactions occur in the thylakoid membranes where chlorophyll is located.'
  },
  {
    id: 'cellenergetics-8',
    type: 'multiple-choice',
    question: 'The light-independent reactions of photosynthesis take place in the',
    options: [
      { label: 'A', value: 'A', text: 'thylakoid membranes' },
      { label: 'B', value: 'B', text: 'stroma' },
      { label: 'C', value: 'C', text: 'cytoplasm' },
      { label: 'D', value: 'D', text: 'nucleus' }
    ],
    correctAnswer: 'B',
    explanation: 'The Calvin cycle occurs in the stroma, the fluid space around the thylakoids.'
  },
  {
    id: 'cellenergetics-9',
    type: 'multiple-choice',
    question: 'The first step in releasing the energy of glucose in the cell is known as',
    options: [
      { label: 'A', value: 'A', text: 'alcoholic fermentation' },
      { label: 'B', value: 'B', text: 'glycolysis' },
      { label: 'C', value: 'C', text: 'the Krebs cycle' },
      { label: 'D', value: 'D', text: 'electron transport' }
    ],
    correctAnswer: 'B',
    explanation: 'Glycolysis splits glucose into pyruvate, producing small amounts of ATP and NADH.'
  },
  {
    id: 'cellenergetics-10',
    type: 'multiple-choice',
    question: 'The process that releases energy from food in the presence of oxygen is',
    options: [
      { label: 'A', value: 'A', text: 'synthesis' },
      { label: 'B', value: 'B', text: 'cellular respiration' },
      { label: 'C', value: 'C', text: 'ATP synthase' },
      { label: 'D', value: 'D', text: 'photosynthesis' }
    ],
    correctAnswer: 'B',
    explanation: 'Cellular respiration uses oxygen to break down food molecules and make ATP.'
  },
  {
    id: 'cellenergetics-11',
    type: 'multiple-choice',
    question: 'Which organism(s) perform(s) cellular respiration?',
    options: [
      { label: 'A', value: 'A', text: 'Bears' },
      { label: 'B', value: 'B', text: 'Mushrooms, algae, tulips, and bears' },
      { label: 'C', value: 'C', text: 'Mushrooms and bears' },
      { label: 'D', value: 'D', text: 'Mushrooms and algae' }
    ],
    correctAnswer: 'B',
    explanation: 'All eukaryotic organisms, including plants and animals, perform cellular respiration.'
  },
  {
    id: 'cellenergetics-12',
    type: 'multiple-choice',
    question: 'It is estimated that oxygen production first evolved in photosynthetic prokaryotes about 2.7 billion years ago. Which evidence best supports this claim?',
    options: [
      { label: 'A', value: 'A', text: 'The light reactions split carbon dioxide into carbon and oxygen' },
      { label: 'B', value: 'B', text: 'The light reactions split water into hydrogen ions and oxygen' },
      { label: 'C', value: 'C', text: 'The Calvin cycle splits glucose into carbon, hydrogen, and oxygen' },
      { label: 'D', value: 'D', text: 'The Calvin cycle splits water into hydrogen ions and oxygen' }
    ],
    correctAnswer: 'B',
    explanation: 'Oxygen gas originates from water molecules split during the light reactions.'
  },
  {
    id: 'cellenergetics-13',
    type: 'multiple-choice',
    question: 'Because fermentation takes place in the absence of oxygen, it is said to be',
    options: [
      { label: 'A', value: 'A', text: 'aerobic' },
      { label: 'B', value: 'B', text: 'anaerobic' },
      { label: 'C', value: 'C', text: 'cyclic' },
      { label: 'D', value: 'D', text: 'essential to oxygen production' }
    ],
    correctAnswer: 'B',
    explanation: 'Fermentation occurs without oxygen and regenerates NAD+ for glycolysis.'
  },
  {
    id: 'cellenergetics-14',
    type: 'multiple-choice',
    question: 'The Krebs cycle takes place within the',
    options: [
      { label: 'A', value: 'A', text: 'chloroplast' },
      { label: 'B', value: 'B', text: 'mitochondria' },
      { label: 'C', value: 'C', text: 'nucleus' },
      { label: 'D', value: 'D', text: 'cytoplasm' }
    ],
    correctAnswer: 'B',
    explanation: 'The Krebs cycle occurs in the mitochondrial matrix.'
  },
  {
    id: 'cellenergetics-15',
    type: 'multiple-choice',
    question: 'The electron transport chain uses the high-energy electrons from the Krebs cycle to',
    options: [
      { label: 'A', value: 'A', text: 'produce glucose' },
      { label: 'B', value: 'B', text: 'convert ADP to ATP' },
      { label: 'C', value: 'C', text: 'produce acetyl-CoA' },
      { label: 'D', value: 'D', text: 'produce GTP' }
    ],
    correctAnswer: 'B',
    explanation: 'The electron transport chain drives ATP synthesis using energy from electrons.'
  },
  {
    id: 'cellenergetics-16',
    type: 'multiple-choice',
    question: 'During heavy exercise, the buildup of lactic acid in muscle cells results in',
    options: [
      { label: 'A', value: 'A', text: 'alcoholic fermentation' },
      { label: 'B', value: 'B', text: 'oxygen debt' },
      { label: 'C', value: 'C', text: 'the Calvin cycle' },
      { label: 'D', value: 'D', text: 'the Krebs cycle' }
    ],
    correctAnswer: 'B',
    explanation: 'When oxygen is limited, lactic acid fermentation causes muscle fatigue.'
  },
  {
    id: 'cellenergetics-17',
    type: 'multiple-choice',
    question: 'The second stage of cellular respiration is',
    options: [
      { label: 'A', value: 'A', text: 'the Krebs cycle' },
      { label: 'B', value: 'B', text: 'glycolysis' },
      { label: 'C', value: 'C', text: 'electron transport' },
      { label: 'D', value: 'D', text: 'fermentation' }
    ],
    correctAnswer: 'A',
    explanation: 'After glycolysis, pyruvate enters the Krebs cycle to produce NADH, FADH2, and CO2.'
  },
  {
    id: 'cellenergetics-18',
    type: 'multiple-choice',
    question: 'Carbon skeletons to be broken down during cellular respiration can be obtained from',
    options: [
      { label: 'A', value: 'A', text: 'polysaccharides' },
      { label: 'B', value: 'B', text: 'proteins' },
      { label: 'C', value: 'C', text: 'lipids' },
      { label: 'D', value: 'D', text: 'All of them' }
    ],
    correctAnswer: 'D',
    explanation: 'Carbohydrates, fats, and proteins can all be used as fuel for respiration.'
  },
  {
    id: 'cellenergetics-19',
    type: 'multiple-choice',
    question: 'A series of carrier proteins in the inner membrane of mitochondria is',
    options: [
      { label: 'A', value: 'A', text: 'the Krebs cycle' },
      { label: 'B', value: 'B', text: 'fermentation' },
      { label: 'C', value: 'C', text: 'the electron transport chain' },
      { label: 'D', value: 'D', text: 'glycolysis' }
    ],
    correctAnswer: 'C',
    explanation: 'The electron transport chain consists of protein complexes that transfer electrons and pump protons.'
  },
  {
    id: 'cellenergetics-20',
    type: 'multiple-choice',
    question: 'ATP serves as a common energy source for organisms because',
    options: [
      { label: 'A', value: 'A', text: 'it is the smallest energy molecule' },
      { label: 'B', value: 'B', text: 'it stores the least energy of any energy source' },
      { label: 'C', value: 'C', text: 'its energy can be easily transferred to do cellular work' },
      { label: 'D', value: 'D', text: 'it is extremely stable and can be stored in the cell for long periods' }
    ],
    correctAnswer: 'C',
    explanation: 'The phosphate bonds in ATP release usable energy when broken.'
  },
  {
    id: 'cellenergetics-21',
    type: 'multiple-choice',
    question: 'Which substance is needed to begin glycolysis?',
    options: [
      { label: 'A', value: 'A', text: 'ATP' },
      { label: 'B', value: 'B', text: 'Pyruvic acid' },
      { label: 'C', value: 'C', text: 'NADP' },
      { label: 'D', value: 'D', text: 'NADH' }
    ],
    correctAnswer: 'A',
    explanation: 'ATP is required to provide the initial energy that starts glycolysis.'
  },
  {
    id: 'cellenergetics-22',
    type: 'multiple-choice',
    question: 'In eukaryotic cells, most cellular respiration takes place in the:',
    options: [
      { label: 'A', value: 'A', text: 'Nucleus' },
      { label: 'B', value: 'B', text: 'Cell walls' },
      { label: 'C', value: 'C', text: 'Mitochondria' },
      { label: 'D', value: 'D', text: 'Centrioles' }
    ],
    correctAnswer: 'C',
    explanation: 'Mitochondria are the site of aerobic respiration, producing ATP efficiently.'
  },
  {
    id: 'cellenergetics-23',
    type: 'multiple-choice',
    question: 'What substance produced by alcoholic fermentation makes bread dough rise?',
    options: [
      { label: 'A', value: 'A', text: 'Oxygen' },
      { label: 'B', value: 'B', text: 'Carbon dioxide' },
      { label: 'C', value: 'C', text: 'Alcohol' },
      { label: 'D', value: 'D', text: 'Water' }
    ],
    correctAnswer: 'B',
    explanation: 'Carbon dioxide produced during fermentation forms bubbles that make bread rise.'
  },
  {
    id: 'cellenergetics-24',
    type: 'multiple-choice',
    question: 'What best describes the role of molecular oxygen (O2) in cellular respiration?',
    options: [
      { label: 'A', value: 'A', text: 'It accepts electrons when reacting to form water.' },
      { label: 'B', value: 'B', text: 'It combines with carbon and hydrogen to form glucose.' },
      { label: 'C', value: 'C', text: 'It is released when water breaks apart.' },
      { label: 'D', value: 'D', text: 'It is released when glucose breaks apart.' }
    ],
    correctAnswer: 'A',
    explanation: 'Oxygen acts as the final electron acceptor, forming water in the process.'
  },
  {
    id: 'cellenergetics-25',
    type: 'multiple-choice',
    question: 'Imagine that you start with a seed. You plant it in the ground and watch it grow into a mature tree with much more mass. Which of the following statements accurately describes the energy component of this scenario?',
    options: [
      { label: 'A', value: 'A', text: 'The majority of the energy was created in the form of glucose, which the plant used to make ATP.' },
      { label: 'B', value: 'B', text: 'The majority of the energy comes from the breakdown of matter within the soil.' },
      { label: 'C', value: 'C', text: 'The majority of the energy originates from the carbon dioxide used in the Calvin cycle.' },
      { label: 'D', value: 'D', text: 'The majority of the energy came from the exergonic nuclear reactions within the sun.' }
    ],
    correctAnswer: 'A',
    explanation: 'Plants capture sunlight to produce glucose, which is then used to make ATP.'
  },
  {
    id: 'cellenergetics-26',
    type: 'multiple-choice',
    question: 'In glycolysis, _____ is oxidation.',
    image: '/images/biology/energetics2.png',
    options: [
      { label: 'A', value: 'A', text: 'NAD+ → NADH' },
      { label: 'B', value: 'B', text: 'O2 → H2O' },
      { label: 'C', value: 'C', text: 'Glucose → CO2' },
      { label: 'D', value: 'D', text: 'None of the options' }
    ],
    correctAnswer: 'D',
    explanation: 'Oxidation in glycolysis involves glucose losing electrons, not the examples listed.'
  },
  {
    id: 'cellenergetics-27',
    type: 'multiple-choice',
    question: 'In glycolysis, _____ is reduction.',
    image: '/images/biology/energetics2.png',
    options: [
      { label: 'A', value: 'A', text: 'NAD+ → NADH' },
      { label: 'B', value: 'B', text: 'NADH → NAD+' },
      { label: 'C', value: 'C', text: 'O2 → H2O' },
      { label: 'D', value: 'D', text: 'None of the options' }
    ],
    correctAnswer: 'A',
    explanation: 'NAD+ gains electrons to form NADH, which is a reduction reaction.'
  },
  {
    id: 'cellenergetics-28',
    type: 'multiple-choice',
    question: 'In the electron transport chain, ____ is oxidation.',
    options: [
      { label: 'A', value: 'A', text: 'NAD+ → NADH' },
      { label: 'B', value: 'B', text: 'NADH → NAD+' },
      { label: 'C', value: 'C', text: 'O2 → H2O' },
      { label: 'D', value: 'D', text: 'Glucose → CO2' }
    ],
    correctAnswer: 'B',
    explanation: 'NADH loses electrons and hydrogen to form NAD+, showing oxidation.'
  },
  {
    id: 'cellenergetics-29',
    type: 'multiple-choice',
    question: 'In the electron transport chain, _____ is reduction.',
    options: [
      { label: 'A', value: 'A', text: 'NAD+ → NADH' },
      { label: 'B', value: 'B', text: 'NADH → NAD+' },
      { label: 'C', value: 'C', text: 'O2 → H2O' },
      { label: 'D', value: 'D', text: 'Glucose → CO2' }
    ],
    correctAnswer: 'C',
    explanation: 'Oxygen gains electrons and forms water, demonstrating reduction.'
  },
  {
    id: 'cellenergetics-30',
    type: 'multiple-choice',
    question: 'A scientist radioactively labeled the oxygen in the reactants of cellular respiration. Which product(s) would contain oxygen originally found in glucose?',
    options: [
      { label: 'A', value: 'A', text: 'Water' },
      { label: 'B', value: 'B', text: 'Carbon dioxide' },
      { label: 'C', value: 'C', text: 'Glucose' },
      { label: 'D', value: 'D', text: 'Oxygen' }
    ],
    correctAnswer: 'B',
    explanation: 'The oxygen in glucose becomes part of carbon dioxide during respiration.'
  },
  {
    id: 'cellenergetics-31',
    type: 'multiple-choice',
    question: 'A scientist radioactively labeled the oxygen in the reactants of cellular respiration. Which product(s) would contain oxygen originally found in O2?',
    options: [
      { label: 'A', value: 'A', text: 'Water' },
      { label: 'B', value: 'B', text: 'Carbon dioxide' },
      { label: 'C', value: 'C', text: 'Glucose' },
      { label: 'D', value: 'D', text: 'Oxygen' }
    ],
    correctAnswer: 'A',
    explanation: 'Oxygen gas becomes part of water molecules at the end of the electron transport chain.'
  },
  {
    id: 'cellenergetics-32',
    type: 'free-response',
    question: 'All living organisms require a constant supply of ATP to maintain life. If no light is available, how can a plant make ATP?',
    correctAnswer: 'If no light is available, a plant performs cellular respiration using stored glucose to produce ATP.',
    explanation: 'Plants can use respiration to generate ATP without sunlight.',
    displayAs: 'paragraph'
  },
  {
    id: 'cellenergetics-33',
    type: 'free-response',
    question: 'Explain why chlorophyll appears green to us in terms of what happens to different wavelengths of light that strike a chlorophyll molecule.',
    correctAnswer: 'Chlorophyll absorbs red and blue wavelengths of light but reflects green wavelengths, making plants appear green.',
    explanation: 'It reflects green light instead of absorbing it.',
    displayAs: 'paragraph'
  },
  {
    id: 'cellenergetics-34',
    type: 'free-response',
    question: 'Certain types of bacteria thrive in conditions that lack oxygen. What does that fact indicate about the way they obtain energy?',
    correctAnswer: 'These bacteria use anaerobic respiration or fermentation to generate energy without oxygen.',
    explanation: 'They rely on anaerobic processes instead of aerobic respiration.',
    displayAs: 'paragraph'
  },
  {
    id: 'cellenergetics-35',
    type: 'free-response',
    question: 'Explain how the laws of thermodynamics apply to biological systems (e.g., photosynthesis and cellular respiration).',
    correctAnswer: 'The first law states energy is conserved: sunlight energy becomes chemical energy in glucose, then ATP. The second law states energy conversions increase entropy, shown as heat loss in these processes.',
    explanation: 'Energy is conserved and converted, with some lost as heat, increasing entropy.',
    displayAs: 'paragraph'
  },
  {
    id: 'cellenergetics-36',
    type: 'free-response',
    question: 'Describe two environmental factors that may limit the rate of aquatic primary production in a lake ecosystem.',
    correctAnswer: 'Temperature extremes and nutrient limitation can slow photosynthesis and growth in aquatic producers.',
    explanation: 'Temperature and nutrients are key limiting factors for primary productivity.',
    displayAs: 'paragraph'
  },
];
