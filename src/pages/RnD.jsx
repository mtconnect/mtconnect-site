import { Link } from "react-router-dom";
import { RND_PROJECTS, RND_RESOURCES } from "../data/rndData";
import SectionLabel from "../components/SectionLabel";

const StatusPill = ({ status }) => (
  <span
    className={`text-[10px] font-medium tracking-[0.06em] uppercase px-2.5 py-1 rounded-full ${
      status === "Ongoing"
        ? "bg-brand-light text-brand-dark"
        : "bg-slate-100 text-slate-500"
    }`}
  >
    {status}
  </span>
);

const RnD = () => (
  <>
    <div className="px-5 md:px-10 py-12 md:py-[72px] pb-8 md:pb-10 bg-white">
      <Link to="/about" className="inline-flex items-center gap-1.5 text-[12.5px] text-slate-500 hover:text-brand transition-colors no-underline mb-6">
        ← Back to About Us
      </Link>
      <span className="inline-block bg-brand-light text-brand-dark text-[11px] font-medium tracking-[0.03em] px-3 py-1 rounded-full mb-5">
        Research & Development
      </span>
      <h1 className="text-[30px] sm:text-[38px] md:text-[46px] font-medium leading-[1.1] md:leading-[1.05] tracking-[-0.03em] text-slate-900 mb-5 max-w-2xl">
        Past, current, and planned projects
      </h1>
      <p className="text-[15px] md:text-[16px] text-slate-500 leading-[1.65] max-w-2xl">
        A look at research and development efforts built on the MTConnect
        standard — funded and run in partnership with government, academic,
        and industry organizations.
      </p>
    </div>

    <section className="bg-white px-5 md:px-10 pb-12 md:pb-[72px]">
      <SectionLabel>Projects</SectionLabel>
      <h2 className="text-[24px] md:text-[30px] font-medium tracking-[-0.02em] text-slate-900 mb-8 md:mb-10">
        MTConnect-powered research
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mb-12 md:mb-16">
        {RND_PROJECTS.map((project) => (
          <div key={project.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-7">
            <div className="flex items-start justify-between gap-3 mb-3">
              <p className="text-[14.5px] font-medium text-slate-900 leading-[1.4]">{project.title}</p>
              <StatusPill status={project.status} />
            </div>
            <p className="text-[12.5px] text-slate-500 leading-[1.65] mb-4">{project.body}</p>
            <p className="text-[12px] text-slate-400 mb-1">{project.funder}</p>
            {project.team && <p className="text-[12px] text-slate-400 mb-3">{project.team}</p>}
            {project.link && (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[12.5px] font-medium text-brand hover:underline"
              >
                {project.link.label}
              </a>
            )}
          </div>
        ))}
      </div>

      <SectionLabel>Resources</SectionLabel>
      <h2 className="text-[24px] md:text-[30px] font-medium tracking-[-0.02em] text-slate-900 mb-8 md:mb-10">
        Explore published research & open-source tools
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
        {RND_RESOURCES.map((res) => (
          <div key={res.title} className="bg-code-bg rounded-2xl p-6 md:p-7">
            <p className="text-[14.5px] font-medium text-white mb-2.5">{res.title}</p>
            <p className="text-[12.5px] text-white/60 leading-[1.65] mb-4">{res.body}</p>
            <a
              href={res.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[12.5px] font-medium text-code-accent hover:underline"
            >
              {res.link.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default RnD;
