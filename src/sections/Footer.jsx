import { FOOTER_COLS } from "../data/siteData";

// Social icon SVGs (inline, no extra dependency needed)
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const SlackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mtconnect/",
    Icon: LinkedInIcon,
  },
  {
    label: "Slack",
    href: "https://mtconnect.slack.com",
    Icon: SlackIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/mtconnect",
    Icon: GitHubIcon,
  },
];

const Footer = () => (
  <footer className="bg-code-bg px-10 pt-12 pb-7">
    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 mb-9">
      {/* Brand col */}
      <div>
        <p className="text-[15px] font-medium text-white mb-3">
          <span className="text-code-accent">MT</span>CONNECT
        </p>
        <p className="text-[12px] text-white/40 leading-[1.65] mb-5">
          The open, royalty-free standard for manufacturing equipment data
          interoperability. Developed and maintained by AMT.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="
                flex items-center justify-center w-8 h-8 rounded-md
                text-white/40 hover:text-white
                bg-white/[0.05] hover:bg-white/[0.12]
                transition-all duration-150
              "
            >
              <Icon />
            </a>
          ))}
        </div>
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
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-white/50 hover:text-white/90 transition-colors no-underline"
                >
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
