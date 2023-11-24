import type { HTMLAttributes } from "react";
import clsx from "clsx";

type Props = HTMLAttributes<HTMLTableCellElement> & {
  as?: "th" | "td";
};

export default function TableCell({ className, as = "td", ...props }: Props) {
  let Tag = as;

  return (
    <Tag
      className={clsx(
        "border-b py-3 px-4",
        {
          "border-gray-200  text-gray-500": as === "td",
          "border-gray-300 text-left text-gray-900 font-semibold": as === "th",
        },
        className
      )}
      {...props}
    />
  );
}
