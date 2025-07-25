import Sidebar from "@/components/layout/sidemenu/sidemenu";
import Header from "@/components/header/header";
import OrderFilter from "@/components/filters/filtersmenu";
import OrderTable from "@/components/ordertable/ordertable";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Filter } from "lucide-react";
import Link from "next/link";

export default function OrdersPage() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="lg:hidden top-4 flex items-stretchflex items-center justify-between px-4">
        <Sheet>
          <div>
            <Link href="/">
              <img src="/logo.png" alt="لوگو" className="h-12 w-auto pt-5" />
            </Link>
          </div>
          <SheetTrigger className="p-2 rounded-md border bg-white">
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="right" className="p-0 w-64" title="menu">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:block w-64 border-l">
        <Sidebar />
      </div>

      <main className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-col lg:flex-row">
          <div className="lg:hidden px-4 py-2">
            <Sheet>
              <SheetTrigger className="inline-flex items-center gap-2 px-4 py-2 rounded-md border bg-white shadow-sm">
                <Filter className="w-5 h-5" />
                فیلتر سفارش
              </SheetTrigger>
              <SheetContent side="right" className="p-0 w-72" title="filermenu">
                <OrderFilter />
              </SheetContent>
            </Sheet>
          </div>
          <OrderFilter className="hidden lg:block w-full lg:w-[260px]" />
          <OrderTable className="flex-1" />
        </div>
      </main>
    </div>
  );
}
