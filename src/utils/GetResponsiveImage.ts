'use client'
/*
	É passado uma imagem de upload do strapi como argumento,
	retorna os dados dessa imagem de acordo com a resolução.
*/
import { useEffect, useState } from 'react'

interface ImageProps {
  url: string
  width: number
  height: number
}

export interface UploadImageProps extends ImageProps {
  formats: {
    xsmall: ImageProps
    small: ImageProps
    medium: ImageProps
    large: ImageProps
    xlarge?: ImageProps
  }
}

interface GetResponsiveImageProps {
  image: UploadImageProps
}

export function GetResponsiveImage({ image }: GetResponsiveImageProps) {
  const [resolution, setResolution] = useState(document.body.offsetWidth)
  const bodyWidth = document.body.offsetWidth

  useEffect(() => {
    setResolution(bodyWidth)
    // console.log('body: ', bodyWidth)
    // console.log('resolution: ', resolution)
  }, [bodyWidth])

  if (resolution <= 320) {
    return image.formats.xsmall
  } else if (resolution <= 640) {
    return image.formats.small
  } else if (resolution <= 768) {
    return image.formats.medium
  } else if (resolution <= 1024) {
    return image.formats.large
  } else if (resolution <= 1280) {
    return image.formats.xlarge
  }

  return {
    url: image.url,
    width: image.width,
    height: image.height
  }
}
