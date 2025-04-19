import type { MDXComponents } from 'mdx/types'
import Link from '@/components/mdx/custom-link'
import YouTube from '@/components/mdx/youtube'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: Link,
    YouTube,
    h1: ({ children }) => (
      <h1 className="text-primary mb-8 text-3xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-primary mb-4 text-2xl">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-primary text-xl">{children}</h3>,
    table: ({ children }) => (
      <div className="my-4 w-fit overflow-hidden rounded-md border border-gray-300">
        <table className="text-left">{children}</table>
      </div>
    ),
    th: ({ children }) => <th className="px-4 py-2">{children}</th>,
    td: ({ children }) => <td className="px-4 py-2">{children}</td>,
    tr: ({ children }) => <tr className="border-t">{children}</tr>,
    ...components,
  }
}
