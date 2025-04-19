import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-1 justify-center">
      <div className="container mt-4 px-8 md:mt-8 md:px-12 lg:px-16">
        {children}
      </div>
    </div>
  )
}
