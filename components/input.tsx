import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: Props) {
  return (
    <input
      className={clsx(
        "border border-gray-300 h-9 px-4 text-gray-600 rounded-sm w-full focus-visible:outline-gray-200 focus-visible:outline-2 outline-none focus-visible:outline focus-visible:outline-offset-0",
        className
      )}
      {...props}
    />
  );
}
