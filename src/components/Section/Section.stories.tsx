import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Section } from './Section'

const meta: Meta<typeof Section> = {
  title: 'Components/Section',
  component: Section,
  args: {
    title: 'Lorem ipsum dolor',
    children: <p>children</p>
  }
}

export default meta
type Story = StoryObj<typeof Section>

export const Default: Story = {
  name: 'Section',
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('<Container />', () => {
      const container = canvas.getByTestId('container')
      expect(container).toBeVisible()
    })

    await step('Title as <h2>', () => {
      const title = canvas.getByRole('heading', { level: 2 })
      expect(title).toHaveTextContent(args.title)
    })

    await step('Children', () => {
      const children = canvas.getByRole('paragraph')
      expect(children).toHaveTextContent('children')
    })
  }
}
