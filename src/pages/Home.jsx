import Hero         from "../sections/Hero";
import Quickstart   from "../sections/Quickstart";
import HowItWorks    from "../sections/HowItWorks";
import StatsBar      from "../sections/StatsBar";
import WhyMTConnect  from "../sections/WhyMTConnect";
import ExploreTools  from "../sections/ExploreTools";
import VideoSection  from "../sections/VideoSection";
import CTABanner     from "../sections/CTABanner";

const Home = () => (
  <>
    <Hero />
    <Quickstart />
    <HowItWorks />
    <StatsBar />
    <WhyMTConnect />
    <ExploreTools />
    <VideoSection />
    <CTABanner />
  </>
);

export default Home;
