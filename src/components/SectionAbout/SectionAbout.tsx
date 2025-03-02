import { Section } from 'components/Section/Section'

export interface SectionAboutProps {
  title: string
  description: string
}

export function SectionAbout({ title, description }: SectionAboutProps) {
  return (
    <Section title={title}>
      <div className='max-w-4xl mx-auto text-center font-light italic'>
        <div className='space-y-2' dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </Section>
  )
}
