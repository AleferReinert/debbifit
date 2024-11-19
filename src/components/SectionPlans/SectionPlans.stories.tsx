import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { homeMock } from 'app/page.mock'
import { formatPrice } from 'utils/formatPrice'
import { SectionPlans } from './SectionPlans'

const meta: Meta<typeof SectionPlans> = {
  title: 'Components/SectionPlans',
  component: SectionPlans,
  args: {
    ...homeMock.sectionPlans
  }
}

export default meta
type Story = StoryObj<typeof SectionPlans>

export const Default: Story = {
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Section title', () => {
      const title = canvas.getByRole('heading', { level: 2 })
      expect(title).toHaveTextContent(args.title)
    })

    await step('Plans: titles', () => {
      args.plans.forEach((plan, index) => {
        const title = canvas.getAllByRole('heading', { level: 3 })[index]
        expect(title).toHaveTextContent(plan.title)
      })
    })

    // await step('Plans: 2 old prices', () => {
    //   const oldPrices = canvas.getAllByLabelText('Preço antigo sem desconto')
    //   expect(oldPrices.length).toBe(2)
    // })

    await step('Plans: prices formated', () => {
      args.plans.forEach((plan) => {
        const price = canvas.getByText(formatPrice(plan.price, plan.discount))
        expect(price).toBeVisible()
      })
      expect(canvas.getAllByText('/mês').length).toBe(3)
    })

    await step('Plans: 2 descriptions', () => {
      args.plans.forEach((plan) => {
        if (plan.description) {
          const description = canvas.getByText(plan.description)
          expect(description).toBeVisible()
        }
      })
    })

    await step('Plans: 2 discount seals', () => {
      args.plans.forEach((plan) => {
        if (plan.discount) {
          const discount = canvas.getByText(plan.discount + '% OFF')
          expect(discount).toBeVisible()
        }
      })
    })

    await step('Plans: button links', () => {
      args.plans.forEach((plan, index) => {
        const buttonLinks = canvas.getAllByRole('link', { name: /selecionar/i })
        expect(buttonLinks[index]).toHaveAttribute('href', plan.url)
      })
    })
  }
}
export const WithoutDiscount: Story = {
  args: {
    showDiscount: false
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Without discount seals', () => {
      const discounts = canvas.queryAllByText(/% off/i)
      expect(discounts.length).toBe(0)
    })
  }
}
