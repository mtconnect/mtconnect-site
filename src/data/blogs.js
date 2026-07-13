import whatIsMtconnectBanner from "../assets/blog/what-is-mtconnect-banner.webp";
import whatIsMtconnectThumb from "../assets/blog/what-is-mtconnect-thumb.webp";
import architectureBanner from "../assets/blog/mtconnect-architecture-explained-banner.webp";
import architectureThumb from "../assets/blog/mtconnect-architecture-explained-thumb.webp";
import deviceFilesBanner from "../assets/blog/how-mtconnect-organizes-machine-data-banner.webp";
import deviceFilesThumb from "../assets/blog/how-mtconnect-organizes-machine-data-thumb.webp";

/**
 * All blog posts for the site.
 *
 * TO ADD A NEW BLOG POST IN THE FUTURE:
 * Just add a new object to the BLOGS array below. Nothing else needs to
 * change — the /blogs listing page and the /blogs/:slug post page both
 * read from this array automatically.
 *
 * Each post needs:
 *  - slug:      unique, URL-safe id -> post lives at /blogs/<slug>
 *  - title:     post title
 *  - excerpt:   1-2 sentence summary shown on the /blogs listing page
 *  - date:      "YYYY-MM-DD" (used for display + sorting, newest first)
 *  - readTime:  short label like "6 min read" (optional, purely cosmetic)
 *  - thumbnail: (optional) image shown on the /blogs card grid. Import an
 *               image at the top of this file and reference it here. If
 *               omitted, the card falls back to a plain themed placeholder.
 *  - banner:    (optional) wide header image shown at the top of the post
 *               page. If omitted, the post falls back to a plain text
 *               header (title + date), so this is safe to leave out for
 *               posts that don't have artwork yet.
 *  - content:   an array of content blocks rendered in order. Supported
 *               block types:
 *                 { type: "p",    text: "..." }                 paragraph
 *                 { type: "h2",   text: "..." }                 subheading
 *                 { type: "list", items: ["...", "..."] }       bullet list
 *                 { type: "code", text: "..." }                 code/mono block
 *                 { type: "quote", text: "..." }                pull quote
 *
 * To add artwork for a new post: drop the files in src/assets/blog/, import
 * them at the top of this file, then set `thumbnail` / `banner` on the post.
 */

export const BLOGS = [
  {
    slug: "what-is-mtconnect",
    title: "What is MTConnect? A Developer-Friendly Introduction",
    excerpt:
      "MTConnect is an open, royalty-free standard for manufacturing data developed under the MTConnect Institute and initiated by AMT — here's what it is, and what problem it actually solves.",
    date: "2026-03-18",
    readTime: "7 min read",
    thumbnail: whatIsMtconnectThumb,
    banner: whatIsMtconnectBanner,
    content: [
      { type: "p", text: "Modern manufacturing is powered by advanced machines like CNCs, mills, lathes, and robotic systems. Yet when developers or manufacturing engineers attempt to extract meaningful data from these machines, they encounter a familiar challenge: inconsistency." },
      { type: "p", text: "The problem isn't that machines lack data. It's that they don't speak the same language." },
      { type: "p", text: "Different vendors use different controllers, naming conventions, data models, and units. One machine might expose spindle speed in one format, another in a completely different structure. Some machines provide modern APIs, while others rely on legacy interfaces. The result is a fragmented ecosystem where machines operate like isolated islands." },
      { type: "p", text: "Now consider what happens when you build software on top of this environment. If you have three machines and four applications — a dashboard, an OEE system, a maintenance platform, and an analytics engine — you don't get seven integrations. You get twelve. Every application must integrate individually with every machine, and each integration must be maintained over time." },
      { type: "quote", text: "This is expensive. It's fragile. And it doesn't scale." },
      { type: "p", text: "To build connected, data-driven manufacturing systems, machines need a common language. That's where MTConnect comes in." },

      { type: "h2", text: "What is MTConnect?" },
      { type: "p", text: "MTConnect is an open, royalty-free standard for manufacturing data developed under the MTConnect Institute and initiated by AMT – The Association For Manufacturing Technology. Rather than replacing machines or controllers, MTConnect standardizes how machines describe themselves and their operational data." },
      { type: "p", text: "At its core, MTConnect defines a consistent vocabulary and structure for machine information. It ensures that common concepts such as spindle speed, feed rate, or machine state are represented in a predictable and standardized way across vendors." },
      { type: "p", text: "It's important to clarify what MTConnect is NOT. It is not a dashboard, a database, or an MES system. It does not control machines. It also does not compete with transport technologies like OPC UA or MQTT. Instead, MTConnect focuses on defining the meaning of machine data so that applications can interpret it reliably, regardless of vendor." },

      { type: "h2", text: "The Problem MTConnect Solves" },
      { type: "p", text: "Without a standard, even simple integrations become complex. Units may differ between metric and imperial systems. Machine states may use different terminology. Data structures may vary widely from one vendor to another. Developers end up writing custom mapping logic for every connection." },
      { type: "p", text: "MTConnect removes this ambiguity by introducing a shared data model. With standardized terminology and structure, applications can consume data in a predictable format. Instead of reverse-engineering every machine's output, developers integrate once against a known interface." },
      { type: "p", text: "This significantly reduces long-term integration complexity. Rather than creating direct, custom connections between each application and each machine, systems are built around a standardized layer. That shift alone transforms scalability." },
      { type: "p", text: "There is also a broader strategic benefit. Manufacturing digitalization typically progresses from collecting raw signals to structuring them, then integrating systems, and eventually enabling analytics and predictive capabilities. MTConnect addresses the foundational step — structured and standardized data — without which higher-level initiatives struggle." },

      { type: "h2", text: "How MTConnect Works" },
      { type: "p", text: "MTConnect architecture is intentionally simple and developer-friendly. It revolves around three key components:" },
      {
        type: "list",
        items: [
          "Adapter – Connects to a machine's proprietary interface and translates its data into MTConnect format.",
          "Agent – The core MTConnect service that buffers data and exposes it via REST endpoints.",
          "Application – Any system that consumes MTConnect data, such as dashboards, OEE tools, maintenance systems, or analytics platforms.",
        ],
      },
      { type: "p", text: "The Agent acts as the standardized gateway to machine data. It exposes simple HTTP endpoints such as /probe for machine metadata, /current for a live snapshot, and /sample for time-series data. For developers, this feels familiar and easy to test using common tools like curl or Postman." },
      { type: "p", text: "Another important aspect is flexibility. While MTConnect commonly uses REST with XML or JSON, it is not locked to a single transport layer. It can coexist with other technologies like OPC UA or MQTT because it defines the data model rather than the communication protocol. This makes it adaptable to different system architectures." },

      { type: "h2", text: "Why MTConnect Matters Today" },
      { type: "p", text: "Even basic visibility into machine states can create measurable operational improvements. When teams can see real-time status information, downtime patterns become clearer and scheduling decisions improve. Simple dashboards built on standardized data often deliver immediate ROI." },
      { type: "p", text: "As organizations advance in their digital journey, that same structured data enables more sophisticated capabilities. Predictive maintenance, tool monitoring, process traceability, and inter-machine coordination all depend on consistent and reliable machine information. Without standardization, these initiatives become complex and difficult to maintain." },
      { type: "p", text: "Modern manufacturing increasingly demands interoperability, real-time access, and analytics-ready infrastructure. MTConnect acts as a semantic bridge between shop-floor equipment and enterprise systems. It doesn't replace existing platforms — it enables them to work together more effectively." },

      { type: "h2", text: "Getting Started" },
      { type: "p", text: "If you're interested in experimenting with MTConnect, a practical starting point is the official C++ Agent implementation available on GitHub. You can run the agent locally, connect it to adapters, and explore how machine data is structured and served." },
      { type: "code", text: "github.com/mtconnect/cppagent" },
    ],
  },
  {
    slug: "mtconnect-architecture-explained",
    title: "MTConnect Architecture Explained: Agents, Adapters, and Data Streams",
    excerpt:
      "MTConnect uses a simple but powerful architecture built around two main components — Adapters and Agents. Here's how machine signals become standardized, queryable data.",
    date: "2026-03-27",
    readTime: "8 min read",
    thumbnail: architectureThumb,
    banner: architectureBanner,
    content: [
      { type: "p", text: "Modern manufacturing machines generate an enormous amount of operational data — spindle speeds, feed rates, tool positions, machine states, alarms, and much more. But collecting and using this data effectively has traditionally been difficult because machines from different vendors expose information in different formats and interfaces." },
      { type: "p", text: "This is where MTConnect becomes useful. MTConnect standardizes how machine data is described and accessed so that software systems can read it in a consistent way." },
      { type: "p", text: "At its core, MTConnect uses a simple but powerful architecture built around two main components: Adapters and Agents. Together, these components collect machine signals, translate them into a standard format, and make them accessible to applications." },

      { type: "h2", text: "Understanding the MTConnect Data Pipeline" },
      { type: "p", text: "Machines produce raw operational signals. Adapters connect to those machines and translate the signals into MTConnect vocabulary. The Agent then organizes and serves this information through APIs that applications can access." },
      { type: "p", text: "This layered design separates machine communication, data standardization, and application access, making it much easier to build software around manufacturing equipment." },

      { type: "h2", text: "What is an Adapter?" },
      { type: "p", text: "An Adapter acts as the bridge between a machine and the MTConnect system. Manufacturing equipment typically exposes information through proprietary interfaces like controller APIs, serial communication, network protocols, or vendor-specific software. These interfaces are rarely consistent across vendors." },
      { type: "p", text: "The adapter connects to the machine and translates those raw signals into standardized MTConnect data items. For example, a machine controller might report spindle speed using a proprietary variable name. The adapter reads that value and maps it to the MTConnect concept of Spindle Speed, ensuring that applications receive a standardized representation regardless of the machine vendor." },
      { type: "p", text: "In practice, adapters are responsible for three core tasks:" },
      {
        type: "list",
        items: [
          "Connecting to machine controllers or sensors",
          "Reading raw operational signals",
          "Translating the data into MTConnect-compatible format",
        ],
      },
      { type: "p", text: "Once the data is translated, the adapter continuously sends updates to the MTConnect Agent. Importantly, adapters themselves do not serve APIs or store long-term data — their job is simply collecting and translating machine signals." },
      { type: "p", text: "One of the strengths of MTConnect is that adapters can be built for almost any device — CNC controllers, PLC systems, robots, inspection machines, or even embedded devices such as Raspberry Pi boards collecting sensor readings. This flexibility allows manufacturers to integrate both modern and legacy equipment into the same data ecosystem." },

      { type: "h2", text: "What is an Agent?" },
      { type: "p", text: "If adapters collect machine data, the Agent is responsible for organizing and publishing that data for applications. The MTConnect Agent acts as a lightweight server: it receives data streams from one or more adapters and makes that information available through a set of standardized HTTP endpoints." },
      { type: "p", text: "Internally, the agent maintains a buffer of time-series data received from adapters. It also keeps track of the machine's structure — components, axes, spindles, tools, and other devices — so it can provide structured responses to client applications." },
      { type: "p", text: "From a developer's perspective, interacting with an MTConnect agent is straightforward. Applications simply send HTTP requests to retrieve machine information, and the responses are typically returned in XML or JSON, making them easy to integrate into dashboards, analytics platforms, or monitoring tools." },

      { type: "h2", text: "How Devices Communicate in MTConnect" },
      { type: "p", text: "A machine generates operational signals through its controller. The adapter connects to that controller and reads those signals, converts them into MTConnect data items, and streams them to the agent. The agent receives these updates, organizes them into its internal buffer, and exposes them through its API endpoints." },
      { type: "p", text: "The communication between adapters and agents typically happens over a network connection using a simple structured protocol known as SHDR (Simple Hierarchical Data Representation). SHDR messages contain timestamps, data item identifiers, and values representing machine state or measurements." },
      { type: "p", text: "Because the agent centralizes machine data, multiple applications can read the same information simultaneously without connecting directly to the machine controller — reducing integration complexity and preventing software systems from interfering with machine operations." },

      { type: "h2", text: "Push vs Pull: How Data Moves Through the System" },
      { type: "p", text: "MTConnect architecture combines two different communication patterns. The first stage uses a push model — adapters continuously push machine updates to the agent as new data becomes available, so the agent always has the latest machine state." },
      { type: "code", text: "Adapter → (Push) → Agent\nApplication ← (Pull) ← Agent" },
      { type: "p", text: "The second stage uses a pull model. Applications request information from the agent using HTTP calls; instead of machines sending data directly to every application, applications simply query the agent when they need information. This hybrid push–pull architecture works well in manufacturing environments — machines stream updates efficiently to a single service, while many applications (dashboards, analytics engines, maintenance tools) can access the same data source without adding load to machine controllers." },

      { type: "h2", text: "Sample Data Walkthrough" },
      { type: "p", text: "When an adapter reads machine signals, it sends structured messages that include a timestamp and one or more data values. A simplified message might look like this:" },
      { type: "code", text: "2025-11-04T10:15:22 | Zabs | 657.125 | Zload | -2" },
      { type: "p", text: "This message indicates the machine's Z-axis position and load at a specific moment in time. Once the agent receives this information, it stores the data in its internal buffer and makes it available to applications. Typically, an application interacts with an MTConnect Agent in the following sequence:" },
      {
        type: "list",
        items: [
          "Probe request – retrieves the machine's device structure and available data items",
          "Current request – retrieves the latest values for each data item",
          "Sample request – retrieves time-series data from the agent's buffer",
        ],
      },

      { type: "h2", text: "Conclusion" },
      { type: "p", text: "The architecture behind MTConnect is intentionally simple but highly effective. By separating responsibilities across Adapters, Agents, and Applications, the system creates a clean pipeline for machine data: machines generate operational signals, adapters translate those signals into standardized MTConnect data, agents organize and publish the information through APIs, and applications turn that data into dashboards, analytics, and automation workflows." },
      { type: "p", text: "For manufacturing developers and software engineers, understanding this architecture is the key to building scalable machine connectivity solutions." },
    ],
  },
  {
    slug: "how-mtconnect-organizes-machine-data",
    title: "How MTConnect Organizes Machine Data: A Developer's Guide to Device Files",
    excerpt:
      "Machines typically generate raw signals through proprietary controllers or sensors. Here's how MTConnect device files turn those signals into structured, contextualized data.",
    date: "2026-04-13",
    readTime: "9 min read",
    thumbnail: deviceFilesThumb,
    banner: deviceFilesBanner,
    content: [
      { type: "p", text: "In MTConnect, machine data is not just a stream of numbers and signals. For applications to understand that data, they also need to know how the machine itself is structured." },
      { type: "p", text: "A typical manufacturing machine contains many subsystems like controllers, axes, spindles, coolant systems, and more. Each of these components produces different types of data, and without context it can be difficult for software systems to interpret those signals correctly." },
      { type: "p", text: "This is where MTConnect device files come in. A device file acts as a blueprint that describes the logical structure of a machine, including its components and the data they produce. It also defines how raw machine signals are mapped into standardized MTConnect data." },

      { type: "h2", text: "From Machine Signals to Structured Data" },
      { type: "p", text: "Machines typically generate raw signals through proprietary controllers or sensors. These signals are first collected by an adapter, which forwards the data to an MTConnect Agent that then exposes the standardized information to client applications." },
      { type: "code", text: "Machine Controller / Sensors\n  ↓\nAdapter\n  ↓\nMTConnect Agent\n  ↓\nApplications (Dashboards, MES, Analytics)" },
      { type: "p", text: "The challenge is that raw machine signals often use vendor-specific tag names or formats. The device file solves this by mapping those raw signals into the MTConnect vocabulary. For example, a machine might output a sensor tag like X1234_TEMP; the device file defines how that signal should be interpreted and represented as a standardized MTConnect data item such as Temperature." },

      { type: "h2", text: "What is a Device File?" },
      { type: "p", text: "A device file describes the structure of the machine being monitored — the devices, components, and data items that make up the machine model. You can think of it as a digital blueprint of the machine's data structure." },
      { type: "p", text: "This information is returned when an application queries the MTConnect Agent using the Probe endpoint. Developers typically store this information because it represents the exact structure of the machine at a given time, including the version of the standard being used and the configuration of the monitored device." },

      { type: "h2", text: "Understanding the MTConnect Machine Hierarchy" },
      { type: "p", text: "MTConnect models machines using a hierarchical structure. At the highest level is the device, which represents the entire machine. Inside that device are components, and inside components are data items." },
      { type: "p", text: "This hierarchical design mirrors how machines are physically structured. It allows applications to understand not just what data exists, but where that data belongs within the machine. For example, hydraulic pressure measurements would belong under the hydraulic system component, while spindle speed would belong under the spindle component." },

      { type: "h2", text: "Components: The Building Blocks of a Machine Model" },
      { type: "p", text: "Components represent the subsystems inside a machine and act as containers for the data items related to each subsystem. In a typical CNC machine, components may include:" },
      {
        type: "list",
        items: [
          "Controller systems",
          "Axes and tool paths",
          "Electrical and hydraulic systems",
          "Auxiliary systems such as chip disposal or environmental sensors",
        ],
      },
      { type: "p", text: "MTConnect also allows deeper hierarchies — for instance, the controller component can contain paths that represent independent machine heads or turrets, allowing systems to monitor machines with multiple independent control paths." },

      { type: "h2", text: "Data Items: The Actual Machine Signals" },
      { type: "p", text: "While components represent machine structure, data items represent the actual signals coming from the machine. A data item is essentially a tag that describes a specific piece of machine information — developers specify attributes such as the type of signal, its units, and other metadata." },
      { type: "p", text: "Each data item must include a unique ID and a defined type, ensuring that applications can interpret the data consistently across machines. One special data item that every MTConnect implementation must include is Availability, which indicates whether the machine is currently active and capable of providing valid data — if reported as unavailable, applications should treat other machine signals as stale or invalid." },

      { type: "h2", text: "The Three Types of MTConnect Data" },
      { type: "p", text: "MTConnect classifies machine signals into three categories based on the type of information they represent." },
      { type: "p", text: "Samples represent continuously changing numerical measurements, typically analog values collected from sensors — for example temperature, spindle speed, pressure, or axis position." },
      { type: "p", text: "Events represent machine states or discrete changes, often from a predefined vocabulary — for example execution state (READY, ACTIVE, STOPPED), machine mode, or program state." },
      { type: "p", text: "Conditions describe machine health and diagnostic information — signals that typically represent alarms or warnings, such as system alarms, PLC faults, or program errors. Conditions are especially useful for advanced diagnostics because they provide context about the health of machine components." },

      { type: "h2", text: "How Device Files Map Machine Signals" },
      { type: "p", text: "When data arrives from an adapter, it usually appears as simple key-value pairs. The device file determines how those signals should be interpreted and mapped to MTConnect data items." },
      { type: "p", text: "For example, a coolant pressure sensor may send a value in PSI. The device file can define that the native unit is PSI but the MTConnect representation should use Pascal — the Agent then performs the unit conversion automatically before exposing the data to applications." },

      { type: "h2", text: "Supporting Multiple Data Sources" },
      { type: "p", text: "In many manufacturing environments, machines may not expose every sensor through the original controller. MTConnect allows developers to add additional sensors and data sources — for example, if a machine vendor does not expose coolant pressure data, a third-party sensor can be installed and published through MQTT, then connected to the MTConnect Agent and mapped into the device model. Once configured in the device file, the new data appears as if it were part of the original machine data stream." },

      { type: "h2", text: "Conclusion" },
      { type: "p", text: "Machine data becomes far more valuable when it is structured and contextualized. MTConnect achieves this by modeling machines through device files that define their components and data items. Device files describe the structure of the machine, components represent subsystems within the machine, and data items represent the signals generated by those subsystems." },
      { type: "p", text: "For manufacturing developers and software engineers, this structure simplifies integration, enables interoperability across different machines, and provides the foundation for advanced applications such as production monitoring, predictive maintenance, and digital twins." },
    ],
  },
];

// Newest first.
export const getSortedBlogs = () =>
  [...BLOGS].sort((a, b) => new Date(b.date) - new Date(a.date));

export const getBlogBySlug = (slug) => BLOGS.find((b) => b.slug === slug);
