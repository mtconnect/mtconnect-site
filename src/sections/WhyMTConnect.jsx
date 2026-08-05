import { WHY_CARDS } from "../data/siteData";
import SectionLabel from "../components/SectionLabel";

const WhyMTConnect = () => (
  <section className="bg-white px-5 md:px-10 py-12 md:py-[72px]">
    <SectionLabel>Why MTConnect</SectionLabel>
    <h2 className="text-[24px] md:text-[30px] font-medium tracking-[-0.02em] text-slate-900 mb-2">
      Built for developers. Proven in production.
    </h2>
    <p className="text-[14px] md:text-[15px] text-slate-500 mb-8 md:mb-10 max-w-xl">
      Simple protocol. Vendor-neutral. Fifteen years of real-world deployments.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18px]">
      {WHY_CARDS.map((card) => (
        <div key={card.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-7">
          <p className="text-xl text-brand font-medium mb-3.5">{card.icon}</p>
          <p className="text-[14px] font-medium text-slate-900 mb-2.5">{card.title}</p>
          <p className="text-[12.5px] text-slate-500 leading-[1.65]">{card.body}</p>

          {card.code && (
            <div className="mt-3.5 bg-code-bg rounded px-3 py-2 font-mono text-[11px] text-code-text overflow-x-auto">
              {card.code}
            </div>
          )}

          {card.vendors && (
            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {card.vendors.map((v) => (
                <span key={v} className="bg-white border border-slate-200 rounded px-2 py-0.5 text-[11px] text-slate-500">
                  {v}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default WhyMTConnect;
