import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'

interface ButtonLinkProps extends ComponentProps<'a'> {
  children: ReactNode
  href: string
  size?: 'sm' | 'default'
}

export function ButtonLink({ children, href, className, size = 'default' }: ButtonLinkProps) {
  const sizes = {
    default: 'h-14',
    sm: 'text-sm h-12'
  }

  return (
    <Link
      href={href}
      className={`${className || ''} ${sizes[size]} px-5 inline-flex items-center gap-2 font-semibold text-white 
				bg-primary-600 rounded-lg transition 
				hover:animate-buzz hover:bg-primary-700 focus:bg-primary-800
			`}
    >
      {children}
    </Link>
  )
}
