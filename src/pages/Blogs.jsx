import { getSortedBlogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";
import SectionLabel from "../components/SectionLabel";

const Blogs = () => {
  const blogs = getSortedBlogs();

  return (
    <>
      {/* Intro */}
      <div className="px-5 md:px-10 py-12 md:py-[72px] pb-8 md:pb-12 bg-white">
        <span className="inline-block bg-brand-light text-brand-dark text-[11px] font-medium tracking-[0.03em] px-3 py-1 rounded-full mb-5">
          Blog
        </span>
        <h1 className="text-[30px] sm:text-[38px] md:text-[46px] font-medium leading-[1.1] md:leading-[1.05] tracking-[-0.03em] text-slate-900 mb-5 max-w-2xl">
          Powering the future of connected manufacturing
        </h1>
        <p className="text-[15px] md:text-[16px] text-slate-500 leading-[1.65] max-w-2xl">
          Insights, guides, and deep dives into MTConnect, industrial data, and
          building interoperable manufacturing systems for the next generation
          of smart factories.
        </p>
      </div>

      {/* Post grid */}
      <section className="bg-white px-5 md:px-10 py-12 md:py-[72px] pt-0 md:pt-0">
        <SectionLabel>Featured blogs</SectionLabel>
        <h2 className="text-[24px] md:text-[30px] font-medium tracking-[-0.02em] text-slate-900 mb-8 md:mb-10">
          Latest from the MTConnect team
        </h2>

        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18px]">
            {blogs.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <p className="text-[14px] text-slate-500">
            No posts yet — check back soon.
          </p>
        )}
      </section>
    </>
  );
};

export default Blogs;
