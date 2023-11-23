import { type ComponentPropsWithRef, type Ref, forwardRef } from "react";
import clsx from "clsx";

type Props = ComponentPropsWithRef<"button"> & {
  variant?: "primary" | "secondary";
};

let styles = {
  primary: "bg-indigo-500 text-white hover:bg-indigo-600 focus-visible:bg-indigo-600",
  secondary: "text-indigo-500 hover:text-indigo-700 hover:bg-gray-50 focus-visible:text-indigo-600",
};

export default forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = "primary", type = "button", className, ...props }: Props,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button
      className={clsx(
        "font-semibold outline-none px-4 py-2 rounded-sm focus-visible:outline focus-visible:outline-indigo-600",
        styles[variant],
        className
      )}
      type={type}
      {...props}
      ref={ref}
    />
  );
});
