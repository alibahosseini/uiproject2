"use client";
import { Fragment } from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp, Copy } from "lucide-react";
import OrderRowDetails from "./orderdetail";

type Order = {
  id: number;
  date: string;
  amount: string;
  code: string;
  status: string;
};

const orders: Order[] = [
  {
    id: 178967,
    date: "۱۴۰۳/۰۵/۲۵",
    amount: "۱۳۰,۰۰۰ تومان",
    code: "۲۳۴۴۲۳۲",
    status: "تحویل شده",
  },
  {
    id: 178968,
    date: "۱۴۰۳/۰۵/۲۴",
    amount: "۵۷۰,۰۰۰ تومان",
    code: "۲۳۴۴۲۳۳",
    status: "در انتظار",
  },
];

export default function OrderTable({ className = "" }: { className?: string }) {
  const [openRow, setOpenRow] = useState<number | null>(null);

  const toggleRow = (id: number) => {
    setOpenRow(openRow === id ? null : id);
  };

  return (
    <div
      className={`w-full  shadow-sm overflow-hidden border dark:bg-zinc-900 ${className}`}
    >
      <table className="w-full text-sm text-right">
        <thead className="text-muted-foreground dark:bg-zinc-700 bg-gray-200">
          <tr>
            <th className="p-3">شماره سفارش</th>
            <th className="p-3">تاریخ سفارش</th>
            <th className="p-3 hidden md:table-cell">مبلغ</th>
            <th className="p-3 hidden md:table-cell">کد تحویل</th>
            <th className="p-3">وضعیت</th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <Fragment key={order.id}>
              <tr className="border-b">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3 hidden md:table-cell">{order.amount}</td>
                <td className="p-3 hidden md:table-cell">
                  <div className="flex">
                    {order.code} <Copy size={16} className="pr-1" />
                  </div>
                </td>
                <td className="p-3">
                  <span
                    className={`inline-block px-3 py-1.5 rounded-full text-xs
    ${
      order.status === "تحویل شده"
        ? "bg-green-100 text-green-800"
        : order.status === "در انتظار"
        ? "bg-yellow-100 text-yellow-800"
        : order.status === "تحویل نشده"
        ? "bg-red-100 text-red-800"
        : "bg-gray-100 text-gray-800"
    }`}
                  >
                    {" "}
                    {order.status}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <button onClick={() => toggleRow(order.id)}>
                    {openRow === order.id ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                </td>
              </tr>
              {openRow === order.id && (
                <tr>
                  <td colSpan={6} className="border-t-8">
                    {/* ارسال اطلاعات سفارش به کامپوننت جزییات */}
                    <OrderRowDetails orderId={order.id} />
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
