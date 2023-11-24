import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function RadioGroup({ className, children, ...props }: Props) {
  return (
    <label className={className}>
      <input className="sr-only peer" {...props} type="radio" />
      <span className="font-medium inline-flex items-center w-full justify-center cursor-pointer tracking-wider text-xs uppercase outline-none peer-focus-visible:outline peer-focus-visible:outline-offset-0 bg-white text-gray-800 px-4 rounded-sm h-9 border border-gray-300 hover:bg-gray-100 peer-focus-visible:outline-gray-200 peer-focus-visible:outline-2 peer-checked:bg-gray-800 peer-checked:border-gray-800 peer-checked:text-white peer-checked:hover:bg-gray-700  peer-checked:peer-focus-visible:bg-gray-700">
        {children}
      </span>
    </label>
  );
}
