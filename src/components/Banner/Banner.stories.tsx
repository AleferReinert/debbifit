import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { bannerMock } from 'app/page.mock'
import { theme } from '../../../tailwind.config'
import { Banner } from './Banner'

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  args: {
    ...bannerMock
  }
}

export default meta
type Story = StoryObj<typeof Banner>

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'xs' }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title as h1', () => {
      waitFor(() => {
        const title = canvas.getByRole('heading', { level: 1 })
        const italic = document.querySelector('h1 i')
        const strong = document.querySelector('h1 strong')

        expect(title).toContainHTML(
          '<span><i>Invista na sua saúde&nbsp;</i></span><span><i><strong>física </strong>e <strong>mental!</strong></i></span>'
        )
        expect(italic).toHaveStyle('font-family: Merienda, cursive')
        expect(strong).toHaveStyle({ color: theme.primary[600] })
      })
    })

    await step('Description', () => {
      waitFor(() => {
        const description = canvas.getByTestId('banner-description')
        expect(description).toContainHTML(bannerMock.description)
      })
    })

    await step('Button link', () => {
      waitFor(() => {
        const buttonLink = canvas.getByRole('link')
        expect(buttonLink).toHaveTextContent(bannerMock.label)
        expect(buttonLink).toHaveAttribute('href', bannerMock.url)
      })
    })

    await step('Without float image', async () => {
      waitFor(() => {
        const floatImg = canvas.queryByRole('img', { name: bannerMock.floatImg.alternativeText })
        expect(floatImg).not.toBeInTheDocument()
      })
    })

    await step('Background', () => {
      waitFor(() => {
        const image = canvas.getByRole('img', { name: 'Imagem de fundo decorativa' })
        expect(image).toBeVisible()
      })
    })
  }
}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: 'md' }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('Float image', async () => {
      waitFor(() => {
        const floatImg = canvas.getByRole('img', { name: bannerMock.floatImg.alternativeText })
        expect(floatImg).toBeVisible()
      })
    })
  }
}
