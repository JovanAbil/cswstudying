import { Question } from '@/types/quiz';

export const compoundsQuestions: Question[] = [
  {
    "id": "compounds-1",
    "type": "short-answer",
    "question": "Calculate the molar mass of V3(PO4)5.",
    "correctAnswer": "≈ 627.67 g·mol⁻¹",
    "explanation": "3×50.94 (V) + 5×(30.97 + 4×16.00) = 627.67 g·mol⁻¹."
  },
  {
    "id": "compounds-2",
    "type": "short-answer",
    "question": "Calculate the molar mass of (NH4)2SO3.",
    "correctAnswer": "≈ 116.14 g·mol⁻¹",
    "explanation": "2×(14.01+4×1.008) + 32.06 + 3×16.00 = 116.14 g·mol⁻¹."
  },
  {
    "id": "compounds-3",
    "type": "short-answer",
    "question": "How many grams are in 2.08×10²⁶ atoms of Tungsten?",
    "correctAnswer": "≈ 63.50 kg",
    "explanation": "n = 2.08×10²⁶ ÷ 6.022×10²³ ≈ 345.4 mol → mass = 345.4 × 183.84 g/mol ≈ 6.35×10⁴ g = 63.50 kg."
  },
  {
    "id": "compounds-4",
    "type": "short-answer",
    "question": "How many molecules are in 0.32 kg of ethanol (C2H5OH)?",
    "correctAnswer": "≈ 4.18×10²⁴ molecules",
    "explanation": "0.32 kg = 320 g; M = 46.07 g·mol⁻¹ → n ≈ 6.95 mol → molecules = 6.95 × 6.022×10²³ ≈ 4.18×10²⁴."
  },
  {
    "id": "compounds-5",
    "type": "short-answer",
    "question": "How many grams are there in 8.64×10²¹ molecules of disilicon hexabromide (Si2Br6)?",
    "correctAnswer": "≈ 7.68 g",
    "explanation": "M(Si2Br6) = 2×28.09 + 6×79.90 ≈ 533 g·mol⁻¹ → n = 8.64×10²¹ ÷ 6.022×10²³ ≈ 0.0143 mol → mass ≈ 0.0143 × 533 ≈ 7.68 g."
  },
  {
    "id": "compounds-6",
    "type": "short-answer",
    "question": "Calculate the mass of nitrogen in 150 g of mercury(II) nitrate, Hg(NO3)2.",
    "correctAnswer": "≈ 12.95 g of N",
    "explanation": "M(Hg(NO3)2) ≈ 324.6 g·mol⁻¹; N fraction = 28.01 / 324.6 ≈ 0.0866 → mass of N = 150 × 0.0866 ≈ 12.95 g."
  },
  {
    "id": "compounds-7",
    "type": "short-answer",
    "question": "Calculate the mass percentage of each element in aluminum sulfate, Al2(SO4)3.",
    "correctAnswer": "%Al ≈ 15.77%, %S ≈ 28.12%, %O ≈ 56.11%",
    "explanation": "M = 2×26.98 + 3×(32.06 + 4×16.00) ≈ 342.17 g·mol⁻¹ → mass fractions: Al=54.0/342.2, S=96.2/342.2, O=192/342.2."
  },
  {
    "id": "compounds-8",
    "type": "short-answer",
    "question": "Nicotine has percent composition: 74.0% C, 8.7% H, 17.3% N. What is the empirical formula?",
    "correctAnswer": "C5H7N",
    "explanation": "Assume 100 g: 74.0 g C→6.16 mol; 8.7 g H→8.63 mol; 17.3 g N→1.23 mol → divide by 1.23 → ~5:7:1 → C5H7N."
  },
  {
    "id": "compounds-9",
    "type": "short-answer",
    "question": "If nicotine’s molecular mass is 162.1 g·mol⁻¹, what is its molecular formula?",
    "correctAnswer": "C10H14N2",
    "explanation": "Empirical mass = 81.1 g·mol⁻¹ → factor = 162.1 / 81.1 ≈ 2 → C10H14N2."
  },
  {
    "id": "compounds-10",
    "type": "short-answer",
    "question": "A compound is 21.20% N, 6.06% H, 24.30% S, 48.45% O. Write its empirical formula and name.",
    "correctAnswer": "(NH4)2SO4 (ammonium sulfate)",
    "explanation": "Percent → mol: N=1.51, H=6.01, S=0.76, O=3.03 → divide by 0.76 → ≈2:8:1:4 → (NH4)2SO4."
  },

  /* ---------- Nomenclature ---------- */
  {
    "id": "compounds-11",
    "type": "short-answer",
    "question": "Name HClO.",
    "correctAnswer": "hypochlorous acid",
    "explanation": "Aqueous acid naming → hypochlorous acid (not hypochlorite)."
  },
  { "id": "compounds-12", "type": "short-answer", "question": "Name FeCl2.", "correctAnswer": "iron(II) chloride", "explanation": "Fe²⁺ + 2Cl⁻ → iron(II) chloride." },
  { "id": "compounds-13", "type": "short-answer", "question": "Name K3SO4.", "correctAnswer": "potassium sulfate (check stoichiometry; commonly K2SO4)", "explanation": "Sulfate is SO4²⁻; typical neutral compound is K2SO4." },
  { "id": "compounds-14", "type": "short-answer", "question": "Name NH3.", "correctAnswer": "ammonia", "explanation": "Common name ammonia (also called nitrogen trihydride)." },
  { "id": "compounds-15", "type": "short-answer", "question": "Name Ti(SO3)2.", "correctAnswer": "titanium(IV) sulfite", "explanation": "Two SO3²⁻ → total −4 → Ti oxidation +4 → titanium(IV) sulfite." },
  { "id": "compounds-16", "type": "short-answer", "question": "Name HI.", "correctAnswer": "hydroiodic acid (aqueous) / hydrogen iodide (gas)", "explanation": "In water it is hydroiodic acid." },
  { "id": "compounds-17", "type": "short-answer", "question": "Name MgH2.", "correctAnswer": "magnesium hydride", "explanation": "Mg²⁺ and two hydrides H⁻." },
  { "id": "compounds-18", "type": "short-answer", "question": "Name Al(OH)3.", "correctAnswer": "aluminum hydroxide", "explanation": "Al³⁺ and 3 hydroxide anions." },
  { "id": "compounds-19", "type": "short-answer", "question": "Name Hg3P2.", "correctAnswer": "mercury(I) phosphide", "explanation": "As given in worksheet context." },
  { "id": "compounds-20", "type": "short-answer", "question": "Name P2O5.", "correctAnswer": "diphosphorus pentoxide", "explanation": "Molecular compound → prefix naming." },
  { "id": "compounds-21", "type": "short-answer", "question": "Name HNO3.", "correctAnswer": "nitric acid", "explanation": "Common strong acid." },
  { "id": "compounds-22", "type": "short-answer", "question": "Name (NH4)2O.", "correctAnswer": "ammonium oxide", "explanation": "Ammonium cation with oxide anion." },
  { "id": "compounds-23", "type": "short-answer", "question": "Name Br2I4.", "correctAnswer": "dibromine tetraiodide", "explanation": "Molecular → prefix naming." },
  { "id": "compounds-24", "type": "short-answer", "question": "Name N2S.", "correctAnswer": "dinitrogen sulfide", "explanation": "Molecular compound → prefix naming." },
  { "id": "compounds-25", "type": "short-answer", "question": "Give the formula for manganese(V) sulfide.", "correctAnswer": "Mn2S5", "explanation": "Mn⁵⁺ needs 5×(+2) vs 2×(−3) from sulfide → Mn2S5." },
  { "id": "compounds-26", "type": "short-answer", "question": "Give the formula for trioxide monofluoride.", "correctAnswer": "FO3 (monofluoride trioxide)", "explanation": "Worksheet-specific name; written as FO3." },
  { "id": "compounds-27", "type": "short-answer", "question": "Give the formula for lithium phosphate.", "correctAnswer": "Li3PO4", "explanation": "Li⁺ and PO4³⁻ → Li3PO4." },
  { "id": "compounds-28", "type": "short-answer", "question": "Give the formula for vanadium(III) sulfide.", "correctAnswer": "V2S3", "explanation": "V³⁺ and S²⁻ → V2S3." },
  { "id": "compounds-29", "type": "short-answer", "question": "Give the formula for aluminum acetate.", "correctAnswer": "Al(C2H3O2)3", "explanation": "Al³⁺ and three acetate anions." },
  { "id": "compounds-30", "type": "short-answer", "question": "Give the formula for potassium nitride.", "correctAnswer": "K3N", "explanation": "K⁺ and N³⁻ → K3N." },
  { "id": "compounds-31", "type": "short-answer", "question": "Give the formula for chloric acid.", "correctAnswer": "HClO3", "explanation": "Common oxyacid of chlorine." },
  { "id": "compounds-32", "type": "short-answer", "question": "Give the formula for sulfurous acid.", "correctAnswer": "H2SO3", "explanation": "Oxyacid with S in +4 oxidation state." },
  { "id": "compounds-33", "type": "short-answer", "question": "Give the formula for titanium(IV) nitrite.", "correctAnswer": "Ti(NO2)4", "explanation": "Ti⁴⁺ and 4 nitrite anions." },
  { "id": "compounds-34", "type": "short-answer", "question": "Give the formula for lead(IV) sulfite.", "correctAnswer": "Pb(SO3)2", "explanation": "Pb⁴⁺ and two sulfite anions." },
  { "id": "compounds-35", "type": "short-answer", "question": "Give the formula for copper(II) phosphide.", "correctAnswer": "Cu3P2", "explanation": "3 Cu²⁺ balance 2 P³⁻." },

  /* ---------- Bonding & Polarity / IMF ---------- */
  {
    "id": "compounds-36",
    "type": "short-answer",
    "question": "Explain the sea of electrons and some benefits it provides in metallic bonding.",
    "correctAnswer": "Delocalized electrons lead to conductivity, malleability, ductility, and metallic luster.",
    "explanation": "Valence electrons in metals are shared over the lattice; cations held by electron sea → allows current flow, heat conduction, and plastic deformation."
  },
  {
    "id": "compounds-37",
    "type": "short-answer",
    "question": "Explain how the electrons get delocalized. Are the metals cations or anions?",
    "correctAnswer": "Metal atoms become cations; their valence electrons are delocalized.",
    "explanation": "Metal atoms donate valence electrons into a shared conduction band; the positive ions remain fixed in the lattice."
  },
  {
    "id": "compounds-38",
    "type": "short-answer",
    "question": "Describe polarity. How do bonds become polar? How do you decide if a molecule is polar?",
    "correctAnswer": "Bond polarity from electronegativity difference; molecule polar if dipole vectors don’t cancel.",
    "explanation": "ΔEN between bonded atoms causes unequal sharing → bond dipole; overall polarity depends on geometry."
  },
  {
    "id": "compounds-39",
    "type": "short-answer",
    "question": "List every possible difference between nonpolar covalent, polar covalent, and ionic bonds.",
    "correctAnswer": "Nonpolar ΔEN≈0–0.4, equal sharing, no dipole, often insoluble in water (e.g. CH4); Polar ΔEN≈0.4–1.7, unequal sharing, partial charges, dipole, often soluble (e.g. H2O); Ionic ΔEN>1.7, full electron transfer, strong electrostatic forces, high mp, usually water soluble (e.g. NaCl).",
    "explanation": "Compared by ΔEN, electron sharing vs transfer, dipole moment, solubility, bond strength."
  },
  {
    "id": "compounds-40",
    "type": "short-answer",
    "question": "Give Lewis structure, geometry, bond angle, and polarity for: a) CCl4 b) SO3²⁻ c) SiO2 d) PBr3 e) NO2⁻ f) NOH g) XeCl3⁻ h) PO4³⁻",
    "correctAnswer": "a) tetrahedral, 109.5°, non-polar; b) trigonal pyramidal, polar; c) linear, non-polar; d) trigonal pyramidal ~107°, polar; e) bent ~117°, polar; f) bent, polar; g) T-shaped ~90°, polar; h) tetrahedral 109.5°, overall symmetric (ionic anion).",
    "explanation": "Used VSEPR to determine shapes and polarity."
  },
  {
    "id": "compounds-41",
    "type": "short-answer",
    "question": "Explain why ethyl alcohol (C2H5OH) has a higher boiling point than methyl alcohol (CH3OH).",
    "correctAnswer": "C2H5OH has greater mass and surface area → stronger dispersion forces, plus same H-bonding → higher bp (78.4 °C vs 64.7 °C).",
    "explanation": "Both H-bond, but ethyl group increases London dispersion forces."
  },
  {
    "id": "compounds-42",
    "type": "short-answer",
    "question": "Why not use glycerol as motor oil even though it is thick?",
    "correctAnswer": "Glycerol is highly polar and H-bonding → too viscous, hygroscopic, unsuitable for engine lubrication; hydrocarbons have proper viscosity and non-polarity.",
    "explanation": "Motor oil needs non-polar long-chain hydrocarbons for good lubrication."
  },
  {
    "id": "compounds-43",
    "type": "short-answer",
    "question": "Rank in order of increasing boiling point: C2H4, CH4, Ne, H3COCH3.",
    "correctAnswer": "Ne < CH4 < C2H4 < H3COCH3",
    "explanation": "Ne: weakest dispersion; CH4: more massive; C2H4: larger, more polarizable; H3COCH3: dipole-dipole interactions → highest bp."
  },
  {
    "id": "compounds-44",
    "type": "short-answer",
    "question": "Why is ethylene glycol’s boiling point much higher than propanol’s?",
    "correctAnswer": "Ethylene glycol has two OH groups → more H-bonding → much higher bp.",
    "explanation": "More sites for hydrogen bonding increases intermolecular attractions."
  },
  {
    "id": "compounds-45",
    "type": "short-answer",
    "question": "List these substances in order of increasing boiling point: BaCl2, H2, CO, HF, Ne, CO2.",
    "correctAnswer": "H2 < Ne < CO < CO2 < HF < BaCl2",
    "explanation": "Boiling point rises with stronger IMFs: dispersion < dipole-dipole < H-bonding < ionic lattice."
  },
  {
    "id": "compounds-46",
    "type": "short-answer",
    "question": "Explain why COS has lower boiling point even though it is polar.",
    "correctAnswer": "Its linear shape and small dipole make dispersion forces dominate and remain weak → lower bp than expected.",
    "explanation": "Molecular size and dipole magnitude affect IMF strength."
  },
  {
    "id": "compounds-47a",
    "type": "short-answer",
    "question": "Explain why water beads on a windshield but acetone does not.",
    "correctAnswer": "Water’s strong H-bonding gives high surface tension → beads; acetone is less polar and spreads/wets the surface.",
    "explanation": "Surface tension depends on strength of cohesive forces."
  },
  {
    "id": "compounds-47b",
    "type": "short-answer",
    "question": "Explain why butane is a gas at RT while pentane is a liquid.",
    "correctAnswer": "Pentane is larger → stronger dispersion → higher bp → liquid at RT; butane weaker → gas.",
    "explanation": "London dispersion forces increase with molecular mass and chain length."
  },
  {
    "id": "compounds-47c",
    "type": "short-answer",
    "question": "Explain why N2 boils at 77 K but NO boils at 110 K.",
    "correctAnswer": "NO is polar and has unpaired electron → stronger intermolecular forces → higher bp.",
    "explanation": "Polarity increases attractions between molecules."
  },
  {
    "id": "compounds-48",
    "type": "short-answer",
    "question": "Place in order of increasing boiling point: H2S, H2O, CH4, H2, KBr.",
    "correctAnswer": "H2 < CH4 < H2S < H2O < KBr",
    "explanation": "Boiling point increases with stronger IMF: dispersion < dipole-dipole < H-bonding < ionic lattice."
  }
];

