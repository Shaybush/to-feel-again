import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { ContentSection } from "./sections/ContentSection";
import SuitableAudienceSection from "./sections/SuitableAudienceSection";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-[#020202] w-full max-w-[460px] overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Content Section */}
        <ContentSection />

        {/* suitable audience section */}
        <SuitableAudienceSection />

        {/* Call To Action Section */}
        {/* <CallToActionSection /> */}

        {/* Footer Section */}
        {/* <FooterSection /> */}

        {/* Featured Artists Section */}
        {/* <FeaturedArtistsSection /> */}
      </div>
    </div>
  );
};
