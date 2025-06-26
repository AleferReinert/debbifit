import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { homeMock } from 'app/page.mock'
import { formatPhone } from 'utils/formatPhone'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  args: {
    ...homeMock.enterprise
  }
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  name: 'Footer',
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Enterprise name', () => {
      const name = canvas.getByRole('heading', { level: 4 })
      expect(name).toHaveTextContent(args.name)
    })
    await step('Slogan', () => {
      const name = canvas.getByRole('heading', { level: 4 })
      expect(name).toHaveTextContent(args.slogan)
    })

    await step('Phone', () => {
      const phone = canvas.getByRole('link', { name: formatPhone(args.phone) })
      expect(phone).toHaveAttribute('href', `tel:${formatPhone(args.phone)}`)
    })

    await step('E-mail', () => {
      const email = canvas.getByRole('link', { name: args.email })
      expect(email).toHaveAttribute('href', `mailto:${args.email}`)
    })

    await step('Social links: Facebook, Instagram, LinkedIn and Whatsapp', () => {
      type SocialKey = 'facebook' | 'instagram' | 'linkedin' | 'whatsapp'
      const socialLinks: SocialKey[] = ['facebook', 'instagram', 'linkedin', 'whatsapp']

      socialLinks.forEach((social, index) => {
        const link = canvas.getByRole('link', { name: new RegExp(`^${social}$`, 'i') })
        const url = social === 'whatsapp' ? `https://wa.me/55${args.whatsapp}` : args[socialLinks[index]]
        expect(within(link).getByRole('img', { hidden: true })).toBeVisible()
        expect(link).toHaveAttribute('href', url)
      })
    })
  }
}
