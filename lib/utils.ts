import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateMonthYearList = () => {
  const monthYearList: SearchItem[] = [];
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

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

  return monthYearList;
};

export const checkIfAllDatesArePast = (datesArray: string[]) => {
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentDate = moment().format("YYYYMM");
  const isPast = (dateString: string) => {
    const [month, year] = dateString.split(" ");
    const monthIndex = monthList.indexOf(month);
    const dateNumber = Number(
      `${year}${monthIndex > 8 ? monthIndex + 1 : `0${monthIndex + 1}`}`
    );
    return Number(currentDate) > dateNumber;
  };

  return datesArray.every(isPast);
};

export const removeDuplicates = (blogs: any) => {
  const uniqueBlogs: any = [];
  const ids = new Set();

  blogs.forEach((blog: any) => {
    if (!ids.has(blog.id)) {
      ids.add(blog.id);
      uniqueBlogs.push(blog);
    }
  });

  return uniqueBlogs;
};
