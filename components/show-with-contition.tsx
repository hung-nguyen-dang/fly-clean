import { ReactNode } from 'react'

export default function ShowWithCondition({
  condition,
  children,
}: {
  condition: boolean
  children: ReactNode
}) {
  return <>{condition ? children : null}</>
}
