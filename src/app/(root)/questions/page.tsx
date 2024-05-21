"use client";

import Table from "@/components/Organism/Table";
import { Button } from "@/components/ui/button";
import data from "@/constants/data";
import { QuestionProps } from "@/interface/question";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { RxDotsVertical } from "react-icons/rx";

export default function Question() {
  const columns: ColumnDef<QuestionProps>[] = [
    {
      header: "Question",
      accessorKey: "question",
    },
    {
      header: "Options",
      accessorKey: "options",
      cell: (props) => {
        const options = props.row.original.options || [];
        return (
          <ul>
            {options.map((option, index) => (
              <li key={index} className="flex justify-start items-center gap-2 mb-1">
                <span className="font-bold">{index + 1}.</span>
                <span>{option}</span>
              </li>
            ))}
          </ul>
        );
      },
    },
    {
      header: "Answer",
      accessorKey: "actualAnswer",
      cell: (props) => {
        const answers = props.row.original.actualAnswer || [];
        return (
          <ul>
            {answers.map((answer, index) => (
              <li key={index} className="flex justify-start items-center gap-2 mb-1">
                <span className="font-bold">{index + 1}.</span>
                <span>{answer}</span>
              </li>
            ))}
          </ul>
        );
      },
    },
    // {
    //   header: "Multiple Answer",
    //   accessorKey: "haveMultipleAnswer",
    // },
    // {
    //   header: "Is MCQ",
    //   accessorKey: "isMcq",
    // },
    {
      header: "Actions",
      accessorKey: "actions",
      cell(props) {
        return (
          <Button>
            <RxDotsVertical />
          </Button>
        );
      },
    },
  ];

  return (
    <main className="add__question pt-6 ">
      <div className="pb-6 border-b-[1px] border-gray-200 border-solid px-8">
        <Link href={"/questions/addQuestions"} className="py-2 px-4 bg-purple-500 rounded-[5px] text-white active:bg-purple-800 hover:bg-purple-600">
          Add New Question
        </Link>
      </div>
      <div className="px-8">
        <Table columns={columns} data={data} />
      </div>
    </main>
  );
}
