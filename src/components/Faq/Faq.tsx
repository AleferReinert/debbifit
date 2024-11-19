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
                className='flex justify-between cursor-pointer items-center py-4'
              >
                <h3 className='w-max pr-6 font-bold'>{item.question}</h3>
                {open ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
              </div>
              <div className={`${open ? 'max-h-96 transition-all' : 'max-h-0'} overflow-hidden duration-300`}>
                <p className='px-6'>{item.answer}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
