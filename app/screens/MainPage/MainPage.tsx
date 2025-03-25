import React from "react";
import SuitableAudienceSection from "./sections/SuitableAudience";
import { Hero } from "./sections/Hero";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-[#020202] text-white w-full max-w-[460px] overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Content Section */}
        {/* <ContentSection /> */}

        {/* suitable audience section */}
        {/* <SuitableAudienceSection /> */}

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
