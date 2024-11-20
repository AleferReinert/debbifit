import { ButtonLink } from 'components/ButtonLink/ButtonLink'
import { Container } from 'components/Container/Container'
import Image from 'next/image'
import { IoFitness } from 'react-icons/io5'
import { replaceTags } from 'utils/replaceTags'

export interface BannerProps {
  title: string
  description: string
  label: string
  url: string
  background: {
    url: string
  }
  floatImg: {
    url: string
    width: number
    height: number
  }
}

export function Banner({ title, description, background, floatImg, label, url }: BannerProps) {
  return (
    <section
      data-testid='BannerComponent'
      className='relative bg-cover'
      style={{ backgroundImage: `url(${background.url})` }}
    >
      <Container className='relative py-16 md:py-20 lg:py-28'>
        <div className='z-10 relative'>
          <h1
            className='font-bold text-3xl sm:text-4xl lg:text-5xl max-w-[28rem] lg:max-w-[38rem] [&_strong]:text-primary-600 [&_i]:font-heading [&>span]:block'
            dangerouslySetInnerHTML={{ __html: replaceTags({ text: title, tagsToReplace: ['p'], replaceBy: 'span' }) }}
          />
          <div
            data-testid='banner-description'
            className='flex flex-col gap-5 mt-5 mb-10 md:w-[24rem] lg:w-[34rem]'
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <ButtonLink href={url}>
            <IoFitness className='size-6' />
            {label}
          </ButtonLink>
        </div>
        <Image
          src={floatImg.url}
          alt=''
          width={floatImg.width}
          height={floatImg.height}
          priority
          className='hidden max-w-[43%] max-h-[95%] object-contain absolute bottom-0 right-4 md:block'
        />
      </Container>
      <div className='absolute inset-0 top-auto h-20 bg-gradient-to-t from-secondary-theme to-transparent' />
    </section>
  )
}
