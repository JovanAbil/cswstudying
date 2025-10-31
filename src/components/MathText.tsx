import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import 'katex/dist/contrib/mhchem.js'; // ✅ enables \ce{} chemistry support

interface MathTextProps {
  children: string | number;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

// 🔧 Convert math and chemistry notation into KaTeX LaTeX
const preprocessMath = (text: string): string => {
  let processed = String(text);
  const latexBlocks: string[] = [];

  // Protect already-LaTeX content
  processed = processed.replace(/\$\$[\s\S]*?\$\$|\$[^$]*?\$/g, (match) => {
    latexBlocks.push(match);
    return `__LATEX_${latexBlocks.length - 1}__`;
  });

  // 🧪 Convert chemical formulas to mhchem LaTeX: SO4²⁻ → $\ce{SO4^2-}$
  processed = processed.replace(
    /\b([A-Z][a-z]?\d*(?:\([A-Za-z0-9]+\)\d*)*(?:[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻^0-9+\-]*)?)\b/g,
    (match) => {
      // Skip plain words (e.g., "This", "Some")
      if (/^[A-Z][a-z]+$/.test(match)) return match;
      if (!/[0-9⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻()]/.test(match)) return match;

      const superscriptMap: Record<string, string> = {
        '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
        '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
        '⁺': '+', '⁻': '-'
      };

      const normalized = match
        .split('')
        .map((c) => superscriptMap[c] ?? c)
        .join('')
        .replace(/\s+/g, '');

      const formula = `$\\ce{${normalized}}$`;
      latexBlocks.push(formula);
      return `__LATEX_${latexBlocks.length - 1}__`;
    }
  );

  // ➕ Convert limit notation: lim_x-->a → \lim_{x \to a}
  processed = processed.replace(/lim_([a-zA-Z])-->(-?∞|infinity|[^\s]+)/gi, (match, variable, approach) => {
    let approachValue = approach;
    if (approach.toLowerCase() === 'infinity') approachValue = '\\infty';
    else if (approach === '∞') approachValue = '\\infty';
    else if (approach === '-∞') approachValue = '-\\infty';
    const limit = `$\\lim_{${variable} \\to ${approachValue}}$`;
    latexBlocks.push(limit);
    return `__LATEX_${latexBlocks.length - 1}__`;
  });

  // ➗ Convert fractions: (ax+b)/(dx+e) → \frac{ax+b}{dx+e}
  processed = processed.replace(
    /\(([^()]+(?:\([^()]*\))*[^()]*)\)\/\(([^()]+(?:\([^()]*\))*[^()]*)\)/g,
    (match, numerator, denominator) => {
      const frac = `$\\frac{${numerator}}{${denominator}}$`;
      latexBlocks.push(frac);
      return `__LATEX_${latexBlocks.length - 1}__`;
    }
  );

  // 🔢 Superscripts: x^2 → x^{2}
  processed = processed.replace(
    /([a-zA-Z0-9)}\]])\^([a-zA-Z0-9({\[]+|\([^)]+\))/g,
    (match, base, exp) => `$${base}^{${exp}}$`
  );

  // 🧮 Logarithmic functions
  ['log', 'ln'].forEach(func => {
    const regex = new RegExp(`\\b${func}\\s*\\(`, 'gi');
    processed = processed.replace(regex, `$\\${func}($`);
  });

  // Restore LaTeX blocks
  latexBlocks.forEach((block, i) => {
    processed = processed.replace(`__LATEX_${i}__`, block);
  });

  return processed;
};

const MathText = ({ children, className = '', tag = 'span' }: MathTextProps) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const processed = preprocessMath(String(children));

    // Split into text vs math parts
    const parts = processed.split(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$)/);
    containerRef.current.innerHTML = '';

    parts.forEach(part => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const span = document.createElement('span');
        span.className = 'math-display';
        try {
          katex.render(part.slice(2, -2), span, {
            displayMode: true,
            throwOnError: false,
            strict: false,
          });
        } catch {
          span.textContent = part;
        }
        containerRef.current.appendChild(span);
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const span = document.createElement('span');
        span.className = 'math-inline';
        try {
          katex.render(part.slice(1, -1), span, {
            displayMode: false,
            throwOnError: false,
            strict: false,
          });
        } catch {
          span.textContent = part;
        }
        containerRef.current.appendChild(span);
      } else if (part) {
        containerRef.current.appendChild(document.createTextNode(part));
      }
    });
  }, [children]);

  const Tag = tag as any;
  return <Tag ref={containerRef} className={className} />;
};

export default MathText;
