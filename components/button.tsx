import { type ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "text";
};

let styles = {
  primary:
    "bg-gray-800 text-white hover:bg-gray-700 focus-visible:bg-gray-700 px-4 rounded-sm h-9 focus-visible:outline-gray-300 focus-visible:outline-2",
  secondary:
    "bg-white text-gray-800 px-4 rounded-sm h-9 border border-gray-300 hover:bg-gray-100 focus-visible:bg-gray-100 focus-visible:outline-gray-200 focus-visible:outline-2",
  text: "text-gray-800 hover:text-gray-600 p-1 rounded-sm focus-visible:text-gray-600 focus-visible:outline-gray-300 focus-visible:outline-2",
};

export default function Button({ variant = "primary", className, ...props }: Props) {
  return (
    <button
      className={clsx(
        "font-medium tracking-wider text-xs uppercase outline-none focus-visible:outline focus-visible:outline-offset-0",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}
