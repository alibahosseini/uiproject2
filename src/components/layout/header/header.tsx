"use client";

import { Bell, MessageSquare, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/themes/button";
export default function Header() {
  return (
    <header className="flex  items-center justify-between   px-4 py-2 border-b">
      {/* سمت راست: آیکن‌ها و ساعت */}
      <div className="items-center gap-3 hidden md:flex">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>م د</AvatarFallback>
        </Avatar>
        <div className="text-sm text-right">
          <div className="font-medium">مهدی دارابی</div>
          <div className="text-muted-foreground text-xs">09121234567</div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 w-full md:w-1/3 py-2">
        <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">
          <Clock className="w-4 h-4" />
          ۱۲:۳۲ | دوشنبه ۲۵ اسفند
        </div>
        <div className="px-3 py-1 text-sm bg-muted rounded-full border text-muted-foreground hidden md:flex">
          آخرین لاگین: ۲۰ ساعت قبل
        </div>
        <div className="flex gap-2">
          <IconButton icon={<MessageSquare className="w-5 h-5" />} />
          <IconButton icon={<Bell className="w-5 h-5" />} />
          <ModeToggle />
        </div>
      </div>

      {/* سمت چپ: اطلاعات کاربر */}
    </header>
  );
}

// کامپوننت آیکن با استایل دکمه‌ای گرد
function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <Button variant="ghost" size="icon" className="rounded-xl border">
      {icon}
    </Button>
  );
}
