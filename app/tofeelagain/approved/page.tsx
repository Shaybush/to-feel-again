import { Footer } from "@/app/components/ui/Footer";
import { OrderCompleted } from "./OrderCompleted";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "To Feel Again - Approved",
  description: "To Feel Again - Approved page after payment",
  url: "https://iam-soul.com/tofeelagain",
  image: "https://i.ibb.co/v6TNqsR8/logo-vertical-v1.png",
});

export default function Approved() {
  return (
    <div className="flex flex-col items-center w-full t-[24px] text-center font-['Heebo',Helvetica] font-[300]">
      <div className="bg-[#020202] text-white w-full max-w-[460px] overflow-hidden">
        <OrderCompleted />
        <Footer />
      </div>
    </div>
  );
}
