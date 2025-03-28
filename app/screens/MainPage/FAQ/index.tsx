import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Separator } from "../../../components/ui/separator";
import { CallToActionButton } from "@/app/components/ui/CallToActionButton";
import { useTranslations } from "next-intl";

export const FAQ = () => {
  const t = useTranslations("FAQ");
  const faqItems = t.raw("items") as { question: string; answer: string }[];

  return (
    <footer className="mb-6">
      {/* FAQ Section */}
      <h2 className="font-normal text-[32px] mb-6 font-['Alata',Helvetica]">
        FAQs
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-5/6 mx-auto mb-6 font-[200]"
      >
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-none"
          >
            {/* question */}
            <AccordionTrigger className="text-[24px] hover:no-underline">
              {item.question}
            </AccordionTrigger>

            {/* hr */}
            <Separator className="mx-auto mb-4" />

            {/* answer */}
            <AccordionContent className="text-[18px] whitespace-pre-line">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <CallToActionButton isUseConfettie={true} />
    </footer>
  );
};
