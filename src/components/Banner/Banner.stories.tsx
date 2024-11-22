import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { homeMock } from 'app/page.mock'
import { theme } from '../../../tailwind.config'
import { Banner } from './Banner'

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  args: {
    ...homeMock.banner
  }
}

export default meta
type Story = StoryObj<typeof Banner>

export const Default: Story = {
  name: 'Banner',
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Title', () => {
      const title = canvas.getByRole('heading', { level: 1 })
      const italic = document.querySelector('h1>i')
      const strong = document.querySelector('h1>strong')

      expect(title).toContainHTML(args.title)
      expect(italic).toHaveStyle('font-family: Merienda, cursive')
      expect(strong).toHaveStyle({ color: theme.primary[600] })
    })

    await step('Description', () => {
      const description = canvas.getByTestId('banner-description')
      expect(description).toContainHTML(args.description)
    })

    await step('Button link', () => {
      const buttonLink = canvas.getByRole('link')
      expect(buttonLink).toHaveTextContent(args.label)
      expect(buttonLink).toHaveAttribute('href', args.url)
    })

    await step('Background image', () => {
      const section = canvas.getByTestId('BannerComponent')
      waitFor(() => {
        expect(section.style.backgroundImage).not.toBe('')
      })
    })

    await step('Float image', async () => {
      const floatImg = canvas.getByRole('img')
      console.log(floatImg)
      expect(floatImg.getAttribute('src')).toContain(args.floatImg.url)
    })
  }
}
