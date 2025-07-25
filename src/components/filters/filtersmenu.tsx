"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function OrderFilterPanel({
  className = "",
}: {
  className?: string;
}) {
  return (
    <aside
      className={`w-[260px] hvhh  border-l p-4 flex flex-col justify-between shadow-sm overflow-y-auto ${className}`}
    >
      {/* بالا: عنوان و فیلترها */}
      <div className="space-y-6">
        <h2 className="text-base font-semibold text-gray-800 dark:text-white">
          فیلترها
        </h2>

        <Accordion type="multiple" className="space-y-2">
          {/* تاریخ */}
          <AccordionItem value="date">
            <AccordionTrigger className="text-sm">
              بر اساس تاریخ و ساعت
            </AccordionTrigger>
            <AccordionContent className="space-y-2 pt-2">
              <Input placeholder="از تاریخ - ۱۴۰۳/۰۵/۱۴" />
              <Input placeholder="تا تاریخ - ۱۴۰۳/۰۵/۲۰" />
            </AccordionContent>
          </AccordionItem>

          {/* شماره سفارش */}
          <AccordionItem value="order-id">
            <AccordionTrigger className="text-sm">
              بر اساس شماره سفارش
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <Input placeholder="مثلاً 178967" />
            </AccordionContent>
          </AccordionItem>

          {/* مبلغ */}
          <AccordionItem value="price">
            <AccordionTrigger className="text-sm">
              بر اساس مبلغ
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <Input placeholder="مثلاً بالای ۵۰۰ هزار تومان" />
            </AccordionContent>
          </AccordionItem>

          {/* وضعیت سفارش */}
          <AccordionItem value="status">
            <AccordionTrigger className="text-sm">
              بر اساس وضعیت سفارش
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <Input placeholder="تحویل شده / لغو شده ..." />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* پایین: دکمه‌ها */}
      <div className="flex justify-between gap-2 pt-4 mt-6 absolute bottom-0">
        <Button variant="outline" className="flex-1 text-xs ">
          حذف فیلترها
        </Button>
        <Button className="bgbtn flex-1 text-xs text-white">
          اعمال فیلترها
        </Button>
      </div>
    </aside>
  );
}
