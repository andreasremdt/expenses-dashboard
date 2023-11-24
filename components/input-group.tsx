import type { HTMLAttributes } from "react";
import clsx from "clsx";

type Props = HTMLAttributes<HTMLDivElement>;

export default function InputGroup({ className, ...props }: Props) {
  return <div className={clsx("flex flex-col gap-1 mb-4", className)} {...props} />;
}
