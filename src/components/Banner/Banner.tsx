import { ButtonLink } from 'components/ButtonLink/ButtonLink'
import { Container } from 'components/Container/Container'
import Image from 'next/image'
import { IoFitness } from 'react-icons/io5'
import { UploadImageProps } from 'types/strapiContent'
import { replaceTags } from 'utils/replaceTags'

export interface BannerProps {
  title: string
  description: string
  label: string
  url: string
  background: UploadImageProps
  floatImg: UploadImageProps
}

export function Banner({ title, description, label, url, background, floatImg }: BannerProps) {
  return (
    <section
      data-testid='BannerComponent'
      className='relative bg-cover'
      style={{ backgroundImage: `url(${background.url})` }}
    >
      <Container className='relative md:flex gap-10'>
        <div className='z-10 flex items-center relative py-16 md:py-20 lg:py-28 md:w-3/5'>
          <div className='w-full'>
            <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl [&_strong]:text-primary-600 [&_i]:font-heading [&>span]:block'>
              <span
                dangerouslySetInnerHTML={{
                  __html: replaceTags({
                    text: title,
                    tagsToReplace: ['p'],
                    replaceBy: 'span'
                  })
                }}
              />
            </h1>
            <div data-testid='banner-description' className='flex flex-col gap-5 mt-5 mb-10'>
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            <ButtonLink href={url}>
              <IoFitness className='size-6' />
              {label}
            </ButtonLink>
          </div>
        </div>
        <div className='hidden md:flex items-end md:w-2/5'>
          <Image
            aria-hidden={floatImg.alternativeText ? false : true}
            src={floatImg.formats!.small.url}
            alt={floatImg.alternativeText || ''}
            width={floatImg.formats!.small.width}
            height={floatImg.formats!.small.height}
            quality={100}
            priority
            className='object-contain aspect-[4/5]'
          />
        </div>
      </Container>
      <div className='absolute inset-0 top-auto h-20 bg-gradient-to-t from-secondary-theme to-transparent' />
    </section>
  )
}
