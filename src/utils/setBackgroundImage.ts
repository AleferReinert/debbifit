import { BannerImagesProps } from 'components/BannerImages/BannerImages'
import { ImageProps } from 'types/strapiContent'

interface setBackgroundImageProps extends Pick<BannerImagesProps, 'backgroundMobile' | 'backgroundDesktop'> {
  wrapper: HTMLElement
}

export function setBackgroundImage({ backgroundDesktop, backgroundMobile, wrapper }: setBackgroundImageProps) {
  const screenWidth = window.innerWidth
  const isHorizontal = screenWidth > wrapper.clientHeight ? true : false
  const background = isHorizontal ? backgroundDesktop : backgroundMobile

  function setBg(background: ImageProps) {
    wrapper.style.backgroundImage = `url("${background.url}")`
    console.log('isHorizontal: ', isHorizontal, ', screenWidth: ', screenWidth, ', bg: ', background)
  }

  if (wrapper) {
    if (screenWidth <= background.formats.xsmall.width) {
      setBg(background.formats.xsmall)
    } else if (screenWidth <= background.formats.small.width) {
      setBg(background.formats.small)
    } else if (screenWidth <= background.formats.medium.width) {
      setBg(background.formats.medium)
    } else if (screenWidth <= background.formats.large.width) {
      setBg(background.formats.large)
    } else if (background.formats.xlarge && screenWidth <= background.formats.xlarge.width) {
      setBg(background.formats.xlarge)
    } else {
      setBg(background)
    }
  }
}
