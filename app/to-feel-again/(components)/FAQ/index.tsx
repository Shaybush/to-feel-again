import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { CallToActionButton } from '@/app/components/ui/CallToActionButton';
import { Separator } from '@/app/to-feel-again/Separator';
import { useTranslations } from 'next-intl';
import { FAQType } from './types';

export const FAQ = () => {
  const t = useTranslations('FAQ');
  const faqItems = t.raw('items') as FAQType[];

  return (
    <section className="mb-[100px]">
      {/* FAQ Section */}
      <h2 className="font-normal text-[32px] mb-6 font-['Alata',Helvetica]">FAQs</h2>

      <Accordion type="single" collapsible className="w-5/6 mx-auto mb-6 font-[200]">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-none">
            {/* question */}
            <AccordionTrigger className="text-[22px] hover:no-underline">{item.question}</AccordionTrigger>

            {/* hr */}
            <Separator className="mx-auto mb-4" />

            {/* answer */}
            <AccordionContent className="text-[18px] font-[300] whitespace-pre-line">
              {item.answer}
              {item?.bullets?.length ? (
                <div className="text-right rtl">
                  <ul className="list-disc pr-5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet.id} className="text-start leading-relaxed">
                        {bullet.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <CallToActionButton isUseConfettie={true} />
    </section>
  );
};
