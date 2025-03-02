import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { homeMock } from '../../app/page.mock'
import { SectionAbout } from './SectionAbout'
const meta: Meta<typeof SectionAbout> = {
  title: 'Components/SectionAbout',
  component: SectionAbout,
  args: {
    ...homeMock.sectionAbout
  }
}

export default meta
type Story = StoryObj<typeof SectionAbout>

export const Default: Story = {
  name: 'SectionAbout',
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: args.title })

    await step('Heading', () => {
      expect(title).toBeVisible()
    })

    await step('Description with HTML tags', () => {
      const description = canvas.getByRole('paragraph')
      expect(description).toContainHTML(args.description)
    })
  }
}
