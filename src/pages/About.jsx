import { Link } from "react-router-dom";
import { LINKS } from "../data/links";
import {
  ABOUT_INTRO,
  ORG_GROUPS,
  STANDARD_BLURB,
  ABOUT_FAQS,
  RND_BLURB,
} from "../data/aboutData";
import Button from "../components/Button";
import SectionLabel from "../components/SectionLabel";
import FAQAccordion from "../components/FAQAccordion";

const About = () => (
  <>
    {/* Intro */}
    <div className="px-5 md:px-10 py-12 md:py-[72px] pb-8 md:pb-12 bg-white">
      <span className="inline-block bg-brand-light text-brand-dark text-[11px] font-medium tracking-[0.03em] px-3 py-1 rounded-full mb-5">
        {ABOUT_INTRO.eyebrow}
      </span>
      <h1 className="text-[30px] sm:text-[38px] md:text-[46px] font-medium leading-[1.1] md:leading-[1.05] tracking-[-0.03em] text-slate-900 mb-5 max-w-2xl">
        {ABOUT_INTRO.title}
      </h1>
      <p className="text-[15px] md:text-[16px] text-slate-500 leading-[1.65] max-w-2xl">
        {ABOUT_INTRO.body}
      </p>
    </div>

    {/* Organization */}
    <section className="bg-white px-5 md:px-10 py-12 md:py-[72px] pt-0 md:pt-0">
      <SectionLabel>How we're organized</SectionLabel>
      <h2 className="text-[24px] md:text-[30px] font-medium tracking-[-0.02em] text-slate-900 mb-2">
        Governed by the people who use the standard.
      </h2>
      <p className="text-[14px] md:text-[15px] text-slate-500 mb-8 md:mb-10 max-w-xl">
        Three groups keep MTConnect moving — strategic oversight, daily operations,
        and the technical work of the standard itself.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18px]">
        {ORG_GROUPS.map((group) => (
          <Link
            key={group.title}
            to={group.href}
            className="block bg-slate-50 border border-slate-200 hover:border-brand rounded-2xl p-6 md:p-7 no-underline transition-colors"
          >
            <p className="text-[14px] font-medium text-slate-900 mb-2.5">{group.title}</p>
            <p className="text-[12.5px] text-slate-500 leading-[1.65]">{group.body}</p>
          </Link>
        ))}
      </div>
    </section>

    {/* Standard blurb */}
    <section className="bg-code-bg px-5 md:px-10 py-12 md:py-[72px]">
      <div className="max-w-2xl">
        <p className="text-[11px] font-medium text-code-accent tracking-[0.08em] uppercase mb-2">
          The standard
        </p>
        <h2 className="text-[22px] md:text-[28px] font-medium tracking-[-0.02em] text-white mb-3">
          {STANDARD_BLURB.title}
        </h2>
        <p className="text-[13.5px] md:text-[14.5px] text-white/60 leading-[1.65]">
          {STANDARD_BLURB.body}
        </p>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-white px-5 md:px-10 py-12 md:py-[72px]">
      <SectionLabel>FAQ</SectionLabel>
      <h2 className="text-[24px] md:text-[30px] font-medium tracking-[-0.02em] text-slate-900 mb-2">
        Frequently asked questions
      </h2>
      <p className="text-[14px] md:text-[15px] text-slate-500 mb-8 md:mb-10 max-w-xl">
        Common questions about what MTConnect is, and how it fits alongside
        what you're already running on the shop floor.
      </p>

      <div className="max-w-3xl">
        <FAQAccordion items={ABOUT_FAQS} />
      </div>
    </section>

    {/* R&D + CTA */}
    <div className="bg-brand px-5 md:px-10 py-12 md:py-16 text-center">
      <h2 className="text-[26px] md:text-[34px] font-medium text-white mb-2">{RND_BLURB.title}</h2>
      <p className="text-[14px] md:text-[15px] text-white/75 mb-8 max-w-xl mx-auto">
        {RND_BLURB.body}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Button href={LINKS.rd} target="_blank" rel="noopener noreferrer" variant="white" className="w-full sm:w-auto justify-center">
          View R&D projects →
        </Button>
        <Button href={LINKS.join} target="_blank" rel="noopener noreferrer" variant="outlineWhite" className="w-full sm:w-auto justify-center">
          Become a member
        </Button>
      </div>
    </div>
  </>
);

export default About;
