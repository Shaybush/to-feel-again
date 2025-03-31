import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import styles from "./OrderCompleted.module.css";
import LogoHorizontal from "@/assets/logo_horizontal.png";
import Image from "next/image";
import { ConfettiClientOnly } from "@/app/components/ConfettiClientOnly";

export const OrderCompleted = () => {
  const t = useTranslations("OrderCompleted");

  return (
    <section
      className={cn(
        "pt-20 mb-[100px] text-[24px] gap-6",
        styles.orderCompleted
      )}
    >
      <h3 className="text-[36px] mb-[50px]">{t("header")}</h3>

      <h4 className="text-[28px]">{t("wisdomQuote")}</h4>
      {/* Logo */}
      <Image
        className="mx-auto py-4"
        src={LogoHorizontal}
        alt="logo horizontal"
      />

      <p className="mb-[50px]">{t("whatNow")}</p>

      <p>{t("mailMessage")}</p>
      <p className="mb-[20px]">{t("surprise")}</p>

      <p>{t("failMessage")}</p>
      <p>{t("failMessage2")}</p>
      <p>{t("someOneFire")}</p>

      <ConfettiClientOnly triggerOnMount={true} />
    </section>
  );
};
