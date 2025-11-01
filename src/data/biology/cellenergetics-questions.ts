import { Question } from '@/types/quiz';

export const cellenergeticsQuestions: Question[] = [
  {
    id: 'cellenergetics-1',
    type: 'multiple-choice',
    question: 'One of the principal chemical compounds that living thins use to store energy is',
    options: [
      { label: 'A', value: 'A', text: 'DNA' },
      { label: 'B', value: 'B', text: 'ATP' },
      { label: 'C', value: 'C', text: 'Water' },
      { label: 'D', value: 'D', text: 'Carbon Dioxide' }
    ],
    correctAnswer: 'B',
    explanation: 'N/A'
  },
  {//IMAGE
    id: 'cellenergetics-2',
    type: 'multiple-choice',
    question: 'A student studied the effects of light intensity on oxygen production in green algae. The algae were suspended in water inside a sealed glass jar, and the jar was placed into a constant-temperature, lightproof box containing a light source. A probe was inserted into the jar to record the concentration of oxygen. The probe was connected to a recording device. The setup is shown. The student dereased the intensity of the light hourly and recorded the corresponding changes in oxygen concentration. The graph shows the results from the recording device. An increase in the rate of oxygen production by algae would be accompanied by a comparable increase in the rate of production of which of the following substances?',
    image: "/images/biology/energetics1.png",
    options: [
      { label: 'A', value: 'A', text: 'C6H12O6' },
      { label: 'B', value: 'B', text: 'CO2' },
      { label: 'C', value: 'C', text: 'CH4' },
      { label: 'D', value: 'D', text: 'NH3' }
    ],
    correctAnswer: 'A',
    explanation: 'Glucose is made along with oxygen'
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
    explanation: 'Photosynth'
  },
  {
    id: 'cellenergetics-4',
    type: 'multiple-choice',
    question: 'The energy requiered to run the Calvin cycle reactions of photosynthesis comes from which two substances producted during the light-dependent reactions',
    options: [
      { label: 'A', value: 'A', text: 'ATP and NADPH' },
      { label: 'B', value: 'B', text: 'ADP and PO4' },
      { label: 'C', value: 'C', text: 'H+ and PO2' },
      { label: 'D', value: 'D', text: 'O2 and CO2' }
    ],
    correctAnswer: 'A',
    explanation: 'They are made to support the energy making process because it needs energy to make energy'
  },
  {
    id: 'cellenergetics-5',
    type: 'multiple-choice',
    question: 'Which equation best summarizes the process of photosynthesis?',
    options: [
      { label: 'A', value: 'A', text: 'Water + carbon dioxide --> sugar + oxygen' },
      { label: 'B', value: 'B', text: 'Sugars + oxygen --> water + carbon' },
      { label: 'C', value: 'C', text: 'Water + oxygen --> sugars + carbon dioxide' },
      { label: 'D', value: 'D', text: 'Oxygen + carbon dioxide --> sugars + oxygen' }
    ],
    correctAnswer: 'A',
    explanation: 'N/A'
  },
  {
    id: 'cellenergetics-6',
    type: 'multiple-choice',
    question: 'Light is required for the light reactions because',
    options: [
      { label: 'A', value: 'A', text: 'it is the source for electrons' },
      { label: 'B', value: 'B', text: 'it splits the water molecule' },
      { label: 'C', value: 'C', text: 'it energizes electrons in the photosystems' },
      { label: 'D', value: 'D', text: 'it splits ATP molecules, which generates the energy necessary to power the Calvin Cycle' }
    ],
    correctAnswer: 'C',
    explanation: 'N/A'
  },
  {
    id: 'cellenergetics-7',
    type: 'multiple-choice',
    question: 'The light-dependent reactions of photosynthesis takes place in the ',
    options: [
      { label: 'A', value: 'A', text: 'thylakoid membrane' },
      { label: 'B', value: 'B', text: 'stroma' },
      { label: 'C', value: 'C', text: 'cytoplasm' },
      { label: 'D', value: 'D', text: 'nucleus' }
    ],
    correctAnswer: 'A',
    explanation: 'N/A'
  },
  {
    id: 'cellenergetics-8',
    type: 'multiple-choice',
    question: 'The light-independent reactions of photosynthesis takes place in the ',
    options: [
      { label: 'A', value: 'A', text: 'thylakoid membranes' },
      { label: 'B', value: 'B', text: 'stroma' },
      { label: 'C', value: 'C', text: 'cytoplasm' },
      { label: 'D', value: 'D', text: 'nucleus' }
    ],
    correctAnswer: 'B',
    explanation: 'N/A'
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
    explanation: 'N/A'
  },
  {
    id: 'cellenergetics-10',
    type: 'multiple-choice',
    question: 'The process that releases energy from food in the presence of oxygen is ',
    options: [
      { label: 'A', value: 'A', text: 'synthesis' },
      { label: 'B', value: 'B', text: 'cellular respiration' },
      { label: 'C', value: 'C', text: 'ATP synthase' },
      { label: 'D', value: 'D', text: 'photosynthesis' }
    ],
    correctAnswer: 'B',
    explanation: 'N/A'
  },
  {
    id: 'cellenergetics-11',
    type: 'multiple-choice',
    question: 'Which organism(s) preform(s) cellular respiration?',
    options: [
      { label: 'A', value: 'A', text: 'Bears' },
      { label: 'B', value: 'B', text: 'Mushrooms, algae, tulips, and bears' },
      { label: 'C', value: 'C', text: 'Mushrooms and bears' },
      { label: 'D', value: 'D', text: 'Mushrooms and algae' }
    ],
    correctAnswer: 'B',
    explanation: 'All use cell resp'
  },
  {
    id: 'cellenergetics-12',
    type: 'multiple-choice',
    question: 'Is it estimated that oxygen production first evolved in photosynthetic prokaryotes approximately 2.7 billion years ago. The first photosynthetic prokaryotes are presumed to be similar to todays cynobacteria. Which of the following best supports the claim that photosynthetic prokaryotes were responsible for the oxygen in Earths atmosphere',
    options: [
      { label: 'A', value: 'A', text: 'The light reactions of photosynthesis split carbon dioxide into carbon and oxygen' },
      { label: 'B', value: 'B', text: 'The light reactions of photosynthesis split water into hydrogen ions and oxygen' },
      { label: 'C', value: 'C', text: 'The Calvin cycle splits glucose into carbon, hydrogen, and oxygen' },
      { label: 'D', value: 'D', text: 'The Calvin cycle splits water into hydrogen ions and oxygen' }
    ],
    correctAnswer: 'B',
    explanation: 'N/A'
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
    explanation: 'No oxygen, no cell resp, it depends on oxygen'
  },
  {
    id: 'cellenergetics-14',
    type: 'multiple-choice',
    question: 'The Krebs cycle takes place within the ',
    options: [
      { label: 'A', value: 'A', text: 'chloroplast' },
      { label: 'B', value: 'B', text: 'mitochondria' },
      { label: 'C', value: 'C', text: 'nucleus' },
      { label: 'D', value: 'D', text: 'cytoplasm' }
    ],
    correctAnswer: 'B',
    explanation: '.'
  },
  {
    id: 'cellenergetics-15',
    type: 'multiple-choice',
    question: 'The electron transport chain uses the high-energy electrons from the Krebs cycle to',
    options: [
      { label: 'A', value: 'A', text: 'produce glucose' },
      { label: 'B', value: 'B', text: 'convert ADP to ATP' },
      { label: 'C', value: 'C', text: 'produces acetyl-CoA' },
      { label: 'D', value: 'D', text: 'produce GTP' }
    ],
    correctAnswer: 'B',
    explanation: '.'
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
    explanation: '.'
  },
  {
    id: 'cellenergetics-17',
    type: 'multiple-choice',
    question: 'The second stage of cellular respiration',
    options: [
      { label: 'A', value: 'A', text: 'the Krebs cycle' },
      { label: 'B', value: 'B', text: 'glycolysis' },
      { label: 'C', value: 'C', text: 'electron transport' },
      { label: 'D', value: 'D', text: 'fermentation' }
    ],
    correctAnswer: 'A',
    explanation: '.'
  },
  {
    id: 'cellenergetics-18',
    type: 'multiple-choice',
    question: 'Carbon skeletons to be broken down during cellular respiration can be obtained from',
    options: [
      { label: 'A', value: 'A', text: 'polysaccharides' },
      { label: 'B', value: 'B', text: 'protiens' },
      { label: 'C', value: 'C', text: 'lipids' },
      { label: 'D', value: 'D', text: 'All of them' }
    ],
    correctAnswer: 'D',
    explanation: '.'
  },
  {
    id: 'cellenergetics-19',
    type: 'multiple-choice',
    question: 'A series of carrier protiens in the inner membrane of mitochondria is',
    options: [
      { label: 'A', value: 'A', text: 'the Krebs cycle' },
      { label: 'B', value: 'B', text: 'fermentation' },
      { label: 'C', value: 'C', text: 'the electron transport chain' },
      { label: 'D', value: 'D', text: 'glycolysis' }
    ],
    correctAnswer: 'C',
    explanation: '.'
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
    explanation: '.'
  },
  {
    id: 'cellenergetics-21',
    type: 'multiple-choice',
    question: 'Which substance is needed to being glycolysis?',
    options: [
      { label: 'A', value: 'A', text: 'ATP' },
      { label: 'B', value: 'B', text: 'pyruvic acid' },
      { label: 'C', value: 'C', text: 'NADP' },
      { label: 'D', value: 'D', text: 'NADH' }
    ],
    correctAnswer: 'A',
    explanation: '.'
  },
  {
    id: 'cellenergetics-22',
    type: 'multiple-choice',
    question: 'In eukaryotic cells, most cellular respiration takes place in the ',
    options: [
      { label: 'A', value: 'A', text: 'nucleus' },
      { label: 'B', value: 'B', text: 'cell walls' },
      { label: 'C', value: 'C', text: 'mitochondria' },
      { label: 'D', value: 'D', text: 'centrioles' }
    ],
    correctAnswer: 'C',
    explanation: '.'
  },
  {
    id: 'cellenergetics-23',
    type: 'multiple-choice',
    question: 'What substance produced by alcoholic fermentation makes bread dough rise?',
    options: [
      { label: 'A', value: 'A', text: 'oxygen' },
      { label: 'B', value: 'B', text: 'carbon dioxide' },
      { label: 'C', value: 'C', text: 'alcohol' },
      { label: 'D', value: 'D', text: 'water' }
    ],
    correctAnswer: 'B',
    explanation: '.'
  },
  {
    id: 'cellenergetics-24',
    type: 'multiple-choice',
    question: 'What best describes the role of molecular oxygen (O2) in cellular respiration',
    options: [
      { label: 'A', value: 'A', text: 'It accepts electrons when reacting to form water' },
      { label: 'B', value: 'B', text: 'It combines with carbon and hydrogen to form glucose' },
      { label: 'C', value: 'C', text: 'It is released when water breaks apart' },
      { label: 'D', value: 'D', text: 'It is released when glucose breaks apart' }
    ],
    correctAnswer: 'A',
    explanation: '.'
  },
  {
    id: 'cellenergetics-25',
    type: 'multiple-choice',
    question: 'Imagine that you start with a seed. You plant it in the ground and watch it grow into a mature adult tree with much more mass. Which of the following statements accurately describes the energy component of this scenario?',
    options: [
      { label: 'A', value: 'A', text: 'The majority of the energy was created in the form of glucose, after which the plant used to make ATP' },
      { label: 'B', value: 'B', text: 'The majority of the energy comes from the breakdown of matter within the soil' },
      { label: 'C', value: 'C', text: 'The majority of the energy originates from the carbon dioxide that is used in the Calvin Cycle' },
      { label: 'D', value: 'D', text: 'The majority of the energy came from the exergonic nuclear reactions within the sun' }
    ],
    correctAnswer: 'A',
    explanation: '.'
  },
  {//IMAGE
    id: 'cellenergetics-26',
    type: 'multiple-choice',
    question: 'In glycolysis, _____ is oxidation',
    image: '/images/biology/energetics2.png',
    options: [
      { label: 'A', value: 'A', text: 'NAD+ --> NADH' },
      { label: 'B', value: 'B', text: 'O2 --> H2O' },
      { label: 'C', value: 'C', text: 'Glucose --> CO2' },
      { label: 'D', value: 'D', text: 'None of the options' }
    ],
    correctAnswer: 'D',
    explanation: '.'
  },
  {
    id: 'cellenergetics-27',
    type: 'multiple-choice',
    question: 'In glycolysis, _____ is reduction',
    image: '/images/biology/energetics2.png',
    options: [
      { label: 'A', value: 'A', text: 'NADP+ --> NADH' },
      { label: 'B', value: 'B', text: 'NADH --> NAD+' },
      { label: 'C', value: 'C', text: 'O2 --> H2O' },
      { label: 'D', value: 'D', text: 'None of the options' }
    ],
    correctAnswer: 'A',
    explanation: '.'
  },
  {
    id: 'cellenergetics-28',
    type: 'multiple-choice',
    question: 'In the electron transport chain ____ is oxidation.',
    options: [
      { label: 'A', value: 'A', text: 'NAD+ --> NADH' },
      { label: 'B', value: 'B', text: 'NADH --> NAD+' },
      { label: 'C', value: 'C', text: 'O2 --> H2O' },
      { label: 'D', value: 'D', text: 'Glucose --> CO2' }
    ],
    correctAnswer: 'B',
    explanation: '.'
  },
  {
    id: 'cellenergetics-29',
    type: 'multiple-choice',
    question: 'In the electron transport chain _____ is reduction',
    options: [
      { label: 'A', value: 'A', text: 'NAD+ --> NADH' },
      { label: 'B', value: 'B', text: 'NADH --> NAD+' },
      { label: 'C', value: 'C', text: 'O2 --> H2O' },
      { label: 'D', value: 'D', text: 'Glucose --> CO2' }
    ],
    correctAnswer: 'C',
    explanation: '.'
  },
  {
    id: 'cellenergetics-30',
    type: 'multiple-choice',
    question: 'A scientist radioactively labeled the oxygen in the reactants of cellular respiration. What product(s) would you expect to contain oxygen originally found in glucose',
    options: [
      { label: 'A', value: 'A', text: 'Water' },
      { label: 'B', value: 'B', text: 'Carbon dioxide' },
      { label: 'C', value: 'C', text: 'Glucose' },
      { label: 'D', value: 'D', text: 'Oxygen' }
    ],
    correctAnswer: 'B',
    explanation: '.'
  },
  {
    id: 'cellenergetics-31',
    type: 'multiple-choice',
    question: 'A scientist radioactively labeled the oxygen in the reactants of cellular respiration. What product(s) would you expect to contain oxygen originally found in O2',
    options: [
      { label: 'A', value: 'A', text: 'Water' },
      { label: 'B', value: 'B', text: 'Carbon dioxide' },
      { label: 'C', value: 'C', text: 'Glucose' },
      { label: 'D', value: 'D', text: 'Oxygen' }
    ],
    correctAnswer: 'A',
    explanation: '.'
  },
  {
    id: 'cellenergetics-32',
    type: 'free-response',
    question: 'All living organisms require a constant supply of ATP to maintain life. If no light is available, how can a plant make ATP?',
    correctAnswer: 'If no light is available, a plant can resort to cellular respiration, which means using its own supply of glucose to turn into ATP.',
    explanation: 'N/A'
  },
  {
    id: 'cellenergetics-33',
    type: 'free-response',
    question: 'Explain why chlorophyll appears green to us in terms of what happens to different wavelengths light that strike a chlorophyll molecule.',
    correctAnswer: 'Chlorophyll has pigments that absorb sunlight. The fall light colors wavelengths aer absorbed while the green wavelength is reflected, so the leaf appears green to us.',
    explanation: 'N/A'
  },
  {
    id: 'cellenergetics-34',
    type: 'free-response',
    question: 'Certain types of bacteria thrive in conditions that lack oxygen. What does that fact indicate about the way they obtain energy?',
    correctAnswer: 'This shows that the bacteria most likely used anaerobic respiration to produce energy because without oxygen, it cant do cellular respiration so it needs to resort to other methods.',
    explanation: 'N/A'
  },
  {
    id: 'cellenergetics-35',
    type: 'free-response',
    question: 'Explain how the laws of thermodynamics apply to biological systems (e.g., photosynthesis and cellular respiration)',
    correctAnswer: 'The first law of thermodynamics is the law of the conservation of energy and that relates to photosynthesis and cellular respiration because the energy from the sun is used to make electrons have more energy and that energy is transferred into the glucose and when broken apart, it releases energy that animals or plants use through cellular respiration and then most likely gets converted back into heat energy back into the atmosphere. The second law is disorder increases over time and this is shown through photosynthesis and cellular respiration because their products gets less organized over time and is all over the place.',
    explanation: 'N/A'
  },
  {
    id: 'cellenergetics-36',
    type: 'free-response',
    question: 'Describe two environmental factors that may limit the rate of aquatic primary production in a lake ecosystem',
    correctAnswer: '1. Extreme temperatures; if it is too warm, water can evaporate and there wont be water for part of the photosynthesis leading to loss of energy. If it is too cold, photosynthesis wouldnt be able to work because chemical reactions wont have enough activation energy because of the cold weather. 2. Not enough nutrients are present which can lead to slower growth and that may limit the rate of reproduction in a lake because if there isnt nitrogen or phosphorous, it cant replicate through mitosis because there isnt nitrogen for the bases for replicating DNA along with phosphorous depending on if it is marine or freshwater lakes.',
    explanation: 'N/A'
  },
];
