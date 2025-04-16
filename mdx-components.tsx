import type { MDXComponents } from 'mdx/types'
import Link from '@/components/mdx/custom-link'
import YouTube from '@/components/mdx/youtube'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: Link,
    YouTube,
    h1: ({ children }) => (
      <h1 className="text-primary text-3xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-primary text-2xl">{children}</h2>,
    h3: ({ children }) => <h3 className="text-primary text-xl">{children}</h3>,
    table: ({ children }) => (
      <table className="border border-gray-300 text-left">{children}</table>
    ),
    th: ({ children }) => (
      <th className="border border-gray-300 bg-gray-100 p-2">{children}</th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-300 p-2">{children}</td>
    ),
    ...components,
  }
}
