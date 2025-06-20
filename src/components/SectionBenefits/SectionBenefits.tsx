import { Section } from 'components/Section/Section'
import Image from 'next/image'

export interface SectionBenefitsProps {
  title: string
  benefits: {
    title: string
    description: string
    img: {
      url: string
    }
  }[]
}

export function SectionBenefits({ title, benefits }: SectionBenefitsProps) {
  return (
    <Section data-testid='SectionBenefitsComponent' title={title}>
      <ul className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {benefits.map((benefit, index) => {
          return (
            <li key={index}>
              <div className='relative w-full aspect-video mb-6'>
                <Image
                  src={benefit.img.url}
                  alt=''
                  fill
                  sizes='(max-width: 640px) 288px, (max-width: 768px) 352px, (max-width: 1024px) 224px, 288px'
                />
              </div>
              <h3 className='uppercase font-bold mb-1'>{benefit.title}</h3>
              <p className='font-light'>{benefit.description}</p>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
