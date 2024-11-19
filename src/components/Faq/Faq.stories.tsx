import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { homeMock } from 'app/page.mock'
import { Faq } from './Faq'

const meta: Meta<typeof Faq> = {
  title: 'Components/Faq',
  component: Faq,
  args: {
    ...homeMock.faq
  }
}

export default meta
type Story = StoryObj<typeof Faq>

export const Default: Story = {
  name: 'Faq',
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Section title', () => {
      const title = canvas.getByRole('heading', { level: 2 })
      expect(title).toHaveTextContent(args.title)
    })

    await step('Questions', () => {
      args.questions.forEach((item, index) => {
        const questions = canvas.getAllByRole('heading', { level: 3 })
        expect(questions[index]).toHaveTextContent(item.question)
      })
    })

    await step('Answers', () => {
      args.questions.forEach((item, index) => {
        const answers = canvas.getAllByRole('paragraph', { hidden: true })
        expect(answers[index]).toHaveTextContent(item.answer)
      })
    })
  }
}
