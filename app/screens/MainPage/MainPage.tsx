import React from "react";
import { Hero } from "./sections/Hero";
import { Content } from "./sections/Content";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center w-full text-center font-['Heebo',Helvetica]">
      <div className="bg-[#020202] text-white w-full max-w-[460px] overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Content Section */}
        <Content />

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
