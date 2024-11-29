'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ImageProps, UploadImageProps } from 'types/strapiContent'

interface BannerImagesProps {
  floatImg: UploadImageProps
  background: UploadImageProps
}

interface updateBackgroundProps {
  background: UploadImageProps
  sectionHeight: number
  section: HTMLElement
}

// Set background based on section height
function updateBackground({ background, sectionHeight, section }: updateBackgroundProps) {
  function setBg(background: ImageProps) {
    section.style.backgroundImage = `url("${background.url}")`
    console.log('sectionH: ', sectionHeight, ', xsmall: ', background.height)
  }

  if (section) {
    if (sectionHeight <= background.formats.xsmall.height) {
      setBg(background.formats.xsmall)
    } else if (sectionHeight <= background.formats.small.height) {
      setBg(background.formats.small)
    } else if (sectionHeight <= background.formats.medium.height) {
      setBg(background.formats.medium)
    } else if (sectionHeight <= background.formats.large.height) {
      setBg(background.formats.large)
    } else if (background.formats.xlarge && sectionHeight <= background.formats.xlarge.height) {
      setBg(background.formats.xlarge)
    } else {
      setBg(background)
    }
  }
}

export function BannerImages({ floatImg, background }: BannerImagesProps) {
  const [screenWidth, setScreenWidth] = useState(0)
  const [sectionHeight, setSectionHeight] = useState(0)

  useEffect(() => {
    const section = document.querySelector('section')
    function updateImages() {
      setScreenWidth(window.innerWidth)
      if (section) setSectionHeight(section.offsetHeight)
      if (section && sectionHeight > 0) updateBackground({ background, sectionHeight, section })
    }
    updateImages()
    addEventListener('resize', () => updateImages())
  }, [sectionHeight, background])

  // Not render floatImg on mobile
  if (screenWidth < 768) return

  return (
    <Image
      data-testid='BannerImagesComponent'
      aria-hidden={floatImg.alternativeText ? false : true}
      src={floatImg.formats.small.url}
      alt={floatImg.alternativeText || ''}
      width={floatImg.width}
      height={floatImg.height}
      quality={100}
      priority
    />
  )
}
