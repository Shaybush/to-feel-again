import { useTranslations } from "next-intl";
import React from "react";

export default function SuitableAudienceSection() {
  const t = useTranslations("SuitableAudience");

  return (
    <section className="text-white">
      <h2 className="text-[45px] font-light tracking-[0] leading-normal">
        {t("title")}
      </h2>

      <p className="text-[28px] font-light mt-2">{t("description")}</p>

      <div className="my-4"></div>

      <p className="text-[32px] font-light">{t("tagline")}</p>
    </section>
  );
}
