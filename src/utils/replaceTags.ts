// Substitui tags html por outra
// replaceTags({ text: '<p>Lorem ipsum.</p>', tagsToReplace: ['p'], replaceBy: 'span' })

interface ReplaceTagsProps {
  text: string
  tagsToReplace: string[]
  replaceBy: string
}

export function replaceTags({ text, tagsToReplace, replaceBy }: ReplaceTagsProps): string {
  const tagsPattern = tagsToReplace.map((tag) => `<${tag}>|</${tag}>`).join('|')
  const regex = new RegExp(tagsPattern, 'gi')

  return text.replace(regex, (match) => (match.startsWith('</') ? `</${replaceBy}>` : `<${replaceBy}>`))
}
