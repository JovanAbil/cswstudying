import { CustomUnit, CustomTopic } from '@/hooks/useCustomUnits';
import { Question } from '@/types/quiz';
import JSZip from 'jszip';

// Convert name to a safe filename/variable name
const toSafeName = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};

// Convert name to a valid JS variable name
const toVariableName = (name: string): string => {
  const safe = toSafeName(name);
  // Ensure it starts with a letter
  if (/^[0-9]/.test(safe)) {
    return 'q' + safe.replace(/-/g, '');
  }
  return safe.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
};

// Generate TypeScript content for a topic
export const generateTopicFileContent = (topic: CustomTopic, unitName: string): string => {
  const variableName = `${toVariableName(topic.name)}Questions`;
  const topicPrefix = toSafeName(topic.name);
  
  const questionsWithIds = topic.questions.map((q, index) => {
    const newId = `${topicPrefix}-${index + 1}`;
    return { ...q, id: newId };
  });

  const formatQuestion = (q: Question, indent: string): string => {
    const lines: string[] = [];
    lines.push(`${indent}{`);
    lines.push(`${indent}  id: "${q.id}",`);
    lines.push(`${indent}  type: "${q.type}",`);
    lines.push(`${indent}  question: ${JSON.stringify(q.question)},`);
    
    if (q.type === 'multiple-choice' && q.options) {
      lines.push(`${indent}  options: ${JSON.stringify(q.options)},`);
    }
    
    lines.push(`${indent}  correctAnswer: ${JSON.stringify(q.correctAnswer)},`);
    lines.push(`${indent}  explanation: ${JSON.stringify(q.explanation || '')},`);
    
    if (q.image) {
      // For base64 images, we'll note they need to be moved to public folder
      if (q.image.startsWith('data:')) {
        lines.push(`${indent}  // Note: Base64 image was embedded - move to public folder and update path`);
        lines.push(`${indent}  image: "/images/${toSafeName(unitName)}/${topicPrefix}-${q.id}.png",`);
      } else {
        lines.push(`${indent}  image: ${JSON.stringify(q.image)},`);
      }
    }
    
    lines.push(`${indent}},`);
    return lines.join('\n');
  };

  const content = `import { Question } from '@/types/quiz';

// Topic: ${topic.name}
// Math Enabled: ${topic.mathEnabled}
// Questions: ${topic.questions.length}

export const ${variableName}: Question[] = [
${questionsWithIds.map(q => formatQuestion(q, '  ')).join('\n')}
];
`;

  return content;
};

// Generate metadata file for a unit
export const generateUnitMetadata = (unit: CustomUnit): string => {
  return `// Unit: ${unit.name}
// Topics: ${unit.topics.length}
// Total Questions: ${unit.topics.reduce((sum, t) => sum + t.questions.length, 0)}

export const unitMetadata = {
  name: ${JSON.stringify(unit.name)},
  topics: [
${unit.topics.map(t => `    {
      name: ${JSON.stringify(t.name)},
      file: "./${toSafeName(t.name)}-questions.ts",
      mathEnabled: ${t.mathEnabled},
      questionCount: ${t.questions.length},
    },`).join('\n')}
  ],
};
`;
};

// Download a single topic as .ts file
export const downloadTopic = (topic: CustomTopic, unitName: string) => {
  const content = generateTopicFileContent(topic, unitName);
  const filename = `${toSafeName(topic.name)}-questions.ts`;
  
  const blob = new Blob([content], { type: 'text/typescript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

// Download entire unit as a zip folder
export const downloadUnit = async (unit: CustomUnit) => {
  const zip = new JSZip();
  const folderName = toSafeName(unit.name);
  const folder = zip.folder(folderName);
  
  if (!folder) return;
  
  // Add metadata file
  folder.file('index.ts', generateUnitMetadata(unit));
  
  // Add each topic file
  for (const topic of unit.topics) {
    const content = generateTopicFileContent(topic, unit.name);
    const filename = `${toSafeName(topic.name)}-questions.ts`;
    folder.file(filename, content);
  }
  
  // Generate and download zip
  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${folderName}.zip`;
  a.click();
  URL.revokeObjectURL(url);
};

// Parse uploaded .ts file content to extract questions
export const parseTopicFile = (content: string): { questions: Question[], mathEnabled: boolean } | null => {
  try {
    // Extract math enabled from comment
    const mathMatch = content.match(/Math Enabled:\s*(true|false)/i);
    const mathEnabled = mathMatch ? mathMatch[1].toLowerCase() === 'true' : false;
    
    // Find the array content between [ and ]
    const arrayMatch = content.match(/:\s*Question\[\]\s*=\s*\[([\s\S]*)\];?\s*$/);
    if (!arrayMatch) return null;
    
    const arrayContent = arrayMatch[1];
    
    // Parse questions using a more robust approach
    const questions: Question[] = [];
    
    // Match individual question objects
    const questionRegex = /\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/g;
    const matches = arrayContent.match(questionRegex);
    
    if (!matches) return { questions: [], mathEnabled };
    
    for (const match of matches) {
      try {
        // Convert to valid JSON-like format
        let jsonStr = match
          .replace(/(\w+):/g, '"$1":') // Quote keys
          .replace(/,\s*}/g, '}') // Remove trailing commas
          .replace(/,\s*]/g, ']'); // Remove trailing commas in arrays
        
        // Handle string values that might have quotes
        // This is a simplified parser - for real use, you'd want a proper TS parser
        const question = JSON.parse(jsonStr) as Question;
        questions.push(question);
      } catch {
        // Try alternative parsing
        const idMatch = match.match(/id:\s*["']([^"']+)["']/);
        const typeMatch = match.match(/type:\s*["']([^"']+)["']/);
        const questionMatch = match.match(/question:\s*["'](.+?)["'],\s*(?:options|correctAnswer)/s);
        const correctMatch = match.match(/correctAnswer:\s*["'](.+?)["'],\s*(?:explanation|image|\})/s);
        const explanationMatch = match.match(/explanation:\s*["'](.+?)["']/s);
        const imageMatch = match.match(/image:\s*["']([^"']+)["']/);
        
        if (idMatch && typeMatch && questionMatch && correctMatch) {
          const type = typeMatch[1] as 'multiple-choice' | 'free-response';
          
          if (type === 'free-response') {
            const q: Question = {
              id: idMatch[1],
              type: 'free-response',
              question: questionMatch[1],
              correctAnswer: correctMatch[1],
              explanation: explanationMatch ? explanationMatch[1] : '',
            };
            if (imageMatch) {
              q.image = imageMatch[1];
            }
            questions.push(q);
          } else {
            // Extract options for MCQ
            const optionsMatch = match.match(/options:\s*\[([\s\S]*?)\]/);
            const options: { label: string; value: string; text: string; image?: string }[] = [];
            
            if (optionsMatch) {
              const optionObjRegex = /\{[^{}]+\}/g;
              const optionMatches = optionsMatch[1].match(optionObjRegex);
              if (optionMatches) {
                for (const optMatch of optionMatches) {
                  const labelM = optMatch.match(/label:\s*["']([^"']*)["']/);
                  const valueM = optMatch.match(/value:\s*["']([^"']*)["']/);
                  const textM = optMatch.match(/text:\s*["']([^"']*)["']/);
                  const imgM = optMatch.match(/image:\s*["']([^"']*)["']/);
                  if (labelM && valueM && textM) {
                    options.push({
                      label: labelM[1],
                      value: valueM[1],
                      text: textM[1],
                      ...(imgM ? { image: imgM[1] } : {}),
                    });
                  }
                }
              }
            }
            
            const q: Question = {
              id: idMatch[1],
              type: 'multiple-choice',
              question: questionMatch[1],
              options,
              correctAnswer: correctMatch[1],
              explanation: explanationMatch ? explanationMatch[1] : '',
            };
            if (imageMatch) {
              q.image = imageMatch[1];
            }
            questions.push(q);
          }
        }
      }
    }
    
    return { questions, mathEnabled };
  } catch (error) {
    console.error('Failed to parse topic file:', error);
    return null;
  }
};

// Parse unit metadata file
export const parseUnitMetadata = (content: string): { name: string; topics: { name: string; file: string; mathEnabled: boolean }[] } | null => {
  try {
    const nameMatch = content.match(/name:\s*["']([^"']+)["']/);
    if (!nameMatch) return null;
    
    const topicsMatch = content.match(/topics:\s*\[([\s\S]*?)\]/);
    if (!topicsMatch) return { name: nameMatch[1], topics: [] };
    
    const topics: { name: string; file: string; mathEnabled: boolean }[] = [];
    const topicRegex = /\{[^{}]+\}/g;
    const topicMatches = topicsMatch[1].match(topicRegex);
    
    if (topicMatches) {
      for (const match of topicMatches) {
        const tNameMatch = match.match(/name:\s*["']([^"']+)["']/);
        const tFileMatch = match.match(/file:\s*["']([^"']+)["']/);
        const tMathMatch = match.match(/mathEnabled:\s*(true|false)/);
        
        if (tNameMatch && tFileMatch) {
          topics.push({
            name: tNameMatch[1],
            file: tFileMatch[1],
            mathEnabled: tMathMatch ? tMathMatch[1] === 'true' : false,
          });
        }
      }
    }
    
    return { name: nameMatch[1], topics };
  } catch (error) {
    console.error('Failed to parse unit metadata:', error);
    return null;
  }
};
