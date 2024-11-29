import { Container } from 'components/Container/Container'
import { ReactNode } from 'react'
import { replacePTagsWithSpanTags } from 'utils/replacePTagsWithSpanTags'

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
          dangerouslySetInnerHTML={{ __html: replacePTagsWithSpanTags(title) }}
        />
        {children}
      </Container>
    </section>
  )
}
