import { useState } from "react";

const FAQItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 md:py-5 bg-transparent border-none cursor-pointer"
      >
        <span className="text-[14px] md:text-[15px] font-medium text-slate-900">{q}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`flex-shrink-0 text-brand transition-transform duration-150 ${open ? "rotate-45" : ""}`}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      {open && (
        <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
          <p className="text-[13px] md:text-[14px] text-slate-500 leading-[1.65]">{a}</p>
        </div>
      )}
    </div>
  );
};

const FAQAccordion = ({ items }) => (
  <div className="flex flex-col gap-3">
    {items.map((item, i) => (
      <FAQItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
    ))}
  </div>
);

export default FAQAccordion;
