import { useParams, Link, Navigate } from "react-router-dom";
import { getBlogBySlug, getSortedBlogs } from "../data/blogs";
import ContentBlocks from "../components/ContentBlocks";

const formatDate = (isoDate) =>
  new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const otherPosts = getSortedBlogs().filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="bg-white">
      {/* Header */}
      {post.banner ? (
        <div className="relative">
          <img
            src={post.banner}
            alt={post.title}
            className="w-full max-h-[420px] object-cover"
          />
        </div>
      ) : null}

      <div className="px-5 md:px-10 py-12 md:py-[72px] pb-8 md:pb-10">
        <Link to="/blogs" className="inline-flex items-center gap-1.5 text-[12.5px] text-slate-500 hover:text-brand transition-colors no-underline mb-6">
          ← Back to blog
        </Link>
        <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-4">
          <span>{formatDate(post.date)}</span>
          {post.readTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </>
          )}
        </div>
        {post.banner ? (
          <h1 className="sr-only">{post.title}</h1>
        ) : (
          <h1 className="text-[26px] sm:text-[32px] md:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-slate-900 max-w-3xl">
            {post.title}
          </h1>
        )}
      </div>

      {/* Body */}
      <div className="px-5 md:px-10 pb-12 md:pb-[72px] max-w-3xl">
        <ContentBlocks blocks={post.content} />
      </div>

      {/* More posts */}
      {otherPosts.length > 0 && (
        <div className="bg-slate-50 border-t border-slate-200 px-5 md:px-10 py-12 md:py-16">
          <p className="text-[11px] font-medium text-brand tracking-[0.08em] uppercase mb-6">
            Keep reading
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] max-w-3xl">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                to={`/blogs/${p.slug}`}
                className="block bg-white border border-slate-200 hover:border-brand rounded-2xl p-6 no-underline transition-colors"
              >
                <p className="text-[13.5px] font-medium text-slate-900 mb-2 leading-[1.4]">{p.title}</p>
                <p className="text-[12px] text-brand font-medium">Learn more →</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/blogs"
              className="inline-flex items-center bg-white border border-slate-300 hover:border-brand hover:bg-slate-50 text-slate-600 px-4 py-2 rounded-lg text-[13px] font-medium transition-colors duration-150 no-underline"
            >
              View all posts
            </Link>
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogPost;
