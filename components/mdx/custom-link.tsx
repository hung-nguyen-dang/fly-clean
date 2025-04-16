'use client'

import { HTMLAttributes } from 'react'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'

export interface CustomLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
  external?: boolean
}

export default function Link(props: CustomLinkProps) {
  const { href, external = false, className, ...rest } = props
  return (
    <NextLink
      href={href}
      target={external ? '_blank' : '_self'}
      className={cn('text-primary cursor-pointer font-bold', className)}
      {...rest}
    >
      {props.children}
    </NextLink>
  )
}
