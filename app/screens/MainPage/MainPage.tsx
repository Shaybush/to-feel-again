import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContentSection } from "./sections/ContentSection";
import { FeaturedArtistsSection } from "./sections/FeaturedArtistsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-[#020202] w-full max-w-[460px] overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Content Section */}
        <ContentSection />

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
