import { FOOTER_COLS } from "../data/siteData";
import { LINKS } from "../data/links";

const Footer = () => (
  <footer className="bg-code-bg px-10 pt-12 pb-7">
    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 mb-9">
      {/* Brand col */}
      <div>
        <p className="text-[15px] font-medium text-white mb-3">
          <span className="text-code-accent">MT</span>CONNECT
        </p>
        <p className="text-[12px] text-white/40 leading-[1.65]">
          The open, royalty-free standard for manufacturing equipment data
          interoperability. Developed and maintained by AMT.
        </p>
      </div>

      {/* Link columns */}
      {FOOTER_COLS.map((col) => (
        <div key={col.label}>
          <p className="text-[10px] font-medium text-white/40 tracking-[0.06em] uppercase mb-3.5">
            {col.label}
          </p>
          <div className="flex flex-col gap-2.5">
            {col.links.map((link) =>
              link.href ? (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="text-[12px] text-white/50 hover:text-white/90 transition-colors no-underline">
                  {link.label}
                </a>
              ) : (
                <span key={link.label} className="text-[12px] text-white/30">
                  {link.label}
                </span>
              )
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/[0.07] pt-5 flex justify-between items-center">
      <span className="text-[11px] text-white/30">
        © 2026 MTConnect Institute. Open standard — free for all.
      </span>
      <span className="text-[11px] text-white/30">Governed by AMT</span>
    </div>
  </footer>
);

export default Footer;
