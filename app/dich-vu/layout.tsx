import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-1 justify-center">
      <div className="container mt-8 p-4">{children}</div>
    </div>
  )
}
