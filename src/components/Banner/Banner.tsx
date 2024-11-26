'use client'
import { useQuery } from '@apollo/client'
import { ButtonLink } from 'components/ButtonLink/ButtonLink'
import { Container } from 'components/Container/Container'
import { GET_BANNER } from 'graphql/GetBanner'
import Image from 'next/image'
import { ComponentProps, useEffect, useState } from 'react'
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

function Skeleton({ className }: ComponentProps<'span'>) {
  return <span className={`block bg-neutral-800 rounded-md animate-pulse ${className}`}></span>
}

export function Banner() {
  const { data, error, loading } = useQuery(GET_BANNER)
  const [bgUrl, setBgUrl] = useState('')
  const { title, description, label, url, background, floatImg }: BannerProps = data?.home?.banner || {}

  useEffect(() => {
    if (background) {
      const resolution = document.body.offsetWidth
      if (resolution <= 320) {
        setBgUrl(background.formats.xsmall.url)
      } else if (resolution <= 640) {
        setBgUrl(background.formats.small.url)
      } else if (resolution <= 768) {
        setBgUrl(background.formats.medium.url)
      } else if (resolution <= 1024) {
        setBgUrl(background.formats.large.url)
      } else if (resolution <= 1280) {
        setBgUrl(background.formats.xlarge!.url)
      } else {
        setBgUrl(background.url)
      }
    }
  }, [background])

  if (error) {
    console.error(error)
    throw new Error('Ocorreu um erro ao buscar os dados, tente novamente mais tarde.')
  }

  return (
    <section data-testid='BannerComponent' className='relative bg-cover' style={{ backgroundImage: `url(${bgUrl})` }}>
      <Container className='relative md:flex gap-10'>
        <div className='z-10 flex items-center relative py-16 md:py-20 lg:py-28 md:w-3/5'>
          <div className='w-full'>
            <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl [&_strong]:text-primary-600 [&_i]:font-heading [&>span]:block'>
              {loading ? (
                <Skeleton className='h-[108px]' />
              ) : (
                <span
                  dangerouslySetInnerHTML={{
                    __html: replaceTags({
                      text: title,
                      tagsToReplace: ['p'],
                      replaceBy: 'span'
                    })
                  }}
                ></span>
              )}
            </h1>
            <div data-testid='banner-description' className='flex flex-col gap-5 mt-5 mb-10'>
              {loading ? (
                <Skeleton className='h-[112px]' />
              ) : (
                <span
                  dangerouslySetInnerHTML={{
                    __html: description
                  }}
                ></span>
              )}
            </div>

            {loading ? (
              <Skeleton className='w-56 h-14' />
            ) : (
              <ButtonLink href={url}>
                <IoFitness className='size-6' />
                {label}
              </ButtonLink>
            )}
          </div>
        </div>
        <div className='hidden md:flex items-end md:w-2/5'>
          {!loading && (
            <Image
              aria-hidden={floatImg.alternativeText ? false : true}
              src={floatImg.formats.small.url}
              alt={floatImg.alternativeText || ''}
              width={floatImg.formats.small.width}
              height={floatImg.formats.small.height}
              quality={100}
              priority
              className='object-contain aspect-[4/5]'
            />
          )}
        </div>
      </Container>
      <div className='absolute inset-0 top-auto h-20 bg-gradient-to-t from-secondary-theme to-transparent' />
    </section>
  )
}
