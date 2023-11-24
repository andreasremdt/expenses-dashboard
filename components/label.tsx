import type { LabelHTMLAttributes } from "react";
import clsx from "clsx";

type Props = LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ className, ...props }: Props) {
  return <label className={clsx("block text-gray-900 font-semibold", className)} {...props} />;
}
