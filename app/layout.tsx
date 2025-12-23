import type { Metadata } from "next";
import {  Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/component/Home/NavBar/ResponsiveNav";

const font = Roboto({
  weight:["100","200","300","400","500","700","900"],
  subsets: ["latin"],
  variable: "--font-roboto",

})

export const metadata: Metadata = {
  title: "Language School - Learn Languages with Professionals",
  description: "Language School is a modern language learning platform offering English and other foreign language courses for students of all levels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased h-[1000vh]`}
      >
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
