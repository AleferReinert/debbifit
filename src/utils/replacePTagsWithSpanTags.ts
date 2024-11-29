// Substitui todas tags <p> de um texto por <span>
export function replacePTagsWithSpanTags(input: string): string {
  return input.replace(/p>/g, 'span>')
}
