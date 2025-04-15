"use client"
import { questions } from "@/data/questionTableHardCoded"
import {columns} from "@/data/questionTableColumn"
import { Questions } from "@/data/questionTableHardCoded"

import {ColumnDef, flexRender,getCoreRowModel,useReactTable} from "@tanstack/react-table"
import  {Table, TableBody, TableCell, TableHead,TableHeader,TableRow} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }

  export function QuestionTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
    return (
    <div className="rounded-md border m-9 mr-20 ml-20">
      <Table className="bg-zinc-700 text-white">
        <TableHeader className="bg-gray-300" >
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="text-lg text-white">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="hover:text-amber-300 hover:bg-zinc-950"
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="cursor-pointer">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

// export default function QuestionTable(){
//     return(

//         <>

//         </>
//     )
// }