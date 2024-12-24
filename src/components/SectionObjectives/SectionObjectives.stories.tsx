import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { homeMock } from 'app/page.mock'
import { SectionObjectives } from './SectionObjectives'

const meta: Meta<typeof SectionObjectives> = {
  title: 'Components/SectionObjectives',
  component: SectionObjectives,
  args: {
    ...homeMock.sectionObjectives
  }
}

export default meta
type Story = StoryObj<typeof SectionObjectives>

export const Default: Story = {
  name: 'SectionObjectives',
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Section title', () => {
      const title = canvas.getByRole('heading', { level: 2 })
      expect(title).toHaveTextContent(args.title)
    })

    await step('Objectives list', () => {
      args.objectives.forEach((benefit) => {
        expect(canvas.getByText(benefit.objective)).toBeInTheDocument()
      })
    })
  }
}
