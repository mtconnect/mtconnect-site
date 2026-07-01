import Navbar       from "./sections/Navbar";
import Hero         from "./sections/Hero";
import Quickstart   from "./sections/Quickstart";
import HowItWorks   from "./sections/HowItWorks";
import StatsBar     from "./sections/StatsBar";
import WhyMTConnect from "./sections/WhyMTConnect";
import ExploreTools from "./sections/ExploreTools";
import VideoSection from "./sections/VideoSection";
import CTABanner    from "./sections/CTABanner";
import Footer       from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Quickstart />
        <HowItWorks />
        <StatsBar />
        <WhyMTConnect />
        <ExploreTools />
        <VideoSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
