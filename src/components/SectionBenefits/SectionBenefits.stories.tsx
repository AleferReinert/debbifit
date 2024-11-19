import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { homeMock } from 'app/page.mock'
import { SectionBenefits } from './SectionBenefits'

const meta: Meta<typeof SectionBenefits> = {
  title: 'Components/SectionBenefits',
  component: SectionBenefits,
  args: {
    ...homeMock.sectionBenefits
  }
}

export default meta
type Story = StoryObj<typeof SectionBenefits>

export const Default: Story = {
  name: 'SectionBenefits',
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Section title', () => {
      const title = canvas.getByRole('heading', { level: 2 })
      expect(title).toHaveTextContent(args.title)
    })

    await step('Images', () => {
      args.benefits.forEach((benefit, index) => {
        const images = document.getElementsByTagName('img')
        expect(images[index].src).toContain(benefit.img.url)
      })
    })

    await step('Titles', () => {
      args.benefits.forEach((benefit, index) => {
        const titles = canvas.getAllByRole('heading', { level: 3 })
        expect(titles[index]).toHaveTextContent(benefit.title)
      })
    })

    await step('Descriptions', () => {
      args.benefits.forEach((benefit, index) => {
        const descriptions = canvas.getAllByRole('paragraph')
        expect(descriptions[index]).toHaveTextContent(benefit.description)
      })
    })
  }
}
