"use client";

import { formatCurrency, formatDate, groupExpensesByDate } from "@/lib/utils";
import type { Expense } from "@/types";
import Button from "@/components/button";
import { Fragment } from "react";

type Props = {
  expenses: Expense[];
};

export default function Table({ expenses }: Props) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th scope="col" className="border-b border-gray-300 p-2 text-left text-gray-900 font-semibold w-8">
            <input type="checkbox" />
          </th>
          <th scope="col" className="border-b border-gray-300 p-2 text-left text-gray-900 font-semibold">
            Title
          </th>
          <th scope="col" className="border-b border-gray-300 p-2 text-left text-gray-900 font-semibold">
            Date
          </th>
          <th scope="col" className="border-b border-gray-300 p-2 text-left text-gray-900 font-semibold">
            Value
          </th>
          <th scope="col" className="border-b border-gray-300 p-2 text-left text-gray-900 font-semibold">
            Category
          </th>
          <th scope="col" className="border-b border-gray-300 p-2" />
        </tr>
      </thead>
      <tbody>
        {Array.from(groupExpensesByDate(expenses)).map(([date, expenses]) => (
          <Fragment key={date}>
            <tr>
              <td colSpan={6} className="bg-gray-50 border-b border-gray-300 py-2 px-10 font-semibold text-gray-900">
                {formatDate(date)}
              </td>
            </tr>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td className="border-b border-gray-200 p-2">
                  <input type="checkbox" />
                </td>
                <td className="border-b border-gray-200 p-2 font-medium">{expense.title}</td>
                <td className="border-b border-gray-200 p-2">{formatDate(expense.created)}</td>
                <td className="border-b border-gray-200 p-2">{formatCurrency(expense.value)}</td>
                <td className="border-b border-gray-200 p-2">{expense.category}</td>
                <td className="border-b border-gray-200 p-2">
                  <Button variant="secondary" className="mr-2">
                    Edit
                  </Button>
                  <Button variant="secondary">Delete</Button>
                </td>
              </tr>
            ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}
