import { HOW_STEPS } from "../data/siteData";
import SectionLabel from "../components/SectionLabel";

const HowItWorks = () => (
  <section className="bg-white px-5 md:px-10 py-12 md:py-[72px]">
    <SectionLabel>How it works</SectionLabel>
    <h2 className="text-[24px] md:text-[30px] font-medium tracking-[-0.02em] text-slate-900 mb-2">
      From machine to insight — simply
    </h2>
    <p className="text-[14px] md:text-[15px] text-slate-500 mb-8 md:mb-10 max-w-xl">
      MTConnect defines a structured, semantic framework that bridges
      manufacturing equipment and modern software.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center md:items-start gap-4 md:gap-0">
      {HOW_STEPS.map((step, i) => (
        <>
          <div key={step.num}
            className="w-full border border-slate-200 rounded-xl p-5 transition-all duration-200
                       hover:shadow-lg hover:border-brand">
            <span className="inline-block bg-brand-light text-brand-dark text-[10px] font-medium px-2 py-0.5 rounded-full mb-3">
              {step.num}
            </span>
            <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center
                            text-[13px] font-medium text-brand mb-3">
              {step.icon}
            </div>
            <p className="text-[13px] font-medium text-slate-900 mb-1.5">{step.title}</p>
            <p className="text-[12px] text-slate-500 leading-[1.6]">{step.body}</p>
          </div>
          {i < HOW_STEPS.length - 1 && (
            <span key={`arrow-${i}`} className="text-brand text-lg rotate-90 md:rotate-0 md:pt-11 md:px-2">→</span>
          )}
        </>
      ))}
    </div>

    <p className="text-[12px] text-slate-400 text-center mt-7 italic">
      All communication is read-only HTTP. No firewall changes required.
    </p>
  </section>
);

export default HowItWorks;
