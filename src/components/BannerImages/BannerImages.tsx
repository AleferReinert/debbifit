'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { UploadImageProps } from 'types/strapiContent'
import { setBackgroundImage } from 'utils/setBackgroundImage'

export interface BannerImagesProps {
  floatImg: UploadImageProps
  backgroundDesktop: UploadImageProps
  backgroundMobile: UploadImageProps
}

export function BannerImages({ floatImg, backgroundDesktop, backgroundMobile }: BannerImagesProps) {
  const [screenWidth, setScreenWidth] = useState(0)
  const isMobile = screenWidth < 768

  useEffect(() => {
    const section = document.getElementById('banner')
    function updateSectionBackground() {
      setScreenWidth(window.innerWidth)
      if (section && screenWidth > 0) {
        setBackgroundImage({ backgroundDesktop, backgroundMobile, wrapper: section })
      }
    }
    updateSectionBackground()

    window.addEventListener('resize', () => updateSectionBackground())
    return () => window.removeEventListener('resize', () => updateSectionBackground())
  }, [screenWidth])

  if (isMobile) return null

  return (
    <div data-testid='BannerImagesComponent' className='items-end w-2/5 flex'>
      <Image
        aria-hidden={floatImg.alternativeText ? false : true}
        src={floatImg.formats.small.url}
        alt={floatImg.alternativeText || ''}
        width={floatImg.width}
        height={floatImg.height}
        quality={100}
        priority
        className='max-w-full max-h-full'
      />
    </div>
  )
}
