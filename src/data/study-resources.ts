/**
 * STUDY RESOURCES CONFIGURATION
 * 
 * HOW TO ADD LINKS TO A SPECIFIC UNIT:
 * 1. Find the subject and unit combination (e.g., 'precalc-polynomial')
 * 2. Add an array of resource objects with 'title' and 'url'
 * 3. You can add as many links as you want
 * 
 * HOW TO ADD LINKS TO COURSE CHALLENGES:
 * 1. Find the subject (e.g., 'precalc')
 * 2. Add to the 'courseChallenge' object with the same structure
 * 3. You can add as many links as you want
 * 
 * EXAMPLE FORMAT:
 * 'subject-unitId': [
 *   { title: 'Link Name', url: 'https://example.com' },
 *   { title: 'Another Link', url: 'https://another-example.com' },
 * ]
 */

export interface StudyResource {
  title: string;
  url: string;
}

// UNIT-SPECIFIC STUDY RESOURCES
// Format: 'subject-unitId'
export const unitStudyResources: Record<string, StudyResource[]> = {
  // AP Precalculus Units - Example with filler links
  'precalc-polynomial': [],
  'precalc-rational': [],
  'precalc-exponential': [],
  'precalc-logarithmic': [],
  'precalc-trigonometric': [],
  'precalc-polar': [],
  'precalc-parametric': [],
  'precalc-vectorsMatrices': [],

  // Biology Units - Add your own links here
  'biology-biochemistry': [],
  'biology-cellstructure': [],
  'biology-cellenergetics': [],
  'biology-cellgrowth': [],
  'biology-genetics': [],
  'biology-molecular': [],
  'biology-evolution': [],
  'biology-ecology': [],

  // AP Biology Units - Add your own links here
  'apbio-biochemistry': [],
  'apbio-cellstructure': [],
  'apbio-cellenergetics': [],
  'apbio-cellgrowth': [],
  'apbio-genetics': [],
  'apbio-molecular': [],
  'apbio-evolution': [],
  'apbio-ecology': [],

  // Chemistry Units - Add your own links here
  'chemistry-metric': [
    { title: 'Scientific Notation', url: 'https://chemquiz.net/sci/' },
    { title: 'Significant Figures', url: 'https://chemquiz.net/sig/' },
  ],
  'chemistry-atomic': [
    { title: 'Isotopes', url: 'https://chemquiz.net/iso/' },
    { title: 'Average Atomic Mass', url: 'https://chemquiz.net/aam/' },
    { title: 'Electron Configuration', url: 'https://chemquiz.net/ele/' },
  ],
  'chemistry-compounds': [],
  'chemistry-gases': [],
  'chemistry-solutions': [],
  'chemistry-reactions': [],
  'chemistry-stoichiometry': [],
  'chemistry-acidbases': [],

  // AP Chemistry Units - Add your own links here
  'apchem-metric': [],
  'apchem-atomic': [],
  'apchem-compounds': [],
  'apchem-gases': [],
  'apchem-solutions': [],
  'apchem-reactions': [],
  'apchem-stoichiometry': [],
  'apchem-acidbases': [],

  // World History Units - Add your own links here
  'world-history-religions': [],
  'world-history-unit2': [],
  'world-history-unit3': [],
  'world-history-unit4': [],
  'world-history-unit5': [],
  'world-history-unit6': [],
  'world-history-unit7': [],
  'world-history-unit8': [],
  'world-history-unit9': [],
  'world-history-unit10': [],
  'world-history-unit11': [],

  // World History Kohl Units - Add your own links here
  'world-history-kohl-prehistory': [],
  'world-history-kohl-unit2': [],
  'world-history-kohl-unit3': [],
  'world-history-kohl-unit4': [],
  'world-history-kohl-unit5': [],
  'world-history-kohl-unit6': [],
  'world-history-kohl-unit7': [],
  'world-history-kohl-unit8': [],
  'world-history-kohl-unit9': [],
  'world-history-kohl-unit10': [],
  'world-history-kohl-unit11': [],
  'world-history-kohl-unit12': [],
  'world-history-kohl-unit13': [],
  'world-history-kohl-unit14': [],

  // APUSH Units - Add your own links here
  'apush-period1': [
    { title: 'Khan Academy - Period 1', url: 'https://www.khanacademy.org/humanities/ap-us-history/period-1/causation-in-period-1/test/period-1-unit-test' },
    { title: 'High School Test Prep - Period 1', url: 'https://highschooltestprep.com/ap/us-history/practice-test-1/' },
  ],
  'apush-period2': [
    { title: 'Khan Academy - Period 1', url: 'https://www.khanacademy.org/humanities/ap-us-history/period-2/comparison-in-period-2/test/period-2-unit-test' },
    { title: 'High School Test Prep - Period 1', url: 'https://highschooltestprep.com/ap/us-history/practice-test-2/' },
  ],
  'apush-period3': [
    { title: 'Khan Academy - Period 1', url: 'https://www.khanacademy.org/humanities/ap-us-history/period-3/continuity-and-change-in-period-3/test/period-3-unit-test' },
    { title: 'High School Test Prep - Period 1', url: 'https://highschooltestprep.com/ap/us-history/practice-test-3/' },
  ],
  'apush-period4': [
    { title: 'Khan Academy - Period 1', url: 'https://www.khanacademy.org/humanities/ap-us-history/period-4/apush-causation-in-the-period-from-1800-to-1848-lesson/test/period-4-unit-test' },
    { title: 'High School Test Prep - Period 1', url: 'https://highschooltestprep.com/ap/us-history/practice-test-4/' },
  ],
  'apush-period5': [
    { title: 'Khan Academy - Period 1', url: 'https://www.khanacademy.org/humanities/ap-us-history/period-5/apush-comparison-in-the-period-from-1844-to-1877-lesson/test/period-5-unit-test' },
    { title: 'High School Test Prep - Period 1', url: 'https://highschooltestprep.com/ap/us-history/practice-test-5/' },
  ],
  'apush-period6': [
    { title: 'Khan Academy - Period 1', url: 'https://www.khanacademy.org/humanities/ap-us-history/period-6/apush-continuity-and-change-over-time-in-the-period-from-1865-to-1898-lesson/test/period-6-unit-test' },
    { title: 'High School Test Prep - Period 1', url: 'https://highschooltestprep.com/ap/us-history/practice-test-6/' },
  ],
  'apush-period7': [
    { title: 'Khan Academy - Period 1', url: 'https://www.khanacademy.org/humanities/ap-us-history/period-7/apush-comparison-in-the-period-from-1890-to-1945-lesson/test/period-7-unit-test' },
    { title: 'High School Test Prep - Period 1', url: 'https://highschooltestprep.com/ap/us-history/practice-test-7/' },
  ],
  'apush-period8': [
    { title: 'Khan Academy - Period 1', url: 'https://www.khanacademy.org/humanities/ap-us-history/period-8/continuity-and-change-over-time-in-1945-to-1980/test/period-8-unit-test' },
    { title: 'High School Test Prep - Period 1', url: 'https://highschooltestprep.com/ap/us-history/practice-test-8/' },
  ],
  'apush-period9': [
    { title: 'Khan Academy - Period 1', url: 'https://www.khanacademy.org/humanities/ap-us-history/period-9/apush-causation-in-the-period-from-1980-to-present-lesson/test/period-9-unit-test' },
    { title: 'High School Test Prep - Period 1', url: 'https://highschooltestprep.com/ap/us-history/practice-test-9/' },
  ],

  // Add more units as needed...
};

// COURSE CHALLENGE STUDY RESOURCES
// Format: 'subject'
export const courseChallengeResources: Record<string, StudyResource[]> = {
  // Example with filler links
  'precalc': [],
  'biology': [],
  'apbio': [],
  'chemistry': [
    { title: 'ChemQuiz', url: 'https://chemquiz.net/quizzes/' },
  ],
  'apchem': [],
  'world-history': [],
  'world-history-kohl': [],
  'apush': [
    { title: 'Khan Academy - Period 1', url: 'https://www.khanacademy.org/humanities/ap-us-history/' },
    { title: 'High School Test Prep - Period 1', url: 'https://highschooltestprep.com/ap/us-history/' },
  ],
  
  // Add more subjects as needed...
};
