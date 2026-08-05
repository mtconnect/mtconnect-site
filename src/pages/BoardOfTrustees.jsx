import { Link } from "react-router-dom";
import { BOARD_OF_TRUSTEES } from "../data/orgPages";
import PersonCard from "../components/PersonCard";
import SectionLabel from "../components/SectionLabel";

const BoardOfTrustees = () => (
  <>
    <div className="px-5 md:px-10 py-12 md:py-[72px] pb-8 md:pb-10 bg-white">
      <Link to="/about" className="inline-flex items-center gap-1.5 text-[12.5px] text-slate-500 hover:text-brand transition-colors no-underline mb-6">
        ← Back to About Us
      </Link>
      <span className="inline-block bg-brand-light text-brand-dark text-[11px] font-medium tracking-[0.03em] px-3 py-1 rounded-full mb-5">
        Governance
      </span>
      <h1 className="text-[30px] sm:text-[38px] md:text-[46px] font-medium leading-[1.1] md:leading-[1.05] tracking-[-0.03em] text-slate-900 mb-5 max-w-2xl">
        Board of Trustees
      </h1>
      <p className="text-[15px] md:text-[16px] text-slate-500 leading-[1.65] max-w-2xl">
        The MTConnect Institute Board of Trustees provides oversight and
        strategic direction for the organization.
      </p>
    </div>

    <section className="bg-white px-5 md:px-10 pb-12 md:pb-[72px]">
      <SectionLabel>Officers</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] mb-12 md:mb-16">
        {BOARD_OF_TRUSTEES.officers.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
      </div>

      <SectionLabel>Trustees</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18px] mb-12 md:mb-16">
        {BOARD_OF_TRUSTEES.trustees.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
      </div>

      <SectionLabel>Directors Emeritus</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
        {BOARD_OF_TRUSTEES.emeritus.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
      </div>
    </section>
  </>
);

export default BoardOfTrustees;
