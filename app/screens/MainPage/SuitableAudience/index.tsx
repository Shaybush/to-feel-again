import { useTranslations } from "next-intl";
import React from "react";
import styles from "./SuitableAudience.module.css";
import Image from "next/image";
import LogoSrc2 from "@/assets/logo_vertical_v2.png";

export default function SuitableAudienceSection() {
  const t = useTranslations("SuitableAudience");

  return (
    <section className="text-[24px] font-[300]">
      <h3 className="text-[40px]">{t("title")}</h3>

      <div className="flex flex-col justify-center gap-0 mb-8 mt-2">
        <p>{t("description1")}</p>
        <p>{t("description2")}</p>
        <p>{t("description3")}</p>
      </div>

      <p>{t("tagline")}</p>

      <div className="relative flex flex-col w-full h-[400px] overflow-hidden">
        {/* Top Image */}
        <div className={styles.backgroundTop}></div>

        {/* Bottom Image */}
        <div className={styles.backgroundBottom}></div>

        {/* Wavy Line */}
        <div className="absolute flex items-center justify-center inset-0">
          <Image className="h-5/6" src={LogoSrc2} alt="logo" />
        </div>
      </div>
    </section>
  );
}
