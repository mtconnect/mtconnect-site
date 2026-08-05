import { useEffect, useRef, useState } from "react";

import cncWebm from "../assets/videos/mtconnect-hero-cnc.webm";
import cncMp4 from "../assets/videos/mtconnect-hero-cnc.mp4";
import cmmWebm from "../assets/videos/mtconnect-hero-cmm.webm";
import cmmMp4 from "../assets/videos/mtconnect-hero-cmm.mp4";
import robotWebm from "../assets/videos/mtconnect-hero-robot.webm";
import robotMp4 from "../assets/videos/mtconnect-hero-robot.mp4";

const SLIDES = [
  { id: "cnc", label: "CNC", webm: cncWebm, mp4: cncMp4 },
  { id: "cmm", label: "CMM", webm: cmmWebm, mp4: cmmMp4 },
  { id: "robot", label: "Robot", webm: robotWebm, mp4: robotMp4 },
];

/**
 * HeroVideoSlider
 * Auto-advancing video slider used as the Hero section's visual.
 * Each clip plays muted/inline; when a clip finishes, the slider
 * advances to the next one and loops back to the first after the last.
 */
const HeroVideoSlider = ({ className = "" }) => {
  const [active, setActive] = useState(0);
  const videoRefs = useRef([]);
  const reducedMotionRef = useRef(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reducedMotionRef.current) return;
    const current = videoRefs.current[active];
    if (current) {
      current.currentTime = 0;
      current.play().catch(() => {});
    }
  }, [active]);

  const handleEnded = () => {
    if (reducedMotionRef.current) return;
    setActive((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <div
      className={`relative w-full aspect-[480/280] rounded-2xl shadow-2xl overflow-hidden bg-[#0F172A] ${className}`}
      role="group"
      aria-label="MTConnect in action: CNC, CMM, and robot demo clips"
    >
      {SLIDES.map((slide, index) => (
        <video
          key={slide.id}
          ref={(el) => (videoRefs.current[index] = el)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
          muted
          playsInline
          preload="auto"
          autoPlay={index === 0 && !reducedMotionRef.current}
          controls={reducedMotionRef.current}
          aria-hidden={index !== active}
          onEnded={handleEnded}
        >
          <source src={slide.webm} type="video/webm" />
          <source src={slide.mp4} type="video/mp4" />
        </video>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Show ${slide.label} demo`}
            aria-current={index === active}
            onClick={() => setActive(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === active ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroVideoSlider;
