import { BannerImagesProps } from 'components/BannerImages/BannerImages'
import { ImageProps } from 'types/strapiContent'

interface updateBackgroundProps extends Pick<BannerImagesProps, 'backgroundMobile' | 'backgroundDesktop'> {
  sectionHeight: number
  screenWidth: number
  wrapper: HTMLElement
}

// Set background based on wrapper height
export function updateBackground({
  backgroundDesktop,
  backgroundMobile,
  sectionHeight,
  screenWidth,
  wrapper
}: updateBackgroundProps) {
  const orientation = screenWidth > sectionHeight ? 'horizontal' : 'vertical'
  const background = orientation === 'horizontal' ? backgroundDesktop : backgroundMobile

  function setBg(background: ImageProps) {
    wrapper.style.backgroundImage = `url("${background.url}")`
    console.log('orientation: ', orientation, ', sectionH: ', sectionHeight, ', xsmall: ', background)
  }

  if (wrapper) {
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
