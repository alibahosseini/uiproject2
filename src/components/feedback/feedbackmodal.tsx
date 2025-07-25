"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquareText } from "lucide-react";
export function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    console.log("نظر ثبت شد:", feedback);
    setFeedback("");
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="w-full bgbtn text-white py-5 cursor-pointer"
        variant="secondary"
      >
        ثبت بازخورد <MessageSquareText />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
            <div className="text-sm mb-4">ثبت نظر برای سفارش</div>
            <div className="text-sm mb-4">نظر شما</div>

            <textarea
              placeholder="نظر خود را وارد کنید..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full min-h-[120px] p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />

            <div className="flex justify-end gap-2 pt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="border px-4 py-2 rounded-md text-sm hover:bg-gray-100 w-full"
              >
                انصراف
              </button>
              <button
                onClick={handleSubmit}
                className="w-full bgbtn text-white px-4 py-2 rounded-md text-sm "
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
