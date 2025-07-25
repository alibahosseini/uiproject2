import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import { FeedbackModal } from "../feedback/feedbackmodal";
type OrderRowDetailsProps = {
  orderId: number;
};
export default function OrderRowDetails({ orderId }: OrderRowDetailsProps) {
  void orderId;
  return (
    <div className="space-y-6 text-sm dark:bg-zinc-800">
      {/* جدول کالاها */}
      <div className="p-4">
        <h3 className="font-semibold mb-2">کالاها</h3>
        <table className="w-full text-center border text-xs">
          <thead className="dark:bg-zinc-700 bg-gray-200">
            <tr>
              <th className="p-2 font-medium">نام کالا</th>
              <th className="p-2 font-medium">کد</th>
              <th className="p-2 font-medium">تعداد</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t dark:bg-zinc-600">
              <td className="p-2">باتری اوریجینال</td>
              <td className="p-2">727373</td>
              <td className="p-2">22</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* مشخصات خودرو */}
      <div className="p-4 border-t-8 ">
        <h3 className="font-semibold mb-2">مشخصات خودرو</h3>
        <table className="w-full text-center text-xs">
          <thead className="dark:bg-zinc-700 bg-gray-200">
            <tr>
              <th className="p-2 font-medium">کد خودرو</th>
              <th className="p-2 font-medium">نوع خودرو</th>
              <th className="p-2 font-medium">برند</th>
              <th className="p-2 font-medium">پلاک</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t dark:bg-zinc-600">
              <td className="p-2">15432</td>
              <td className="p-2">تریلی</td>

              <td className="p-2">
                <span className="inline-block dark:bg-zinc-700 bg-gray-200 text-gray px-3 py-1.5 rounded-full text-xs">
                  ولوو
                </span>
              </td>
              <td className="p-2">۲۱ ص ۵۸۲ ایران ۲۰</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ارتباط با راننده */}
      <div className="p-4 border-t-8 ">
        <h3 className="font-semibold mb-2">راننده</h3>
        <table className="w-full text-center  text-xs">
          <thead className="dark:bg-zinc-700 bg-gray-200">
            <tr>
              <th className="p-2 font-medium">نام راننده</th>
              <th className="p-2 font-medium">نام خانوادگی راننده</th>
              <th className="p-2 font-medium">شماره تماس</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t dark:bg-zinc-600">
              <td className="p-2">مسعود </td>
              <td className="p-2"> حسینی</td>
              <td className="p-2">
                <Link href={`tel:021123456789`}>
                  <Button
                    className=" dark:bg-zinc-700 bg-gray-200 py-5 cursor-pointer"
                    variant="secondary"
                  >
                    <Phone /> تماس با راننده
                  </Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* دکمه ثبت بازخورد */}
      <div className="p-6 w-full ordertablebtnbg">
        <FeedbackModal />
      </div>
    </div>
  );
}
