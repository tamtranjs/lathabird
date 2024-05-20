import { z } from "zod";

export const TripSchema = z.object({
  fromPlaces: z.array(z.string()),
  toPlaces: z.array(z.string()),
  dates: z.array(z.string().refine(date => {
    const dateParts = date.split(' ');
    if (dateParts.length !== 2) return false;
    const [month, year] = dateParts;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.includes(month) && !isNaN(Number(year)) && year.length === 4;
  }, {
    message: "Invalid date format, expected 'Month Year'",
  })),
});