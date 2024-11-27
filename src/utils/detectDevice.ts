export function detectDevice(userAgent: string): 'mobile' | 'tablet' | 'desktop' {
  const isTablet =
    /tablet|ipad|playbook|silk/i.test(userAgent) || (/macintosh/i.test(userAgent) && 'ontouchend' in globalThis)
  const isMobile = /mobile/i.test(userAgent) && !isTablet // Prioriza tablet

  const result = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
  console.log('detectDevice: ', result)
  return result
}
