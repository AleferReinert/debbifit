import { BannerImagesProps } from 'components/BannerImages/BannerImages'
import { ButtonLink } from 'components/ButtonLink/ButtonLink'
import { Container } from 'components/Container/Container'
import Image from 'next/image'
import { IoFitness } from 'react-icons/io5'
import { replaceTags } from 'utils/replaceTags'

export interface BannerProps extends BannerImagesProps {
  title: string
  description: string
  label: string
  url: string
}

export function Banner({ title, description, label, url, backgroundDesktop, backgroundMobile, floatImg }: BannerProps) {
  return (
    <section
      id='banner'
      data-testid='BannerComponent'
      className='relative bg-cover'
      style={{ backgroundImage: `url("${backgroundDesktop.url}")` }}
    >
      <Container className='relative md:flex gap-10'>
        <div className='z-10 flex items-center relative py-16 md:py-20 lg:py-28 md:w-3/5'>
          <div className='w-full'>
            <h1
              className='font-bold text-3xl sm:text-4xl lg:text-5xl [&_strong]:text-primary-600 [&_i]:font-heading [&>span]:block'
              dangerouslySetInnerHTML={{
                __html: replaceTags({
                  text: title,
                  tagsToReplace: ['p'],
                  replaceBy: 'span'
                })
              }}
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
        </div>
        <div className='hidden items-end w-2/5 md:flex'>
          <Image
            aria-hidden={floatImg.alternativeText ? false : true}
            src={floatImg.formats.small.url}
            alt={floatImg.alternativeText || ''}
            width={floatImg.width}
            height={floatImg.height}
            quality={100}
            priority
          />
        </div>
        {/* <BannerImages floatImg={floatImg} backgroundDesktop={backgroundDesktop} backgroundMobile={backgroundMobile} /> */}
      </Container>
      <div className='absolute inset-0 top-auto h-20 bg-gradient-to-t from-secondary-theme to-transparent' />
    </section>
  )
}
