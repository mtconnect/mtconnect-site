import { Link } from "react-router-dom";
import { STANDARDS_COMMITTEE_INTRO, STANDARDS_COMMITTEE_CONTENT } from "../data/orgPages";
import ContentBlocks from "../components/ContentBlocks";

const StandardsCommittee = () => (
  <>
    <div className="px-5 md:px-10 py-12 md:py-[72px] pb-8 md:pb-10 bg-white">
      <Link to="/about" className="inline-flex items-center gap-1.5 text-[12.5px] text-slate-500 hover:text-brand transition-colors no-underline mb-6">
        ← Back to About Us
      </Link>
      <span className="inline-block bg-brand-light text-brand-dark text-[11px] font-medium tracking-[0.03em] px-3 py-1 rounded-full mb-5">
        Governance
      </span>
      <h1 className="text-[30px] sm:text-[38px] md:text-[46px] font-medium leading-[1.1] md:leading-[1.05] tracking-[-0.03em] text-slate-900 mb-5 max-w-2xl">
        Standards Committee
      </h1>
      <p className="text-[15px] md:text-[16px] text-slate-500 leading-[1.65] max-w-2xl mb-3">
        {STANDARDS_COMMITTEE_INTRO.body}
      </p>
      <p className="text-[13.5px] md:text-[14px] text-brand-dark bg-brand-light inline-block px-3 py-1.5 rounded-lg">
        {STANDARDS_COMMITTEE_INTRO.note}
      </p>
    </div>

    <section className="bg-white px-5 md:px-10 pb-12 md:pb-[72px] max-w-3xl">
      <ContentBlocks blocks={STANDARDS_COMMITTEE_CONTENT} />
    </section>
  </>
);

export default StandardsCommittee;
