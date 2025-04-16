import type { MDXComponents } from 'mdx/types'
import Link from '@/components/mdx/custom-link'
import YouTube from '@/components/mdx/youtube'
import { h1, h2, h3 } from '@/components/mdx/heading'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: Link,
    YouTube,
    h1,
    h2,
    h3,
    ...components,
  }
}
