export const BOARD_OF_TRUSTEES = {
  officers: [
    {
      role: "President and Chairman of the Board",
      name: "Douglas K. Woods",
      title: "President",
      org: "AMT - The Association For Manufacturing Technology",
    },
    {
      role: "Secretary/Treasurer",
      name: "Scott Hibbard",
      title: "VP of Technology",
      org: "Bosch‐Rexroth Corp. - Retired",
    },
  ],
  trustees: [
    { name: "Dean L. Bartles, Ph.D., FSME, FASME", title: "President & CEO", org: "Manufacturing Technology Deployment Group, MTDG" },
    { name: "Stephan Biller, Ph.D.", title: "Harold T. Amrine Distinguished Professor", org: "School of Industrial Engineering and Purdue School of Business, Purdue University" },
    { name: "Thomas Copeland", title: "Chief Technology Officer", org: "TRAK Machine Tools, Inc. - Retired" },
    { name: "Tim Shinbara", title: "Chief Strategy Officer", org: "Blue Forge Alliance" },
    { name: "Daniel D. Janka", title: "President", org: "Mazak Corporation" },
    { name: "Thomas R. Kurfess, Ph.D., P.E.", title: "Executive Director", org: "Georgia Tech Manufacturing Institute" },
    { name: "Joel Neidig", title: "Director of Research and Development", org: "ITAMCO" },
    { name: "Russ Waddell", title: "Owner", org: "Kirk Stryker Limited" },
  ],
  emeritus: [
    { name: "Ralph Resnick, FSME", title: "President & CEO", org: "National Center for Defense Manufacturing and Machining - Retired" },
    { name: "Jay Lee, Ph.D.", title: "Clark Distinguished Professor", org: "Founding Director of Industrial AI Center, University of Maryland" },
  ],
};

export const ADMINISTRATION = [
  {
    name: "Ryan Kelly",
    title: "VP of Technology",
    org: "AMT - The Association of Manufacturing Technology",
    linkedin: "https://www.linkedin.com/in/ryan-kelly-b0904642/",
  },
  {
    name: "Will Sobel",
    title: "Chief Architect",
    org: "AMT - The Association of Manufacturing Technology",
    linkedin: "https://www.linkedin.com/in/wsobel/",
  },
  {
    name: "Shaurabh Kumar Singh",
    title: "Information Architect",
    org: "AMT - The Association of Manufacturing Technology",
    linkedin: "https://www.linkedin.com/in/shaurabh-kumar-singh/",
  },
  {
    name: "Ayush Thakur",
    title: "MTConnect Developer Relations Manager",
    org: "AMT - The Association of Manufacturing Technology",
    linkedin: "https://www.linkedin.com/in/ayush2390/",
  },
];

export const STANDARDS_COMMITTEE_INTRO = {
  body: "The Standards Committee (SC) is responsible for developing and maintaining the MTConnect standard. Consisting of industry, academic, and government stakeholders, the SC advises on proposed enhancements to the standard, initiates and oversees working groups, and furthers the standard in specific technology areas with new features and capabilities.",
  note: "There is no fee to become a member or to access the MTConnect standard. Anyone with a stake in the MTConnect standard can join.",
};

// Same block schema as blog posts (see data/blogs.js) — p, h2, list, link, etc.
export const STANDARDS_COMMITTEE_CONTENT = [
  { type: "link", text: "Register to join the Standards Committee →", href: "https://projects.mtconnect.org/account/register" },

  { type: "h2", text: "What SC members do" },
  {
    type: "list",
    items: [
      "Contribute to development of the standard.",
      "Sit on working groups.",
      "Access and review pre-release drafts of the standard.",
      "Access, review, and submit issues online.",
      "Designate a delegate to serve as primary point of contact and voting member.",
      "Cast a ballot to vote on proposed changes to the standard.",
      "Sign and comply with the Intellectual Property Policy.",
    ],
  },
  { type: "link", text: "Read the Intellectual Property Policy (PDF) →", href: "https://mtconnect.squarespace.com/s/MTConnect-Institute-IP-Policy_2018_06_21.pdf" },

  { type: "h2", text: "SC meetings" },
  { type: "p", text: "Meetings are held quarterly via web or in person. Content from past meetings is available on the MTConnect projects website (login required)." },
  { type: "link", text: "Upcoming SC meetings →", href: "https://www.mtconnect.org/events-master" },

  { type: "h2", text: "Working groups" },
  { type: "p", text: "Working groups take ideas from conception to initial drafts and data models for inclusion in the MTConnect standard. The working groups conduct business primarily via web meeting, and each is chaired by a volunteer from the SC. Work items, tasks, and proposals for new material to be included in the MTConnect standard are all logged and tracked online at the MTConnect projects website — register there to join the SC and review standards development activity at any time." },
  { type: "link", text: "See working groups or request to join one →", href: "https://www.mtconnect.org/working-groups" },
  { type: "link", text: "MTConnect projects site →", href: "http://projects.mtconnect.org/projects/tag-meetings/files" },

  { type: "h2", text: "Voting & reviews" },
  { type: "p", text: "New versions of the MTConnect standard are approved by a vote by the SC. Each member company has one vote, cast by the company's delegate. Documents for review are managed via the MTConnect projects website." },
  { type: "p", text: "Draft standard documents prepared by the SC and working groups are subject to 30 and 90 day Intellectual Property reviews as well as 30 day editorial reviews. Each member company must submit one review; approvals with no issues or IP claims are requested but not required." },
];
