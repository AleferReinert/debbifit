import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { homeMock } from 'app/page.mock'
import { BannerImages } from './BannerImages'

const meta: Meta<typeof BannerImages> = {
  title: 'Components/BannerImages',
  component: BannerImages,
  args: {
    floatImg: homeMock.banner.floatImg
  }
}

export default meta
type Story = StoryObj<typeof BannerImages>

export const Default: Story = {
  name: 'BannerImages',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Render image', () => {
      waitFor(() => {
        const floatImg = canvas.getByRole('img')
        expect(floatImg).toBeVisible()
      })
    })
  }
}
