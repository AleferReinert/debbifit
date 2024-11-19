import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  args: {
    children: <p>children</p>
  }
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
  name: 'Container',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Children', () => {
      const children = canvas.getByRole('paragraph')
      expect(children).toHaveTextContent('children')
    })
  }
}
