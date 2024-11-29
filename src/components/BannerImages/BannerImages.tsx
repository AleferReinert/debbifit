'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { UploadImageProps } from 'types/strapiContent'
import { updateBackground } from 'utils/updateBackground'

export interface BannerImagesProps {
  floatImg: UploadImageProps
  backgroundDesktop: UploadImageProps
  backgroundMobile: UploadImageProps
}

export function BannerImages({ floatImg, backgroundDesktop, backgroundMobile }: BannerImagesProps) {
  const [screenWidth, setScreenWidth] = useState(0)
  const [sectionHeight, setSectionHeight] = useState(0)

  useEffect(() => {
    const section = document.querySelector('section')
    function updateSectionBackground() {
      setScreenWidth(window.innerWidth)
      if (section) setSectionHeight(section.offsetHeight)
      if (section && sectionHeight > 0) {
        updateBackground({ backgroundDesktop, backgroundMobile, sectionHeight, screenWidth, wrapper: section })
      }
    }
    updateSectionBackground()
    addEventListener('resize', () => updateSectionBackground())
  }, [screenWidth, sectionHeight, backgroundDesktop, backgroundMobile])

  // Not render floatImg on mobile
  if (screenWidth < 768) return

  return (
    <div data-testid='BannerImagesComponent' className='hidden items-end w-2/5 md:flex'>
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
  )
}
