import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expenses",
  description: "Manage your expenses and get a quick overview of your spendings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "text-gray-700 antialiased px-12 py-6 text-sm")}>{children}</body>
    </html>
  );
}
