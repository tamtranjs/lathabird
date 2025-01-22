import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin", "vietnamese"],
});

export const metadata = {
  title: "Lathabird",
  description: "Lathabird",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background text-[#161c2d]", roboto.className)}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
