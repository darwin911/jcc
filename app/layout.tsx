import React from "react";
import "./globals.css";
import clsx from "clsx";
import { Lato } from "next/font/google";
import MainNav from "@/components/main-nav";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "bg-gradient-to-br from-green-400 to-cyan-500 bg-no-repeat",
          lato.className
        )}
      >
        <MainNav />

        {children}
      </body>
    </html>
  );
}
