import { ReactNode } from 'react'

interface ColumnProps {
  columns: number
  children: ReactNode
}

export default function Column({ columns, children }: ColumnProps) {
  return (
    <div
      className={`grid gap-4`}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {children}
    </div>
  )
}
