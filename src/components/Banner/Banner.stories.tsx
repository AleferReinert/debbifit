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

export const XSmall: Story = {
  parameters: {
    viewport: { defaultViewport: 'xs' }
  },
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

    await step('Without float image', async () => {
      waitFor(() => {
        const floatImg = canvas.queryByRole('img')
        expect(floatImg).not.toBeInTheDocument()
      })
    })

    await step('Correct background', () => {
      const section = canvas.getByTestId('BannerComponent')
      waitFor(() => {
        expect(section).toHaveStyle(`background-image: url("${args.background.formats.xsmall.url}")`)
      })
    })
  }
}

export const small: Story = {
  parameters: {
    viewport: { defaultViewport: 'sm' }
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Without float image', async () => {
      waitFor(() => {
        const floatImg = canvas.queryByRole('img')
        expect(floatImg).not.toBeInTheDocument()
      })
    })

    await step('Correct background', () => {
      const section = canvas.getByTestId('BannerComponent')
      waitFor(() => {
        expect(section).toHaveStyle(`background-image: url("${args.background.formats.small.url}")`)
      })
    })
  }
}

export const medium: Story = {
  parameters: {
    viewport: { defaultViewport: 'md' }
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Float image', async () => {
      const floatImg = canvas.getByRole('img')
      expect(floatImg.getAttribute('src')).toContain(args.floatImg.url)
    })

    await step('Correct background', () => {
      const section = canvas.getByTestId('BannerComponent')
      waitFor(() => {
        expect(section).toHaveStyle(`background-image: url("${args.background.formats.medium.url}")`)
      })
    })
  }
}

export const large: Story = {
  parameters: {
    viewport: { defaultViewport: 'lg' }
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Correct background', () => {
      const section = canvas.getByTestId('BannerComponent')
      waitFor(() => {
        expect(section).toHaveStyle(`background-image: url("${args.background.formats.large.url}")`)
      })
    })
  }
}

export const XLarge: Story = {
  parameters: {
    viewport: { defaultViewport: 'xl' }
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Correct background', () => {
      const section = canvas.getByTestId('BannerComponent')
      waitFor(() => {
        expect(section).toHaveStyle(`background-image: url("${args.background.formats.xlarge!.url}")`)
      })
    })
  }
}

export const xxlarge: Story = {
  name: '2X Large',
  parameters: {
    viewport: { defaultViewport: '2xl' }
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Correct background', () => {
      const section = canvas.getByTestId('BannerComponent')
      waitFor(() => {
        expect(section).toHaveStyle(`background-image: url("${args.background.url}")`)
      })
    })
  }
}
