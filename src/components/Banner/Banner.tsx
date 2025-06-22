import { ButtonLink } from 'components/ButtonLink/ButtonLink'
import { Container } from 'components/Container/Container'
import Image, { getImageProps } from 'next/image'
import { IoFitness } from 'react-icons/io5'
import { ImageProps } from 'types/strapiContent'
import { replacePTagsWithSpanTags } from 'utils/replacePTagsWithSpanTags'

export interface BannerProps {
  title: string
  description: string
  label: string
  url: string
  floatImg: ImageProps
  backgroundDesktop: ImageProps
  backgroundMobile: ImageProps
}

export function Banner({ title, description, label, url, backgroundDesktop, backgroundMobile, floatImg }: BannerProps) {
  const common = {
    alt: backgroundMobile.alternativeText || backgroundDesktop.alternativeText || 'Imagem de fundo decorativa',
    sizes: '100vw',
    fill: true,
    priority: true
  }
  const {
    props: { srcSet: desktop }
  } = getImageProps({
    ...common,
    src: backgroundDesktop.url
  })
  const {
    props: { srcSet: mobile, ...rest }
  } = getImageProps({
    ...common,
    src: backgroundMobile.url
  })
  return (
    <section
      id='banner'
      data-testid='BannerComponent'
      className='flex items-center relative bg-cover aspect-[9/16] sm:aspect-video'
    >
      <picture className='absolute size-full inset-0'>
        <source media='(max-width: 639px)' srcSet={mobile} />
        <source media='(min-width: 640px)' srcSet={desktop} />
        <img {...rest} />
      </picture>

      <Container className='relative flex gap-10 h-full'>
        <div className='z-10 flex items-center relative md:w-3/5'>
          <div className='w-full'>
            <h1
              className='font-bold text-3xl sm:text-4xl lg:text-5xl [&_strong]:text-primary-600 [&_i]:font-heading [&>span]:block'
              dangerouslySetInnerHTML={{ __html: replacePTagsWithSpanTags(title) }}
            />
            <div
              data-testid='banner-description'
              className='flex flex-col gap-5 mt-5 mb-10 text-lg'
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <ButtonLink href={url}>
              <IoFitness className='size-6' aria-hidden />
              {label}
            </ButtonLink>
          </div>
        </div>
        <div className='hidden md:flex items-end w-2/5'>
          <Image
            aria-hidden={floatImg.alternativeText ? false : true}
            src={floatImg.url}
            alt={floatImg.alternativeText || ''}
            width={floatImg.width}
            height={floatImg.height}
            quality={100}
            priority
            className='max-w-full max-h-full'
          />
        </div>
      </Container>
      <div className='absolute inset-0 top-auto h-20 bg-gradient-to-t from-secondary-theme to-transparent' />
    </section>
  )
}
