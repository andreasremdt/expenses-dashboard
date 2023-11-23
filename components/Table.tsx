"use client";

import { Fragment, type ReactNode, useState } from "react";
import clsx from "clsx";
import { filterExpenses, formatCurrency, formatDate, groupExpenses } from "@/lib/utils";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import type { Expense } from "@/types";

type Props = {
  title?: string;
  children: ReactNode;
  expenses: Expense[];
};

export default function Table({ expenses, title, children }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("");

  function handleSingleSelection(expenseId: string) {
    if (selected.includes(expenseId)) {
      setSelected(selected.filter((id) => id !== expenseId));
    } else {
      setSelected([...selected, expenseId]);
    }
  }

  function handleMultiSelection() {
    if (selected.length < expenses.length) {
      setSelected(expenses.map((expense) => expense.id));
    } else {
      setSelected([]);
    }
  }

  return (
    <div>
      <header className="flex items-center justify-between mb-6">
        {title && <h2 className="text-3xl text-gray-900 font-bold">{title}</h2>}
        <div className="flex items-center gap-x-4">
          <form>
            <input
              type="search"
              className="border border-gray-300 rounded-sm px-2 py-1 outline-none"
              placeholder="Filter data..."
              value={filter}
              onChange={(event) => setFilter(event.currentTarget.value)}
            />
          </form>
          {children}
        </div>
      </header>

      <table className="w-full">
        <thead>
          <tr>
            <th scope="col" className="border-b border-gray-300 py-2 px-4 text-left text-gray-900 font-semibold w-8">
              <Checkbox
                indeterminate={selected.length > 0 && selected.length < expenses.length}
                checked={selected.length === expenses.length}
                onChange={handleMultiSelection}
              />
            </th>
            <th scope="col" className="border-b border-gray-300 py-2 px-4 text-left text-gray-900 font-semibold">
              Title
            </th>
            <th scope="col" className="border-b border-gray-300 py-2 px-4 text-left text-gray-900 font-semibold">
              Date
            </th>
            <th scope="col" className="border-b border-gray-300 py-2 px-4 text-left text-gray-900 font-semibold">
              Value
            </th>
            <th scope="col" className="border-b border-gray-300 py-2 px-4 text-left text-gray-900 font-semibold">
              Category
            </th>
            <th scope="col" className="border-b border-gray-300 py-2 px-4" />
          </tr>
        </thead>
        <tbody>
          {Array.from(groupExpenses(filterExpenses(expenses, filter))).map(([date, expenses]) => (
            <Fragment key={date}>
              <tr>
                <td colSpan={6} className="bg-gray-50 border-b border-gray-300 py-3 px-16 text-gray-900 font-semibold">
                  {formatDate(date)}
                </td>
              </tr>
              {expenses.map((expense) => (
                <tr
                  key={expense.id}
                  className={clsx({ "bg-gray-50 border-l-2 border-l-indigo-600": selected.includes(expense.id) })}
                >
                  <td className="border-b border-gray-200 py-2 px-4">
                    <Checkbox
                      onChange={() => handleSingleSelection(expense.id)}
                      checked={selected.includes(expense.id)}
                    />
                  </td>
                  <td className="border-b border-gray-200 py-2 px-4 font-medium text-gray-900">{expense.title}</td>
                  <td className="border-b border-gray-200 py-2 px-4 text-gray-500">{formatDate(expense.created)}</td>
                  <td className="border-b border-gray-200 py-2 px-4 text-gray-500">{formatCurrency(expense.value)}</td>
                  <td className="border-b border-gray-200 py-2 px-4 text-gray-500">{expense.category}</td>
                  <td className="border-b border-gray-200 py-2 px-4 text-gray-500">
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
    </div>
  );
}
