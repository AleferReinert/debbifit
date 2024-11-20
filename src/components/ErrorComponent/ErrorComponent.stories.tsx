import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { ErrorComponent } from './ErrorComponent'

const meta: Meta<typeof ErrorComponent> = {
  title: 'Components/ErrorComponent',
  component: ErrorComponent
}

export default meta
type Story = StoryObj<typeof ErrorComponent>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title', () => {
      const title = canvas.getByRole('heading', { level: 1 })
      expect(title).toHaveTextContent('Ops!')
    })

    await step('Children', () => {
      const children = canvas.getByRole('paragraph')
      expect(children).toHaveTextContent('Algo deu errado, volte mais tarde.')
    })

    await step('Link to home', () => {
      const buttonLink = canvas.queryByRole('link', { name: 'Voltar' })
      expect(buttonLink).not.toBeInTheDocument()
    })
  }
}

export const WithButton: Story = {
  args: {
    showButton: true
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Link to home', () => {
      const buttonLink = canvas.getByRole('link', { name: 'Voltar' })
      expect(buttonLink).toHaveAttribute('href', '/')
    })
  }
}
