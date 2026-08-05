import { STATS } from "../data/siteData";

const StatsBar = () => (
  <div className="bg-code-bg py-10 md:py-12 px-5 md:px-10">
    <div className="grid grid-cols-2 md:flex md:justify-around gap-y-8 items-center max-w-md md:max-w-none mx-auto">
      {STATS.map((stat, i) => (
        <>
          <div key={stat.label} className="text-center">
            <p className={`text-[28px] md:text-[36px] font-medium leading-none tracking-[-0.02em] ${stat.accent ? "text-code-accent" : "text-white"}`}>
              {stat.value}
            </p>
            <p className="text-[11px] text-white/40 mt-1.5 tracking-[0.04em] uppercase">
              {stat.label}
            </p>
          </div>
          {i < STATS.length - 1 && (
            <div key={`div-${i}`} className="hidden md:block w-px h-11 bg-white/10" />
          )}
        </>
      ))}
    </div>
  </div>
);

export default StatsBar;
