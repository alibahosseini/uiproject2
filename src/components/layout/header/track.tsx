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
     
      </Button>
    </div>
  );
}
