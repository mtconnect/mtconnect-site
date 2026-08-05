import { Link } from "react-router-dom";

const formatDate = (isoDate) =>
  new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogCard = ({ slug, title, excerpt, date, readTime, thumbnail }) => (
  <Link
    to={`/blogs/${slug}`}
    className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden
               transition-all duration-200 no-underline text-inherit
               hover:-translate-y-0.5 hover:shadow-xl hover:border-brand"
  >
    <div className="aspect-[16/9] w-full overflow-hidden bg-code-bg">
      {thumbnail ? (
        <img
          src={thumbnail}
          alt=""
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white/30 text-[13px] font-medium tracking-[0.08em] uppercase">
            MTConnect
          </span>
        </div>
      )}
    </div>

    <div className="flex flex-col flex-1 p-6 md:p-7">
      <div className="flex items-center gap-2 mb-3.5 text-[11px] text-slate-400">
        <span>{formatDate(date)}</span>
        {readTime && (
          <>
            <span aria-hidden="true">·</span>
            <span>{readTime}</span>
          </>
        )}
      </div>
      <p className="text-[15px] md:text-[16px] font-medium text-slate-900 mb-2.5 leading-[1.35]">
        {title}
      </p>
      <p className="text-[12.5px] text-slate-500 leading-[1.65] flex-1">{excerpt}</p>
      <p className="text-[12px] font-medium text-brand mt-4 group-hover:underline">
        Learn more →
      </p>
    </div>
  </Link>
);

export default BlogCard;
