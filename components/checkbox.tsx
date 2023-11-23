import { useRef, type ComponentPropsWithoutRef, useEffect } from "react";

type Props = ComponentPropsWithoutRef<"input"> & {
  indeterminate?: boolean;
};

export default function Checkbox({ className, indeterminate, ...props }: Props) {
  let ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);

  return (
    <label className={className}>
      <input className="sr-only peer" {...props} type="checkbox" ref={ref} />
      <span
        aria-hidden="true"
        className="block w-4 h-4 rounded-sm border border-gray-300 peer-checked:bg-indigo-600 peer-checked:border-indigo-600 peer-indeterminate:bg-indigo-600 peer-indeterminate:border-indigo-600 peer-checked:bg-checked peer-indeterminate:bg-indeterminate peer-focus:outline peer-focus:outline-2 peer-focus:outline-indigo-600 peer-focus:outline-offset-2"
      />
    </label>
  );
}
