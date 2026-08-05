/**
 * Reusable Button / anchor component.
 * variant: "primary" | "secondary" | "ghost" | "white" | "outlineWhite"
 */
const Button = ({ href, children, variant = "primary", className = "", target, rel, ...props }) => {
  const base = "inline-flex items-center font-medium transition-colors duration-150 cursor-pointer";

  const variants = {
    primary:
      "bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-lg text-[13px]",
    secondary:
      "bg-white border border-slate-300 hover:border-brand hover:bg-slate-50 text-slate-600 px-4 py-2 rounded-lg text-[13px]",
    ghost:
      "bg-transparent border-none text-slate-600 hover:text-slate-900 px-3 py-2 text-[13px]",
    white:
      "bg-white text-brand hover:bg-blue-50 px-6 py-3 rounded-lg text-[14px] font-medium",
    outlineWhite:
      "bg-transparent border border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-lg text-[14px]",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} target={target} rel={rel} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

export default Button;
