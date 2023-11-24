import type { HTMLAttributes } from "react";
import type { Expense } from "@/types";
import clsx from "clsx";
import TableCell from "@/components/table-cell";
import { formatCurrency, formatDate } from "@/lib/utils";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import Badge from "@/components/badge";

type Props = HTMLAttributes<HTMLTableRowElement> & {
  expense: Expense;
  selected: string[];
  onSelection(expenseId: string): void;
};

export default function TableRow({ className, expense, selected, onSelection, ...props }: Props) {
  let isSelected = selected.includes(expense.id);

  return (
    <tr
      key={expense.id}
      className={clsx("border-l-2", {
        "bg-gray-50 border-l-gray-800": isSelected,
        "border-l-transparent": !isSelected,
        className,
      })}
      {...props}
    >
      <TableCell>
        <Checkbox onChange={() => onSelection(expense.id)} checked={isSelected} />
      </TableCell>
      <TableCell className="font-medium text-gray-900">{expense.title}</TableCell>
      <TableCell>{formatDate(expense.created)}</TableCell>
      <TableCell>{formatCurrency(expense.value)} </TableCell>
      <TableCell>
        <Badge type={expense.value < 0 ? "expense" : "income"}>{expense.value < 0 ? "Expense" : "Income"}</Badge>
      </TableCell>
      <TableCell>{expense.category}</TableCell>
      <TableCell>
        <Button variant="text" className="mr-2" type="button">
          Edit
        </Button>
        <Button variant="text" type="button">
          Delete
        </Button>
      </TableCell>
    </tr>
  );
}
