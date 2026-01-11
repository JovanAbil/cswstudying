import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

interface MathQuickInputProps {
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
  inputRef?: React.RefObject<HTMLInputElement>;
  value: string;
  onChange: (value: string) => void;
}

const symbols = [
  { label: '∞', latex: '\\infty', tooltip: 'Infinity' },
  { label: 'π', latex: '\\pi', tooltip: 'Pi' },
  { label: '°', latex: '^\\circ', tooltip: 'Degrees' },
  { label: '≤', latex: '\\leq', tooltip: 'Less than or equal' },
  { label: '≥', latex: '\\geq', tooltip: 'Greater than or equal' },
  { label: '≠', latex: '\\neq', tooltip: 'Not equal' },
  { label: '±', latex: '\\pm', tooltip: 'Plus/Minus' },
  { label: '×', latex: '\\times', tooltip: 'Multiply' },
  { label: '÷', latex: '\\div', tooltip: 'Divide' },
  { label: '→', latex: '\\to', tooltip: 'Arrow (approaches)' },
  { label: '∈', latex: '\\in', tooltip: 'Element of' },
  { label: '∪', latex: '\\cup', tooltip: 'Union' },
  { label: '∩', latex: '\\cap', tooltip: 'Intersection' },
  { label: 'θ', latex: '\\theta', tooltip: 'Theta' },
  { label: 'α', latex: '\\alpha', tooltip: 'Alpha' },
  { label: 'β', latex: '\\beta', tooltip: 'Beta' },
  { label: 'Δ', latex: '\\Delta', tooltip: 'Delta' },
  { label: 'Σ', latex: '\\sum', tooltip: 'Summation' },
  { label: '∫', latex: '\\int', tooltip: 'Integral' },
];

const mathFunctions = [
  { label: '√', latex: '\\sqrt{}', cursorOffset: -1, tooltip: 'Square root (type sqrt)' },
  { label: '∛', latex: '\\sqrt[3]{}', cursorOffset: -1, tooltip: 'Cube root (type cbrt)' },
  { label: 'ⁿ√', latex: '\\sqrt[n]{}', cursorOffset: -1, tooltip: 'Nth root (type nrt)' },
  { label: 'x²', latex: '^{2}', cursorOffset: 0, tooltip: 'Superscript (press ^)' },
  { label: 'xₙ', latex: '_{}', cursorOffset: -1, tooltip: 'Subscript (press _)' },
  { label: 'a/b', latex: '\\frac{}{}', cursorOffset: -3, tooltip: 'Fraction (type /)' },
  { label: 'lim', latex: '\\lim_{x \\to }', cursorOffset: 0, tooltip: 'Limit (type lim)' },
  { label: 'log', latex: '\\log_{}', cursorOffset: -1, tooltip: 'Logarithm (type log)' },
  { label: 'ln', latex: '\\ln', cursorOffset: 0, tooltip: 'Natural log (type ln)' },
  { label: 'sin', latex: '\\sin', cursorOffset: 0, tooltip: 'Sine' },
  { label: 'cos', latex: '\\cos', cursorOffset: 0, tooltip: 'Cosine' },
  { label: 'tan', latex: '\\tan', cursorOffset: 0, tooltip: 'Tangent' },
  { label: 'sin⁻¹', latex: '\\sin^{-1}', cursorOffset: 0, tooltip: 'Inverse sine' },
  { label: 'cos⁻¹', latex: '\\cos^{-1}', cursorOffset: 0, tooltip: 'Inverse cosine' },
  { label: 'tan⁻¹', latex: '\\tan^{-1}', cursorOffset: 0, tooltip: 'Inverse tangent' },
  { label: '|x|', latex: '|x|', cursorOffset: -1, tooltip: 'Absolute value' },
  { label: 'eˣ', latex: 'e^{}', cursorOffset: -1, tooltip: 'Exponential (type exp)' },
];

// Desmos-like keyboard shortcuts
const keyboardShortcuts: { pattern: RegExp; replacement: string; cursorOffset: number }[] = [
  // Shortcuts that trigger on specific patterns
  { pattern: /sqrt$/i, replacement: '\\sqrt{}', cursorOffset: -1 },
  { pattern: /cbrt$/i, replacement: '\\sqrt[3]{}', cursorOffset: -1 },
  { pattern: /nrt$/i, replacement: '\\sqrt[n]{}', cursorOffset: -4 },
  { pattern: /lim$/i, replacement: '\\lim_{x \\to }', cursorOffset: 0 },
  { pattern: /log$/i, replacement: '\\log_{}', cursorOffset: -1 },
  { pattern: /ln$/i, replacement: '\\ln()', cursorOffset: -1 },
  { pattern: /exp$/i, replacement: 'e^{}', cursorOffset: -1 },
  { pattern: /inf$/i, replacement: '\\infty', cursorOffset: 0 },
  { pattern: /pi$/i, replacement: '\\pi', cursorOffset: 0 },
  { pattern: /theta$/i, replacement: '\\theta', cursorOffset: 0 },
  { pattern: /alpha$/i, replacement: '\\alpha', cursorOffset: 0 },
  { pattern: /beta$/i, replacement: '\\beta', cursorOffset: 0 },
  { pattern: /delta$/i, replacement: '\\Delta', cursorOffset: 0 },
  { pattern: /sum$/i, replacement: '\\sum_{}^{}', cursorOffset: -4 },
  { pattern: /int$/i, replacement: '\\int_{}^{}', cursorOffset: -4 },
  { pattern: /pm$/i, replacement: '\\pm', cursorOffset: 0 },
  { pattern: /neq$/i, replacement: '\\neq', cursorOffset: 0 },
  { pattern: /leq$/i, replacement: '\\leq', cursorOffset: 0 },
  { pattern: /geq$/i, replacement: '\\geq', cursorOffset: 0 },
  { pattern: /->$/i, replacement: '\\to', cursorOffset: 0 },
];

const MathQuickInput = ({ textareaRef, inputRef, value, onChange }: MathQuickInputProps) => {
  // Support both textarea and input elements
  const getElement = () => textareaRef?.current || inputRef?.current;

  const insertAtCursor = (latex: string, cursorOffset: number = 0) => {
    const element = getElement();
    if (!element) return;

    const start = element.selectionStart || 0;
    const end = element.selectionEnd || 0;
    const newValue = value.substring(0, start) + latex + value.substring(end);
    onChange(newValue);

    // Set cursor position after insert
    setTimeout(() => {
      const newPos = start + latex.length + cursorOffset;
      element.setSelectionRange(newPos, newPos);
      element.focus();
    }, 0);
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const element = getElement();
    if (!element) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const cursorPos = element.selectionStart || 0;
      const textBeforeCursor = value.substring(0, cursorPos);

      // Check for special key shortcuts
      if (e.key === '_') {
        e.preventDefault();
        insertAtCursor('_{}', -1);
        return;
      }

      if (e.key === '^') {
        e.preventDefault();
        insertAtCursor('^{}', -1);
        return;
      }

      if (e.key === '/') {
        // Only trigger fraction if not in a URL or path context
        const lastWord = textBeforeCursor.split(/\s/).pop() || '';
        if (!lastWord.includes(':') && !lastWord.includes('.')) {
          e.preventDefault();
          insertAtCursor('\\frac{}{}', -3);
          return;
        }
      }

      // Check for word-based shortcuts on space
      if (e.key === ' ') {
        for (const shortcut of keyboardShortcuts) {
          if (shortcut.pattern.test(textBeforeCursor)) {
            e.preventDefault();
            const match = textBeforeCursor.match(shortcut.pattern);
            if (match) {
              const matchStart = cursorPos - match[0].length;
              const newValue = 
                value.substring(0, matchStart) + 
                shortcut.replacement + 
                value.substring(cursorPos);
              onChange(newValue);
              
              setTimeout(() => {
                const newPos = matchStart + shortcut.replacement.length + shortcut.cursorOffset;
                element.setSelectionRange(newPos, newPos);
                element.focus();
              }, 0);
            }
            return;
          }
        }
      }
    };

    element.addEventListener('keydown', handleKeyDown);
    return () => element.removeEventListener('keydown', handleKeyDown);
  }, [value, onChange, textareaRef, inputRef]);

  return (
    <TooltipProvider>
      <div className="mt-2 p-3 bg-muted/50 rounded-lg border space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="font-medium">Quick Math:</span>
          <span>Type shortcuts like <code className="px-1 bg-muted rounded">sqrt</code>, <code className="px-1 bg-muted rounded">lim</code>, <code className="px-1 bg-muted rounded">log</code> + Space</span>
        </div>

        {/* Symbols row */}
        <div className="space-y-1.5">
          <span className="text-xs font-medium text-muted-foreground">Symbols</span>
          <div className="flex flex-wrap gap-1">
            {symbols.map((sym) => (
              <Tooltip key={sym.label}>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0 text-base font-normal"
                    onClick={() => insertAtCursor(sym.latex)}
                  >
                    {sym.label}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{sym.tooltip}</p>
                  <code className="text-xs text-muted-foreground">{sym.latex}</code>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Math functions row */}
        <div className="space-y-1.5">
          <span className="text-xs font-medium text-muted-foreground">Functions</span>
          <div className="flex flex-wrap gap-1">
            {mathFunctions.map((func) => (
              <Tooltip key={func.label}>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 px-2 text-sm font-normal"
                    onClick={() => insertAtCursor(func.latex, func.cursorOffset)}
                  >
                    {func.label}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{func.tooltip}</p>
                  <code className="text-xs text-muted-foreground">{func.latex}</code>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        <div className="text-xs text-muted-foreground space-y-0.5">
          <p><kbd className="px-1 bg-muted rounded">^</kbd> for superscript, <kbd className="px-1 bg-muted rounded">_</kbd> for subscript, <kbd className="px-1 bg-muted rounded">/</kbd> for fraction</p>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default MathQuickInput;
