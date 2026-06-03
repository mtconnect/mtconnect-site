import { LINKS } from "../data/links";
import Button from "../components/Button";

const CTABanner = () => (
  <div className="bg-brand px-10 py-16 text-center">
    <h2 className="text-[34px] font-medium text-white mb-2">Start building today.</h2>
    <p className="text-[15px] text-white/75 mb-8">
      Free, open, and royalty-free. Pull the agent, hit an endpoint, and you're
      streaming live machine data.
    </p>
    <div className="flex gap-3 justify-center">
      <Button href={LINKS.docs} target="_blank" rel="noopener noreferrer" variant="white">
        Read the quickstart →
      </Button>
      <Button href={LINKS.github} target="_blank" rel="noopener noreferrer" variant="outlineWhite">
        View on GitHub
      </Button>
    </div>
  </div>
);

export default CTABanner;
