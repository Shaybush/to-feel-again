import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <main
      className={`${cn(
        "pt-[100px] w-full text-center font-['Heebo',Helvetica] font-[300]",
        styles.background
      )}`}
    >
      {/* Welcome heading */}
      <div className="w-full mb-[30px]">
        <h1 className="font-['Cremona'] font-[400] text-[65px] whitespace-nowrap mb-[50px]">
          {t("welcome")}
        </h1>

        <div className=" text-[30px]">
          <p className="para1 gap-2 flex flex-col leading-10 mb-[60px]">
            <span>{t("get_call")}</span>
            <span>{t("get_call_description")}</span>
          </p>

          <span>{t("new_things")}</span>
        </div>
      </div>

      {/* Middle section with screenshot */}
      {/* TODO - should replace with video */}
      <div className="px-2 mb-[140px]">
        <Image
          width={0}
          height={200}
          className="object-cover w-full"
          alt="Screenshot"
          src="https://c.animaapp.com/eLObDMFN/img/screenshot-2025-03-08-at-17-41-01-1@2x.png"
        />
      </div>

      {/* Bottom quote section */}
      <div className="mb-[30px]">
        <p className="text-[32px] mb-[60px] leading-normal">
          <p>"{t("bottom_quote1")}</p>
          <p>{t("bottom_quote2")}"</p>
        </p>

        <p className="text-[24px] leading-normal mb-[40px]">
          {t("bottom_quote_description")}
        </p>

        {/* Logo */}
        <div className="min-h-[216px]">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
        </div>
      </div>

      {/* Event section */}
      <div className="w-full [direction:ltr]">
        <div className="flex flex-col items-center justify-center">
          <h3
            className={cn(
              "font-['Cremona'] text-[55px] font-[400] uppercase",
              styles.djBackground
            )}
          >
            {t("event_slogan")}
          </h3>
        </div>
      </div>
    </main>
  );
};
