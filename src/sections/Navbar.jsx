import { LINKS } from "../data/links";
import { NAV_LINKS } from "../data/siteData";
import Button from "../components/Button";

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 h-[60px] flex items-center gap-6 px-10">
    {/* Logo */}
    <a href={LINKS.officialSite} target="_blank" rel="noopener noreferrer"
      className="text-[15px] font-medium tracking-tight whitespace-nowrap no-underline">
      <span className="text-brand">MT</span>
      <span className="text-slate-900">CONNECT</span>
      <span className="text-[9px] text-slate-400 font-normal ml-1">POWERED BY AMT</span>
    </a>

    {/* Nav links */}
    <div className="flex-1 flex gap-6 ml-4">
      {NAV_LINKS.map((item) => (
        <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
          className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors no-underline">
          {item.label}
        </a>
      ))}
    </div>

    {/* CTA */}
    <Button href={LINKS.docs} target="_blank" rel="noopener noreferrer" variant="primary">
      Get started
    </Button>
  </nav>
);

export default Navbar;
