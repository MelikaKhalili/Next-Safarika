import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
const vazir = localFont({
  src: [
    {
      path: "../../public/fonts/Vazirmatn-VariableFont_wght.ttf",
      weight: "400",
    },
  ],
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "Safarika",
  description: "سفریکا",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa">
      <body className={`antialiased ${vazir.className} `}>
        <ChakraProvider>
          <CSSReset />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
