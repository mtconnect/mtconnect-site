import { LINKS } from "../data/links";
import SectionLabel from "../components/SectionLabel";

const VideoSection = () => (
  <section className="bg-slate-50 border-t border-slate-200 px-10 py-20">
    <div className="max-w-4xl mx-auto text-center">
      <SectionLabel>Watch</SectionLabel>
      <h2 className="text-[30px] font-medium tracking-[-0.02em] text-slate-900 mb-2">
        See MTConnect in Action
      </h2>
      <p className="text-[15px] text-slate-500 mb-10 max-w-xl mx-auto">
        A quick overview of how MTConnect standardizes manufacturing data and
        powers smarter shop floors.
      </p>

      {/* Responsive 16:9 video embed */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full border-0"
          src={LINKS.youtube}
          title="MTConnect Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  </section>
);

export default VideoSection;
