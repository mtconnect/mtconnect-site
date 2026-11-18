import React from "react";

// ---------------------------------------------------------------------------
// Companion Specifications page
// Route: /companion-specifications
// ---------------------------------------------------------------------------

const overview = [
  { name: "OPC UA", type: "Companion Specification" },
  { name: "B2MML", type: "Companion Specification" },
  { name: "MQTT", type: "Companion Specification" },
  { name: "umati", type: "Mapping" },
  { name: "Universal Scene Description", type: "Mapping" },
  { name: "i3X", type: "Mapping" },
  { name: "NC-Link", type: "Proposed" },
];

const specs = [
  {
    id: "mtconnect-standard",
    title: "MTConnect Standard",
    tag: "Standard",
    href: "https://mtconnect.squarespace.com/standard-download20181",
    body: (
      <>
        Free to download. From Version 2.0, released as SysML model. Archived
        releases are text plus XML schema. Developer tools for implementing the
        standard are hosted on{" "}
        <ExternalLink href="https://www.github.com/mtconnect">
          GitHub
        </ExternalLink>
        .
      </>
    ),
  },
  {
    id: "opc-ua",
    title: "OPC UA Companion Specification",
    tag: "Companion Specification",
    href: "https://mtconnect.squarespace.com/opc-ua-companion-specification",
    body: (
      <>
        Free to download from OPC Foundation. Representation of the MTConnect
        model in UA.
      </>
    ),
  },
  {
    id: "b2mml",
    title: "B2MML Companion Specification",
    tag: "Companion Specification",
    href: "https://mtconnect.squarespace.com/b2mml-companion-specification",
    body: (
      <>
        Free to download. Additional documentation for implementing B2MML with
        MTConnect is available on the MTConnect User Portal wiki at{" "}
        <ExternalLink href="https://www.mtcup.org/en/B2MML">
          www.mtcup.org/en/B2MML
        </ExternalLink>
        .
      </>
    ),
  },
  {
    id: "mqtt",
    title: "MQTT Companion Specification",
    tag: "Companion Specification",
    href: null,
    body: <>Empty for now.</>,
  },
  {
    id: "umati",
    title: "umati Companion Specification",
    tag: "Mapping",
    href: "https://showcase.umati.org/",
    body: (
      <>
        An initiative of the German Machine Tool Builders Association - VDW,
        umati (universal machine technology interface) is a community of the
        machine building industries and their customers for the promotion and
        adoption of open, standardized interfaces based on OPC UA.
        <br />
        <br />
        Learn more about umati and related specifications of the OPC Foundation
        at{" "}
        <ExternalLink href="https://showcase.umati.org/">
          showcase.umati.org
        </ExternalLink>
        .
      </>
    ),
  },
  {
    id: "usd",
    title: "Universal Scene Description (USD) Mapping",
    tag: "Mapping",
    href: "https://github.com/mtconnect/mtconnect-openusd",
    body: (
      <>
        Free to download. Universal Scene Description (USD) is a 3D graphics
        package format. Mapping documents follow a template prescribed by the
        Alliance for OpenUSD. This is a precursor to an official companion
        specification.
      </>
    ),
  },
  {
    id: "i3x",
    title: "i3X Mapping",
    tag: "Mapping",
    href: null,
    body: <>Empty for now.</>,
  },
  {
    id: "nc-link",
    title: "NC-Link Companion Specification",
    tag: "Proposed",
    href: "https://mtconnect.squarespace.com/nclink-companion-specification",
    body: (
      <>
        NC-Link by the CNC machine tool interconnection communication protocol
        standard alliance under CMTBA (China). The full spec and developer tools
        are at{" "}
        <ExternalLink href="http://www.nc-link.org.cn/#/norm">
          www.nc-link.org.cn
        </ExternalLink>
        .
      </>
    ),
  },
];

const tagStyles = {
  Standard: "bg-blue-100 text-blue-800",
  "Companion Specification": "bg-green-100 text-green-800",
  Mapping: "bg-amber-100 text-amber-800",
  Proposed: "bg-gray-200 text-gray-700",
};

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
    >
      {children}
    </a>
  );
}

function Tag({ label }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
        tagStyles[label] || "bg-gray-100 text-gray-700"
      }`}
    >
      {label}
    </span>
  );
}
const CompanionSpecifications = () => {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-300">
            Standards
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Companion Specifications
          </h1>
          <p className="mt-4 max-w-3xl text-base text-gray-300 sm:text-lg">
            Companion specifications and/or mappings for MTConnect to other
            standards.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {overview.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3"
            >
              <span className="font-medium text-gray-900">{item.name}</span>
              <Tag label={item.type} />
            </li>
          ))}
        </ul>
      </section>

      {/* Detail cards */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {specs.map((spec) => (
              <article
                key={spec.id}
                id={spec.id}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {spec.title}
                  </h3>
                  <Tag label={spec.tag} />
                </div>
                <p
                  className={`flex-1 leading-relaxed ${
                    spec.href ? "text-gray-700" : "italic text-gray-400"
                  }`}
                >
                  {spec.body}
                </p>
                {spec.href && (
                  <a
                    href={spec.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                  >
                    View specification
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompanionSpecifications;
