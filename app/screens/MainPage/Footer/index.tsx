import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import Image from "next/image";

export const Footer = () => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "איך אני יודע אם זה מתאים לי?",
      answer: "",
    },
    {
      question: "מה יש שם?",
      answer: "",
    },
    {
      question: "איזה מוסיקה מתנגנת בדבר הזה?",
      answer: "",
    },
    {
      question: "מה כולל המחיר?",
      answer: "",
    },
    {
      question: "מה לגבי אלכוהול וחבריו?",
      answer:
        "ההופעה היא חוויה רגשית עמוקה\nולכן היא ללא אלכוהול / חומרים משני תודעה,\nרוצים אתכם, כמו שאתם :)",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-[476px] mx-auto py-12">
      {/* Wow Guarantee Section */}
      <div className="w-full max-w-[450px] text-center mb-12">
        <div className="font-light text-4xl text-white text-center [direction:rtl]">
          <span className="font-light text-white text-4xl">
            אז בואו נגהץ את האשראי
            <br />
          </span>

          <span className="text-sm">
            (אנימציה של מסיבה)
            <br />
          </span>

          <span className="font-light text-white text-4xl">
            <br />
            The wow guarantee:
            <br />
          </span>

          <span className="text-base">
            <br />
            <br />
          </span>

          <span className="text-2xl">
            במידה ואחרי ההופעה לא תגידו
            <br />
            ״מה היה פה עכשיו״
            <br />
            ותנסו לספר לכולם מה עברתם
            <br />
            (הם לא יבינו..)
            <br />
            הכרטיס עלינו
            <br />
            <br />
          </span>

          <span className="text-sm">
            הבקשה להחזר תקפה מרגע תחילת ההופעה ועד 12 שעות לאחר סיומה. לא ניתן
            לקבל החזר לפני ההופעה או לאחר שחלפו 12 שעות מסיומה.
            <br />
          </span>

          <span className="text-2xl">
            <br />
            <br />
            <br />
          </span>
        </div>

        {/* Logo */}
        <div className="flex justify-center my-6">
          <Image
            className="w-[145px] h-[33px]"
            alt="Logo soul shape"
            src="https://c.animaapp.com/eLObDMFN/img/logo---soul-shape-2@2x.png"
            width={145}
            height={33}
          />
        </div>

        {/* Registration Button */}
        <div className="flex justify-center my-8">
          <Button className="w-[289px] h-[61px] bg-[#b7f1ff9e] rounded-[30px] border border-solid border-white text-white text-2xl hover:bg-[#b7f1ffcc]">
            <span className="[direction:rtl]">It&apos;s time to להירשם</span>
          </Button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-[460px] mt-8">
        <h2 className="font-normal text-[32px] text-white text-center mb-6 font-['Alata',Helvetica]">
          FAQs
        </h2>

        <Accordion type="single" collapsible className="w-full text-right">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none"
            >
              <AccordionTrigger className="py-4 text-white text-[22px] font-light font-['Heebo',Helvetica] [direction:rtl] hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-white text-[22px] font-light font-['Heebo',Helvetica] [direction:rtl]">
                {item.answer}
              </AccordionContent>
              <Separator className="w-[334px] mx-auto" />
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional text about the experience */}
        <div className="text-white text-[22px] font-light font-['Heebo',Helvetica] text-center mt-8 [direction:rtl]">
          <span className="leading-9">
            <br />
          </span>
        </div>

        {/* Second Registration Button */}
        <div className="flex justify-center mt-12 mb-8">
          <Button className="w-[289px] h-[61px] bg-[#b7f1ff9e] rounded-[30px] border border-solid border-white text-white text-2xl hover:bg-[#b7f1ffcc]">
            <span className="[direction:rtl]">It&apos;s time to להירשם</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
