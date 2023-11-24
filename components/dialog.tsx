import { type ReactNode, useEffect, useRef } from "react";
import Button from "@/components/button";

type Props = {
  open: boolean;
  onClose(): void;
  children: ReactNode;
  title?: string;
};

export default function Dialog({ open, onClose, title, children }: Props) {
  let ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (ref.current) {
      open ? ref.current.showModal() : ref.current.close();
    }
  }, [open]);

  return (
    <dialog ref={ref} onClose={onClose} className="backdrop:bg-gray-900/50 w-1/3 max-w-lg rounded-md shadow-xl">
      <form>
        <header className="flex items-center justify-between px-8 py-6">
          {title && <h2 className="font-bold text-gray-900 text-lg">{title}</h2>}

          <Button aria-label="close dialog" formMethod="dialog" formNoValidate variant="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
              />
            </svg>
          </Button>
        </header>

        <div className="px-8">{children}</div>

        <footer className="bg-gray-50 px-8 py-6 flex gap-x-2 justify-end mt-8">
          <Button variant="secondary" formNoValidate formMethod="dialog">
            Cancel
          </Button>
          <Button>Add</Button>
        </footer>
      </form>
    </dialog>
  );
}
