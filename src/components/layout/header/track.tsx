import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TrackOrderBanner() {
  return (
    <div className="bg-blue-50 border border-blue-200 p-4 flex items-center justify-between shadow-sm">
     
      <Button
        variant="outline"
        size="sm"
        className=" bg-blue-300 text-white hover:bg-blue-100"
      >
        پیگیری سفارشات
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
