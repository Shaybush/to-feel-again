import React from "react";
import { useTranslations } from "next-intl";
import styles from "./ContentSection.module.css";

export const Content = () => {
  const t = useTranslations("Content");

  return (
    <section className="text-[24px] font-[300]">
      {/* Feel again section */}
      <h2 className="text-[40px]">{t("title")}</h2>
      <p className="mb-[70px]">{t("description")}</p>

      <h3>{t("journey_header")}</h3>
      <p>{t("journey_description1")}</p>
      <p>{t("journey_description2")}</p>

      <div className={styles.vibeImage}>
        <p>{t("journey_description3")}</p>
      </div>
    </section>
  );
};
