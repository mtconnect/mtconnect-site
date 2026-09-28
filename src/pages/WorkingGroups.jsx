import { Link } from "react-router-dom";
import {
  WORKING_GROUPS_INTRO,
  WORKING_GROUPS,
} from "../data/workingGroupsData";
import SectionLabel from "../components/SectionLabel";

const WorkingGroups = () => (
  <>
    <div className="px-5 md:px-10 py-12 md:py-[72px] pb-8 md:pb-10 bg-white">
      <Link
        to="/standards-committee"
        className="inline-flex items-center gap-1.5 text-[12.5px] text-slate-500 hover:text-brand transition-colors no-underline mb-6"
      >
        ← Back to Standards Committee
      </Link>
      <span className="inline-block bg-brand-light text-brand-dark text-[11px] font-medium tracking-[0.03em] px-3 py-1 rounded-full mb-5">
        Governance
      </span>
      <h1 className="text-[30px] sm:text-[38px] md:text-[46px] font-medium leading-[1.1] md:leading-[1.05] tracking-[-0.03em] text-slate-900 mb-5 max-w-2xl">
        Working Groups
      </h1>
      <p className="text-[15px] md:text-[16px] text-slate-500 leading-[1.65] max-w-2xl mb-3">
        {WORKING_GROUPS_INTRO.body}
      </p>
      <p className="text-[13.5px] md:text-[14px] text-brand-dark bg-brand-light inline-block px-3 py-1.5 rounded-lg">
        {WORKING_GROUPS_INTRO.note}
      </p>
    </div>

    <section className="bg-white px-5 md:px-10 pb-12 md:pb-[72px]">
      <SectionLabel>Standards Committee</SectionLabel>
      <h2 className="text-[24px] md:text-[30px] font-medium tracking-[-0.02em] text-slate-900 mb-8 md:mb-10">
        Active working groups
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mb-10">
        {WORKING_GROUPS.map((wg) => (
          <div
            key={wg.name}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-7"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <p className="text-[14.5px] font-medium text-slate-900 leading-[1.4]">
                {wg.name}
              </p>
              {wg.meeting && (
                <span className="flex-shrink-0 text-[10px] font-medium tracking-[0.04em] text-brand-dark bg-brand-light px-2.5 py-1 rounded-full text-right">
                  {wg.meeting}
                </span>
              )}
            </div>
            <p className="text-[12.5px] text-slate-500 leading-[1.65]">
              {wg.body}
            </p>
            {wg.parent && (
              <p className="text-[11.5px] text-slate-400 mt-3">
                Subcommittee of the {wg.parent}
              </p>
            )}
          </div>
        ))}
      </div>

      <a
        href="https://projects.mtconnect.org/projects"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-[13.5px] md:text-[14px] font-medium text-brand hover:underline"
      >
        Browse working group activity on the MTConnect projects site →
      </a>
    </section>
  </>
);

export default WorkingGroups;
