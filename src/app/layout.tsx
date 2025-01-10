import "@/styles/tailwind.css";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import data from "@/data/globalData.json";


interface Partner {
  name: string;
  description?: string;
  gtmId?: string;
}

const { name, description, gtmId } = data.partner as Partner;

export const metadata: Metadata = {
  title: name,
  description:
    typeof description === "string" ? description : "Default description",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://use.typekit.net" />
      <link rel="stylesheet" href="https://use.typekit.net/mdm0bxw.css" />
      </head>
      {typeof gtmId === "string" && <GoogleTagManager gtmId={gtmId} />}
      <body>{children}</body>
    </html>
  );
}
