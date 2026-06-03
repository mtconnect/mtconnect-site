import { TOOL_CARDS } from "../data/siteData";
import SectionLabel from "../components/SectionLabel";

const ToolCard = ({ badge, title, body, link, href, soon }) => {
  const Tag = href ? "a" : "div";
  const extraProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      {...extraProps}
      className={`bg-white border rounded-2xl p-7 flex flex-col min-h-[180px]
                  transition-all duration-200 no-underline text-inherit
                  hover:-translate-y-0.5 hover:shadow-xl hover:border-brand
                  ${soon ? "border-dashed border-slate-200" : "border-slate-200"}`}
    >
      <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded self-start mb-3.5
                        ${soon
                          ? "bg-amber-100 text-amber-800"
                          : "bg-brand-light text-brand-dark"}`}>
        {badge}
      </span>
      <p className="text-[14px] font-medium text-slate-900 mb-2">{title}</p>
      <p className="text-[12.5px] text-slate-500 leading-[1.6] flex-1">{body}</p>
      <p className={`text-[12px] font-medium mt-4 ${soon ? "text-slate-400" : "text-brand"}`}>
        {link}
      </p>
    </Tag>
  );
};

const ExploreTools = () => (
  <section className="bg-slate-50 px-10 py-[72px]">
    <SectionLabel>Explore tools</SectionLabel>
    <h2 className="text-[30px] font-medium tracking-[-0.02em] text-slate-900 mb-2">
      Everything you need to get started
    </h2>
    <p className="text-[15px] text-slate-500 mb-10 max-w-xl">
      From live machine models to community resources — all the MTConnect
      ecosystem in one place.
    </p>

    <div className="grid grid-cols-2 gap-[18px]">
      {TOOL_CARDS.map((card) => (
        <ToolCard key={card.title} {...card} />
      ))}
    </div>
  </section>
);

export default ExploreTools;
