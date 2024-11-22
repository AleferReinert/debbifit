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
  const [screenWidth, setScreenWidth] = useState(0)
  useEffect(() => setScreenWidth(window.screen.width), [])

  if (screenWidth <= 320) {
    return image.formats.xsmall
  } else if (screenWidth <= 640) {
    return image.formats.small
  } else if (screenWidth <= 768) {
    return image.formats.medium
  } else if (screenWidth <= 1024) {
    return image.formats.large
  } else if (screenWidth <= 1280) {
    return image.formats.xlarge
  }

  return {
    url: image.url,
    width: image.width,
    height: image.height
  }
}
