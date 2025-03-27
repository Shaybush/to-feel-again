import { CallToActionButton } from "@/app/components/ui/CallToActionButton";
import { useTranslations } from "next-intl";

export const CallToAction = () => {
  const t = useTranslations("CallToAction");

  return (
    <section className="text-center flex flex-col items-center justify-center py-20 gap-6">
      <h3 className="text-[40px]">{t("header")}</h3>

      <CallToActionButton isUseConfettie={true} />
    </section>
  );
};
