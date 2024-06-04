import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const clashDisplay = localFont({
  src: "../../public/font/ClashDisplay-Variable.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uifry - Financial Solutions ",
  description: "Make The Best Financial Decesions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clashDisplay.className}>{children}</body>
    </html>
  );
}
