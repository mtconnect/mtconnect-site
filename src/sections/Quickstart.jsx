import { LINKS } from "../data/links";
import { QS_STEPS } from "../data/siteData";
import SectionLabel from "../components/SectionLabel";

const Quickstart = () => (
  <section className="bg-slate-50 px-10 py-[72px]">
    <SectionLabel>Quickstart</SectionLabel>
    <h2 className="text-[30px] font-medium tracking-[-0.02em] text-slate-900 mb-2">
      From zero to live data in 15 minutes.
    </h2>
    <p className="text-[15px] text-slate-500 mb-10 max-w-xl">
      No account. No setup wizard. Just Docker and a terminal.
    </p>

    {/* Steps */}
    <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center">
      {QS_STEPS.map((step, i) => (
        <>
          <div key={step.num} className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-[11px] font-medium text-brand mb-2">{step.num}</p>
            <p className="text-[14px] font-medium text-slate-900 mb-2.5">{step.title}</p>
            <code className="block bg-code-bg text-code-text font-mono text-[11.5px] px-3 py-2 rounded overflow-hidden text-ellipsis whitespace-nowrap">
              {step.cmd}
            </code>
          </div>
          {i < QS_STEPS.length - 1 && (
            <span key={`arrow-${i}`} className="px-3 pb-5 text-brand text-xl text-center">
              →
            </span>
          )}
        </>
      ))}
    </div>

    <a href={LINKS.docs} target="_blank" rel="noopener noreferrer"
      className="block mt-5 text-[13px] text-brand font-medium no-underline hover:underline">
      Read the full quickstart guide →
    </a>
  </section>
);

export default Quickstart;
