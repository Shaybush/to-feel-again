import { Footer } from "@/app/components/ui/Footer";
import { OrderCompleted } from "./OrderCompleted";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "To Feel Again - Approved",
  description: "Approved page after payment",
};

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
