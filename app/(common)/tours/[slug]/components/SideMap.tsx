"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SideMap() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  const onClickCalendar = (date: Date | undefined) => {
    setDate(date);
    setOpen(false);
  };

  return (
    <div className="md:col-span-5 lg:col-span-4">
      <div className="p-4 rounded-md shadow dark:shadow-gray-700 sticky top-20">
        <div className="flex flex-col">
          <label className="font-semibold">Date:</label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 start"
              >
                {date?.toLocaleDateString()}
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={onClickCalendar}
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
