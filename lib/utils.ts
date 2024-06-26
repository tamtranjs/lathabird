import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateMonthYearList = () => {
  const monthYearList: SearchItem[] = []
  const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  // get 12 months from current month
  for (let i = 0; i <= 12; i++) {
    const month = currentMonth + i;
    const year = currentYear + Math.floor(month / 12);
    const monthIndex = month % 12;

    monthYearList.push({
      type: `monthYear`,
      name: `${monthList[monthIndex]} ${year}`,
    });
  }
  
  return monthYearList
}