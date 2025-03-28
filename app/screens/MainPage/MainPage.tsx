import React from "react";
import { Hero } from "./Hero";
import { Content } from "./Content";
import SuitableAudience from "./SuitableAudience";
import { CallToAction } from "./CallToAction";
import { FAQ } from "./FAQ";
import { Footer } from "@/app/components/ui/Footer";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center w-full t-[24px] text-center font-['Heebo',Helvetica]">
      <div className="bg-[#020202] text-white w-full max-w-[460px] overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Content Section */}
        <Content />

        {/* suitable audience section */}
        <SuitableAudience />

        {/* Call To Action Section */}
        <CallToAction />

        <div className={styles.dessertBackground}>
          {/* FAQs Section */}
          <FAQ />

          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </div>
  );
};
