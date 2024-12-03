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
    const section = document.getElementById('banner')
    function updateSectionBackground() {
      setScreenWidth(window.innerWidth)
      if (section) {
        setSectionHeight(section.clientHeight)
      }
      if (section && sectionHeight > 0) {
        updateBackground({ backgroundDesktop, backgroundMobile, sectionHeight, screenWidth, wrapper: section })
      }
    }
    updateSectionBackground()

    window.addEventListener('resize', () => updateSectionBackground())
    return () => window.removeEventListener('resize', () => updateSectionBackground())
  }, [sectionHeight])

  // Not render floatImg on mobile
  if (screenWidth < 768) return null

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
