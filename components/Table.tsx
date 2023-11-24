import { Fragment, type ReactNode, useState } from "react";
import { filterExpenses, formatDate, groupExpenses } from "@/lib/utils";
import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import TableRow from "@/components/table-row";
import TableCell from "@/components/table-cell";
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
            <TableCell as="th" className="w-8">
              <Checkbox
                indeterminate={selected.length > 0 && selected.length < expenses.length}
                checked={selected.length === expenses.length}
                onChange={handleMultiSelection}
              />
            </TableCell>
            <TableCell as="th">Title</TableCell>
            <TableCell as="th">Date</TableCell>
            <TableCell as="th">Value</TableCell>
            <TableCell as="th">Type</TableCell>
            <TableCell as="th">Category</TableCell>
            <TableCell as="th" />
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

              {expenses.map((expense) => (
                <TableRow key={expense.id} expense={expense} selected={selected} onSelection={handleSingleSelection} />
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
