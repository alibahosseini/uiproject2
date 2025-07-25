"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // از shadcn برای مدیریت کلاس‌ها
import { PackageSearch } from "lucide-react";

const menuItems = [
  { label: "پیگیری سفارشات", href: "/orders", icon: PackageSearch },
  // اینجا می‌تونی منوهای بیشتری اضافه کنی
];

export default function Sidebar({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside
      className={`w-64  border-l h-screen flex flex-col justify-between p-4 shadow-sm ${className}`}
    >
      {/* لوگو */}
      <div className="mb-8">
        <Link href="/" className="flex items-center justify-center">
          <img src="/logo.png" alt="لوگو" className="h-12 w-auto" />
        </Link>
      </div>

      {/* منوی اصلی */}
      <nav className="flex-1 space-y-2">
        {menuItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted transition",
              pathname === href
                ? "bg-muted font-bold text-primary"
                : "text-muted-foreground"
            )}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      {/* نسخه یا اطلاعات پایین */}
      <div className="text-xs text-muted-foreground text-center mt-8">
        نسخه 1.0.0
      </div>
    </aside>
  );
}
