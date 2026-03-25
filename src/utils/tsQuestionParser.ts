import { Question } from '@/types/quiz';

/**
 * Parses a .ts question file and extracts the Question[] array.
 * 
 * Expected format: a file exporting an array of question objects, e.g.:
 *   export const myQuestions: Question[] = [ { id: '...', ... }, ... ];
 * 
 * The parser strips TypeScript-specific syntax (imports, type annotations, `as const`)
 * and evaluates the array content using `new Function()`.
 */
export function parseTsQuestionFile(fileContent: string): { questions: Question[]; error?: string } {
  try {
    // Remove import statements
    let cleaned = fileContent.replace(/^import\s+.*?;?\s*$/gm, '');

    // Remove `export const varName: Type[] =` prefix, keeping just the array
    // Handles patterns like: export const fooQuestions: Question[] = [
    cleaned = cleaned.replace(
      /export\s+(const|let|var)\s+\w+\s*:\s*\w+(\[])?\s*=\s*/g,
      ''
    );

    // Also handle `export default` 
    cleaned = cleaned.replace(/export\s+default\s+/g, '');

    // Remove trailing semicolons after the array
    cleaned = cleaned.trim().replace(/;\s*$/, '');

    // Remove `as const` annotations
    cleaned = cleaned.replace(/\s+as\s+const/g, '');

    // Find the outermost array brackets
    const firstBracket = cleaned.indexOf('[');
    const lastBracket = cleaned.lastIndexOf(']');

    if (firstBracket === -1 || lastBracket === -1 || lastBracket <= firstBracket) {
      return { questions: [], error: 'Could not find a question array in the file. Make sure the file exports an array of questions.' };
    }

    const arrayContent = cleaned.substring(firstBracket, lastBracket + 1);

    // Use Function constructor to evaluate the array (safer than eval, same-origin content)
    // eslint-disable-next-line no-new-func
    const parsed = new Function(`return ${arrayContent}`)();

    if (!Array.isArray(parsed)) {
      return { questions: [], error: 'The file did not contain a valid array.' };
    }

    // Validate each question has minimum required fields
    const validQuestions: Question[] = [];
    const issues: string[] = [];

    parsed.forEach((item: any, index: number) => {
      if (!item.id || !item.type || !item.question) {
        issues.push(`Item ${index + 1} is missing required fields (id, type, question)`);
        return;
      }

      // Prefix uploaded question IDs to avoid collisions
      const q = { ...item, id: `uploaded-${item.id}` };
      validQuestions.push(q as Question);
    });

    if (validQuestions.length === 0) {
      return {
        questions: [],
        error: issues.length > 0
          ? `No valid questions found. Issues:\n${issues.join('\n')}`
          : 'No questions found in the file.',
      };
    }

    return { questions: validQuestions };
  } catch (err) {
    return {
      questions: [],
      error: `Failed to parse the file: ${err instanceof Error ? err.message : 'Unknown error'}. Make sure it follows the standard question format.`,
    };
  }
}
