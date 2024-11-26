import { Container } from 'components/Container/Container'
import parse from 'html-react-parser'
import { ReactNode } from 'react'
import { replaceTags } from 'utils/replaceTags'

interface SectionProps {
  title: string
  children: ReactNode
}

export function Section({ children, title }: SectionProps) {
  return (
    <section className='mb-10'>
      <Container>
        <h2
          className='
						text-center text-3xl font-heading font-bold text-white py-10 
						[&_strong]:text-primary-600
						lg:text-4xl lg:py-14
					'
        >
          {parse(replaceTags({ text: title, tagsToReplace: ['p'], replaceBy: 'span' }))}
        </h2>
        {children}
      </Container>
    </section>
  )
}
