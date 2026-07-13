// Generic renderer for the block-based content format used across the site
// (blog posts, Standards Committee page, etc). Add a case here if a new
// block `type` shows up in a data file.
//
// Supported block types:
//   { type: "p",    text: "..." }
//   { type: "h2",   text: "..." }
//   { type: "list", items: ["...", "..."] }
//   { type: "code", text: "..." }
//   { type: "quote", text: "..." }
//   { type: "link", text: "...", href: "..." }   external/internal link line

const ContentBlock = ({ block, i }) => {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="text-[19px] md:text-[22px] font-medium tracking-[-0.01em] text-slate-900 mt-9 mb-3 first:mt-0">
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul key={i} className="list-disc pl-5 flex flex-col gap-1.5 mb-5 text-[14px] md:text-[15px] text-slate-600 leading-[1.7]">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre key={i} className="bg-code-bg rounded-lg px-4 py-3.5 mb-5 overflow-x-auto">
          <code className="font-mono text-[12.5px] text-code-text whitespace-pre">{block.text}</code>
        </pre>
      );
    case "quote":
      return (
        <blockquote key={i} className="border-l-2 border-brand pl-4 md:pl-5 my-6 text-[15px] md:text-[16px] text-slate-700 italic leading-[1.65]">
          {block.text}
        </blockquote>
      );
    case "link":
      return (
        <a
          key={i}
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[13.5px] md:text-[14px] font-medium text-brand hover:underline mb-5"
        >
          {block.text}
        </a>
      );
    case "p":
    default:
      return (
        <p key={i} className="text-[14px] md:text-[15px] text-slate-600 leading-[1.75] mb-5">
          {block.text}
        </p>
      );
  }
};

const ContentBlocks = ({ blocks }) => (
  <>
    {blocks.map((block, i) => (
      <ContentBlock key={i} block={block} i={i} />
    ))}
  </>
);

export default ContentBlocks;
