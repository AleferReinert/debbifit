export interface ImageProps {
  url: string
  width: number
  height: number
  alternativeText?: string
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
