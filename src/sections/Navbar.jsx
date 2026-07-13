import { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../data/siteData";
import Button from "../components/Button";
import mtconnectLogo from "../assets/mtconnect-logo.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="h-[60px] flex items-center gap-6 px-5 md:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center no-underline">
          <img src={mtconnectLogo} alt="MTConnect — Powered by AMT" className="h-7 md:h-9 w-auto" />
        </Link>

        {/* Nav links (desktop) */}
        <div className="hidden md:flex flex-1 gap-6 ml-4">
          <Link to="/about"
            className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors no-underline">
            About Us
          </Link>
          <Link to="/blogs"
            className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors no-underline">
            Blog
          </Link>
          {NAV_LINKS.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
              className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors no-underline">
              {item.label}
            </a>
          ))}
        </div>

        {/* Spacer on mobile so CTA/menu sit right */}
        <div className="flex-1 md:hidden" />

        {/* CTA (desktop) */}
        <div className="hidden md:block">
          <Button href="mailto:info@mtconnect.org" variant="primary">
            Contact Us
          </Button>
        </div>

        {/* Hamburger toggle (mobile) */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-600 hover:bg-slate-50"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-5 py-4 flex flex-col gap-4">
          <Link to="/about" onClick={() => setOpen(false)}
            className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors no-underline">
            About Us
          </Link>
          <Link to="/blogs" onClick={() => setOpen(false)}
            className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors no-underline">
            Blog
          </Link>
          {NAV_LINKS.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
              className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors no-underline">
              {item.label}
            </a>
          ))}
          <Button href="mailto:info@mtconnect.org" variant="primary" className="justify-center">
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;