/**
 * Convierte ==texto== en <mark>texto</mark> dentro de cualquier Markdown.
 *
 * Existe para que el resaltado celeste se escriba igual que la negrita: en el
 * .md, sin tocar componentes. Sin dependencias: recorre el arbol a mano.
 */
const DELIM = '==';

function splitTextNode(value) {
  const parts = [];
  let rest = value;

  while (true) {
    const open = rest.indexOf(DELIM);
    if (open === -1) break;
    const close = rest.indexOf(DELIM, open + DELIM.length);
    if (close === -1) break;

    if (open > 0) parts.push({ type: 'text', value: rest.slice(0, open) });
    parts.push({
      type: 'html',
      value: '<mark>' + rest.slice(open + DELIM.length, close) + '</mark>',
    });
    rest = rest.slice(close + DELIM.length);
  }

  if (parts.length === 0) return null;
  if (rest) parts.push({ type: 'text', value: rest });
  return parts;
}

function walk(node) {
  if (!node || !Array.isArray(node.children)) return;

  const out = [];
  for (const child of node.children) {
    if (child.type === 'text') {
      const parts = splitTextNode(child.value);
      if (parts) {
        out.push(...parts);
        continue;
      }
    } else {
      walk(child);
    }
    out.push(child);
  }
  node.children = out;
}

export function remarkMark() {
  return (tree) => walk(tree);
}
