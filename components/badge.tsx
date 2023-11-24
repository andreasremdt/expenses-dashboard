import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  type?: "expense" | "income";
};

const styles = {
  expense: "border-red-200 bg-red-50 text-red-700",
  income: "border-green-200 bg-green-50 text-green-800",
};

export default function Badge({ children, className, type = "expense", ...props }: Props) {
  return (
    <span className={clsx("font-medium border rounded-md px-2 py-1 text-xs", styles[type], className)} {...props}>
      {children}
    </span>
  );
}
