import HeroSection from "@/app/(components)/landing/hero";
import BuildSection from "@/app/(components)/landing/letsbuild";
import StatSection from "@/app/(components)/landing/stats";
import HowItWorks from "@/app/(components)/landing/works";
import ToolSection from "@/app/(components)/landing/tools";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {/* Hero Section */}
      {/* Services Section */}
      <ToolSection />
      {/* Service Section */}
      <HowItWorks />

      {/* Let's build  */}
      <BuildSection />
      {/* Let's build  */}
      {/* Result Section */}
      {/* <StatSection /> */}
      {/* Service Section */}
    </div>
  );
}
