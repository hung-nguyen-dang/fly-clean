import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export type HeadingProps = HTMLAttributes<HTMLHeadingElement>

export function h1(props: HeadingProps) {
  return (
    <h1 className={cn('text-primary text-3xl font-bold')} {...props}>
      {props.children}
    </h1>
  )
}

export function h2(props: HeadingProps) {
  return (
    <h2 className={cn('text-primary text-2xl')} {...props}>
      {props.children}
    </h2>
  )
}

export function h3(props: HeadingProps) {
  return (
    <h3 className={cn('text-primary text-xl')} {...props}>
      {props.children}
    </h3>
  )
}
