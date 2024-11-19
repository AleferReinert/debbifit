import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'

interface ButtonLinkProps extends ComponentProps<'a'> {
  children: ReactNode
  href: string
}

export function ButtonLink({ children, href, className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${className || ''} inline-flex items-center gap-2 font-semibold py-3 px-5 
				bg-primary-500 rounded-lg transition 
				hover:animate-buzz hover:bg-primary-700 focus:bg-primary-900
			`}
    >
      {children}
    </Link>
  )
}
