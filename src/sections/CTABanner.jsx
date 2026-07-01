import { LINKS } from "../data/links";
import Button from "../components/Button";

const CTABanner = () => (
  <div className="bg-brand px-5 md:px-10 py-12 md:py-16 text-center">
    <h2 className="text-[26px] md:text-[34px] font-medium text-white mb-2">Start building today.</h2>
    <p className="text-[14px] md:text-[15px] text-white/75 mb-8">
      Free, open, and royalty-free. Pull the agent, hit an endpoint, and you're
      streaming live machine data.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
      <Button href={LINKS.docs} target="_blank" rel="noopener noreferrer" variant="white" className="w-full sm:w-auto justify-center">
        Read the quickstart →
      </Button>
      <Button href={LINKS.github} target="_blank" rel="noopener noreferrer" variant="outlineWhite" className="w-full sm:w-auto justify-center">
        View on GitHub
      </Button>
    </div>
  </div>
);

export default CTABanner;
