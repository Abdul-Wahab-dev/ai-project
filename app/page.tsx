import HeroSection from "@/app/(components)/landing/hero";
import BuildSection from "@/app/(components)/landing/letsbuild";
import StatSection from "@/app/(components)/landing/stats";
import HowItWorks from "@/app/(components)/landing/works";
import ToolSection from "@/app/(components)/landing/tools";
import Header from "@/app/(components)/layout/header";
export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header */}
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
      <StatSection />
      {/* Service Section */}
    </div>
  );
}
