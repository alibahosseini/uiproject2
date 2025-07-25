"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; 
import { PackageSearch } from "lucide-react";

const menuItems = [
  { label: "پیگیری سفارشات", href: "/orders", icon: PackageSearch },

];

export default function Sidebar({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside
      className={`w-64  border-l h-screen flex flex-col justify-between p-4 shadow-sm ${className}`}
    >
    
      <div className="mb-8">
        <Link href="/" className="flex items-center justify-start">
          <img src="logo.png" alt="لوگو" className="h-12 w-auto" />
        </Link>
      </div>

    
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


      <div className="text-xs text-muted-foreground text-center mt-8">
        نسخه 1.0.0
      </div>
    </aside>
  );
}
