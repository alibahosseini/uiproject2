import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl max-w-md text-center space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          به پنل مدیریت خوش آمدید
        </h1>
        <p className="text-muted-foreground text-sm">
          برای مدیریت سفارش‌ها وارد داشبورد شوید.
        </p>
        <Link href="/order">
          <Button className="w-full">ورود به داشبورد</Button>
        </Link>
      </div>
    </div>
  );
}
