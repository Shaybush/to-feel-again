import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import HandsOnImage from "@/assets/To Feel Again-22-01-25-54 1.png";
import styles from "./ContentSection.module.css";
import { cn } from "@/lib/utils";

export const Content = () => {
  const t = useTranslations("Content");

  return (
    <section className="w-full text-white mx-auto border-none" dir="rtl">
      {/* Hands on image */}
      <div className="w-full">
        <Image width={460} height={200} src={HandsOnImage} alt="Content" />
      </div>

      {/* Feel again section */}
      <div className="w-full text-center">
        <div className="front-image z-10">
          <h2 className="text-4xl mb-2 font-light">{t("title")}</h2>
          <p className="text-2xl mb-[60px] font-light">{t("description")}</p>

          <h3 className="text-4xl font-light">{t("journey_header")}</h3>
          <p className="text-2xl font-light">{t("journey_description1")}</p>
          <p className="text-2xl font-light">{t("journey_description2")}</p>

          <div
            className={cn(
              "min-h-[400px] overflow-hidden w-full justify-center relative",
              styles.vibeImage
            )}
          >
            <p className="text-2xl font-light relative z-10 text-center">
              {t("journey_description3")}
            </p>

            {/* Vibe image */}
            {/* <Image
              className="absolute w-full top-0 left-0 z-0"
              width={460}
              height={300}
              src={VibeImage}
              alt="Content"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
