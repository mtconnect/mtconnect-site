import { LINKS } from "./links";

export const NAV_LINKS = [
  { label: "Docs",      href: LINKS.docs        },
  { label: "GitHub",    href: LINKS.github       },
  { label: "Community", href: LINKS.slack        },
];

export const STATS = [
  { value: "250,000+", label: "Devices worldwide"    },
  { value: "50+",      label: "Countries"            },
  { value: "15+",      label: "Years of development" },
  { value: "1,000+",   label: "Software solutions"   },
  { value: "Free",     label: "Royalty-free & open", accent: true },
];

export const WHY_CARDS = [
  {
    icon: "</>",
    title: "Simple HTTP + XML",
    body: "Any language, any platform. If you can make an HTTP request and parse XML, you can build an MTConnect application today. No SDK required.",
    code: "GET http://agent:5000/current",
  },
  {
    icon: "◎",
    title: "Works across every major vendor",
    body: "Mazak, Fanuc, Siemens, Haas, Okuma, and dozens more. Connect heterogeneous shop floors without writing custom integrations for each machine.",
    vendors: ["Mazak", "Fanuc", "Siemens", "Haas", "Okuma"],
  },
  {
    icon: "✓",
    title: "Open standard, not open-washed",
    body: "Royalty-free, no vendor lock-in, governed by AMT. The same standard used by the US DoD manufacturing base. 15+ years of backwards-compatible releases.",
  },
];

export const HOW_STEPS = [
  {
    num: "01",
    icon: "M",
    title: "Machine / device",
    body: "CNC machines, robots, sensors, and shop-floor equipment generate raw operational data continuously.",
  },
  {
    num: "02",
    icon: "Ad",
    title: "Adapter",
    body: "A lightweight adapter translates proprietary machine signals into the standard MTConnect SHDR protocol.",
  },
  {
    num: "03",
    icon: "Ag",
    title: "MTConnect agent",
    body: "The Agent buffers and normalizes data, serving it over HTTP as structured XML — accessible to any application.",
  },
  {
    num: "04",
    icon: "App",
    title: "Application",
    body: "Dashboards, analytics, MES, and ERP systems consume real-time data to drive decisions.",
  },
];

export const QS_STEPS = [
  { num: "01", title: "Pull the agent",  cmd: "docker pull mtconnect/agent"              },
  { num: "02", title: "Start it up",     cmd: "docker run -p 5000:5000 mtconnect/agent"  },
  { num: "03", title: "Query live data", cmd: "curl http://localhost:5000/current"        },
];

export const TOOL_CARDS = [
  {
    badge: "Reference",
    title: "Documentation",
    body: "Full documentation covering quickstart, architecture, data items, API reference, and code examples in Python, JavaScript & C#.",
    link: "Browse docs →",
    href: LINKS.docs,
  },
  {
    badge: "Interactive",
    title: "Model browser",
    body: "Visually explore the full MTConnect information model — browse components, data items, assets, and their relationships interactively.",
    link: "Open model browser →",
    href: LINKS.modelBrowser,
  },
  {
    badge: "Community",
    title: "MTCup",
    body: "The MTConnect community hub. Connect with implementers, share adapters and agents, get help, and collaborate on open-source projects.",
    link: "Visit MTCup →",
    href: LINKS.mtcup,
  },
  {
    badge: "Coming soon",
    title: "Online playground",
    body: "Try MTConnect directly in your browser. Connect to a live agent, run queries against sample data, and see real XML responses — no setup needed.",
    link: "Try playground →",
    href: null,
    soon: true,
  },
];

export const FOOTER_COLS = [
  {
    label: "Developers",
    links: [
      { label: "Documentation", href: LINKS.docs        },
      { label: "Quickstart",    href: LINKS.quickstart  },
      { label: "API reference", href: LINKS.apiRef      },
      { label: "GitHub ↗",     href: LINKS.github      },
    ],
  },
  {
    label: "Tools",
    links: [
      { label: "Model browser",     href: LINKS.modelBrowser },
      { label: "MTCup",             href: LINKS.mtcup        },
      { label: "Playground (soon)", href: null               },
      { label: "C++ agent",         href: LINKS.cppAgent     },
    ],
  },
  {
    label: "Community",
    links: [
      { label: "Slack",         href: LINKS.slack        },
      { label: "MTCup forum",   href: LINKS.mtcup        },
      { label: "Official site", href: LINKS.officialSite },
      { label: "AMT",           href: LINKS.amt          },
    ],
  },
];
