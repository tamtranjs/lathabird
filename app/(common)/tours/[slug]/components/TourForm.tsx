"use client";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FiUser, FiUsers } from "react-icons/fi";

export default function TourForm() {
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
                aria-label="Select Date"
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

        <div className="mt-4">
          <div className="md:flex">
            <label className="md:w-1/3 font-medium">Adult:</label>
            <div className="md:w-2/3 mt-4 md:mt-0 form-icon relative">
              <FiUser className="w-4 h-4 absolute top-3 start-4" />
              <input
                type="number"
                className="w-full pl-12 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                placeholder="No. of person"
                id="Noperson"
                name="number"
              />
            </div>
          </div>

          <div className="md:flex mt-4">
            <label className="md:w-1/3 font-medium">Child:</label>
            <div className="md:w-2/3 mt-4 md:mt-0 form-icon relative">
              <FiUsers className="w-4 h-4 absolute top-3 start-4" />
              <input
                type="number"
                className="w-full pl-12 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                placeholder="No. of children"
                id="NoOfChildren"
                name="number"
              />
            </div>
          </div>

          <Button aria-label="Search Now" className="w-full mt-4">
            Search Now
          </Button>
        </div>
      </div>
    </div>
  );
}
