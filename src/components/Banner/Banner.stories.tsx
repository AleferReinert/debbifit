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

export const XSmall: Story = {
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
        const floatImg = canvas.queryByRole('img')
        expect(floatImg).not.toBeInTheDocument()
      })
    })

    await step('Background mobile small', () => {
      waitFor(() => {
        const section = canvas.getByTestId('BannerComponent')
        expect(section).toHaveStyle(`background-image: url("${bannerMock.backgroundMobile.formats.small.url}")`)
      })
    })
  }
}

export const Small: Story = {
  parameters: {
    viewport: { defaultViewport: 'sm' }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Without float image', async () => {
      waitFor(() => {
        const floatImg = canvas.queryByRole('img')
        expect(floatImg).not.toBeInTheDocument()
      })
    })

    await step('Background desktop large', () => {
      waitFor(() => {
        const section = canvas.getByTestId('BannerComponent')
        expect(section).toHaveStyle(`background-image: url("${bannerMock.backgroundDesktop.formats.large.url}")`)
      })
    })
  }
}

export const Medium: Story = {
  parameters: {
    viewport: { defaultViewport: 'md' }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Correct float image with alt text or aria-hidden if without alt text', async () => {
      waitFor(() => {
        // Se tiver o texto alternativo, aria-hidden é false, se não, true
        if (bannerMock.floatImg.alternativeText) {
          const floatImgWithAlternativeText = canvas.getByRole('img')
          expect(floatImgWithAlternativeText.getAttribute('src')).toContain(bannerMock.floatImg.formats.small.url)
          expect(floatImgWithAlternativeText).toHaveAttribute('alt', bannerMock.floatImg.alternativeText)
          expect(floatImgWithAlternativeText).toHaveAttribute('aria-hidden', 'false')
        } else {
          const floatImgWithoutAlternativeText = document.querySelector('img[alt=""]')
          expect(floatImgWithoutAlternativeText).toHaveAttribute('aria-hidden', 'true')
        }
      })
    })
  }
}
