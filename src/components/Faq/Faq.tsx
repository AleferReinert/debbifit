'use client'
import { Section } from 'components/Section/Section'
import { useState } from 'react'
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'

export interface FaqProps {
  title: string
  questions: {
    question: string
    answer: string
  }[]
}

export function Faq({ title, questions }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <Section data-testid='FaqComponent' title={title}>
      <ul className='max-w-screen-sm mx-auto'>
        {questions.map((item, index) => {
          const open = openIndex === index

          return (
            <li key={index}>
              <div
                onClick={() => toggleAnswer(index)}
                title={open ? 'Fechar' : 'Abrir'}
                className='flex justify-between cursor-pointer items-center py-4'
              >
                <h3 className='w-max pr-6 font-semibold'>
                  <span className='italic font-light pr-1'>{index + 1}.</span> {item.question}
                </h3>
                {open ? <IoChevronUpOutline aria-hidden /> : <IoChevronDownOutline aria-hidden />}
              </div>
              <div
                className={`${open ? 'max-h-96 transition-all opacity-100' : 'max-h-0 opacity-0'} overflow-hidden duration-300`}
              >
                <p className='px-6 pb-6 pt-2 font-light'>{item.answer}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
