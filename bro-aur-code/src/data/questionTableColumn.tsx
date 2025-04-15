"use client"
import { ColumnDef } from "@tanstack/react-table"


type Questions = {
    id: number
    question: string
    status: "pending" | "processing" | "success" | "failed"
    difficulty:"Easy" | "Medium" | "High",
  }


  export const columns:ColumnDef<Questions>[]=[
    {
        accessorKey: "id",
        header: "Question Id",
      },
      {
        accessorKey: "question",
        header: "Question",
      },
      {
        accessorKey: "status",
        header: "Status",
      },
      {
        accessorKey:"difficulty",
        header:"Difficulty"
      }
  ]