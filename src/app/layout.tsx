import "@/styles/tailwind.css";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import data from "@/data/globalData.json";

import { Roboto, Roboto_Slab } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
  subsets: ["latin"],
});
const robotoSlab = Roboto_Slab({
  weight: ["300", "400", "800"],
  display: "swap",
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

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
    <html lang="en" className={`${roboto.variable} ${robotoSlab.variable}`}>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/rnp7shh.css"
        ></link>
      </head>
      {typeof gtmId === "string" && <GoogleTagManager gtmId={gtmId} />}
      <body>{children}</body>
    </html>
  );
}
