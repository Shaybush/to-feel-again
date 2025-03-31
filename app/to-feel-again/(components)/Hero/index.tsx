import { useTranslations } from "next-intl";
import React from "react";
import { cn } from "@/lib/utils";
import styles from "./Hero.module.css";
import LazyYouTube from "@/app/components/LazyYoutube";
import { Logo } from "@/app/components/ui/Logo";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <main className={`${cn("pt-[100px] font-[300]", styles.background)}`}>
      {/* Welcome heading */}
      <div className="mb-[30px]">
        <h1 className="font-['Cremona'] font-[400] text-[65px] whitespace-nowrap mb-[50px]">
          {t("welcome")}
        </h1>

        <div className="text-[30px]">
          <p className="para1 gap-2 flex flex-col leading-10 mb-[60px]">
            <span>{t("get_call")}</span>
            <span>{t("get_call_description")}</span>
          </p>

          <span>{t("new_things")}</span>
        </div>
      </div>

      {/* Middle section with screenshot */}
      <div className="mb-[140px]">
        <LazyYouTube videoId="JIViIQnZP_A" title="DJ preview video" />
      </div>

      {/* Bottom quote section */}
      <div className="mb-[30px]">
        <div className="text-[32px] mb-[60px] leading-normal">
          <p>{t("bottom_quote1")}</p>
          <p>{t("bottom_quote2")}</p>
        </div>

        <p className="text-[24px] leading-normal mb-[40px]">
          {t("bottom_quote_description")}
        </p>

        {/* Logo */}
        <div className="min-h-[251px]">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
        </div>
      </div>

      {/* Event section */}
      <h3 className="font-['Cremona'] text-[48px] font-[400] uppercase">
        {t("event_slogan")}
      </h3>
      <p className="text-[24px]">{t("event_date")}</p>
      <div className={styles.djBackground}>
        <p className="text-[24px]" dir="ltr">
          {t("event_location")}
        </p>
      </div>
    </main>
  );
};
