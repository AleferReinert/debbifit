import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { SectionAbout } from './SectionAbout'

const meta: Meta<typeof SectionAbout> = {
  title: 'Components/SectionAbout',
  component: SectionAbout,
  args: {
    title: 'heading',
    description: '<p>Lorem ipsum dolor sit amet.</p>'
  }
}

export default meta
type Story = StoryObj<typeof SectionAbout>

export const Default: Story = {
  name: 'SectionAbout',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: 'heading' })

    await step('Heading', () => {
      expect(title).toBeVisible()
    })

    await step('Description with HTML tags', () => {
      const description = canvas.getByRole('paragraph')
      expect(description).toHaveTextContent('Lorem ipsum dolor sit amet.')
    })
  }
}
