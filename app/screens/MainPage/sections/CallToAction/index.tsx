import { Card, CardContent } from "../../../../components/ui/card";

export const CallToAction = () => {
  const content = {
    title: "למי זה מתאים?",
    description:
      "אנחנו פרקטים, To Feel Again מתעסקת בחיבור לשקט הפנימי שלי בתוך כל הרעש",
    tagline: "חופשי להיות אני",
  };

  return (
    <Card className="w-full max-w-[408px] mx-auto font-['Heebo',Helvetica] text-white bg-transparent border-none">
      <CardContent className="p-6 text-center [direction:rtl]">
        <h2 className="text-[45px] font-light tracking-[0] leading-normal">
          {content.title}
        </h2>

        <p className="text-[28px] font-light mt-2">{content.description}</p>

        <div className="my-4"></div>

        <p className="text-[32px] font-light">{content.tagline}</p>
      </CardContent>
    </Card>
  );
};
