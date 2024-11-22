'use client'
import { ButtonLink } from 'components/ButtonLink/ButtonLink'
import { Container } from 'components/Container/Container'
import Image from 'next/image'
import { IoFitness } from 'react-icons/io5'
import { GetResponsiveImage, UploadImageProps } from 'utils/GetResponsiveImage'
import { replaceTags } from 'utils/replaceTags'

export interface BannerProps {
  title: string
  description: string
  label: string
  url: string
  background: UploadImageProps
  floatImg: Omit<UploadImageProps, 'formats.xlarge'>
}

export function Banner({ title, description, background, floatImg, label, url }: BannerProps) {
  const backgroundData = GetResponsiveImage({ image: background })

  return (
    <section
      data-testid='BannerComponent'
      className='relative bg-cover'
      style={{ backgroundImage: `url(${backgroundData?.url})` }}
    >
      <Container className='relative flex gap-10 items-center'>
        <div className='z-10 relative py-16 md:py-20 lg:py-28 md:w-3/5'>
          <h1
            className='font-bold text-3xl sm:text-4xl lg:text-5xl [&_strong]:text-primary-600 [&_i]:font-heading [&>span]:block'
            dangerouslySetInnerHTML={{ __html: replaceTags({ text: title, tagsToReplace: ['p'], replaceBy: 'span' }) }}
          />
          <div
            data-testid='banner-description'
            className='flex flex-col gap-5 mt-5 mb-10'
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <ButtonLink href={url}>
            <IoFitness className='size-6' />
            {label}
          </ButtonLink>
        </div>
        <div className='hidden md:flex items-end md:w-2/5'>
          <Image
            role='img'
            src={floatImg.url}
            alt=''
            width={500}
            height={625}
            quality={100}
            priority
            className='object-contain'
          />
        </div>
      </Container>
      <div className='absolute inset-0 top-auto h-20 bg-gradient-to-t from-secondary-theme to-transparent' />
    </section>
  )
}
