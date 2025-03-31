import React from "react";
import { Hero } from "./(components)/Hero";
import { Content } from "./(components)/Content";
import SuitableAudience from "./(components)/SuitableAudience";
import { CallToAction } from "./(components)/CallToAction";
import { Footer } from "@/app/components/ui/Footer";
import styles from "./MainPage.module.css";
import { createMetadata } from "@/lib/seo";
import { FAQ } from "./(components)/FAQ";

export const metadata = createMetadata({
  title: "To Feel Again - The place where music & soul comes to life",
  description: "To Feel Again | Soul | להרגיש מחדש",
});

export default function ToDeelAgainPage() {
  return (
    <div className="flex flex-col items-center w-full t-[24px] text-center font-['Heebo',Helvetica] bg-[#020202]">
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
}
