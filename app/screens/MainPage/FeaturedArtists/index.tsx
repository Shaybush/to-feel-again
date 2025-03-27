import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Card, CardContent } from "../../../components/ui/card";

export const FeaturedArtists = () => {
  // FAQ data structure for easier maintenance
  const faqItems = [
    {
      question: "איך אני יודע אם זה מתאים לי?",
      answer: [
        "אנחנו חיים באמונה שדומה מושך דומה",
        "ככה שלא סתם הגעת לפה",
        "כמו החיים, אי אפשר לדעת",
        "עד שלא קופצים למים.",
        "לכן יש החזר כספי, אז אי אפשר לטעות :)",
      ],
      note: "נ.ב - הכלל שלי הוא, אם זה מלחיץ אותי, אז אני עושה את זה",
    },
    {
      question: "מה יש שם?",
      answer: [
        "אנחנו הולכים לזמן מיליון דולר סתם לא.",
        "מסתוריות זה חלק מהקטע, אבל אני מכיר אותך..",
        "גם אני אוהב לדעת לאיפה אני מגיע,",
        "לכן הסרטון - השקענו בו וחוץ מזה, מישהו מאוד מגניב (וחתיך) בנה אותה",
        "(ומאוד מאוד פדנט)",
      ],
    },
    {
      question: "איזה מוסיקה מתנגנת בדבר הזה?",
      answer: [
        "מבוסס על Mainstream ו-EDM אבל אנחנו",
        "זורמים בין סגנונות שונים כדי לקחת אותך למקום הנכון ברגע הנכון",
      ],
    },
    {
      question: "מה כולל המחיר?",
      answer: [
        "המחיר כולל הכל - שתיה, אוכל וכל שאר ההפתעות",
        "רוצים אתכם עם ראש שקט",
      ],
    },
    {
      question: "מה לגבי אלכוהול וחבריו?",
      answer: [
        "ההופעה היא חוויה רגשית עמוקה",
        "ולכן היא ללא אלכוהול / חומרים משני תודעה,",
        "רוצים אתכם, כמו שאתם :)",
      ],
    },
  ];

  return (
    <section className="w-full max-w-[460px] mx-auto [font-family:'Heebo',Helvetica] font-light text-white text-center tracking-[0] leading-[normal] [direction:rtl]">
      <Card className="bg-transparent border-none">
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-0"
              >
                <AccordionTrigger className="text-[32px] py-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-2xl">
                  {item.answer.map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                  {item.note && (
                    <p className="text-xl mt-4">
                      <br />
                      {item.note}
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};
