import { useRef, type InputHTMLAttributes, useEffect } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
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
        className="block w-4 h-4 rounded-sm border border-gray-300 peer-checked:bg-gray-800 peer-checked:border-gray-800 peer-indeterminate:bg-gray-800 peer-indeterminate:border-gray-800 peer-checked:bg-checked peer-indeterminate:bg-indeterminate peer-focus:outline peer-focus:outline-2 peer-focus:outline-gray-800 peer-focus:outline-offset-2"
      />
    </label>
  );
}
