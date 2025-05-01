'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import ShowWithCondition from '@/components/show-with-contition'

interface MDXTableProps {
  columns: Array<string>
  rows: Array<Array<string>>
  title?: string
}

export default function MDXTable(props: MDXTableProps) {
  const { title, columns, rows } = props

  return (
    <div>
      <ShowWithCondition condition={!!title && title?.trim().length > 0}>
        <h3 className="text-primary text-xl">{title}</h3>
      </ShowWithCondition>

      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col, i) => (
              <TableHead key={`table-head-${i}`} className="w-[100px]">
                {col}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={`table-row-${i}`}>
              {row.map((cell, j) => (
                <TableCell key={`table-cell-${i}-${j}`}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
