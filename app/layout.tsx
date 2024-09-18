import type { Metadata } from "next";
import { poppins } from "./ui/font";

import "./globals.css";

export const metadata: Metadata = {
  title: "Assessment Portfolio",
  description: "Official site for the assessment portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
