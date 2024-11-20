import { ButtonLink } from 'components/ButtonLink/ButtonLink'
import { Section } from 'components/Section/Section'
import { formatPrice } from 'utils/formatPrice'

export interface SectionPlansProps {
  title: string
  showDiscount: boolean
  plans: {
    title: string
    price: number
    url: string
    description: string | null
    discount: number | null
  }[]
}

export function SectionPlans({ title, showDiscount, plans }: SectionPlansProps) {
  return (
    <Section data-testid='SectionPlansComponent' title={title}>
      <ul className='grid gap-8 md:grid-cols-3 md:gap-8'>
        {plans.map((plan, index) => {
          const discountSeal = plan.discount + '% OFF'
          const description = plan.description ? plan.description : ''

          return (
            <li key={index} className='border-2 border-primary-600 rounded-xl text-center p-8 relative'>
              <h3 className='text-2xl font-bold mb-6 uppercase md:px-3 lg:px-0'>{plan.title}</h3>
              {/* <div className='mb-1 md:h-8'>
                {plan.discount && (
                  <p aria-label='Preço antigo sem desconto' className='line-through text-2xl text-neutral-400'>
                    {formatPrice(plan.price, null)}
                  </p>
                )}
              </div> */}
              <p aria-label='Preço atual' className='text-5xl font-black mb-6'>
                {formatPrice(plan.price, plan.discount)}
                <span className='text-xl font-light'> /mês</span>
              </p>
              {plan.discount && showDiscount && (
                <p className='absolute bg-white text-black inline-block -top-4 left-0 ml-[50%] translate-x-[-50%] rounded-lg py-2 px-3 text-sm'>
                  {discountSeal}
                </p>
              )}
              <p className='uppercase md:h-6 mb-8 text-sm'>{description}</p>
              <ButtonLink href={plan.url}>Selecionar</ButtonLink>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
