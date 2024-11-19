import { ComponentProps, ReactNode } from 'react'

interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div data-testid='container' className={`px-4 mx-auto w-full max-w-screen-xl ${className || ''}`}>
      {children}
    </div>
  )
}
