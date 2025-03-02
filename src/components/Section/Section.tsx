import { Container } from 'components/Container/Container'
import { ComponentProps, ReactNode } from 'react'
import { replacePTagsWithSpanTags } from 'utils/replacePTagsWithSpanTags'

interface SectionProps extends ComponentProps<'section'> {
  title: string
  children: ReactNode
  full?: boolean
}

export function Section({ children, title, full, className, ...rest }: SectionProps) {
  return (
    <section className={`${className} mb-10`} {...rest}>
      <Container>
        <h2
          className='
						text-center text-3xl font-heading font-bold text-white py-10 
						[&_strong]:text-primary-600
						lg:text-4xl lg:py-14
					'
          dangerouslySetInnerHTML={{ __html: replacePTagsWithSpanTags(title) }}
        />
        {!full && children}
      </Container>
      {full && children}
    </section>
  )
}
