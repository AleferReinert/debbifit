import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Loading } from './Loading'

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading
}

export default meta
type Story = StoryObj<typeof Loading>

export const Default: Story = {
  name: 'Loading',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Message', () => {
      const message = canvas.getByRole('paragraph')
      expect(message).toHaveTextContent('Carregando...')
    })
  }
}
