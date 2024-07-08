import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
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
      <body className={cn("bg-background text-[#161c2d]",  montserrat.className)}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
