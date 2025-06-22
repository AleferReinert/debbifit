import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
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

    await step('Show/hide answer on click', async () => {
      const question = canvas.getAllByRole('heading', { level: 3 })[1]
      const answer = canvas.getAllByRole('paragraph', { hidden: true })[1]
      await expect(answer).not.toBeVisible()
      await question.click()
      await waitFor(() => expect(answer).toBeVisible())
      await question.click()
      await waitFor(() => expect(answer).not.toBeVisible())
    })

    await step('Only one answer visible when multiple question is clicked', async () => {
      const question1 = canvas.getAllByRole('heading', { level: 3 })[0]
      const question2 = canvas.getAllByRole('heading', { level: 3 })[1]
      const answer1 = canvas.getAllByRole('paragraph', { hidden: true })[0]
      const answer2 = canvas.getAllByRole('paragraph', { hidden: true })[1]
      await waitFor(() => expect(answer1).not.toBeVisible())
      await waitFor(() => expect(answer2).not.toBeVisible())
      await question1.click()
      await waitFor(() => expect(answer1).toBeVisible())
      await waitFor(() => expect(answer2).not.toBeVisible())
      await question2.click()
      await waitFor(() => expect(answer2).toBeVisible())
      await waitFor(() => expect(answer1).not.toBeVisible())
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
