"use client";

import { QuestionProps } from "@/interface/question";
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import "./table.scss";

export default function Table({ data, columns }: { data: QuestionProps[]; columns: any }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
  });

  return (
    <table className="table w-full ">
      <thead className="thead border-b-[1px] border-gray-200 ">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header: any) => (
              <th key={header.id} onClick={header.column.getToggleSortingHandler()} className="text-start py-2">
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext)}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody className="tbody">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-b-[1px] border-gray-100">
            {row.getVisibleCells().map((cell: any) => {
              console.log(typeof cell.column.columnDef.cell);
              return (
                <td key={cell.id} className="py-2">
                  {flexRender(cell.column.columnDef.cell, cell)}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
