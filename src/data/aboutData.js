export const ABOUT_INTRO = {
  eyebrow: "About Us",
  title: "The MTConnect Institute",
  body:
    "The MTConnect Institute is a 501(c)(6) not-for-profit standards development organization for the MTConnect standard (ANSI/MTC2.5-2018). Its membership is made up of over 400 companies and research organizations in discrete manufacturing including automotive, aerospace, medical, and other industries as well as software developers, system integrators, and research organizations supporting those industries. Membership is free and open to anyone with a stake in MTConnect.",
};

export const ORG_GROUPS = [
  {
    title: "Board of Trustees",
    body: "The MTConnect Institute Board of Trustees provides oversight and strategic direction.",
    href: "/board-of-trustees",
  },
  {
    title: "Administration",
    body: "The MTConnect Administration manages the day-to-day operations and supports the execution of the organization's initiatives and programs.",
    href: "/administration",
  },
  {
    title: "Standards Committee",
    body: "Institute members sitting on the Standards Committee and its working groups are responsible for the development and maintenance of the MTConnect standard. Membership is free and open to any members of the MTConnect Institute.",
    href: "/standards-committee",
  },
];

export const STANDARD_BLURB = {
  title: "The MTConnect standard",
  body: "The MTConnect standard (ANSI/MTC2.5-2018) offers a semantic vocabulary for manufacturing equipment to provide structured, contextualized data with no proprietary format.",
};

export const ABOUT_FAQS = [
  {
    q: "Is MTConnect software?",
    a: "No. The standard defines data tags and the behavior of a software agent.",
  },
  {
    q: "What is the standard used for?",
    a: "There is no one target use case. Any application that benefits from a normalized, pre-defined vocabulary of terms will benefit from adhering to the MTConnect standard. In practice, MTConnect is widely used for factory floor monitoring, OEE calculation, predictive analytics or maintenance, manufacturing cell integration, scheduling and routing, and ERP integration.",
  },
  {
    q: "How do I use MTConnect?",
    a: "Most manufacturers using MTConnect buy machines, software, and systems that support the standard. Devices require a software adapter to translate native registers/data tags to the vocabulary defined in the MTConnect spec. Most users will only access their device data via another application (OEE software, MES, etc.)",
  },
  {
    q: "Where can I get it?",
    a: "Current and archive releases of the standard are free and publicly available at mtconnect.org/documents. Free, open source developer tools are on GitHub at github.com/mtconnect.",
  },
  {
    q: "Do I need MTConnect if I'm already using another protocol (OPC, Profinet, Modbus, SCADA, etc.)?",
    a: "Terms defined in MTConnect are specific to discrete manufacturing and intended to carry useful real-world semantic meaning. That vocabulary is created, vetted, and agreed upon by industry stakeholders with domain expertise. For applications where uniform semantics are already defined, the additional semantic definitions from MTConnect may be unnecessary. However, most industrial connectivity protocols are designed to carry data quickly, securely, and reliably while leaving semantic data definitions up to users or other standards development organizations. MTConnect data can be carried over other protocols — see the OPC UA companion specification for an example.",
  },
];

export const RND_BLURB = {
  title: "Research & Development",
  body: "See past, current, and planned projects built on the MTConnect standard.",
};
