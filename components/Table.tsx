"use client";

import { Fragment, type ReactNode, useState } from "react";
import clsx from "clsx";
import { filterExpenses, formatCurrency, formatDate, groupExpenses } from "@/lib/utils";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import Badge from "@/components/badge";
import Input from "@/components/input";
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
        <div className="flex items-center gap-x-2">
          <form>
            <Input
              type="search"
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
              Type
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
                <td colSpan={7} className="bg-gray-50 border-b border-gray-300 py-3 px-16 text-gray-900 font-semibold">
                  {formatDate(date)}
                </td>
              </tr>
              {expenses.map((expense) => {
                let isSelected = selected.includes(expense.id);

                return (
                  <tr
                    key={expense.id}
                    className={clsx("border-l-2", {
                      "bg-gray-50 border-l-indigo-600": isSelected,
                      "border-l-transparent": !isSelected,
                    })}
                  >
                    <td className="border-b border-gray-200 py-3 px-4">
                      <Checkbox onChange={() => handleSingleSelection(expense.id)} checked={isSelected} />
                    </td>
                    <td
                      className={clsx("border-b border-gray-200 py-3 px-4 font-medium", {
                        "text-gray-900": !isSelected,
                        "text-indigo-600": isSelected,
                      })}
                    >
                      {expense.title}
                    </td>
                    <td className="border-b border-gray-200 py-3 px-4 text-gray-500">{formatDate(expense.created)}</td>
                    <td className="border-b border-gray-200 py-3 px-4 text-gray-500">
                      {formatCurrency(expense.value)}{" "}
                    </td>
                    <td className="border-b border-gray-200 py-3 px-4">
                      <Badge type={expense.value < 0 ? "expense" : "income"}>
                        {expense.value < 0 ? "Expense" : "Income"}
                      </Badge>
                    </td>
                    <td className="border-b border-gray-200 py-3 px-4 text-gray-500">{expense.category}</td>
                    <td className="border-b border-gray-200 py-3 px-4 text-gray-500">
                      <Button variant="text" className="mr-2" type="button">
                        Edit
                      </Button>
                      <Button variant="text" type="button">
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
