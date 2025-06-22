import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { bannerMock } from 'app/page.mock'
import { ButtonLink } from './ButtonLink'

const meta: Meta<typeof ButtonLink> = {
  title: 'Components/ButtonLink',
  component: ButtonLink,
  args: {
    children: bannerMock.label,
    href: bannerMock.url
  },
  parameters: {
    layout: 'padded'
  }
}

export default meta
type Story = StoryObj<typeof ButtonLink>

export const Default: Story = {
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Default styles', () => {
      const buttonLink = canvas.getByRole('link')
      expect(buttonLink).toHaveAttribute('href', args.href)
      expect(buttonLink).toContainHTML(`${args.children}`)
      expect(buttonLink).not.toHaveClass('text-sm')
      expect(buttonLink).toHaveClass('h-14')
    })
  }
}

export const Small: Story = {
  args: {
    size: 'sm'
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Small styles', () => {
      const buttonLink = canvas.getByRole('link')
      expect(buttonLink).toHaveClass('text-sm h-12')
    })
  }
}
