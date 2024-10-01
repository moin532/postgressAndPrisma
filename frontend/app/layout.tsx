"use client"; // Ensure the component runs on the client side

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import { Provider } from "react-redux";
import { store } from "./redux/store"; // Import your Redux store

// Custom fonts
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// // Metadata (optional)
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
