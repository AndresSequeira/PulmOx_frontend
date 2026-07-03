import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Faq } from "../../types";

interface FaqListProps {
  items: Faq[];
}

export function FaqList({ items }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="rounded-lg border border-brand-line bg-white">
            <button
              type="button"
              className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3 text-left font-semibold"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen ? <p className="px-4 pb-4 text-sm leading-6 text-slate-600">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
