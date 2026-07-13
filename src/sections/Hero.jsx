import { LINKS } from "../data/links";
import Button from "../components/Button";
import CodePanelImage from "../components/CodePanelImage";

const Hero = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center px-5 md:px-10 py-12 md:py-[72px] pb-10 md:pb-20 bg-white">
      {/* Left: copy */}
      <div>
        <span className="inline-block bg-brand-light text-brand-dark text-[11px] font-medium tracking-[0.03em] px-3 py-1 rounded-full mb-5">
          Open standard · Manufacturing · IIoT
        </span>

        <h1 className="text-[34px] sm:text-[42px] md:text-[50px] font-medium leading-[1.1] md:leading-[1.05] tracking-[-0.03em] text-slate-900 mb-1.5">
          Connect every machine.
        </h1>
        <h1 className="text-[34px] sm:text-[42px] md:text-[50px] font-medium leading-[1.1] md:leading-[1.05] tracking-[-0.03em] text-brand mb-5">
          Unlock your data.
        </h1>

        <p className="text-[15px] md:text-[16px] text-slate-500 leading-[1.65] max-w-[400px] mb-8">
          MTConnect is the open, royalty-free standard that gives manufacturing
          equipment a common language — making machine data universally
          accessible, real-time, and actionable.
        </p>

        <div className="flex flex-wrap gap-2.5 items-center">
          <Button href={LINKS.docs} target="_blank" rel="noopener noreferrer" variant="primary">
            Read the docs →
          </Button>
          <Button href={LINKS.playground} target="_blank" rel="noopener noreferrer" variant="secondary">
            Try playground →
          </Button>
          <Button href={LINKS.github} target="_blank" rel="noopener noreferrer" variant="ghost">
            View on GitHub ↗
          </Button>
        </div>
      </div>

      {/* Right: code panel SVG image */}
      <div>
        <CodePanelImage />
      </div>
    </div>

    {/* Sub-credit line */}
    <p className="text-[12px] md:text-[13px] text-slate-400 text-center pb-6 px-5 md:px-10">
      Made for developers, automation engineers, and manufacturing integrators.
    </p>
  </>
);

export default Hero;
