"use client";

import { formatCurrency, formatDate } from "@/lib/utils";
import type { Expense } from "@/types";

type Props = {
  expenses: Expense[];
};

export default function Table({ expenses }: Props) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th scope="col" className="border-b border-gray-300 p-3 text-left text-gray-900 font-semibold w-8">
            <input type="checkbox" />
          </th>
          <th scope="col" className="border-b border-gray-300 p-3 text-left text-gray-900 font-semibold">
            Title
          </th>
          <th scope="col" className="border-b border-gray-300 p-3 text-left text-gray-900 font-semibold">
            Date
          </th>
          <th scope="col" className="border-b border-gray-300 p-3 text-left text-gray-900 font-semibold">
            Value
          </th>
          <th scope="col" className="border-b border-gray-300 p-3 text-left text-gray-900 font-semibold">
            Category
          </th>
          <th scope="col" className="border-b border-gray-300 p-3" />
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td className="border-b border-gray-200 p-3">
              <input type="checkbox" />
            </td>
            <td className="border-b border-gray-200 p-3 font-medium">{expense.title}</td>
            <td className="border-b border-gray-200 p-3">{formatDate(expense.created)}</td>
            <td className="border-b border-gray-200 p-3">{formatCurrency(expense.value)}</td>
            <td className="border-b border-gray-200 p-3">{expense.category}</td>
            <td className="border-b border-gray-200 p-3">
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
