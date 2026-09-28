// Working groups of the Standards Committee (SC). Source: projects.mtconnect.org.
// Membership is open to all SC members — contact the group chair or the
// Secretariat (info@mtconnect.org) to join or get meeting invites.

export const WORKING_GROUPS_INTRO = {
  body: "Working groups take ideas from conception to initial drafts and data models for inclusion in the MTConnect standard. Each is chaired by a volunteer from the Standards Committee (SC) and conducts business primarily via web meeting. Membership is open to all SC members.",
  note: "Want to join a group or get meeting invites? Contact the group chair or the Secretariat at info@mtconnect.org.",
};

export const WORKING_GROUPS = [
  {
    name: "Additive Working Group",
    body: "Extends the MTConnect asset model to support Materials and Deposition Heads as trackable assets within and between part build cycles.",
    meeting: "Every 2 weeks, Thu 10:00 AM CT",
  },
  {
    name: "Agent Working Group",
    body: "Develops new versions of the open-source C++ agent for MTConnect, keeping its features aligned with the standard and vice versa.",
    meeting: null,
  },
  {
    name: "MQTT",
    body: "MQTT and Sparkplug extensions for MTConnect. Started as an ad hoc effort under the Agent Working Group and has since been formalized as its own subcommittee.",
    meeting: "Every 2 weeks, 11:00 AM ET",
    parent: "Agent Working Group",
  },
  {
    name: "Architecture WG",
    body: "Formerly the Shop Floor Information Management WG. Addresses modeling, communication, storage, and security of information in OT environments, and defines SysML modeling patterns and idioms.",
    meeting: null,
  },
  {
    name: "Capabilities WG",
    body: "Developing a normative ontological standard for manufacturing capabilities, delivered as a formal specification with supporting scope, execution, and ontological-commitment documents.",
    meeting: null,
  },
  {
    name: "Complex Manufacturing Systems WG",
    body: "Develops methods for modeling complex machining systems — those made up of multiple intelligent sub-systems working together, including systems with dynamic configurations.",
    meeting: null,
  },
  {
    name: "Compliance Working Group",
    body: "Procedural review and assurance for ANSI and ISO. Responsible for Standards Committee operating procedures and the initiation/release process for MTConnect standard editions.",
    meeting: "Monthly, Tue 1:00 PM ET",
  },
  {
    name: "Education Working Group",
    body: "Develops educational tools and resources to support adoption and implementation of the standard by end-users, OEMs, and application providers.",
    meeting: "1st Monday of the month, 12:00 PM ET",
  },
  {
    name: "Grinders Working Group",
    body: "Develops extensions to the Devices Information Model for the structure and data associated with grinding machines — initially Creep Feed, Cylindrical, and Surface Grinding.",
    meeting: null,
  },
  {
    name: "Interfaces Working Group",
    body: "Addresses interfaces within the MTConnect standard. Charter and meeting schedule are maintained on the MTConnect projects site.",
    meeting: null,
  },
  {
    name: "Location Working Group",
    body: "Focused on location-related data items, information models, and semantics for the MTConnect standard.",
    meeting: "Every 2 weeks, Thu",
  },
  {
    name: "Machine Tool Working Group",
    body: "Handles issues regarding subtractive manufacturing and machine tools, and in many cases their surrounding domain.",
    meeting: "Every 2 weeks, Wed 9:00 AM ET",
  },
  {
    name: "Measurement Working Group",
    body: "Develops data items, information models, and semantics for measurement, quality, and inspection — harmonizing with related additive manufacturing work outside of MTConnect.",
    meeting: null,
  },
  {
    name: "OPC/UA Companion Specification",
    body: "A joint working group between the OPC/UA Foundation and MTConnect. Managed primarily on the OPC/UA SharePoint site — contact the chairs for access.",
    meeting: null,
  },
  {
    name: "Parts and Processes Working Group",
    body: "Develops extensions for collecting and associating information about what a device is doing (which process) and what it's currently operating on (which part).",
    meeting: "Every other Monday, 10:00–11:00 AM ET",
  },
  {
    name: "Robotics Working Group",
    body: "Addresses concerns related to autonomous manufacturing, focused primarily on robotic arms for discrete-parts automation. Collects use cases and harmonizes with other robotics standards bodies.",
    meeting: null,
  },
  {
    name: "Security Working Group",
    body: "Addresses security concerns for the MTConnect standard. Charter and meeting schedule are maintained on the MTConnect projects site.",
    meeting: null,
  },
  {
    name: "Thermal Processes Working Group",
    body: "Develops data items, information models, and semantics for heat treat, autoclaves, ovens, and related thermal processes.",
    meeting: "Monthly, 4:00 PM ET",
  },
  {
    name: "Validation Working Group",
    body: "Manages needs specific to verification and testing of MTConnect implementations — requirements gathering, use cases, and publicizing validation tools and methods.",
    meeting: null,
  },
  {
    name: "Vocabulary Working Group",
    body: "Manages the vocabulary and definitions used throughout the MTConnect standard.",
    meeting: "Every other Friday, 10:00 AM ET",
  },
];
